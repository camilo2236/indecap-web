import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Administrativo en Salud | INDECAP", description: "Técnico Laboral Administrativo en Salud en INDECAP. 1.650 horas. Medellín, Envigado, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Administrativo en Salud"
      subtitulo="Administrativo"
      emWord="en Salud"
      accent="#2A5C8A" accentDark="#1A3A5C"
      escuela="Escuela de Salud" horas="1.650" semestres="2" sedesNum="3"
      fotoSrc="/images/programs/enfermeria.png" fotoAlt="Administrativo en Salud INDECAP"
      descripcion="Gestiona eficientemente los procesos administrativos del sector salud. Aprende facturación médica, atención al usuario, manejo de historias clínicas y normatividad del sistema de salud colombiano."
      capacidades={["Gestionar procesos de admisión, egreso y referencia de pacientes","Realizar facturación de servicios de salud y manejo de cuentas médicas","Atender y orientar a usuarios en entornos hospitalarios y clínicos","Manejar sistemas de información en salud y software especializado","Aplicar la normatividad del SGSSS en procesos administrativos","Apoyar la gestión documental y archivo de historias clínicas"]}
      salidas={[{icon:"🏥",name:"Hospitales y Clínicas"},{icon:"🏢",name:"EPS e IPS"},{icon:"💊",name:"Droguerías y Farmacias"},{icon:"📋",name:"Gestión Documental"},{icon:"💳",name:"Facturación en Salud"},{icon:"🚀",name:"Trabajo Independiente"}]}
      pensum1={["Inducción Institucional","TICs","Ética y Humanización","Emprendimiento","Fundamentos del Sistema de Salud","Atención al Usuario","Admisión y Egreso de Pacientes","Facturación en Salud","Gestión Documental","Normatividad SGSSS"]}
      pensum2={["Software en Salud","Auditoría Médica Básica","Glosas y Reclamaciones","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="El sector salud colombiano necesita personal administrativo capacitado en todos sus niveles. Con más de 60.000 IPS registradas en el país, las oportunidades laborales son constantes y crecientes."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Administrativo%20en%20Salud%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Tu carrera en el sector salud comienza en INDECAP"
      ctaDesc="Cupos limitados por grupo. Inscríbete hoy y en menos de un año estarás trabajando en el sector salud."
    />
  );
}
