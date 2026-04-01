import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Servicios Farmacéuticos | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Servicios Farmacéuticos en INDECAP. 1.650 horas. Trabaja en droguerías, farmacias hospitalarias y servicios farmacéuticos del Valle de Aburrá.",
};

export default function FarmaciaPage() {
  return (
    <ProgramPage
      titulo="Servicios Farmacéuticos"
      subtitulo="Servicios"
      emWord="Farmacéuticos"
      accent="#1A3A6B"
      escuela="Escuela de Salud"
<<<<<<< HEAD
      horas="1.650"
      semestres="3"
      sedesNum="3"
      fotoSrc="/images/programs/farmacia/farmacia-hero.jpg"
      fotoAlt="Estudiante de Servicios Farmacéuticos INDECAP"
      descripcion="En Antioquia hay más de 3.000 droguerías y farmacias, y todas necesitan personal capacitado para dispensar medicamentos de forma segura. Este programa te forma para trabajar desde el primer día en el sector farmacéutico con conocimiento real de la normativa colombiana vigente."
      capacidades={[
        "Dispensar medicamentos e insumos médicos siguiendo la normativa colombiana vigente (Decreto 780 de 2016)",
        "Asesorar al usuario sobre el uso adecuado de medicamentos de venta libre",
        "Recibir, almacenar y controlar inventarios garantizando la cadena de frío y condiciones de conservación",
        "Aplicar protocolos de bioseguridad en establecimientos farmacéuticos",
        "Identificar y reportar reacciones adversas a medicamentos (farmacovigilancia básica)",
        "Manejar software de gestión farmacéutica y los registros exigidos por la ley",
=======
      horas="1.650" // Unificado con tu catálogo base
      semestres="3"
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
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      ]}
      salidas={[
        { icon: "💊", name: "Droguerías y Farmacias", desc: "Dispensación y atención al usuario en establecimientos del Valle de Aburrá" },
        { icon: "🏥", name: "Farmacias Hospitalarias", desc: "Servicio farmacéutico en clínicas e IPS" },
        { icon: "🏢", name: "EPS y Centros de Salud", desc: "Servicios de dispensación en programas de salud colectiva" },
        { icon: "📦", name: "Distribuidoras de Medicamentos", desc: "Control de inventarios y logística de medicamentos" },
        { icon: "🧪", name: "Laboratorios Farmacéuticos", desc: "Funciones de apoyo en producción y control de calidad" },
      ]}
<<<<<<< HEAD
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y marco legal del ejercicio farmacéutico en Colombia",
        "Herramientas digitales aplicadas al sector farmacéutico",
        "Atención y comunicación con el usuario en servicios de salud",
        "Bioseguridad aplicada al entorno farmacéutico",
        "Fundamentos de farmacología: formas farmacéuticas, vías de administración, clasificación de medicamentos",
        "Manejo de emergencias y primeros auxilios",
      ]}
      pensum2={[
        "Dispensación de medicamentos y dispositivos médicos según normativa",
        "Recepción, almacenamiento y control de inventarios",
        "Práctica formativa en droguerías o farmacias hospitalarias",
      ]}
      pensum3={[
        "Práctica profesional en droguerías, farmacias hospitalarias o servicios farmacéuticos en entorno laboral real",
      ]}
      mercadoTexto="Las droguerías y farmacias del Valle de Aburrá buscan personal que sepa trabajar desde el primer día. No que sepa repetir teoría, sino que sepa dispensar, asesorar y manejar inventarios con responsabilidad. Eso es exactamente lo que formamos."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Servicios Farmacéuticos. Mi nombre es "
=======
     
      pensum1={[
        "Morfofisiología y Anatomía Humana Básica",
        "Protocolos de Bioseguridad en Servicios de Salud",
        "Fundamentos de Farmacología General",
        "Recepción y Almacenamiento Técnico de Medicamentos",
        "Sistemas de Información y Herramientas Digitales (TICs)",
        "Ética, Bioética y Normatividad Farmacéutica",
      ]}
     
      pensum2={[
        "Técnicas de Dispensación de Medicamentos y Dispositivos Médicos",
        "Farmacovigilancia y Reporte de Eventos Adversos",
        "Gestión de Inventarios y Cadena de Abastecimiento",
        "Atención y Orientación al Usuario en Servicios de Salud",
        "Emprendimiento y Administración de Establecimientos Farmacéuticos",
      ]}
     
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
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
<<<<<<< HEAD
      ctaDesc="El sector farmacéutico en Antioquia necesita personas formadas. Los cupos son limitados — asegura el tuyo hoy."
      programaId="farmacia"
=======
      ctaTitulo="Tu carrera en el sector farmacéutico comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser una pieza clave en las droguerías, clínicas y laboratorios de Antioquia."
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
    />
  );
}