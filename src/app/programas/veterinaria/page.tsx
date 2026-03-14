import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Veterinaria | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Veterinaria en INDECAP. Formación práctica en clínicas reales.",
};

export default function VeterinariaPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Veterinaria"
      subtitulo="Auxiliar en"
      emWord="Veterinaria"
      accent="#7B1F1F"
      accentDark="#5A1515"
      escuela="Escuela Veterinaria"
      horas="1.650"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/veterinaria.png"
      fotoAlt="Estudiante de Veterinaria INDECAP"
      descripcion="Conviértete en el profesional que cuida y protege la vida animal. Aprende asistencia clínica, manejo de animales, apoyo en cirugías y administración de medicamentos con práctica real."
      capacidades={[
        "Asistir al médico veterinario en procedimientos clínicos y quirúrgicos",
        "Realizar toma de muestras, análisis básicos y manejo de laboratorio clínico",
        "Administrar medicamentos y aplicar tratamientos bajo supervisión profesional",
        "Manejar equipos médico-veterinarios con seguridad y precisión",
        "Atender y dar apoyo emocional a los dueños de las mascotas",
        "Aplicar protocolos de bioseguridad en entornos clínicos veterinarios",
      ]}
      salidas={[
        { icon: "🏥", name: "Clínicas Veterinarias" },
        { icon: "🐾", name: "Centros de Zoonosis" },
        { icon: "💊", name: "Tiendas Veterinarias" },
        { icon: "🔬", name: "Laboratorios Clínicos" },
        { icon: "🐄", name: "Ganadería y Campo" },
        { icon: "🚀", name: "Negocio Propio" },
      ]}
      pensum1={["Inducción Institucional","TICs","Ética y Valores","Emprendimiento","Bioseguridad","Anatomía y Fisiología Animal","Farmacología Básica","Manejo y Sujeción de Animales","Asistencia en Consulta Veterinaria"]}
      pensum2={["Asistencia Quirúrgica","Toma y Análisis de Muestras","Imagenología Básica","Nutrición Animal","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="El sector veterinario en Colombia crece con el aumento de mascotas en los hogares. Los auxiliares certificados tienen alta demanda en clínicas, tiendas especializadas y ganadería."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesado%20en%20Veterinaria%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera cuidando la vida animal comienza en INDECAP"
      ctaDesc="Los cupos son limitados por grupo. Asegura tu lugar hoy y en menos de un año estarás ejerciendo tu profesión."
    />
  );
}
