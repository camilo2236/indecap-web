import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Enfermería | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Auxiliar en Enfermería en INDECAP. 1.650 horas de formación clínica y práctica. Sedes en Medellín, Envigado y Caldas.",
};

export default function EnfermeriaPage() {
  return (
    <ProgramPage
      programaId="enfermeria"
      titulo="Auxiliar en Enfermería"
      subtitulo="Auxiliar en"
      emWord="Enfermería"
      accent="#1A3A6B"
      accentDark="#0D2347"
      escuela="Escuela de Salud"
      horas="1.650"
      semestres="3" // 🔥 Actualizado a 3 semestres
      sedesNum="3"
      fotoSrc="/images/programs/enfermeria/enfermeria-hero.jpg"
      fotoAlt="Estudiante de Enfermería INDECAP"
      descripcion="Transforma tu vocación de servicio en una carrera sólida en el sector salud. Domina el cuidado integral de pacientes, procedimientos clínicos y atención hospitalaria con prácticas reales garantizadas."
      capacidades={[
        "Brindar cuidados clínicos y asistenciales bajo supervisión médica profesional",
        "Dominar técnicas de inyectología, venopunción y toma de signos vitales",
        "Administrar medicamentos aplicando los protocolos de bioseguridad y dosis exacta",
        "Asistir en procedimientos de urgencias, trauma y atención prehospitalaria",
        "Manejar protocolos de higiene, movilización y confort del paciente hospitalizado",
        "Gestionar historias clínicas y reportes médicos en sistemas de salud",
      ]}
      salidas={[
        { icon: "🏥", name: "Hospitales y Clínicas" },
        { icon: "🚑", name: "Urgencias y UCI" },
        { icon: "🏠", name: "Atención Domiciliaria" },
        { icon: "💊", name: "Dispensación Clínica" },
        { icon: "📋", name: "Gestión Administrativa en Salud" },
        { icon: "🩺", name: "Asistencia en Consultorios" },
      ]}
      // 🔥 Pensum Premium - Semestre 1: Fundamentos
      pensum1={[
        "Inducción y Perfil Ocupacional en Salud",
        "Morfofisiología y Anatomía Aplicada",
        "Protocolos de Bioseguridad y Control de Infecciones",
        "Fundamentos Clínicos de Enfermería",
        "Técnicas de Inyectología y Venopunción",
        "Monitorización de Signos Vitales y Triage Básicos",
        "Ética, Bioética y Humanización del Cuidado",
      ]}
      // 🔥 Pensum Premium - Semestre 2: Cuidado Específico
      pensum2={[
        "Atención y Cuidado Integral del Paciente Hospitalizado",
        "Farmacología Básica y Administración de Medicamentos",
        "Soporte Vital y Atención Prehospitalaria (APH)",
        "Salud Mental y Abordaje Psicosocial",
        "Cuidado Especializado del Adulto Mayor (Gerontología)",
        "Sistemas de Información y TICs en Entornos de Salud",
      ]}
      // 🔥 Pensum Premium - Semestre 3: Práctica y Empleabilidad
      pensum3={[
        "Práctica Formativa Clínica e Institucional",
        "Asistencia en Procedimientos Médico-Quirúrgicos",
        "Manejo Avanzado de Urgencias y Primeros Auxilios",
        "Emprendimiento y Desarrollo Profesional en Salud",
        "Fortalecimiento de Competencias Laborales",
      ]}
      mercadoTexto="El sector salud en Antioquia presenta una alta demanda constante de auxiliares de enfermería certificados. Las oportunidades laborales son inmediatas en hospitales, clínicas, IPS, EPS y empresas de cuidado domiciliario."
      waNum="573022389760" // Validado para el enlace (sin el + inicial para mayor compatibilidad)
      waText="Hola INDECAP, estoy interesado en el Técnico en Enfermería. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en el sector salud comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser parte del talento humano más solicitado en las clínicas y hospitales de Antioquia."
    />
  );
}
