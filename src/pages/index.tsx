import { Open_Sans } from "next/font/google";

import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Head from "next/head";
import Footer from "@/components/footer/footer";

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
          <title>Willy David Da Conceicao - Portfolio 🚀</title>
          <meta
            name="description"
            content="Willy David Da Conceicao Lozada's portfolio showcases my projects, experience, and skills. Get to know who I am and my projects."
          />
          <link rel="icon" type="image/png" href="/images/logoWilly.png" />
        </Head>

        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
