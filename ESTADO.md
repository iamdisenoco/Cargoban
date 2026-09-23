# ESTADO.md — Cargoban

Estado vivo del proyecto. Lo lee cualquier sesión antes de empezar y lo actualiza al terminar.

## Situación actual (2026-09-23)
- **Bloque 2 MERGEADO en `main`** (PR #2, commit d1c6494). `main` compila y pasa `astro check`.
  La rama `claude/nuevo-sitio-web-g9z253` se reinició desde `main`: lo que venga es un PR nuevo.
- **Bloque 3 en curso: movimientos de cargokite** (análisis en `docs/referencias/cargokite.md`).
  Lo lleva la sesión `session_01GNhjiXf7ZSDJSV45yuWhQi`; otra sesión no toca estos archivos
  hasta que se mergee. Primer paso hecho, el que más cambia la sensación:
  - **Desplazamiento suave con Lenis** (`src/scripts/desplazamiento.ts`). Solo suaviza la
    rueda; en táctil no toca nada. Se detiene con el intro y el menú móvil abiertos. Los
    enlaces a secciones se deslizan, respetan la altura de la cabecera, cambian la dirección
    y dejan el foco del teclado en la sección.
  - **Titulares que entran palabra por palabra** (`src/components/Titular.astro` y
    `src/scripts/titulares.ts`). Las palabras se parten al compilar, sin SplitText. El del
    hero espera a que se cierre el intro. No depende de `animation-timeline`: se ve en Firefox.
  - Sin JavaScript, con el script caído o con menos movimiento: titulares visibles y scroll
    nativo. Verificado en Chromium, escritorio y móvil.
  - Falta: los tiempos de entrada de cada sección, y ajustar ritmo y curvas a cargokite
    cuando esté la grabación. Three.js y Swiper no: el documento dice por qué.
  - **La brújula ahora es la pantalla de carga**, como pidió Jon el 23/09 ("antes de que
    aparezca la página, así como el referente"). Se arma sobre un telón de cinco columnas
    que al final caen una tras otra y destapan la página, con los valores de cargokite
    (ver `docs/referencias/cargokite.md`). El titular del hero entra mientras cae el telón.
    Dura ~4,8 s en total. Sigue saliendo una vez por sesión y solo en la portada.
    Revisado con ojos frescos: nadie queda trancado en ningún cierre (botón, Escape, clic,
    rueda, también durante la caída), sin rendijas entre columnas. Encontró que el h1
    entraba casi entero debajo del telón; ahora arranca 0,6 s después de que empieza a caer.
  - Revisión con ojos frescos hecha por un subagente aparte. Encontró cuatro defectos,
    corregidos: los titulares ganaban un 15 % de alto, salían en blanco al imprimir, la rueda
    que cierra el intro movía la página y el texto de cada titular iba duplicado (se copiaba
    dos veces). El revisor volvió a pasar sus pruebas y cazó una regresión del propio arreglo
    (desde el menú móvil, las anclas se quedaban a mitad de camino), también corregida.
    Costo aceptado: en una recarga sin intro, el h1 no se pinta hasta que llega
    el JavaScript. Pendiente de probar con VoiceOver o NVDA reales el `aria-label` de los
    titulares.
- **Defecto previo, sin arreglar:** con el móvil en horizontal (844×390) el menú mide 433 px
  en 390 de pantalla, no tiene scroll propio y el último botón queda cortado.
- **Bloque 2, lo que quedó hecho: animación de apertura con la brújula.** Verificada en Chromium.
  Se dibuja el bisel, la aguja busca el norte, se forma el arco y el logotipo queda armado.
  Dura 3,5 s; el ritmo se ajusta con la variable `--r` y el tamaño con `--z`, las dos en
  `IntroBrujula.astro`. Se salta con clic, con Escape o con la rueda, sale una sola vez por
  sesión, solo en la portada, y no se le muestra a quien pidió menos movimiento.
- **Revisión con ojos frescos hecha** por una sesión distinta a la que escribió el código.
  Confirmó que nadie se queda trancado, que el sitio se ve entero sin JavaScript y que el
  logotipo no se muestra rotado en ningún fotograma. Encontró y se corrigieron: el intro se
  repetía en cada carga con el almacenamiento bloqueado (Safari en privado, Lockdown de iOS);
  la aserción del SVG contaba trazos pero no los identificaba, así que un reexport con las
  capas en otro orden habría hecho girar las letras; el logo formado duraba 0,2 s y ahora
  dura ~1 s; el intro salía en todas las páginas y ahora solo en la portada; el botón
  "Saltar" no se alcanzaba con el teclado; y el resto del documento no quedaba inerte.
- **Jon abrió la red del entorno** el 23/09. Con eso se pudo analizar cargokite.com bajando su
  HTML y sus paquetes de JavaScript: ver `docs/referencias/cargokite.md`. Usan GSAP +
  ScrollTrigger + SplitText + Flip, Lenis, Three.js, Barba y Swiper.
- **Lo que sigue bloqueado** (se volvió a probar el 23/09 en la segunda sesión, igual):
  1. **Ver cargokite en movimiento.** El Chromium de Playwright no confía en el CA del proxy y
     las dos formas de arreglarlo las bloquea el clasificador de permisos. Sabemos con qué está
     hecha, no cómo se siente. Hace falta desbloquear eso o una grabación de pantalla de Jon.
  2. **La carpeta de Drive** (Jon la volvió a mandar el 23/09: `19lEZjOIVqrTwM3oCBeMlCaQgvPN8H830`,
     fotos y videos). Se probó: el conector responde "not found" y el enlace pide iniciar sesión,
     o sea que no es pública ni está compartida con la cuenta del conector. El enlace lleva `/u/3/`: vive en otra cuenta de Google distinta de
     `jon@iaconlala.com`, que es la del conector. Se arregla compartiéndola con esa dirección,
     o adjuntando los archivos al chat.

## Situación anterior (2026-09-21)
- **Bloque 1 MERGEADO en `main`** (PR #1, commit d74683b). `main` compila y pasa `astro check`.
- La rama `claude/nuevo-sitio-web-g9z253` se reinició desde `main` para el siguiente bloque.
  Lo que venga es un PR nuevo: el #1 está cerrado y no se reutiliza.
- Sigue pendiente de Jon cambiar la rama por defecto del repo a `main` en GitHub
  (Settings › Branches). Hoy la rama por defecto sigue siendo la de trabajo.

## Qué necesita cuenta de Jon o datos de Cargoban
Conectar Cloudflare Pages necesita la cuenta de Jon. El contenido real está todo bloqueado
por Cargoban: fotografías, datos de contacto, municipio de la sede de Urabá, lista de
clientes y aprobación del logotipo horizontal. Sin eso el sitio no se puede publicar.

## Situación al cerrar el bloque 1 (2026-09-18)
- Bloque 1 rediseñado tras el rechazo de Jon al primer diseño ("está muy anticuado").
  El PR #1 no estaba mergeado, así que el rediseño va sobre la misma rama y actualiza ese PR:
  no se apila un PR nuevo.
- Dirección visual nueva, tomada de las piezas de Instagram de Cargoban que entregó Jon:
  fondo oscuro, titulares grandes, verde como acento único, numeración visible, grano de película.
- Tipografía cambiada de Poppins a Jost Variable, más fiel al Century Gothic del logo.
- Servicios y tipos de carga ahora salen de la lámina 3/5 del carrusel de Instagram: son datos
  reales de Cargoban, no texto de relleno.
- Falta el banco de fotos de Cargoban. Es lo que más va a cambiar el resultado.
  Instrucciones de entrega en `public/fotos/LEEME.md`.
- Revisión con ojos frescos hecha por una sesión distinta a la que escribió el código.
  Encontró cinco defectos graves, todos corregidos: la cabecera se volvía sólida al revés
  y el logo se imprimía sobre el contenido; el apilado de servicios ocultaba contenido de
  forma permanente en pantallas de poca altura; seis textos no pasaban el contraste mínimo
  de accesibilidad; el menú móvil dejaba escapar el foco del teclado; y varias notas de
  trabajo interno eran visibles para el visitante.

## Vista previa navegable
https://claude.ai/artifact/FSfdXdcU27yrwas1WburRu
Es el sitio compilado, servido como página real: se puede recorrer, abrir el menú y ver
las animaciones. Es privado de la cuenta de Jon; para que lo vea alguien de Cargoban hay
que compartirlo desde el menú de la propia página.
Se actualiza volviendo a publicar desde la sesión: `npm run build`, se pasan las rutas
absolutas a relativas y se republica esa misma dirección.

## Bloqueante para publicar
El sitio no se puede publicar sin datos de contacto. Hoy los botones de "Cotizar operación"
y "Hablar con nosotros" llevan a una sección sin correo, sin teléfono y sin formulario.
Hace falta de Cargoban: correo, teléfono, direcciones de las dos sedes y el municipio exacto
de la sede de Urabá (Urabá es una subregión, no un municipio; el puerto es Turbo).

## Situación anterior (2026-09-17)
- Bloque 0 hecho: `main` creada con `AGENTS.md` y `ESTADO.md`.
- Bloque 1 (este PR): scaffold Astro + Tailwind, tokens de marca, logos SVG extraídos del manual,
  layout (header, footer, menú móvil) y página de inicio de una sola página con anclas.
  Compila, pasa `astro check` y se verificó con capturas en escritorio y móvil.
- Pendiente de Jon: cambiar la rama por defecto en GitHub a `main` (Settings › Branches).

## Qué es Cargoban (brief de Jon, 2026-09-17)
Operador logístico y portuario con más de 50 años de experiencia, sedes en Urabá y Santa Marta.
El sitio es institucional: presentar la empresa, sus servicios y los clientes con los que ha trabajado.
Dominio previsto: `www.cargobanoperador.com` (se conecta al final).

## Decisiones cerradas
- Stack: Astro + Tailwind, estático, hosting en Cloudflare Pages.
- Marca: manual oficial en `docs/manual-de-marca-cargoban.pdf`, resumen en `docs/marca.md`.
- Tipografía web: Jost Variable (títulos) y Archivo Variable (texto), autoalojadas.

## Decisiones abiertas (esperan a Jon o a Cargoban)
0. **¿Autoriza Cargoban la animación de apertura?** El manual prohíbe rotar la marca, permite
   usar el símbolo fragmentado solo si la marca completa está en la misma pieza, y prohíbe
   añadirle elementos. La apertura gira las dos cuñas de la aguja (dos vueltas y media, y
   terminan a 0°), muestra el símbolo solo durante los primeros ~1,75 s, y le rodea con un
   bisel de 16 rumbos que no es de la marca. Es una animación, no una aplicación estática,
   y el logotipo completo nunca se muestra rotado — pero eso lo decide el cliente, no el repo.
   `docs/marca.md` se dejó como estaba a propósito: no se documenta como permitido algo que
   Cargoban todavía no ha aprobado.
1. **Logo horizontal en el header.** El manual exige aprobación de la compañía para usarlo. Por defecto se mantiene.
2. **¿Los clientes inician sesión?** Jon dijo "que los clientes ingresen". Se asume que significa visitar el sitio,
   sin login. Si hay portal de clientes, el stack cambia a Next.js.
3. **Contenido real.** Falta de Cargoban: texto institucional, misión, visión, valores, portafolio real de servicios,
   lista y logos de clientes, direcciones, teléfonos, correo y fotografías propias de la operación.
   Todo lo PROVISIONAL está marcado en `src/data/sitio.ts`.

## Plan de bloques
- Bloque 0: arranque del repo. HECHO.
- Bloque 1: scaffold, marca, layout y página de inicio. MERGEADO (PR #1).
- Bloque 2: animación de apertura con la brújula. MERGEADO (PR #2).
- Bloque 3: los movimientos de cargokite (ver `docs/referencias/cargokite.md`). EN CURSO.
- Bloque 4: conectar el repo a Cloudflare Pages (requiere la cuenta de Jon).
- Bloque 5: contenido real de Cargoban: nosotros, servicios detallados, clientes, fotografías.
- Bloque 6: contacto con formulario funcional.
- Bloque 7: SEO, rendimiento, y conexión del dominio `www.cargobanoperador.com` al final.

## Bitácora
- 2026-09-17: se crea el repo y la rama `claude/nuevo-sitio-web-g9z253`.
- 2026-09-17: se crea `main`. Jon entrega el manual de marca y el brief. Bloque 1 construido y verificado.
- 2026-09-18: Jon rechaza el diseño por anticuado y entrega piezas de Instagram como referencia.
  Rediseño completo sobre la misma rama. Verificado en escritorio y móvil.
- 2026-09-21: bloque 1 mergeado en `main` (PR #1).
- 2026-09-23: Jon pide los movimientos de cargokite.com y una animación de apertura con la
  brújula que forme el logo. Se construye la brújula, la revisa una sesión aparte con ojos
  frescos, se corrigen los siete defectos que encontró y se mergea como bloque 2 (PR #2).
  Jon abre la red del entorno; con eso se analiza cargokite bajando su HTML y su JavaScript.
  Sigue sin poder verse en movimiento, y la carpeta de Drive sigue en otra cuenta.
- 2026-09-23: bloque 3 empieza: desplazamiento suave con Lenis y titulares por palabras.
