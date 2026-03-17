import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Entrenamiento Deportivo | INDECAP", description: "Técnico en Entrenamiento Deportivo en INDECAP. 1.000 horas. Medellín, Envigado." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Técnico en Entrenamiento Deportivo"
      subtitulo="Entrenamiento"
      emWord="Deportivo"
      accent="#1A6B2A" accentDark="#0F4A1C"
      escuela="Escuela de Deporte" horas="1.000" semestres="2" sedesNum="2"
      fotoSrc="/images/programs/enfermeria.png" fotoAlt="Entrenamiento Deportivo INDECAP"
      descripcion="Convierte tu pasión por el deporte en una carrera profesional. Aprende a diseñar entrenamientos, preparar físicamente a deportistas y gestionar grupos en gimnasios y centros deportivos."
      capacidades={["Planificar y periodizar entrenamientos para diferentes poblaciones","Evaluar capacidades físicas y diseñar programas personalizados","Aplicar principios de nutrición deportiva básica","Instruir técnicas correctas de ejercicio y prevenir lesiones","Gestionar grupos en gimnasios, clubes y centros deportivos","Trabajar con poblaciones especiales: adultos mayores, niños y rehabilitación"]}
      salidas={[{icon:"🏋️",name:"Gimnasios y Centros Fitness"},{icon:"⚽",name:"Clubes Deportivos"},{icon:"🏫",name:"Colegios e Instituciones"},{icon:"🏛️",name:"Cajas de Compensación"},{icon:"🏥",name:"Rehabilitación Física"},{icon:"🚀",name:"Entrenador Personal"}]}
      pensum1={["Inducción Institucional","TICs","Ética Deportiva","Emprendimiento","Anatomía y Fisiología del Ejercicio","Teoría del Entrenamiento","Evaluación Física","Planificación Deportiva","Nutrición Deportiva Básica","Primeros Auxilios Deportivos"]}
      pensum2={["Entrenamiento de Fuerza","Poblaciones Especiales","Gestión de Centros Deportivos","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="El mercado del fitness y el deporte en Colombia crece más del 15% anual. Gimnasios, clubes, cajas de compensación y colegios buscan permanentemente entrenadores certificados y comprometidos."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Entrenamiento%20Deportivo%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Haz del deporte tu profesión"
      ctaDesc="Cupos limitados. Inscríbete hoy y convierte tu pasión en una carrera con futuro."
    />
  );
}
