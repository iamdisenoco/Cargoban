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
      'Loading and discharge of general cargo and containers',
      'Stowage and unstowage in holds and on deck',
      'Lashing and unlashing',
      'Equipment lifting',
      'Hatch cover handling',
      'Vehicle handling on Ro‑Ro vessels',
      'Cargo tally and traceability',
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
    titulo: 'Storage and warehousing',
    resumen: 'Cargo warehousing in Urabá.',
    detalle:
      'Space to store cargo, including customs-cleared cargo, with inventory control and tracking of every movement.',
    items: ['Cargo warehousing', 'Customs-cleared cargo', 'Inventory control', 'Movement traceability'],
  },
  {
    ...es.servicios[3],
    titulo: 'Equipment rental',
    resumen: 'Equipment available to support the operation.',
    detalle:
      'We provide containers and the equipment needed for cargo handling, with operators when required.',
    items: ['Containers', 'Forklifts', 'Pallet jacks', 'Operational support equipment'],
  },
  {
    ...es.servicios[4],
    titulo: 'Container services',
    resumen: 'Care for each container before, during and after the operation.',
    detalle:
      'We inspect, prepare and move each container with the right equipment, and leave it inspected, clean and ready for its next voyage.',
    items: [
      'Hooking and lifting',
      'Pre-check of loading equipment',
      'Inspection and monitoring',
      'Washing',
      'Repair',
      'Quality inspections',
    ],
  },
];

export const tecnologia: typeof es.tecnologia = {
  ...es.tecnologia,
  texto:
    'We develop and apply technology solutions that improve processes and cut time in operational and administrative tasks, with online reporting and accurate information.',
  apps: [
    { nombre: 'Quality Web', funcion: 'Quality report supervision' },
    { nombre: 'Cargo Web', funcion: 'Logistics operation and resource control' },
    { nombre: 'Cargo Quality', funcion: 'Quality at the packing plant' },
    { nombre: 'Quality Field', funcion: 'Quality in the field and on the farm' },
    { nombre: 'Check Box', funcion: 'Traceability control' },
  ],
};

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

export const razones: typeof es.razones = [
  { icono: 'experiencia', titulo: `More than ${es.empresa.anios} years of experience` },
  { icono: 'innovacion', titulo: 'Process innovation' },
  { icono: 'rendimiento', titulo: 'High operational performance' },
  { icono: 'legal', titulo: 'Legal compliance' },
  { icono: 'sst', titulo: 'Occupational health and safety management system' },
  { icono: 'costos', titulo: 'Competitive costs' },
  { icono: 'adaptacion', titulo: 'Adapted to each client’s needs' },
  { icono: 'personal', titulo: 'Highly trained personnel' },
];

export const valores: typeof es.valores = [
  {
    nombre: 'Integrity',
    texto: 'We fully comply with the processes we work in, in an ethical, respectful and transparent way.',
  },
  {
    nombre: 'Commitment',
    texto: 'We work with motivation, constant analysis and passion, building credibility in our services.',
  },
  {
    nombre: 'Responsibility',
    texto: 'We provide timely service with quality, safety and on-time delivery.',
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
