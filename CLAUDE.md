# Repo profesores — contexto para Claude Code

## Qué es
Agentes conversacionales de D-ID que representan a profesores (Alan Turing,
Marie Curie, Adam Smith, etc.). Cada agente es una página publicada en
GitHub Pages (`https://erikv-ag.github.io/profesores/<id>.html`) que se
inserta por iframe en materias desarrolladas en Rise:

    <iframe src="https://erikv-ag.github.io/profesores/<id>.html"
      width="100%" height="350" frameborder="0"
      allow="microphone; camera; autoplay" allowfullscreen></iframe>

Si D-ID no opera (sin créditos, sin sesiones libres, no carga), la página
cambia a un agente de voz de ElevenLabs.

## Reglas que no se rompen
1. **Ninguna URL publicada cambia.** Cada `<id>.html` que existe hoy en la
   raíz debe seguir existiendo en el sitio publicado con el mismo nombre,
   respetando mayúsculas y errores de dedo (p. ej. `Alan_Matematicas`,
   `fundamentos_administacion_taylor`). Hay iframes en cursos de Rise ya
   publicados que apuntan a ellas.
2. **No se publica nada roto.** El sitio solo se despliega si la
   construcción y la validación pasan.
3. **No fusionar PRs ni cambiar la configuración de GitHub sin
   confirmación explícita.** Todo cambio entra por PR.
   El dueño del repo no lo tiene clonado: edita en github.com. Las
   instrucciones para él deben poder seguirse desde el navegador.
4. `benito.html` y la carpeta `content/` (export de Rise) se publican tal
   cual, sin modificarlos.
5. Sin dependencias nuevas: Python 3 de la biblioteca estándar para
   scripts; Node solo para `node --check`. Nada de npm install ni
   frameworks. El JS del navegador es vanilla.
6. Comentarios, mensajes al usuario y logs en español. Los logs del
   navegador llevan el prefijo `[agente]`.

## Estructura (tras la migración)
- `agentes.json` — la lista. Fuente única de datos de cada agente.
- `src/plantilla.html`, `src/agente.js`, `src/agente.css` — página, lógica
  y estilo compartidos por todos los agentes.
- `scripts/construir.py` — valida la lista y genera `_site/`.
- `scripts/urls_publicadas.txt` — las 42 páginas que existían al migrar;
  la construcción aborta si falta alguna en `_site/`.
- Un `.html` suelto en la raíz (salvo `benito.html`) se copia tal cual a
  `_site/` con un aviso; si su nombre choca con un id de la lista, es error.
- `scripts/servidor.py` — sirve `_site/` en local imitando GitHub Pages.
- `.github/workflows/publicar.yml` — construye y despliega en GitHub Pages.
  Cada publicación incluye `ids-publicados.json`; en Actions, la
  validación exige que esos ids sigan en `agentes.json`.
- `_referencia/` — código de referencia; no se publica. Las páginas
  anteriores a la migración están en `_referencia/paginas_anteriores/`.

## Comandos
    python3 scripts/construir.py            # valida y genera _site/
    python3 scripts/construir.py --validar  # solo valida
    python3 scripts/construir.py --prueba   # genera prueba/ (3 agentes)
    python3 scripts/servidor.py             # http://localhost:8000/lista.html (pruebas en la sesión)
    node --check src/agente.js
