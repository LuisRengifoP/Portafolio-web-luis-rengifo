import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground, CustomCursor } from "@/components/portfolio/primitives";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Experience, Skills, Technologies } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Blog, Certifications } from "@/components/portfolio/Extras";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Luis Fernando Rengifo Palacios | Ingeniero de Sistemas & BI Developer";
const description =
  "Portafolio de Luis Fernando Rengifo Palacios: Ingeniero de Sistemas, Data Analyst, BI Developer y Full Stack Developer. Proyectos de datos, automatización y desarrollo web.";

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
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <main>
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
    </>
  );
}
