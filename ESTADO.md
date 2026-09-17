# ESTADO.md — Cargoban

Estado vivo del proyecto. Lo lee cualquier sesión antes de empezar y lo actualiza al terminar.

## Situación actual (2026-09-17)
- Repo recién creado. Sin código todavía.
- Bloque 0 (este PR): arranque del repo con `AGENTS.md` y `ESTADO.md`.

## Decisiones abiertas (esperan a Jon)
1. **Qué es Cargoban y qué debe hacer el sitio.**
   Por defecto: sitio institucional de una empresa de transporte de carga
   (inicio, servicios, nosotros, contacto con formulario de cotización).
2. **Stack.** Recomendado: Astro + Tailwind, desplegado como sitio estático (Vercel o Cloudflare Pages).
   Si el sitio necesita panel de administración o cuentas de usuario, pasar a Next.js + Supabase.
3. **Identidad visual.** ¿Existe logo, paleta y tipografía? Por defecto se arranca con una paleta provisional
   y se reemplaza cuando llegue la marca.

## Plan de bloques propuesto
- Bloque 0: arranque del repo (este PR).
- Bloque 1: scaffold del stack elegido, layout base, despliegue de vista previa.
- Bloque 2: páginas de contenido (inicio, servicios, nosotros).
- Bloque 3: contacto / cotización con envío de formulario.
- Bloque 4: SEO, rendimiento, dominio.

## Bitácora
- 2026-09-17: se crea el repo y la rama `claude/nuevo-sitio-web-g9z253`.
