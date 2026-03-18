"use client";

import { useState } from "react";
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  async function onSubmit(data: RegistrationData) {
    setStatus("sending");

    // Encontrar nombres legibles
    const programName = programs.find(p => p.id === data.programa)?.name || data.programa;
    const sedeName = locations.find(l => l.id === data.sede)?.name || data.sede;

    try {
      // Enviar a Google Sheets via Apps Script
      // NOTA: Necesitas crear el Apps Script y reemplazar esta URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            telefono: data.telefono,
            programa: programName,
            sede: sedeName,
            fecha: new Date().toISOString(),
            fuente: "Página Web INDECAP",
          }),
        });
      }

      // También abrir WhatsApp con los datos
      const waText = encodeURIComponent(
        `Hola INDECAP, me inscribí por la página web.\n` +
        `Nombre: ${data.nombre} ${data.apellido}\n` +
        `Programa: ${programName}\n` +
        `Sede: ${sedeName}\n` +
        `Tel: ${data.telefono}`
      );
      window.open(`https://api.whatsapp.com/send?phone=573022389760&text=${waText}`, "_blank");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <div className="text-4xl">&#x2705;</div>
        <p className="mt-3 font-[family-name:var(--font-playfair)] text-lg font-bold text-[#080F14]">
          ¡Inscripción recibida!
        </p>
        <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm text-[#6B7280]">
          Te contactaremos en minutos por WhatsApp.
        </p>
      </div>
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
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-[#F0A500] px-8 py-3 font-[family-name:var(--font-dm-sans)] text-base font-bold text-[#080F14] hover:bg-[#F0A500]/90 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Inscribirme ahora"}
      </Button>
      {status === "error" && (
        <p className="mt-2 text-center text-xs text-red-600">
          Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}
      <p className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[0.7rem] text-[#6B7280]">
        &#x1F6E1;&#xFE0F; Tus datos están protegidos. Respondemos en menos de 30 minutos.
      </p>
    </form>
  );
}
