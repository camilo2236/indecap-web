import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("inyectologia", "Curso de Inyectología · Constancia de asistencia el mismo día");

export default function Page() {
  const course = getShortCourseBySlug("inyectologia");
  return <ShortCoursePage course={course} />;
}
