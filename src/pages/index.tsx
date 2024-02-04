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
import Script from "next/script";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function Home() {
  return (
    <>
      <Script id="ms-clarity">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "khi8qnr6sc");`}
      </Script>
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
