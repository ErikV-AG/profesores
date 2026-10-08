/* =====================================================================
   agente.js — lógica compartida por TODAS las páginas de agentes.

   Cada página la genera scripts/construir.py desde src/plantilla.html y
   trae su configuración embebida en <script id="config-agente">. Una
   mejora aquí llega a todos los agentes en la siguiente publicación.

   Qué hace, en orden:
     1. Carga el embed v2 de D-ID con los datos del agente.
     2. Muestra un cargador neutro mientras D-ID prepara su interfaz,
        para que el alumno no la vea en inglés.
     3. Traduce la interfaz de D-ID al español (incluidos los shadow
        roots, que es donde vive el widget).
     4. Espera a que el alumno pulse «Iniciar conversación» (sin clic
        automático).
     5. Compuerta: si D-ID no opera (sin créditos, sin sesiones libres,
        no carga), cambia al agente de voz de ElevenLabs o, si el agente
        no tiene uno, muestra un aviso.
     6. Cierra la sesión al salir para liberar las sesiones del plan.

   Depuración (parámetro en la URL):
     ?forzar_respaldo=1     dispara la compuerta en cuanto carga D-ID.
     ?forzar_respaldo=clic  la dispara cuando el alumno pulsa
                            «Iniciar conversación» en D-ID.
   En la consola: __textosPendientes() lista lo que quedó en inglés.
===================================================================== */
(function () {
    'use strict';

    /* ==================================================================
       TIEMPOS (milisegundos)
    ================================================================== */

    // Plazo para que aparezca window.DID_AGENTS_API después de cargar la
    // página. Si no aparece, el embed de D-ID nunca inicializó.
    const ESPERA_API_MS = 15000;

    // Plazo para que desaparezca el overlay «Loading...» de D-ID y quede
    // visible el botón de inicio. Verificado en vivo: con la cuenta sin
    // créditos, D-ID a veces se queda cargando para siempre sin emitir
    // ningún evento. Esperar el clic del alumno es legítimo y puede durar
    // lo que sea; seguir con el overlay encima no lo es.
    const ESPERA_CARGA_MS = 35000;

    // Plazo desde el evento connection = "connecting" hasta "connected".
    // Arranca solo cuando el alumno ya pulsó iniciar.
    const TIEMPO_LIMITE_MS = 30000;

    // Cuánto puede durar en pantalla la sala de espera («Looking for
    // agent») o el aviso de alta demanda («High demand»). D-ID sin
    // sesiones libres también es «D-ID no opera».
    const ESPERA_SALA_MS = 20000;

    // Si en este plazo no detectamos ni el botón de inicio ni el video,
    // se muestra D-ID de todos modos (failsafe de la referencia).
    const FAILSAFE_MOSTRAR_MS = 12000;

    // Barrido periódico de traducción (red de seguridad del observer).
    const INTERVALO_BARRIDO_MS = 1500;

    // Revisión del estado de D-ID (overlay, sala de espera).
    const INTERVALO_VIGILANCIA_MS = 1000;

    // Búsqueda del botón de inicio y del video listo, para quitar el
    // cargador.
    const INTERVALO_LISTO_MS = 400;

    // Rotación de mensajes del cargador.
    const INTERVALO_MENSAJES_MS = 3500;

    // Si el script de ElevenLabs tarda más que esto, se muestra su
    // contenedor de todos modos para no dejar al alumno en el cargador.
    const ESPERA_SCRIPT_ELEVENLABS_MS = 6000;

    // Cuánto se busca el botón de inicio del widget de ElevenLabs para
    // pulsarlo (solo si el alumno ya tocó la página).
    const ESPERA_BOTON_ELEVENLABS_MS = 10000;

    // Con ?forzar_respaldo=clic: espera tras el clic en iniciar antes de
    // forzar el cambio, si D-ID no avisó antes con "connecting".
    const ESPERA_FORZAR_CLIC_MS = 1500;

    /* Sin clic automático en D-ID. En celulares el navegador solo concede
       el micrófono (y el audio) de forma confiable cuando la persona toca
       la pantalla en ese momento; un toque simulado puede terminar en
       permiso negado, y el navegador recuerda la negativa. Además, abrir
       sesión en cada visita, aunque nadie vaya a hablar, agota las
       sesiones simultáneas del plan («Alta demanda»). */
    const AUTO_INICIO = false;

    const URL_DID = 'https://agent.d-id.com/v2/index.js';
    // Script oficial que entrega el dashboard de ElevenLabs. El build
    // antiguo (elevenlabs.io/convai-widget/index.js) es legado.
    const URL_ELEVENLABS = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

    const LOG = '[agente]';

    /* ==================================================================
       CONFIGURACIÓN Y ELEMENTOS
    ================================================================== */
    const contenedorDID = document.getElementById('did-agent-container');
    const contenedorEL  = document.getElementById('elevenlabs-container');
    const cargador      = document.getElementById('cargador');
    const cargadorTexto = document.getElementById('cargador-texto');
    const aviso         = document.getElementById('aviso');
    const btnReintentar = document.getElementById('btn-reintentar');
    const btnTerminar   = document.getElementById('btn-terminar');

    let cfg = null;
    try {
        cfg = JSON.parse(document.getElementById('config-agente').textContent);
    } catch (e) {
        console.error(LOG, 'no se pudo leer la configuración del agente:', e);
    }

    const forzar = new URLSearchParams(location.search).get('forzar_respaldo');

    /* ==================================================================
       ESTADO
    ================================================================== */
    let modo = 'did';           // 'did' | 'texto' | 'elevenlabs' | 'aviso'
    let yaCambio = false;       // la compuerta ya se disparó
    let mostrado = false;       // D-ID ya está a la vista (sin cargador)
    let listoParaUsuario = false;
    let conectado = false;
    let desdeSala = 0;          // instante en que apareció la sala de espera
    let widgetEL = null;

    const intervalos = [];
    const temporizadores = [];
    function cadaTanto(fn, ms) { const id = setInterval(fn, ms); intervalos.push(id); return id; }
    function dentroDe(fn, ms) { const id = setTimeout(fn, ms); temporizadores.push(id); return id; }

    /* El alumno ya tocó la página. navigator.userActivation dice si hubo
       un gesto real; en navegadores sin esa API se lleva la cuenta a mano
       (los eventos de toque cruzan los shadow roots hasta window). */
    let tocado = false;
    ['pointerdown', 'touchstart', 'keydown'].forEach(tipo => {
        window.addEventListener(tipo, () => { tocado = true; }, { capture: true, passive: true });
    });
    function huboGesto() {
        const ua = navigator.userActivation;
        return ua ? ua.hasBeenActive : tocado;
    }

    /* ==================================================================
       CARGADOR
    ================================================================== */
    const MENSAJES = ['Conectando…', 'Preparando interacción…', 'Casi listo…'];
    let idxMensaje = 0;
    const intervaloMensajes = cadaTanto(() => {
        idxMensaje = Math.min(idxMensaje + 1, MENSAJES.length - 1);
        cargadorTexto.textContent = MENSAJES[idxMensaje];
    }, INTERVALO_MENSAJES_MS);

    function mostrarCargador(texto) {
        clearInterval(intervaloMensajes);
        cargadorTexto.textContent = texto;
        cargador.classList.remove('oculto');
    }
    function ocultarCargador() {
        clearInterval(intervaloMensajes);
        cargador.classList.add('oculto');
    }

    /* ==================================================================
       RECORRIDO DE LA INTERFAZ DE D-ID

       D-ID dibuja dentro de shadow roots. Se recorre el documento y cada
       shadow root, saltando los elementos propios (cargador, aviso,
       botón, contenedor de ElevenLabs) y el widget de ElevenLabs, que no
       se traduce ni se inspecciona.
    ================================================================== */
    function esPropio(el) {
        return el.hasAttribute('data-propio') || el.localName === 'elevenlabs-convai';
    }

    function recolectar(raiz, acc) {
        acc.push(raiz);
        if (raiz.shadowRoot) recolectar(raiz.shadowRoot, acc);
        const todos = raiz.querySelectorAll ? raiz.querySelectorAll('*') : [];
        for (const el of todos) {
            if (el.shadowRoot && el.localName !== 'elevenlabs-convai') recolectar(el.shadowRoot, acc);
        }
        return acc;
    }

    function raicesDID() {
        const acc = [];
        for (const hijo of document.body.children) {
            if (esPropio(hijo) || hijo.localName === 'script') continue;
            recolectar(hijo, acc);
        }
        return acc;
    }

    // Nodos de texto de una raíz, sin entrar en elementos propios ni en
    // <style>/<script>.
    function textos(raiz, fn) {
        const walker = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode(n) {
                if (n.nodeType === 1) {
                    if (esPropio(n) || n.localName === 'style' || n.localName === 'script') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_ACCEPT;
            },
        });
        let n;
        while ((n = walker.nextNode())) fn(n);
    }

    function elementos(raiz) {
        if (!raiz.querySelectorAll) return [];
        return Array.from(raiz.querySelectorAll('*')).filter(el => !el.closest('[data-propio], elevenlabs-convai'));
    }

    /* ¿El alumno ve este elemento? Medir el tamaño no basta: el D-ID real
       tiene SIEMPRE en el DOM los textos de la sala de espera («Looking for
       agent», «Finding an available agent…») dentro de
       DIV.didagent__embedded__container__loading con opacity 0, y ese
       elemento mide 189×26 px (verificado en vivo). Por eso se sube por los
       ancestros, cruzando los shadow hosts (getRootNode().host) y los
       <slot>, y se descarta si alguno tiene display:none u opacity 0, o si
       el elemento mide 0. visibility se hereda (también a través de los
       shadow roots), así que basta con la del propio elemento: un hijo con
       visibility:visible dentro de un padre hidden sí se ve.

       La subida se detiene en el contenedor de D-ID: su opacity 0 inicial
       es la cortina propia mientras se traduce, no un estado de D-ID. */
    function esVisible(el) {
        if (!el || el.nodeType !== 1 || !el.isConnected) return false;
        const r = el.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) return false;
        const estilo = getComputedStyle(el);
        if (estilo.visibility === 'hidden' || estilo.visibility === 'collapse') return false;
        for (let n = el; n && n !== contenedorDID;
             n = n.assignedSlot || n.parentElement || n.getRootNode().host || null) {
            const st = getComputedStyle(n);
            if (st.display === 'none' || parseFloat(st.opacity) === 0) return false;
        }
        return true;
    }

    /* ==================================================================
       TRADUCCIÓN

       Diccionario del embed D-ID v2. Une el de Person-AG (build 2.1.27 y
       posteriores) con lo que solo tenía tecnologia_transformacion_alan
       (las traducciones parciales). Las llaves son las cadenas EXACTAS del
       bundle, normalizadas: minúsculas, «...» en vez de «…», apóstrofo
       recto. El widget solo trae inglés y alemán de fábrica, por eso se
       parchea el DOM.

       «call» se traduce siempre como «conversación», no «llamada».
    ================================================================== */
    const TRADUCCIONES = {

        /* ---------- Arranque / conexión ---------- */
        'start call':                    'Iniciar conversación',
        'starting...':                   'Iniciando...',
        'connecting...':                 'Conectando...',
        'loading...':                    'Cargando...',

        /* Pantalla de conexión (build posterior al 2.1.27). Se registran
           la frase completa y sus mitades: según el build, D-ID la parte
           en dos elementos o la deja en un solo nodo de texto. */
        'connecting call...':            'Conectando…',
        'setting up your agent. this usually takes a few seconds.':
            'Preparando al agente. Esto suele tardar unos segundos.',
        'setting up your agent.':        'Preparando al agente.',
        'setting up your agent':         'Preparando al agente',
        'this usually takes a few seconds.':
            'Esto suele tardar unos segundos.',
        'this usually takes a few seconds':
            'Esto suele tardar unos segundos',

        /* Sala de espera: D-ID no tiene una sesión libre (todas las
           conversaciones simultáneas del plan están ocupadas). */
        'looking for agent':             'Buscando al agente',
        "finding an available agent for you. this won't take long.":
            'Estamos buscando un agente disponible. No tardará mucho.',
        'finding an available agent for you.':
            'Estamos buscando un agente disponible.',
        'finding an available agent for you':
            'Estamos buscando un agente disponible',
        "this won't take long.":         'No tardará mucho.',
        "this won't take long":          'No tardará mucho',

        /* Alta demanda: D-ID no tiene sesión disponible (su capacidad o el
           límite de sesiones simultáneas del plan). */
        'high demand':                   'Alta demanda',
        "we're experiencing unusually high demand right now. please try again in a moment.":
            'En este momento hay una demanda inusualmente alta. Inténtalo de nuevo en un momento.',
        "we're experiencing unusually high demand right now.":
            'En este momento hay una demanda inusualmente alta.',
        "we're experiencing unusually high demand right now":
            'En este momento hay una demanda inusualmente alta',
        'please try again in a moment.': 'Inténtalo de nuevo en un momento.',
        'please try again in a moment':  'Inténtalo de nuevo en un momento',
        'try again':                     'Intentar de nuevo',

        'hang tight':                    'Un momento',
        'reconnect':                     'Reconectar',
        'continue call...':              'Continuar conversación...',
        "let's continue":                'Continuemos',
        'create new call':               'Crear nueva conversación',
        'start a new call':              'Iniciar nueva conversación',
        'want to continue where we left off?': '¿Quieres continuar donde nos quedamos?',
        'are you still here?':           '¿Sigues ahí?',
        'call ended':                    'Conversación finalizada',
        'thanks for talking with us.':   'Gracias por conversar con nosotros.',
        'thanks for talking with us':    'Gracias por conversar con nosotros',
        'thanks for talking with us!':   '¡Gracias por conversar con nosotros!',
        'start new call':                'Iniciar nueva conversación',
        'new call':                      'Nueva conversación',
        'messages':                      'Mensajes',
        'message':                       'Mensaje',
        'transcript':                    'Transcripción',
        'transcripts':                   'Transcripciones',
        'view transcript':               'Ver transcripción',
        'show transcript':               'Mostrar transcripción',
        'hide transcript':               'Ocultar transcripción',
        'download transcript':           'Descargar transcripción',
        'copy transcript':               'Copiar transcripción',
        'no messages yet':               'Aún no hay mensajes',
        'no messages yet.':              'Aún no hay mensajes.',
        'understood':                    'Entendido',
        'skip':                          'Omitir',
        'close':                         'Cerrar',

        /* ---------- Controles de la conversación ---------- */
        'end call':                      'Terminar conversación',
        'turn microphone on':            'Encender micrófono',
        'mute microphone':               'Silenciar micrófono',
        'unmute microphone':             'Activar micrófono',
        'turn off speakers':             'Apagar bocinas',
        'turn on captions':              'Activar subtítulos',
        'turn off captions':             'Desactivar subtítulos',
        'expand menu':                   'Abrir menú',
        'collapse menu':                 'Cerrar menú',
        'select audio device':           'Seleccionar dispositivo de audio',
        'microphone':                    'Micrófono',
        'speakers':                      'Bocinas',
        'camera':                        'Cámara',
        'talk to interrupt':             'Habla para interrumpir',

        /* ---------- Chat ---------- */
        'chat':                          'Chat',
        'chat history':                  'Historial de chat',
        'chat messages':                 'Mensajes del chat',
        'open chat':                     'Abrir chat',
        'close chat':                    'Cerrar chat',
        'send message':                  'Enviar mensaje',
        'type something':                'Escribe algo',
        'type something...':             'Escribe algo...',
        'type a message':                'Escribe un mensaje',
        'type a message...':             'Escribe un mensaje...',
        'type your message':             'Escribe tu mensaje',
        'type your message...':          'Escribe tu mensaje...',
        'type your message here':        'Escribe tu mensaje aquí',
        'type your message here...':     'Escribe tu mensaje aquí...',
        'type here':                     'Escribe aquí',
        'type here...':                  'Escribe aquí...',
        'ask me anything':               'Pregúntame lo que quieras',
        'ask me anything...':            'Pregúntame lo que quieras...',
        'send a message':                'Envía un mensaje',
        'send a message...':             'Envía un mensaje...',
        'please wait until the response is complete': 'Espera a que termine la respuesta',
        'agent response':                'Respuesta del agente',
        'agent is thinking':             'El agente está pensando',
        'stop viewing':                  'Dejar de ver',
        'open image':                    'Abrir imagen',
        'open video':                    'Abrir video',

        /* ---------- Permisos de micrófono y cámara ---------- */
        "let's get your permission":     'Necesitamos tu permiso',
        'your browser needs permission to use your microphone.':
            'Tu navegador necesita permiso para usar el micrófono.',
        'got a question?':               '¿Tienes una pregunta?',
        'talk to a live interactive agent, just turn on your mic to start the call.':
            'Habla con un agente interactivo en vivo: solo enciende el micrófono para iniciar la conversación.',
        'we are blocked from using your microphone':
            'El acceso a tu micrófono está bloqueado',
        "click the page info icon in your browser's address bar":
            'Haz clic en el ícono de información de la página en la barra de direcciones',
        'turn on microphone access':     'Permitir acceso al micrófono',
        'we are blocked from using your camera':
            'El acceso a tu cámara está bloqueado',
        'turn on camera access':         'Permitir acceso a la cámara',
        'camera will be available after generating your agent':
            'La cámara estará disponible después de generar tu agente',

        /* ---------- Errores y red ---------- */
        'your network quality is low. this may affect your experience.':
            'Tu conexión es lenta. Esto puede afectar tu experiencia.',
        'the agent is temporarily unavailable. please try again later.':
            'El agente no está disponible por el momento. Inténtalo más tarde.',

        /* ---------- Encuesta de fin de conversación ---------- */
        'rate your experience':          'Califica tu experiencia',
        'submit':                        'Enviar',
        'thanks for your feedback!':     '¡Gracias por tus comentarios!',
        "couldn't send your feedback. please try again.":
            'No se pudieron enviar tus comentarios. Inténtalo de nuevo.',

        /* ---------- Etiquetas de accesibilidad ---------- */
        'control header':                'Encabezado de controles',
        'main controls':                 'Controles principales',
        'welcome message':               'Mensaje de bienvenida',
        'connecting overlay':            'Pantalla de conexión',
        'agent idle video':              'Video del agente en espera',
        'agent video stream':            'Video del agente en vivo',

        // Quita esta línea si prefieres conservar el distintivo "AI"
        'ai':                            'IA',
    };

    /* Avisos que traen datos variables (ids de error) y no se pueden
       traducir por coincidencia exacta: se buscan por fragmento. El
       primero es el que D-ID muestra al quedarse sin créditos de video:
       "Voice and face animations are temporarily unavailable. You can
       still use the chat. (Error id: xxxxxx)" */
    const TRADUCCIONES_PARCIALES = [
        ['voice and face animations are temporarily unavailable',
         'Las animaciones de voz y rostro no están disponibles por el momento. Puedes seguir usando el chat.'],
    ];

    // aria-label va al final para que su original sea el que quede en
    // data-en-original cuando un elemento tiene varios atributos.
    const ATRIBUTOS = ['placeholder', 'title', 'alt', 'aria-label'];

    /* Normaliza antes de buscar:
       - el carácter … y los tres puntos ... son intercambiables en el
         bundle de D-ID, y no siempre usa el mismo;
       - lo mismo con el apóstrofo tipográfico ’ y el recto ';
       - un salto de línea o doble espacio no debe impedir el match;
       - la búsqueda es en minúsculas. */
    function normalizar(txt) {
        return String(txt)
            .replace(/…/g, '...')
            .replace(/[‘’ʼ]/g, "'")
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function traducir(txt) {
        if (!txt) return null;
        const clave = normalizar(txt);
        if (!clave) return null;
        if (Object.prototype.hasOwnProperty.call(TRADUCCIONES, clave)) return TRADUCCIONES[clave];
        for (const [fragmento, es] of TRADUCCIONES_PARCIALES) {
            if (clave.includes(fragmento)) return es;
        }
        return null;
    }

    function traducirRaiz(raiz) {
        textos(raiz, nodo => {
            const original = nodo.nodeValue;
            const recortado = original.trim();
            if (!recortado) return;
            const es = traducir(recortado);
            // La guarda evita reescribir (y disparar el observer) cuando el
            // texto ya está traducido, p. ej. 'Chat' → 'Chat'.
            if (es && recortado !== es) nodo.nodeValue = original.replace(recortado, es);
        });

        for (const el of elementos(raiz)) {
            for (const attr of ATRIBUTOS) {
                const val = el.getAttribute(attr);
                if (!val) continue;
                const es = traducir(val);
                if (!es || es === val) continue;
                // Se guarda el original en inglés para ubicar botones por su
                // identidad real aunque ya estén traducidos.
                el.setAttribute('data-en-original', normalizar(val));
                el.setAttribute(attr, es);
            }
        }
    }

    /* Un MutationObserver sobre document.body NO ve los cambios dentro de
       un shadow root: hay que observar cada uno por separado, conforme
       aparecen. El barrido periódico cubre lo que se escape. */
    const observados = new WeakSet();
    let aplicando = false;
    let pendiente = null;

    function programar() {
        if (aplicando) return;
        clearTimeout(pendiente);
        pendiente = setTimeout(aplicar, 60);
    }

    const observer = new MutationObserver(() => {
        programar();
        buscarBotonInicio();
    });
    const OPCIONES_OBSERVER = {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ATRIBUTOS,
    };

    function aplicar() {
        if (modo === 'elevenlabs' || modo === 'aviso') return;
        aplicando = true;
        try {
            if (!observados.has(document.body)) {
                observados.add(document.body);
                observer.observe(document.body, OPCIONES_OBSERVER);
            }
            for (const raiz of raicesDID()) {
                traducirRaiz(raiz);
                if (raiz.nodeType === 11 && !observados.has(raiz)) {
                    observados.add(raiz);
                    observer.observe(raiz, OPCIONES_OBSERVER);
                }
            }
        } catch (e) {
            console.warn(LOG, 'falló una pasada de traducción:', e);
        }
        // Los callbacks del observer son microtareas; este setTimeout(0)
        // corre después y libera el candado sin generar un bucle.
        setTimeout(() => { aplicando = false; }, 0);
    }

    const intervaloBarrido = cadaTanto(aplicar, INTERVALO_BARRIDO_MS);

    /* ------------------------------------------------------------------
       Auditoría: qué quedó sin traducir.

       D-ID cambia cadenas entre builds. Cuando aparezca una en inglés,
       abre la consola en ese momento (con el aviso en pantalla) y
       ejecuta:   __textosPendientes()

       Imprime las cadenas que no están en el diccionario, ya con formato
       de llave para pegarlas en TRADUCCIONES. No distingue la interfaz de
       lo que dice el agente en el chat: ignora esas líneas.
    ------------------------------------------------------------------ */
    window.__textosPendientes = function () {
        const yaTraducido = new Set(Object.values(TRADUCCIONES).map(normalizar));
        TRADUCCIONES_PARCIALES.forEach(([, es]) => yaTraducido.add(normalizar(es)));
        const hallazgos = new Map();

        function registrar(txt) {
            if (!txt) return;
            const clave = normalizar(txt);
            if (!clave || clave.length > 140) return;
            if (!/[a-z]/.test(clave)) return;          // íconos, números
            if (/[áéíóúñ¿¡]/.test(clave)) return;      // ya está en español
            if (traducir(clave)) return;
            if (yaTraducido.has(clave)) return;
            hallazgos.set(clave, txt.trim());
        }

        for (const raiz of raicesDID()) {
            textos(raiz, n => registrar(n.nodeValue));
            for (const el of elementos(raiz)) {
                for (const attr of ATRIBUTOS) registrar(el.getAttribute(attr));
            }
        }

        if (!hallazgos.size) {
            console.log(LOG, 'nada pendiente en pantalla ahora mismo.');
            return [];
        }
        console.log(
            LOG + ' ' + hallazgos.size + ' cadena(s) sin traducir:\n\n' +
            [...hallazgos.keys()]
                .map(k => "        '" + k.replace(/'/g, "\\'") + "': '',")
                .join('\n')
        );
        return [...hallazgos.values()];
    };

    /* ==================================================================
       BOTONES DE D-ID
    ================================================================== */
    const PATRONES_INICIO = [
        'start call',
        'iniciar conversación',
        'start new call',
        'iniciar nueva conversación',
        'start conversation',
        'start a conversation',
        'start chat',
    ];

    function esBotonInicio(el) {
        if (!el || el.nodeType !== 1) return false;
        const original = el.getAttribute('data-en-original') || '';
        const texto = normalizar(el.textContent || '');
        const etiqueta = normalizar(el.getAttribute('aria-label') || '');
        return PATRONES_INICIO.some(p =>
            original === p || texto === p || etiqueta === p ||
            texto.startsWith(p) || etiqueta.startsWith(p));
    }

    function esBotonFin(el) {
        const original = el.getAttribute('data-en-original') || '';
        const texto = normalizar(el.textContent || '');
        const etiqueta = normalizar(el.getAttribute('aria-label') || '');
        if (original === 'end call') return true;
        return ['end call', 'terminar conversación'].some(p => texto === p || etiqueta === p);
    }

    function buscarEnDID(criterio) {
        for (const raiz of raicesDID()) {
            if (!raiz.querySelectorAll) continue;
            for (const el of raiz.querySelectorAll('button, [role="button"], a')) {
                if (!el.closest('[data-propio]') && criterio(el)) return el;
            }
        }
        return null;
    }

    /* ==================================================================
       DETECCIÓN DE «AGENTE LISTO»: se quita el cargador cuando aparece el
       botón de inicio (ya traducido) o el video está listo.
    ================================================================== */
    let botonInicioHallado = false;

    function mostrarDID() {
        if (mostrado || yaCambio) return;
        mostrado = true;
        clearInterval(intervaloListo);
        aplicar(); // última pasada antes de mostrar
        contenedorDID.classList.add('listo');
        setTimeout(() => {
            if (yaCambio) return;
            ocultarCargador();
            btnTerminar.hidden = false;
        }, 250);
    }

    function buscarBotonInicio() {
        if (botonInicioHallado || yaCambio) return;
        const boton = buscarEnDID(el => esBotonInicio(el) && esVisible(el));
        if (!boton) return;
        botonInicioHallado = true;
        if (AUTO_INICIO) {
            console.log(LOG, 'auto-inicio de D-ID');
            setTimeout(() => { try { boton.click(); } catch (e) { console.warn(LOG, 'el clic falló:', e); } }, 120);
        } else {
            console.log(LOG, 'botón de inicio listo, esperando al alumno');
        }
        mostrarDID();
    }

    function videoListo() {
        for (const raiz of raicesDID()) {
            const v = raiz.querySelector ? raiz.querySelector('video') : null;
            if (!v) continue;
            if (v.readyState >= 2 || v.currentTime > 0) return true;
            // Presente pero todavía cargando cuadros
            v.addEventListener('playing',    mostrarDID, { once: true });
            v.addEventListener('loadeddata', mostrarDID, { once: true });
            v.addEventListener('canplay',    mostrarDID, { once: true });
        }
        return false;
    }

    const intervaloListo = cadaTanto(() => {
        buscarBotonInicio();
        if (!mostrado && videoListo()) mostrarDID();
    }, INTERVALO_LISTO_MS);

    dentroDe(() => {
        if (!mostrado && !yaCambio) {
            console.warn(LOG, 'failsafe: no se detectó D-ID listo en ' + FAILSAFE_MOSTRAR_MS / 1000 + ' s; se muestra de todos modos');
            mostrarDID();
        }
    }, FAILSAFE_MOSTRAR_MS);

    /* ==================================================================
       VIGILANCIA DEL ESTADO DE D-ID
    ================================================================== */
    const TEXTOS_CARGANDO = ['loading...', 'cargando...'];
    const TEXTOS_SALA = ['looking for agent', 'buscando al agente', 'high demand', 'alta demanda'];

    function hayOverlayCargando() {
        let hay = false;
        for (const raiz of raicesDID()) {
            textos(raiz, n => {
                if (!hay && TEXTOS_CARGANDO.some(t => normalizar(n.nodeValue).includes(t)) &&
                    esVisible(n.parentElement)) hay = true;
            });
            if (hay) return true;
        }
        return false;
    }

    function hayBotonInicioVisible() {
        return !!buscarEnDID(el => esBotonInicio(el) && esVisible(el));
    }

    function haySalaDeEspera() {
        let hay = false;
        for (const raiz of raicesDID()) {
            textos(raiz, n => {
                if (!hay && TEXTOS_SALA.includes(normalizar(n.nodeValue)) && esVisible(n.parentElement)) hay = true;
            });
            if (hay) return true;
        }
        return false;
    }

    const intervaloVigilancia = cadaTanto(() => {
        if (yaCambio || modo !== 'did') return;

        // Arranque: el widget quedó listo y esperando al alumno, que puede
        // tardar lo que quiera en pulsar iniciar. Con el overlay de carga
        // encima, en cambio, no va a levantar (el botón existe, pero
        // tapado), y al vencer ESPERA_CARGA_MS se cambia de agente.
        if (!listoParaUsuario && !conectado && !hayOverlayCargando() && hayBotonInicioVisible()) {
            listoParaUsuario = true;
            clearTimeout(temporizadorCarga);
            console.log(LOG, 'D-ID listo, esperando al alumno');
        }

        // Sala de espera o alta demanda: D-ID sin sesiones libres.
        if (haySalaDeEspera()) {
            if (!desdeSala) {
                desdeSala = Date.now();
                console.log(LOG, 'D-ID en sala de espera o alta demanda');
            } else if (Date.now() - desdeSala > ESPERA_SALA_MS) {
                cambiarARespaldo('sala de espera o alta demanda por más de ' + ESPERA_SALA_MS / 1000 + ' s');
            }
        } else {
            desdeSala = 0;
        }
    }, INTERVALO_VIGILANCIA_MS);

    const temporizadorCarga = dentroDe(() => {
        if (!listoParaUsuario && !conectado && modo === 'did') {
            cambiarARespaldo('D-ID nunca terminó de cargar (' + ESPERA_CARGA_MS / 1000 + ' s)');
        }
    }, ESPERA_CARGA_MS);

    /* ==================================================================
       EVENTOS DE D-ID

       Sin créditos, el widget NO lanza un error HTTP: degrada el agente
       de video a solo-texto y lo anuncia por su emisor de eventos
       (verificado en vivo, ~10 s después de pulsar iniciar):
           chatMode -> { state: "TextOnly" }
           error    -> { error: { kind: "ChatModeDowngraded" } }
    ================================================================== */
    let temporizadorConexion = null;

    /* Solo-texto. Con ElevenLabs se cambia de agente. Sin ElevenLabs, el
       chat de texto de D-ID sigue funcionando («You can still use the
       chat»), así que se queda: se apagan las alarmas de la conexión de
       video (overlay, tiempo límite, sala), que en este modo ya no
       significan que D-ID no opere. */
    function degradadoATexto(motivo) {
        if (cfg.elevenlabs_agent_id) {
            cambiarARespaldo(motivo);
            return;
        }
        if (modo !== 'did') return;
        modo = 'texto';
        clearTimeout(temporizadorConexion);
        clearTimeout(temporizadorCarga);
        clearInterval(intervaloVigilancia);
        console.log(LOG, 'D-ID en modo solo-texto (' + motivo + '); sin ElevenLabs, se queda el chat de texto');
        mostrarDID();
    }

    function engancharEventos(api) {
        api.events.on('error', datos => {
            const error = datos && datos.error;
            const kind = error && error.kind;
            console.log(LOG, 'error de D-ID:', kind || datos);
            if (kind === 'ChatModeDowngraded') degradadoATexto('ChatModeDowngraded (sin créditos de video)');
        });

        api.events.on('chatMode', datos => {
            const estado = String((datos && datos.state) || '');
            console.log(LOG, 'chatMode:', estado);
            // "Functional" es el modo completo con video.
            if (!estado || estado.toLowerCase() === 'functional') return;
            if (estado.toLowerCase() === 'textonly') degradadoATexto('chatMode = ' + estado);
            else cambiarARespaldo('chatMode = ' + estado);
        });

        api.events.on('connection', datos => {
            const estado = String((datos && datos.state) || '').toLowerCase();
            console.log(LOG, 'conexión:', estado);
            if (modo === 'texto') return;

            if (estado === 'connecting') {
                // Recién aquí tiene sentido contar tiempo: antes, la página
                // espera a que el alumno pulse iniciar.
                conectado = false;
                clearTimeout(temporizadorConexion);
                temporizadorConexion = dentroDe(() => {
                    if (!conectado) cambiarARespaldo('tiempo límite sin conectar (' + TIEMPO_LIMITE_MS / 1000 + ' s)');
                }, TIEMPO_LIMITE_MS);
                if (forzar === 'clic') cambiarARespaldo('forzado (clic)');
            }
            if (estado === 'connected') {
                conectado = true;
                clearTimeout(temporizadorConexion);
            }
            if (estado === 'fail') cambiarARespaldo('connection = fail');
        });
    }

    // El API global solo existe después de que carga el script del embed.
    function esperarAPI() {
        const limite = Date.now() + ESPERA_API_MS;
        const id = cadaTanto(() => {
            if (yaCambio) { clearInterval(id); return; }
            const api = window.DID_AGENTS_API;
            if (api && api.events && typeof api.events.on === 'function') {
                clearInterval(id);
                try {
                    engancharEventos(api);
                } catch (e) {
                    console.warn(LOG, 'no se pudieron escuchar los eventos de D-ID:', e);
                }
                if (forzar === '1') cambiarARespaldo('forzado');
            } else if (Date.now() > limite) {
                clearInterval(id);
                cambiarARespaldo('el embed de D-ID nunca inicializó (' + ESPERA_API_MS / 1000 + ' s)');
            }
        }, 250);
    }

    // ?forzar_respaldo=clic: por si D-ID no emite "connecting" tras el clic.
    if (forzar === 'clic') {
        document.addEventListener('click', e => {
            const enInicio = e.composedPath().some(n =>
                n.nodeType === 1 && n.matches('button, [role="button"], a') && esBotonInicio(n));
            if (yaCambio || !enInicio) return;
            dentroDe(() => cambiarARespaldo('forzado (clic)'), ESPERA_FORZAR_CLIC_MS);
        }, true);
    }

    /* ==================================================================
       COMPUERTA: D-ID no opera → ElevenLabs o aviso
    ================================================================== */
    function cambiarARespaldo(motivo) {
        if (yaCambio) return;
        yaCambio = true;
        console.warn(LOG, 'D-ID no opera. Motivo:', motivo);

        intervalos.forEach(clearInterval);
        temporizadores.forEach(clearTimeout);
        clearTimeout(temporizadorConexion);
        clearTimeout(pendiente);
        observer.disconnect();

        cerrarDID();
        contenedorDID.hidden = true;

        if (cfg && cfg.elevenlabs_agent_id) {
            modo = 'elevenlabs';
            montarElevenLabs();
        } else {
            modo = 'aviso';
            mostrarAviso();
        }
    }

    function mostrarAviso() {
        ocultarCargador();
        btnTerminar.hidden = true;
        aviso.hidden = false;
        console.log(LOG, 'se muestra el aviso «El profesor no está disponible por el momento»');
    }

    btnReintentar.addEventListener('click', () => location.reload());

    /* ------------------------------------------------------------------
       Widget de ElevenLabs. Atributos verificados en vivo en
       tecnologia_transformacion_alan.html; no cambiarlos:
       - text-input: agrega el campo de escritura y el botón de enviar
         (la documentación dice que solo se activa desde el dashboard; es
         incorrecto para este build).
       - always-expanded: abre el widget a tamaño completo en vez de la
         píldora de esquina ("variant=expanded" no tiene efecto).
       - text-contents: un solo atributo con un objeto JSON en snake_case;
         los atributos sueltos start-call-text, etc., no existen.
       Sin reglas de posición para elevenlabs-convai a propósito: se
       posiciona solo y forzarle tamaño lo deja en una caja de 0x0.
    ------------------------------------------------------------------ */
    function crearWidget() {
        const w = document.createElement('elevenlabs-convai');
        w.setAttribute('agent-id', cfg.elevenlabs_agent_id);
        w.setAttribute('text-input', 'true');
        w.setAttribute('always-expanded', 'true');
        w.setAttribute('language', 'es');
        w.setAttribute('text-contents', JSON.stringify({
            action_text: '¿Tienes una pregunta?',
            start_call: 'Iniciar conversación',
            end_call: 'Terminar conversación',
            expand: 'Abrir conversación',
            listening_status: 'Escuchando',
            speaking_status: 'Hablando',
            input_placeholder: 'Escribe tu pregunta...',
        }));
        return w;
    }

    function mostrarElevenLabs() {
        if (modo !== 'elevenlabs' || !contenedorEL.hidden) return;
        ocultarCargador();
        contenedorEL.hidden = false;
        btnTerminar.hidden = false;
    }

    function montarElevenLabs() {
        mostrarCargador('Cambiando a modo de voz…');
        btnTerminar.hidden = true;
        widgetEL = crearWidget();
        contenedorEL.appendChild(widgetEL);

        const script = document.createElement('script');
        script.src = URL_ELEVENLABS;
        script.async = true;
        script.type = 'text/javascript';
        script.addEventListener('load', () => {
            mostrarElevenLabs();
            iniciarElevenLabsSiHuboGesto(widgetEL);
        });
        script.addEventListener('error', () => {
            console.error(LOG, 'no se pudo cargar el widget de ElevenLabs');
            if (widgetEL) widgetEL.remove();
            widgetEL = null;
            contenedorEL.hidden = true;
            modo = 'aviso';
            mostrarAviso();
        });
        document.body.appendChild(script);

        // Si el script tarda, mostrar de todos modos para no dejar al
        // alumno en el cargador indefinidamente.
        setTimeout(mostrarElevenLabs, ESPERA_SCRIPT_ELEVENLABS_MS);
    }

    function botonesEL(widget) {
        const sr = widget && widget.shadowRoot;
        return sr ? Array.from(sr.querySelectorAll('button, [role="button"]')) : [];
    }

    /* El widget no tiene un método startConversation() en este build
       (verificado en vivo): lo que funciona es pulsar su botón de inicio
       dentro de su shadow root. Solo se hace si el alumno ya tocó la
       página; si no, el widget queda listo y el alumno lo inicia (misma
       razón que AUTO_INICIO).

       Si el agente tiene activados los términos y condiciones en
       ElevenLabs, al iniciar aparece un diálogo de consentimiento que NO
       se pulsa automáticamente: es una aceptación legal y le corresponde
       a la persona. Se desactiva en el dashboard (Widget → Terms). */
    function iniciarElevenLabsSiHuboGesto(widget) {
        if (!huboGesto()) {
            console.log(LOG, 'ElevenLabs listo; el alumno no ha tocado la página, así que lo inicia él');
            return;
        }
        const limite = Date.now() + ESPERA_BOTON_ELEVENLABS_MS;
        const id = setInterval(() => {
            if (widget !== widgetEL) { clearInterval(id); return; }
            const inicio = botonesEL(widget).find(b => {
                const etiqueta = normalizar(b.getAttribute('aria-label') || b.textContent || '');
                return (etiqueta.includes('iniciar') || etiqueta.includes('start call')) && esVisible(b);
            });
            if (inicio) {
                clearInterval(id);
                inicio.click();
                console.log(LOG, 'conversación de ElevenLabs iniciada (el alumno ya había tocado la página)');
            } else if (Date.now() > limite) {
                clearInterval(id);
                console.log(LOG, 'no se encontró el botón de inicio de ElevenLabs; queda el inicio manual');
            }
        }, 250);
    }

    /* ==================================================================
       CIERRE DE SESIÓN

       Si la sesión de D-ID queda abierta, sigue ocupando un lugar del
       plan hasta que D-ID la expira, y el siguiente alumno cae en la sala
       de espera. Quitar el widget de ElevenLabs del documento cierra su
       conversación.
    ================================================================== */
    function cerrarDID() {
        const candidatos = new Set([
            document.querySelector('did-agent'),
            window['did-agent'],
            window.DID_AGENTS_API,
            ...contenedorDID.querySelectorAll('*'),
        ]);
        for (const a of candidatos) {
            if (!a || (a.nodeType === 1 && !a.localName.includes('-'))) continue;
            for (const m of ['disconnect', 'destroy', 'close']) {
                try { if (typeof a[m] === 'function') a[m](); } catch (e) { /* sin consecuencia */ }
            }
        }
        for (const raiz of [document, ...raicesDID()]) {
            if (!raiz.querySelectorAll) continue;
            raiz.querySelectorAll('video').forEach(v => {
                try {
                    const st = v.srcObject;
                    if (st && st.getTracks) st.getTracks().forEach(t => t.stop());
                } catch (e) { /* sin consecuencia */ }
            });
        }
    }

    function cerrarElevenLabs() {
        if (widgetEL) {
            widgetEL.remove();
            widgetEL = null;
        }
    }

    let cerrada = false;
    function cerrarSesion() {
        if (cerrada) return;
        cerrada = true;
        intervalos.forEach(clearInterval);
        cerrarDID();
        cerrarElevenLabs();
    }
    window.addEventListener('pagehide', cerrarSesion);
    window.addEventListener('beforeunload', cerrarSesion);

    // Si el navegador restaura la página desde su caché de historial
    // (atrás/adelante), la sesión ya se cerró en pagehide: se recarga.
    window.addEventListener('pageshow', e => {
        if (e.persisted) location.reload();
    });

    /* ==================================================================
       BOTÓN «✕ TERMINAR»
    ================================================================== */
    btnTerminar.addEventListener('click', () => {
        if (modo === 'elevenlabs') {
            const fin = botonesEL(widgetEL).find(b => {
                const etiqueta = normalizar(b.getAttribute('aria-label') || b.textContent || '');
                return (etiqueta === 'terminar conversación' || etiqueta === 'end call' || etiqueta.includes('terminar')) &&
                    esVisible(b);
            });
            if (fin) {
                fin.click();
                return;
            }
            // Sin botón de fin a la vista: se desmonta el widget (cierra la
            // conversación) y se monta uno nuevo listo para empezar. No se
            // recarga: el alumno tendría que esperar a que D-ID vuelva a
            // fallar.
            console.log(LOG, 'se reinicia el widget de ElevenLabs');
            cerrarElevenLabs();
            widgetEL = crearWidget();
            contenedorEL.appendChild(widgetEL);
            return;
        }

        const fin = buscarEnDID(el => esBotonFin(el) && esVisible(el));
        if (fin) {
            fin.click();
        } else {
            cerrarDID();
            location.reload();
        }
    });

    /* ==================================================================
       ARRANQUE
    ================================================================== */
    if (!cfg || !cfg.did_agent_id || !cfg.did_client_key) {
        console.error(LOG, 'la configuración del agente está incompleta:', cfg);
        cfg = cfg || {};
        cambiarARespaldo('configuración incompleta');
        return;
    }

    aplicar();

    const script = document.createElement('script');
    script.type = 'module';
    script.src  = URL_DID;
    script.setAttribute('data-mode',       'full');
    script.setAttribute('data-client-key', cfg.did_client_key);
    script.setAttribute('data-agent-id',   cfg.did_agent_id);
    script.setAttribute('data-name',       'did-agent');
    script.setAttribute('data-monitor',    'true');
    script.setAttribute('data-target-id',  'did-agent-container');
    script.onerror = () => cambiarARespaldo('no se pudo cargar el script de D-ID');
    document.head.appendChild(script);

    esperarAPI();
})();
