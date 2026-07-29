import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import portrait from "@/assets/fotoluisrengifo.jpg";
import { Counter, Reveal, Typing } from "./primitives";
import { floatingTech, profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-44">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div>
          <Reveal>
            <span className="glass text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase">
              <span className="bg-brand-pink h-1.5 w-1.5 rounded-full" />
              Disponible para nuevos proyectos
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-muted-foreground mt-8 text-lg">Hola, soy</p>
            <h1 className="font-display mt-1 text-5xl leading-[0.95] font-bold md:text-7xl">
              {profile.first}
              <span className="text-gradient block">{profile.last}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.roles.map((r) => (
                <span
                  key={r}
                  className="glass text-muted-foreground rounded-full px-3 py-1 text-xs md:text-sm"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 h-9">
              <Typing words={profile.typing} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
              {profile.description}
            </p>
            <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed">
              {profile.description2}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]"
              >
                Ver Proyectos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/CV_LuisRengifoP.pdf"
                download
                className="glass hover:border-brand-purple/50 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                <Download className="h-4 w-4" /> Descargar CV
              </a>
              <a
                href="mailto:nandorengifo07@gmail.com"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                <Mail className="h-4 w-4" /> Contactarme
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square">
            <div className="bg-gradient-brand absolute inset-0 rounded-full opacity-40 blur-3xl" />
            <div className="bg-gradient-brand relative h-full w-full rounded-full p-[3px] glow-ring">
              <img
                src={portrait}
                alt="Retrato profesional de Luis Fernando Rengifo Palacios"
                width={1024}
                height={1024}
                className="bg-surface h-full w-full rounded-full object-cover"
              />
            </div>

            {floatingTech.map((t, i) => {
              const angle = (i / floatingTech.length) * Math.PI * 2;
              const radius = 54;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <motion.span
                  key={t}
                  className="glass absolute rounded-xl px-3 py-1.5 text-[11px] font-medium whitespace-nowrap"
                  style={{ left: `${x}%`, top: `${y}%`, translate: "-50% -50%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + (i % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.25,
                  }}
                >
                  {t}
                </motion.span>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <div className="glass mt-24 grid grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground mt-1 text-sm tracking-wide">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
