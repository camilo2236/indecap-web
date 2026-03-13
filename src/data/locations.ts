export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  resolution?: string;
}

export const locations: Location[] = [
  {
    id: "medellin",
    name: "Sede Medellín",
    address: "Cl. 56 # 45-26",
    city: "Medellín, Antioquia",
    phone: "(604) 448 4794",
    email: "indecap@indecap.edu.co",
    resolution: "Res. N° 016022",
  },
  {
    id: "envigado",
    name: "Sede Envigado",
    address: "Cl 37 Sur #43A-84",
    city: "Envigado, Antioquia",
    phone: "(604) 448 4794",
    email: "indecap@indecap.edu.co",
    resolution: "Res. N° 3534",
  },
  {
    id: "caldas",
    name: "Sede Caldas",
    address: "Calle 130 sur # 51-65",
    city: "Caldas, Antioquia",
    phone: "(604) 448 4794",
    email: "indecap@indecap.edu.co",
    resolution: "Res. N° 2016060054726",
  },
];
