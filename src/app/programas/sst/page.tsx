// SST — src/app/programas/sst/page.tsx
import { ProgramPage } from "@/components/ProgramPage";
<<<<<<< HEAD
export const metadata = { title: "Seguridad y Salud en el Trabajo | INDECAP – Envigado", description: "Técnico Laboral en SST en INDECAP. 1.000 horas. Aprende a implementar el SG-SST según la normativa colombiana. Toda empresa lo necesita — tú puedes ofrecerlo." };
=======

export const metadata = {
  title: "Seguridad y Salud en el Trabajo (SST) | INDECAP – Medellín, Envigado",
  description: "Certifícate en SST en INDECAP. Domina el Sistema de Gestión (SG-SST), prevención de riesgos laborales y normatividad legal con enfoque práctico.",
};

>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
export default function SSTPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral en Seguridad y Salud en el Trabajo"
      subtitulo="Seguridad y"
      emWord="Salud en el Trabajo"
<<<<<<< HEAD
      accent="#B45309"
      escuela="Escuela Administrativa"
      horas="1.000"
      semestres="2"
      sedesNum="1"
      fotoSrc="/images/programs/sst/sst-hero.jpg"
      fotoAlt="Estudiante de SST INDECAP"
      descripcion="Desde la resolución 0312 de 2019, todas las empresas en Colombia deben implementar un Sistema de Gestión de Seguridad y Salud en el Trabajo. No es opcional. Eso significa que la demanda de personas capacitadas en este tema es constante — y tú puedes ser una de ellas en 18 meses."
      capacidades={[
        "Identificar peligros y evaluar riesgos laborales en diferentes entornos de trabajo",
        "Apoyar la implementación y mantenimiento del SG-SST según la normativa colombiana vigente",
        "Realizar inspecciones de seguridad en puestos de trabajo, instalaciones y equipos",
        "Ejecutar y documentar capacitaciones en prevención de riesgos para trabajadores",
        "Aplicar protocolos de trabajo seguro en alturas (Resolución 4272 de 2021)",
        "Gestionar documentación del sistema: matrices de riesgos, planes de emergencia, registros",
      ]}
      salidas={[
        { icon: "🏭", name: "Empresas Manufactureras", desc: "Manufactura, construcción y servicios del Valle de Aburrá" },
        { icon: "🦺", name: "Cualquier Sector", desc: "Toda empresa con trabajadores debe tener SST" },
        { icon: "📋", name: "ARL", desc: "Administradoras de Riesgos Laborales" },
        { icon: "🔍", name: "Consultoría en SST", desc: "Apoyo a profesionales en inspecciones y documentación" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad profesional en seguridad laboral",
        "Herramientas digitales para la gestión documental del SG-SST",
        "Fundamentos del Sistema de Gestión de Seguridad y Salud en el Trabajo",
        "Diagnóstico de condiciones de trabajo y evaluación de riesgos",
        "Trabajo seguro en alturas: normativa, equipos y procedimientos",
        "Control de peligros: medidas de prevención, protección y mitigación",
        "Seguridad industrial: manejo de emergencias, EPP, señalización",
      ]}
      pensum2={[
        "Práctica profesional en empresas del Valle de Aburrá apoyando la implementación real del SG-SST",
      ]}
      mercadoTexto="La seguridad laboral no es un tema de moda — es una obligación legal. Las empresas de Antioquia necesitan personas que sepan hacerlo, no que repitan normas de memoria. Nuestros egresados llegan a las empresas listos para inspeccionar, documentar y capacitar desde el primer día."
      waNum="573174342783"
      waText="Hola INDECAP, estoy interesado en Seguridad y Salud en el Trabajo. Mi nombre es "
      sedes={[
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Toda empresa en Colombia necesita SST. Fórmate hoy y asegura tu empleabilidad en cualquier sector."
      programaId="sst"
=======
      accent="#8A6A1A" 
      accentDark="#5C4510"
      escuela="Escuela de Seguridad" 
      horas="1.000" 
      semestres="2" 
      sedesNum="2"
      fotoSrc="/images/programs/sst.jpg"
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
     
      pensum1={[
        "Introducción a la Seguridad y Salud en el Trabajo",
        "Marco Legal y Normatividad (Decreto 1072 y Estándares Mínimos)",
        "Identificación de Peligros y Valoración de Riesgos (GTC 45)",
        "Medicina Preventiva y del Trabajo",
        "Primeros Auxilios y Brigadas de Emergencia Empresariales",
        "Ética Profesional y Humanización del Trabajo",
      ]}
     
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
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
    />
  );
}