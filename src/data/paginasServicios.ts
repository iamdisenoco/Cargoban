/**
 * Cada servicio tiene su página (Jon, 23/10: «debemos ampliar esa información»), con
 * menú desplegable en la cabecera. Aquí van la dirección en cada idioma y la foto
 * propia de cada uno. Los textos siguen en `sitio.ts` y `sitio.en.ts`.
 */
import type { Idioma } from '../i18n/idioma';

export const paginasServicios = [
  {
    numero: '01',
    ruta: { es: 'operaciones-portuarias', en: 'port-operations' },
    foto: '/fotos/portada-izaje.webp',
    alt: { es: 'Izaje de una llanta sobre contenedores en el muelle', en: 'Lifting a tyre over containers at the quay' },
  },
  {
    numero: '02',
    ruta: { es: 'logistica-extraportuaria', en: 'off-port-logistics' },
    foto: '/fotos/portada-operario.webp',
    alt: { es: 'Operario de Cargoban junto a un tractocamión', en: 'Cargoban operator next to a tractor unit' },
  },
  {
    numero: '03',
    ruta: { es: 'almacenamiento-y-bodegaje', en: 'storage-and-warehousing' },
    foto: '/fotos/nosotros-montacargas.webp',
    alt: { es: 'Operario de Cargoban moviendo un palé de banano con montacargas', en: 'Cargoban operator moving a pallet of bananas with a forklift' },
  },
  {
    numero: '04',
    ruta: { es: 'alquiler-de-equipos', en: 'equipment-rental' },
    foto: '/fotos/nosotros-maersk.webp',
    alt: { es: 'Operarios de Cargoban junto a una caseta y un contenedor refrigerado', en: 'Cargoban crew next to a booth and a refrigerated container' },
  },
  {
    numero: '05',
    ruta: { es: 'servicios-a-contenedores', en: 'container-services' },
    foto: '/fotos/nosotros-planilla.webp',
    alt: { es: 'Operarios de Cargoban revisando una planilla junto a un contenedor', en: 'Cargoban crew reviewing a checklist next to a container' },
  },
] as const;

const carpeta: Record<Idioma, string> = { es: '/servicios/', en: '/en/services/' };

/** Dirección de la página de un servicio: rutaServicio('en', '03') → /en/services/storage-and-warehousing/ */
export const rutaServicio = (idioma: Idioma, numero: string) => {
  const pagina = paginasServicios.find((p) => p.numero === numero);
  return pagina ? `${carpeta[idioma]}${pagina.ruta[idioma]}/` : carpeta[idioma];
};
