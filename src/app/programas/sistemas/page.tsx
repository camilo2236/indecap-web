import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Sistemas e Informática | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate en Sistemas en INDECAP. Domina el soporte técnico, mantenimiento de hardware, redes y herramientas digitales para el mundo laboral.",
};

export default function SistemasPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar en Sistemas"
      subtitulo="Auxiliar en"
      emWord="Sistemas"
      accent="#312783" 
      accentDark="#1a1650"
      escuela="Escuela de Sistemas" 
      horas="700" 
      semestres="1" 
      sedesNum="3"
      fotoSrc="/images/programs/sistemas/sistemas-hero-ia.webp" 
      fotoAlt="Estudiante de Sistemas INDECAP realizando mantenimiento técnico avanzado"
      descripcion="Domina la tecnología que impulsa el mundo moderno. Aprende soporte técnico de alto nivel, arquitectura de hardware, configuración de redes y administración de herramientas digitales esenciales para la productividad empresarial."
      capacidades={[
        "Realizar mantenimiento preventivo y predictivo de hardware y software",
        "Configurar y administrar redes locales (LAN) y conectividad Wi-Fi",
        "Brindar soporte técnico presencial y remoto de primer y segundo nivel",
        "Instalar y optimizar sistemas operativos Windows y Linux",
        "Dominar herramientas de ofimática avanzada (Excel Pro, Dashboards)",
        "Implementar protocolos básicos de ciberseguridad y respaldo de datos",
      ]}
      salidas={[
        { icon: "💻", name: "Soporte Técnico Corporativo" },
        { icon: "🔧", name: "Mantenimiento y Reparación" },
        { icon: "🌐", name: "Administración de Redes Básicas" },
        { icon: "📊", name: "Gestión de Datos y Ofimática" },
        { icon: "🏢", name: "Empresas de Tecnología y Outsourcing" },
        { icon: "🚀", name: "Emprendimiento de Servicios IT" },
      ]}
      pensum1={[
        "Arquitectura de Computadores y Electrónica Básica",
        "Mantenimiento Avanzado de Hardware y Limpieza Técnica",
        "Instalación y Configuración de Sistemas Operativos",
        "Redes de Datos: Cableado Estructurado y Wi-Fi Pro",
        "Seguridad de la Información y Antivirus Corporativos",
        "Ofimática de Alta Productividad (Excel, Word, Cloud)",
        "Introducción al Soporte Técnico Remoto y Help Desk",
        "Ética Digital, Emprendimiento y Teletrabajo",
        "Práctica Formativa en Laboratorios de Sistemas",
      ]}
      pensum2={[]} // 🔥 Corrección para TypeScript
      pensum3={[]} // 🔥 Corrección para TypeScript
      mercadoTexto="La digitalización es irreversible. Hoy, desde una tienda de barrio hasta una multinacional, dependen de su infraestructura tecnológica. Un técnico en sistemas actualizado no solo encuentra empleo rápido, sino que es el pilar que garantiza que la operación de cualquier empresa no se detenga."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Sistemas. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Conviértete en el experto tecnológico que el mercado exige"
      ctaDesc="Prepárate para los retos de la transformación digital. Inscríbete hoy y asegura tu lugar en la industria con mayor crecimiento del mundo."
    />
  );
}