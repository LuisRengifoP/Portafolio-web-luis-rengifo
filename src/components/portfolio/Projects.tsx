import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Lock,
  MessageSquare,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import bgc from "@/assets/project-bgc.jpg";
import etl from "@/assets/ETL.jpg";
import dash from "@/assets/project-dashboard.jpg";
import coords from "@/assets/imgsgbc.jpg";
import appsyone from "@/assets/project-appsyone.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { futureProjects, projects, type ProjectItem } from "@/data/portfolio";
import { usePortfolioInteraction } from "@/lib/portfolio-events";
import { cn } from "@/lib/utils";
import { Reveal, Section, StatusBadge } from "./primitives";

const images: Record<string, string> = {
  AppsyOne: appsyone,
  "BGC-Appsy": bgc,
  "ETL de Conciliación de Inventarios": etl,
  "Dashboard Metabase": dash,
  "SBCG – Sistema de Búsqueda de Coordenadas Geográficas": coords,
};

const categories = [
  "Todos",
  "Full Stack",
  "Georreferenciación",
  "Datos & ETL",
  "Business Intelligence",
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const { projectTechFilter, setProjectTechFilter, requestContact } = usePortfolioInteraction();

  const filteredProjects = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCategory = selectedCategory === "Todos" || p.category === selectedCategory;
      const matchTech =
        !projectTechFilter ||
        p.tech.some((t) => t.toLowerCase() === projectTechFilter.toLowerCase());
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchCategory && matchTech && matchQuery;
    });
  }, [selectedCategory, search, projectTechFilter]);

  const hasActiveFilters =
    selectedCategory !== "Todos" || search.trim() !== "" || projectTechFilter !== null;

  const resetFilters = () => {
    setSelectedCategory("Todos");
    setSearch("");
    setProjectTechFilter(null);
  };

  return (
    <Section
      id="proyectos"
      eyebrow="Portafolio"
      title="Proyectos destacados"
      subtitle="Soluciones reales de georreferenciación, automatización de datos, plataformas internas y analítica de negocio."
      action={
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
          <Layers className="h-3.5 w-3.5 text-brand-purple" />
          {filteredProjects.length} de {projects.length} proyectos
        </span>
      }
    >
      {/* Filter & Search Toolbar */}
      <Reveal className="mb-8">
        <div className="glass flex flex-col gap-4 rounded-2xl p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap items-center gap-1.5"
            role="group"
            aria-label="Categorías de proyecto"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={cn(
                    "focus-ring cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all",
                    active
                      ? "bg-gradient-brand shadow-sm"
                      : "border border-border bg-white/[0.03] text-muted-foreground hover:border-border-strong hover:text-foreground",
                  )}
                >
                  {cat}
                </button>
              );
            })}

            {projectTechFilter && (
              <button
                type="button"
                onClick={() => setProjectTechFilter(null)}
                className="focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-brand-purple/50 bg-brand-purple/20 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-brand-purple/30"
                title="Quitar filtro por tecnología"
              >
                <span>Tech: {projectTechFilter}</span>
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full lg:w-64">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar proyecto o stack..."
                aria-label="Buscar proyecto o tecnología"
                className="focus-ring h-9 w-full rounded-xl border border-border-strong bg-background/60 pr-8 pl-9 text-sm text-foreground placeholder:text-muted-foreground"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Limpiar búsqueda"
                  className="focus-ring absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-md p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="btn-ghost focus-ring shrink-0 cursor-pointer rounded-xl px-3 py-2 text-xs font-medium"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => {
            const isManual = p.repoLabel === "Manual técnico";
            return (
              <Reveal key={p.name} delay={i * 0.06}>
                <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                  {/* Clickable preview header */}
                  <button
                    type="button"
                    onClick={() => setActiveProject(p)}
                    aria-label={`Abrir detalles del proyecto ${p.name}`}
                    className="focus-ring relative aspect-[16/10] w-full cursor-pointer overflow-hidden text-left"
                  >
                    {images[p.name] ? (
                      <img
                        src={images[p.name]}
                        alt={`Vista previa del proyecto ${p.name}`}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-gradient-brand h-full w-full" />
                    )}
                    <div
                      aria-hidden
                      className="from-background via-background/25 absolute inset-0 bg-gradient-to-t to-transparent"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                      <StatusBadge label={p.status} tone={p.statusTone} />
                      <span className="rounded-full border border-white/15 bg-background/75 px-2.5 py-1 text-[10px] font-medium text-foreground backdrop-blur-md">
                        {p.category}
                      </span>
                    </div>
                  </button>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="focus-ring w-fit cursor-pointer rounded-md text-left"
                      >
                        <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-brand-pink">
                          {p.name}
                        </h3>
                      </button>
                      {p.cvFeatured && (
                        <span className="shrink-0 rounded-full border border-brand-purple/40 bg-brand-purple/15 px-2.5 py-0.5 text-[10px] font-medium text-brand-pink">
                          Destacado CV
                        </span>
                      )}
                    </div>

                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                        >
                          <span
                            className="bg-gradient-brand h-1.5 w-1.5 shrink-0 rounded-full"
                            aria-hidden
                          />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setProjectTechFilter(t)}
                          title={`Filtrar proyectos con ${t}`}
                          className={cn(
                            "focus-ring cursor-pointer rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors",
                            projectTechFilter?.toLowerCase() === t.toLowerCase()
                              ? "border-brand-purple/60 bg-brand-purple/25 text-foreground"
                              : "border-border bg-white/[0.03] text-muted-foreground hover:border-border-strong hover:text-foreground",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-5">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="btn-primary focus-ring inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
                      >
                        Ver detalles
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>

                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary focus-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
                        >
                          {isManual ? (
                            <FileText className="h-3.5 w-3.5" />
                          ) : (
                            <Github className="h-3.5 w-3.5" />
                          )}
                          {p.repoLabel ?? "GitHub"}
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            requestContact(
                              `Consulta sobre ${p.name}`,
                              `Hola Luis, me interesa conocer más detalles o solicitar una demostración sobre el proyecto ${p.name}.`,
                            )
                          }
                          className="btn-secondary focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          Solicitar demo
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      ) : (
        <div className="glass flex flex-col items-center justify-center rounded-3xl border-dashed py-14 text-center">
          <p className="font-display text-base font-semibold text-foreground">
            No hay proyectos que coincidan con los filtros actuales
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Prueba otra categoría o limpia la búsqueda para ver los {projects.length} proyectos.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="btn-primary focus-ring mt-5 cursor-pointer rounded-full px-5 py-2 text-xs font-medium"
          >
            Ver todos los proyectos
          </button>
        </div>
      )}

      {/* Roadmap / Upcoming Projects */}
      <Reveal delay={0.1}>
        <div className="glass mt-14 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-pink/15 text-brand-pink">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">Próximos proyectos</h3>
                <p className="text-xs text-muted-foreground">
                  Iniciativas en hoja de ruta y evolución continua
                </p>
              </div>
            </div>
            <span className="w-fit rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground">
              {futureProjects.length} en roadmap
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureProjects.map((f) => (
              <div
                key={f.name}
                className="flex flex-col justify-between gap-2 rounded-2xl border border-border bg-white/[0.025] p-4 transition-colors hover:border-brand-purple/45"
              >
                <span className="text-sm font-medium text-foreground">{f.name}</span>
                <span className="w-fit rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {f.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Project Detail Modal */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="glass-elevated flex max-h-[90vh] max-w-2xl flex-col gap-0 overflow-hidden rounded-3xl border-border-strong p-0 text-foreground">
          {activeProject && (
            <div className="overflow-y-auto">
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-surface">
                {images[activeProject.name] && (
                  <img
                    src={images[activeProject.name]}
                    alt={`Vista previa ampliada de ${activeProject.name}`}
                    className="h-full w-full object-cover"
                  />
                )}
                <div
                  aria-hidden
                  className="from-background/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
                />
              </div>

              <div className="space-y-6 p-6 sm:p-7">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <StatusBadge label={activeProject.status} tone={activeProject.statusTone} />
                    <span className="rounded-full border border-border-strong bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground">
                      {activeProject.category}
                    </span>
                    {!activeProject.github && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" /> Código privado
                      </span>
                    )}
                  </div>

                  <DialogHeader className="text-left">
                    <DialogTitle className="font-display text-2xl font-bold text-foreground">
                      {activeProject.name}
                    </DialogTitle>
                    <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {activeProject.description}
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Capacidades principales
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {activeProject.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 rounded-xl border border-border bg-white/[0.025] p-3 text-sm text-foreground/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Tecnologías utilizadas
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setProjectTechFilter(t);
                          setActiveProject(null);
                        }}
                        className="btn-secondary focus-ring cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 border-t border-border pt-5">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary focus-ring inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                    >
                      {activeProject.repoLabel === "Manual técnico" ? (
                        <FileText className="h-4 w-4" />
                      ) : (
                        <Github className="h-4 w-4" />
                      )}
                      {activeProject.repoLabel ?? "Ver en GitHub"}
                      <ExternalLink className="h-3.5 w-3.5 opacity-75" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      const project = activeProject;
                      setActiveProject(null);
                      requestContact(
                        `Consulta sobre ${project.name}`,
                        `Hola Luis, revisé el proyecto "${project.name}" en tu portafolio y me gustaría conversar sobre su implementación o una solución similar.`,
                      );
                    }}
                    className="btn-primary focus-ring inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Consultar sobre este proyecto
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
