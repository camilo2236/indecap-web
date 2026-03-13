"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { programs } from "@/data/programs";
import { locations } from "@/data/locations";

const registrationSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  apellido: z.string().min(2, "El apellido es requerido"),
  email: z.string().email("Ingresa un correo válido"),
  telefono: z
    .string()
    .min(7, "Ingresa un teléfono válido")
    .regex(/^[0-9+\s()-]+$/, "Solo números y caracteres válidos"),
  programa: z.string().min(1, "Selecciona un programa"),
  sede: z.string().min(1, "Selecciona una sede"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  className?: string;
}

export function RegistrationForm({ className }: RegistrationFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  function onSubmit(data: RegistrationData) {
    console.log("Formulario enviado:", data);
    alert("¡Gracias por tu inscripción! Nos pondremos en contacto contigo pronto.");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" placeholder="Tu nombre" {...register("nombre")} />
          {errors.nombre && (
            <p className="text-sm text-destructive">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="apellido">Apellido</Label>
          <Input id="apellido" placeholder="Tu apellido" {...register("apellido")} />
          {errors.apellido && (
            <p className="text-sm text-destructive">{errors.apellido.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" placeholder="tu@correo.com" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" placeholder="300 123 4567" {...register("telefono")} />
          {errors.telefono && (
            <p className="text-sm text-destructive">{errors.telefono.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Programa de interés</Label>
          <Select onValueChange={(value) => setValue("programa", value as string)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un programa" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program.id} value={program.id}>
                  {program.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.programa && (
            <p className="text-sm text-destructive">{errors.programa.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Sede</Label>
          <Select onValueChange={(value) => setValue("sede", value as string)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una sede" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.sede && (
            <p className="text-sm text-destructive">{errors.sede.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        Inscribirme ahora
      </Button>
    </form>
  );
}
