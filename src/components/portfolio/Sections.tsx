import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Languages as LangIcon,
  Layers,
  MapPin,
  Search,
  Server,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import portrait from "@/assets/fotoluisrengifo.jpg";
import {
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
  technologyItems,
} from "@/data/portfolio";
import { usePortfolioInteraction } from "@/lib/portfolio-events";
import { cn } from "@/lib/utils";
import { Reveal, Section, StatusBadge } from "./primitives";

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Perfil"
      title="Desarrollo, datos y optimización operativa"
      subtitle="Participación en el ciclo completo de desarrollo: desde el levantamiento de requerimientos y el diseño de datos hasta las pruebas y el despliegue."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* Left: Engineering workflow card */}
        <Reveal>
          <div className="glass-elevated flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7">
            <div>
              <div className="flex items-center gap-3.5 border-b border-border pb-5">
                <img
                  src={portrait}
                  alt="Luis Fernando Rengifo Palacios"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="h-14 w-14 shrink-0 rounded-2xl border border-border-strong object-cover object-top"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold text-foreground">
                    {profile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {profile.location} · {profile.phone}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  <Layers className="h-3.5 w-3.5 text-brand-purple" />
                  <span>Ciclo de desarrollo</span>
                </div>

                <ol className="mt-4 space-y-3.5">
                  {profile.workflow.map((item) => (
                    <li
                      key={item.step}
                      className="flex gap-3.5 rounded-2xl border border-border bg-white/[0.025] p-3.5 transition-colors hover:border-brand-purple/40"
                    >
                      <span className="bg-gradient-brand flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-display text-xs font-bold">
                        {item.step}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Story + Education + Languages */}
        <div className="flex flex-col justify-between gap-8">
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Perfil profesional
            </h3>
            <div className="mt-4 space-y-3.5">
              {profile.story.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold">Formación</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {education.map((e) => (
                    <li key={e.title} className="border-l-2 border-brand-purple/50 pl-3.5">
                      <span className="inline-block rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-brand-pink">
                        {e.period}
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                        {e.title}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-muted-foreground">{e.place}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {e.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple/15 text-brand-purple">
                    <LangIcon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold">Idiomas</h3>
                </div>
                <ul className="mt-5 space-y-5">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{l.name}</span>
                        <span className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted-foreground">
                          {l.level}
                        </span>
                      </div>
                      <div
                        className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10"
                        role="progressbar"
                        aria-label={`Nivel de ${l.name}`}
                        aria-valuenow={l.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="bg-gradient-brand h-full rounded-full transition-all duration-700"
                          style={{ width: `${l.value}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia Laboral"
      title="Trayectoria y resultados"
      subtitle="Impacto medible en desarrollo de plataformas internas, automatización, calidad de datos y soporte."
      action={
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-purple" />
          {experience.length} experiencias registradas
        </span>
      }
    >
      <div className="relative pl-6 sm:pl-8">
        <div
          aria-hidden
          className="bg-gradient-brand absolute top-2 bottom-2 left-2 w-px opacity-50 sm:left-3"
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.year}-${job.company}`} delay={i * 0.06}>
              <article className="relative">
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-7 -left-[22px] h-3.5 w-3.5 rounded-full ring-4 ring-background sm:-left-[26px]",
                    job.current ? "bg-emerald-400" : "bg-gradient-brand",
                  )}
                />

                <div className="glass card-hover rounded-3xl p-6 sm:p-7">
                  <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {job.role}
                        </h3>
                        {job.current && <StatusBadge label="Actual" tone="live" />}
                      </div>
                      <p className="mt-1 flex flex-wrap items-center gap-1.5 text-sm font-medium text-muted-foreground">
                        <span className="text-foreground/90">{job.company}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                          {job.location}
                        </span>
                      </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-border bg-white/[0.04] px-3 py-1 font-display text-xs font-medium text-foreground">
                      {job.year}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.tasks.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple"
                          aria-hidden
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const skillIcons = [Code2, Server, Database, BarChart3, Wrench];

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Stack técnico por categoría"
      subtitle="Lenguajes, frameworks de desarrollo, bases de datos, analítica BI y herramientas de ingeniería."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = skillIcons[i] ?? Code2;
          return (
            <Reveal
              key={g.title}
              delay={i * 0.05}
              className={i === skillGroups.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="glass card-hover flex h-full flex-col rounded-3xl p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                      <p className="text-xs text-muted-foreground">{g.items.length} herramientas</p>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{g.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-brand-purple/50"
                    >
                      <span>{s.name}</span>
                      {s.level && (
                        <span className="rounded bg-brand-purple/20 px-1.5 py-0.5 text-[10px] font-medium text-brand-pink">
                          {s.level}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

const techCategories = [
  "Todas",
  "Lenguajes",
  "Desarrollo",
  "Bases de Datos",
  "Datos y BI",
  "Herramientas",
] as const;

export function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");
  const { jumpToProjectsWithTech } = usePortfolioInteraction();

  const projectTechSet = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t.toLowerCase())));
    return set;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return technologyItems.filter((item) => {
      const matchCat = selectedCategory === "Todas" || item.category === selectedCategory;
      const matchQuery =
        !q || item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, query]);

  return (
    <Section
      id="tecnologias"
      eyebrow="Tecnologías"
      title="Explorador interactivo del stack"
      subtitle="Filtra por área o haz clic en una tecnología destacada para ver los proyectos donde la utilizo."
    >
      <div className="glass rounded-3xl p-5 sm:p-7">
        {/* Filter bar */}
        <div className="flex flex-col gap-4 border-b border-border pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filtrar tecnologías por categoría"
          >
            {techCategories.map((cat) => {
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
          </div>

          <div className="relative w-full lg:w-64">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar tecnología..."
              aria-label="Buscar tecnología"
              className="focus-ring h-9 w-full rounded-xl border border-border-strong bg-background/60 pr-8 pl-9 text-sm text-foreground placeholder:text-muted-foreground"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda de tecnología"
                className="focus-ring absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-md p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {filtered.map((item) => {
              const hasProjects = projectTechSet.has(item.name.toLowerCase());
              if (hasProjects) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => jumpToProjectsWithTech(item.name)}
                    title={`Filtrar proyectos que usan ${item.name}`}
                    className="btn-secondary focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
                  >
                    <span>{item.name}</span>
                    {"level" in item && item.level && (
                      <span className="rounded bg-brand-purple/20 px-1.5 py-0.5 text-[10px] text-brand-pink">
                        {item.level}
                      </span>
                    )}
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-purple transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                );
              }
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  <span>{item.name}</span>
                  {"level" in item && item.level && (
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-foreground/80">
                      {item.level}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-10 text-center">
            <p className="text-sm text-muted-foreground">
              No se encontraron tecnologías para “{query}”.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Todas");
                setQuery("");
              }}
              className="btn-secondary focus-ring mt-3 cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        <p className="mt-5 text-xs text-muted-foreground">
          Mostrando <span className="font-medium text-foreground">{filtered.length}</span> de{" "}
          {technologyItems.length} tecnologías · Los elementos con{" "}
          <ArrowUpRight className="inline h-3 w-3 text-brand-purple" /> filtran directamente los
          proyectos relacionados.
        </p>
      </div>
    </Section>
  );
}
