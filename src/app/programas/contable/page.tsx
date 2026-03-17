import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Auxiliar Contable | INDECAP", description: "Técnico Auxiliar Contable en INDECAP. 1.000 horas. Medellín, Envigado, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Auxiliar Contable"
      subtitulo="Auxiliar"
      emWord="Contable"
      accent="#2A6B3A" accentDark="#1A4A28"
      escuela="Escuela de Administración" horas="1.000" semestres="2" sedesNum="3"
      fotoSrc="/images/programs/enfermeria.png" fotoAlt="Auxiliar Contable INDECAP"
      descripcion="Domina los números que mueven las empresas. Aprende registros contables, declaraciones tributarias, manejo de software contable y gestión financiera con aplicación real desde el primer semestre."
      capacidades={["Realizar registros contables en libros diario, mayor y balances","Liquidar impuestos básicos: IVA, retenciones, ICA","Manejar software contable como Siigo, World Office o Contapyme","Elaborar estados financieros básicos y conciliaciones bancarias","Apoyar en auditorías internas y revisión de cuentas","Gestionar cartera, cuentas por pagar y por cobrar"]}
      salidas={[{icon:"🏢",name:"Empresas Privadas"},{icon:"🏛️",name:"Entidades Públicas"},{icon:"💼",name:"Firmas de Contabilidad"},{icon:"🏥",name:"Sector Salud"},{icon:"📊",name:"Análisis Financiero"},{icon:"🚀",name:"Negocio Propio"}]}
      pensum1={["Inducción Institucional","TICs","Ética Profesional","Emprendimiento","Fundamentos de Contabilidad","Registros Contables","Tributaria Básica","Software Contable","Nómina y Seguridad Social","Excel Financiero"]}
      pensum2={["Estados Financieros","Auditoría Básica","Costos y Presupuestos","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="El auxiliar contable es uno de los perfiles más demandados en Colombia. Toda empresa, sin importar el tamaño o el sector, necesita un profesional que lleve sus números con precisión."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20Contable%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="Los números son el lenguaje de los negocios"
      ctaDesc="Cupos limitados. Inscríbete hoy y en menos de un año estarás manejando la contabilidad de empresas reales."
    />
  );
}
