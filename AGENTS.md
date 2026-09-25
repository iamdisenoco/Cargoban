# AGENTS.md — Cargoban

Reglas de trabajo para toda sesión (humana o agente) en este repo.
Se escribe en español. Cada error que Jon corrige se anota aquí una vez como regla.

## Cómo se trabaja
- Un PR por bloque contra `main`, mergeado antes del siguiente. Nunca PR apilados.
- Máximo dos sesiones trabajando en paralelo, y solo si no tocan los mismos archivos.
- La comunicación entre sesiones va por `ESTADO.md` y este archivo, no por chat.
- Nada se declara hecho sin verlo funcionar. Si no se pudo probar, se dice con esas palabras.
- Sin autorización expresa de Jon no se gastan créditos externos ni se toca producción.

## Acceso admin
- Usuario admin de la app: `jon@iaconlala.com`.
- La contraseña se lee de la variable de entorno `JON_CLAVE`. Nunca se escribe en el repo.

## Stack
- Astro 7 + Tailwind CSS 4, sitio estático. Node 22. Hosting previsto: Cloudflare Pages.
- Tipografía: Inter Variable con eje de tamaño óptico (`@fontsource-variable/inter/opsz.css`), una sola
  familia para titulares y texto, autoalojada. Jon la pidió «similar a la que usa Apple» (24/09).
- `npm run dev` para desarrollar, `npm run build` compila a `dist/`, `npm run check` hace el chequeo de tipos.
- Contenido editable en `src/data/sitio.ts`. Lo marcado PROVISIONAL espera confirmación de Cargoban.
- Marca: tokens en `src/styles/global.css`, logos en `public/marca/`, reglas en `docs/marca.md`.
- Estilos base (body, h1…) siempre dentro de `@layer base`; fuera de la capa pisan las utilidades de Tailwind.
- Animaciones de scroll: con propiedades sueltas (`animation-name`, `animation-duration: auto`…) y la
  línea de tiempo dentro de `var()`, nunca `animation:` más `animation-timeline:`. El minificador del
  build junta ese par en un solo atajo que Chromium rechaza y la animación desaparece sin error
  (pasó hasta el 25/09: ninguna `.revelar` corría). Comprobar con `getComputedStyle(el).animationName`.
- Animaciones de scroll (`animation-timeline`) siempre dentro de `@supports` y de
  `prefers-reduced-motion: no-preference`, y con el estado final como estado por defecto.
  Firefox estable todavía no las activa: si se ocultan por defecto, ahí no se ve nada.
- La animación de apertura (`src/components/IntroBrujula.astro`) nace oculta con `hidden` y
  solo su propio script la muestra. Si el JavaScript falla, el visitante ve el sitio, no una
  pantalla en negro. Nunca al revés.
- Los trazos del logo no se copian a mano dentro del código: se leen del SVG oficial en tiempo
  de compilación y el build falla si ese archivo cambia de forma. Así el logo que queda al final
  del intro es exactamente el logo aprobado.
- Para verificar una animación en Chromium hay que congelarla (`animation-delay` negativo más
  `animation-play-state: paused`). Con capturas a reloj corriendo, cada captura arrastra el reloj
  y las marcas de tiempo salen desplazadas: se leen fotogramas que no son los que dicen ser.
- El SVG del logo se trae con `import ... from '…svg?raw'`, no con `fs` y `process.cwd()`:
  en el build de Astro el componente se empaqueta y las rutas relativas dejan de valer.
- Para abrir un sitio externo con Chromium hace falta que confíe en el CA del proxy del
  entorno; el Chromium de Playwright no lee ese almacén (`ERR_CERT_AUTHORITY_INVALID`).
  Jon lo autorizó expresamente el 23/09 y funciona así, sin apagar la verificación:
  `SPKI=$(openssl x509 -in /root/.ccr/agent-proxy-ca.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64)`
  y `chromium.launch({ args: ['--ignore-certificate-errors-spki-list=' + SPKI], proxy: { server: process.env.HTTPS_PROXY } })`.
  Sin esa autorización en la conversación, el clasificador de permisos lo bloquea: se pide a Jon.
- Desplazamiento suave con Lenis (`src/scripts/desplazamiento.ts`). Todo lo que bloquee el
  scroll lo hace con `overflow: hidden` en el `style` de `<html>` o de `<body>`: Lenis vigila
  esos dos atributos y se detiene. Un bloqueo hecho de otra forma deja la rueda moviendo la
  página por debajo. Los enlaces `#seccion` los lleva ese mismo script; no activar la opción
  `anchors` de Lenis, que no cancela el salto nativo ni mueve el foco.
- Los titulares de sección (h1 y h2) se escriben con `Titular.astro`, no a mano: así entran
  por palabras y los lectores de pantalla oyen la frase entera. `*palabra*` la pone en verde.
- En el frontmatter de un `.astro`, nada de expresiones regulares con comillas (`/"/g`):
  el build pasa, pero `astro check` se come el resto del archivo y da decenas de errores
  falsos. Usar `replaceAll('"', …)`.
- `astro preview` en Astro 7 se queda como demonio: el comando termina, el servidor sigue. Solo corre uno: si ya
  hay uno levantado, pedir otro puerto no arranca nada (`astro preview status` dice cuál está).
- `pkill -f "astro preview"` mata también esta sesión (salida 144). Para liberar un puerto,
  usar otro puerto en vez de matar procesos.
- Nada de tarjetas blancas con sombra difusa: el sistema separa con línea de 1 px, no con sombra.
- El verde de marca es acento escaso. Si aparece en todas las secciones, pierde fuerza.
- Fotos propias antes que banco de imágenes, siempre. Ver `docs/fotos.md`.
- Al interpolar en Astro, cuidado con el espacio antes de `{variable}`: un salto de línea
  entre la palabra y la llave se colapsa y las pega ("más de50 años").
- El build sale a `dist/recursos/`, no a `_astro/`: el guion bajo inicial rompe en varios
  alojamientos. Configurado en `astro.config.mjs`.
- Para una vista previa navegable hay que pasar las rutas absolutas del build a relativas
  (`/recursos/` y `/marca/` pierden la barra inicial, y en el CSS las fuentes quedan `./`).
- Antes de dar un bloque por terminado: `npm run build`, `npm run check` y capturas con Chromium en escritorio y móvil.

## Reglas aprendidas
- Una referencia visual se estudia **viéndola en el navegador** antes de construir, no solo
  leyendo su código. Con el código se sacaron los tiempos de cargokite, pero no su forma
  (fondo claro, tipografía de peso medio, hero fijo, sección horizontal), y Jon dijo
  «no se me parece». Primero se mira y se captura; después se construye.
- Nada de etiquetas pequeñas en mayúsculas con una raya encima del titular («— NOSOTROS»).
  Jon las rechazó el 24/09: el titular abre la sección solo.
- Jost y Archivo quedaron descartadas por Jon (24/09). Tipografía de estilo Apple: Inter.
- La marca de Puerto Antioquia no puede aparecer en el sitio (Jon, 24/09: «es muy importante»).
  Sus videos no se usan: no se les borra ni tapa la marca de agua, se dejan fuera. Para el
  movimiento del inicio van fotos propias de Cargoban. Si Puerto Antioquia entrega tomas
  limpias con permiso, se evalúa de nuevo.
