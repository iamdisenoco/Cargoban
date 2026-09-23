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
- Tipografías: Jost Variable (titulares) y Archivo Variable (texto), autoalojadas con Fontsource.
- `npm run dev` para desarrollar, `npm run build` compila a `dist/`, `npm run check` hace el chequeo de tipos.
- Contenido editable en `src/data/sitio.ts`. Lo marcado PROVISIONAL espera confirmación de Cargoban.
- Marca: tokens en `src/styles/global.css`, logos en `public/marca/`, reglas en `docs/marca.md`.
- Estilos base (body, h1…) siempre dentro de `@layer base`; fuera de la capa pisan las utilidades de Tailwind.
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
  entorno. El Chromium empaquetado con Playwright no lee ese almacén, y las dos maneras de
  arreglarlo están bloqueadas por el clasificador de permisos. Con `curl` sí se puede bajar
  el HTML y los paquetes de JavaScript, que es como se hizo `docs/referencias/cargokite.md`.
- `pkill -f "astro preview"` mata también esta sesión (salida 144). Para liberar un puerto,
  usar otro puerto en vez de matar procesos.
- Nada de tarjetas blancas con sombra difusa: el sistema separa con línea de 1 px, no con sombra.
- El verde de marca es acento escaso. Si aparece en todas las secciones, pierde fuerza.
- Fotos propias antes que banco de imágenes, siempre. Ver `public/fotos/LEEME.md`.
- Al interpolar en Astro, cuidado con el espacio antes de `{variable}`: un salto de línea
  entre la palabra y la llave se colapsa y las pega ("más de50 años").
- El build sale a `dist/recursos/`, no a `_astro/`: el guion bajo inicial rompe en varios
  alojamientos. Configurado en `astro.config.mjs`.
- Para una vista previa navegable hay que pasar las rutas absolutas del build a relativas
  (`/recursos/` y `/marca/` pierden la barra inicial, y en el CSS las fuentes quedan `./`).
- Antes de dar un bloque por terminado: `npm run build`, `npm run check` y capturas con Chromium en escritorio y móvil.

## Reglas aprendidas
- (vacío por ahora)
