import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("primeros-auxilios", "Curso de Primeros Auxilios · Constancia de asistencia el mismo día");

export default function Page() {
  const course = getShortCourseBySlug("primeros-auxilios");
  return <ShortCoursePage course={course} />;
}
