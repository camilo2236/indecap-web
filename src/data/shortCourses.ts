export type ShortCourse = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  certification: string;
  validity: string;
  schedule: string;
  modality: string;
  benefits: string[];
  learn: string[];
  info: { label: string; value: string }[];
  ctaMessage: string;
  image?: string;
};

export const shortCourses: ShortCourse[] = [
  {
    slug: "rcp",
    image: "/images/cursos/rcp.jpg",
    title: "Curso de Reanimación Cardiopulmonar (RCP)",
    subtitle:
      "Entrena paso a paso cómo actuar en una emergencia con un enfoque 100% práctico.",
    description:
      "Aprende a reconocer una emergencia, aplicar compresiones, ventilaciones, desobstrucción de vía aérea y uso del DEA. Es una formación intensiva diseñada para fortalecer tu respuesta en situaciones críticas.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Casos de estudio reales",
      "Práctica guiada paso a paso",
      "Formación útil para entornos clínicos y comunitarios"
    ],
    learn: [
      "Compresiones torácicas efectivas",
      "Ventilaciones de apoyo",
      "Desobstrucción de vía aérea",
      "Uso básico del DEA"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega el mismo día" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Validez", value: "2 años" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de RCP en INDECAP"
  },
  {
    slug: "inyectologia",
    image: "/images/cursos/inyectologia.jpg",
    title: "Curso de Inyectología",
    subtitle:
      "Aprende técnicas necesarias para aplicar inyecciones con seguridad y confianza en una jornada intensiva.",
    description:
      "Formación práctica para fortalecer tus competencias en aplicación de inyecciones intramusculares, subcutáneas e intravenosas, con enfoque en bioseguridad y correcto manejo del procedimiento.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Formación práctica desde el primer momento",
      "Certificación el mismo día",
      "Fortalece tu perfil en el sector salud"
    ],
    learn: [
      "Aplicación intramuscular",
      "Aplicación subcutánea",
      "Aplicación intravenosa",
      "Protocolos de bioseguridad"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega el mismo día" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Validez", value: "2 años" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Inyectología en INDECAP"
  },
  {
    slug: "primeros-auxilios",
    image: "/images/cursos/primeros-auxilios.jpg",
    title: "Curso de Primeros Auxilios",
    subtitle:
      "Prepárate para actuar con seguridad y hacer la diferencia cuando más se necesita.",
    description:
      "Una formación intensiva para adquirir herramientas clave en atención inmediata ante lesiones o emergencias médicas repentinas. Ideal para quienes buscan responder con rapidez y criterio.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Capacitación útil para la vida diaria y el entorno laboral",
      "Aprendizaje práctico y directo",
      "Certificación de rápida obtención"
    ],
    learn: [
      "Atención inicial en emergencias",
      "Evaluación básica de la situación",
      "Manejo inicial de lesiones comunes",
      "Respuesta oportuna ante eventos inesperados"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega el mismo día" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Validez", value: "2 años" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Primeros Auxilios en INDECAP"
  },
  {
    slug: "codigo-fucsia",
    image: "/images/cursos/codigo-fucsia.jpg",
    title: "Curso Código Fucsia",
    subtitle:
      "Formación de alto impacto para una atención oportuna, ética y con perspectiva de género.",
    description:
      "Dirigido a profesionales y personal de salud, seguridad y atención comunitaria que necesiten fortalecer sus competencias en el manejo integral de casos de violencia de género y violencia sexual.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Aplicación práctica con estudios de caso",
      "Enfoque actualizado y ético",
      "Fortalece el perfil profesional y el impacto social"
    ],
    learn: [
      "Atención integral a víctimas",
      "Protocolos básicos de respuesta",
      "Perspectiva de género aplicada",
      "Actuación oportuna en contextos sensibles"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega al finalizar" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Dirigido a", value: "Salud, seguridad y atención comunitaria" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso Código Fucsia en INDECAP"
  },
  {
    slug: "vacunacion",
    image: "/images/cursos/vacunacion.jpg",
    title: "Curso de Vacunación",
    subtitle:
      "Fortalece tus competencias en administración segura de vacunas con una formación práctica y certificada.",
    description:
      "Este curso está diseñado para brindarte bases sólidas en administración de vacunas, cadena de frío y protocolos fundamentales del proceso. Formación intensiva y presencial con enfoque aplicado.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Formación práctica en una sola jornada",
      "Certificación el mismo día",
      "Conocimiento útil para fortalecer tu perfil profesional"
    ],
    learn: [
      "Administración segura de vacunas",
      "Cadena de frío y conservación",
      "Protocolos básicos de aplicación",
      "Buenas prácticas en procesos de inmunización"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega el mismo día" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Validez", value: "2 años" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Vacunación en INDECAP"
  },
  {
    slug: "toma-muestras",
    image: "/images/cursos/toma-muestras.jpg",
    title: "Curso de Toma de Muestras de Laboratorio Clínico",
    subtitle:
      "Aprende técnicas clave para recolección, manejo y procesamiento de muestras en una jornada intensiva.",
    description:
      "Formación práctica para quienes desean adquirir habilidades en toma de muestras con enfoque aplicado. Ideal para fortalecer competencias y ampliar oportunidades en el área de apoyo clínico y laboratorio.",
    duration: "1 día intensivo",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. a 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Capacitación intensiva y aplicada",
      "Entrega de certificación el mismo día",
      "Formación útil para contextos clínicos y de laboratorio"
    ],
    learn: [
      "Técnicas básicas de toma de muestras",
      "Manejo y procesamiento inicial",
      "Buenas prácticas en bioseguridad",
      "Preparación adecuada del procedimiento"
    ],
    info: [
      { label: "Horario", value: "8:00 a.m. a 4:00 p.m." },
      { label: "Certificación", value: "20 horas certificadas, entrega el mismo día" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Validez", value: "2 años" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Toma de Muestras de Laboratorio Clínico en INDECAP"
  },
  {
    slug: "peluqueria-estetica-canina",
    image: "/images/cursos/peluqueria-canina.jpg",
    title: "Diplomado en Peluquería y Estética Canina",
    subtitle:
      "Profesionalízate en el cuidado y embellecimiento de mascotas con una formación intensiva y práctica.",
    description:
      "Una propuesta formativa pensada para quienes quieren desarrollar habilidades reales en el cuidado estético de mascotas y fortalecer su perfil en un sector con alta proyección.",
    duration: "45 días",
    certification: "120 horas",
    validity: "Certificación de diplomado",
    schedule: "Lunes a viernes de 8:00 a.m. a 12:30 p.m. o sábados según conformación de grupo",
    modality: "Presencial",
    benefits: [
      "Formación especializada con enfoque práctico",
      "Ideal para emprender o ampliar tu perfil laboral",
      "Disponible en Medellín y Caldas"
    ],
    learn: [
      "Cuidado estético básico de mascotas",
      "Técnicas de peluquería canina",
      "Manejo adecuado del procedimiento",
      "Buenas prácticas en atención al cliente"
    ],
    info: [
      { label: "Duración", value: "45 días / 120 horas" },
      { label: "Horario", value: "Lunes a viernes de 8:00 a.m. a 12:30 p.m. o sábados según grupo" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Sedes", value: "Medellín / Caldas" }
    ],
    ctaMessage: "Hola, quiero información sobre el diplomado en Peluquería y Estética Canina en INDECAP"
  },
  {
    slug: "peluqueria-canina",
    image: "/images/cursos/peluqueria-canina.jpg",
    title: "Diplomado en Peluquería y Estética Canina",
    subtitle: "Fórmate como groomer profesional en 45 días intensivos con mascotas reales desde el primer día.",
    description: "Una propuesta formativa pensada para quienes quieren desarrollar habilidades reales en el cuidado estético de mascotas y fortalecer su perfil en un sector con alta proyección. Disponible en Medellín y Caldas con financiación directa INDECAP.",
    duration: "45 días",
    certification: "120 horas",
    validity: "Certificación de diplomado",
    schedule: "Lunes a viernes de 8:00 a.m. a 12:30 p.m. o sábados según conformación de grupo",
    modality: "Presencial",
    benefits: [
      "Formación especializada con enfoque práctico",
      "Ideal para emprender o ampliar tu perfil laboral",
      "Financiación directa con INDECAP"
    ],
    learn: [
      "Cuidado estético básico de mascotas",
      "Técnicas de peluquería canina",
      "Manejo adecuado del procedimiento",
      "Buenas prácticas en atención al cliente"
    ],
    info: [
      { label: "Duración", value: "45 días / 120 horas" },
      { label: "Horario", value: "Lunes a viernes 8:00 a.m. – 12:30 p.m. o sábados" },
      { label: "Modalidad", value: "Presencial" },
      { label: "Sedes", value: "Medellín / Caldas" }
    ],
    ctaMessage: "Hola, quiero información sobre el diplomado en Peluquería y Estética Canina en INDECAP"
  },
  {
    slug: "calidad-humanizacion",
    image: "/images/cursos/calidad-humanizacion.jpg",
    title: "Calidad + Humanización en los Servicios",
    subtitle: "Paquete especial de dos cursos complementarios para fortalecer la calidad del servicio y la humanización en entornos de salud.",
    description: "Un paquete formativo diseñado para profesionales y estudiantes del sector salud que quieren mejorar la calidad de su atención y desarrollar habilidades de humanización en el trato con pacientes y familias. Dos cursos certificados por el precio de uno.",
    duration: "2 jornadas intensivas",
    certification: "20 horas certificadas por curso",
    validity: "2 años",
    schedule: "8:00 a.m. – 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Paquete especial con dos cursos complementarios",
      "Certificación el mismo día",
      "Ideal para personal del sector salud"
    ],
    learn: [
      "Estándares de calidad en servicios de salud",
      "Humanización en la atención al paciente",
      "Comunicación efectiva con familias",
      "Protocolos de servicio al cliente en salud"
    ],
    info: [
      { label: "Duración", value: "2 jornadas / 20 horas cada curso" },
      { label: "Horario", value: "8:00 a.m. – 4:00 p.m." },
      { label: "Modalidad", value: "Presencial" },
      { label: "Sedes", value: "Medellín · Envigado · Caldas" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Calidad y Humanización en INDECAP"
  },
  {
    slug: "excel",
    image: "/images/cursos/excel.jpg",
    title: "Excel Básico, Intermedio y Avanzado",
    subtitle: "Domina Excel en 3 niveles progresivos. Desde fundamentos hasta tablas dinámicas, macros y análisis de datos.",
    description: "Programa progresivo en tres niveles que te llevará desde los conceptos básicos hasta el manejo avanzado de Excel. Aprende a crear informes profesionales, automatizar tareas con macros y analizar datos con tablas dinámicas. Disponible presencial y virtual.",
    duration: "4 clases por nivel",
    certification: "20 horas certificadas por nivel",
    validity: "2 años",
    schedule: "Sábados 8am–12pm · Sábados 1pm–4pm · Semana 6pm–10pm virtual",
    modality: "Presencial y Virtual",
    benefits: [
      "Paquete 3 niveles con descuento especial",
      "Disponible presencial y en modalidad virtual",
      "Certificación por cada nivel completado"
    ],
    learn: [
      "Fórmulas y funciones esenciales",
      "Tablas dinámicas y gráficos",
      "Macros y automatización",
      "Análisis de datos avanzado"
    ],
    info: [
      { label: "Duración", value: "4 clases por nivel · 20 horas" },
      { label: "Horario", value: "Sábados o entre semana virtual" },
      { label: "Modalidad", value: "Presencial y Virtual" },
      { label: "Sedes", value: "Medellín · Envigado · Caldas" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Excel en INDECAP"
  },
  {
    slug: "word",
    image: "/images/cursos/word.jpg",
    title: "Word Básico y Avanzado",
    subtitle: "Crea y edita documentos profesionales desde cero. Estilos, tablas, combinación de correspondencia e informes formales.",
    description: "Aprende a usar Microsoft Word de forma profesional. Desde la creación de documentos básicos hasta el manejo de estilos, tablas, índices automáticos y combinación de correspondencia para informes y cartas empresariales.",
    duration: "1 jornada intensiva",
    certification: "20 horas certificadas",
    validity: "2 años",
    schedule: "8:00 a.m. – 4:00 p.m.",
    modality: "Presencial",
    benefits: [
      "Certificación el mismo día",
      "Aplicación inmediata en entorno laboral",
      "Fortalece tu perfil profesional"
    ],
    learn: [
      "Formato y estilos de documento",
      "Tablas e índices automáticos",
      "Combinación de correspondencia",
      "Informes y documentos formales"
    ],
    info: [
      { label: "Duración", value: "1 jornada / 20 horas" },
      { label: "Horario", value: "8:00 a.m. – 4:00 p.m." },
      { label: "Modalidad", value: "Presencial" },
      { label: "Sedes", value: "Medellín · Envigado · Caldas" }
    ],
    ctaMessage: "Hola, quiero información sobre el curso de Word en INDECAP"
  }
];

export function getShortCourseBySlug(slug: string) {
  return shortCourses.find((course) => course.slug === slug);
}