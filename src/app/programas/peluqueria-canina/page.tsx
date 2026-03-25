import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Diplomado en Peluquería y Estética Canina | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate como Groomer Profesional en el Diplomado de Peluquería Canina de INDECAP. Práctica real con mascotas desde el primer día.",
};

export default function PeluqueriaCaninaPage() {
  return (
    <ProgramPage
      titulo="Diplomado en Peluquería y Estética Canina"
      subtitulo="Grooming"
      emWord="Profesional"
      accent="#E07B39" 
      accentDark="#B85A1A"
      escuela="Escuela Veterinaria" 
      horas="400" 
      semestres="1" 
      sedesNum="3"
      fotoSrc="/images/programs/peluqueria-canina/peluqueria-hero.jpg"
      fotoAlt="Estudiante de Peluquería Canina INDECAP realizando grooming profesional"
      descripcion="Conviértete en Groomer Profesional Certificado. Aprende las técnicas más avanzadas de estética animal, cortes de raza, baños especializados y manejo conductual con práctica real en modelos vivos desde el primer día."
      capacidades={[
        "Dominar técnicas de corte con tijera, máquina y stripping profesional",
        "Realizar baños cosméticos y terapéuticos según el tipo de manto y piel",
        "Identificar y manejar la psicología canina para un grooming sin estrés",
        "Aplicar protocolos de bioseguridad e higiene en centros de estética",
        "Gestionar y administrar tu propio emprendimiento de Peluquería Canina",
        "Asesorar a propietarios sobre nutrición y mantenimiento del pelaje",
      ]}
      salidas={[
        { icon: "🐩", name: "Spas y Peluquerías Caninas" },
        { icon: "🏥", name: "Clínicas y Hospitales Veterinarios" },
        { icon: "🛁", name: "Pet Shops de Alta Gama" },
        { icon: "🏠", name: "Servicios de Grooming a Domicilio" },
        { icon: "🚀", name: "Emprendimiento Propio" },
        { icon: "🏆", name: "Exhibiciones y Competencias" },
      ]}
      pensum1={[
        "Introducción al Grooming y Bioseguridad Aplicada",
        "Anatomía, Dermatología y Fisiología Canina para Estilistas",
        "Manejo Conductual y Sujeción No Traumática",
        "Cosmetología Veterinaria: Champús, Acondicionadores y Tratamientos",
        "Técnicas de Baño, Secado Pro y Cepillado de Alta Eficiencia",
        "Manejo Maestro de Herramientas (Tijeras, Máquinas y Cuchillas)",
        "Estilismo Comercial y Cortes Estándar por Raza",
        "Higiene Complementaria (Oídos, Uñas y Glándulas)",
        "Emprendimiento y Marketing para Peluqueros Caninos",
        "Práctica Intensiva con Mascotas Reales",
      ]}
      pensum2={[]}
      pensum3={[]}
      mercadoTexto="El mercado de las mascotas es uno de los más resilientes en Colombia. Los dueños de mascotas consideran la estética como un servicio esencial de salud y bienestar. Un peluquero canino certificado genera ingresos rápidos gracias a la alta demanda."
      waNum="573022389760"
      waText="Hola INDECAP, estoy interesado en el Diplomado de Peluquería Canina. Mi nombre es "
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Transforma tu pasión por los animales en un negocio rentable"
      ctaDesc="Cupos limitados por sesión para garantizar práctica personalizada. Inicia tu camino como Groomer Profesional hoy mismo."
    />
  );
}