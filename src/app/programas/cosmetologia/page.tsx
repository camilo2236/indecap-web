import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Cosmetología y Estética Integral | INDECAP – Medellín, Envigado",
  description: "Certifícate como Técnico en Cosmetología y Estética Integral en INDECAP. 1.190 horas de formación práctica real.",
};

export default function CosmetologiaPage() {
  return (
    <ProgramPage
      titulo="Técnico en Cosmetología y Estética"
      subtitulo="Cosmetología"
      emWord="Estética Integral"
      accent="#C0394B"
      accentDark="#880E2F"
      escuela="Escuela de Belleza"
      horas="1.190"
      semestres="2"
      sedesNum="2"
      fotoSrc="/images/programs/cosmetologia/cosmetologia-hero.jpg"
      fotoAlt="Estudiante de Cosmetología INDECAP aplicando tratamiento facial"
      descripcion="Transforma tu pasión por la belleza en una carrera profesional sólida. Aprende tratamientos faciales, corporales, maquillaje, SPA y más — con aparatología real y práctica desde el primer día."
      capacidades={[
        "Aplicar tratamientos faciales y corporales con técnica y bioseguridad",
        "Realizar maquillaje social y artístico profesional",
        "Ejecutar procedimientos de depilación con diferentes técnicas",
        "Asistir en procedimientos pre y post quirúrgicos estéticos",
        "Brindar servicios de SPA y bienestar integral",
        "Emprender tu propio negocio de belleza con bases sólidas",
      ]}
      salidas={[
        { icon: "💅", name: "Centros de Belleza" },
        { icon: "🧖", name: "Spas y Wellness" },
        { icon: "🏥", name: "Clínicas Estéticas" },
        { icon: "✈️", name: "Cruceros y Hoteles" },
        { icon: "💄", name: "Maquillaje Artístico" },
        { icon: "🚀", name: "Negocio Propio" },
      ]}
      pensum1={["Inducción Institucional","Técnicas de Estudio","TICs","Ética y Valores Profesionales","Emprendimiento","Bioseguridad","Tratamientos Faciales","Depilación del Vello","Maquillaje Social","Tratamientos Corporales","Tratamientos Pre y Post Quirúrgicos"]}
      pensum2={["Servicios de SPA","Práctica Formativa","Fortalecimiento de Competencias","Aplicación en Entornos Reales del Sector"]}
      mercadoTexto="Colombia es uno de los países con mayor consumo de servicios de belleza en Latinoamérica. Las profesionales certificadas tienen alta demanda y la posibilidad real de emprender desde el primer año."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesada%20en%20Cosmetolog%C3%ADa%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en el mundo de la belleza comienza en INDECAP"
      ctaDesc="Los cupos son limitados por grupo. Asegura tu lugar hoy y en menos de un año estarás ejerciendo tu profesión."
    />
  );
}
