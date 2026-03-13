export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: "inyectologia",
    name: "Inyectología",
    description:
      "Técnicas de aplicación de inyecciones intramusculares, subcutáneas e intravenosas.",
    duration: "40 horas",
  },
  {
    id: "primeros-auxilios",
    name: "Primeros Auxilios",
    description:
      "Protocolos de atención inmediata en situaciones de emergencia y urgencia.",
    duration: "40 horas",
  },
  {
    id: "cuidado-adulto-mayor",
    name: "Cuidado del Adulto Mayor",
    description:
      "Atención integral y acompañamiento gerontológico para personas de la tercera edad.",
    duration: "60 horas",
  },
  {
    id: "excel-avanzado",
    name: "Excel Avanzado",
    description:
      "Manejo avanzado de hojas de cálculo, tablas dinámicas, macros y análisis de datos.",
    duration: "40 horas",
  },
  {
    id: "facturacion-salud",
    name: "Facturación en Salud",
    description:
      "Procesos de facturación, auditoría de cuentas médicas y normatividad del sistema de salud.",
    duration: "60 horas",
  },
  {
    id: "diplomado-gestion-calidad",
    name: "Diplomado en Gestión de Calidad",
    description:
      "Implementación de sistemas de gestión de calidad bajo normas ISO y estándares nacionales.",
    duration: "120 horas",
  },
];
