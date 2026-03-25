export interface MiniTestimonio {
  nombre: string;
  texto: string;
  programa: string;
  egresados?: string[];
}

export const testimoniosPorPrograma: Record<string, MiniTestimonio> = {
  enfermeria: {
    nombre: "César Alejandro Cadavid Jaramillo",
    texto: "INDECAP me formó con prácticas reales desde el primer día. Hoy trabajo como auxiliar de enfermería y le debo mi carrera a esta institución.",
    programa: "Auxiliar en Enfermería",
    egresados: ["César Alejandro Cadavid Jaramillo", "Kathe Moreno Alcaraz", "Gabriela Andrea Sánchez", "Elly Johana Mosquera"],
  },
  cosmetologia: {
    nombre: "Natalia Hurtado Mosquera",
    texto: "La formación práctica de INDECAP me dio las herramientas para montar mi propio negocio de estética. Excelentes docentes y equipos reales.",
    programa: "Cosmetología y Estética Integral",
    egresados: ["Natalia Hurtado Mosquera", "Heidy Osorio", "Laura Jiménez", "Lina María Sánchez Muñoz"],
  },
  veterinaria: {
    nombre: "Liliana Pérez",
    texto: "Desde el primer semestre tuve contacto real con animales. INDECAP me preparó para trabajar en clínicas veterinarias con confianza.",
    programa: "Auxiliar en Veterinaria",
    egresados: ["Liliana Pérez", "Ángela María Marín Alzate", "Yuly Paulina", "Angélica Barragán", "Estefany Usuga"],
  },
  farmacia: {
    nombre: "Andrea Estefanía Berrio Salazar",
    texto: "El programa de Farmacia de INDECAP es muy completo. Los docentes tienen experiencia real en el sector y eso se nota en la calidad de la formación.",
    programa: "Servicios Farmacéuticos",
    egresados: ["Andrea Estefanía Berrio Salazar", "Luisa Fernanda Gracia Vásquez", "Valentina Mejía", "Juan José Jaramillo", "Camila Arango Aguirre"],
  },
  "administrativo-salud": {
    nombre: "Julieth Vanessa Pacheco",
    texto: "INDECAP me formó con todo lo necesario para trabajar en el sector salud. Hoy me desempeño en una IPS y estoy muy agradecida con la institución.",
    programa: "Auxiliar Administrativo en Salud",
    egresados: ["Julieth Vanessa Pacheco", "Juan Pablo Rivera David", "Yulieth Alejandra Velázquez", "Laura Sofía Vásquez"],
  },
  "salud-oral": {
    nombre: "Juan Daniel Lizcano Román",
    texto: "Las prácticas en consultorio real marcaron la diferencia. Hoy trabajo como auxiliar odontológico gracias a la formación que recibí en INDECAP.",
    programa: "Auxiliar en Salud Oral",
    egresados: ["Juan Daniel Lizcano Román", "Yobeidy Palacio Vidal", "Mariana Benítez Londoño", "Valeria Muñoz"],
  },
  "salud-publica": {
    nombre: "Daniela Palacio G.",
    texto: "Un programa muy completo que me abrió las puertas al trabajo comunitario en salud. Los docentes de INDECAP son excelentes profesionales.",
    programa: "Auxiliar en Salud Pública",
    egresados: ["Daniela Palacio G.", "Mary Leny Agudelo", "Yury Estrada Chanci", "Yuli Espinosa", "Alisson Montenegro", "Yorledis Miranda"],
  },
  "adulto-mayor": {
    nombre: "Biviana Gaviria Cardenas",
    texto: "INDECAP me enseñó a cuidar con amor y profesionalismo. Hoy trabajo en un hogar geriátrico y aplico cada día lo aprendido.",
    programa: "Atención Integral al Adulto Mayor",
    egresados: ["Biviana Gaviria Cardenas", "Katherin Yirley Flórez Montoya", "Claudia Patricia Taborda Tirado", "Yessica Tatiana Alcaraz García", "Mary Luz Usuga", "Vanessa Hernández Zapata"],
  },
  "talento-humano": {
    nombre: "Egresada Talento Humano",
    texto: "INDECAP me dio bases sólidas en gestión de personal. Hoy manejo procesos de selección en una empresa gracias a esta formación.",
    programa: "Asistente en Talento Humano",
    egresados: [],
  },
  contable: {
    nombre: "Alix Martínez Balverdez",
    texto: "Muy buen programa, los profesores son excelentes y el enfoque práctico hace la diferencia. Hoy trabajo en contabilidad en una empresa local.",
    programa: "Auxiliar Contable",
    egresados: ["Alix Martínez Balverdez", "Lauren Melissa", "Ángela Rocío Barón Rodríguez"],
  },
  mercadeo: {
    nombre: "María Isabel Flórez Berrio",
    texto: "INDECAP me dio las herramientas para emprender y trabajar en mercadeo digital. Una institución que realmente transforma vidas.",
    programa: "Auxiliar en Mercadeo",
    egresados: ["María Isabel Flórez Berrio", "Nati Hernández", "Juliana Rincón Tobón", "Paola Andrea Durango Rodríguez", "María Fernanda"],
  },
  sst: {
    nombre: "Egresado SST INDECAP",
    texto: "Programa muy completo. Hoy trabajo como inspector de seguridad en una empresa constructora gracias a la formación de INDECAP.",
    programa: "Seguridad y Salud en el Trabajo",
    egresados: [],
  },
  "entrenamiento-deportivo": {
    nombre: "Yuliana Piñeros Agudelo",
    texto: "INDECAP me formó como entrenadora profesional. Hoy dirijo grupos deportivos y aplico cada día lo aprendido en la institución.",
    programa: "Entrenamiento Deportivo",
    egresados: ["Yuliana Piñeros Agudelo", "Leonardo Orrego Munera", "Katerine Hernández Diez"],
  },
  sistemas: {
    nombre: "Derly Ximena Correa",
    texto: "Aprendí todo lo necesario para dar soporte técnico. Los docentes tienen experiencia real en el campo y eso se nota.",
    programa: "Auxiliar en Sistemas",
    egresados: ["Derly Ximena Correa", "Sergio Andrés Jaramillo Caro", "Claudia Alejandra Holguín Tabares", "Juan Pablo Rodríguez Gómez", "Gisse Alzate", "Valeria Muñoz"],
  },
  "excel-ia": {
    nombre: "Egresado Excel + IA INDECAP",
    texto: "Un curso que transformó mi forma de trabajar. Ahora soy más productivo y eficiente gracias a las herramientas aprendidas.",
    programa: "Excel + IA",
    egresados: [],
  },
  "peluqueria-canina": {
    nombre: "Egresada Peluquería Canina",
    texto: "El diplomado me permitió montar mi propio negocio de grooming. Excelente formación práctica con animales reales.",
    programa: "Peluquería y Estética Canina",
    egresados: [],
  },
};
