import { ArrowUpRight, Award, BookOpen, Calendar, CheckCircle2, MessageSquare } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { blogTopics, certifications, type BlogTopic } from "@/data/portfolio";
import { usePortfolioInteraction } from "@/lib/portfolio-events";
import { cn } from "@/lib/utils";
import { Reveal, Section, StatusBadge } from "./primitives";

export function Certifications() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Certificaciones"
      title="Formación y credenciales"
      subtitle="Acreditaciones oficiales en Business Intelligence, ciencia de datos e inteligencia artificial."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.07}>
            <article className="glass card-hover flex h-full flex-col justify-between rounded-3xl p-6">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="bg-gradient-brand inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {c.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg leading-snug font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                <span>{c.date}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const blogGroups = ["Todos", "BI & Datos", "Desarrollo", "Automatización & IA"] as const;

export function Blog() {
  const [selectedGroup, setSelectedGroup] = useState<string>("Todos");
  const [activeTopic, setActiveTopic] = useState<BlogTopic | null>(null);
  const { requestContact } = usePortfolioInteraction();

  const filteredTopics = useMemo(() => {
    if (selectedGroup === "Todos") return blogTopics;
    return blogTopics.filter((b) => b.group === selectedGroup);
  }, [selectedGroup]);

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Artículos y apuntes técnicos"
      subtitle="Temas prácticos sobre modelado de datos, automatización y arquitectura web. Haz clic en cualquier tarjeta para ver el resumen."
      action={
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filtrar artículos por área"
        >
          {blogGroups.map((group) => {
            const active = selectedGroup === group;
            return (
              <button
                key={group}
                type="button"
                onClick={() => setSelectedGroup(group)}
                aria-pressed={active}
                className={cn(
                  "focus-ring cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all",
                  active
                    ? "bg-gradient-brand shadow-sm"
                    : "border border-border bg-white/[0.03] text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {group}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredTopics.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.04}>
            <button
              type="button"
              onClick={() => setActiveTopic(b)}
              className="glass card-hover focus-ring group flex h-full w-full cursor-pointer flex-col rounded-2xl p-6 text-left"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <span className="text-gradient text-[11px] font-semibold tracking-widest uppercase">
                  {b.tag}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </div>

              <h3 className="mt-3 font-display text-base leading-snug font-semibold text-foreground transition-colors group-hover:text-brand-pink">
                {b.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {b.excerpt}
              </p>

              <div className="mt-5 flex w-full items-center justify-between border-t border-border pt-3.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                  Ver resumen
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px]">
                  Próximamente
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Technical Note Preview Dialog */}
      <Dialog open={!!activeTopic} onOpenChange={(open) => !open && setActiveTopic(null)}>
        <DialogContent className="glass-elevated max-w-lg rounded-3xl border-border-strong p-6 text-foreground sm:p-7">
          {activeTopic && (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gradient font-display text-xs font-semibold tracking-widest uppercase">
                  {activeTopic.tag}
                </span>
                <span className="text-muted-foreground">·</span>
                <StatusBadge label="Apunte en preparación" tone="warning" />
              </div>

              <DialogHeader className="mt-2 text-left">
                <DialogTitle className="font-display text-xl leading-snug font-bold text-foreground sm:text-2xl">
                  {activeTopic.title}
                </DialogTitle>
                <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
                  {activeTopic.excerpt}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Puntos clave que aborda
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeTopic.outline.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.025] p-3 text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap justify-end gap-2.5 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => setActiveTopic(null)}
                  className="btn-ghost focus-ring cursor-pointer rounded-full px-4 py-2 text-sm font-medium"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const topic = activeTopic;
                    setActiveTopic(null);
                    requestContact(
                      `Consulta sobre: ${topic.title}`,
                      `Hola Luis, me interesó el apunte técnico "${topic.title}" (${topic.tag}) y me gustaría conversar al respecto.`,
                    );
                  }}
                  className="btn-primary focus-ring inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
                >
                  <MessageSquare className="h-4 w-4" />
                  Conversar sobre este tema
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
