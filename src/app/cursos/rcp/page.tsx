import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";

export default function Page() {
  const course = getShortCourseBySlug("rcp");
  return <ShortCoursePage course={course} />;
}
