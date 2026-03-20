import { CourseCard } from "@/components/CourseCard";

export const metadata = {
  title: "Cursos Cortos y Diplomados | INDECAP",
  description: "Potencia tu perfil profesional con nuestros cursos cortos de certificación rápida en Medellín, Envigado y Caldas.",
};

const cursos = [
  {
    titulo: "Inyectología y Administración de Medicamentos",
    duracion: "20 Horas",
    categoria: "Salud",
    color: "#e11d48", // Rojo
    descripcion: "Aprende técnicas seguras de punción, vías de administración y protocolos de bioseguridad clínica.",
    slug: "inyectologia"
  },
  {
    titulo: "RCP y Soporte Vital Básico",
    duracion: "8 Horas",
    categoria: "Urgencias",
    color: "#2563eb", // Azul
    descripcion: "Certificación vital para personal de salud y brigadistas. Reanimación cardio-pulmonar y uso de DEA.",
    slug: "rcp"
  },
  {
    titulo: "Toma de Muestras de Laboratorio",
    duracion: "40 Horas",
    categoria: "Salud",
    color: "#0891b2", // Cian
    descripcion: "Domina la técnica de venopunción, manejo de tubos y protocolos de laboratorio clínico.",
    slug: "toma-muestras"
  },
  {
    titulo: "Primeros Auxilios",
    duracion: "16 Horas",
    categoria: "Urgencias",
    color: "#16a34a", // Verde
    descripcion: "Atención inicial de emergencias, vendajes, inmovilización y traslado de pacientes.",
    slug: "primeros-auxilios"
  },
  {
    titulo: "Vacunación PAI",
    duracion: "80 Horas",
    categoria: "Salud",
    color: "#7c3aed", // Morado
    descripcion: "Especialización en el Programa Ampliado de Inmunizaciones y manejo de cadena de frío.",
    slug: "vacunacion"
  },
  {
    titulo: "Código Fucsia",
    duracion: "40 Horas",
    categoria: "Normatividad",
    color: "#db2777", // Rosa
    descripcion: "Protocolo de atención integral a víctimas de violencia sexual. Obligatorio para sector salud.",
    slug: "codigo-fucsia"
  }
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header de la Sección */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cursos Cortos y <span className="text-zinc-500">Diplomados</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Programas intensivos diseñados para actualizar tus conocimientos y obtener certificaciones válidas para el mercado laboral en tiempo récord.
          </p>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso, index) => (
            <CourseCard 
              key={index}
              {...curso}
            />
          ))}
        </div>

        {/* Banner de Próximos Cursos */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">¿Buscas un curso específico?</h2>
            <p className="text-zinc-400">Abrimos nuevos grupos cada mes en todas nuestras sedes.</p>
          </div>
          <a 
            href="https://wa.me/573022389760?text=Hola INDECAP, me gustaría preguntar por un curso que no veo en la lista"
            className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors"
          >
            Consultar otros cursos
          </a>
        </div>
      </div>
    </main>
  );
}