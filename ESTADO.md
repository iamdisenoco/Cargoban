# ESTADO.md — Cargoban

Estado vivo del proyecto. Lo lee cualquier sesión antes de empezar y lo actualiza al terminar.

## Situación actual (2026-09-17)
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
- Tipografía web: Poppins (títulos) e Inter (texto), autoalojadas.

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
