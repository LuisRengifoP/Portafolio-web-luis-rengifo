import { Award, BookOpen } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { blogTopics, certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Certificaciones"
      title="Formación y credenciales"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="glass card-hover h-full rounded-2xl p-6">
              <div className="bg-gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg leading-snug font-semibold">{c.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Blog() {
  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Artículos y apuntes técnicos"
      subtitle="Aprendizajes sobre datos, desarrollo y automatización."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogTopics.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
              <span className="text-gradient text-xs font-semibold tracking-widest uppercase">
                {b.tag}
              </span>
              <h3 className="mt-3 text-base leading-snug font-semibold">{b.title}</h3>
              <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                {b.excerpt}
              </p>
              <span className="text-muted-foreground mt-4 inline-flex items-center gap-1.5 text-xs">
                <BookOpen className="h-3.5 w-3.5" /> Próximamente
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
