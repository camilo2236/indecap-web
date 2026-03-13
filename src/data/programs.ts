export interface Program {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  colorDark: string;
  badge: string;
  whatsappUrl: string;
}

export const programs: Program[] = [
  {
    id: "enfermeria",
    name: "Auxiliar en Enfermería",
    description:
      "Formación integral en el cuidado de la salud, asistencia hospitalaria y atención primaria al paciente.",
    icon: "🏥",
    color: "#1A5CA8",
    colorDark: "#0D3A6E",
    badge: "Escuela de Salud · INDECAP",
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Enfermer%C3%ADa,%20mi%20nombre%20es%20",
  },
  {
    id: "cosmetologia",
    name: "Cosmetología y Estética",
    description:
      "Técnicas profesionales de belleza, cuidado de la piel, maquillaje y tratamientos estéticos.",
    icon: "💄",
    color: "#C0305A",
    colorDark: "#8B1A3A",
    badge: "Escuela de Estética · INDECAP",
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Cosmetolog%C3%ADa,%20mi%20nombre%20es%20",
  },
  {
    id: "veterinaria",
    name: "Auxiliar en Veterinaria",
    description:
      "Cuidado animal, asistencia en procedimientos veterinarios y manejo de clínicas veterinarias.",
    icon: "🐾",
    color: "#2A7A4B",
    colorDark: "#1A5A35",
    badge: "Escuela Veterinaria · INDECAP",
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Veterinaria,%20mi%20nombre%20es%20",
  },
  {
    id: "farmaceuticos",
    name: "Auxiliar en Servicios Farmacéuticos",
    description:
      "Dispensación, almacenamiento y manejo de medicamentos en farmacias y droguerías.",
    icon: "💊",
    color: "#0E7C7B",
    colorDark: "#085C5B",
    badge: "Escuela de Salud · INDECAP",
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Servicios%20Farmac%C3%A9uticos,%20mi%20nombre%20es%20",
  },
  {
    id: "salud-oral",
    name: "Auxiliar en Salud Oral",
    description:
      "Higiene oral, prevención de enfermedades bucodentales y asistencia en consultorio odontológico.",
    icon: "🦷",
    color: "#0E6B8A",
    colorDark: "#084F68",
    badge: "Escuela de Salud Oral · INDECAP",
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20Oral,%20mi%20nombre%20es%20",
  },
];
