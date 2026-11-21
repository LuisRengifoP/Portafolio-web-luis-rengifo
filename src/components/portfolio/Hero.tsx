import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Download,
  FolderGit2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import portrait from "@/assets/fotoluisrengifo.jpg";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  profile,
  stats,
  WHATSAPP_URL,
} from "@/data/portfolio";
import { Counter, Reveal, Typing } from "./primitives";

const cornerBadges = [
  { label: "TypeScript · Python", pos: "top-4 -left-4" },
  { label: "Node.js · NestJS", pos: "top-10 -right-4" },
  { label: "React · PostgreSQL", pos: "bottom-5 -left-4" },
  { label: "ETL · Power BI", pos: "bottom-5 -right-4" },
];

const statIcons = [BriefcaseBusiness, FolderGit2, Code2, Award];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      toast.success("Correo copiado al portapapeles", {
        description: CONTACT_EMAIL,
      });
      setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("No se pudo copiar el correo", { description: CONTACT_EMAIL });
    }
  };

  return (
    <section
      id="inicio"
      className="relative mx-auto max-w-6xl px-5 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left column: Value proposition & CTAs */}
        <div>
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponible para nuevos proyectos
              </span>

              <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                {CONTACT_LOCATION}
              </span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-ghost focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                title="Copiar correo electrónico"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Correo copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>{CONTACT_EMAIL}</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-7 text-base font-medium text-muted-foreground sm:text-lg">Hola, soy</p>
            <h1 className="font-display mt-1 text-4xl leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {profile.first}
              <span className="text-gradient mt-1 block">{profile.last}</span>
            </h1>
            <p className="mt-4 font-display text-sm font-medium text-foreground/90 sm:text-base">
              {profile.headline}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 flex min-h-8 items-center">
              <Typing words={profile.typing} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.description}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.description2}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="btn-primary focus-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Ver Proyectos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/CV_LuisRengifoP.pdf"
                download
                onClick={() => toast.success("Descargando CV en PDF")}
                className="btn-secondary focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>

              <a
                href="#contacto"
                className="btn-ghost focus-ring inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium"
              >
                <Mail className="h-4 w-4" />
                Contactar
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-xs font-medium"
                title="Escribir por WhatsApp"
              >
                <Phone className="h-3.5 w-3.5 text-brand-purple" />
                {CONTACT_PHONE}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column: Framed portrait with safe-bounded tech badges */}
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-sm lg:max-w-[23rem]">
          <div className="relative">
            <div
              aria-hidden
              className="bg-gradient-brand absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl"
            />
            <div className="glass-elevated relative rounded-[2rem] p-2.5">
              <div className="relative aspect-[4/4] rounded-[1.45rem] bg-surface">
                <img
                  src={portrait}
                  alt="Retrato profesional de Luis Fernando Rengifo Palacios"
                  width={1024}
                  height={1024}
                  className="h-full w-full rounded-[1.45rem] object-cover object-top"
                />

                {cornerBadges.map((b, i) => (
                  <motion.span
                    key={b.label}
                    className={`glass-elevated pointer-events-none absolute hidden rounded-xl px-3 py-1.5 text-[11px] font-medium whitespace-nowrap text-foreground shadow-lg sm:inline-flex ${b.pos}`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4.5 + i * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.35,
                    }}
                  >
                    {b.label}
                  </motion.span>
                ))}
              </div>

              <div className="mt-2.5 flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/70 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="truncate font-display text-xs font-semibold text-foreground">
                    Software, Datos y Automatización
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    APIs REST · ETL · PostgreSQL · BI
                  </p>
                </div>
                <span className="bg-gradient-brand shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold">
                  2026
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* KPI / Stats Strip */}
      <Reveal delay={0.22}>
        <div className="glass mt-16 grid grid-cols-2 divide-y divide-border rounded-3xl p-6 sm:mt-20 md:grid-cols-4 md:divide-x md:divide-y-0 md:p-8">
          {stats.map((s, i) => {
            const Icon = statIcons[i] ?? Code2;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center px-3 py-4 text-center md:py-2"
              >
                <Icon className="mb-2 h-4 w-4 text-brand-purple" aria-hidden />
                <Counter to={s.value} suffix={s.suffix} />
                <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
