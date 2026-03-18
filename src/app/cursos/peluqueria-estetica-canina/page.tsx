import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";

export default function Page() {
  const course = getShortCourseBySlug("peluqueria-estetica-canina");
  return <ShortCoursePage course={course} />;
}
