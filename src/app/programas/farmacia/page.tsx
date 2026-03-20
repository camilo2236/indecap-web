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
      horas="1.650" // Unificado con tu catálogo base
      semestres="3" // 🔥 Actualizado a 3 semestres
      sedesNum="3"
      fotoSrc="/images/programs/farmacia/farmacia-hero.jpg"
      fotoAlt="Estudiantes de Farmacia INDECAP en práctica"
      descripcion="Conviértete en el profesional que garantiza el uso correcto y seguro de los medicamentos. Domina la dispensación, el almacenamiento y las buenas prácticas farmacéuticas con práctica real garantizada."
      capacidades={[
        "Dispensar medicamentos según prescripción médica con criterio y responsabilidad",
        "Almacenar y controlar inventarios de medicamentos bajo estrictas normas técnicas",
        "Orientar al paciente sobre el uso correcto, dosis y efectos de los medicamentos",
        "Aplicar buenas prácticas de manufactura y dispensación en farmacias e IPS",
        "Identificar interacciones medicamentosas y reportar reacciones adversas",
        "Gestionar facturación y procesos administrativos en establecimientos farmacéuticos",
      ]}
      salidas={[
        { icon: "💊", name: "Droguerías y Farmacias" },
        { icon: "🏥", name: "Hospitales e IPS" },
        { icon: "🏪", name: "Cadenas de Farmacia" },
        { icon: "📋", name: "Gestión de Inventarios" },
        { icon: "🔬", name: "Laboratorios Farmacéuticos" },
        { icon: "🚀", name: "Negocio Propio" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Recepción
      pensum1={[
        "Morfofisiología y Anatomía Humana Básica",
        "Protocolos de Bioseguridad en Servicios de Salud",
        "Fundamentos de Farmacología General",
        "Recepción y Almacenamiento Técnico de Medicamentos",
        "Sistemas de Información y Herramientas Digitales (TICs)",
        "Ética, Bioética y Normatividad Farmacéutica",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Dispensación y Control
      pensum2={[
        "Técnicas de Dispensación de Medicamentos y Dispositivos Médicos",
        "Farmacovigilancia y Reporte de Eventos Adversos",
        "Gestión de Inventarios y Cadena de Abastecimiento",
        "Atención y Orientación al Usuario en Servicios de Salud",
        "Emprendimiento y Administración de Establecimientos Farmacéuticos",
      ]}
      // 🔥 Pensum Premium - Semestre 3: Práctica y Especialización
      pensum3={[
        "Práctica Clínica y Comercial en Servicios Farmacéuticos",
        "Buenas Prácticas de Manufactura (BPM) Básicas",
        "Manejo de Medicamentos de Control Especial",
        "Facturación y Procesos Administrativos en Salud",
        "Fortalecimiento de Competencias Laborales",
      ]}
      mercadoTexto="Colombia cuenta con más de 50.000 farmacias y droguerías que requieren personal certificado por ley. Con la expansión del sistema de salud, la demanda de auxiliares farmacéuticos bien capacitados crece de manera constante."
      waNum="573022389760" // Formato limpio para la API de WhatsApp
      waText="Hola INDECAP, estoy interesado en el programa de Farmacia. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en el sector farmacéutico comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser una pieza clave en las droguerías, clínicas y laboratorios de Antioquia."
    />
  );
}