/** Contenido del sitio en el idioma pedido: `contenido('en').servicios`. */
import * as es from './sitio';
import * as en from './sitio.en';
import type { Idioma } from '../i18n/idioma';

export const contenido = (idioma: Idioma) => (idioma === 'en' ? en : es);
