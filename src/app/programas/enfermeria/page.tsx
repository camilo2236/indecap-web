import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Enfermería | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Enfermería en INDECAP. 1.650 horas de formación práctica. Sedes en Medellín, Envigado y Caldas.",
};

export default function EnfermeriaPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Enfermería"
      subtitulo="Auxiliar en"
      emWord="Enfermería"
      accent="#1A3A6B"
      accentDark="#0D2347"
      escuela="Escuela de Salud"
      horas="1.650"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/enfermeria/enfermeria-hero.jpg"
      fotoAlt="Estudiante de Enfermería INDECAP"
      descripcion="Transforma tu vocación de servicio en una carrera sólida en el sector salud. Aprende cuidado de pacientes, procedimientos clínicos y trabajo en equipo hospitalario — con práctica real desde el primer semestre."
      capacidades={[
        "Brindar cuidados básicos de enfermería bajo supervisión del profesional de salud",
        "Realizar procedimientos como inyectología, toma de signos vitales y curaciones",
        "Preparar y administrar medicamentos siguiendo protocolos clínicos establecidos",
        "Aplicar técnicas de movilización, higiene y confort del paciente hospitalizado",
        "Asistir en procedimientos de urgencias y atención prehospitalaria básica",
        "Registrar y reportar novedades clínicas al equipo de enfermería",
      ]}
      salidas={[
        { icon: "🏥", name: "Hospitales y Clínicas" },
        { icon: "🚑", name: "Urgencias y UCI" },
        { icon: "🏠", name: "Cuidado Domiciliario" },
        { icon: "💊", name: "Dispensación de Medicamentos" },
        { icon: "📋", name: "Gestión en Salud" },
        { icon: "🚀", name: "Trabajo Independiente" },
      ]}
      pensum1={["Inducción Institucional","TICs","Ética y Humanización en Salud","Emprendimiento","Anatomía y Fisiología","Bioseguridad","Fundamentos de Enfermería","Inyectología y Venopunción","Signos Vitales y Valoración del Paciente","Primeros Auxilios Básicos"]}
      pensum2={["Cuidado del Paciente Hospitalizado","Administración de Medicamentos","Atención Prehospitalaria","Salud Mental y Cuidado del Adulto Mayor","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="El sector salud en Colombia tiene déficit de auxiliares de enfermería certificados. Las oportunidades laborales son inmediatas, con contratos en hospitales, clínicas, IPS, EPS y cuidado domiciliario."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesado%20en%20Enfermer%C3%ADa%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en el sector salud comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y en menos de un año estarás trabajando en el sector salud."
    />
  );
}
