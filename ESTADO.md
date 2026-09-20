# ESTADO.md — Cargoban

Estado vivo del proyecto. Lo lee cualquier sesión antes de empezar y lo actualiza al terminar.

## Situación actual (2026-09-18)
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
1. **Logo horizontal en el header.** El manual exige aprobación de la compañía para usarlo. Por defecto se mantiene.
2. **¿Los clientes inician sesión?** Jon dijo "que los clientes ingresen". Se asume que significa visitar el sitio,
   sin login. Si hay portal de clientes, el stack cambia a Next.js.
3. **Contenido real.** Falta de Cargoban: texto institucional, misión, visión, valores, portafolio real de servicios,
   lista y logos de clientes, direcciones, teléfonos, correo y fotografías propias de la operación.
   Todo lo PROVISIONAL está marcado en `src/data/sitio.ts`.

## Plan de bloques propuesto
- Bloque 0: arranque del repo (este PR).
- Bloque 1: scaffold, marca, layout y página de inicio (este PR).
- Bloque 2: conectar el repo a Cloudflare Pages (requiere la cuenta de Jon) y obtener URL de vista previa.
- Bloque 3: contenido real de Cargoban: nosotros, servicios detallados, clientes, fotografías.
- Bloque 4: contacto con formulario funcional.
- Bloque 5: SEO, rendimiento, y conexión del dominio `www.cargobanoperador.com` al final.

## Bitácora
- 2026-09-17: se crea el repo y la rama `claude/nuevo-sitio-web-g9z253`.
- 2026-09-17: se crea `main`. Jon entrega el manual de marca y el brief. Bloque 1 construido y verificado.
- 2026-09-18: Jon rechaza el diseño por anticuado y entrega piezas de Instagram como referencia.
  Rediseño completo sobre la misma rama. Verificado en escritorio y móvil.
