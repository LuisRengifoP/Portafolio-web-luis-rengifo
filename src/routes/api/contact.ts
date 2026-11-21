import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { contactSchema, type ContactApiResponse } from "@/lib/contact-schema";

const DEFAULT_TO_EMAIL = "nandorengifo07@gmail.com";
const DEFAULT_FROM_EMAIL = "Portafolio LFRP <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let rawBody: unknown;
        try {
          rawBody = await request.json();
        } catch {
          return jsonResponse({ ok: false, error: "Formato JSON inválido." }, 400);
        }

        const parsed = contactSchema.safeParse(rawBody);
        if (!parsed.success) {
          return jsonResponse(
            {
              ok: false,
              error: parsed.error.issues[0]?.message ?? "Revisa los campos del formulario.",
            },
            400,
          );
        }

        const { name, email, subject, message } = parsed.data;
        const apiKey = process.env.RESEND_API_KEY?.trim();

        if (!apiKey) {
          const response: ContactApiResponse = {
            ok: true,
            mode: "direct_channel_ready",
            message:
              "Mensaje validado. Completa el envío por correo o WhatsApp mientras el envío automático por servidor se configura.",
          };
          return jsonResponse(response as unknown as Record<string, unknown>, 200);
        }

        const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;

        try {
          const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [toEmail],
              reply_to: email,
              subject: `[Portafolio] ${subject}`,
              text: `Nuevo mensaje desde el portafolio\n\nNombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
              html: `
                <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111827">
                  <h2 style="margin:0 0 12px">Nuevo mensaje desde tu portafolio</h2>
                  <p style="margin:4px 0"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
                  <p style="margin:4px 0"><strong>Correo:</strong> ${escapeHtml(email)}</p>
                  <p style="margin:4px 0"><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
                  <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
                  <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
                </div>
              `,
            }),
          });

          if (!resendRes.ok) {
            const errText = await resendRes.text();
            console.error("Error enviando correo vía Resend:", resendRes.status, errText);
            return jsonResponse(
              {
                ok: false,
                error: "No se pudo entregar el correo automáticamente. Usa Correo o WhatsApp.",
              },
              502,
            );
          }

          const response: ContactApiResponse = {
            ok: true,
            mode: "email_sent",
            message: "Tu mensaje fue enviado correctamente. Te responderé pronto.",
          };
          return jsonResponse(response as unknown as Record<string, unknown>, 200);
        } catch (error) {
          console.error("Excepción enviando correo:", error);
          return jsonResponse(
            {
              ok: false,
              error: "Error de red al enviar el mensaje. Intenta por Correo o WhatsApp.",
            },
            502,
          );
        }
      },
    },
  },
});
