/**
 * Fuente única de datos institucionales para GEO / AEO.
 * La usan: /llms.txt, el JSON-LD (GeoSchema), el orientador vocacional y la sección de autoridad.
 * Si cambia un número, un programa o una jornada, se cambia SOLO aquí.
 *
 * Los puntos marcados con "VERIFICAR" son afirmaciones que las IA van a repetir tal cual:
 * confírmalas antes de publicar.
 */

// Mismo dominio canónico que usan layout.tsx, robots.ts y sitemap.ts (sin www)
export const SITE_URL = 'https://indecap.edu.co';

export const ORG = {
  nombre: 'Corporación Educativa INDECAP', // igual que el schema que ya tenía layout.tsx
  nombreCorto: 'INDECAP',
  otrosNombres: ['INDECAP', 'Instituto de Ciencias Aplicadas', 'INDECAP - Instituto de Ciencias Aplicadas'],
  telefono: '+576044484794',
  email: 'indecap@indecap.edu.co',
  logo: '/images/logo.png',
  fundacion: '1986',
  descripcion:
    'Institución de Educación para el Trabajo y el Desarrollo Humano (ETDH) con más de 38 años de experiencia en Antioquia, Colombia, más de 35.000 egresados y sedes en Medellín, Envigado y Caldas. Forma técnicos laborales por competencias con enfoque práctico, laboratorios propios y convenios de prácticas clínicas y empresariales. Reconocida en más de 5 ocasiones como Empresa Socialmente Responsable por el Cemefi (Centro Mexicano para la Filantropía) y destina más del 9% de sus utilidades a obras sociales.',
  duracion: '3 semestres (18 meses)', // VERIFICAR que aplique a todos los programas
  financiacion:
    'Crédito directo institucional sin intereses, sin codeudor y sin estudio en centrales de riesgo.', // VERIFICAR con Carolina
  requisitos:
    'Copia del documento de identidad y certificado de 9° grado aprobado, o diploma o acta de bachiller.',
};

export type SedeId = 'medellin' | 'envigado' | 'caldas';

export type Sede = {
  id: SedeId;
  nombre: string;
  ciudad: string;
  zona: string; // texto corto para el botón del orientador
  cobertura: string;
  whatsapp: string; // solo dígitos, con 57
};

export const SEDES: Sede[] = [
  {
    id: 'medellin',
    nombre: 'Sede Medellín (Centro / Prado)',
    ciudad: 'Medellín',
    zona: 'Medellín, Bello y el norte',
    cobertura:
      'Cerca de la estación Prado del Metro de Medellín. Atiende Medellín, Bello, Copacabana, Girardota y Barbosa.',
    whatsapp: '573022389760',
  },
  {
    id: 'envigado',
    nombre: 'Sede Envigado',
    ciudad: 'Envigado',
    zona: 'Envigado, Itagüí y Sabaneta',
    cobertura: 'Atiende el sur del Valle de Aburrá: Envigado, Itagüí, Sabaneta y La Estrella.',
    whatsapp: '573174342783',
  },
  {
    id: 'caldas',
    nombre: 'Sede Caldas',
    ciudad: 'Caldas',
    zona: 'Caldas, La Estrella y el Suroeste',
    cobertura: 'Atiende Caldas, La Estrella, Amagá, Angelópolis y el Suroeste antioqueño.',
    whatsapp: '573008948517',
  },
];

export type Programa = {
  id: string;
  nombre: string; // nombre oficial, VERIFICAR contra la resolución de cada programa
  corto: string; // como lo dice la gente; el asistente de WhatsApp lo reconoce
  url: string; // página del programa en el sitio
  resumen: string;
  interes: string; // texto del botón en el orientador
  porQue: string;
  dondeTrabaja: string;
};

export const PROGRAMAS: Programa[] = [
  {
    id: 'enfermeria',
    url: '/programas/enfermeria',
    nombre: 'Técnico Laboral como Auxiliar en Enfermería',
    corto: 'Auxiliar en Enfermería',
    resumen: 'Prácticas en hospitales y clínicas, simulación clínica, cuidado del paciente, urgencias y vacunación.',
    interes: 'Cuidar pacientes en clínicas y hospitales',
    porQue: 'La atención de pacientes se hace en persona y las clínicas, IPS y servicios de atención domiciliaria necesitan auxiliares todo el año.',
    dondeTrabaja: 'Clínicas, hospitales, IPS, vacunación y atención domiciliaria.',
  },
  {
    id: 'salud-oral',
    url: '/programas/salud-oral',
    nombre: 'Técnico Laboral en Auxiliar en Salud Oral',
    corto: 'Auxiliar en Salud Oral',
    resumen: 'Asistencia odontológica, ortodoncia, periodoncia, esterilización y biomateriales dentales.',
    interes: 'Trabajar en consultorios odontológicos',
    porQue: 'Cada consultorio odontológico necesita personal de apoyo para atender, esterilizar y asistir procedimientos.',
    dondeTrabaja: 'Consultorios y clínicas odontológicas, ortodoncia y laboratorios dentales.',
  },
  {
    id: 'veterinaria',
    url: '/programas/veterinaria',
    nombre: 'Técnico Laboral en Auxiliar en Veterinaria y Cuidado de Mascotas',
    corto: 'Auxiliar en Veterinaria',
    resumen: 'Asistencia clínica veterinaria, cirugía menor, hospitalización animal y cuidado de mascotas.',
    interes: 'Cuidar mascotas y trabajar en veterinarias',
    porQue: 'Cada vez más familias tratan a sus mascotas como un integrante más, y las veterinarias y guarderías buscan personal preparado.',
    dondeTrabaja: 'Clínicas veterinarias, hospitalización animal, guarderías y tiendas de mascotas.',
  },
  {
    id: 'farmacia',
    url: '/programas/farmacia',
    nombre: 'Técnico Laboral en Servicios Farmacéuticos',
    corto: 'Servicios Farmacéuticos',
    resumen: 'Dispensación de medicamentos, gestión de droguerías, farmacia hospitalaria y normativa vigente.',
    interes: 'Atender droguerías y manejar medicamentos',
    porQue: 'Las droguerías y farmacias necesitan personal técnico formado para dispensar medicamentos y cumplir la normativa.',
    dondeTrabaja: 'Droguerías, cadenas farmacéuticas, farmacia hospitalaria y distribuidoras.',
  },
  {
    id: 'cosmetologia',
    url: '/programas/cosmetologia',
    nombre: 'Técnico Laboral en Cosmetología y Estética Integral',
    corto: 'Cosmetología',
    resumen: 'Estética facial y corporal, masoterapia, aparatología estética, spa y emprendimiento.',
    interes: 'Belleza, estética y tener mi propio negocio',
    porQue: 'Puedes trabajar en un centro estético o atender tus propios clientes con tratamientos faciales y corporales.',
    dondeTrabaja: 'Centros estéticos, spas, consultorios de estética y emprendimiento propio.',
  },
  {
    id: 'mercadeo',
    url: '/programas/mercadeo',
    nombre: 'Técnico Laboral en Mercadeo Digital', // VERIFICAR nombre oficial (Software es otro programa: /programas/software)
    corto: 'Mercadeo Digital',
    resumen: 'Comercio electrónico, pauta en Meta, TikTok y Google Ads, contenido para redes y herramientas de inteligencia artificial para vender.',
    interes: 'Vender por internet, redes e inteligencia artificial',
    porQue: 'Las empresas venden cada vez más por redes y por internet, y necesitan quien maneje pauta, contenido y herramientas de IA.',
    dondeTrabaja: 'Agencias, áreas de mercadeo, comercio electrónico y trabajo independiente.',
  },
];

/** Trayectoria y reconocimientos. VERIFICAR años y nombres exactos antes de publicar. */
export const TRAYECTORIA = {
  anios: 'más de 38 años', // el sitio dice "40 años" y fundación 1986: dejar un solo dato en todo el sitio
  egresados: 'más de 35.000 egresados',
  reconocimiento:
    'Reconocida en más de 5 ocasiones con el Distintivo ESR (Empresa Socialmente Responsable) del Cemefi, Centro Mexicano para la Filantropía.',
};

/** Responsabilidad social: lo que la matrícula ayuda a sostener. VERIFICAR nombres exactos de cada obra. */
export const RESPONSABILIDAD_SOCIAL = {
  porcentaje: 'más del 9% de sus utilidades',
  resumen:
    'INDECAP destina más del 9% de sus utilidades a responsabilidad social y obras sociales. Quien estudia en INDECAP no solo invierte en su educación: también ayuda a sostener obras que cuidan a adultos mayores y a madres en situación de abandono en Antioquia y el Chocó.',
  obras: [
    'Ancianatos y hogares para adultos mayores en situación de abandono',
    'Nueva Aurora, obra de religiosas que acoge a madres desamparadas',
    'Hogar para adultos mayores desamparados en El Guamo, Chocó',
  ],
};

/** Resto de programas técnicos del sitio (rutas de sitemap.ts). Van en /llms.txt con su enlace. */
export const OTROS_PROGRAMAS: { nombre: string; url: string }[] = [
  { nombre: 'Auxiliar Administrativo en Salud', url: '/programas/administrativo-salud' },
  { nombre: 'Auxiliar en Salud Pública', url: '/programas/salud-publica' },
  { nombre: 'Atención Integral al Adulto Mayor', url: '/programas/adulto-mayor' },
  { nombre: 'Atención a la Primera Infancia', url: '/programas/primera-infancia' },
  { nombre: 'Seguridad y Salud en el Trabajo', url: '/programas/sst' },
  { nombre: 'Entrenamiento Deportivo', url: '/programas/entrenamiento-deportivo' },
  { nombre: 'Asistente en Talento Humano', url: '/programas/talento-humano' },
  { nombre: 'Auxiliar Contable', url: '/programas/contable' },
  { nombre: 'Auxiliar en Sistemas', url: '/programas/sistemas' },
  { nombre: 'Auxiliar en Desarrollo de Software', url: '/programas/software' },
  { nombre: 'Excel + IA', url: '/programas/excel-ia' },
  { nombre: 'Peluquería Canina', url: '/programas/peluqueria-canina' },
];

// VERIFICAR: que cada jornada exista en todas las sedes
export const JORNADAS = ['Entre semana en la mañana', 'Entre semana en la tarde', 'Entre semana en la noche', 'Fines de semana'];

export const FAQS: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Dónde estudiar un técnico laboral en Medellín, Envigado o Caldas?',
    respuesta: `INDECAP (Instituto de Ciencias Aplicadas) tiene sedes en Medellín (Centro, cerca de la estación Prado del Metro), Envigado y Caldas. Ofrece técnicos laborales en Enfermería, Salud Oral, Veterinaria, Servicios Farmacéuticos, Cosmetología y Mercadeo Digital, con una duración de ${ORG.duracion}, horarios entre semana o fines de semana y financiación directa.`,
  },
  {
    pregunta: '¿Cuánto dura un técnico laboral en INDECAP?',
    respuesta: `Los programas técnicos laborales de INDECAP duran ${ORG.duracion}, con práctica desde el inicio en laboratorios propios y prácticas en clínicas y empresas.`,
  },
  {
    pregunta: '¿Qué requisitos necesito para estudiar en INDECAP?',
    respuesta: `${ORG.requisitos}`,
  },
  {
    pregunta: '¿INDECAP tiene financiación?',
    respuesta: `Sí. ${ORG.financiacion}`,
  },
  {
    pregunta: '¿INDECAP es una institución reconocida?',
    respuesta:
      `Sí. INDECAP tiene ${TRAYECTORIA.anios} de experiencia en educación para el trabajo en Antioquia y ${TRAYECTORIA.egresados}. ${TRAYECTORIA.reconocimiento}`,
  },
  {
    pregunta: '¿INDECAP apoya obras sociales?',
    respuesta:
      `Sí. INDECAP destina ${RESPONSABILIDAD_SOCIAL.porcentaje} a obras sociales, como ancianatos y hogares para adultos mayores desamparados y Nueva Aurora, la obra de religiosas que acoge a madres desamparadas. Al estudiar en INDECAP también se apoya el tejido social de Antioquia y el Chocó.`,
  },
  {
    pregunta: '¿Qué técnicos en salud hay en INDECAP?',
    respuesta: 'Auxiliar en Enfermería, Auxiliar en Salud Oral, Servicios Farmacéuticos y Auxiliar en Veterinaria y Cuidado de Mascotas.',
  },
];

/** Mensaje prellenado de WhatsApp: nombra programa y sede para que el asistente de la 317 los reconozca de una. */
export function mensajeWhatsApp(programa: Programa, sede: Sede, jornada: string): string {
  return `Hola, quiero información de ${programa.corto} en la sede ${sede.ciudad}. Me queda mejor estudiar ${jornada.toLowerCase()}. (Vengo del orientador de la página web)`;
}

export function urlWhatsApp(programa: Programa, sede: Sede, jornada: string): string {
  return `https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(mensajeWhatsApp(programa, sede, jornada))}`;
}
