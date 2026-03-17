export interface Program {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  colorDark: string;
  badge: string;
  whatsappUrl: string;
  pageUrl?: string;
  horas?: string;
  escuela: string;
}

export const programs: Program[] = [

  // ── ESCUELA DE SALUD ─────────────────────────────────
  {
    id: "enfermeria",
    name: "Auxiliar en Enfermería",
    description: "Formación integral en el cuidado de la salud, asistencia hospitalaria y atención primaria al paciente.",
    icon: "🏥",
    image: "/images/programs/enfermeria.png",
    color: "#1A3A6B",
    colorDark: "#0D2347",
    badge: "Escuela de Salud",
    horas: "1.650h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Enfermer%C3%ADa,%20mi%20nombre%20es%20",
    pageUrl: "/programas/enfermeria",
  },
  {
    id: "administrativo-salud",
    name: "Administrativo en Salud",
    description: "Gestión administrativa en clínicas, hospitales, EPS e IPS. Facturación, atención al usuario y procesos del sector salud.",
    icon: "📋",
    image: "/images/programs/enfermeria.png",
    color: "#2A5C8A",
    colorDark: "#1A3A5C",
    badge: "Escuela de Salud",
    horas: "1.650h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Administrativo%20en%20Salud,%20mi%20nombre%20es%20",
    pageUrl: "/programas/administrativo-salud",
  },
  {
    id: "farmaceuticos",
    name: "Servicios Farmacéuticos",
    description: "Dispensación, almacenamiento y manejo de medicamentos en farmacias, droguerías e IPS.",
    icon: "💊",
    image: "/images/programs/farmaceuticos.png",
    color: "#1A6B4A",
    colorDark: "#0F4A32",
    badge: "Escuela de Salud",
    horas: "1.650h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Servicios%20Farmac%C3%A9uticos,%20mi%20nombre%20es%20",
    pageUrl: "/programas/farmacia",
  },
  {
    id: "salud-oral",
    name: "Auxiliar en Salud Oral",
    description: "Higiene oral, prevención de enfermedades bucodentales y asistencia profesional en consultorio odontológico.",
    icon: "🦷",
    image: "/images/programs/salud-oral.png",
    color: "#0B6E6E",
    colorDark: "#074F4F",
    badge: "Escuela de Salud",
    horas: "1.650h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20Oral,%20mi%20nombre%20es%20",
    pageUrl: "/programas/salud-oral",
  },
  {
    id: "salud-publica",
    name: "Auxiliar en Salud Pública",
    description: "Programas de promoción y prevención, vigilancia epidemiológica y trabajo comunitario en el sector salud.",
    icon: "🌐",
    image: "/images/programs/enfermeria.png",
    color: "#1A4F6E",
    colorDark: "#0F3450",
    badge: "Escuela de Salud",
    horas: "1.650h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20P%C3%BAblica,%20mi%20nombre%20es%20",
    pageUrl: "/programas/salud-publica",
  },
  {
    id: "adulto-mayor",
    name: "Atención Integral al Adulto Mayor",
    description: "Cuidado gerontológico, acompañamiento terapéutico y atención integral a personas de la tercera edad.",
    icon: "👴",
    image: "/images/programs/enfermeria.png",
    color: "#5C3A8A",
    colorDark: "#3D2460",
    badge: "Escuela de Salud",
    horas: "700h",
    escuela: "Escuela de Salud",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Atenci%C3%B3n%20al%20Adulto%20Mayor,%20mi%20nombre%20es%20",
    pageUrl: "/programas/adulto-mayor",
  },

  // ── ESCUELA DE BELLEZA ────────────────────────────────
  {
    id: "cosmetologia",
    name: "Cosmetología y Estética Integral",
    description: "Técnicas profesionales de belleza, tratamientos faciales y corporales, maquillaje y servicios de SPA.",
    icon: "💄",
    image: "/images/programs/cosmetologia.png",
    color: "#C0394B",
    colorDark: "#880E2F",
    badge: "Escuela de Belleza",
    horas: "1.190h",
    escuela: "Escuela de Belleza",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Cosmetolog%C3%ADa,%20mi%20nombre%20es%20",
    pageUrl: "/programas/cosmetologia",
  },

  // ── ESCUELA VETERINARIA ───────────────────────────────
  {
    id: "veterinaria",
    name: "Auxiliar en Veterinaria",
    description: "Asistencia clínica y quirúrgica, manejo de animales y apoyo en procedimientos veterinarios profesionales.",
    icon: "🐾",
    image: "/images/programs/veterinaria.png",
    color: "#7B1F1F",
    colorDark: "#5A1515",
    badge: "Escuela Veterinaria",
    horas: "1.200h",
    escuela: "Escuela Veterinaria",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Veterinaria,%20mi%20nombre%20es%20",
    pageUrl: "/programas/veterinaria",
  },

  // ── ESCUELA DE ADMINISTRACIÓN ─────────────────────────
  {
    id: "talento-humano",
    name: "Asistente en Talento Humano",
    description: "Gestión de nómina, selección de personal, bienestar laboral y procesos de recursos humanos en empresas.",
    icon: "👥",
    image: "/images/programs/enfermeria.png",
    color: "#6B4A1A",
    colorDark: "#4A3210",
    badge: "Escuela de Administración",
    horas: "1.000h",
    escuela: "Escuela de Administración",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Talento%20Humano,%20mi%20nombre%20es%20",
    pageUrl: "/programas/talento-humano",
  },
  {
    id: "contable",
    name: "Auxiliar Contable",
    description: "Registros contables, manejo de software, declaraciones tributarias y gestión financiera básica de empresas.",
    icon: "📊",
    image: "/images/programs/enfermeria.png",
    color: "#2A6B3A",
    colorDark: "#1A4A28",
    badge: "Escuela de Administración",
    horas: "1.000h",
    escuela: "Escuela de Administración",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20Contable,%20mi%20nombre%20es%20",
    pageUrl: "/programas/contable",
  },
  {
    id: "mercadeo",
    name: "Auxiliar en Mercadeo",
    description: "Estrategias de ventas, marketing digital, atención al cliente y gestión comercial para empresas y emprendimientos.",
    icon: "📣",
    image: "/images/programs/enfermeria.png",
    color: "#8A2A6B",
    colorDark: "#5C1A47",
    badge: "Escuela de Administración",
    horas: "1.000h",
    escuela: "Escuela de Administración",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Mercadeo,%20mi%20nombre%20es%20",
    pageUrl: "/programas/mercadeo",
  },

  // ── ESCUELA DE SEGURIDAD ──────────────────────────────
  {
    id: "sst",
    name: "Seguridad y Salud en el Trabajo",
    description: "Identificación de riesgos, prevención de accidentes, normas COPASST y gestión del sistema de SST en empresas.",
    icon: "🦺",
    image: "/images/programs/enfermeria.png",
    color: "#8A6A1A",
    colorDark: "#5C4510",
    badge: "Escuela de Seguridad",
    horas: "1.000h",
    escuela: "Escuela de Seguridad",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20SST,%20mi%20nombre%20es%20",
    pageUrl: "/programas/sst",
  },

  // ── ESCUELA DE DEPORTE ────────────────────────────────
  {
    id: "entrenamiento-deportivo",
    name: "Entrenamiento Deportivo",
    description: "Planificación de entrenamientos, preparación física, nutrición deportiva y gestión de grupos en centros deportivos.",
    icon: "⚽",
    image: "/images/programs/enfermeria.png",
    color: "#1A6B2A",
    colorDark: "#0F4A1C",
    badge: "Escuela de Deporte",
    horas: "1.000h",
    escuela: "Escuela de Deporte",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Entrenamiento%20Deportivo,%20mi%20nombre%20es%20",
    pageUrl: "/programas/entrenamiento-deportivo",
  },

  // ── ESCUELA DE SISTEMAS ───────────────────────────────
  {
    id: "sistemas",
    name: "Auxiliar en Sistemas",
    description: "Soporte técnico, mantenimiento de equipos, redes básicas y asistencia en desarrollo de software.",
    icon: "💻",
    image: "/images/programs/enfermeria-hero.png",
    color: "#312783",
    colorDark: "#1a1650",
    badge: "Escuela de Sistemas",
    horas: "700h",
    escuela: "Escuela de Sistemas",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Sistemas,%20mi%20nombre%20es%20",
    pageUrl: "/programas/sistemas",
  },
];
