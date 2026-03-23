export interface MiniTestimonio {
  nombre: string;
  texto: string;
  programa: string;
}

export const testimoniosPorPrograma: Record<string, MiniTestimonio> = {
  enfermeria: {
    nombre: "Egresadas Auxiliar en Enfermería",
    texto: "Recomendamos la institución por su buena calidad y por sus excelentes profesores.",
    programa: "Auxiliar en Enfermería",
  },
  cosmetologia: {
    nombre: "Egresada Cosmetología INDECAP",
    texto: "INDECAP me dio las herramientas para montar mi propio negocio de estética. Excelente formación práctica.",
    programa: "Cosmetología y Estética Integral",
  },
  veterinaria: {
    nombre: "Egresada Auxiliar en Veterinaria",
    texto: "Las prácticas reales desde el primer semestre marcaron la diferencia. Hoy trabajo en una clínica veterinaria.",
    programa: "Auxiliar en Veterinaria",
  },
  "administrativo-salud": {
    nombre: "Egresada Administrativo en Salud",
    texto: "INDECAP me preparó con todo lo que necesitaba para trabajar en el sector salud. Recomiendo la institución.",
    programa: "Auxiliar Administrativo en Salud",
  },
  farmacia: {
    nombre: "Egresada Servicios Farmacéuticos",
    texto: "Excelente programa, muy completo y práctico. Los profesores tienen experiencia real en el sector.",
    programa: "Servicios Farmacéuticos",
  },
  "salud-oral": {
    nombre: "Egresada Salud Oral INDECAP",
    texto: "Hoy trabajo como auxiliar en un consultorio odontológico gracias a la formación que recibí en INDECAP.",
    programa: "Auxiliar en Salud Oral",
  },
  "salud-publica": {
    nombre: "Egresado Salud Pública",
    texto: "Un programa muy completo que me abrió las puertas al trabajo comunitario en salud. Totalmente recomendado.",
    programa: "Auxiliar en Salud Pública",
  },
  "adulto-mayor": {
    nombre: "Egresada Atención al Adulto Mayor",
    texto: "INDECAP me enseñó a cuidar con amor y profesionalismo. Hoy trabajo en un hogar geriátrico.",
    programa: "Atención Integral al Adulto Mayor",
  },
  "talento-humano": {
    nombre: "Egresada Talento Humano",
    texto: "El programa me dio bases sólidas en gestión de personal. Hoy manejo procesos de selección en una empresa.",
    programa: "Asistente en Talento Humano",
  },
  contable: {
    nombre: "Egresado Auxiliar Contable",
    texto: "Muy buen programa, los profesores son excelentes y el enfoque práctico hace la diferencia.",
    programa: "Auxiliar Contable",
  },
  mercadeo: {
    nombre: "Egresada Auxiliar en Mercadeo",
    texto: "INDECAP me dio las herramientas para emprender mi propio negocio digital. Excelente institución.",
    programa: "Auxiliar en Mercadeo",
  },
  sst: {
    nombre: "Egresado SST INDECAP",
    texto: "Programa muy completo. Hoy trabajo como inspector de seguridad en una empresa constructora.",
    programa: "Seguridad y Salud en el Trabajo",
  },
  "entrenamiento-deportivo": {
    nombre: "Egresado Entrenamiento Deportivo",
    texto: "INDECAP me formó como entrenador profesional. Hoy dirijo grupos en un gimnasio de Medellín.",
    programa: "Entrenamiento Deportivo",
  },
  sistemas: {
    nombre: "Egresado Auxiliar en Sistemas",
    texto: "Aprendí todo lo necesario para dar soporte técnico. Los docentes tienen experiencia real en el campo.",
    programa: "Auxiliar en Sistemas",
  },
  "excel-ia": {
    nombre: "Egresado Excel + IA INDECAP",
    texto: "Un curso que transformó mi forma de trabajar. Ahora soy más productivo y eficiente en mi empresa.",
    programa: "Excel + IA",
  },
  "peluqueria-canina": {
    nombre: "Egresada Peluquería Canina",
    texto: "El diplomado me permitió montar mi propio negocio de grooming. Excelente formación práctica.",
    programa: "Peluquería y Estética Canina",
  },
};
