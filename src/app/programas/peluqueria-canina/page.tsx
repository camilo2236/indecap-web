import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Peluquería y Estética Canina | INDECAP – Medellín, Caldas",
  description: "Técnico Laboral en Peluquería y Estética Canina en INDECAP. 1.000 horas. Fórmate como groomer profesional en uno de los sectores con mayor crecimiento en Colombia.",
};

export default function PeluqueriaCanina() {
  return (
    <ProgramPage
      titulo="Peluquería y Estética Canina"
      subtitulo="Peluquería y"
      emWord="Estética Canina"
      accent="#0F6E56"
      escuela="Escuela Veterinaria"
      horas="1.000"
      semestres="2"
      sedesNum="2"
      fotoSrc="/images/programs/peluqueria-canina/peluqueria-hero.jpg"
      fotoAlt="Groomer profesional INDECAP"
      descripcion="El sector de mascotas en Colombia no para de crecer. Medellín tiene cientos de peluquerías caninas, pet shops y clínicas veterinarias que necesitan groomers formados con criterio técnico. Puedes empezar a cobrar por tu trabajo desde que dominas las técnicas — en consultorios, en tiendas o con tus propios clientes."
      capacidades={[
        "Realizar baño y secado profesional según el tipo de pelaje del animal",
        "Ejecutar cortes estéticos según el estándar de cada raza canina y felina",
        "Manejar herramientas profesionales de grooming con seguridad y precisión",
        "Aplicar protocolos de bioseguridad e higiene en el entorno de trabajo",
        "Identificar condiciones de salud básicas en la piel y el pelaje de las mascotas",
        "Atender al propietario con asesoría sobre el cuidado del pelaje entre sesiones",
      ]}
      salidas={[
        { icon: "✂️", name: "Peluquerías Caninas", desc: "Pet shops y centros de estética animal en el Valle de Aburrá" },
        { icon: "🐶", name: "Clínicas Veterinarias", desc: "Servicio de grooming integrado en clínicas y consultorios" },
        { icon: "🏠", name: "Servicio a Domicilio", desc: "Atención en el hogar del propietario con herramientas propias" },
        { icon: "🚀", name: "Negocio Propio", desc: "Tu propio centro de estética canina o servicio móvil" },
        { icon: "🛒", name: "Tiendas de Mascotas", desc: "Servicio de grooming en pet shops y cadenas de mascotas" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Fundamentos del emprendimiento en servicios para mascotas",
        "Anatomía y razas caninas y felinas: características del pelaje",
        "Bioseguridad e higiene en el entorno de grooming",
        "Técnicas de baño y secado profesional según tipo de pelaje",
        "Corte y estilismo canino según estándar de raza",
        "Manejo seguro de herramientas profesionales",
        "Atención al cliente y comunicación con propietarios",
      ]}
      pensum2={[
        "Práctica profesional en peluquerías caninas, clínicas veterinarias o centros de bienestar animal con mascotas reales",
      ]}
      mercadoTexto="El mercado de mascotas en Colombia creció más del 15% en los últimos años. Nuestros egresados salen con técnica real, horas de práctica y la capacidad de emprender — porque en grooming, las manos lo son todo y aquí las manos se forman desde el primer día."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Peluquería Canina. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Uno de los sectores con mayor crecimiento en Colombia. Fórmate como groomer profesional y empieza a trabajar en 18 meses."
      programaId="peluqueria-canina"
    />
  );
}