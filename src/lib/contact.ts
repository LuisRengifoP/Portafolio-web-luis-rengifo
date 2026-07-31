"use server";

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  correo: z.string().trim().email("Correo inválido").max(255),
  empresa: z.string().trim().max(120).optional(),
  asunto: z.string().trim().min(3, "Ingresa un asunto").max(150),
  mensaje: z.string().trim().min(10, "Cuéntame un poco más").max(1000),
});

async function getResendApiKey(): Promise<string | undefined> {
  if (process.env.RESEND_API_KEY) return process.env.RESEND_API_KEY;
  try {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const file = fs.readFileSync(path.resolve(process.cwd(), ".env"), "utf8");
    for (const line of file.split("\n")) {
      const match = line.match(/^RESEND_API_KEY=(.*)$/);
      if (match) return match[1].trim().replace(/^["']|["']$/g, "");
    }
  } catch {
    // ignore
  }
  return undefined;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = await getResendApiKey();
    if (!apiKey) {
      throw new Error("Falta configurar RESEND_API_KEY");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portafolio Luis Rengifo <onboarding@resend.dev>",
        to: ["nandorengifo07@gmail.com"],
        reply_to: data.correo,
        subject: `Nuevo mensaje de ${data.nombre}: ${data.asunto}`,
        html: `
          <h2>Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${data.nombre}</p>
          <p><strong>Correo:</strong> ${data.correo}</p>
          <p><strong>Empresa:</strong> ${data.empresa || "No especificada"}</p>
          <p><strong>Asunto:</strong> ${data.asunto}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${data.mensaje.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Resend respondió ${res.status}: ${body}`);
    }

    return { ok: true };
  });
