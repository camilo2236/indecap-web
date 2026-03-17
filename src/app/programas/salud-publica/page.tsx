import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Auxiliar en Salud Pública | INDECAP", description: "Técnico Laboral en Salud Pública en INDECAP. 1.650 horas. Medellín, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Auxiliar en Salud Pública"
      subtitulo="Auxiliar en"
      emWord="Salud Pública"
      accent="#1A4F6E" accentDark="#0F3450"
      escuela="Escuela de Salud" horas="1.650" semestres="2" sedesNum="2"
      fotoSrc="/images/programs/enfermeria.png" fotoAlt="Salud Pública INDECAP"
      descripcion="Trabaja directamente con las comunidades en programas de promoción de la salud y prevención de enfermedades. Una carrera con alto impacto social y creciente demanda en el sector público y privado."
      capacidades={["Ejecutar programas de promoción y prevención en salud comunitaria","Realizar visitas domiciliarias y seguimiento a poblaciones vulnerables","Apoyar la vigilancia epidemiológica y reporte de eventos de salud pública","Participar en campañas de vacunación y jornadas de salud","Gestionar bases de datos de indicadores de salud poblacional","Trabajar articuladamente con alcaldías, ESE y secretarías de salud"]}
      salidas={[{icon:"🏛️",name:"Secretarías de Salud"},{icon:"🏥",name:"ESE Hospitales"},{icon:"🌍",name:"Programas Comunitarios"},{icon:"💉",name:"Campañas de Vacunación"},{icon:"📊",name:"Vigilancia Epidemiológica"},{icon:"🚀",name:"ONG y Fundaciones"}]}
      pensum1={["Inducción Institucional","TICs","Ética en Salud","Emprendimiento","Fundamentos de Salud Pública","Epidemiología Básica","Promoción y Prevención","Atención Primaria en Salud","Nutrición Comunitaria","Saneamiento Ambiental"]}
      pensum2={["Salud Mental Comunitaria","Vigilancia Epidemiológica","Estadísticas en Salud","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="Las alcaldías, gobernaciones y secretarías de salud de los 125 municipios de Antioquia demandan permanentemente auxiliares en salud pública para sus programas comunitarios."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20P%C3%BAblica%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Transforma tu comunidad desde adentro"
      ctaDesc="Cupos limitados por grupo. Inscríbete hoy y en menos de un año estarás haciendo la diferencia."
    />
  );
}
