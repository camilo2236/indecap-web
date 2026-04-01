export interface NoticiaIndecap {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  fecha: string;
  categoria: "indecap" | "educacion" | "egresados" | "convenios";
  imagen?: string;
  destacada?: boolean;
}

export const noticiasIndecap: NoticiaIndecap[] = [
  {
    id: "inscripciones-2026",
    titulo: "Inscripciones abiertas para el primer semestre 2026",
    resumen: "INDECAP abre sus puertas para el primer semestre de 2026. Más de 15 programas técnicos laborales disponibles en las sedes de Medellín, Envigado y Caldas.",
    contenido: "La Corporación Educativa INDECAP anuncia la apertura de inscripciones para el primer semestre de 2026. Con más de 40 años de experiencia formando técnicos laborales en Antioquia, INDECAP ofrece programas en salud, administración, sistemas, belleza y deporte. Los interesados pueden diligenciar el formulario de admisión en línea o acercarse a cualquiera de nuestras sedes.",
    fecha: "2026-01-15",
    categoria: "indecap",
    destacada: true,
  },
  {
    id: "convenios-2025",
    titulo: "INDECAP supera los 120 convenios de práctica en Antioquia",
    resumen: "La institución consolida su red de empresas aliadas para prácticas laborales, garantizando vinculación real de sus estudiantes.",
    contenido: "INDECAP ha consolidado más de 120 convenios con empresas e instituciones del sector salud, comercio y servicios en Antioquia. Estos convenios permiten a los estudiantes realizar sus prácticas en entornos laborales reales, lo que fortalece su perfil profesional y facilita su vinculación al mercado laboral.",
    fecha: "2025-11-20",
    categoria: "convenios",
    destacada: true,
  },
  {
    id: "grado-2025",
    titulo: "Ceremonia de grado 2025: más de 500 nuevos técnicos laborales",
    resumen: "INDECAP celebró su ceremonia de grado con la participación de egresados de todos sus programas técnicos.",
    contenido: "Con gran emoción y orgullo, la Corporación Educativa INDECAP realizó su ceremonia de grado 2025, en la que más de 500 estudiantes recibieron su certificado como técnicos laborales. La ceremonia contó con la presencia de familias, docentes y representantes del sector empresarial.",
    fecha: "2025-10-10",
    categoria: "egresados",
  },
];
