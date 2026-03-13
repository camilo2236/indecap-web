export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

export const locations: Location[] = [
  {
    id: "bogota",
    name: "Sede Bogotá",
    address: "Calle 53 No. 14-39",
    city: "Bogotá D.C.",
    phone: "+57 317 434 2783",
    email: "info@indecap.edu.co",
  },
  {
    id: "soacha",
    name: "Sede Soacha",
    address: "Carrera 7 No. 12-50 Centro",
    city: "Soacha, Cundinamarca",
    phone: "+57 317 434 2783",
    email: "soacha@indecap.edu.co",
  },
  {
    id: "girardot",
    name: "Sede Girardot",
    address: "Calle 19 No. 10-45",
    city: "Girardot, Cundinamarca",
    phone: "+57 317 434 2783",
    email: "girardot@indecap.edu.co",
  },
];
