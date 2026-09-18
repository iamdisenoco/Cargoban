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
- Nada de tarjetas blancas con sombra difusa: el sistema separa con línea de 1 px, no con sombra.
- El verde de marca es acento escaso. Si aparece en todas las secciones, pierde fuerza.
- Fotos propias antes que banco de imágenes, siempre. Ver `public/fotos/LEEME.md`.
- Al interpolar en Astro, cuidado con el espacio antes de `{variable}`: un salto de línea
  entre la palabra y la llave se colapsa y las pega ("más de50 años").
- Antes de dar un bloque por terminado: `npm run build`, `npm run check` y capturas con Chromium en escritorio y móvil.

## Reglas aprendidas
- (vacío por ahora)
