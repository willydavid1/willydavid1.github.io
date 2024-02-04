// Libs
import { Open_Sans } from "next/font/google";
import Head from "next/head";

// Components
import Biography from "@/components/biography/biography";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function Home() {
  return (
    <>
      <main
        className={`min-h-screen container max-w-4xl mx-auto ${openSansFont.className} font-opensans`}
      >
        <Head>
          <title>Willy David Da Conceicao - Portafolio 🚀</title>
          <meta
            name="description"
            content="Portafolio de Willy David Da Conceicao Lozada destaca proyectos, experiencia y habilidades. Conoce quién soy y mis proyectos."
          />
          <link rel="icon" type="image/png" href="/images/logoWilly.png" />
        </Head>

        <Hero />
        <Biography />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
