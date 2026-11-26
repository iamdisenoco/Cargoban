/**
 * Fundación Cargoban: texto de la portada y de la página de cada línea de acción.
 * Fuente: texto que envió Jon el 26/11 («20 años construyendo sueños»). La versión en
 * inglés es traducción nuestra; Cargoban debe revisarla.
 *
 * Fotos PROVISIONALES: son las de la carpeta «Cargoban fundación» del Drive de Jon y
 * se asignaron a cada línea por parecido. Jon va a indicar cuál va en cada una.
 * Hay menores identificables: confirmar con la fundación el permiso de uso.
 */
import type { Idioma } from '../i18n/idioma';

type Texto = Record<Idioma, string>;

export const introFundacion = {
  titular: {
    es: '20 años construyendo *sueños* y transformando vidas',
    en: '20 years building *dreams* and transforming lives',
  } as Texto,
  // La frase entre [[ ]] va en verde (una sola por sección, regla de AGENTS.md).
  entrada: {
    es: 'Desde 2006, la Fundación Cargoban trabaja por [[el bienestar, el desarrollo social y la transformación]] de las comunidades del Urabá antioqueño y el Magdalena.',
    en: 'Since 2006, the Cargoban Foundation has worked for [[the well-being, social development and transformation]] of communities in the Urabá region of Antioquia and in Magdalena.',
  } as Texto,
  parrafos: {
    es: [
      'Impulsamos iniciativas que generan oportunidades, fortalecen capacidades y contribuyen a construir un mejor futuro para las nuevas generaciones.',
      'Creada por iniciativa de Cargoban Operador Logístico y Portuario S.A.S., la Fundación es una entidad sin ánimo de lucro que, durante dos décadas, ha convertido el compromiso social en acciones concretas, haciendo de los sueños de las comunidades una oportunidad para transformar vidas.',
      'A lo largo de estos 20 años, hemos orientado nuestros esfuerzos al desarrollo integral de niños, niñas, jóvenes, mujeres y familias, convencidos de que la educación, el deporte, la cultura, el emprendimiento y el fortalecimiento comunitario son pilares fundamentales para generar cambios sostenibles y construir territorios con mayores oportunidades.',
      'Nuestra labor comienza con la escucha y el reconocimiento de las necesidades, capacidades y potencialidades de cada comunidad. Desde allí, diseñamos e impulsamos proyectos que responden a sus realidades, fortalecen sus talentos y abren nuevos caminos para que sus habitantes sean protagonistas de su propio desarrollo.',
      'Hoy celebramos 20 años de historias, aprendizajes y sueños compartidos. Dos décadas en las que hemos trabajado con la convicción de que transformar una comunidad comienza por creer en su gente, reconocer su potencial y generar oportunidades para que cada persona pueda construir un futuro mejor.',
    ],
    en: [
      'We drive initiatives that create opportunities, build skills and help shape a better future for new generations.',
      'Founded at the initiative of Cargoban Operador Logístico y Portuario S.A.S., the Foundation is a non-profit organization that, for two decades, has turned social commitment into concrete action, making the dreams of communities an opportunity to transform lives.',
      'Over these 20 years, we have focused our efforts on the comprehensive development of children, young people, women and families, convinced that education, sports, culture, entrepreneurship and community strengthening are key pillars for lasting change and for building regions with more opportunities.',
      'Our work begins by listening to each community and recognizing its needs, abilities and potential. From there, we design and carry out projects that respond to their realities, strengthen their talents and open new paths so that people can lead their own development.',
      'Today we celebrate 20 years of stories, lessons and shared dreams. Two decades in which we have worked with the conviction that transforming a community begins by believing in its people, recognizing their potential and creating opportunities so that everyone can build a better future.',
    ],
  } as Record<Idioma, string[]>,
  lineasTitulo: { es: 'Nuestras líneas de *acción*', en: 'Our areas of *action*' } as Texto,
  lineasTexto: {
    es: 'Transformamos comunidades, construimos oportunidades y generamos bienestar a través de cinco líneas de acción, con programas y proyectos para niños, niñas, jóvenes, mujeres y familias.',
    en: 'We transform communities, build opportunities and promote well-being through five areas of action, with programs and projects for children, young people, women and families.',
  } as Texto,
};

export const lineasFundacion: {
  ruta: Texto;
  titulo: Texto;
  lema: Texto;
  foto: string;
  alt: Texto;
  parrafos: Record<Idioma, string[]>;
}[] = [
  {
    ruta: { es: 'educacion', en: 'education' },
    titulo: { es: 'Educación', en: 'Education' },
    lema: {
      es: 'Construimos oportunidades a través de una educación de calidad.',
      en: 'We build opportunities through quality education.',
    },
    foto: '/fotos/fundacion-nina.webp',
    alt: {
      es: 'Niña de una comunidad acompañada por la Fundación Cargoban',
      en: 'Girl from a community supported by the Cargoban Foundation',
    },
    parrafos: {
      es: [
        'La educación es uno de los pilares fundamentales de la Fundación Cargoban y una herramienta esencial para transformar vidas y construir un mejor futuro.',
        'Trabajamos por el fortalecimiento de la calidad educativa mediante el mejoramiento de la infraestructura física y la dotación de instituciones educativas, así como el acompañamiento y la formación de docentes, contribuyendo a generar entornos de aprendizaje adecuados y enriquecedores.',
        'Asimismo, promovemos cursos de ofimática y formación en herramientas digitales para niños, jóvenes y adultos, fortaleciendo las competencias tecnológicas necesarias para desenvolverse en los ámbitos académico, laboral y empresarial.',
        'Como parte de nuestro compromiso con el acceso a la educación y el desarrollo del talento local, impulsamos programas de becas gratuitas que permiten a jóvenes de la región acceder a oportunidades de formación técnica y ampliar sus posibilidades de desarrollo personal y profesional.',
      ],
      en: [
        'Education is one of the core pillars of the Cargoban Foundation and an essential tool to transform lives and build a better future.',
        'We work to improve the quality of education by upgrading school buildings and providing equipment to schools, as well as by supporting and training teachers, helping to create suitable and enriching learning environments.',
        'We also promote office software courses and digital skills training for children, young people and adults, strengthening the technology skills they need at school, at work and in business.',
        'As part of our commitment to access to education and to local talent, we run free scholarship programs that allow young people in the region to access technical training and expand their personal and professional opportunities.',
      ],
    },
  },
  {
    ruta: { es: 'deporte-y-recreacion', en: 'sports-and-recreation' },
    titulo: { es: 'Deporte y recreación', en: 'Sports and recreation' },
    lema: {
      es: 'Espacios para el bienestar, la convivencia y el desarrollo de talentos.',
      en: 'Spaces for well-being, community life and developing talent.',
    },
    foto: '/fotos/fundacion-sonrisa.webp',
    alt: { es: 'Niña sonriendo junto a su familia', en: 'Girl smiling with her family' },
    parrafos: {
      es: [
        'Creemos en el deporte y la recreación como herramientas fundamentales para la formación integral, la promoción de hábitos saludables y la construcción de comunidades más unidas.',
        'A través de nuestros programas impulsamos actividades físicas, jornadas recreativas y procesos de formación dirigidos a docentes y estudiantes. Asimismo, realizamos la entrega de implementos deportivos a instituciones educativas, facilitando el acceso a espacios y prácticas deportivas.',
        'Estas iniciativas promueven valores como el trabajo en equipo, la disciplina, el respeto y la solidaridad, al tiempo que brindan a niños y jóvenes alternativas positivas para el aprovechamiento del tiempo libre y el desarrollo de sus talentos.',
      ],
      en: [
        'We believe in sports and recreation as key tools for well-rounded growth, healthy habits and closer communities.',
        'Through our programs we promote physical activity, recreational days and training for teachers and students. We also donate sports equipment to schools, making it easier to access sports spaces and activities.',
        'These initiatives promote values such as teamwork, discipline, respect and solidarity, while giving children and young people positive ways to spend their free time and develop their talents.',
      ],
    },
  },
  {
    ruta: { es: 'cultura', en: 'culture' },
    titulo: { es: 'Cultura', en: 'Culture' },
    lema: {
      es: 'Preservamos nuestras raíces y fortalecemos la identidad de los territorios.',
      en: 'We preserve our roots and strengthen the identity of our regions.',
    },
    foto: '/fotos/fundacion-pintura.webp',
    alt: { es: 'Joven pintando en un taller de arte', en: 'Young person painting at an art workshop' },
    parrafos: {
      es: [
        'Reconocemos en la cultura y el arte una oportunidad para preservar las tradiciones, fortalecer la identidad y promover el sentido de pertenencia de las comunidades del Urabá antioqueño.',
        'Por medio del acompañamiento a procesos de formación artística, especialmente en danza, promovemos la participación de niños y jóvenes en espacios que les permiten descubrir y desarrollar sus talentos, expresar su creatividad y mantener vivas las manifestaciones culturales de sus territorios.',
        'De igual manera, impulsamos proyectos de creación de murales comunitarios que reflejan la historia, las costumbres y la riqueza cultural de las comunidades.',
        'Estas intervenciones contribuyen al embellecimiento de los espacios públicos y educativos, fortalecen el sentido de pertenencia y convierten el arte en una herramienta para preservar la memoria colectiva y contar las historias de nuestros territorios.',
      ],
      en: [
        'We see culture and art as an opportunity to preserve traditions, strengthen identity and foster a sense of belonging in the communities of the Urabá region of Antioquia.',
        'By supporting arts training, especially in dance, we encourage children and young people to take part in spaces where they can discover and develop their talents, express their creativity and keep the cultural traditions of their regions alive.',
        'We also support community mural projects that reflect the history, customs and cultural richness of each community.',
        'These projects make public and school spaces more beautiful, strengthen the sense of belonging and turn art into a way to preserve collective memory and tell the stories of our regions.',
      ],
    },
  },
  {
    ruta: { es: 'emprendimiento', en: 'entrepreneurship' },
    titulo: { es: 'Emprendimiento', en: 'Entrepreneurship' },
    lema: {
      es: 'Impulsamos talentos, fortalecemos capacidades y generamos oportunidades.',
      en: 'We support talent, build skills and create opportunities.',
    },
    foto: '/fotos/fundacion-taller.webp',
    alt: {
      es: 'Mujer sonriendo durante un taller de la fundación',
      en: 'Woman smiling during a foundation workshop',
    },
    parrafos: {
      es: [
        'Creemos en el emprendimiento como una herramienta para promover la autonomía económica, fortalecer las capacidades locales y contribuir al bienestar de las familias.',
        'Con especial atención al papel de las mujeres en el desarrollo de sus hogares y comunidades, impulsamos iniciativas productivas que potencian su creatividad, habilidades y espíritu emprendedor.',
        'A través de talleres de bisutería, macramé, marroquinería y elaboración de manualidades con fibra de banano, brindamos espacios de aprendizaje y formación en los que mujeres y jóvenes pueden desarrollar nuevos conocimientos, explorar sus talentos y adquirir herramientas para poner en marcha iniciativas productivas y generar ingresos.',
        'De esta manera, contribuimos al fortalecimiento del emprendimiento local y a la creación de oportunidades para construir proyectos de vida sostenibles.',
      ],
      en: [
        'We believe in entrepreneurship as a way to promote financial independence, strengthen local skills and support the well-being of families.',
        'With special attention to the role of women in the development of their homes and communities, we support income-generating projects that bring out their creativity, skills and entrepreneurial spirit.',
        'Through workshops in jewelry making, macramé, leatherwork and crafts made with banana fiber, we offer learning spaces where women and young people can gain new knowledge, explore their talents and acquire the tools to start their own businesses and earn an income.',
        'In this way, we help strengthen local entrepreneurship and create opportunities to build sustainable life plans.',
      ],
    },
  },
  {
    ruta: { es: 'desarrollo-comunitario', en: 'community-development' },
    titulo: { es: 'Desarrollo comunitario', en: 'Community development' },
    lema: {
      es: 'Mejoramos los espacios y fortalecemos el tejido social.',
      en: 'We improve shared spaces and strengthen community ties.',
    },
    foto: '/fotos/fundacion-mural.webp',
    alt: {
      es: 'Mural de un perezoso en una casa de la región',
      en: 'Mural of a sloth on a house in the region',
    },
    parrafos: {
      es: [
        'Trabajamos por comunidades con mejores condiciones para el bienestar, la integración y el desarrollo de sus habitantes.',
        'Conscientes de la importancia de contar con entornos adecuados para el crecimiento y desarrollo de la infancia, promovemos iniciativas orientadas al mejoramiento y la adecuación de espacios recreativos, educativos y comunitarios.',
        'Entre estas acciones se destaca la entrega de parques recreativos a instituciones educativas rurales del municipio de Necoclí, con el propósito de brindar a niños y niñas espacios seguros y adecuados para el juego, la recreación y la convivencia.',
        'Estas intervenciones contribuyen al mejoramiento de los entornos escolares, favorecen el desarrollo integral de la niñez y fortalecen los espacios de encuentro comunitario, especialmente en territorios rurales donde el acceso a infraestructura recreativa es limitado.',
        'En la Fundación Cargoban creemos que transformar los espacios también significa transformar las oportunidades y la calidad de vida de las comunidades.',
      ],
      en: [
        'We work for communities with better conditions for the well-being, integration and development of the people who live there.',
        'Aware of how important suitable surroundings are for children to grow and develop, we promote projects to improve and adapt recreational, educational and community spaces.',
        'A highlight of this work is the donation of playgrounds to rural schools in the municipality of Necoclí, giving children safe, suitable spaces to play and spend time together.',
        'These projects improve school surroundings, support the well-rounded development of children and strengthen community meeting places, especially in rural areas where access to recreational facilities is limited.',
        'At the Cargoban Foundation, we believe that transforming spaces also means transforming the opportunities and quality of life of communities.',
      ],
    },
  },
];

const carpeta: Record<Idioma, string> = { es: '/fundacion/', en: '/en/foundation/' };

/** Dirección de la página de una línea: rutaLinea('en', 0) → /en/foundation/education/ */
export const rutaLinea = (idioma: Idioma, i: number) => `${carpeta[idioma]}${lineasFundacion[i].ruta[idioma]}/`;

/** Parte la frase marcada con [[ ]] para ponerla en verde. */
export const partirResaltado = (texto: string) => {
  const [antes, resto = ''] = texto.split('[[');
  const [resaltado = '', despues = ''] = resto.split(']]');
  return { antes, resaltado, despues };
};
