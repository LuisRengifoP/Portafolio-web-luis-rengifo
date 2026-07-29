import { GraduationCap, Languages as LangIcon } from "lucide-react";
import portrait from "@/assets/fotoluisrengifo.jpg";
import { Reveal, Section } from "./primitives";
import {
  education,
  experience,
  languages,
  profile,
  skillGroups,
  technologies,
} from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Datos, código y decisiones inteligentes"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="glass card-hover overflow-hidden rounded-3xl p-2">
            <img
              src={portrait}
              alt="Luis Fernando Rengifo Palacios en sesión fotográfica profesional"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full rounded-[1.35rem] object-cover"
            />
          </div>
        </Reveal>

        <div>
          <div className="space-y-4">
            {profile.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-muted-foreground leading-relaxed md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <GraduationCap className="text-brand-blue h-5 w-5" />
                <h3 className="mt-3 text-lg font-semibold">Educación</h3>
                <ul className="mt-4 space-y-4">
                  {education.map((e) => (
                    <li key={e.title}>
                      <p className="font-medium">{e.title}</p>
                      <p className="text-muted-foreground text-sm">{e.place}</p>
                      <span className="text-brand-pink text-xs">{e.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <LangIcon className="text-brand-purple h-5 w-5" />
                <h3 className="mt-3 text-lg font-semibold">Idiomas</h3>
                <ul className="mt-4 space-y-5">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <div className="flex justify-between text-sm">
                        <span>{l.name}</span>
                        <span className="text-muted-foreground">{l.level}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <div
                          className="bg-gradient-brand h-full rounded-full"
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
      eyebrow="Trayectoria"
      title="Experiencia profesional"
      subtitle="Un recorrido por los roles donde he aportado análisis, procesos y tecnología."
    >
      <div className="relative">
        <div className="bg-gradient-brand absolute top-0 bottom-0 left-3 w-px opacity-60 md:left-1/2" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.year}-${job.company}`} delay={i * 0.08}>
              <div
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`bg-gradient-brand absolute top-6 left-[5px] h-3 w-3 rounded-full ring-4 ring-background md:left-auto ${
                    i % 2 === 0 ? "md:-right-[6px]" : "md:-left-[6px]"
                  }`}
                />
                <div className="glass card-hover rounded-2xl p-6">
                  <span className="text-gradient font-display text-sm font-semibold tracking-widest">
                    {job.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">{job.company}</h3>
                  <p className="text-muted-foreground text-sm">{job.role}</p>
                  <ul
                    className={`mt-4 flex flex-wrap gap-2 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {job.tasks.map((t) => (
                      <li
                        key={t}
                        className="text-muted-foreground rounded-full border border-border px-3 py-1 text-xs"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Stack técnico por especialidad"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.07}>
            <div className="glass card-hover h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-brand h-8 w-1 rounded-full" />
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="hover:border-brand-purple/60 rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Technologies() {
  return (
    <Section
      id="tecnologias"
      eyebrow="Tecnologías"
      title="Herramientas que uso a diario"
    >
      <div className="flex flex-wrap gap-3">
        {technologies.map((t, i) => (
          <Reveal key={t} delay={i * 0.02} y={12}>
            <span className="glass card-hover inline-flex rounded-xl px-4 py-2.5 text-sm font-medium">
              {t}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
