import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Atención a la Primera Infancia | INDECAP – Medellín, Envigado, Caldas",
  description:
    "Técnico Laboral en Atención a la Primera Infancia en INDECAP. 1.000 horas. Fórmate para cuidar, estimular y acompañar el desarrollo integral de niños de 0 a 6 años en el Valle de Aburrá.",
};

export default function PrimeraInfanciaPage() {
  return (
    <ProgramPage
      titulo="Atención a la Primera Infancia"
      subtitulo="Atención a la"
      emWord="Primera Infancia"
      accent="#5cb85c"
      escuela="Escuela de Salud"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/primera-infancia/hero.jpg"
      fotoAlt="Profesional INDECAP cuidando un bebé"
      descripcion="Los primeros 6 años de vida son los más importantes en el desarrollo de un ser humano. Este programa te forma para ser el profesional que acompaña esa etapa con técnica, amor y propósito — desde la estimulación temprana hasta la orientación a familias. Una carrera con alta demanda laboral y enorme impacto social."
      capacidades={[
        "Aplicar técnicas de estimulación temprana para potenciar el desarrollo cognitivo y motor",
        "Brindar cuidado integral al niño en aspectos de higiene, nutrición y salud",
        "Planificar y ejecutar actividades lúdicas, artísticas y pedagógicas",
        "Fortalecer el vínculo afectivo y el apego seguro entre el niño y su entorno",
        "Observar y registrar el desarrollo infantil para detectar necesidades oportunamente",
        "Orientar a familias sobre pautas de crianza y acompañamiento en el hogar",
        "Identificar señales de alerta en el desarrollo y remitir a especialistas cuando sea necesario",
        "Aplicar normas de bioseguridad y protocolos de cuidado en entornos infantiles",
      ]}
      salidas={[
        { icon: "🏡", name: "Hogares Infantiles", desc: "Cuidado y estimulación en guarderías y hogares comunitarios" },
        { icon: "🌱", name: "Jardines y CDI", desc: "Atención pedagógica en centros de desarrollo infantil" },
        { icon: "🏥", name: "Salud Pediátrica", desc: "Apoyo en hospitales y clínicas con servicios de pediatría" },
        { icon: "🤝", name: "Programas del ICBF", desc: "Primera infancia, familia y comunidad a nivel nacional" },
        { icon: "🏠", name: "Atención Domiciliaria", desc: "Cuidado profesional personalizado en el hogar del niño" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos de desarrollo humano y primera infancia",
        "Estimulación temprana e inteligencias múltiples",
        "Salud, nutrición e higiene infantil",
        "Lúdica, recreación y expresión artística",
        "Psicología del desarrollo infantil",
        "Proyectos pedagógicos de aula",
        "Legislación, derechos del niño y política pública de infancia",
        "Acompañamiento a familias y pautas de crianza",
        "Primeros auxilios y bioseguridad en entornos infantiles",
      ]}
      pensum2={[
        "Práctica profesional en hogares infantiles, jardines, CDI o instituciones de salud pediátrica, aplicando de forma real todas las competencias del programa",
      ]}
      mercadoTexto="Colombia tiene más de 5 millones de niños menores de 6 años. El Estado, a través del ICBF y los municipios, financia miles de cupos de atención que requieren profesionales certificados. En Antioquia, la demanda de técnicos en primera infancia supera la oferta — formarte hoy es entrar a un mercado laboral con empleo garantizado."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Atención a la Primera Infancia. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín",  address: "Cl. 56 # 45-26, Medellín",      tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado",  address: "Cl 37 Sur #43A-84, Envigado",    tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas",    address: "Calle 130 sur # 51-65, Caldas",  tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El desarrollo de la primera infancia es una de las carreras con más propósito y proyección en Colombia. Fórmate en 18 meses y empieza a transformar vidas desde el primer día."
      programaId="primera-infancia"
    />
  );
}