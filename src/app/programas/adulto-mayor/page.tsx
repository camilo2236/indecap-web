import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Atención Integral al Adulto Mayor | INDECAP – Envigado",
  description: "Técnico Laboral en Atención al Adulto Mayor en INDECAP. 700 horas. Formación práctica en cuidado geriátrico, atención domiciliaria y centros de bienestar.",
};

export default function AdultoMayorPage() {
  return (
    <ProgramPage
      titulo="Atención Integral al Adulto Mayor"
      subtitulo="Atención al"
      emWord="Adulto Mayor"
      accent="#92400E"
      escuela="Escuela de Salud"
      horas="700"
      semestres="2"
      sedesNum="1"
      fotoSrc="/images/programs/adulto-mayor/adulto-mayor-hero.jpg"
      fotoAlt="Estudiante de Atención al Adulto Mayor INDECAP"
      descripcion="Colombia está envejeciendo: la demanda de cuidadores capacitados crece cada año. En el Valle de Aburrá hay centros geriátricos, hogares y familias que necesitan personas formadas para esta labor tan importante. Cuidar a un adulto mayor no se aprende solo con libros — se aprende acompañando, observando, escuchando."
      capacidades={[
        "Acompañar al adulto mayor en sus actividades diarias (alimentación, higiene, movilidad) con dignidad y respeto",
        "Aplicar técnicas de cuidado para personas con movilidad reducida o enfermedades crónicas",
        "Administrar medicamentos básicos según indicación médica y protocolos de seguridad",
        "Detectar señales de alerta en la salud física y emocional del adulto mayor",
        "Brindar acompañamiento emocional y estimulación cognitiva",
        "Comunicarse de forma efectiva con la familia y el equipo de salud del paciente",
      ]}
      salidas={[
        { icon: "🏠", name: "Centros Geriátricos", desc: "Hogares para adultos mayores en Medellín y el Valle de Aburrá" },
        { icon: "🤝", name: "Atención Domiciliaria", desc: "Familias que necesitan cuidadores capacitados" },
        { icon: "☀️", name: "Centros Día", desc: "Programas sociales para la tercera edad" },
        { icon: "🏥", name: "IPS y EPS", desc: "Servicios de atención al adulto mayor en salud" },
        { icon: "💛", name: "Fundaciones y ONG", desc: "Organizaciones que trabajan con población mayor" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad en el cuidado del adulto mayor",
        "Herramientas digitales básicas",
        "Fundamentos del emprendimiento en servicios de cuidado",
        "Técnicas de cuidado diario: higiene, alimentación, movilidad y posicionamiento",
        "Bioseguridad y control de infecciones en entornos geriátricos",
        "Acompañamiento emocional, espiritual y estimulación cognitiva",
        "Apoyo en actividades terapéuticas y recreativas",
        "Administración básica de medicamentos según protocolo",
      ]}
      pensum2={[
        "Práctica profesional en centros geriátricos, hogares o atención domiciliaria con personas reales bajo supervisión",
      ]}
      mercadoTexto="Nuestro programa combina formación técnica rigurosa con algo que no se puede enseñar en un aula genérica: la sensibilidad que nace de practicar en entornos reales, con personas reales, desde el principio."
      waNum="573174342783"
      waText="Hola INDECAP, estoy interesado en Atención al Adulto Mayor. Mi nombre es "
      sedes={[
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Una labor con impacto real en la vida de las personas. Fórmate en 18 meses para una de las carreras con más proyección social en Colombia."
      programaId="adulto-mayor"
    />
  );
}
