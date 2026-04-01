import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Enfermería | INDECAP – Medellín, Envigado, Caldas",
<<<<<<< HEAD
  description: "Certifícate como Auxiliar en Enfermería en INDECAP. 1.650 horas de formación clínica y práctica real en hospitales y clínicas del Valle de Aburrá. Sedes en Medellín, Envigado y Caldas.",
=======
  description: "Certifícate como Auxiliar en Enfermería en INDECAP. 1.650 horas de formación clínica y práctica. Sedes en Medellín, Envigado y Caldas.",
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
};

export default function EnfermeriaPage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Enfermería"
      subtitulo="Auxiliar en"
      emWord="Enfermería"
      accent="#1A3A6B"
      escuela="Escuela de Salud"
      horas="1.650"
      semestres="3"
      sedesNum="3"
      fotoSrc="/images/programs/enfermeria/enfermeria-hero.jpg"
      fotoAlt="Estudiante de Enfermería INDECAP"
<<<<<<< HEAD
      descripcion="Quieres trabajar cuidando personas. No en abstracto — en las clínicas, hospitales y centros de salud de Medellín y el Valle de Aburrá que llevan años recibiendo egresados de INDECAP. Auxiliar en enfermería es uno de los perfiles con mayor demanda en Antioquia. Puedes estar trabajando en 24 meses con un título reconocido."
      capacidades={[
        "Tomar signos vitales, preparar pacientes y asistir al equipo médico en procedimientos clínicos",
        "Administrar medicamentos por las vías autorizadas siguiendo protocolos de seguridad del paciente",
        "Aplicar protocolos de bioseguridad y control de infecciones en cualquier entorno de salud",
        "Realizar curaciones, tendido de camas clínicas y manejo de equipos médicos básicos",
        "Acompañar al paciente en su proceso de recuperación con un trato humano y ético",
        "Manejar historias clínicas y registros de atención con precisión",
      ]}
      salidas={[
        { icon: "🏥", name: "Hospitales y Clínicas", desc: "Urgencias, hospitalización y consulta externa en el Valle de Aburrá" },
        { icon: "🏢", name: "IPS y EPS", desc: "Programas de atención primaria y salud colectiva" },
        { icon: "🏠", name: "Atención Domiciliaria", desc: "Cuidado de pacientes en casa con supervisión médica" },
        { icon: "🧪", name: "Laboratorios Clínicos", desc: "Apoyo asistencial en toma y procesamiento de muestras" },
        { icon: "🩺", name: "Consultorios Médicos", desc: "Asistencia al profesional en consulta y procedimientos" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y responsabilidad en el cuidado de la salud",
        "Herramientas digitales aplicadas al sector salud",
        "Atención y comunicación con el paciente y su familia",
        "Bioseguridad y control de infecciones hospitalarias",
        "Apoyo en procesos diagnósticos (toma de muestras, preparación de pacientes)",
        "Fundamentos de farmacología y administración de medicamentos",
      ]}
      pensum2={[
        "Cuidado integral del paciente en urgencias, hospitalización y consulta externa",
        "Práctica formativa en instituciones de salud del Valle de Aburrá",
      ]}
      pensum3={[
        "Práctica profesional en clínicas, hospitales o centros de salud con pacientes reales bajo supervisión",
      ]}
      mercadoTexto="Nuestros egresados de enfermería ya están en los hospitales y clínicas de Medellín. No es una promesa: es una realidad de 40 años. Las instituciones de salud de Antioquia conocen la formación de INDECAP porque han visto trabajar a nuestros egresados. Esa confianza no se construye con publicidad — se construye con resultados."
      waNum="573022389760"
=======
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
     
      pensum1={[
        "Inducción y Perfil Ocupacional en Salud",
        "Morfofisiología y Anatomía Aplicada",
        "Protocolos de Bioseguridad y Control de Infecciones",
        "Fundamentos Clínicos de Enfermería",
        "Técnicas de Inyectología y Venopunción",
        "Monitorización de Signos Vitales y Triage Básicos",
        "Ética, Bioética y Humanización del Cuidado",
      ]}
     
      pensum2={[
        "Atención y Cuidado Integral del Paciente Hospitalizado",
        "Farmacología Básica y Administración de Medicamentos",
        "Soporte Vital y Atención Prehospitalaria (APH)",
        "Salud Mental y Abordaje Psicosocial",
        "Cuidado Especializado del Adulto Mayor (Gerontología)",
        "Sistemas de Información y TICs en Entornos de Salud",
      ]}
     
      pensum3={[
        "Práctica Formativa Clínica e Institucional",
        "Asistencia en Procedimientos Médico-Quirúrgicos",
        "Manejo Avanzado de Urgencias y Primeros Auxilios",
        "Emprendimiento y Desarrollo Profesional en Salud",
        "Fortalecimiento de Competencias Laborales",
      ]}
      mercadoTexto="El sector salud en Antioquia presenta una alta demanda constante de auxiliares de enfermería certificados. Las oportunidades laborales son inmediatas en hospitales, clínicas, IPS, EPS y empresas de cuidado domiciliario."
      waNum="573022389760" // Validado para el enlace (sin el + inicial para mayor compatibilidad)
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      waText="Hola INDECAP, estoy interesado en el Técnico en Enfermería. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
<<<<<<< HEAD
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser parte del talento humano más solicitado en las clínicas y hospitales de Antioquia."
      programaId="enfermeria"
=======
      ctaTitulo="Tu carrera en el sector salud comienza en INDECAP"
      ctaDesc="Los cupos son limitados. Asegura tu lugar hoy y prepárate para ser parte del talento humano más solicitado en las clínicas y hospitales de Antioquia."
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
    />
  );
}