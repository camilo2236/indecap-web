export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  duracionReal?: string;
  validez?: string;
  horario: string;
  sedes: string;
  escuela: string;
  tipo: "curso" | "diplomado" | "paquete";
  whatsappUrl: string;
  badge?: string;
  image?: string;
}

export const courses: Course[] = [

  // ── ESCUELA DE SALUD ─────────────────────────────────────────

  {
    id: "rcp",
    image: "/images/cursos/rcp.jpg",
    name: "RCP — Reanimación Cardiopulmonar",
    description: "Aprende compresiones, ventilaciones, desobstrucción de vía aérea y uso del DEA. Aprendizaje 100% práctico con casos de estudio reales.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    validez: "2 años",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20el%20curso%20de%20RCP%2C%20mi%20nombre%20es%20",
  },
  {
    id: "inyectologia",
    image: "/images/cursos/inyectologia.jpg",
    name: "Inyectología",
    description: "Técnicas de aplicación de inyecciones intramusculares, subcutáneas, intravenosas y más. Formación práctica certificada.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    validez: "2 años",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Inyectolog%C3%ADa%2C%20mi%20nombre%20es%20",
  },
  {
    id: "vacunacion",
    image: "/images/cursos/vacunacion.jpg",
    name: "Vacunación",
    description: "Habilidades clave en administración de vacunas, cadena de frío y protocolos nacionales. Certificación inmediata.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    validez: "2 años",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20el%20curso%20de%20Vacunaci%C3%B3n%2C%20mi%20nombre%20es%20",
  },
  {
    id: "toma-muestras",
    image: "/images/cursos/toma-muestras.jpg",
    name: "Toma de Muestras de Laboratorio Clínico",
    description: "Técnicas prácticas para toma, manejo y procesamiento de muestras de laboratorio clínico. Cupos limitados.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    validez: "2 años",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Toma%20de%20Muestras%2C%20mi%20nombre%20es%20",
  },
  {
    id: "primeros-auxilios",
    image: "/images/cursos/primeros-auxilios.jpg",
    name: "Primeros Auxilios — Primer Respondiente",
    description: "Atención inmediata de lesiones y emergencias médicas. Asegura tu cupo con solo el 50% del valor.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    validez: "2 años",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Primeros%20Auxilios%2C%20mi%20nombre%20es%20",
  },
  {
    id: "codigo-fucsia",
    image: "/images/cursos/codigo-fucsia.jpg",
    name: "Código Fucsia — Atención a Víctimas de Violencia Sexual",
    description: "Herramientas prácticas para respuesta oportuna, ética y con perspectiva de género. Dirigido a profesionales de salud, seguridad y atención comunitaria.",
    duration: "20 horas certificadas",
    duracionReal: "8 horas intensivas",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20C%C3%B3digo%20Fucsia%2C%20mi%20nombre%20es%20",
  },
  {
    id: "calidad-humanizacion",
    name: "Calidad + Humanización en los Servicios",
    description: "Paquete especial: dos cursos complementarios para fortalecer la calidad del servicio y la humanización en entornos de salud y atención al cliente.",
    duration: "20 horas certificadas por curso",
    horario: "8:00 a.m. – 4:00 p.m. (dos jornadas)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Salud",
    tipo: "paquete",
    badge: "Paquete especial — consulta disponibilidad",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20el%20paquete%20Calidad%20y%20Humanizaci%C3%B3n%2C%20mi%20nombre%20es%20",
  },

  // ── ESCUELA DE SISTEMAS ───────────────────────────────────────

  {
    id: "excel",
    name: "Excel Básico, Intermedio y Avanzado",
    description: "Domina Excel en 3 niveles progresivos. Desde fundamentos hasta tablas dinámicas, macros y análisis de datos. Disponible presencial y virtual.",
    duration: "4 clases por nivel · 20 horas certificadas",
    horario: "Sáb 8am–12pm · Sáb 1pm–4pm · Sem 8am–12pm · Sem 6pm–10pm virtual",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Sistemas",
    tipo: "curso",
    badge: "Paquete 3 niveles con descuento",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Excel%2C%20mi%20nombre%20es%20",
  },
  {
    id: "word",
    name: "Word Básico y Avanzado",
    description: "Crea y edita documentos profesionales desde cero. Estilos, tablas, combinación de correspondencia e informes formales.",
    duration: "20 horas certificadas",
    horario: "8:00 a.m. – 4:00 p.m. (un día)",
    sedes: "Medellín · Envigado · Caldas",
    escuela: "Escuela de Sistemas",
    tipo: "curso",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Word%2C%20mi%20nombre%20es%20",
  },

  // ── ESCUELA VETERINARIA ───────────────────────────────────────

  {
    id: "peluqueria-canina",
    image: "/images/cursos/peluqueria-canina.jpg",
    name: "Diplomado en Peluquería y Estética Canina",
    description: "Fórmate como groomer profesional en 45 días intensivos. Baño, corte, estética y cuidado animal con mascotas reales desde el primer día. Financiación directa con INDECAP.",
    duration: "120 horas · 45 días",
    horario: "L–V 8:00am–12:30pm · Sábados 8:00am–5:00pm",
    sedes: "Medellín · Caldas",
    escuela: "Escuela Veterinaria",
    tipo: "diplomado",
    badge: "Financiación directa disponible",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20el%20Diplomado%20de%20Peluquer%C3%ADa%20Canina%2C%20mi%20nombre%20es%20",
  },

];
