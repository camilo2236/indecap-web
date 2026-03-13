import { MapPin, Phone, Mail } from "lucide-react";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                IC
              </div>
              <span className="text-lg font-bold">INDECAP</span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              Instituto de Ciencias Aplicadas — Formación técnica laboral con
              calidad y compromiso social.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/indecap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 transition-colors hover:text-background"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/indecap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 transition-colors hover:text-background"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {locations.map((location) => (
            <div key={location.id}>
              <h3 className="font-semibold">{location.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-background/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {location.address}, {location.city}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{location.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{location.email}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} INDECAP — Instituto de Ciencias Aplicadas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
