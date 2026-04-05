import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Salud Pública | INDECAP – Medellín, Caldas",
  description: "Técnico Laboral en Auxiliar en Salud Pública en INDECAP. 1.650 horas. Trabaja en programas de promoción y prevención, vacunación y salud comunitaria en Antioquia.",
};

export default function SaludPublicaPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Salud Pública"
      subtitulo="Auxiliar en"
      emWord="Salud Pública"
      accent="#0F6E56"
      escuela="Escuela de Salud"
      horas="1.650"
      semestres="3"
      sedesNum="2"
      fotoSrc="/images/programs/salud-publica/salud-publica-hero.jpg"
      fotoAlt="Estudiantes de Salud Pública INDECAP en práctica comunitaria"
      descripcion="La salud empieza en el barrio, en la escuela, en la familia — mucho antes de llegar a un hospital. Si te interesa trabajar con comunidades, liderar campañas de prevención y ser parte de los programas que evitan que la gente se enferme, este es tu camino. Nuestros egresados trabajan en EPS, secretarías de salud y programas comunitarios en todo Antioquia."
      capacidades={[
        "Apoyar programas de promoción de la salud y prevención en comunidades del Valle de Aburrá",
        "Realizar actividades educativas en salud con poblaciones específicas: gestantes, niños, adultos mayores",
        "Apoyar campañas de vacunación y jornadas de tamizaje comunitario",
        "Aplicar protocolos de bioseguridad y control de infecciones",
        "Tomar signos vitales y dar apoyo básico en procesos diagnósticos",
        "Manejar registros epidemiológicos y formatos del sistema de salud colombiano",
        "Administrar medicamentos básicos según las funciones autorizadas para el perfil técnico",
      ]}
      salidas={[
        { icon: "🏥", name: "Hospitales y Clínicas", desc: "Áreas de promoción y prevención (P&P)" },
        { icon: "🏢", name: "EPS e IPS", desc: "Programas de salud pública y atención colectiva" },
        { icon: "🏛️", name: "Secretarías de Salud", desc: "Municipales y departamentales en Antioquia" },
        { icon: "💉", name: "Programas Comunitarios", desc: "Vacunación, salud sexual, salud materno-infantil" },
        { icon: "🤝", name: "ONG de Salud", desc: "Organizaciones con presencia en comunidades de Antioquia" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad en el servicio de salud",
        "Herramientas digitales para el sector salud",
        "Atención y comunicación con usuarios y comunidades",
        "Bioseguridad y control de infecciones",
        "Apoyo en procesos diagnósticos básicos",
        "Fundamentos de farmacología y administración de medicamentos",
      ]}
      pensum2={[
        "Promoción de la salud y prevención de la enfermedad en contextos comunitarios",
        "Educación en salud para diferentes poblaciones",
        "Práctica formativa en instituciones de salud o programas comunitarios",
      ]}
      pensum3={[
        "Práctica profesional en hospitales, IPS, secretarías de salud o programas de prevención con comunidades reales de Antioquia",
      ]}
      mercadoTexto="Antioquia necesita técnicos que trabajen desde la comunidad. Nuestros egresados entran al mercado laboral con práctica real desde el primer ciclo — en vacunación, promoción y prevención en las instituciones que más lo necesitan."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Salud Pública. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Antioquia necesita profesionales que trabajen desde la comunidad. Asegura tu cupo hoy."
      programaId="salud-publica"
    />
  );
}