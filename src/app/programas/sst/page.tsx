import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Seguridad y Salud en el Trabajo | INDECAP", description: "Técnico en SST en INDECAP. 1.000 horas. Medellín, Envigado." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Seguridad y Salud en el Trabajo"
      subtitulo="Seguridad y"
      emWord="Salud en el Trabajo"
      accent="#8A6A1A" accentDark="#5C4510"
      escuela="Escuela de Seguridad" horas="1.000" semestres="2" sedesNum="2"
      fotoSrc="/images/programs/enfermeria.png" fotoAlt="SST INDECAP"
      descripcion="Protege la vida y la salud de los trabajadores. Aprende a identificar riesgos, prevenir accidentes y gestionar el Sistema de Gestión de SST en empresas de todos los sectores."
      capacidades={["Identificar peligros y evaluar riesgos en ambientes laborales","Diseñar e implementar programas de prevención de accidentes","Gestionar el COPASST y los comités paritarios de seguridad","Investigar accidentes de trabajo e incidentes laborales","Aplicar la normatividad colombiana en SST: Decreto 1072 y resoluciones","Realizar inspecciones de seguridad y auditorías internas de SST"]}
      salidas={[{icon:"🏭",name:"Industria y Manufactura"},{icon:"🏗️",name:"Construcción"},{icon:"🏢",name:"Empresas de Servicios"},{icon:"🏥",name:"Sector Salud"},{icon:"🏛️",name:"Entidades Públicas"},{icon:"🚀",name:"Consultoría en SST"}]}
      pensum1={["Inducción Institucional","TICs","Ética Profesional","Emprendimiento","Fundamentos de SST","Identificación de Peligros","Normatividad SST Colombia","COPASST y Comités","Elementos de Protección Personal","Primeros Auxilios Empresariales"]}
      pensum2={["Investigación de Accidentes","Higiene Industrial","Planes de Emergencia","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="En Colombia es obligatorio tener un Sistema de Gestión de SST implementado. Todas las empresas con empleados deben cumplir esta normatividad, generando una demanda permanente de técnicos certificados en SST."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20SST%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Protege vidas y construye empresas más seguras"
      ctaDesc="Cupos limitados. Inscríbete hoy y en menos de un año estarás certificado en una de las carreras más demandadas."
    />
  );
}
