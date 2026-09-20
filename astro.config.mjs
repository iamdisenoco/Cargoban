// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cargobanoperador.com',
  integrations: [sitemap()],
  // Por defecto Astro compila los recursos a "_astro". El guion bajo inicial da
  // problemas en varios alojamientos (GitHub Pages lo ignora sin .nojekyll, y el
  // servicio de vista previa lo rechaza), así que se usa un nombre normal.
  build: { assets: 'recursos' },
  vite: { plugins: [tailwindcss()] },
});
