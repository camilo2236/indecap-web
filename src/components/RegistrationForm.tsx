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
    alert(
      "¡Gracias por tu inscripción! Nos pondremos en contacto contigo pronto."
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label
            htmlFor="nombre"
            className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]"
          >
            Nombre
          </Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            className="rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm"
            {...register("nombre")}
          />
          {errors.nombre && (
            <p className="text-xs text-red-600">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="apellido"
            className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]"
          >
            Apellido
          </Label>
          <Input
            id="apellido"
            placeholder="Tu apellido"
            className="rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm"
            {...register("apellido")}
          />
          {errors.apellido && (
            <p className="text-xs text-red-600">{errors.apellido.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]"
          >
            Correo electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            className="rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="telefono"
            className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]"
          >
            Teléfono
          </Label>
          <Input
            id="telefono"
            placeholder="300 123 4567"
            className="rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm"
            {...register("telefono")}
          />
          {errors.telefono && (
            <p className="text-xs text-red-600">{errors.telefono.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]">
            Programa de interés
          </Label>
          <Select
            onValueChange={(value) =>
              setValue("programa", value as string)
            }
          >
            <SelectTrigger className="w-full rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm">
              <SelectValue placeholder="Selecciona un programa" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program.id} value={program.id}>
                  {program.icon} {program.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.programa && (
            <p className="text-xs text-red-600">{errors.programa.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151]">
            Sede
          </Label>
          <Select
            onValueChange={(value) => setValue("sede", value as string)}
          >
            <SelectTrigger className="w-full rounded-[4px] border-[#E4F1F6] bg-[#F3F8FA] font-[family-name:var(--font-dm-sans)] text-sm">
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
            <p className="text-xs text-red-600">{errors.sede.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full rounded-full bg-[#F0A500] px-8 py-3 font-[family-name:var(--font-dm-sans)] text-base font-bold text-[#080F14] hover:bg-[#F0A500]/90"
      >
        Inscribirme ahora
      </Button>
    </form>
  );
}
