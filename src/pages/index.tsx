// Libs
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

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
        <div className="mb-12 scroll-m-12" id="rag">
          <h2 className="text-3xl mb-6 font-semibold text-center md:text-left">
            Chatea conmigo
          </h2>

          <div
            id="iframeChatbotPicassoia"
            className="rounded-3xl overflow-hidden max-w-xl h-[500px] mx-auto"
          >
            <iframe
              src="https://picassoia.com/chatbot-iframe?uid=yxbtT8Bq6neUZwO1NxwUz5ADx8q2&chatbot_id=13360cf7-351d-4427-87f4-0644de85c88f"
              width="100%"
              style={{ height: "100%" }}
              frameBorder={0}
            />
          </div>

          <div className="flex items-center justify-center mt-4">
            <FaInfoCircle className="mr-2 text-gray-400" />
            <p className="text-gray-400">
              Creado con
              <a
                href="https://picassoia.com/generator/en/business"
                rel="noopener noreferrer"
                target="_blank"
                className="pl-1 text-blue-300 underline items-center justify-center inline-flex"
              >
                Picasso IA para empresas
                <HiOutlineExternalLink className="ml-1" />
              </a>
            </p>
          </div>
        </div>

        <Skills />
      </main>
      <Footer />
    </>
  );
}
