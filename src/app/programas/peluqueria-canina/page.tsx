import { ProgramPage } from "@/components/ProgramPage";

export const metadata = {
  title: "Peluquería y Estética Canina | INDECAP – Medellín, Envigado, Caldas",
  description: "Certifícate en Peluquería y Estética Canina en INDECAP. Grooming profesional con práctica real.",
};

export default function PeluqueriaCaninePage() {
  return (
    <ProgramPage
      titulo="Peluquería y Estética Canina"
      subtitulo="Peluquería"
      emWord="y Estética Canina"
      accent="#E07B39"
      accentDark="#B85A1A"
      escuela="Escuela Veterinaria"
      horas="400"
      semestres="1"
      sedesNum="3"
      fotoSrc="/images/programs/veterinaria.png"
      fotoAlt="Estudiante de Peluquería Canina INDECAP"
      descripcion="Conviértete en groomer profesional certificado. Aprende cortes, baños, estética y cuidado animal con mascotas reales desde el primer día de clases."
      capacidades={[
        "Realizar baños y secados profesionales con técnica y protocolo de bioseguridad",
        "Aplicar cortes de pelo según estándar de raza y deseo del cliente",
        "Identificar y manejar condiciones de piel y pelo en diferentes razas",
        "Atender y calmar mascotas con técnicas de manejo no traumáticas",
        "Asesorar a los dueños sobre el cuidado y mantenimiento de su mascota",
        "Emprender tu propio espacio de grooming o trabajar en centros especializados",
      ]}
      salidas={[
        { icon: "✂️", name: "Peluquerías Caninas" },
        { icon: "🏥", name: "Clínicas Veterinarias" },
        { icon: "🛁", name: "Pet Shops" },
        { icon: "🏠", name: "Servicio a Domicilio" },
        { icon: "🐕", name: "Hoteles para Mascotas" },
        { icon: "🚀", name: "Negocio Propio" },
      ]}
      pensum1={["Inducción y Bioseguridad","Anatomía y Fisiología Canina","Razas y Estándares","Manejo y Sujeción de Mascotas","Técnicas de Baño Profesional","Secado y Cepillado","Cortes por Raza","Estética y Accesorios","Práctica con Mascotas Reales"]}
      pensum2={["Práctica Formativa Intensiva","Emprendimiento en Pet Services","Fortalecimiento de Competencias"]}
      mercadoTexto="El mercado de mascotas en Colombia crece más del 10% anual. Los groomers certificados son escasos y muy demandados. Puedes trabajar de manera independiente con inversión mínima desde que te gradúas."
      waNum="+573022389760"
      waText="Hola%20INDECAP%20estoy%20interesado%20en%20Peluquer%C3%ADa%20Canina%2C%20mi%20nombre%20es%20"
      sedes={[
        { icon: "🏙️", name: "Sede Medellín", address: "Cl. 56 # 45-26, Medellín", tag: "Tel: (604) 448 4794" },
        { icon: "🏘️", name: "Sede Envigado", address: "Cl 37 Sur #43A-84, Envigado", tag: "Tel: (604) 448 4794" },
        { icon: "🌿", name: "Sede Caldas", address: "Calle 130 sur # 51-65, Caldas", tag: "Tel: (604) 448 4794" },
      ]}
      ctaTitulo="Tu carrera en estética animal comienza en INDECAP"
      ctaDesc="Cupos muy limitados por grupo. Reserva el tuyo hoy y en pocos meses estarás trabajando con mascotas."
    />
  );
}
