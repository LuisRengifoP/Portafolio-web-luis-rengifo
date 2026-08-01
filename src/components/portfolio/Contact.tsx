import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { profile, socials } from "@/data/portfolio";

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  Correo: Mail,
  WhatsApp: MessageCircle,
};

const socialLabels: Record<string, string> = {
  LinkedIn: "Perfil profesional",
  GitHub: "Repositorios y código",
  Instagram: "Un vistazo a mi día a día",
  Correo: "nandorengifo07@gmail.com",
  WhatsApp: "Respuesta rápida",
};

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Construyamos algo juntos"
      subtitle="¿Tienes una idea, un proyecto o una oportunidad laboral? Hablemos por cualquiera de estos canales."
    >
      <Reveal>
        <div className="glass card-hover overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">
                Hablemos de tu <span className="text-gradient">próximo proyecto</span>
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Estoy disponible para colaborar en proyectos de desarrollo, análisis de datos y
                automatización de procesos. Contáctame por el canal que prefieras:
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:nandorengifo07@gmail.com"
                  className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" /> Escríbeme
                </a>
                <a
                  href="https://wa.me/573146963901"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.name] ?? ArrowUpRight;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group hover:border-brand-purple/60 flex items-center gap-4 rounded-2xl border border-border bg-white/[0.03] p-5 transition-colors"
                  >
                    <span className="bg-gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{s.name}</span>
                      <span className="text-muted-foreground block truncate text-xs">
                        {socialLabels[s.name] ?? "Conectemos"}
                      </span>
                    </span>
                    <ArrowUpRight className="text-muted-foreground h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
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
