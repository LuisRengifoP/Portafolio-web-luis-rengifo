import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Blog, Certifications } from "@/components/portfolio/Extras";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { AnimatedBackground, BackToTop } from "@/components/portfolio/primitives";
import { Projects } from "@/components/portfolio/Projects";
import { About, Experience, Skills, Technologies } from "@/components/portfolio/Sections";
import { PortfolioInteractionContext } from "@/lib/portfolio-events";

const title =
  "Luis Fernando Rengifo Palacios | Ingeniero de Sistemas · Desarrollador de Software · Datos y Automatización";
const description =
  "Portafolio de Luis Fernando Rengifo Palacios (Envigado, Colombia): Ingeniero de Sistemas, Desarrollador de Software, Datos y Automatización. Experiencia en Node.js, NestJS, React, Python, PostgreSQL, ETL y Power BI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [projectTechFilter, setProjectTechFilter] = useState<string | null>(null);
  const [contactDraft, setContactDraft] = useState<{
    subject: string;
    message?: string;
    nonce: number;
  } | null>(null);

  const requestContact = useCallback((subject: string, message?: string) => {
    setContactDraft({ subject, message, nonce: Date.now() });
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const jumpToProjectsWithTech = useCallback((tech: string) => {
    setProjectTechFilter(tech);
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const contextValue = useMemo(
    () => ({
      projectTechFilter,
      setProjectTechFilter,
      contactDraft,
      requestContact,
      jumpToProjectsWithTech,
    }),
    [projectTechFilter, contactDraft, requestContact, jumpToProjectsWithTech],
  );

  return (
    <PortfolioInteractionContext.Provider value={contextValue}>
      <AnimatedBackground />
      <Navbar />
      <main id="contenido-principal" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Technologies />
        <Projects />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PortfolioInteractionContext.Provider>
  );
}
