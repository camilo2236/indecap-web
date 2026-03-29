import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Salud Oral | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Auxiliar en Salud Oral en INDECAP. 1.650 horas de formación práctica. Trabaja en consultorios odontológicos, clínicas y centros de salud del Valle de Aburrá.",
};

export default function SaludOralPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Salud Oral"
      subtitulo="Auxiliar en"
      emWord="Salud Oral"
      accent="#0E7C7B"
      escuela="Escuela de Salud"
      horas="1.650"
      semestres="3"
      sedesNum="3"
      fotoSrc="/images/programs/salud-oral/salud-oral-hero.jpg"
      fotoAlt="Estudiante de Salud Oral INDECAP"
      descripcion="En Medellín y el Valle de Aburrá hay cientos de consultorios odontológicos privados, clínicas dentales y centros de salud que necesitan auxiliares competentes todos los días. Este programa te forma para trabajar al lado del odontólogo, asistiendo procedimientos y cuidando pacientes con criterio técnico y calidez."
      capacidades={[
        "Asistir al odontólogo en procedimientos clínicos (operatoria, endodoncia, cirugía oral, periodoncia)",
        "Preparar el consultorio, esterilizar instrumental y manejar el equipo odontológico",
        "Tomar y revelar radiografías dentales periapicales y panorámicas",
        "Aplicar protocolos de bioseguridad y control de infecciones en el consultorio",
        "Realizar educación en salud oral a pacientes (técnica de cepillado, hábitos preventivos)",
        "Manejar agendas, historias clínicas odontológicas y registros del consultorio",
      ]}
      salidas={[
        { icon: "🦷", name: "Consultorios Odontológicos", desc: "Privados en Medellín, Envigado, Itagüí, Sabaneta y Caldas" },
        { icon: "🏥", name: "Clínicas Especializadas", desc: "Ortodoncia, implantes, cirugía oral y periodoncia" },
        { icon: "🏢", name: "IPS y EPS", desc: "Servicios de salud oral en programas de salud colectiva" },
        { icon: "🏛️", name: "Centros de Salud Pública", desc: "Programas de prevención y promoción en salud dental" },
        { icon: "🤝", name: "Programas Comunitarios", desc: "Equipos de salud oral en campañas sociales" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad en el ejercicio de la salud oral",
        "Herramientas digitales aplicadas al consultorio odontológico",
        "Atención y comunicación con el paciente odontológico",
        "Control microbiológico, esterilización y bioseguridad en odontología",
        "Apoyo en diagnóstico y tratamiento odontológico (anatomía dental, instrumental, materiales)",
      ]}
      pensum2={[
        "Asistencia en procedimientos odontológicos especializados",
        "Radiología oral básica",
        "Promoción y prevención en salud oral",
        "Práctica formativa en consultorios o clínicas odontológicas",
      ]}
      pensum3={[
        "Práctica profesional en consultorios odontológicos, clínicas dentales o IPS con pacientes reales",
      ]}
      mercadoTexto="Los odontólogos del Valle de Aburrá saben que un auxiliar bien formado hace la diferencia entre un consultorio que funciona y uno que no. Nuestros egresados llegan al consultorio sabiendo preparar el puesto, asistir al profesional y tratar al paciente con calidez — porque así aprendieron, practicando."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Salud Oral. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Los consultorios odontológicos de Antioquia necesitan auxiliares formados. Asegura tu cupo hoy."
      programaId="salud-oral"
    />
  );
}