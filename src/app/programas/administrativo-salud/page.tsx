import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Administrativo en Salud | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Técnico Laboral Administrativo en Salud en INDECAP. 1.650 horas dominando facturación médica, SGSSS y auditoría de cuentas.",
};

export default function AdministrativoSaludPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Administrativo en Salud"
      subtitulo="Administrativo"
      emWord="en Salud"
      accent="#2A5C8A" 
      accentDark="#1A3A5C"
      escuela="Escuela de Salud" 
      horas="1.650" 
      semestres="3" // 🔥 Corregido a 3 semestres según tu lineamiento
      sedesNum="3"
      fotoSrc="/images/programs/administrativo-salud/administrativo-hero.jpg" // 🔥 Ruta lista para tu nueva foto con IA
      fotoAlt="Estudiante Administrativo en Salud INDECAP gestionando facturación"
      descripcion="Conviértete en el motor de clínicas, hospitales y EPS. Domina la facturación médica, auditoría de cuentas, manejo de historias clínicas y toda la normatividad del sistema de salud colombiano para garantizar operaciones eficientes."
      capacidades={[
        "Gestionar estratégicamente procesos de admisión, traslado y egreso de pacientes",
        "Liquidar y facturar servicios de salud dominando manuales tarifarios (SOAT, ISS)",
        "Administrar, custodiar y auditar historias clínicas bajo normatividad legal",
        "Manejar plataformas y software especializado de facturación hospitalaria",
        "Responder glosas, devoluciones y conciliar cuentas médicas con EPS e IPS",
        "Brindar atención integral y orientar a los usuarios dentro del SGSSS",
      ]}
      salidas={[
        { icon: "🏥", name: "Hospitales y Clínicas Privadas" },
        { icon: "🏢", name: "EPS e IPS" },
        { icon: "💳", name: "Áreas de Cuentas Médicas" },
        { icon: "📋", name: "Auditoría y Gestión Documental" },
        { icon: "🚑", name: "Centros de Atención Prehospitalaria" },
        { icon: "🦷", name: "Consultorios Especializados" }
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Sistema de Salud
      pensum1={[
        "Inducción y Perfil Ocupacional en el Sector Salud",
        "Normatividad y Estructura del SGSSS en Colombia",
        "Bioética y Humanización en la Prestación de Servicios",
        "Atención Integral y Experiencia del Usuario (PQRS)",
        "Sistemas de Información y Herramientas Digitales en Salud",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Gestión Clínica y Documental
      pensum2={[
        "Gestión Estratégica de Admisiones, Egresos y Referencia",
        "Manejo Técnico de Historias Clínicas y Gestión Documental",
        "Fundamentos de Facturación y Manuales Tarifarios (SOAT, ISS)",
        "Procesos de Auditoría Básica y Calidad en Salud",
        "Manejo de Software Especializado para Clínicas y EPS",
      ]}
      // 🔥 Pensum Premium - Semestre 3: Finanzas en Salud y Práctica
      pensum3={[
        "Manejo Avanzado de Cuentas Médicas, Glosas y Devoluciones",
        "Emprendimiento y Gestión Administrativa de Consultorios",
        "Práctica Formativa en Entornos Administrativos de Salud",
        "Fortalecimiento de Competencias Laborales",
      ]}
      mercadoTexto="El sector salud colombiano es uno de los mayores empleadores del país. Las clínicas y EPS pierden millones por mala facturación y glosas, por lo que un Administrativo en Salud bien capacitado es un perfil indispensable y altamente valorado."
      waNum="573022389760" // 🔥 Limpio para la API
      waText="Hola INDECAP, estoy interesado en el programa Administrativo en Salud. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" }
      ]}
      ctaTitulo="El control y la eficiencia del sector salud están en tus manos"
      ctaDesc="Los cupos son limitados. Inscríbete hoy y prepárate para ser el profesional que toda clínica y hospital necesita para funcionar correctamente."
    />
  );
}