import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { Animation } from "../animations/animation";

const Hero = () => {
  return (
    <section className="px-8 py-12 md:space-x-24 md:flex md:justify-center md:items-center">
      <div>
        <Animation in delay={200}>
          <h1 className="text-3xl font-semibold">
            ¿Quién es Willy David Da Conceicao? <br />
          </h1>
        </Animation>

        <Animation
          in
          delay={600}
          from={{
            transform: "translateY(50px)",
          }}
          to={{
            transform: "translateY(0px)",
          }}
        >
          <a
            href="#biography"
            type="button"
            className="text-white mt-4 flex items-center justify-center w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Ver más sobre Willy
            <HiOutlineArrowNarrowRight className="ml-3 text-lg" />
          </a>
        </Animation>
        <Animation
          in
          delay={800}
          from={{
            transform: "translateY(50px)",
          }}
          to={{
            transform: "translateY(0px)",
          }}
        >
          <a
            href="#projects"
            type="button"
            className="hover:bg-white hover:text-main transition-colors text-white mt-4 flex items-center justify-center w-full border focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Ver proyectos
            <HiOutlineArrowNarrowRight className="ml-3 text-lg" />
          </a>
        </Animation>
        <Animation
          in
          delay={900}
          from={{
            transform: "translateY(50px)",
          }}
          to={{
            transform: "translateY(0px)",
          }}
        >
          <a
            href="#iframeChatbotPicassoia"
            type="button"
            className="hover:bg-white hover:text-main transition-colors text-white mt-4 flex items-center justify-center w-full border focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Chatbot IA con datos de Willy
            <HiOutlineArrowNarrowRight className="ml-3 text-lg" />
          </a>
          <p className="text-xs flex items-center text-gray-400">
            <FaInfoCircle className="mr-2" />
            Chatbot IA entrenado con datos de Willy de este portafolio.
          </p>
        </Animation>
      </div>

      <Animation
        in
        delay={1000}
        from={{
          transform: "translateY(50px)",
        }}
        to={{
          transform: "translateY(0px)",
        }}
        className="relative"
      >
        <Image
          src="/images/willy-image.jpg"
          className="rounded-[50px] mt-8 md:mt-0"
          width={500}
          height={500}
          alt="Picture of Willy David"
        />
        <div className="bg-main px-8 py-0.5 rounded-full text-sm font-semibold text-white absolute right-5 bottom-4">
          <Typewriter
            options={{
              strings: [
                "Autodidact",
                "Innovator",
                "Developer",
                "Frontend",
                "Backend",
                "Code",
                "AI",
                "Blockchain",
                "Apps",
                "Crypto",
                "3D Modeling",
                "Serverless",
                "Python",
                "Typescript",
                "Javascript",
                "Product Development",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Animation>
    </section>
  );
};

export default Hero;
