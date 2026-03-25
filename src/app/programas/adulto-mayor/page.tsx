import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Atención al Adulto Mayor | INDECAP", description: "Técnico en Atención Integral al Adulto Mayor en INDECAP. 700 horas. Envigado." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Atención Integral al Adulto Mayor"
      subtitulo="Atención Integral al"
      emWord="Adulto Mayor"
      accent="#5C3A8A" accentDark="#3D2460"
      escuela="Escuela de Salud" horas="700" semestres="1" sedesNum="1"
      fotoSrc="/images/programs/enfermeria/enfermeria-practica.jpg" fotoAlt="Atención al Adulto Mayor INDECAP"
      descripcion="Una carrera con vocación y propósito. Aprende a brindar atención integral, acompañamiento terapéutico y cuidado gerontológico a personas de la tercera edad con dignidad y calidad."
      capacidades={["Brindar cuidado integral y acompañamiento a personas mayores","Aplicar técnicas de estimulación cognitiva y activación física","Identificar y reportar cambios en el estado de salud del adulto mayor","Gestionar medicamentos y cuidados básicos de enfermería","Trabajar con familias en el cuidado domiciliario","Aplicar protocolos de atención en centros gerontológicos"]}
      salidas={[{icon:"🏠",name:"Cuidado Domiciliario"},{icon:"🏡",name:"Hogares Geriátricos"},{icon:"🏥",name:"Hospitales y Clínicas"},{icon:"👨‍👩‍👧",name:"Atención Familiar"},{icon:"🧠",name:"Centros de Estimulación"},{icon:"🚀",name:"Trabajo Independiente"}]}
      pensum1={["Inducción Institucional","TICs","Ética y Valores","Emprendimiento","Gerontología Básica","Cuidados de Enfermería","Estimulación Cognitiva","Actividad Física para Adulto Mayor","Nutrición Geriátrica","Farmacología Básica"]}
      pensum2={["Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="Colombia envejece rápidamente. Para 2050, el 25% de la población tendrá más de 60 años. Los cuidadores certificados son hoy uno de los perfiles más demandados y mejor remunerados del sector salud."
      waNum="573022389760" waText="Hola INDECAP, estoy interesado en Atención al Adulto Mayor. Mi nombre es "
      sedes={[{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Una carrera con propósito real"
      ctaDesc="Cupos muy limitados. Inscríbete hoy y en menos de un año estarás transformando vidas."
    />
  );
}
