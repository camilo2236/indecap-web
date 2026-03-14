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
}

export const programs: Program[] = [
  {
    id: "enfermeria",
    name: "Auxiliar en Enfermería",
    description: "Formación integral en el cuidado de la salud, asistencia hospitalaria y atención primaria al paciente.",
    icon: "🏥",
    image: "/images/programs/enfermeria.png",
    color: "#1A3A6B",
    colorDark: "#0D2347",
    badge: "Escuela de Salud · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Enfermer%C3%ADa,%20mi%20nombre%20es%20",
    pageUrl: "/programas/enfermeria",
  },
  {
    id: "cosmetologia",
    name: "Cosmetología y Estética",
    description: "Técnicas profesionales de belleza, cuidado de la piel, maquillaje y tratamientos estéticos.",
    icon: "💄",
    image: "/images/programs/cosmetologia.png",
    color: "#C0394B",
    colorDark: "#880E2F",
    badge: "Escuela de Estética · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Cosmetolog%C3%ADa,%20mi%20nombre%20es%20",
    pageUrl: "/programas/cosmetologia",
  },
  {
    id: "veterinaria",
    name: "Auxiliar en Veterinaria",
    description: "Cuidado animal, asistencia en procedimientos veterinarios y manejo de clínicas veterinarias.",
    icon: "🐾",
    image: "/images/programs/veterinaria.png",
    color: "#7B1F1F",
    colorDark: "#5A1515",
    badge: "Escuela Veterinaria · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Veterinaria,%20mi%20nombre%20es%20",
    pageUrl: "/programas/veterinaria",
  },
  {
    id: "farmaceuticos",
    name: "Auxiliar en Servicios Farmacéuticos",
    description: "Dispensación, almacenamiento y manejo de medicamentos en farmacias y droguerías.",
    icon: "💊",
    image: "/images/programs/farmaceuticos.png",
    color: "#1A6B4A",
    colorDark: "#0F4A32",
    badge: "Escuela de Salud · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Servicios%20Farmac%C3%A9uticos,%20mi%20nombre%20es%20",
    pageUrl: "/programas/farmacia",
  },
  {
    id: "salud-oral",
    name: "Auxiliar en Salud Oral",
    description: "Higiene oral, prevención de enfermedades bucodentales y asistencia en consultorio odontológico.",
    icon: "🦷",
    image: "/images/programs/salud-oral.png",
    color: "#0B6E6E",
    colorDark: "#074F4F",
    badge: "Escuela de Salud Oral · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20Oral,%20mi%20nombre%20es%20",
    pageUrl: "/programas/salud-oral",
  },
  {
    id: "peluqueria-canina",
    name: "Peluquería y Estética Canina",
    description: "Grooming profesional, baño y estética animal, manejo y cuidado de mascotas.",
    icon: "🐕",
    image: "/images/programs/veterinaria.png",
    color: "#E07B39",
    colorDark: "#B85A1A",
    badge: "Escuela Veterinaria · INDECAP",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Peluquer%C3%ADa%20Canina,%20mi%20nombre%20es%20",
    pageUrl: "/programas/peluqueria-canina",
  },
  {
    id: "excel-ia",
    name: "Excel + Inteligencia Artificial ✨",
    description: "Aprende Excel 3x más rápido con IA. Tablas dinámicas, automatización y análisis de datos usando Claude.",
    icon: "🤖",
    image: "/images/programs/enfermeria-hero.png",
    color: "#312783",
    colorDark: "#1a1650",
    badge: "🆕 Nuevo · INDECAP 2026",
    whatsappUrl: "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Excel%20%2B%20IA,%20mi%20nombre%20es%20",
    pageUrl: "/programas/excel-ia",
  },
];
