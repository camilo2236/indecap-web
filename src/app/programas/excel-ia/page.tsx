import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Excel + Inteligencia Artificial | INDECAP 2026",
  description: "Aprende Excel 3x más rápido con IA. Tablas dinámicas, automatización y análisis de datos usando Claude. INDECAP 2026.",
};

export default function ExcelIAPage() {
  return (
    <ProgramPage
      programaId="excel-ia"
      titulo="Excel + Inteligencia Artificial"
      subtitulo="Excel con"
      emWord="Inteligencia Artificial"
      accent="#312783"
      accentDark="#1a1650"
      escuela="Tecnología · INDECAP"
      horas="40"
      semestres="1"
      sedesNum="3"
<<<<<<< HEAD
      fotoSrc="/images/programs/excel-ia/excel-ia-hero.jpg"
=======
      fotoSrc="/images/programs/excel-ia.jpg"
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      fotoAlt="Curso Excel + IA INDECAP 2026"
      descripcion="Aprende todo lo que aprenderías en un curso de Excel tradicional, pero 3 veces más rápido y eficiente usando Inteligencia Artificial. Tablas dinámicas, fórmulas, automatización y análisis de datos — con Claude como tu asistente."
      capacidades={[
        "Dominar tablas dinámicas y fórmulas avanzadas con asistencia de IA",
        "Automatizar tareas repetitivas en Excel usando prompts de IA",
        "Crear dashboards y reportes profesionales en la mitad del tiempo",
        "Analizar grandes volúmenes de datos con IA sin necesidad de programar",
        "Limpiar y transformar bases de datos usando Claude como copiloto",
        "Aplicar lo aprendido en tu trabajo desde el primer día del curso",
      ]}
      salidas={[
        { icon: "💼", name: "Cualquier empresa que use Excel" },
        { icon: "📊", name: "Análisis de Datos" },
        { icon: "🏥", name: "Sector Salud y Farmacia" },
        { icon: "🏪", name: "Comercio y Ventas" },
        { icon: "📋", name: "Administración y RRHH" },
        { icon: "🚀", name: "Freelance y Consultoría" },
      ]}
      pensum1={["Introducción a la IA aplicada a Excel","Prompts efectivos para tareas de Excel","Fórmulas avanzadas con asistencia de IA","Tablas dinámicas aceleradas con IA","Limpieza y transformación de datos","Dashboards profesionales","Automatización sin macros usando IA","Análisis y presentación de resultados"]}
      pensum2={["Proyecto final: caso real de tu trabajo","Presentación de resultados","Certificación INDECAP"]}
      mercadoTexto="El 90% de las empresas usan Excel. Los profesionales que combinan Excel con IA son los más productivos y los mejor pagados del mercado laboral actual. Este curso te pone 3 años adelante de tu competencia."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Excel + IA. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Sé de los primeros en aprender Excel con IA en Medellín"
      ctaDesc="Cupos muy limitados para el primer grupo. Inscríbete hoy y transforma tu productividad desde el primer día."
    />
  );
}
