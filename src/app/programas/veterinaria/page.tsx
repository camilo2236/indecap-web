import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Veterinaria | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Veterinaria en INDECAP. Formación clínica práctica real con animales, apoyo en cirugías y laboratorio.",
};

export default function VeterinariaPage() {
  return (
    <ProgramPage
      titulo="Técnico Laboral Auxiliar en Veterinaria"
      subtitulo="Auxiliar en"
      emWord="Veterinaria"
      accent="#7B1F1F"
      accentDark="#5A1515"
      escuela="Escuela Veterinaria"
      horas="1.200" // Ajustado al estándar de 2 semestres
      semestres="2" 
      sedesNum="3"
      fotoSrc="/images/programs/veterinaria/veterinaria-hero-ia.webp" // 🔥 Ruta lista para tu nueva foto con IA
      fotoAlt="Estudiante de Veterinaria INDECAP asistiendo en consulta clínica animal"
      descripcion="Convierte tu amor por los animales en una profesión altamente demandada. Domina la asistencia clínica, el manejo en quirófano, la toma de muestras y el cuidado intensivo veterinario con práctica real desde el inicio."
      capacidades={[
        "Asistir al médico veterinario en cirugías, urgencias y hospitalización",
        "Realizar toma de muestras, análisis básicos y manejo de laboratorio clínico",
        "Administrar medicamentos y aplicar tratamientos con precisión y seguridad",
        "Manejar equipos de imagenología y radiología veterinaria básica",
        "Aplicar técnicas de sujeción, manejo y bienestar animal (Fear Free)",
        "Gestionar historias clínicas y atención al cliente en centros veterinarios",
      ]}
      salidas={[
        { icon: "🏥", name: "Clínicas y Hospitales Veterinarios" },
        { icon: "🔬", name: "Laboratorios Clínicos Animales" },
        { icon: "🐾", name: "Centros de Bienestar y Zoonosis" },
        { icon: "🏪", name: "Farmacias y Tiendas Especializadas" },
        { icon: "🐄", name: "Fincas y Producción Pecuaria" },
        { icon: "🚿", name: "Peluquería y Estética Canina" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos y Consulta
      pensum1={[
        "Morfofisiología Animal y Bioseguridad Clínica",
        "Fundamentos de Farmacología y Toxicología Veterinaria",
        "Propedéutica y Asistencia en Consulta Externa",
        "Técnicas de Sujeción, Comportamiento y Bienestar Animal",
        "Sistemas de Información y Atención al Cliente en Clínicas",
        "Ética Profesional y Humanización del Cuidado Animal",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Clínica y Quirófano
      pensum2={[
        "Asistencia en Cirugía y Manejo de Quirófano Veterinario",
        "Laboratorio Clínico, Toma y Análisis de Muestras",
        "Imagenología Diagnóstica y Radiología Animal Básica",
        "Nutrición Clínica y Dietética Veterinaria",
        "Urgencias y Cuidados Intensivos Veterinarios",
        "Práctica Formativa en Clínicas Veterinarias Reales",
      ]}
      mercadoTexto="El cuidado de mascotas (pet care) es uno de los sectores de mayor crecimiento económico en Colombia. Las familias invierten cada vez más en la salud de sus animales, por lo que las clínicas veterinarias buscan desesperadamente auxiliares bien formados y con gran vocación."
      waNum="573022389760" // 🔥 Formato limpio
      waText="Hola INDECAP, estoy interesado en el programa de Auxiliar en Veterinaria. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="La vida de muchos animales estará en buenas manos"
      ctaDesc="Los cupos son estrictamente limitados para garantizar la calidad de las prácticas. Asegura tu lugar hoy y transforma tu pasión en tu profesión."
    />
  );
}