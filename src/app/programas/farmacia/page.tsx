import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Servicios Farmacéuticos | INDECAP",
  description: "Certifícate como Auxiliar en Servicios Farmacéuticos en INDECAP. Formación práctica en farmacias reales.",
};

export default function FarmaciaPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Servicios Farmacéuticos"
      subtitulo="Auxiliar en Servicios"
      emWord="Farmacéuticos"
      accent="#1A6B4A"
      accentDark="#0F4A32"
      escuela="Escuela de Salud"
      horas="1.540"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/farmaceuticos.png"
      fotoAlt="Estudiantes de Farmacia INDECAP en práctica"
      descripcion="Conviértete en el profesional que garantiza el uso correcto y seguro de los medicamentos. Aprende dispensación, almacenamiento y buenas prácticas farmacéuticas con práctica real."
      capacidades={[
        "Dispensar medicamentos según prescripción médica con criterio y responsabilidad",
        "Almacenar y controlar inventarios de medicamentos bajo normas técnicas",
        "Orientar al paciente sobre el uso correcto y los efectos de los medicamentos",
        "Aplicar buenas prácticas de manufactura y dispensación en farmacias",
        "Identificar interacciones medicamentosas y reportar reacciones adversas",
        "Gestionar facturación y procesos administrativos en droguerías e IPS",
      ]}
      salidas={[
        { icon: "💊", name: "Droguerías y Farmacias" },
        { icon: "🏥", name: "Hospitales e IPS" },
        { icon: "🏪", name: "Cadenas de Farmacia" },
        { icon: "📋", name: "Gestión de Inventarios" },
        { icon: "🔬", name: "Laboratorios Farmacéuticos" },
        { icon: "🚀", name: "Negocio Propio" },
      ]}
      pensum1={["Inducción Institucional","TICs","Ética en Salud","Emprendimiento","Biología y Anatomía Básica","Bioseguridad","Farmacología Básica","Dispensación de Medicamentos","Gestión de Inventarios Farmacéuticos","Buenas Prácticas de Almacenamiento"]}
      pensum2={["Atención al Usuario en Farmacia","Buenas Prácticas de Dispensación","Farmacovigilancia","Gestión Administrativa en Salud","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="Colombia tiene más de 50.000 farmacias y droguerías que requieren personal certificado. Con la expansión del sistema de salud, la demanda de auxiliares farmacéuticos crece constantemente."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesado%20en%20Farmacia%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en el mundo farmacéutico comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y en menos de un año estarás trabajando en el sector salud."
    />
  );
}
