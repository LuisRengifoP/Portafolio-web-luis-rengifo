import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
        style={{ width: "min(100% - 2rem, 72rem)" }}
      >
        <a href="#inicio" className="font-display text-sm font-semibold tracking-widest">
          LFRP<span className="text-gradient">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active === n.id
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="bg-gradient-brand hidden rounded-full px-4 py-2 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform hover:scale-105 sm:inline-flex"
          >
            Hablemos
          </a>
          <button
            aria-label="Abrir menú"
            className="rounded-lg border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-[calc(100%-2rem)] max-w-6xl lg:hidden">
          <ul className="glass grid grid-cols-2 gap-1 rounded-2xl p-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground block rounded-lg px-3 py-2 text-sm"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
