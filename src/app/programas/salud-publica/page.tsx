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
      fotoSrc="/images/programs/enfermeria/enfermeria-clase.jpg"
      fotoAlt="Estudiante de Salud Pública INDECAP"
      descripcion="Te interesa el sector salud desde la prevención y la promoción — trabajando con comunidades, en programas de vacunación, campañas de salud y apoyo a instituciones que buscan que la gente no se enferme. Salud pública es entender que la salud empieza en el barrio, en la comunidad, en la familia."
      capacidades={[
        "Apoyar programas de promoción de la salud y prevención en comunidades del Valle de Aburrá",
        "Realizar actividades educativas en salud con poblaciones específicas (gestantes, niños, adultos mayores)",
        "Apoyar campañas de vacunación y jornadas de tamizaje",
        "Aplicar protocolos de bioseguridad y control de infecciones",
        "Tomar signos vitales y realizar apoyo básico en procesos diagnósticos",
        "Manejar registros epidemiológicos y formatos del sistema de salud colombiano",
        "Administrar medicamentos básicos según las funciones autorizadas para el perfil",
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
        "Práctica profesional en hospitales, IPS, secretarías de salud o programas de prevención trabajando con comunidades",
      ]}
      mercadoTexto="Nuestros egresados salen a trabajar en los programas de prevención que Antioquia necesita, con formación práctica y contacto real con las comunidades desde el primer ciclo."
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
