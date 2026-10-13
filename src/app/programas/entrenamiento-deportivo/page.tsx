import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Entrenamiento Deportivo | INDECAP – Medellín, Envigado",
  description: "Técnico Laboral en Entrenamiento Deportivo en INDECAP. 1.000 horas. Fórmate como instructor de gimnasio, entrenador personal o emprendedor en el sector fitness.",
};

export default function EntrenamientoDeportivoPage() {
  return (
    <ProgramPage
      titulo="Entrenamiento Deportivo"
      subtitulo="Entrenamiento"
      emWord="Deportivo"
      accent="#1a086e"
      escuela="Escuela de Deportes"
      horas="1.000"
      semestres="2"
      sedesNum="2"
      fotoSrc="/images/programs/entrenamiento-deportivo.jpg"
      fotoAlt="Estudiante de Entrenamiento Deportivo INDECAP"
      descripcion="Convierte tu pasión por el deporte en una carrera. Aprende a diseñar, orientar y ejecutar rutinas de entrenamiento físico para salud, rendimiento y estética. No solo entrenas — aprendes a convertir el entrenamiento en una profesión con criterio técnico y enfoque real."
      capacidades={[
        "Evaluar la condición física inicial de los clientes y establecer objetivos alcanzables",
        "Diseñar rutinas de entrenamiento personalizadas según objetivos (salud, rendimiento o estética)",
        "Guiar y corregir la ejecución de ejercicios previniendo lesiones",
        "Aplicar principios de nutrición deportiva básica y hábitos saludables",
        "Planificar y dirigir actividades de recreación y eventos deportivos",
        "Trabajar con diferentes tipos de población: sedentarios, adultos mayores, deportistas",
      ]}
      salidas={[
        { icon: "💪", name: "Gimnasios", desc: "Instructor de sala en centros fitness del Valle de Aburrá" },
        { icon: "🏃", name: "Entrenador Personal", desc: "Clientes propios en domicilio, parques o centros deportivos" },
        { icon: "🏋️", name: "Centros Deportivos", desc: "Asistencia técnica en clubs, ligas y centros de alto rendimiento" },
        { icon: "🩺", name: "Salud y Bienestar", desc: "Programas corporativos y de salud ocupacional" },
        { icon: "🚀", name: "Emprendimiento", desc: "Tu propio negocio de entrenamiento desde el primer día" },
      ]}
      pensum1={[
        "Orientación institucional y proyecto de vida profesional",
        "Ética y valores en el deporte y el entrenamiento",
        "Fundamentos del emprendimiento en el sector fitness",
        "Atención al cliente y comunicación efectiva",
        "Programación del ejercicio: principios, variables y periodización",
        "Actividad física y salud: fisiología del ejercicio, evaluación de la condición física",
        "Recreación y eventos deportivos: planificación y dirección",
      ]}
      pensum2={[
        "Práctica formativa en entorno real: gimnasios, centros deportivos o programas de actividad física supervisada",
      ]}
      mercadoTexto="El sector fitness en Antioquia crece cada año. Medellín tiene cientos de gimnasios y centros deportivos que necesitan instructores formados con criterio técnico. Nuestros egresados salen listos para trabajar — o para empezar su propio negocio de entrenamiento."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en Entrenamiento Deportivo. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="Convierte tu pasión en una carrera. Fórmate en 18 meses y empieza a trabajar en el sector que más te gusta."
      programaId="entrenamiento-deportivo"
    />
  );
}
