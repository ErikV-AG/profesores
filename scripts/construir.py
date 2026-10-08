#!/usr/bin/env python3
"""Valida agentes.json y construye el sitio publicado en _site/.

Uso:
    python3 scripts/construir.py             valida y genera _site/
    python3 scripts/construir.py --validar   solo valida
    python3 scripts/construir.py --prueba    valida y genera prueba/ con
                                             tres agentes (prueba en el
                                             dominio publicado)

Variables de entorno:
    COMPARAR_CON       referencia de git contra la que se buscan agentes
                       borrados (por defecto HEAD).
    PERMITIR_BORRAR=1  un agente borrado solo genera un aviso.
    IDS_PUBLICADOS_URL dirección de ids-publicados.json del sitio en línea.
                       En GitHub Actions se descarga siempre (por defecto
                       la del sitio publicado); fuera de Actions, solo si
                       se define esta variable.

Solo usa la biblioteca estándar de Python 3.
"""

import argparse
import hashlib
import html
import json
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
LISTA = RAIZ / 'agentes.json'
SRC = RAIZ / 'src'
SALIDA = RAIZ / '_site'
CARPETA_PRUEBA = RAIZ / 'prueba'
URLS_PUBLICADAS = RAIZ / 'scripts' / 'urls_publicadas.txt'

URL_BASE = 'https://erikv-ag.github.io/profesores/'
URL_IDS_PUBLICADOS = URL_BASE + 'ids-publicados.json'

# Se copian tal cual al sitio, sin modificarlos.
COPIAS_TAL_CUAL = ['benito.html', 'content']

# Agentes que genera --prueba.
AGENTES_PRUEBA = ['tecnologia_transformacion_alan', 'calculo_alan', 'fisica_curie']

# Nombres que ya usa el sitio: un agente con alguno de estos ids
# chocaría con un archivo existente.
IDS_RESERVADOS = {'benito', 'lista', '404', 'index', 'agente'}

CAMPOS = ('nombre', 'did_agent_id', 'did_client_key', 'elevenlabs_agent_id')
PATRON_ID = re.compile(r'^[A-Za-z0-9_-]+$')
PATRON_RESTO = re.compile(r'^[A-Za-z0-9_-]+$')

EN_ACTIONS = os.environ.get('GITHUB_ACTIONS') == 'true'


# ----------------------------------------------------------------------
# Mensajes
# ----------------------------------------------------------------------

class Registro:
    """Junta errores y avisos. En GitHub Actions los imprime como
    anotaciones (::error / ::warning) para que se vean en el resumen de la
    ejecución y en el PR, con la línea de agentes.json cuando se conoce."""

    def __init__(self):
        self.errores = 0
        self.avisos = 0

    @staticmethod
    def _escapar(texto):
        return texto.replace('%', '%25').replace('\r', '%0D').replace('\n', '%0A')

    def _emitir(self, tipo, mensaje, archivo, linea, columna):
        if EN_ACTIONS:
            partes = []
            if archivo:
                partes.append('file=' + archivo)
            if linea:
                partes.append('line=%d' % linea)
            if columna:
                partes.append('col=%d' % columna)
            propiedades = (' ' + ','.join(partes)) if partes else ''
            print('::%s%s::%s' % (tipo, propiedades, self._escapar(mensaje)), flush=True)
        else:
            etiqueta = 'ERROR' if tipo == 'error' else 'AVISO'
            lugar = ''
            if archivo and linea:
                lugar = ' (%s, línea %d)' % (archivo, linea)
            print('%s%s: %s' % (etiqueta, lugar, mensaje), file=sys.stderr, flush=True)

    def error(self, mensaje, archivo=None, linea=None, columna=None):
        self.errores += 1
        self._emitir('error', mensaje, archivo, linea, columna)

    def aviso(self, mensaje, archivo=None, linea=None, columna=None):
        self.avisos += 1
        self._emitir('warning', mensaje, archivo, linea, columna)


def info(mensaje):
    print(mensaje, flush=True)


# ----------------------------------------------------------------------
# Lectura de agentes.json
# ----------------------------------------------------------------------

class Objeto(dict):
    """dict que recuerda las llaves repetidas. json se queda con la última
    en silencio, y el agente anterior desaparecería sin que nadie lo note."""
    repetidas = ()


def _juntar(pares):
    obj = Objeto()
    repetidas = []
    for llave, valor in pares:
        if llave in obj:
            repetidas.append(llave)
        obj[llave] = valor
    obj.repetidas = repetidas
    return obj


# Traducción de los mensajes de error más comunes del módulo json.
MENSAJES_JSON = [
    ("Expecting ',' delimiter",
     "falta una coma. Revisa el final de la línea anterior: cada agente, y cada campo dentro de un agente, va separado del siguiente por una coma"),
    ('Expecting property name enclosed in double quotes',
     'se esperaba un nombre entre comillas dobles. ¿Hay una coma de más antes de } o se usaron comillas simples?'),
    ("Expecting ':' delimiter", 'faltan los dos puntos (:) entre el nombre del campo y su valor'),
    ('Expecting value', 'falta un valor. ¿Hay una coma de más, o falta una comilla o una llave?'),
    ('Unterminated string starting at', 'hay un texto sin comilla de cierre'),
    ('Invalid control character at', 'hay un salto de línea o tabulador dentro de un texto entre comillas'),
    ('Illegal trailing comma before end of object', 'hay una coma de más antes de la llave }'),
    ('Illegal trailing comma before end of array', 'hay una coma de más antes del corchete ]'),
    ('Extra data', 'hay texto de más después de la llave } final'),
    ('Invalid \\escape', 'hay una diagonal invertida (\\) que no es válida'),
]


def traducir_error_json(msg):
    for en, es in MENSAJES_JSON:
        if msg.startswith(en):
            return es
    return msg


def linea_de_id(texto, ident, ocurrencia=1):
    """Línea (1 en adelante) donde se abre el agente `ident` en el texto."""
    patron = re.compile(r'"%s"\s*:\s*\{' % re.escape(ident))
    for i, m in enumerate(patron.finditer(texto), start=1):
        if i == ocurrencia:
            return texto.count('\n', 0, m.start()) + 1
    return None


def leer_lista(reg):
    """Devuelve (agentes, texto) o (None, texto) si no se pudo leer."""
    nombre = 'agentes.json'
    if not LISTA.is_file():
        reg.error('no existe %s en la raíz del repositorio' % nombre)
        return None, ''
    try:
        texto = LISTA.read_text(encoding='utf-8-sig')
    except UnicodeDecodeError as e:
        reg.error('%s no está guardado en UTF-8 (%s)' % (nombre, e), nombre)
        return None, ''
    try:
        datos = json.loads(texto, object_pairs_hook=_juntar)
    except json.JSONDecodeError as e:
        renglon = texto.splitlines()[e.lineno - 1] if 0 < e.lineno <= len(texto.splitlines()) else ''
        detalle = '%s no es JSON válido en la línea %d, columna %d: %s.' % (
            nombre, e.lineno, e.colno, traducir_error_json(e.msg))
        if renglon and not EN_ACTIONS:
            detalle += '\n    %s\n    %s^' % (renglon, ' ' * (e.colno - 1))
        reg.error(detalle, nombre, e.lineno, e.colno)
        return None, texto
    if not isinstance(datos, dict):
        reg.error('%s debe ser un objeto { ... } con un agente por llave' % nombre, nombre, 1)
        return None, texto
    return datos, texto


# ----------------------------------------------------------------------
# Validación
# ----------------------------------------------------------------------

def validar_entradas(reg, agentes, texto):
    nombre = 'agentes.json'

    for ident in agentes.repetidas:
        reg.error('el id "%s" está repetido: json solo conservaría el último y el agente anterior '
                  'desaparecería del sitio. Cambia el id de uno de los dos.' % ident,
                  nombre, linea_de_id(texto, ident, 2))

    if not agentes:
        reg.error('%s no tiene ningún agente' % nombre, nombre, 1)

    vistos_minusculas = {}
    for ident, entrada in agentes.items():
        linea = linea_de_id(texto, ident)
        quien = 'agente "%s"' % ident

        if not PATRON_ID.match(ident):
            reg.error('%s: el id solo puede tener letras sin acento, números, _ y - '
                      '(es el nombre del archivo .html)' % quien, nombre, linea)
        if ident.lower() in IDS_RESERVADOS:
            reg.error('%s: "%s" es un nombre reservado del sitio; usa otro id' % (quien, ident),
                      nombre, linea)
        otro = vistos_minusculas.get(ident.lower())
        if otro is not None and otro != ident:
            reg.aviso('%s: solo difiere en mayúsculas de "%s"; en Windows y Mac chocarían' % (quien, otro),
                      nombre, linea)
        vistos_minusculas[ident.lower()] = ident

        if not isinstance(entrada, dict):
            reg.error('%s: debe ser un objeto { ... } con sus campos' % quien, nombre, linea)
            continue

        for campo in entrada.repetidas:
            reg.error('%s: el campo "%s" está repetido' % (quien, campo), nombre, linea)

        for campo in entrada:
            if campo not in CAMPOS:
                reg.aviso('%s: campo desconocido "%s" (se ignora). ¿Error de dedo? Los campos válidos '
                          'son: %s' % (quien, campo, ', '.join(CAMPOS)), nombre, linea)

        for campo in CAMPOS:
            if campo in entrada and not isinstance(entrada[campo], str):
                reg.error('%s: "%s" debe ir entre comillas' % (quien, campo), nombre, linea)

        def revisar(campo, prefijo, obligatorio):
            valor = entrada.get(campo)
            if not isinstance(valor, str):
                if valor is None and obligatorio:
                    reg.error('%s: falta "%s"' % (quien, campo), nombre, linea)
                return
            if valor == '':
                if obligatorio:
                    reg.error('%s: "%s" está vacío' % (quien, campo), nombre, linea)
                return
            if not valor.startswith(prefijo):
                reg.error('%s: "%s" debe empezar con %s (tiene "%s")' % (quien, campo, prefijo, valor),
                          nombre, linea)
            elif not PATRON_RESTO.match(valor[len(prefijo):]):
                reg.error('%s: "%s" tiene caracteres no válidos (¿espacios o comillas al copiarlo?): "%s"'
                          % (quien, campo, valor), nombre, linea)

        revisar('did_agent_id', 'v2_agt_', True)
        revisar('did_client_key', 'ck_', True)
        revisar('elevenlabs_agent_id', 'agent_', False)

        if not isinstance(entrada.get('nombre'), str) or not entrada.get('nombre', '').strip():
            reg.aviso('%s: no tiene "nombre"; en la página y en lista.html se mostrará el id' % quien,
                      nombre, linea)


def leer_urls_publicadas(reg):
    if not URLS_PUBLICADAS.is_file():
        reg.error('no existe scripts/urls_publicadas.txt')
        return []
    urls = []
    for renglon in URLS_PUBLICADAS.read_text(encoding='utf-8').splitlines():
        renglon = renglon.strip()
        if renglon and not renglon.startswith('#'):
            urls.append(renglon)
    return urls


# Páginas que genera la construcción: un .html suelto en la raíz con
# alguno de estos nombres chocaría con ellas.
PAGINAS_GENERADAS = {'lista.html', '404.html'}


def html_sueltos():
    """Páginas .html subidas directo a la raíz, como se hacía antes de la
    migración (sin pasar por agentes.json). Se publican tal cual."""
    tal_cual = {c for c in COPIAS_TAL_CUAL if c.endswith('.html')}
    return sorted((p.name for p in RAIZ.glob('*.html') if p.is_file() and p.name not in tal_cual),
                  key=str.lower)


def validar_html_sueltos(reg, agentes):
    """Un .html suelto no bloquea la publicación (se copia tal cual con un
    aviso), salvo que su nombre choque con una página generada."""
    for nombre in html_sueltos():
        ident = nombre[:-5]
        if ident in agentes:
            reg.error('%s está en la raíz y "%s" también está en agentes.json: las dos páginas tendrían la '
                      'misma URL. Borra el archivo; la página ya sale de agentes.json.' % (nombre, ident), nombre)
        elif nombre in PAGINAS_GENERADAS:
            reg.error('%s está en la raíz y choca con la página %s que genera la construcción. '
                      'Cámbiale el nombre o bórralo.' % (nombre, nombre), nombre)
        else:
            reg.aviso('%s se publicó sin pasar por agentes.json: no tiene compuerta a ElevenLabs ni la '
                      'traducción nueva. Agrégalo a la lista y borra el archivo' % nombre, nombre)


def validar_urls_publicadas(reg, agentes):
    """Cada página que existía al migrar sigue existiendo: hay iframes en
    cursos de Rise ya publicados que apuntan a ella."""
    disponibles = ({ident + '.html' for ident in agentes} | {c for c in COPIAS_TAL_CUAL if c.endswith('.html')}
                   | set(html_sueltos()))
    for url in leer_urls_publicadas(reg):
        if url not in disponibles:
            reg.error('%s está publicada en cursos de Rise y ya no saldría en el sitio: falta el agente "%s" '
                      'en agentes.json. Las URLs publicadas no pueden desaparecer (scripts/urls_publicadas.txt).'
                      % (url, url[:-5] if url.endswith('.html') else url), 'agentes.json')


def ids_borrados(reg, agentes, previos, origen, texto_mensaje):
    permitir = os.environ.get('PERMITIR_BORRAR') == '1'
    for ident in sorted(previos):
        if ident in agentes:
            continue
        mensaje = ('el agente "%s" estaba en %s y ya no está en agentes.json. Puede haber iframes en cursos '
                   'de Rise que apunten a él.' % (ident, origen))
        if permitir:
            reg.aviso(mensaje + ' Se permite porque PERMITIR_BORRAR=1.', 'agentes.json')
        else:
            reg.error(mensaje + ' ' + texto_mensaje, 'agentes.json')


AYUDA_BORRAR = ('Si de verdad quieres borrarlo, ve a Actions → Publicar → Run workflow y marca '
                '«permitir borrar» (o define PERMITIR_BORRAR=1 en local).')


def comparar_con_git(reg, agentes, texto):
    """Busca agentes borrados y cambios de agent id o key contra la versión
    de agentes.json en la referencia COMPARAR_CON."""
    explicita = 'COMPARAR_CON' in os.environ
    ref = os.environ.get('COMPARAR_CON') or 'HEAD'

    def git(*args):
        return subprocess.run(['git', *args], cwd=RAIZ, capture_output=True, text=True, encoding='utf-8')

    try:
        existe = git('rev-parse', '--verify', '--quiet', ref + '^{commit}')
    except FileNotFoundError:
        reg.aviso('git no está instalado; no se buscaron agentes borrados')
        return
    if existe.returncode != 0:
        mensaje = 'no existe la referencia de git "%s"; no se pudieron buscar agentes borrados' % ref
        if explicita:
            reg.error(mensaje + ' (revisa COMPARAR_CON)')
        else:
            reg.aviso(mensaje)
        return

    anterior = git('show', '%s:agentes.json' % ref)
    if anterior.returncode != 0:
        reg.aviso('en %s no había agentes.json; se omite la comparación con la versión anterior' % ref)
        return
    try:
        previos = json.loads(anterior.stdout)
        if not isinstance(previos, dict):
            raise ValueError('no es un objeto')
    except ValueError:
        reg.aviso('agentes.json de %s no se pudo leer; se omite la comparación con la versión anterior' % ref)
        return

    ids_borrados(reg, agentes, previos, 'la versión anterior (%s)' % ref, AYUDA_BORRAR)

    for ident, entrada in agentes.items():
        viejo = previos.get(ident)
        if not isinstance(viejo, dict) or not isinstance(entrada, dict):
            continue
        for campo in ('did_agent_id', 'did_client_key', 'elevenlabs_agent_id'):
            antes, ahora = viejo.get(campo, ''), entrada.get(campo, '')
            if antes != ahora:
                reg.aviso('agente "%s": cambió %s ("%s" → "%s")' % (ident, campo, antes, ahora),
                          'agentes.json', linea_de_id(texto, ident))
    info('Comparado con agentes.json de %s.' % ref)


def comparar_con_publicados(reg, agentes):
    """Exige que todos los ids del sitio en línea sigan en agentes.json.
    Cubre el caso que HEAD~1 no ve: un borrado cuya publicación falló,
    seguido de otro commit cualquiera."""
    url = os.environ.get('IDS_PUBLICADOS_URL')
    if not url:
        if not EN_ACTIONS:
            return
        url = URL_IDS_PUBLICADOS
    pedido = urllib.request.Request(
        '%s?t=%d' % (url, time.time()),   # evita la caché de GitHub Pages
        headers={'Cache-Control': 'no-cache', 'User-Agent': 'construir.py'})
    ref = os.environ.get('COMPARAR_CON') or 'HEAD'
    try:
        with urllib.request.urlopen(pedido, timeout=20) as resp:
            datos = json.loads(resp.read().decode('utf-8'))
        publicados = datos['ids']
        if not isinstance(publicados, list) or not all(isinstance(i, str) for i in publicados):
            raise ValueError('"ids" no es una lista de textos')
    except urllib.error.HTTPError as e:
        reg.aviso('no se pudo descargar %s (HTTP %d; normal en la primera publicación). '
                  'Se valida solo contra %s.' % (url, e.code, ref))
        return
    except (urllib.error.URLError, OSError, ValueError, KeyError, TypeError) as e:
        reg.aviso('no se pudo leer %s (%s). Se valida solo contra %s.' % (url, e, ref))
        return
    ids_borrados(reg, agentes, set(publicados), 'el sitio publicado', AYUDA_BORRAR)
    info('Comparado con los %d agentes del sitio publicado.' % len(publicados))


def validar(reg):
    agentes, texto = leer_lista(reg)
    if agentes is None:
        return None
    validar_entradas(reg, agentes, texto)
    validar_html_sueltos(reg, agentes)
    validar_urls_publicadas(reg, agentes)
    comparar_con_git(reg, agentes, texto)
    comparar_con_publicados(reg, agentes)
    return agentes


# ----------------------------------------------------------------------
# Construcción
# ----------------------------------------------------------------------

MARCAS = ('{{TITULO}}', '{{NOMBRE}}', '{{CSS}}', '{{CONFIG}}', '{{JS}}')


def leer_fuentes(reg):
    plantilla = (SRC / 'plantilla.html').read_text(encoding='utf-8')
    for marca in MARCAS:
        n = plantilla.count(marca)
        if n != 1:
            reg.error('src/plantilla.html debe tener %s exactamente una vez (tiene %d)' % (marca, n),
                      'src/plantilla.html')
    js = (SRC / 'agente.js').read_bytes()
    css = (SRC / 'agente.css').read_bytes()
    return plantilla, js, css


def huella(contenido):
    return hashlib.sha256(contenido).hexdigest()[:10]


def json_embebido(datos):
    """JSON seguro dentro de <script>: ningún '<' puede cerrar la etiqueta
    (</script>) ni abrir un comentario (<!--). \\u003c sigue siendo JSON
    válido, así que JSON.parse lo lee igual."""
    texto = json.dumps(datos, ensure_ascii=False, indent=2)
    return (texto.replace('<', '\\u003c').replace('>', '\\u003e').replace('&', '\\u0026')
            .replace('\u2028', '\\u2028').replace('\u2029', '\\u2029'))


def pagina_agente(plantilla, ident, entrada, ref_css, ref_js):
    nombre = (entrada.get('nombre') or '').strip()
    config = {
        'id': ident,
        'nombre': nombre or ident,
        'did_agent_id': entrada['did_agent_id'],
        'did_client_key': entrada['did_client_key'],
        'elevenlabs_agent_id': entrada.get('elevenlabs_agent_id') or '',
    }
    reemplazos = {
        '{{TITULO}}': html.escape(nombre or ident),
        '{{NOMBRE}}': html.escape(nombre or ident),
        '{{CSS}}': html.escape(ref_css),
        '{{JS}}': html.escape(ref_js),
        '{{CONFIG}}': json_embebido(config),
    }
    # Un solo paso: un valor que contuviera una marca no se reemplaza otra vez.
    return re.sub(r'\{\{[A-Z]+\}\}', lambda m: reemplazos.get(m.group(0), m.group(0)), plantilla)


def iframe_de(ident, base=URL_BASE):
    """Exactamente el formato de la cédula (ver CLAUDE.md)."""
    return ('<iframe src="%s%s.html"\n'
            '  width="100%%" height="350" frameborder="0"\n'
            '  allow="microphone; camera; autoplay" allowfullscreen></iframe>' % (base, ident))


def escribir_paginas(destino, plantilla, js, css, agentes):
    ref_js = 'agente.js?v=' + huella(js)
    ref_css = 'agente.css?v=' + huella(css)
    (destino / 'agente.js').write_bytes(js)
    (destino / 'agente.css').write_bytes(css)
    for ident, entrada in agentes.items():
        (destino / (ident + '.html')).write_text(
            pagina_agente(plantilla, ident, entrada, ref_css, ref_js), encoding='utf-8')


LISTA_HTML = '''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Agentes publicados</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 24px 16px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
           background: #f6f6f4; color: #26292c; }
    main { max-width: 1100px; margin: 0 auto; }
    h1 { font-size: 22px; margin: 0 0 6px; }
    p { margin: 0 0 14px; color: #6b6f73; font-size: 14px; line-height: 1.5; }
    input[type=search] { width: 100%%; max-width: 360px; padding: 8px 10px; margin-bottom: 14px;
           border: 1px solid #c9cac6; border-radius: 6px; font: inherit; }
    table { width: 100%%; border-collapse: collapse; background: #fff; font-size: 14px; }
    th, td { padding: 8px 10px; border-bottom: 1px solid #e4e4e0; text-align: left; vertical-align: middle; }
    th { background: #eceae5; font-weight: 600; position: sticky; top: 0; }
    td.id { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; word-break: break-all; }
    td.acciones { white-space: nowrap; }
    button { padding: 5px 10px; margin: 2px 4px 2px 0; border: 1px solid #4a4f55; border-radius: 5px;
             background: #fff; color: #26292c; font: inherit; font-size: 13px; cursor: pointer; }
    button:hover { background: #4a4f55; color: #fff; }
    button.copiado { background: #2f6b3a; border-color: #2f6b3a; color: #fff; }
    a { color: #1f5a99; }
    @media (max-width: 640px) { td.acciones { white-space: normal; } th.el, td.el { display: none; } }
  </style>
</head>
<body>
<main>
  <h1>Agentes publicados</h1>
  <p>%(total)d agentes. «Copiar iframe» copia el código para pegar en Rise (bloque Multimedia → Código insertado).
     Esta lista se genera sola desde <code>agentes.json</code> en cada publicación%(generado)s.</p>
  <input type="search" id="filtro" placeholder="Buscar por nombre o id…" aria-label="Buscar agente">
  <table>
    <thead><tr><th>Nombre</th><th>Id</th><th class="el">Respaldo ElevenLabs</th><th>Copiar</th></tr></thead>
    <tbody>
%(filas)s
    </tbody>
  </table>
</main>
<script>
(function () {
  'use strict';
  function copiar(texto) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texto);
    return new Promise(function (resolver, rechazar) {
      var area = document.createElement('textarea');
      area.value = texto;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      area.remove();
      if (ok) { resolver(); } else { rechazar(new Error('no se pudo copiar')); }
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-copiar]');
    if (!b) return;
    var original = b.textContent;
    copiar(b.getAttribute('data-copiar')).then(function () {
      b.textContent = '¡Copiado!';
      b.classList.add('copiado');
    }, function () {
      window.prompt('Copia este texto:', b.getAttribute('data-copiar'));
    }).then(function () {
      setTimeout(function () { b.textContent = original; b.classList.remove('copiado'); }, 1500);
    });
  });
  var filtro = document.getElementById('filtro');
  filtro.addEventListener('input', function () {
    var q = filtro.value.trim().toLowerCase();
    document.querySelectorAll('tbody tr').forEach(function (tr) {
      tr.hidden = q && tr.getAttribute('data-buscar').indexOf(q) === -1;
    });
  });
})();
</script>
</body>
</html>
'''

FILA_HTML = '''      <tr data-buscar="%(buscar)s">
        <td>%(nombre)s</td>
        <td class="id"><a href="%(id)s.html">%(id)s</a></td>
        <td class="el">%(el)s</td>
        <td class="acciones"><button type="button" data-copiar="%(url)s">Copiar URL</button><button type="button" data-copiar="%(iframe)s">Copiar iframe</button></td>
      </tr>'''

PAGINA_404 = '''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>No se encontró este agente</title>
  <style>
    html, body { height: 100%; margin: 0; }
    body { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
           padding: 16px; box-sizing: border-box; text-align: center; background: #f6f6f4; color: #26292c;
           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
    h1 { font-size: 18px; margin: 0; }
    p { font-size: 14px; margin: 0; color: #6b6f73; }
  </style>
</head>
<body>
  <h1>No se encontró este agente</h1>
  <p>Revisa que la dirección esté bien escrita.</p>
</body>
</html>
'''


def generar_lista_html(agentes):
    filas = []
    for ident in sorted(agentes, key=str.lower):
        entrada = agentes[ident]
        nombre = (entrada.get('nombre') or '').strip() or ident
        tiene_el = bool(entrada.get('elevenlabs_agent_id'))
        filas.append(FILA_HTML % {
            'buscar': html.escape((nombre + ' ' + ident).lower()),
            'nombre': html.escape(nombre),
            'id': html.escape(ident),
            'el': 'Sí' if tiene_el else 'No',
            'url': html.escape(URL_BASE + ident + '.html'),
            'iframe': html.escape(iframe_de(ident)),
        })
    sha = os.environ.get('GITHUB_SHA', '')
    generado = (' (commit <code>%s</code>)' % html.escape(sha[:7])) if sha else ''
    return LISTA_HTML % {'total': len(agentes), 'filas': '\n'.join(filas), 'generado': generado}


def construir_sitio(reg, agentes):
    plantilla, js, css = leer_fuentes(reg)
    if reg.errores:
        return False

    if SALIDA.exists():
        shutil.rmtree(SALIDA)
    SALIDA.mkdir()

    escribir_paginas(SALIDA, plantilla, js, css, agentes)
    (SALIDA / 'lista.html').write_text(generar_lista_html(agentes), encoding='utf-8')
    (SALIDA / '404.html').write_text(PAGINA_404, encoding='utf-8')
    (SALIDA / '.nojekyll').write_text('', encoding='utf-8')
    (SALIDA / 'ids-publicados.json').write_text(
        json.dumps({'commit': os.environ.get('GITHUB_SHA', ''), 'ids': sorted(agentes)}, indent=2) + '\n',
        encoding='utf-8')

    for nombre in COPIAS_TAL_CUAL:
        origen = RAIZ / nombre
        if origen.is_dir():
            shutil.copytree(origen, SALIDA / nombre, ignore=shutil.ignore_patterns('.DS_Store'))
        elif origen.is_file():
            shutil.copy2(origen, SALIDA / nombre)
        else:
            reg.error('no existe %s, que se publica tal cual' % nombre)

    # Validar ya revisó que ninguno choque con una página generada.
    for nombre in html_sueltos():
        shutil.copy2(RAIZ / nombre, SALIDA / nombre)
    return True


def verificar_sitio(reg, agentes):
    """Revisa _site/ antes de darlo por bueno."""
    for url in leer_urls_publicadas(reg):
        if not (SALIDA / url).is_file():
            reg.error('falta %s en _site/: es una URL publicada en cursos de Rise' % url)

    for ident, entrada in agentes.items():
        ruta = SALIDA / (ident + '.html')
        if not ruta.is_file():
            reg.error('no se generó %s' % ruta.name)
            continue
        contenido = ruta.read_text(encoding='utf-8')
        for campo in ('did_agent_id', 'did_client_key'):
            if '"%s"' % entrada[campo] not in contenido:
                reg.error('%s no trae embebido su %s' % (ruta.name, campo))

    for nombre in ('agente.js', 'agente.css', 'lista.html', '404.html', '.nojekyll', 'ids-publicados.json'):
        if not (SALIDA / nombre).is_file():
            reg.error('falta %s en _site/' % nombre)

    for nombre in html_sueltos():
        copia = SALIDA / nombre
        if not copia.is_file() or copia.read_bytes() != (RAIZ / nombre).read_bytes():
            reg.error('%s en _site/ no es copia idéntica del archivo de la raíz' % nombre)

    for nombre in COPIAS_TAL_CUAL:
        origen = RAIZ / nombre
        if origen.is_dir():
            fuente = {p.relative_to(origen) for p in origen.rglob('*') if p.is_file() and p.name != '.DS_Store'}
            copia = {p.relative_to(SALIDA / nombre) for p in (SALIDA / nombre).rglob('*') if p.is_file()}
            if fuente != copia:
                reg.error('la copia de %s/ en _site/ no coincide con el original' % nombre)


PRUEBA_IFRAMES = '''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Prueba en iframe de 350 px</title>
  <style>
    body { margin: 0; padding: 16px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
           background: #e9e9e6; color: #26292c; }
    main { max-width: 900px; margin: 0 auto; }
    h1 { font-size: 20px; margin: 0 0 4px; }
    h2 { font-size: 15px; margin: 24px 0 6px; }
    p { margin: 0; font-size: 14px; color: #6b6f73; }
    iframe { display: block; background: #fff; }
  </style>
</head>
<body>
<main>
  <h1>Prueba en iframe de 350 px</h1>
  <p>Cada agente está insertado con el mismo iframe que se pega en Rise.</p>
%s
</main>
</body>
</html>
'''


def construir_prueba(reg, agentes):
    faltan = [i for i in AGENTES_PRUEBA if i not in agentes]
    if faltan:
        reg.error('--prueba: no están en agentes.json: %s' % ', '.join(faltan))
        return
    plantilla, js, css = leer_fuentes(reg)
    if reg.errores:
        return
    if CARPETA_PRUEBA.exists():
        shutil.rmtree(CARPETA_PRUEBA)
    CARPETA_PRUEBA.mkdir()
    escribir_paginas(CARPETA_PRUEBA, plantilla, js, css, {i: agentes[i] for i in AGENTES_PRUEBA})
    bloques = '\n'.join('  <h2>%s</h2>\n  %s' % (html.escape(agentes[i].get('nombre') or i),
                                                 iframe_de(i, URL_BASE + 'prueba/').replace('\n', '\n  '))
                        for i in AGENTES_PRUEBA)
    (CARPETA_PRUEBA / 'iframes.html').write_text(PRUEBA_IFRAMES % bloques, encoding='utf-8')
    info('Prueba generada en prueba/: %s e iframes.html' % ', '.join(i + '.html' for i in AGENTES_PRUEBA))


# ----------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description='Valida agentes.json y construye _site/.')
    grupo = parser.add_mutually_exclusive_group()
    grupo.add_argument('--validar', action='store_true', help='solo valida agentes.json')
    grupo.add_argument('--prueba', action='store_true',
                       help='genera prueba/ con %s' % ', '.join(AGENTES_PRUEBA))
    args = parser.parse_args()

    reg = Registro()
    agentes = validar(reg)
    if agentes is None or reg.errores:
        info('\n✗ agentes.json tiene %d error(es). No se construye ni se publica nada.' % reg.errores)
        return 1
    info('✓ agentes.json es válido: %d agentes, %d aviso(s).' % (len(agentes), reg.avisos))

    if args.validar:
        return 0

    if args.prueba:
        construir_prueba(reg, agentes)
        return 1 if reg.errores else 0

    if not construir_sitio(reg, agentes):
        info('\n✗ No se pudo construir el sitio.')
        return 1
    verificar_sitio(reg, agentes)
    if reg.errores:
        info('\n✗ La verificación de _site/ falló con %d error(es). No se publica nada.' % reg.errores)
        return 1
    paginas = sum(1 for _ in SALIDA.glob('*.html'))
    info('✓ Sitio generado en _site/ (%d páginas .html) y verificado.' % paginas)
    return 0


if __name__ == '__main__':
    sys.exit(main())
