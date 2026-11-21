import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Download, Menu, MessageSquare, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CONTACT_EMAIL, navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ScrollProgressBar } from "./primitives";

const trackedIds = [
  "inicio",
  "sobre-mi",
  "experiencia",
  "habilidades",
  "tecnologias",
  "proyectos",
  "certificaciones",
  "blog",
  "contacto",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id === "tecnologias" ? "habilidades" : e.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -52% 0px" },
    );
    trackedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      toast.success("Correo copiado al portapapeles", {
        description: CONTACT_EMAIL,
      });
      setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("No se pudo copiar automáticamente", {
        description: CONTACT_EMAIL,
      });
    }
  };

  return (
    <>
      <a
        href="#contenido-principal"
        className="btn-primary focus-ring sr-only fixed top-4 left-4 z-[70] rounded-full px-4 py-2 text-sm font-medium focus:not-sr-only"
      >
        Saltar al contenido principal
      </a>

      <ScrollProgressBar />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <nav
          aria-label="Navegación principal"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled ? "glass-elevated" : "border border-transparent bg-transparent",
          )}
          style={{ width: "min(100% - 1.5rem, 72rem)" }}
        >
          <a
            href="#inicio"
            className="focus-ring font-display inline-flex items-center gap-2 rounded-lg px-1.5 py-1 text-sm font-semibold tracking-wider"
          >
            <span className="bg-gradient-brand flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold">
              LR
            </span>
            <span>
              LFRP<span className="text-gradient">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "focus-ring relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="border-border-strong absolute inset-0 -z-10 rounded-full border bg-white/[0.08]"
                      />
                    )}
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              title={`Copiar correo: ${CONTACT_EMAIL}`}
              aria-label={`Copiar correo electrónico ${CONTACT_EMAIL}`}
              className="btn-ghost focus-ring hidden h-9 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium xl:inline-flex"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Correo</span>
                </>
              )}
            </button>

            <a
              href="#contacto"
              aria-current={active === "contacto" ? "page" : undefined}
              className="btn-primary focus-ring hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium sm:inline-flex"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Hablemos
            </a>

            <button
              type="button"
              aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              onClick={() => setOpen((v) => !v)}
              className="btn-secondary focus-ring inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-xs lg:hidden"
                aria-hidden
              />
              <motion.div
                id="mobile-nav-menu"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-6xl lg:hidden"
              >
                <div className="glass-elevated rounded-2xl p-4">
                  <ul className="grid grid-cols-2 gap-1.5">
                    {navItems.map((n) => {
                      const isActive = active === n.id;
                      return (
                        <li key={n.id}>
                          <a
                            href={`#${n.id}`}
                            onClick={() => setOpen(false)}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                              "focus-ring block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                              isActive
                                ? "border border-brand-purple/40 bg-white/[0.08] text-foreground"
                                : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
                            )}
                          >
                            {n.label}
                          </a>
                        </li>
                      );
                    })}
                    <li>
                      <a
                        href="#tecnologias"
                        onClick={() => setOpen(false)}
                        className="focus-ring block rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
                      >
                        Tecnologías
                      </a>
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    <a
                      href="#contacto"
                      onClick={() => setOpen(false)}
                      className="btn-primary focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Hablemos
                    </a>
                    <a
                      href="/CV_LuisRengifoP.pdf"
                      download
                      onClick={() => {
                        setOpen(false);
                        toast.success("Descargando CV en PDF");
                      }}
                      className="btn-secondary focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
                    >
                      <Download className="h-4 w-4" />
                      CV PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
