import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar Contable y Financiero | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar Contable en INDECAP. Domina la contabilidad digital, impuestos, nómina electrónica y software financiero con práctica real.",
};

export default function ContablePage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar Contable"
      subtitulo="Auxiliar"
      emWord="Contable"
      accent="#2A6B3A" 
      accentDark="#1A4A28"
      escuela="Escuela de Administración" 
      horas="1.000" 
      semestres="2" 
      sedesNum="3"
      fotoSrc="/images/programs/contable.jpg"
      fotoAlt="Estudiante de Contabilidad INDECAP analizando estados financieros digitales"
      descripcion="Conviértete en la mano derecha financiera de las empresas. Domina los registros contables, la liquidación de impuestos, la nómina electrónica y el manejo de software especializado para tomar decisiones basadas en datos reales."
      capacidades={[
        "Gestionar registros contables y financieros bajo normas NIIF",
        "Liquidar impuestos nacionales y territoriales (IVA, Retención, ICA)",
        "Manejar software contable líder en el mercado (Siigo, World Office, etc.)",
        "Procesar nómina electrónica y seguridad social integral",
        "Elaborar estados financieros y conciliaciones bancarias precisas",
        "Apoyar procesos de auditoría, costos y presupuestos empresariales",
      ]}
      salidas={[
        { icon: "🏢", name: "Departamentos Financieros" },
        { icon: "💼", name: "Firmas de Contadores y Auditoría" },
        { icon: "🏦", name: "Bancos y Entidades Financieras" },
        { icon: "📊", name: "Analista de Costos y Presupuestos" },
        { icon: "🏥", name: "Sector Salud y Administrativo" },
        { icon: "🚀", name: "Asesoría Contable Independiente" },
      ]}
     
      pensum1={[
        "Principios de Contabilidad y Normas NIIF",
        "Registros Contables y Documentación Mercantil",
        "Legislación Tributaria: IVA y Retenciones",
        "Matemática Financiera y Excel Aplicado a los Negocios",
        "Comunicación Empresarial y Ética Profesional",
        "Herramientas Digitales para la Gestión Financiera",
      ]}
     
      pensum2={[
        "Manejo Integral de Software Contable y ERP",
        "Nómina Electrónica y Prestaciones Sociales",
        "Análisis de Estados Financieros, Costos y Presupuestos",
        "Auditoría Básica y Control Interno",
        "Emprendimiento y Planificación Financiera",
        "Práctica Formativa en Entornos Contables Reales",
      ]}
      mercadoTexto="Ninguna empresa puede crecer sin un buen control de su dinero. En Colombia, la implementación de la facturación y nómina electrónica ha disparado la necesidad de auxiliares contables actualizados que dominen la tecnología. Es una de las profesiones con mayor estabilidad y proyección laboral."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el programa de Auxiliar Contable. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Domina los números que mueven el mundo"
      ctaDesc="Las empresas buscan expertos en finanzas, no solo digitadores. Inscríbete ahora y prepárate para ser el profesional que garantiza el éxito financiero."
    />
  );
}