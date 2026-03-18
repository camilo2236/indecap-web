import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Auxiliar en Sistemas | INDECAP", description: "Técnico Auxiliar en Sistemas en INDECAP. Medellín, Envigado, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Auxiliar en Sistemas"
      subtitulo="Auxiliar en"
      emWord="Sistemas"
      accent="#312783" accentDark="#1a1650"
      escuela="Escuela de Sistemas" horas="700" semestres="1" sedesNum="3"
      fotoSrc="/images/programs/sistemas/sala-medellin-clase.jpg" fotoAlt="Auxiliar en Sistemas INDECAP"
      descripcion="Domina las tecnologías que mueven el mundo digital. Soporte técnico, mantenimiento de equipos, redes básicas y herramientas de productividad digital para el mercado laboral actual."
      capacidades={["Instalar, configurar y dar mantenimiento a equipos de cómputo","Brindar soporte técnico de primer nivel a usuarios","Administrar redes locales básicas y conectividad a internet","Manejar herramientas de ofimática avanzada: Excel, Word, PowerPoint","Configurar sistemas operativos Windows y software empresarial","Apoyar en la gestión de bases de datos básicas"]}
      salidas={[{icon:"💻",name:"Soporte Técnico"},{icon:"🏢",name:"Empresas de Tecnología"},{icon:"🏛️",name:"Entidades Públicas"},{icon:"🏥",name:"Sector Salud"},{icon:"🔧",name:"Mantenimiento de Equipos"},{icon:"🚀",name:"Trabajo Independiente"}]}
      pensum1={["Inducción Institucional","TICs","Ética Digital","Emprendimiento","Hardware y Mantenimiento","Sistemas Operativos","Redes Básicas","Ofimática Avanzada","Internet y Seguridad","Soporte Técnico"]}
      pensum2={["Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="La transformación digital de las empresas colombianas crea una demanda constante de técnicos en sistemas. Desde pequeños negocios hasta grandes corporaciones necesitan soporte técnico permanente."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Sistemas%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="La tecnología es el futuro — y el futuro es ahora"
      ctaDesc="Cupos limitados. Inscríbete hoy y en menos de un año estarás trabajando en tecnología."
    />
  );
}
