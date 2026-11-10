import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("calidad-humanizacion", "Curso de Calidad y Humanización en los Servicios de Salud");
export default function Page() {
  const course = getShortCourseBySlug("calidad-humanizacion");
  return <ShortCoursePage course={course} />;
}
