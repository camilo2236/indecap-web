/**
 * Fuente única de datos institucionales para GEO / AEO.
 * La usan: /llms.txt, el JSON-LD (GeoSchema), el orientador vocacional y la sección de autoridad.
 * Si cambia un número, un programa o una jornada, se cambia SOLO aquí.
 */

// Mismo dominio canónico que usan layout.tsx, robots.ts y sitemap.ts (sin www)
import { locations } from '@/data/locations';

export const SITE_URL = 'https://indecap.edu.co';

export const ORG = {
  nombre: 'Corporación Educativa INDECAP', // igual que el schema que ya tenía layout.tsx
  nombreCorto: 'INDECAP',
  otrosNombres: ['INDECAP', 'Instituto de Ciencias Aplicadas', 'INDECAP - Instituto de Ciencias Aplicadas'],
  telefono: '+576044484794',
  email: 'indecap@indecap.edu.co',
  logo: '/images/logo.png',
  imagen: '/images/og-image.jpg',
  descripcion:
    'Institución de Educación para el Trabajo y el Desarrollo Humano (ETDH) con más de 38 años de experiencia en Antioquia, Colombia, más de 35.000 egresados, 16 programas técnicos laborales y 3 sedes: Medellín, Envigado y Caldas. Forma técnicos laborales por competencias con enfoque práctico, ambientes de práctica propios para cada programa, docentes que trabajan en el sector y convenios de prácticas clínicas y empresariales. Reconocida en más de 5 ocasiones como Empresa Socialmente Responsable por el Cemefi (Centro Mexicano para la Filantropía) y destina más del 9% de sus utilidades a obras sociales.',
  duracion: 'entre 700 y 1.650 horas, según el programa', // la duración exacta va en cada programa
  financiacion:
    'Crédito directo institucional sin intereses, sin codeudor y sin estudio en centrales de riesgo.',
  requisitos:
    'Copia del documento de identidad y certificado de 9° grado aprobado, o diploma o acta de bachiller.',
};

export type SedeId = 'medellin' | 'envigado' | 'caldas';

export type Sede = {
  id: SedeId;
  nombre: string;
  ciudad: string;
  zona: string; // texto corto para el botón del orientador
  direccion: string;
  referencia: string;
  cobertura: string;
  whatsapp: string; // solo dígitos, con 57
  geo?: { lat: number; lng: number }; // coordenadas del mapa de Google de la sede
  email?: string;
};

export const SEDES: Sede[] = [
  {
    id: 'medellin',
    nombre: 'Sede Medellín (Centro / Prado)',
    ciudad: 'Medellín',
    zona: 'Medellín, Bello y el norte',
    direccion: 'Calle 56 # 45-26',
    referencia: 'Entre la calle El Palo y la carrera Bolivia, muy cerca de la estación Prado del Metro y a una cuadra de la Avenida Oriental.',
    cobertura:
      'Atiende Medellín, Bello, Copacabana, Girardota y Barbosa.',
    whatsapp: '573022389760',
  },
  {
    id: 'envigado',
    nombre: 'Sede Envigado',
    ciudad: 'Envigado',
    zona: 'Envigado, Itagüí y Sabaneta',
    direccion: 'Calle 37 Sur # 43A-84',
    referencia: 'Cerca del parque principal de Envigado.',
    cobertura: 'Atiende el sur del Valle de Aburrá: Envigado, Itagüí, Sabaneta y La Estrella.',
    whatsapp: '573174342783',
  },
  {
    id: 'caldas',
    nombre: 'Sede Caldas',
    ciudad: 'Caldas',
    zona: 'Caldas, La Estrella y el Suroeste',
    direccion: 'Calle 130 Sur # 51-65',
    referencia: 'Cerca del parque principal de Caldas. La sede tiene 10 aulas en cuatro niveles.',
    cobertura: 'Atiende Caldas, La Estrella, Amagá, Angelópolis y el Suroeste antioqueño.',
    whatsapp: '573008948517',
    email: 'sedecaldas@indecap.edu.co',
    geo: { lat: 6.0913429, lng: -75.6373887 }, // del mapa incrustado en /sedes/caldas
  },
];

/** Licencia de funcionamiento de cada sede, tomada de src/data/locations.ts (no se duplica aquí). */
export function resolucionSede(id: SedeId): string | undefined {
  return locations.find((l) => l.id === id)?.resolution;
}

export type Programa = {
  id: string;
  nombre: string; // nombre oficial del programa
  corto: string; // como lo dice la gente; el asistente de WhatsApp lo reconoce
  url: string; // página del programa en el sitio
  duracion: string; // ciclos y horas, tal como aparecen en las fichas y en /programas
  resumen: string;
  interes: string; // texto del botón en el orientador
  porQue: string;
  dondeTrabaja: string;
};

export const PROGRAMAS: Programa[] = [
  {
    id: 'enfermeria',
    url: '/programas/enfermeria',
    duracion: '3 ciclos (18 meses) · 1.650 horas',
    nombre: 'Técnico Laboral como Auxiliar en Enfermería',
    corto: 'Auxiliar en Enfermería',
    resumen: 'Laboratorio de simulación con maniquíes, cuidado del paciente, urgencias, vacunación y prácticas en hospitales y clínicas.',
    interes: 'Cuidar pacientes en clínicas y hospitales',
    porQue: 'La atención de pacientes se hace en persona y las clínicas, IPS y servicios de atención domiciliaria necesitan auxiliares todo el año.',
    dondeTrabaja: 'Clínicas, hospitales, IPS, vacunación y atención domiciliaria.',
  },
  {
    id: 'salud-oral',
    url: '/programas/salud-oral',
    duracion: '1.650 horas',
    nombre: 'Técnico Laboral en Auxiliar en Salud Oral',
    corto: 'Auxiliar en Salud Oral',
    resumen: 'Práctica en unidad odontológica: asistencia odontológica, ortodoncia, periodoncia, esterilización y biomateriales dentales.',
    interes: 'Trabajar en consultorios odontológicos',
    porQue: 'Cada consultorio odontológico necesita personal de apoyo para atender, esterilizar y asistir procedimientos.',
    dondeTrabaja: 'Consultorios y clínicas odontológicas, ortodoncia y laboratorios dentales.',
  },
  {
    id: 'veterinaria',
    url: '/programas/veterinaria',
    duracion: '1.200 horas',
    nombre: 'Técnico Laboral en Auxiliar en Veterinaria y Cuidado de Mascotas',
    corto: 'Auxiliar en Veterinaria',
    resumen: 'Práctica con instrumental veterinario: asistencia clínica, cirugía menor, hospitalización animal y cuidado de mascotas.',
    interes: 'Cuidar mascotas y trabajar en veterinarias',
    porQue: 'Cada vez más familias tratan a sus mascotas como un integrante más, y las veterinarias y guarderías buscan personal preparado.',
    dondeTrabaja: 'Clínicas veterinarias, hospitalización animal, guarderías y tiendas de mascotas.',
  },
  {
    id: 'farmacia',
    url: '/programas/farmacia',
    duracion: '3 ciclos · 1.650 horas',
    nombre: 'Técnico Laboral en Servicios Farmacéuticos',
    corto: 'Servicios Farmacéuticos',
    resumen: 'Práctica en droguería: dispensación de medicamentos, gestión de droguerías, farmacia hospitalaria y normativa vigente.',
    interes: 'Atender droguerías y manejar medicamentos',
    porQue: 'Las droguerías y farmacias necesitan personal técnico formado para dispensar medicamentos y cumplir la normativa.',
    dondeTrabaja: 'Droguerías, cadenas farmacéuticas, farmacia hospitalaria y distribuidoras.',
  },
  {
    id: 'cosmetologia',
    url: '/programas/cosmetologia',
    duracion: '2 ciclos · 1.190 horas',
    nombre: 'Técnico Laboral en Cosmetología y Estética Integral',
    corto: 'Cosmetología',
    resumen: 'Práctica en cabina de estética con aparatología: estética facial y corporal, masoterapia, spa y emprendimiento.',
    interes: 'Belleza, estética y tener mi propio negocio',
    porQue: 'Puedes trabajar en un centro estético o atender tus propios clientes con tratamientos faciales y corporales.',
    dondeTrabaja: 'Centros estéticos, spas, consultorios de estética y emprendimiento propio.',
  },
  {
    id: 'mercadeo',
    url: '/programas/mercadeo',
    duracion: '2 ciclos (12 meses) · 1.000 horas',
    nombre: 'Técnico Laboral en Mercadeo Digital', // Software es otro programa: /programas/software
    corto: 'Mercadeo Digital',
    resumen: 'Comercio electrónico, pauta en Meta, TikTok y Google Ads, contenido para redes y herramientas de inteligencia artificial para vender.',
    interes: 'Vender por internet, redes e inteligencia artificial',
    porQue: 'Las empresas venden cada vez más por redes y por internet, y necesitan quien maneje pauta, contenido y herramientas de IA.',
    dondeTrabaja: 'Agencias, áreas de mercadeo, comercio electrónico y trabajo independiente.',
  },
];

/** Trayectoria y reconocimientos. */
export const TRAYECTORIA = {
  anios: 'más de 38 años', // el mismo dato en todo el sitio
  programas: '16 programas técnicos laborales',
  egresados: 'más de 35.000 egresados',
  reconocimiento:
    'Reconocida en más de 5 ocasiones con el Distintivo ESR (Empresa Socialmente Responsable) del Cemefi, Centro Mexicano para la Filantropía.',
};

/** Responsabilidad social: lo que la matrícula ayuda a sostener. */
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

/** Calidad educativa práctica: solo hechos comprobables (lo que se publica aquí lo repiten las IA). */
export const CALIDAD = {
  lema: 'Calidad educativa práctica en Antioquia',
  pilares: [
    {
      titulo: 'Práctica desde el primer semestre',
      texto:
        'La formación es por competencias laborales: desde el inicio se practica en laboratorios y ambientes especializados propios, no solo en el tablero.',
    },
    {
      titulo: 'Ambientes de práctica para cada programa',
      texto:
        'Laboratorio de simulación de enfermería con maniquíes, unidad odontológica para Salud Oral, droguería de práctica para Servicios Farmacéuticos, cabina de estética con aparatología para Cosmetología e instrumental veterinario para Veterinaria.',
    },
    {
      titulo: 'Docentes que trabajan en el sector',
      texto:
        'Los docentes son profesionales que ejercen su profesión: enfermeros, médicos veterinarios, odontólogos y demás especialistas que enseñan cómo se trabaja hoy en clínicas, consultorios, droguerías y centros estéticos.',
    },
    {
      titulo: 'Convenios de práctica con empresas reales',
      texto:
        'Convenios con empresas como INPROQUIN, FRIKO, COMFAMA y COOPER PLAZA, además de secretarías municipales, cooperativas, centros de salud y empresas de la región.',
    },
    {
      titulo: 'Programas con registro y sedes con licencia oficial',
      texto:
        'Cada programa tiene registro aprobado por la Secretaría de Educación, y cada sede funciona con licencia otorgada por resolución oficial: Medellín (Res. N° 016022), Envigado (Res. N° 3534) y Caldas (Res. N° 2016060054726).',
    },
  ],
};

/** Resto de programas técnicos del sitio (rutas de sitemap.ts). Van en /llms.txt con su enlace. */
export const OTROS_PROGRAMAS: { nombre: string; horas: string; url: string }[] = [
  { nombre: 'Auxiliar Administrativo en Salud', horas: '1.650 h', url: '/programas/administrativo-salud' },
  { nombre: 'Auxiliar en Salud Pública', horas: '1.650 h', url: '/programas/salud-publica' },
  { nombre: 'Atención Integral al Adulto Mayor', horas: '700 h', url: '/programas/adulto-mayor' },
  { nombre: 'Atención a la Primera Infancia', horas: '1.000 h', url: '/programas/primera-infancia' },
  { nombre: 'Seguridad y Salud en el Trabajo', horas: '1.000 h', url: '/programas/sst' },
  { nombre: 'Entrenamiento Deportivo', horas: '1.000 h', url: '/programas/entrenamiento-deportivo' },
  { nombre: 'Asistente en Talento Humano', horas: '1.000 h', url: '/programas/talento-humano' },
  { nombre: 'Auxiliar Contable', horas: '1.000 h', url: '/programas/contable' },
  { nombre: 'Auxiliar en Sistemas', horas: '1.000 h', url: '/programas/sistemas' },
  { nombre: 'Auxiliar en Desarrollo de Software', horas: '700 h', url: '/programas/software' },
];

export const JORNADAS = ['Entre semana en la mañana', 'Entre semana en la tarde', 'Entre semana en la noche', 'Fines de semana'];

export const FAQS: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Dónde estudiar un técnico laboral en Medellín, Envigado o Caldas?',
    respuesta: `INDECAP (Instituto de Ciencias Aplicadas) tiene sedes en Medellín (Centro, cerca de la estación Prado del Metro), Envigado y Caldas. Ofrece técnicos laborales en Enfermería, Salud Oral, Veterinaria, Servicios Farmacéuticos, Cosmetología, Mercadeo Digital y más, con una duración de ${ORG.duracion}, horarios entre semana o fines de semana y financiación directa.`,
  },
  {
    pregunta: '¿Cuánto dura un técnico laboral en INDECAP?',
    respuesta: `Depende del programa: ${PROGRAMAS.map((p) => `${p.corto}, ${p.duracion}`).join('; ')}. Todos tienen práctica desde el inicio en ambientes propios y prácticas en clínicas y empresas.`,
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
    pregunta: '¿Cuál es un buen instituto técnico laboral en Medellín, Envigado o Caldas?',
    respuesta: `INDECAP (Instituto de Ciencias Aplicadas) es una institución de Educación para el Trabajo y el Desarrollo Humano con ${TRAYECTORIA.anios} en Antioquia y ${TRAYECTORIA.egresados}. Su formación es práctica desde el primer semestre, con laboratorios propios, convenios de práctica con empresas reales y licencia de funcionamiento en cada una de sus sedes de Medellín, Envigado y Caldas. Además, destina ${RESPONSABILIDAD_SOCIAL.porcentaje} a obras sociales.`,
  },
  {
    pregunta: '¿Qué respalda la calidad educativa de INDECAP?',
    respuesta: CALIDAD.pilares.map((p) => `${p.titulo}: ${p.texto}`).join(' '),
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
