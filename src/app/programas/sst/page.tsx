// SST — src/app/programas/sst/page.tsx
import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Seguridad y Salud en el Trabajo | INDECAP – Envigado", description: "Técnico Laboral en SST en INDECAP. 1.000 horas. Aprende a implementar el SG-SST según la normativa colombiana. Toda empresa lo necesita — tú puedes ofrecerlo." };
export default function SSTPage() {
  return (
    <ProgramPage
      titulo="Seguridad y Salud en el Trabajo"
      subtitulo="Seguridad y"
      emWord="Salud en el Trabajo"
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
    />
  );
}
