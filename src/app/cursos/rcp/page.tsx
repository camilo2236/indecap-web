import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("rcp", "Curso de RCP · 20 horas certificadas, certificado el mismo día");

export default function Page() {
  const course = getShortCourseBySlug("rcp");
  return <ShortCoursePage course={course} />;
}
