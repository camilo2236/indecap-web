import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Técnico en Marketing Digital | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Marketing Digital en INDECAP. 1.000 horas. Aprende redes sociales, SEO, publicidad digital, e-commerce y estrategias de contenido para empresas del Valle de Aburrá.",
};

export default function MercadeoPage() {
  return (
    <ProgramPage
      titulo="Técnico en Marketing Digital"
      subtitulo="Técnico en"
      emWord="Marketing Digital"
      accent="#8A2A6B"
      escuela="Escuela de Administración"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/mercadeo/mercadeo-hero.jpg"
      fotoAlt="Estudiante de Marketing Digital INDECAP"
      descripcion="Las marcas viven en internet. Las empresas del Valle de Aburrá necesitan personas que sepan crear contenido, gestionar redes sociales, correr campañas digitales y analizar resultados. En 18 meses te formamos como el perfil más buscado en el mercado laboral digital de Medellín — con herramientas reales, campañas reales y métricas reales desde el primer semestre."
      capacidades={[
        "Crear y gestionar estrategias de contenido para redes sociales con criterio de marca y audiencia",
        "Configurar y optimizar campañas de publicidad digital en Meta Ads y Google Ads",
        "Aplicar fundamentos de SEO y posicionamiento web para mejorar la visibilidad digital",
        "Gestionar tiendas en plataformas de e-commerce: Shopify, Mercado Libre, Instagram Shopping",
        "Analizar métricas digitales con Google Analytics y Meta Business Suite",
        "Diseñar piezas digitales y materiales de comunicación comercial para canales digitales",
        "Apoyar estrategias de email marketing, funnels de venta y automatización básica",
        "Brindar atención al cliente en canales digitales con enfoque en fidelización",
      ]}
      salidas={[
        { icon: "📱", name: "Community Manager", desc: "Gestión de redes sociales y contenido digital en empresas de Medellín" },
        { icon: "🎯", name: "Agencias Digitales", desc: "Agencias de marketing y publicidad digital del Valle de Aburrá" },
        { icon: "🛒", name: "E-commerce", desc: "Tiendas online, marketplaces y proyectos de venta digital" },
        { icon: "🏢", name: "Empresas del Valle de Aburrá", desc: "Áreas de mercadeo, comunicaciones y ventas de cualquier sector" },
        { icon: "🚀", name: "Freelance y Emprendimiento", desc: "Tu propia agencia, negocio digital o servicios como independiente" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional en el entorno digital",
        "Fundamentos del marketing y comportamiento del consumidor digital",
        "Herramientas digitales esenciales: suite Google, Canva, plataformas de gestión",
        "Estrategia de contenido y storytelling para redes sociales",
        "Publicidad digital: Meta Ads, Google Ads, configuración y optimización de campañas",
        "SEO y posicionamiento web: fundamentos, palabras clave y optimización básica",
        "E-commerce: gestión de tiendas online, catálogos y experiencia de compra",
        "Métricas y analítica digital: Google Analytics, reportes y toma de decisiones basada en datos",
        "Servicio al cliente digital: atención, gestión de comunidades y manejo de crisis",
        "Ética, responsabilidad y legislación en comunicación digital",
      ]}
      pensum2={[
        "Práctica profesional en empresas o agencias digitales del Valle de Aburrá — ejecutando campañas reales, gestionando redes y analizando resultados con supervisión profesional",
      ]}
      mercadoTexto="Medellín es la ciudad colombiana que más ha crecido en ecosistema digital en los últimos 5 años. Startups, pymes, grandes empresas y agencias necesitan personas que sepan moverse en el mundo digital con criterio. No solo publicar en redes — sino construir audiencias, convertir seguidores en clientes y medir cada resultado. Eso es exactamente lo que aprenderás aquí."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Marketing Digital. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín",  address: "Cl. 56 # 45-26, Medellín",        tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado",  address: "Cl 37 Sur #43A-84, Envigado",     tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas",     address: "Calle 130 sur # 51-65, Caldas",   tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El marketing digital es la habilidad más demandada en Colombia. Fórmate en 18 meses y empieza a trabajar en el sector que más crece."
      programaId="mercadeo"
    />
  );
}