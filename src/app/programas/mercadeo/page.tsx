import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Mercadeo y Ventas | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate en Mercadeo en INDECAP. Domina el marketing digital, estrategias de ventas, e-commerce y gestión comercial con enfoque práctico.",
};

export default function MercadeoPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar en Mercadeo"
      subtitulo="Auxiliar en"
      emWord="Mercadeo"
      accent="#8A2A6B" 
      accentDark="#5C1A47"
      escuela="Escuela de Administración" 
      horas="1.000" 
      semestres="2" 
      sedesNum="3"
      fotoSrc="/images/programs/mercadeo/mercadeo-hero.jpg" // 🔥 Ruta para tu nueva foto con IA
      fotoAlt="Estudiante de Mercadeo INDECAP analizando métricas digitales"
      descripcion="Aprende a conectar marcas con personas en la era de la transformación digital. Domina las estrategias de ventas, el marketing de contenidos, la pauta digital y la gestión comercial para impulsar empresas y emprendimientos hacia el éxito."
      capacidades={[
        "Diseñar y ejecutar embudos de venta y estrategias de marketing digital",
        "Gestionar redes sociales corporativas y creación de contenido estratégico",
        "Analizar el comportamiento del consumidor y tendencias del mercado real",
        "Aplicar técnicas de neuroventas y negociación comercial de alto impacto",
        "Liderar procesos de atención, servicio y fidelización de clientes (CRM)",
        "Gestionar canales de E-commerce y plataformas de venta en línea",
      ]}
      salidas={[
        { icon: "📱", name: "Agencias de Marketing Digital" },
        { icon: "🛒", name: "Empresas de Retail y Consumo" },
        { icon: "📣", name: "Departamentos de Publicidad" },
        { icon: "💼", name: "Equipos de Ventas Corporativas" },
        { icon: "🚀", name: "Gestión de Emprendimientos" },
        { icon: "📊", name: "Analista de Mercado" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Estrategia Digital
      pensum1={[
        "Introducción al Mercadeo y Comportamiento del Consumidor",
        "Marketing Digital: Redes Sociales y Estrategia de Contenidos",
        "Fundamentos de Ventas y Técnicas de Negociación",
        "Comunicación Comercial y Publicidad Creativa",
        "Investigación de Mercados y Análisis de Oportunidades",
        "Herramientas Digitales y Diseño Básico para Mercadeo",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Gestión Comercial y Cierre
      pensum2={[
        "E-commerce: Gestión de Tiendas Virtuales y Canales Digitales",
        "Growth Marketing: Estrategias de Crecimiento y Fidelización",
        "Gestión de Marca (Branding) y Posicionamiento",
        "Ética Profesional, Emprendimiento y Plan de Negocio",
        "Legislación Comercial y Normas de Protección al Consumidor",
        "Práctica Formativa en Departamentos Comerciales",
      ]}
      mercadoTexto="El mundo se mueve a través de las ventas. En la actualidad, todas las empresas, desde la más pequeña hasta la multinacional, necesitan expertos que sepan leer el mercado y ejecutar estrategias digitales efectivas. El mercadeo es la carrera con mayor capacidad de generar ingresos rápidos a través de incentivos y comisiones."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Mercadeo. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Domina el arte de vender y liderar el mercado"
      ctaDesc="No solo aprendas a vender, aprende a crear marcas que la gente ame. Inscríbete ahora y conviértete en el profesional que toda empresa necesita para crecer."
    />
  );
}