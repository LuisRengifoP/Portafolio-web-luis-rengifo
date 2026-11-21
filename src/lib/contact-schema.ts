import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre (mínimo 2 caracteres).")
    .max(80, "El nombre no puede superar los 80 caracteres."),
  email: z.string().trim().email("Ingresa un correo electrónico válido (ej. nombre@empresa.com)."),
  subject: z
    .string()
    .trim()
    .min(3, "Selecciona o escribe un asunto.")
    .max(120, "El asunto es demasiado largo."),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntame un poco más (mínimo 10 caracteres).")
    .max(600, "El mensaje no puede superar los 600 caracteres."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactApiResponse {
  ok: boolean;
  mode: "email_sent" | "direct_channel_ready";
  message: string;
}
