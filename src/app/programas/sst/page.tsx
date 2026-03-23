import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Seguridad y Salud en el Trabajo (SST) | INDECAP – Medellín, Envigado",
  description: "Certifícate en SST en INDECAP. Domina el Sistema de Gestión (SG-SST), prevención de riesgos laborales y normatividad legal con enfoque práctico.",
};

export default function SSTPage() {
  return (
    <ProgramPage
      programaId="sst"
      titulo="Técnico Laboral en Seguridad y Salud en el Trabajo"
      subtitulo="Seguridad y"
      emWord="Salud en el Trabajo"
      accent="#8A6A1A" 
      accentDark="#5C4510"
      escuela="Escuela de Seguridad" 
      horas="1.000" 
      semestres="2" 
      sedesNum="2"
      fotoSrc="/images/programs/sst/sst-hero.jpg" // 🔥 Ruta para tu nueva foto con IA (Ej: estudiante con casco y chaleco técnico)
      fotoAlt="Estudiante de SST INDECAP realizando inspección de seguridad industrial"
      descripcion="Conviértete en el guardián de la integridad laboral. Aprende a diseñar, implementar y administrar el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) bajo los estándares legales vigentes en Colombia."
      capacidades={[
        "Diseñar e implementar el SG-SST según el Decreto 1072 y Res. 0312",
        "Identificar peligros, evaluar y valorar riesgos en entornos laborales",
        "Liderar comités clave como el COPASST y el Comité de Convivencia",
        "Investigar accidentes e incidentes de trabajo para prevenir recurrencias",
        "Ejecutar planes de emergencia, brigadas y primeros auxilios empresariales",
        "Realizar inspecciones técnicas y auditorías de seguridad industrial",
      ]}
      salidas={[
        { icon: "🏭", name: "Plantas Industriales y Manufactura" },
        { icon: "🏗️", name: "Sector Construcción e Ingeniería" },
        { icon: "🏢", name: "Administración en Empresas de Servicios" },
        { icon: "🏥", name: "Instituciones de Salud (IPS y EPS)" },
        { icon: "🏛️", name: "Entidades Gubernamentales" },
        { icon: "🚀", name: "Consultoría y Asesoría Independiente" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Prevención
      pensum1={[
        "Introducción a la Seguridad y Salud en el Trabajo",
        "Marco Legal y Normatividad (Decreto 1072 y Estándares Mínimos)",
        "Identificación de Peligros y Valoración de Riesgos (GTC 45)",
        "Medicina Preventiva y del Trabajo",
        "Primeros Auxilios y Brigadas de Emergencia Empresariales",
        "Ética Profesional y Humanización del Trabajo",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Gestión y Auditoría
      pensum2={[
        "Higiene Industrial y Control de Factores Ambientales",
        "Seguridad Industrial y Prevención de Accidentes",
        "Sistemas de Vigilancia Epidemiológica Ocupacional",
        "Auditoría, Indicadores y Mejora Continua del SG-SST",
        "Investigación de Accidentes y Enfermedades Laborales",
        "Práctica Formativa en Entornos Empresariales Reales",
      ]}
      mercadoTexto="En Colombia, implementar el SG-SST es una obligación legal para todas las empresas, sin importar su tamaño. Esto garantiza una demanda permanente de técnicos capaces de evitar riesgos humanos y sanciones económicas. Un experto en SST no es un gasto, es la inversión que protege el futuro de la empresa."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Seguridad y Salud en el Trabajo. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" }
      ]}
      ctaTitulo="Lidera la cultura de la prevención y salva vidas"
      ctaDesc="El cumplimiento legal es la prioridad de toda empresa hoy. Inscríbete ahora y prepárate para ser el profesional que garantiza entornos laborales seguros."
    />
  );
}
