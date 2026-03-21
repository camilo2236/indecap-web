import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Asistente en Talento Humano | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate en Gestión de Talento Humano en INDECAP. Domina nómina, contratación, bienestar laboral y legislación con formación práctica.",
};

export default function TalentoHumanoPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Asistente en Talento Humano"
      subtitulo="Asistente en"
      emWord="Talento Humano"
      accent="#6B4A1A" 
      accentDark="#4A3210"
      escuela="Escuela de Administración" 
      horas="1.000" 
      semestres="2" 
      sedesNum="3"
      fotoSrc="/images/programs/talento-humano/talento-humano-hero.jpg" // 🔥 Ruta para tu nueva foto con IA
      fotoAlt="Estudiante de Talento Humano INDECAP gestionando procesos de selección"
      descripcion="Conviértete en el puente entre las empresas y su activo más valioso: las personas. Aprende a liderar procesos de selección, liquidar nóminas complejas y crear entornos de bienestar organizacional con herramientas digitales de vanguardia."
      capacidades={[
        "Liderar procesos de reclutamiento, selección e inducción de personal",
        "Liquidar nómina, prestaciones sociales y seguridad social bajo ley vigente",
        "Diseñar programas de bienestar, capacitación y clima organizacional",
        "Gestionar la contratación y el ciclo de vida del empleado en la empresa",
        "Aplicar la legislación laboral colombiana y normas de SST",
        "Dominar software de gestión humana y herramientas de productividad",
      ]}
      salidas={[
        { icon: "🏢", name: "Departamentos de RR.HH." },
        { icon: "💼", name: "Empresas de Reclutamiento" },
        { icon: "📊", name: "Consultorías de Personal" },
        { icon: "🏦", name: "Sector Público y Privado" },
        { icon: "🤝", name: "Agencias de Empleo" },
        { icon: "🚀", name: "Emprendimiento en Consultoría" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Contratación
      pensum1={[
        "Introducción a la Gestión del Talento Humano",
        "Legislación Laboral y Tipos de Contratación en Colombia",
        "Estrategias de Reclutamiento y Selección de Personal",
        "Procesos de Inducción, Entrenamiento y Capacitación",
        "Comunicación Asertiva y Cultura Organizacional",
        "Herramientas Digitales y Ofimática para RR.HH.",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Nómina y Desarrollo
      pensum2={[
        "Nómina Electrónica, Seguridad Social y Prestaciones",
        "Gestión del Desempeño y Evaluación por Competencias",
        "Bienestar Laboral y Experiencia del Empleado (EX)",
        "Salud y Seguridad en el Trabajo (SST) para Administrativos",
        "Ética Empresarial y Relaciones Laborales",
        "Práctica Formativa en Departamentos de Gestión Humana",
      ]}
      mercadoTexto="En la era de la transformación digital, las empresas compiten por el mejor talento. Un asistente que no solo sepa de leyes, sino que entienda el bienestar y la productividad, es uno de los perfiles más buscados y transversales en todos los sectores económicos de Antioquia."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Talento Humano. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Lidera el futuro del trabajo desde hoy"
      ctaDesc="Las empresas buscan expertos en personas. Inscríbete ahora y prepárate para ser el profesional que impulsa el crecimiento organizacional."
    />
  );
}