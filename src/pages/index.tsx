import { Open_Sans } from "next/font/google";

import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Head from "next/head";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function Home() {
  return (
    <main className={`min-h-screen ${openSansFont.className} font-opensans`}>
      {/* <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-4xl">🚧 WIP</h1>
        <p className="mt-12 text-base">Last updated on 10/05/2023</p>
      </div> */}

      <Head>
        <title>Willy David Da Conceicao - Portfolio 🚀</title>
        <meta
          name="description"
          content="Willy David Da Conceicao Lozada's portfolio showcases my projects, experience, and skills. Get to know who I am and my projects."
        />
      </Head>

      <Hero />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
