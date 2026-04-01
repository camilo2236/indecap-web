// ─────────────────────────────────────────────────────────
// COSMETOLOGÍA — src/app/programas/cosmetologia/page.tsx
// ─────────────────────────────────────────────────────────
import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Cosmetología y Estética Integral | INDECAP – Medellín, Envigado",
  description: "Técnico en Cosmetología y Estética Integral en INDECAP. 1.190 horas de formación práctica. Tratamientos faciales, corporales, maquillaje y SPA. Medellín y Envigado.",
};

export default function CosmetologiaPage() {
  return (
    <ProgramPage
      titulo="Cosmetología y Estética Integral"
      subtitulo="Cosmetología y"
      emWord="Estética Integral"
      accent="#C0394B"
      escuela="Escuela de Belleza"
      horas="1.190"
      semestres="2"
      sedesNum="2"
      fotoSrc="/images/programs/cosmetologia/cosmetologia-hero.jpg"
<<<<<<< HEAD
      fotoAlt="Estudiante de Cosmetología INDECAP"
      descripcion="La estética en Medellín es un sector que no para de crecer. Aprendes técnicas que puedes cobrar desde que las dominas — en un spa, en un centro estético, o con tus propios clientes. Nuestras egresadas y egresados salen con horas reales de práctica en clientes y con la capacidad de trabajar o emprender con los estándares que exige el mercado."
=======
      fotoAlt="Estudiante de Cosmetología INDECAP aplicando tratamiento facial"
      descripcion="Transforma tu pasión por la belleza en una carrera profesional sólida. Aprende tratamientos faciales, corporales, maquillaje, SPA y más — con aparatología real y práctica desde el primer día."
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      capacidades={[
        "Realizar tratamientos faciales profesionales: hidratación, limpieza profunda, manejo de acné y manchas",
        "Ejecutar técnicas de depilación con cera, hilo y métodos definitivos básicos",
        "Aplicar maquillaje social y artístico con técnicas de contorno, corrección y acabado profesional",
        "Realizar cosmetología corporal: tratamientos reductores, reafirmantes y modelantes",
        "Aplicar protocolos pre y post quirúrgicos en cirugía estética",
        "Brindar servicios de SPA: aromaterapia, exfoliación corporal, envolturas e hidroterapia",
      ]}
      salidas={[
        { icon: "💅", name: "Centros de Estética", desc: "Cosmetóloga profesional en spas y centros de belleza del Valle de Aburrá" },
        { icon: "💄", name: "Maquilladora Profesional", desc: "Eventos sociales, novia, artístico y fotografía" },
        { icon: "🧴", name: "Tratamientos Especializados", desc: "Facial, corporal y pre-post quirúrgico en clínicas de estética" },
        { icon: "🧖", name: "Servicios de SPA", desc: "Spas boutique, hoteles y centros de bienestar" },
        { icon: "🏠", name: "Trabajo Independiente", desc: "Atención a clientes propios desde el inicio" },
      ]}
<<<<<<< HEAD
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento en servicios de belleza",
        "Bioseguridad y protocolos de higiene en estética",
        "Cosmetología facial: limpieza, hidratación, tratamientos específicos",
        "Técnicas de depilación profesional",
        "Maquillaje social y artístico",
        "Cosmetología corporal: tratamientos reductores, reafirmantes y modelantes",
        "Protocolos pre y post quirúrgicos en cirugía estética",
      ]}
      pensum2={[
        "Técnicas de SPA: aromaterapia, exfoliación corporal, envolturas, hidroterapia",
        "Práctica profesional en centros de estética, spa o salones atendiendo clientes reales",
      ]}
      mercadoTexto="La estética en Medellín es un sector que no para de crecer. Nuestras egresadas y egresados salen con formación técnica real, con horas de práctica en clientes, y con la capacidad de trabajar en un spa o montar su propio negocio con los estándares que exige el mercado."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Cosmetología. Mi nombre es "
=======
      pensum1={["Inducción Institucional","Técnicas de Estudio","TICs","Ética y Valores Profesionales","Emprendimiento","Bioseguridad","Tratamientos Faciales","Depilación del Vello","Maquillaje Social","Tratamientos Corporales","Tratamientos Pre y Post Quirúrgicos"]}
      pensum2={["Servicios de SPA","Práctica Formativa","Fortalecimiento de Competencias","Aplicación en Entornos Reales del Sector"]}
      mercadoTexto="Colombia es uno de los países con mayor consumo de servicios de belleza en Latinoamérica. Las profesionales certificadas tienen alta demanda y la posibilidad real de emprender desde el primer año."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesada en Cosmetología. Mi nombre es "
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El sector de la belleza y el bienestar en Antioquia crece cada año. Fórmate con quienes llevan 40 años formando estilistas que trabajan."
      programaId="cosmetologia"
    />
  );
}