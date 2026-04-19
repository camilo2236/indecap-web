export interface MiniTestimonio {
  nombre: string;
  texto: string;
  programa: string;
  egresados?: string[];
}

export const testimoniosPorPrograma: Record<string, MiniTestimonio> = {
  enfermeria: {
    nombre: "César Alejandro C.",
    texto: "INDECAP me formó con prácticas reales desde el primer día. Hoy trabajo como auxiliar de enfermería y le debo mi carrera a esta institución.",
    programa: "Auxiliar en Enfermería",
    egresados: ["César Alejandro C.", "Kathe M.", "Gabriela Andrea S.", "Elly Johana M."],
  },
  cosmetologia: {
    nombre: "Natalia H.",
    texto: "La formación práctica de INDECAP me dio las herramientas para montar mi propio negocio de estética. Excelentes docentes y equipos reales.",
    programa: "Cosmetología y Estética Integral",
    egresados: ["Natalia H.", "Heidy O.", "Laura J.", "Lina María S."],
  },
  veterinaria: {
    nombre: "Liliana P.",
    texto: "Desde el primer semestre tuve contacto real con animales. INDECAP me preparó para trabajar en clínicas veterinarias con confianza.",
    programa: "Auxiliar en Veterinaria",
    egresados: ["Liliana P.", "Ángela María M.", "Yuly P.", "Angélica B.", "Estefany U."],
  },
  farmacia: {
    nombre: "Andrea Estefanía B.",
    texto: "El programa de Farmacia de INDECAP es muy completo. Los docentes tienen experiencia real en el sector y eso se nota en la calidad de la formación.",
    programa: "Servicios Farmacéuticos",
    egresados: ["Andrea Estefanía B.", "Luisa Fernanda G.", "Valentina M.", "Juan José J.", "Camila A."],
  },
  "administrativo-salud": {
    nombre: "Julieth Vanessa P.",
    texto: "INDECAP me formó con todo lo necesario para trabajar en el sector salud. Hoy me desempeño en una IPS y estoy muy agradecida con la institución.",
    programa: "Auxiliar Administrativo en Salud",
    egresados: ["Julieth Vanessa P.", "Juan Pablo R.", "Yulieth Alejandra V.", "Laura Sofía V."],
  },
  "salud-oral": {
    nombre: "Juan Daniel L.",
    texto: "Las prácticas en consultorio real marcaron la diferencia. Hoy trabajo como auxiliar odontológico gracias a la formación que recibí en INDECAP.",
    programa: "Auxiliar en Salud Oral",
    egresados: ["Juan Daniel L.", "Yobeidy P.", "Mariana B.", "Valeria M."],
  },
  "salud-publica": {
    nombre: "Daniela P.",
    texto: "Un programa muy completo que me abrió las puertas al trabajo comunitario en salud. Los docentes de INDECAP son excelentes profesionales.",
    programa: "Auxiliar en Salud Pública",
    egresados: ["Daniela P.", "Mary Leny A.", "Yury E.", "Yuli E.", "Alisson M.", "Yorledis M."],
  },
  "adulto-mayor": {
    nombre: "Biviana G.",
    texto: "INDECAP me enseñó a cuidar con amor y profesionalismo. Hoy trabajo en un hogar geriátrico y aplico cada día lo aprendido.",
    programa: "Atención Integral al Adulto Mayor",
    egresados: ["Biviana G.", "Katherin Y.", "Claudia Patricia T.", "Yessica Tatiana A.", "Mary Luz U.", "Vanessa H."],
  },
  "talento-humano": {
    nombre: "Egresada Talento Humano",
    texto: "INDECAP me dio bases sólidas en gestión de personal. Hoy manejo procesos de selección en una empresa gracias a esta formación.",
    programa: "Asistente en Talento Humano",
    egresados: [],
  },
  contable: {
    nombre: "Alix M.",
    texto: "Muy buen programa, los profesores son excelentes y el enfoque práctico hace la diferencia. Hoy trabajo en contabilidad en una empresa local.",
    programa: "Auxiliar Contable",
    egresados: ["Alix M.", "Lauren M.", "Ángela Rocío B."],
  },
  mercadeo: {
    nombre: "María Isabel F.",
    texto: "INDECAP me dio las herramientas para emprender y trabajar en mercadeo digital. Una institución que realmente transforma vidas.",
    programa: "Auxiliar en Mercadeo",
    egresados: ["María Isabel F.", "Nati H.", "Juliana R.", "Paola Andrea D.", "María Fernanda"],
  },
  sst: {
    nombre: "Egresado SST INDECAP",
    texto: "Programa muy completo. Hoy trabajo como inspector de seguridad en una empresa constructora gracias a la formación de INDECAP.",
    programa: "Seguridad y Salud en el Trabajo",
    egresados: [],
  },
  "entrenamiento-deportivo": {
    nombre: "Yuliana P.",
    texto: "INDECAP me formó como entrenadora profesional. Hoy dirijo grupos deportivos y aplico cada día lo aprendido en la institución.",
    programa: "Entrenamiento Deportivo",
    egresados: ["Yuliana P.", "Leonardo O.", "Katerine H."],
  },
  sistemas: {
    nombre: "Derly Ximena C.",
    texto: "Aprendí todo lo necesario para dar soporte técnico. Los docentes tienen experiencia real en el campo y eso se nota.",
    programa: "Auxiliar en Sistemas",
    egresados: ["Derly Ximena C.", "Sergio Andrés J.", "Claudia Alejandra H.", "Juan Pablo R.", "Gisse A.", "Valeria M."],
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
  "primera-infancia": {
    nombre: "Leidy Johana M.",
    texto: "INDECAP me formó con amor y profesionalismo. Hoy trabajo en un jardín infantil y cada día aplico las técnicas de estimulación temprana que aprendí. Una carrera que transforma vidas.",
    programa: "Atención a la Primera Infancia",
    egresados: ["Leidy Johana M.", "Camila Andrea R.", "Luisa Fernanda T.", "Valentina G.", "Sara Melissa C."],
  },
};