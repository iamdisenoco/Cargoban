/**
 * Idiomas del sitio (Jon, 02/10): español en la raíz y la versión en inglés en /en/,
 * como las páginas grandes (Nike y similares). El español sale primero; el visitante
 * elige con el selector ES | EN de la cabecera. Nada cambia de idioma solo.
 */
export type Idioma = 'es' | 'en';

export const idiomas: Idioma[] = ['es', 'en'];

/** Dirección de la portada en cada idioma. */
export const rutaInicio: Record<Idioma, string> = { es: '/', en: '/en/' };

/** Formato regional de números y etiqueta de idioma para Open Graph. */
export const regional: Record<Idioma, { numeros: string; og: string }> = {
  es: { numeros: 'es-CO', og: 'es_CO' },
  en: { numeros: 'en-US', og: 'en_US' },
};

/**
 * Elige el texto según el idioma. Se usa en línea, junto al marcado, para que cada
 * frase y su traducción queden una al lado de la otra: t('Servicios', 'Services').
 */
export const traductor = (idioma: Idioma) => (es: string, en: string) => (idioma === 'en' ? en : es);
