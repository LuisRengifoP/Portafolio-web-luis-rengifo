import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import bgc from "@/assets/project-bgc.jpg";
import etl from "@/assets/ETL.jpg";
import dash from "@/assets/project-dashboard.jpg";
import coords from "@/assets/imgsgbc.jpg";
import { Reveal, Section } from "./primitives";
import { futureProjects, projects } from "@/data/portfolio";

const images: Record<string, string> = {
  "BGC-Appsy": bgc,
  "Sistema ETL": etl,
  "Dashboard Metabase": dash,
  "Desarrollo de Sistema de Agregación de Coordenadas": coords,
};

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Portafolio"
      title="Proyectos destacados"
      subtitle="Soluciones reales de georreferenciación, automatización de datos y analítica de negocio."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                {images[p.name] ? (
                  <img
                    src={images[p.name]}
                    alt={`Vista previa del proyecto ${p.name}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-gradient-brand h-full w-full" />
                )}
                <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-medium">
                  {p.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-muted-foreground flex items-center gap-2 text-sm">
                      <span className="bg-gradient-brand h-1.5 w-1.5 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-white/[0.03] px-2.5 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4">
                  <a
                    href="#contacto"
                    className="bg-gradient-brand inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
                  >
                    Ver Proyecto <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/LuisRengifoP"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href="#proyectos"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="glass mt-14 rounded-3xl p-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-brand-pink h-5 w-5" />
            <h3 className="font-display text-lg font-semibold">Próximos proyectos</h3>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureProjects.map((f) => (
              <div
                key={f}
                className="hover:border-brand-purple/50 rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm transition-colors"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
