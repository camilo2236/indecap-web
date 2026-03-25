import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Salud Oral | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Salud Oral en INDECAP. 1.650 horas de formación clínica y práctica en consultorios reales.",
};

export default function SaludOralPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Salud Oral"
      subtitulo="Auxiliar en"
      emWord="Salud Oral"
      accent="#0B6E6E"
      accentDark="#074F4F"
      escuela="Escuela de Salud"
      horas="1.650" // Unificado con programs.ts
      semestres="3"
      sedesNum="3"
      fotoSrc="/images/programs/salud-oral/salud-oral-hero.jpg"
      fotoAlt="Estudiante de Salud Oral INDECAP asistiendo en consultorio"
      descripcion="Conviértete en la mano derecha del profesional de la odontología. Aprende técnicas avanzadas de higiene oral, prevención de enfermedades bucodentales y asistencia clínica con equipos reales y práctica garantizada."
      capacidades={[
        "Asistir al odontólogo en procedimientos clínicos, quirúrgicos y estéticos",
        "Aplicar técnicas de higiene oral y educación preventiva a pacientes",
        "Preparar y esterilizar instrumental odontológico bajo estrictos protocolos",
        "Tomar y procesar radiografías dentales e imágenes diagnósticas básicas",
        "Realizar seguimiento, control y agendamiento de pacientes en tratamiento",
        "Gestionar historias clínicas y aplicar normas de bioseguridad en el consultorio",
      ]}
      salidas={[
        { icon: "🦷", name: "Consultorios Odontológicos" },
        { icon: "🏥", name: "Clínicas Especializadas" },
        { icon: "🏫", name: "EPS e IPS Odontológicas" },
        { icon: "✨", name: "Centros de Estética Dental" },
        { icon: "🛡️", name: "Promoción y Prevención" },
        { icon: "📋", name: "Centrales de Esterilización" },
      ]}
     
      pensum1={[
        "Inducción y Perfil Ocupacional en Salud Oral",
        "Anatomía y Morfofisiología del Sistema Estomatognático",
        "Protocolos de Bioseguridad y Control de Infecciones",
        "Fundamentos de Instrumentación Odontológica",
        "Sistemas de Información y TICs en Salud",
        "Ética, Bioética y Humanización del Servicio",
      ]}
     
      pensum2={[
        "Asistencia en Procedimientos Clínicos y Quirúrgicos",
        "Técnicas de Higiene Oral y Odontología Preventiva",
        "Radiología Dental Básica e Imágenes Diagnósticas",
        "Materiales Dentales y Asistencia en Estética",
        "Atención al Usuario y Orientación al Paciente",
      ]}
     
      pensum3={[
        "Práctica Clínica y Asistencial en Consultorio",
        "Gestión Administrativa y Facturación Odontológica",
        "Manejo Avanzado de Centrales de Esterilización",
        "Promoción de la Salud Bucodental Comunitaria",
        "Fortalecimiento de Competencias Laborales",
      ]}
      mercadoTexto="El cuidado estético y la salud oral preventiva están en su punto más alto en Colombia. Las clínicas odontológicas modernas exigen auxiliares altamente capacitados para optimizar el tiempo del especialista y garantizar la seguridad del paciente."
      waNum="573022389760" // Validado para la API
      waText="Hola INDECAP, estoy interesado en el programa de Salud Oral. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en salud oral comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser una pieza fundamental en las mejores clínicas odontológicas de Antioquia."
    />
  );
}