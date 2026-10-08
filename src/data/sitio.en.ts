/**
 * Contenido en inglés (Jon, 02/10). Misma forma que `sitio.ts`; lo que no depende del
 * idioma (logos de clientes, sedes, teléfonos) se toma de allá para no duplicarlo.
 * Traducción con el vocabulario del sector portuario; Cargoban debe revisarla, igual
 * que lo marcado PROVISIONAL en la versión en español.
 */
import * as es from './sitio';

export { clientes, sedes, numeroMarcable } from './sitio';

export const empresa = {
  ...es.empresa,
  lema: 'Logistics and port operator',
  whatsapp: {
    ...es.empresa.whatsapp,
    mensaje: 'Hello, I would like information about an operation with Cargoban.',
  },
};

export const enlaceWhatsapp = `https://wa.me/${empresa.whatsapp.numero}?text=${encodeURIComponent(empresa.whatsapp.mensaje)}`;

export const certificaciones: typeof es.certificaciones = [
  { ...es.certificaciones[0], nombre: 'Security Management System' },
  { ...es.certificaciones[1], nombre: 'Quality Management System' },
];

export const navegacion = [
  { etiqueta: 'About us', href: '#nosotros' },
  { etiqueta: 'Services', href: '#servicios' },
  ...(es.clientes.length > 0 ? [{ etiqueta: 'Clients', href: '#clientes' }] : []),
  { etiqueta: 'Sustainability', href: '#sostenibilidad' },
  { etiqueta: 'Contact', href: '#contacto' },
];

export const servicios: typeof es.servicios = [
  {
    ...es.servicios[0],
    titulo: 'Port operations',
    resumen: 'Lashing, unlashing and cargo handling on board and at the quay.',
    detalle:
      'We operate directly at the quay with our own crews and established procedures, protecting the cargo in every move between the vessel and the yard.',
    items: [
      'Cargo stowage and unstowage',
      'Port equipment operators',
      'Cargo tally and traceability',
      'Container lashing and unlashing',
      'Vehicle handling on Ro‑Ro vessels',
      'Support during authority inspections',
    ],
  },
  {
    ...es.servicios[1],
    titulo: 'Off-port logistics',
    resumen: 'Everything that happens to the cargo once it leaves the port.',
    detalle:
      'We move, store and prepare cargo outside the terminal, with end-to-end control and traceability.',
    items: [
      'Land transportation',
      'Warehousing',
      'Consolidation',
      'Deconsolidation',
      'Distribution, repacking and labeling',
    ],
  },
  {
    ...es.servicios[2],
    titulo: 'Storage',
    resumen: 'Warehousing for customs-cleared cargo in Urabá.',
    detalle:
      'Space to store cargo after customs clearance, with inventory control and tracking of every movement.',
    items: ['Customs-cleared cargo', 'Inventory control', 'Movement traceability'],
  },
  {
    ...es.servicios[3],
    titulo: 'Equipment rental',
    resumen: 'Equipment available to support the operation.',
    detalle:
      'We provide the equipment needed for cargo handling, with operators when required.',
    items: ['Forklifts', 'Pallet jacks', 'Operational support equipment'],
  },
];

export const tiposDeCarga = [
  'Refrigerated cargo',
  'Frozen',
  'Perishables',
  'Bagged cargo',
  'Oversized cargo',
  'Machinery',
  'Vehicles',
  'Bulk',
];

export const razones = [
  {
    titulo: 'Proven track record',
    texto: 'More than five decades operating in the ports of the Colombian Caribbean.',
  },
  {
    titulo: 'Cargo integrity',
    texto:
      'Standardized procedures and qualified personnel in every handling step, from the vessel to final delivery.',
  },
  {
    titulo: 'Traceability of every move',
    texto: 'Cargo tally and records at every stage, from the quay to the warehouse.',
  },
  {
    titulo: 'Presence in two ports',
    texto: 'Offices in Urabá and Santa Marta, two strategic hubs of Colombian foreign trade.',
  },
];

export const cifras: typeof es.cifras = [
  { ...es.cifras[0], texto: 'years of experience' },
  { ...es.cifras[1], texto: 'containers handled' },
  { ...es.cifras[2], texto: 'boxes handled' },
];

export const fundacion = {
  ...es.fundacion,
  nombre: 'Cargoban Foundation',
  lineas: [
    'Entrepreneurship and handcrafted jewelry',
    'Recreation, culture and sports',
    'Community revitalization',
    'Schools and community spaces',
    'Environmental strengthening',
  ],
};

export const fondecar = {
  ...es.fondecar,
  beneficios: [
    'Savings',
    'Home and/or vehicle loans',
    'Sports tournaments',
    'Social assistance',
    'School bonuses and grants',
  ],
};
