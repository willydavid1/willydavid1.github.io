import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Animation } from "../animations/animation";

const Hero = () => {
  return (
    <section className="px-8 py-12">
      <Animation in delay={200}>
        <h1 className="text-3xl font-semibold">
          Hello World! <br />{" "}
          <span className="text-xl">
            I&apos;m Willy David, a technology enthusiast.
          </span>
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
        <button
          type="button"
          className="text-white mt-4 flex items-center justify-center w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Learn more about Willy
          <HiOutlineArrowNarrowRight className="ml-3 text-lg" />
        </button>
      </Animation>

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
          className="rounded-[50px] mt-8"
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
                "Apps",
                "Servers",
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
