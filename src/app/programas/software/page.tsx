import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Auxiliar en Desarrollo de Software | INDECAP – Envigado",
  description: "Técnico Laboral en Auxiliar en Desarrollo de Software en INDECAP. 700 horas. Aprende a programar, desarrollar aplicaciones y trabajar con inteligencia artificial. Sede Envigado.",
};

export default function SoftwarePage() {
  return (
    <ProgramPage
      titulo="Auxiliar en Desarrollo de Software"
      subtitulo="Auxiliar en Desarrollo de"
      emWord="Software"
      accent="#0F4C80"
      escuela="Escuela de Tecnología"
      horas="700"
      semestres="2"
      sedesNum="1"
      fotoSrc="/images/programs/sistemas/sala-medellin-clase.jpg"
      fotoAlt="Estudiante de Desarrollo de Software INDECAP"
      descripcion="Medellín es el hub tecnológico de Colombia. Las empresas de software, startups y áreas de TI necesitan personas que puedan programar desde el primer día. En 700 horas aprenderás a desarrollar aplicaciones reales — y a potenciarlas con inteligencia artificial, la herramienta que está transformando la industria del software."
      capacidades={[
        "Codificar instrucciones en lenguajes de programación según especificaciones técnicas reales",
        "Diseñar soluciones de software aplicando lógica de programación y estructuras de datos",
        "Implementar aplicaciones siguiendo modelos de desarrollo y buenas prácticas de codificación",
        "Usar herramientas de inteligencia artificial para acelerar el desarrollo: GitHub Copilot, ChatGPT API y generación de código",
        "Realizar pruebas básicas de software: unitarias, funcionales y de integración",
        "Documentar código y procesos según estándares del equipo de trabajo",
        "Asistir en el diseño, implementación y administración de bases de datos",
        "Trabajar con herramientas de control de versiones (Git) y colaboración en equipo",
      ]}
      salidas={[
        { icon: "💻", name: "Empresas de Software", desc: "Medellín y el Valle de Aburrá — el ecosistema tech más grande de Colombia fuera de Bogotá" },
        { icon: "🚀", name: "Startups y Emprendimientos", desc: "Empresas digitales que necesitan desarrolladores desde el primer sprint" },
        { icon: "🏢", name: "Áreas de TI", desc: "Cualquier empresa con necesidades tecnológicas — que son casi todas" },
        { icon: "🤝", name: "Outsourcing Tecnológico", desc: "Empresas que prestan servicios de desarrollo a otras organizaciones" },
        { icon: "🌐", name: "Freelance", desc: "Proyectos propios de desarrollo web y aplicaciones para clientes" },
      ]}
      pensum1={[
        "Inducción institucional y proyecto de vida profesional en tecnología",
        "Comunicación, trabajo en equipo y valores en entornos de desarrollo",
        "Inglés técnico para desarrollo de software — leer documentación y comentar código",
        "Herramientas informáticas y entornos de desarrollo (IDEs, terminal, control de versiones con Git)",
        "Diseño de soluciones de software: análisis de requerimientos, diagramas, lógica de programación",
        "Implementación de software: codificación, pruebas, depuración y despliegue básico",
        "Inteligencia artificial aplicada al desarrollo: GitHub Copilot, automatización de código y prompting técnico",
      ]}
      pensum2={[
        "Práctica profesional en empresas de tecnología o áreas de TI participando en proyectos reales bajo supervisión",
      ]}
      mercadoTexto="El desarrollador que construyó esta página web aprendió solo, trabajando con las herramientas disponibles, sin esperar permiso. Ese es el espíritu que fomentamos. No necesitas una carrera de 5 años para empezar a programar — necesitas fundamentos sólidos, práctica real y la mentalidad de nunca dejar de aprender. La inteligencia artificial no reemplaza al programador — lo multiplica. Y aquí aprendes a usarla."
      waNum="573174342783"
      waText="Hola INDECAP, estoy interesado en el programa de Desarrollo de Software. Mi nombre es "
      sedes={[
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
      ]}
      ctaDesc="El sector tech en Medellín no para de crecer. Fórmate en 700 horas y empieza a programar con inteligencia artificial desde el primer día."
      programaId="software"
    />
  );
}
