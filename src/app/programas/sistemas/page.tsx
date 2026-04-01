import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
<<<<<<< HEAD
  title: "Técnico en Sistemas | INDECAP – Medellín, Envigado",
  description: "Técnico Laboral en Sistemas en INDECAP. 1.000 horas. Soporte técnico, redes, mantenimiento de equipos y bases de datos. Trabaja en empresas del Valle de Aburrá desde el primer día.",
=======
  title: "Auxiliar en Sistemas e Informática | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate en Sistemas en INDECAP. Domina el soporte técnico, mantenimiento de hardware, redes y herramientas digitales para el mundo laboral.",
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
};

export default function SistemasPage() {
  return (
    <ProgramPage
<<<<<<< HEAD
      titulo="Técnico en Sistemas"
      subtitulo="Técnico en"
      emWord="Sistemas"
      accent="#1a086e"
      escuela="Escuela de Sistemas"
      horas="1.000"
      semestres="2"
      sedesNum="2"
      fotoSrc="/images/programs/sistemas/sala-medellin-clase.jpg"
      fotoAlt="Estudiante de Sistemas INDECAP"
      descripcion="La tecnología cambia rápido, pero lo que no cambia es que las empresas necesitan personas que sepan resolver problemas técnicos hoy. No en 5 años. El soporte técnico y la gestión de sistemas es un perfil que necesitan empresas de todos los tamaños, y que te permite trabajar rápido mientras sigues aprendiendo."
      capacidades={[
        "Diagnosticar y reparar fallas de hardware en computadores de escritorio y portátiles",
        "Instalar, configurar y mantener sistemas operativos (Windows, Linux básico)",
        "Configurar redes LAN básicas: cableado, routers, switches, puntos de acceso WiFi",
        "Administrar y consultar bases de datos básicas",
        "Desarrollar páginas web con HTML, CSS y herramientas de desarrollo web",
        "Dar soporte técnico a usuarios: recibir, documentar y resolver incidentes",
        "Aplicar medidas de seguridad informática básica y respaldo de información",
      ]}
      salidas={[
        { icon: "💻", name: "Soporte Técnico", desc: "Empresas de cualquier sector que tengan equipos de cómputo" },
        { icon: "🌐", name: "Empresas de TI", desc: "Soporte técnico y servicios de sistemas en el Valle de Aburrá" },
        { icon: "📞", name: "Call Centers", desc: "Centros de servicios compartidos y atención al usuario" },
        { icon: "🏫", name: "Instituciones Educativas", desc: "Soporte de infraestructura tecnológica" },
        { icon: "🔧", name: "Independiente", desc: "Mantenimiento y soporte técnico por cuenta propia" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento en servicios de tecnología",
        "Herramientas digitales y ofimática avanzada",
        "Ética y responsabilidad en el manejo de información y equipos",
        "Ensamble, mantenimiento preventivo y correctivo de equipos de cómputo",
        "Redes de datos: fundamentos, configuración y administración básica",
        "Bases de datos: diseño, creación y consultas básicas",
        "Desarrollo web: HTML, CSS y herramientas de diseño web",
        "Aplicación de tecnologías de la información en entornos empresariales",
      ]}
      pensum2={[
        "Práctica profesional en empresas del Valle de Aburrá brindando soporte técnico y gestionando sistemas",
      ]}
      mercadoTexto="Nuestros egresados salen con las bases para dar soporte, mantener equipos y gestionar redes — y con la mentalidad de seguir aprendiendo, porque en tecnología el que se queda quieto se queda atrás."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Técnico en Sistemas. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Toda empresa necesita soporte técnico. Fórmate en 18 meses y entra al mercado laboral con habilidades que se usan desde el primer día."
      programaId="sistemas"
=======
      titulo="Técnico Laboral Auxiliar en Sistemas"
      subtitulo="Auxiliar en"
      emWord="Sistemas"
      accent="#312783" 
      accentDark="#1a1650"
      escuela="Escuela de Sistemas" 
      horas="700" 
      semestres="1" 
      sedesNum="3"
      fotoSrc="/images/programs/sistemas/sala-medellin-clase.jpg"
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
      pensum2={[]}
      pensum3={[]}
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
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
    />
  );
}