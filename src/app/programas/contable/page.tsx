import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar Contable | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico Laboral en Auxiliar Contable en INDECAP. 1.000 horas. Aprende contabilidad real con software, NIIF y procesos empresariales del Valle de Aburrá.",
};

export default function ContablePage() {
  return (
    <ProgramPage
      titulo="Auxiliar Contable"
      subtitulo="Auxiliar"
      emWord="Contable"
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
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Las pymes de Antioquia necesitan auxiliares contables que sepan trabajar desde el primer día. Ese puedes ser tú."
      programaId="contable"
    />
  );
}
