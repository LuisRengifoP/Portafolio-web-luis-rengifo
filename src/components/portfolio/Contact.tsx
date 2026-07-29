import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Reveal, Section } from "./primitives";
import { profile, socials } from "@/data/portfolio";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  correo: z.string().trim().email("Correo inválido").max(255),
  empresa: z.string().trim().max(120).optional(),
  asunto: z.string().trim().min(3, "Ingresa un asunto").max(150),
  mensaje: z.string().trim().min(10, "Cuéntame un poco más").max(1000),
});

const fields = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "correo", label: "Correo", type: "email" },
  { name: "empresa", label: "Empresa", type: "text" },
  { name: "asunto", label: "Asunto", type: "text" },
] as const;

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (next[String(i.path[0])] = i.message));
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: parsed.data.nombre,
          from_email: parsed.data.correo,
          empresa: parsed.data.empresa || "No especificada",
          subject: parsed.data.asunto,
          message: parsed.data.mensaje,
          to_name: "Luis",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      form.reset();
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Te responderé lo antes posible.",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error desconocido";
      toast.error("Error al enviar el mensaje", {
        description: msg,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Construyamos algo juntos"
      subtitle="Cuéntame sobre tu proyecto y te respondo lo antes posible."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="text-muted-foreground text-sm">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    maxLength={255}
                    className="focus:border-brand-purple mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors"
                  />
                  {errors[f.name] && (
                    <p className="text-brand-pink mt-1 text-xs">{errors[f.name]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label htmlFor="mensaje" className="text-muted-foreground text-sm">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                maxLength={1000}
                className="focus:border-brand-purple mt-2 w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors"
              />
              {errors.mensaje && <p className="text-brand-pink mt-1 text-xs">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-brand mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="font-display text-lg font-semibold">Redes sociales</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              También puedes encontrarme en estos canales.
            </p>
            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:border-brand-purple/60 flex items-center justify-between rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm transition-colors"
                  >
                    {s.name}
                    <span className="text-muted-foreground">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-semibold">{profile.name}</h3>
          <div className="text-muted-foreground mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
            {profile.roles.slice(0, 4).map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
          <p className="text-muted-foreground mt-5 max-w-md text-sm italic">
            “Transformando datos en soluciones tecnológicas de alto impacto.”
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:items-end">
          <div className="flex flex-wrap gap-3 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-xs">
            © 2026 {profile.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
