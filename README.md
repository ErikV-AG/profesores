# Profesores — agentes conversacionales

Cada agente (Alan Turing, Marie Curie, Adam Smith…) es una página que se
inserta por iframe en las materias de Rise:

    https://erikv-ag.github.io/profesores/<id>.html

Todas las páginas salen de **una sola lista**, [`agentes.json`](agentes.json),
y comparten la misma lógica (`src/agente.js`) y el mismo estilo
(`src/agente.css`). Una mejora en esos archivos llega a todos los agentes a
la vez. No se edita ninguna página `.html` a mano.

## Agregar o cambiar un agente

1. Abre [`agentes.json`](agentes.json) y pulsa el lápiz (**Edit this file**).
2. Copia un bloque existente y cámbialo. Ejemplo:

   ```json
   "calculo_alan": {
     "nombre": "Alan Turing · Cálculo I",
     "did_agent_id": "v2_agt_VRr-daUT",
     "did_client_key": "ck_j4tRwGC0uPBeVPavOeiyA",
     "elevenlabs_agent_id": ""
   },
   ```

   - **La llave** (`calculo_alan`) es el nombre de la página:
     `…/profesores/calculo_alan.html`. Solo letras sin acento, números,
     `_` y `-`. **No cambies la llave de un agente que ya está en un curso**:
     su iframe dejaría de funcionar.
   - `did_agent_id` y `did_client_key`: en D-ID Studio → Agents → Embed
     (`data-agent-id` y `data-client-key`). La key debe permitir el dominio
     `erikv-ag.github.io`.
   - `elevenlabs_agent_id`: el id del agente de voz de respaldo en ElevenLabs
     (empieza con `agent_`). Déjalo en `""` si no hay.
   - Cada bloque va separado del siguiente por una coma; el último no lleva
     coma.
3. Pulsa **Commit changes…** Puedes hacer el commit directo en `main` o elegir
   **Create a new branch… and start a pull request** (recomendado: así la
   revisión corre antes de publicar y puedes revertir con un botón).

## ¿Se publicó?

Abre la pestaña **Actions** del repositorio. Cada cambio en `main` lanza
**Publicar**:

- ✅ verde: el sitio ya está actualizado (GitHub Pages tarda hasta
  10 minutos en refrescar su caché).
- ❌ rojo: **no se publicó nada** y el sitio sigue como estaba. Entra a la
  ejecución: en el resumen aparecen los errores en español, con la línea de
  `agentes.json` donde está el problema (coma faltante, id repetido, key mal
  copiada, agente borrado…). Corrige el archivo y haz otro commit.

En un pull request, la misma revisión aparece abajo del PR, en los checks.

## Copiar el iframe

Abre **https://erikv-ag.github.io/profesores/lista.html**: tiene todos los
agentes con botones **Copiar URL** y **Copiar iframe**. El iframe copiado ya
tiene el formato que va en Rise:

```html
<iframe src="https://erikv-ag.github.io/profesores/<id>.html"
  width="100%" height="350" frameborder="0"
  allow="microphone; camera; autoplay" allowfullscreen></iframe>
```

## Qué hace la compuerta

Cada página carga el agente de video de D-ID, traducido al español. El
alumno pulsa **Iniciar conversación** (no hay inicio automático: en
celulares el micrófono solo se concede con un toque real, y abrir sesión en
cada visita agota las sesiones del plan).

Si D-ID no opera, la página cambia sola:

| Qué pasa en D-ID | Con `elevenlabs_agent_id` | Sin `elevenlabs_agent_id` |
|---|---|---|
| Sin créditos de video (pasa a solo-texto) | Cambia a ElevenLabs | Se queda el chat de texto de D-ID |
| No carga, se queda en «Cargando…», no conecta, falla la conexión, o la sala de espera / «Alta demanda» dura más de 20 s | Cambia a ElevenLabs | Aviso «El profesor no está disponible por el momento» con botón **Intentar de nuevo** |

Al cambiar, la sesión de D-ID se cierra. Si el alumno ya había tocado la
página, la conversación de ElevenLabs arranca sola; si no, la inicia él. La
sesión (D-ID o ElevenLabs) también se cierra al salir de la página y con el
botón **✕ Terminar**, para liberar las sesiones del plan.

Para revisar algo, abre la consola del navegador (Cmd+Option+J en Chrome):
los mensajes de la página empiezan con `[agente]`. `__textosPendientes()`
lista lo que quedó en inglés.

## Borrar un agente a propósito

La publicación se detiene si un agente que estaba en la versión anterior o
en el sitio publicado desaparece de `agentes.json`, porque puede haber
iframes apuntando a él. Si de verdad quieres borrarlo:

1. Quítalo de `agentes.json` y haz el commit (la publicación fallará).
2. Ve a **Actions → Publicar → Run workflow**, marca **permitir borrar** y
   pulsa **Run workflow**.

Las 42 páginas que existían al migrar están además en
`scripts/urls_publicadas.txt`. Para borrar una de esas, también hay que
quitar su línea de ese archivo.

## Revertir un cambio

- **Si el cambio entró por un pull request:** abre el PR ya fusionado y pulsa
  **Revert**. GitHub crea un PR que deshace el cambio; fusiónalo y se
  publica.
- **Si hiciste el commit directo en `main`:** GitHub no tiene botón Revert
  para un commit suelto. Abre el archivo → **History** → abre la versión
  anterior → copia su contenido (botón **Copy raw file**) → edita el archivo
  actual, pega y **Commit changes**.

## Para quien tenga el repositorio clonado

    python3 scripts/construir.py            # valida y genera _site/
    python3 scripts/construir.py --validar  # solo valida
    python3 scripts/servidor.py             # http://localhost:8000/lista.html
    node --check src/agente.js

Solo Python 3 (biblioteca estándar) y Node para `node --check`. En local
D-ID no conecta (solo acepta las keys desde `erikv-ag.github.io`), pero se
ven el cargador, la compuerta y el aviso.

`benito.html` y la carpeta `content/` se publican tal cual. Las páginas
anteriores a la migración quedan para consulta en
`_referencia/paginas_anteriores/` y no se publican.

### Nota: si algún día se sirve desde Railway con Caddy

GitHub Pages no envía `Content-Security-Policy`. Si el sitio se mueve a
Railway con Caddy, el Caddyfile **no** debe agregar una CSP (o debe permitir
`blob:` en `media-src`), porque D-ID usa URLs `blob:` para el video y el
audio.

## Migración

Pasos manuales, en este orden:

1. Fusionar el PR de `prueba-plantilla` y probar las URLs de
   `…/profesores/prueba/`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.** El
   sitio actual sigue publicado hasta el siguiente despliegue; comprueba que
   una URL siga abriendo.
3. Fusionar el PR de `refactor-plantilla` a `main`. La Action construye y
   publica (se ve en la pestaña **Actions**).
4. Abrir **…/profesores/lista.html** publicada y probar tres o cuatro
   agentes.
5. Si algo falla: botón **Revert** en el PR fusionado y fusionar ese revert
   (regresan las páginas viejas a la raíz); luego **Settings → Pages →
   Source: Deploy from a branch** (`main`, carpeta `/ (root)`).
