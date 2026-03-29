import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Administrativo en Salud | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral Administrativo en Salud en INDECAP. 1.000 horas. Trabaja en la gestión administrativa de clínicas, hospitales, EPS e IPS del Valle de Aburrá.",
};

export default function AdministrativoSaludPage() {
  return (
    <ProgramPage
      titulo="Administrativo en Salud"
      subtitulo="Administrativo en"
      emWord="Salud"
      accent="#312783"
      escuela="Escuela de Salud"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/administrativo-salud/administrativo-retrato.jpg"
      fotoAlt="Estudiante Administrativo en Salud INDECAP"
      descripcion="El sector salud en Colombia no es solo médicos y enfermeras. Detrás de cada clínica, hospital y EPS hay un equipo administrativo que hace que todo funcione. Este programa te forma para ser parte esencial de ese equipo — con conocimiento del sector salud y habilidades administrativas reales."
      capacidades={[
        "Gestionar documentación clínica y administrativa en instituciones de salud",
        "Atender y orientar usuarios en servicios de salud con calidez y efectividad",
        "Manejar procesos de facturación médica y glosas en el sistema de salud colombiano",
        "Operar sistemas de información en salud (HIS) utilizados en clínicas y hospitales",
        "Coordinar agendas médicas, citas y trámites de autorización",
        "Apoyar procesos de calidad y gestión documental en instituciones de salud",
      ]}
      salidas={[
        { icon: "🏥", name: "Clínicas y Hospitales", desc: "Admisiones, facturación, recepción y gestión documental" },
        { icon: "🏢", name: "EPS e IPS", desc: "Gestión administrativa de servicios de salud" },
        { icon: "📋", name: "Consultorios Médicos", desc: "Coordinación de agendas y atención al paciente" },
        { icon: "🧾", name: "Facturación Médica", desc: "Glosas, autorizaciones y procesos de cobro" },
        { icon: "💊", name: "Droguerías y Farmacias", desc: "Apoyo administrativo en establecimientos farmacéuticos" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad en el manejo de información de salud",
        "Herramientas digitales y sistemas de información en salud",
        "Atención humanizada al usuario en servicios de salud",
        "Gestión documental en instituciones de salud",
        "Procesos administrativos del sistema de salud colombiano",
        "Facturación médica, autorizaciones y glosas",
      ]}
      pensum2={[
        "Práctica profesional en clínicas, hospitales, EPS o IPS gestionando procesos administrativos reales",
      ]}
      mercadoTexto="El sistema de salud colombiano es uno de los sectores que más empleo genera en Antioquia. Los profesionales que conocen tanto el componente humano como el administrativo son los más valorados — y eso es exactamente lo que formamos."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Administrativo en Salud. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El sector salud necesita personas que sepan gestionar. Fórmate en 18 meses para uno de los mercados laborales más estables de Colombia."
      programaId="administrativo-salud"
    />
  );
}