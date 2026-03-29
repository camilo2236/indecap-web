import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Mercadeo | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Auxiliar en Mercadeo en INDECAP. 1.000 horas. Aprende marketing digital, comunicación comercial y estrategias de ventas en empresas del Valle de Aburrá.",
};

export default function MercadeoPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Mercadeo"
      subtitulo="Auxiliar en"
      emWord="Mercadeo"
      accent="#1a086e"
      escuela="Escuela Administrativa"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/mercadeo.jpg"
      fotoAlt="Estudiante de Mercadeo INDECAP"
      descripcion="Toda empresa necesita vender. Y para vender, necesita personas que sepan comunicar, conectar y posicionar. El auxiliar en mercadeo es el perfil que las empresas del Valle de Aburrá necesitan para sus equipos comerciales, sus redes sociales y sus estrategias de crecimiento."
      capacidades={[
        "Apoyar la planificación y ejecución de estrategias de mercadeo en empresas del Valle de Aburrá",
        "Gestionar redes sociales empresariales con criterio estratégico",
        "Elaborar material de comunicación comercial: presentaciones, piezas digitales, contenidos",
        "Apoyar procesos de investigación de mercados y análisis de competencia",
        "Brindar atención y servicio al cliente en canales presenciales y digitales",
        "Apoyar equipos de ventas en seguimiento de prospectos y clientes",
      ]}
      salidas={[
        { icon: "📢", name: "Empresas del Valle de Aburrá", desc: "Áreas de mercadeo y comunicaciones de cualquier sector" },
        { icon: "📱", name: "Community Management", desc: "Gestión de redes sociales y contenido digital" },
        { icon: "🛒", name: "Equipos de Ventas", desc: "Apoyo comercial y atención al cliente" },
        { icon: "🎯", name: "Agencias de Marketing", desc: "Agencias digitales y de publicidad en Medellín" },
        { icon: "🚀", name: "Emprendimiento", desc: "Tu propio negocio o freelance en marketing digital" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento y gestión empresarial",
        "Herramientas digitales y plataformas de marketing",
        "Ética y responsabilidad en comunicación comercial",
        "Fundamentos de mercadeo: conceptos, segmentación, posicionamiento",
        "Comunicación comercial: redacción, presentaciones, material publicitario",
        "Marketing digital básico: redes sociales, SEO, publicidad digital",
        "Servicio al cliente: atención, fidelización y manejo de quejas",
      ]}
      pensum2={[
        "Práctica profesional en empresas del Valle de Aburrá apoyando procesos de mercadeo y ventas reales",
      ]}
      mercadoTexto="Las empresas de Antioquia necesitan personas que sepan comunicar, vender y conectar con los clientes. Nuestros egresados salen con habilidades prácticas en marketing digital y comunicación comercial que las empresas pueden usar desde el primer día."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Auxiliar en Mercadeo. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Fórmate en mercadeo y comunicación digital en 18 meses — una de las habilidades más demandadas en el mercado laboral de hoy."
      programaId="mercadeo"
    />
  );
}