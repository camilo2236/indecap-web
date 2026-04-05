import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Veterinaria | INDECAP – Medellín, Envigado, Caldas",
  description: "Técnico en Auxiliar en Veterinaria en INDECAP. Trabaja en clínicas veterinarias, peluquerías caninas y centros de bienestar animal del Valle de Aburrá.",
};

export default function VeterinariaPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar en Veterinaria"
      subtitulo="Auxiliar en"
      emWord="Veterinaria"
      accent="#7B1F1F"
      escuela="Escuela Veterinaria"
      horas="1.200"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/veterinaria/veterinaria-hero.jpg"
      fotoAlt="Estudiante de Veterinaria INDECAP"
      descripcion="En Medellín hay más de 500 clínicas y consultorios veterinarios. El sector de mascotas en Colombia creció más del 15% en los últimos años. Amar a los animales es el primer paso — el segundo es saber cuidarlos con criterio técnico, y eso es exactamente lo que aprendes aquí."
      capacidades={[
        "Asistir al médico veterinario en consulta, procedimientos y cirugías básicas",
        "Recibir, valorar y registrar el ingreso de animales en la clínica",
        "Aplicar protocolos de bioseguridad y manejo seguro de animales",
        "Administrar medicamentos por las vías indicadas según prescripción veterinaria",
        "Realizar acicalamiento canino y felino profesional (baño, corte, limpieza de oídos, uñas)",
        "Asesorar a propietarios sobre nutrición, cuidados básicos y prevención de enfermedades",
      ]}
      salidas={[
        { icon: "🐶", name: "Clínicas Veterinarias", desc: "Medellín, Envigado, Itagüí, Sabaneta y Caldas" },
        { icon: "✂️", name: "Peluquerías Caninas", desc: "Centros de estética animal y pet shops" },
        { icon: "🐾", name: "Centros de Bienestar Animal", desc: "Guarderías, hoteles para mascotas y adopción" },
        { icon: "🌱", name: "Criaderos", desc: "Cuidado y cría de animales bajo estándares técnicos" },
        { icon: "🏠", name: "Servicios a Domicilio", desc: "Acicalamiento y cuidado independiente con clientes propios" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y bienestar animal",
        "Fundamentos del emprendimiento en servicios para mascotas",
        "Atención al cliente y comunicación con propietarios",
        "Bioseguridad y manejo seguro de animales",
        "Nutrición y cuidado animal básico",
        "Actividad terapéutica y rehabilitación animal",
        "Recepción, registro y valoración inicial de animales",
        "Técnicas de acicalamiento canino y felino",
      ]}
      pensum2={[
        "Administración de medicamentos veterinarios según prescripción",
        "Práctica profesional en clínicas veterinarias, peluquerías caninas o centros de bienestar animal",
      ]}
      mercadoTexto="Nuestros estudiantes practican con animales reales, en clínicas reales, y salen preparados para trabajar — o para montar su propio servicio de cuidado y acicalamiento con los conocimientos que el mercado exige."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Veterinaria. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El sector de mascotas en Colombia no para de crecer. Fórmate hoy para trabajar en uno de los sectores con más proyección en Antioquia."
      programaId="veterinaria"
    />
  );
}
