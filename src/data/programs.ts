export interface Program {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const programs: Program[] = [
  {
    id: "aux-enfermeria",
    name: "Auxiliar en Enfermería",
    description:
      "Formación integral en el cuidado de la salud, asistencia hospitalaria y atención primaria al paciente.",
    icon: "🏥",
  },
  {
    id: "aux-salud-oral",
    name: "Auxiliar en Salud Oral",
    description:
      "Capacitación en higiene oral, prevención de enfermedades bucodentales y asistencia odontológica.",
    icon: "🦷",
  },
  {
    id: "aux-servicios-farmaceuticos",
    name: "Auxiliar en Servicios Farmacéuticos",
    description:
      "Preparación para la dispensación, almacenamiento y manejo de medicamentos en farmacias y droguerías.",
    icon: "💊",
  },
  {
    id: "aux-primera-infancia",
    name: "Atención Integral a la Primera Infancia",
    description:
      "Desarrollo de competencias para el cuidado y educación de niños de 0 a 6 años.",
    icon: "👶",
  },
  {
    id: "aux-administrativo",
    name: "Auxiliar Administrativo",
    description:
      "Formación en gestión documental, atención al cliente y procesos administrativos empresariales.",
    icon: "📋",
  },
  {
    id: "aux-contable",
    name: "Auxiliar Contable y Financiero",
    description:
      "Competencias en contabilidad, manejo de software contable y análisis financiero básico.",
    icon: "📊",
  },
  {
    id: "aux-seguridad-salud",
    name: "Seguridad y Salud en el Trabajo",
    description:
      "Identificación, evaluación y control de riesgos laborales para entornos de trabajo seguros.",
    icon: "⛑️",
  },
];
