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
};

export const shortCourses: ShortCourse[] = [
  {
    slug: "rcp",
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
  }
];

export function getShortCourseBySlug(slug: string) {
  return shortCourses.find((course) => course.slug === slug);
}