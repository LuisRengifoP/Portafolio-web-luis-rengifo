import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      {(eyebrow || title) && (
        <Reveal className="mb-14 max-w-2xl">
          {eyebrow && (
            <span className="text-gradient font-display text-xs font-semibold tracking-[0.3em] uppercase">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold md:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

/* ---------- Typing effect ---------- */
export function Typing({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const empty = deleting && text === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (empty) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      deleting ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="font-display text-xl font-medium md:text-2xl">
      <span className="text-gradient">{text}</span>
      <span className="caret text-brand-pink">|</span>
    </span>
  );
}

/* ---------- Animated aurora + particle background ---------- */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const count = Math.min(90, Math.floor(w / 16));
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(203,213,225,0.45)";
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="aurora bg-brand-blue/25 absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full blur-[140px]" />
      <div
        className="aurora bg-brand-purple/25 absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-[150px]"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="aurora bg-brand-pink/15 absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[150px]"
        style={{ animationDelay: "6s" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

/* ---------- Custom cursor ---------- */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={dotRef} className="bg-brand-pink absolute h-1.5 w-1.5 rounded-full" />
      <div
        ref={ringRef}
        className="border-brand-purple/60 absolute h-9 w-9 rounded-full border transition-colors"
      />
    </div>
  );
}
