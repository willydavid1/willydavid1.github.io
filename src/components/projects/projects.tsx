import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useScroll } from "react-use-gesture";
import clsx from "clsx";
import { Animation } from "../animations/animation";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [itemSelected, setItemSelected] = useState({
    item: null,
    index: -1,
  });
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const clamp = (value: number, clampAt: number = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  const handleSelectItem = (data: any) => {
    setItemSelected(data);
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        handleSelectItem({ item: items[0], index: 0 });
      }, 3000);
    }
  }, [inView]);

  return (
    <section className="mt-12 mb-8" id="projects">
      <h2 className="text-3xl mb-3 font-semibold text-center px-4 md:text-left">
        Proyectos
      </h2>

      <div
        className="section relative flex flex-nowrap overflow-x-scroll space-x-6 py-6 px-4"
        ref={ref}
        {...bind()}
      >
        {items.map((item, i) => {
          const isActive = itemSelected.index === i;
          return (
            <animated.div
              key={i}
              style={style}
              className={clsx(
                "flex-shrink-0 rounded-3xl overflow-hidden relative cursor-pointer md:flex",
                {}
              )}
              onClick={() => handleSelectItem({ item, index: i })}
            >
              <div className="relative">
                <Image
                  width={208}
                  height={208}
                  src={item.imageSrc}
                  alt={`icon ${item.title}`}
                />

                <p className="absolute bottom-2.5 right-2 flex items-center justify-center rounded-xl bg-white px-2 py-1 text-xs font-bold text-main">
                  {item.title}
                  {!isActive && (
                    <HiOutlineArrowNarrowRight className="ml-1 text-xl" />
                  )}
                </p>
              </div>
              {isActive && (
                <Animation
                  in
                  className="bg-white p-3 w-52 text-main relative md:w-72"
                >
                  <p className="text-xs mb-2 md:text-xs">{item.description}</p>
                  <div className="md:flex md:items-end md:justify-end">
                    <p className="bg-yellow-500 text-black text-xs p-1 px-5 rounded-full inline uppercase font-semibold">
                      {item.label}
                    </p>
                  </div>
                </Animation>
              )}
            </animated.div>
          );
        })}
      </div>

      <style jsx>
        {`
          .section::-webkit-scrollbar {
            height: 11px;
          }

          .section::-webkit-scrollbar-track {
            background-color: #414141;
            border-radius: 100px;
          }

          .section::-webkit-scrollbar-thumb {
            background-color: #a8caba;
            border-radius: 100px;
          }
        `}
      </style>
    </section>
  );
};

const items = [
  {
    imageSrc: "/images/projects/foodko.jpg",
    title: "Foodko",
    description:
      "Foodko.co is an application that allows you to order and customize your food in 3D for home delivery within minutes. You can also be part of the metaverse and NFTs with Foodko by creating and collecting digital burgers. Foodko offers a new and amazing consumer experience by giving you the power to customize your burgers in a real-time 3D model.",
    label: "App - Web",
  },
  {
    imageSrc: "/images/projects/picassoIA.jpg",
    title: "Picasso IA",
    description:
      "Picassoia.com is the Netflix of AI, all AIs in one app, it's an app that offers an AI-powered image generator. You can create works of art or converse with famous people using the power of AI. You just have to write a text and see what the AI draws for you.",
    label: "App - Web",
  },
  {
    imageSrc: "/images/projects/saxior.jpg",
    title: "Saxior",
    description:
      "Saxior.com is an app that is revolutionizing the way we buy clothes with artificial intelligence. With Saxior, you can buy a t-shirt with your favorite and unique design created with artificial intelligence.",
    label: "App - Web",
  },
  {
    imageSrc: "/images/projects/peaceAI.jpg",
    title: "Peace AI",
    description:
      "Peace IA is an app that offers a wide selection of natural and AI-generated relaxing sounds to reduce stress and anxiety. It also provides personalized advice and exercises from AI mental health professionals and athletes to improve emotional and physical well-being, as well as motivational phrases and meditation tools.",
    label: "App",
  },
  {
    imageSrc: "/images/projects/rostroIA.jpg",
    title: "Rostro IA",
    description:
      "Rostro IA is an app that uses advanced AI algorithms to generate unique and highly detailed artwork from any image, allowing you to become a digital artist, create anime avatars, fantasy scenes, NFT art, and more in seconds. You can also share your creations with a community of artists.",
    label: "App",
  },
  {
    imageSrc: "/images/projects/giraffes-nfts.jpg",
    title: "Giraffes 3d",
    description:
      "Giraffes 3d is an NFT collection created from scratch using Blender to model each of the 3D objects and textures for the giraffes. Then each 3D element and texture was rendered to generate as a final result each giraffe with a unique design.",
    label: "NFT collection",
  },
  {
    imageSrc: "/images/projects/koalastv.gif",
    title: "Koalas tv",
    description:
      "Koalas tv is an NFT collection created from scratch using Blender to model each of the 3D objects and textures for the giraffes. Then each 3D element and texture was rendered to generate as a final result each koala with a unique design.",
    label: "NFT collection",
  },
];

export default Projects;
