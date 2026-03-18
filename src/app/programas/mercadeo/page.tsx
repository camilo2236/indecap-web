import { ProgramPage } from "@/components/ProgramPage";
export const metadata = { title: "Auxiliar en Mercadeo | INDECAP", description: "Técnico en Mercadeo en INDECAP. Medellín, Envigado, Caldas." };
export default function Page() {
  return (
    <ProgramPage
      titulo="Auxiliar en Mercadeo"
      subtitulo="Auxiliar en"
      emWord="Mercadeo"
      accent="#8A2A6B" accentDark="#5C1A47"
      escuela="Escuela de Administración" horas="1.000" semestres="2" sedesNum="3"
      fotoSrc="/images/programs/mercadeo.jpg" fotoAlt="Auxiliar en Mercadeo INDECAP"
      descripcion="Aprende a conectar productos con personas. Estrategias de ventas, marketing digital, atención al cliente y gestión comercial para empresas de todos los sectores y emprendimientos."
      capacidades={["Diseñar y ejecutar estrategias básicas de marketing y ventas","Gestionar redes sociales y marketing digital para empresas","Analizar el mercado y la competencia con herramientas prácticas","Aplicar técnicas de atención y fidelización de clientes","Apoyar en la elaboración de planes comerciales y presupuestos de ventas","Crear contenido básico para medios digitales y material POP"]}
      salidas={[{icon:"🏢",name:"Empresas Comerciales"},{icon:"📱",name:"Marketing Digital"},{icon:"🛒",name:"Retail y Comercio"},{icon:"📣",name:"Agencias de Publicidad"},{icon:"💼",name:"Ventas Corporativas"},{icon:"🚀",name:"Emprendimiento Digital"}]}
      pensum1={["Inducción Institucional","TICs","Ética Empresarial","Emprendimiento","Fundamentos de Mercadeo","Comportamiento del Consumidor","Ventas y Negociación","Marketing Digital","Atención al Cliente","Comunicación Comercial"]}
      pensum2={["Investigación de Mercados","Estrategia Comercial","Gestión de Marca","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="En la era digital, todas las empresas necesitan profesionales que entiendan el mercado y sepan vender. El mercadeo es una de las carreras con mayor movilidad laboral y posibilidades de emprendimiento en Colombia."
      waNum="+573022389760" waText="Hola%20INDECAP%20estoy%20interesado%20en%20Mercadeo%2C%20mi%20nombre%20es%20"
      sedes={[{icon:"🏙️",name:"Sede Medellín",address:"Cl. 56 # 45-26, Medellín",tag:"Tel: (604) 448 4794"},{icon:"🏘️",name:"Sede Envigado",address:"Cl 37 Sur #43A-84, Envigado",tag:"Tel: (604) 448 4794"},{icon:"🌿",name:"Sede Caldas",address:"Calle 130 sur # 51-65, Caldas",tag:"Tel: (604) 448 4794"}]}
      ctaTitulo="El mercado te espera con oportunidades reales"
      ctaDesc="Cupos limitados. Inscríbete hoy y en menos de un año estarás creando estrategias que generan resultados."
    />
  );
}
