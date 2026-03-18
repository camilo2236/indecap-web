import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Asistente en Talento Humano | INDECAP", description: "Técnico en Talento Humano en INDECAP. 1.000 horas. Medellín, Envigado, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Asistente en Talento Humano"
      subtitulo="Asistente en"
      emWord="Talento Humano"
      accent="#6B4A1A" accentDark="#4A3210"
      escuela="Escuela de Administración" horas="1.000" semestres="2" sedesNum="3"
      fotoSrc="/images/programs/talento-humano.jpg" fotoAlt="Talento Humano INDECAP"
      descripcion="Gestiona el activo más valioso de cualquier empresa: su gente. Aprende selección de personal, nómina, bienestar laboral y desarrollo organizacional con enfoque práctico y actual."
      capacidades={["Apoyar procesos de selección, contratación e inducción de personal","Liquidar nómina, prestaciones sociales y seguridad social","Gestionar procesos de bienestar, capacitación y clima organizacional","Mantener actualizadas las hojas de vida y carpetas de empleados","Aplicar la normatividad laboral colombiana vigente","Usar software de gestión de recursos humanos"]}
      salidas={[{icon:"🏢",name:"Empresas de todos los sectores"},{icon:"🏥",name:"Sector Salud"},{icon:"🏛️",name:"Entidades Públicas"},{icon:"📋",name:"Temporales de Personal"},{icon:"💼",name:"Consultoría de RRHH"},{icon:"🚀",name:"Emprendimiento"}]}
      pensum1={["Inducción Institucional","TICs","Ética Empresarial","Emprendimiento","Legislación Laboral","Selección y Contratación","Nómina y Seguridad Social","Bienestar Organizacional","Comunicación Empresarial","Excel Aplicado a RRHH"]}
      pensum2={["Desarrollo Organizacional","Gestión del Desempeño","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="Toda empresa con más de 5 empleados necesita un asistente de talento humano. Es uno de los perfiles más transversales del mercado laboral colombiano con alta demanda en todos los sectores."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Talento%20Humano%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Gestiona el talento que mueve las empresas"
      ctaDesc="Cupos limitados. Inscríbete hoy y en menos de un año estarás listo para el mercado laboral."
    />
  );
}
