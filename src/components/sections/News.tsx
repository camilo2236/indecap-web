import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { news } from "@/data/news";

export function News() {
  return (
    <section id="noticias" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Noticias
          </h2>
          <p className="mt-3 text-muted-foreground">
            Mantente al día con las novedades de INDECAP.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.date).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
