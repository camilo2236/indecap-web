import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
<<<<<<< HEAD
  title: "Auxiliar Contable | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Auxiliar Contable en INDECAP. 1.000 horas. Aprende contabilidad real con software, NIIF y procesos empresariales del Valle de Aburrá.",
=======
  title: "Auxiliar Contable y Financiero | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar Contable en INDECAP. Domina la contabilidad digital, impuestos, nómina electrónica y software financiero con práctica real.",
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
};

export default function ContablePage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar Contable"
      subtitulo="Auxiliar"
      emWord="Contable"
<<<<<<< HEAD
      accent="#1a086e"
      escuela="Escuela Administrativa"
      horas="1.000"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/contable/contable-hero.jpg"
      fotoAlt="Estudiante de Contabilidad INDECAP"
      descripcion="El auxiliar contable es uno de los perfiles más demandados en las pymes del Valle de Aburrá — que son la mayoría del tejido empresarial de Antioquia. Toda empresa que facture necesita a alguien que maneje sus cuentas. Puedes ser tú en 18 meses."
      capacidades={[
        "Registrar operaciones contables en libros y software según las NIIF",
        "Elaborar y organizar soportes contables: facturas, recibos de caja, comprobantes de egreso",
        "Realizar conciliaciones bancarias y control de caja menor",
        "Liquidar nómina básica, seguridad social y parafiscales",
        "Gestionar cuentas por cobrar y cuentas por pagar",
        "Apoyar la preparación de declaraciones tributarias básicas (IVA, retención, ICA)",
        "Manejar software contable (Siigo, World Office u otros usados en la región)",
      ]}
      salidas={[
        { icon: "📊", name: "Pymes del Valle de Aburrá", desc: "Empresas de todos los sectores que necesitan auxiliares contables" },
        { icon: "🏢", name: "Firmas de Asesoría Contable", desc: "Oficinas contables y consultoría tributaria" },
        { icon: "🛒", name: "Comercio y Retail", desc: "Almacenes, supermercados y cadenas comerciales" },
        { icon: "🏗️", name: "Construcción y Servicios", desc: "Empresas de manufactura, servicios y construcción" },
        { icon: "🤝", name: "Cooperativas y Fundaciones", desc: "Entidades sin ánimo de lucro y organizaciones sociales" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento y gestión empresarial",
        "Herramientas digitales y software contable",
        "Ética y responsabilidad en el manejo de información financiera",
        "Procesos administrativos y documentación empresarial",
        "Fundamentos de contabilidad: partida doble, plan de cuentas, ciclo contable",
        "Contabilidad aplicada: registros, soportes, estados financieros básicos",
        "Gestión de clientes, proveedores, cartera y tesorería",
      ]}
      pensum2={[
        "Práctica profesional en empresas del Valle de Aburrá manejando contabilidad real bajo supervisión",
      ]}
      mercadoTexto="No te vamos a enseñar contabilidad en el tablero para que luego no sepas usar un software. Aquí aprendes con las herramientas y los procesos que las empresas de Antioquia usan de verdad. Cuando llegas a tu práctica, ya sabes registrar, conciliar y liquidar."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Auxiliar Contable. Mi nombre es "
=======
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
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
<<<<<<< HEAD
      ctaDesc="Las pymes de Antioquia necesitan auxiliares contables que sepan trabajar desde el primer día. Ese puedes ser tú."
      programaId="contable"
=======
      ctaTitulo="Domina los números que mueven el mundo"
      ctaDesc="Las empresas buscan expertos en finanzas, no solo digitadores. Inscríbete ahora y prepárate para ser el profesional que garantiza el éxito financiero."
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
    />
  );
}