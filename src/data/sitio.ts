/**
 * Contenido del sitio Cargoban.
 *
 * FUENTES:
 * - Brief de Jon (17/09/2026): operador logístico y portuario, +50 años, Urabá y Santa Marta.
 * - Piezas de Instagram de Cargoban entregadas por Jon (carrusel "Nuestros servicios", 5 láminas).
 *   De ahí salen los servicios de carga y los tipos de carga: son datos REALES de la empresa.
 *
 * Lo marcado PROVISIONAL espera confirmación de Cargoban. Ver ESTADO.md.
 */

export const empresa = {
  nombre: 'Cargoban',
  lema: 'Operador logístico y portuario',
  anios: 50,
  sedes: ['Urabá', 'Santa Marta'],
  // PROVISIONAL: datos de contacto pendientes de Cargoban.
  telefono: '',
  correo: '',
};

/** PROVISIONAL: lista y logos de clientes pendientes de Cargoban. */
export const clientes: { nombre: string; logo?: string }[] = [];

/**
 * La sección de clientes solo existe si hay clientes que mostrar.
 * Una sección vacía con una nota de trabajo interno es peor que no tenerla.
 */
export const navegacion = [
  { etiqueta: 'Nosotros', href: '#nosotros' },
  { etiqueta: 'Servicios', href: '#servicios' },
  { etiqueta: 'Sostenibilidad', href: '#sostenibilidad' },
  ...(clientes.length > 0 ? [{ etiqueta: 'Clientes', href: '#clientes' }] : []),
  { etiqueta: 'Contacto', href: '#contacto' },
];

/**
 * Servicios. Los de "Carga" vienen de la lámina 3/5 del carrusel de Instagram.
 * Los de operación portuaria y alquiler son PROVISIONALES: Cargoban debe confirmarlos.
 */
export const servicios = [
  {
    numero: '01',
    titulo: 'Operaciones portuarias',
    resumen: 'Estiba, desestiba y manejo de carga a bordo y en muelle.',
    detalle:
      'Operamos directamente en muelle con personal propio y procedimientos establecidos, cuidando la carga en cada movimiento entre el buque y el patio.',
    // PROVISIONAL: lista por confirmar con Cargoban.
    items: [
      'Estiba y desestiba de carga',
      'Operadores de maquinaria portuaria',
      'Tarja y trazabilidad de carga',
      'Trincado y destrincado de contenedores',
      'Movimiento de vehículos en buques Ro‑Ro',
      'Apoyo en inspecciones de autoridades',
    ],
    provisional: true,
  },
  {
    numero: '02',
    titulo: 'Logística extraportuaria',
    resumen: 'Todo lo que pasa con la carga una vez sale del puerto.',
    detalle:
      'Movemos, guardamos y preparamos la carga fuera del terminal, con control y trazabilidad de punta a punta.',
    // Fuente: lámina 3/5 del carrusel de Instagram de Cargoban.
    items: [
      'Transporte terrestre',
      'Almacenaje',
      'Consolidación',
      'Desconsolidación',
      'Distribución, reempaque y etiquetado',
    ],
    provisional: false,
  },
  {
    numero: '03',
    titulo: 'Almacenamiento',
    resumen: 'Bodegaje de carga nacionalizada en Urabá.',
    detalle:
      'Espacio para guardar la carga después de nacionalizada, con control de inventario y seguimiento de cada movimiento.',
    items: ['Carga nacionalizada', 'Control de inventario', 'Trazabilidad de movimientos'],
    provisional: true,
  },
  {
    numero: '04',
    titulo: 'Alquiler de equipos',
    resumen: 'Equipos disponibles para apoyar la operación.',
    detalle:
      'Ponemos a disposición los equipos necesarios para el manejo de carga, con operarios cuando se requiere.',
    // PROVISIONAL: inventario real de equipos por confirmar.
    items: ['Montacargas', 'Transpaletas', 'Equipos de apoyo a la operación'],
    provisional: true,
  },
];

/** Tipos de carga. Fuente: lámina 3/5 del carrusel de Instagram de Cargoban. */
export const tiposDeCarga = [
  'Refrigerados',
  'Congelados',
  'Perecederos',
  'Sacos',
  'Proyectos',
  'Maquinaria',
  'Vehículos',
  'Granel',
];

export const razones = [
  {
    titulo: 'Trayectoria comprobada',
    texto: 'Más de cinco décadas de operación en los puertos del Caribe colombiano.',
  },
  {
    titulo: 'Integridad de la carga',
    texto:
      'Procedimientos estandarizados y personal calificado en cada manipulación, desde el buque hasta la entrega.',
  },
  {
    titulo: 'Trazabilidad de cada movimiento',
    texto: 'Tarja y registro de la carga en cada etapa, del muelle a la bodega.',
  },
  {
    titulo: 'Presencia en dos puertos',
    texto: 'Sedes en Urabá y Santa Marta, dos puntos estratégicos del comercio exterior colombiano.',
  },
];

/**
 * Cifras de la sección Nosotros, que cuentan hacia arriba al entrar en pantalla.
 * Fuente: Jon (25/09/2026). PROVISIONAL hasta que Cargoban las confirme por escrito.
 */
export const cifras = [
  { prefijo: '+', valor: 50, texto: 'años de experiencia' },
  { prefijo: '+', valor: 50000, texto: 'contenedores movilizados' },
  { prefijo: '', valor: 250000, texto: 'cajas movilizadas' },
];

/**
 * Fundación Cargoban (sección Sostenibilidad).
 * Fuente: información pública de la fundación (fundacioncargoban.org.co y directorios
 * de ONG). PROVISIONAL: Cargoban debe confirmar textos, cifras y fotos antes de publicar.
 */
export const fundacion = {
  nombre: 'Fundación Cargoban',
  desde: 2006,
  // Donde trabaja: Urabá y Santa Marta, según los directorios públicos. Confirmar.
  regiones: ['Urabá', 'Santa Marta'],
  // La dirección pública (fundacioncargoban.org.co) no resuelve en DNS al 25/09.
  // Sin web confirmada no se muestra el botón. Pedir a Cargoban la vigente, con https.
  web: '',
  lineas: [
    'Emprendimiento y bisutería',
    'Recreación, cultura y deporte',
    'Resignificación de comunidades',
    'Escuelas y espacios comunitarios',
    'Fortalecimiento ambiental',
  ],
};

/**
 * Fondo de empleados de Cargoban. Fuente: presentación corporativa que envió Jon (25/09).
 */
export const fondecar = {
  nombre: 'FONDECAR',
  beneficios: [
    'Ahorro',
    'Créditos de vivienda y/o vehículo',
    'Torneos deportivos',
    'Ayuda social',
    'Bonos y subsidios escolares',
  ],
};

/** PROVISIONAL: direcciones y teléfonos pendientes de Cargoban. */
export const sedes = [
  // Urabá es una subregión de Antioquia, no un municipio. Confirmar con Cargoban
  // el municipio exacto de la sede (Turbo, Apartadó o Necoclí) antes de publicar.
  { ciudad: 'Urabá', region: 'Antioquia', direccion: '', telefono: '' },
  { ciudad: 'Santa Marta', region: 'Magdalena', direccion: '', telefono: '' },
];
