/**
 * Contenido del sitio. Todo lo marcado PROVISIONAL debe ser confirmado o
 * reemplazado por Cargoban antes de publicar. Ver ESTADO.md.
 */
export const empresa = {
  nombre: 'Cargoban',
  lema: 'Operador logístico y portuario',
  anios: 50, // "más de 50 años" según brief de Jon
  sedes: ['Urabá', 'Santa Marta'],
  dominio: 'www.cargobanoperador.com',
  // PROVISIONAL: datos de contacto pendientes
  telefono: '',
  correo: '',
  direcciones: {
    uraba: '',
    santaMarta: '',
  },
};

export const navegacion = [
  { etiqueta: 'Inicio', href: '/#inicio' },
  { etiqueta: 'Nosotros', href: '/#nosotros' },
  { etiqueta: 'Servicios', href: '/#servicios' },
  { etiqueta: 'Clientes', href: '/#clientes' },
  { etiqueta: 'Contacto', href: '/#contacto' },
];

// PROVISIONAL: categorías típicas de un operador portuario. Cargoban debe confirmar el portafolio real.
export const servicios = [
  {
    titulo: 'Operaciones portuarias',
    descripcion:
      'Estiba y desestiba, tarja y trazabilidad de carga, consolidación y desconsolidación, operación de maquinaria portuaria.',
  },
  {
    titulo: 'Operaciones terrestres',
    descripcion:
      'Cargue y descargue, consolidación y desconsolidación de contenedores, movimiento de carga en patio.',
  },
  {
    titulo: 'Almacenamiento',
    descripcion: 'Bodegaje y almacenamiento de carga con control y trazabilidad.',
  },
  {
    titulo: 'Alquiler de equipos',
    descripcion: 'Montacargas, pallet jacks y equipos de apoyo para operación de carga.',
  },
];

// PROVISIONAL: lista de clientes pendiente de Cargoban (nombres y logos).
export const clientes: { nombre: string; logo?: string }[] = [];

// PROVISIONAL: razones de valor. Redactar con Cargoban.
export const porQue = [
  { titulo: 'Más de 50 años de experiencia', texto: 'Trayectoria continua en operación logística y portuaria en Colombia.' },
  { titulo: 'Seguridad y cuidado de la carga', texto: 'Procedimientos operativos establecidos y personal con experiencia.' },
  { titulo: 'Control y trazabilidad', texto: 'Seguimiento de cada movimiento de carga durante la operación.' },
  { titulo: 'Presencia en Urabá y Santa Marta', texto: 'Operación en dos zonas portuarias clave del Caribe colombiano.' },
];
