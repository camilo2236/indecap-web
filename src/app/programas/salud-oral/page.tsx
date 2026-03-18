import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Salud Oral | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Salud Oral en INDECAP. Formación práctica en consultorios reales.",
};

export default function SaludOralPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Salud Oral"
      subtitulo="Auxiliar en"
      emWord="Salud Oral"
      accent="#0B6E6E"
      accentDark="#074F4F"
      escuela="Escuela de Salud Oral"
      horas="1.540"
      semestres="2"
      sedesNum="3"
      fotoSrc="/images/programs/salud-oral/salud-oral-hero.jpg"
      fotoAlt="Estudiante de Salud Oral INDECAP"
      descripcion="Forma parte del equipo de salud que transforma sonrisas. Aprende higiene oral, prevención de enfermedades bucodentales y asistencia odontológica con práctica clínica real."
      capacidades={[
        "Asistir al odontólogo en procedimientos clínicos y estéticos",
        "Aplicar técnicas de higiene oral y educación preventiva a pacientes",
        "Preparar y esterilizar materiales e instrumental odontológico",
        "Tomar radiografías dentales y registros clínicos básicos",
        "Realizar seguimiento y control de pacientes en tratamiento",
        "Aplicar normas de bioseguridad en ambientes odontológicos",
      ]}
      salidas={[
        { icon: "🦷", name: "Consultorios Odontológicos" },
        { icon: "🏥", name: "Clínicas de Salud" },
        { icon: "🏫", name: "IPS y EPS" },
        { icon: "✨", name: "Centros Estéticos Dentales" },
        { icon: "📋", name: "Gestión Administrativa" },
        { icon: "🚀", name: "Emprendimiento" },
      ]}
      pensum1={["Inducción Institucional","TICs","Ética Profesional","Emprendimiento","Anatomía y Fisiología Oral","Bioseguridad en Odontología","Instrumentación Odontológica","Higiene Oral Preventiva","Radiología Dental Básica"]}
      pensum2={["Asistencia en Procedimientos Clínicos","Estética Dental Básica","Gestión de Consultorio","Práctica Formativa","Fortalecimiento de Competencias"]}
      mercadoTexto="La salud oral es un derecho en Colombia y la demanda de auxiliares certificados crece con la expansión del sistema de salud. Los odontólogos requieren asistentes formados para operar con eficiencia."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20Oral%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en salud oral comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y en menos de un año estarás ejerciendo tu profesión."
    />
  );
}
