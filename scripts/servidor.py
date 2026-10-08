#!/usr/bin/env python3
"""Sirve _site/ en http://localhost:8000 imitando GitHub Pages.

    python3 scripts/construir.py     # primero, generar _site/
    python3 scripts/servidor.py      # luego abrir http://localhost:8000/lista.html

Como GitHub Pages:
  - lo que no existe responde 404 con el contenido de 404.html;
  - /<id> sin extensión sirve <id>.html;
  - una carpeta sin index.html responde 404 (no lista archivos);
  - /profesores/<algo> sirve lo mismo que /<algo>.
Sin caché, para ver cada cambio al recargar.

Ojo: D-ID solo acepta las client keys desde erikv-ag.github.io, así que en
local el agente no conecta (sirve para revisar el cargador, la compuerta y
el aviso).

Solo usa la biblioteca estándar de Python 3.
"""

import argparse
import os
import sys
import urllib.parse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

SITIO = Path(__file__).resolve().parent.parent / '_site'
PREFIJO = '/profesores'


class Manejador(SimpleHTTPRequestHandler):

    def _ajustar_ruta(self):
        partes = urllib.parse.urlsplit(self.path)
        ruta = partes.path
        if ruta == PREFIJO:
            ruta = '/'
        elif ruta.startswith(PREFIJO + '/'):
            ruta = ruta[len(PREFIJO):]
        local = self.translate_path(ruta)
        if not os.path.exists(local) and os.path.isfile(local + '.html'):
            ruta += '.html'
        self.path = urllib.parse.urlunsplit(('', '', ruta, partes.query, ''))

    def send_head(self):
        self._ajustar_ruta()
        return super().send_head()

    def list_directory(self, path):
        self.send_error(404)
        return None

    def send_error(self, code, message=None, explain=None):
        pagina = SITIO / '404.html'
        if code != 404 or not pagina.is_file():
            return super().send_error(code, message, explain)
        cuerpo = pagina.read_bytes()
        self.send_response(404)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(cuerpo)))
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(cuerpo)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description='Sirve _site/ como GitHub Pages.')
    parser.add_argument('--puerto', type=int, default=8000)
    args = parser.parse_args()

    if not (SITIO / 'lista.html').is_file():
        print('No existe _site/. Primero ejecuta: python3 scripts/construir.py', file=sys.stderr)
        return 1

    servidor = ThreadingHTTPServer(('127.0.0.1', args.puerto), partial(Manejador, directory=str(SITIO)))
    print('Sirviendo _site/ en http://localhost:%d/lista.html (Ctrl+C para salir)' % args.puerto, flush=True)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print('\nServidor detenido.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
