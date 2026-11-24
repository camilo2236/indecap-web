import { ProgramPage } from "@/components/ProgramPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/programas/talento-humano",
  title: "Auxiliar en Recurso Humano · Medellín, Envigado y Caldas",
  description:
    "Técnico Laboral como Auxiliar en Recurso Humano en INDECAP. 1.000 horas. Aprende a gestionar personal, nómina y procesos de selección en empresas del Valle de Aburrá.",
});

export default function TalentoHumanoPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Recurso Humano"
      subtitulo="Auxiliar en"
      emWord="Recurso Humano"
      accent="#1a086e"
      escuela="Escuela Administrativa"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/talento-humano/talento-humano-hero.jpg"
      fotoAlt="Estudiante de Auxiliar en Recurso Humano INDECAP"
      descripcion="Toda empresa con más de un puñado de trabajadores necesita a alguien que gestione su talento humano. Es un perfil que combina lo administrativo con lo relacional, y que tiene espacio en empresas de todos los tamaños — desde pymes hasta grandes corporaciones del Valle de Aburrá."
      capacidades={[
        "Apoyar procesos de reclutamiento y selección: publicación de vacantes, filtro de hojas de vida, coordinación de entrevistas",
        "Gestionar documentación de vinculación y desvinculación de empleados",
        "Liquidar nómina, seguridad social y prestaciones sociales según la legislación colombiana",
        "Apoyar procesos de inducción y capacitación de nuevos empleados",
        "Administrar bases de datos de personal y gestionar documentos del área",
        "Conocer los fundamentos del derecho laboral colombiano aplicables a la gestión de personal",
      ]}
      salidas={[
        { icon: "👥", name: "Recursos Humanos", desc: "Áreas de RR.HH. en empresas del Valle de Aburrá" },
        { icon: "🏢", name: "Empresas de Outsourcing", desc: "Servicios temporales y cooperativas de trabajo" },
        { icon: "🏦", name: "Cajas de Compensación", desc: "Comfama, Comfenalco y entidades similares" },
        { icon: "🏗️", name: "Pymes", desc: "Empresas que necesitan organizar sus procesos de personal" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento y gestión organizacional",
        "Herramientas digitales para la gestión de recursos humanos",
        "Ética y responsabilidad en el manejo de información de personal",
        "Procesos de selección y reclutamiento de personal",
        "Liquidación de nómina, seguridad social y prestaciones",
        "Vinculación, contratación y desvinculación de personal",
        "Gestión organizacional: clima laboral, bienestar y capacitación",
      ]}
      pensum2={[
        "Práctica profesional en el área de recursos humanos de empresas del Valle de Aburrá gestionando procesos reales",
      ]}
      mercadoTexto="Gestionar personas no se aprende solo en un salón de clase. Se aprende entendiendo cómo funcionan las empresas de verdad — con nóminas reales, con procesos de selección reales, con la legislación que aplica en Colombia."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Auxiliar en Recurso Humano. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Toda empresa necesita quien gestione su gente. Fórmate en 12 meses y entra al mercado laboral desde el primer día."
      programaId="talento-humano"
    />
  );
}
