import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { useScroll } from "react-use-gesture";
import clsx from "clsx";
import { Animation } from "../animations/animation";

const Projects = () => {
  const refLastItem = useRef();
  const refFirstItem = useRef();

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

  const getRefItem = (
    index: number,
    length: number
  ): RefObject<any> | undefined => {
    if (index === 0) {
      return refFirstItem;
    }
    if (index === length - 1) {
      return refLastItem;
    }
    return undefined;
  };

  return (
    <section className="mt-12 mb-8 scroll-m-12" id="projects">
      <h2 className="text-3xl mb-3 font-semibold text-center px-4 md:text-left">
        Proyectos
      </h2>

      <div className="relative">
        <div
          className="section relative flex flex-nowrap overflow-x-scroll space-x-6 py-6 px-12 md:px-0"
          {...bind()}
        >
          {items.map((item, i) => {
            return (
              <animated.div
                key={i}
                style={style}
                className={clsx(
                  "flex-shrink-0 h-fit rounded-3xl overflow-hidden relative md:flex",
                  {}
                )}
                ref={getRefItem(i, items.length)}
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
                  </p>
                </div>
                <Animation
                  in
                  className="bg-white p-3 w-52 text-main relative md:w-72"
                >
                  <p className="text-xs mb-2 md:text-xs">{item.description}</p>
                  <div className="md:flex md:items-end md:justify-end">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.href}
                      className="flex items-center justify-center bg-blue-100 text-blue-600 underline text-xs p-1 px-5 rounded-full uppercase font-semibold"
                    >
                      Ver Sitio <HiOutlineExternalLink className="ml-1" />
                    </a>
                  </div>
                </Animation>
              </animated.div>
            );
          })}
        </div>
        <button
          className="border border-main shadow-sm absolute bg-white rounded-full h-8 w-8 flex items-center justify-center top-1/2 transform -translate-y-1/2 left-1 lg:-left-7"
          onClick={() => {
            (refFirstItem.current as any).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          <HiOutlineArrowNarrowLeft className="text-xl text-main" />
        </button>
        <button
          className="border border-main shadow-sm  absolute bg-white rounded-full h-8 w-8 flex items-center justify-center top-1/2 transform -translate-y-1/2 right-1 lg:-right-7"
          onClick={() => {
            (refLastItem.current as any).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          <HiOutlineArrowNarrowRight className="text-xl text-main" />
        </button>
      </div>

      <style jsx>
        {`
          .section::-webkit-scrollbar {
            height: 25px;
          }

          .section {
            overflow-y: hidden;
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
      "Foodko.co es una app que te permite pedir y personalizar tu comida en 3D para entrega a domicilio en cuestión de minutos. Foodko ofrece una experiencia de consumo nueva y sorprendente al brindarle el poder de personalizar sus hamburguesas en un modelo 3D en tiempo real.",
    label: "App - Web",
    href: "https://neat-maple-aedd3.netlify.app/",
  },
  {
    imageSrc: "/images/projects/picassoIA.jpg",
    title: "Picasso IA",
    description:
      "Picassoia.com es el Netflix de la IA, todas las IA en una sola aplicación, es una aplicación que ofrece un generador de imágenes impulsado por IA. Puedes crear obras de arte o conversar con personajes famosos utilizando el poder de la IA. Sólo tienes que escribir un texto y ver qué dibuja la IA por ti.",
    label: "App - Web",
    href: "https://picassoia.com/",
  },
  {
    imageSrc: "/images/projects/saxior.jpg",
    title: "Saxior",
    description:
      "Saxior.com es una app que está revolucionando la forma de comprar ropa con inteligencia artificial. Con Saxior podrás comprar una camiseta con tu diseño favorito y único creado con inteligencia artificial.",
    label: "App - Web",
    href: "http://saxior.com/",
  },
  {
    imageSrc: "/images/projects/peaceAI.jpg",
    title: "Peace AI",
    description:
      "Peace IA es una aplicación que ofrece una amplia selección de sonidos relajantes naturales y generados por IA para reducir el estrés y la ansiedad. También proporciona consejos personalizados y ejercicios de profesionales de la salud mental y deportistas de IA para mejorar el bienestar emocional y físico, así como frases motivadoras y herramientas de meditación.",
    label: "App",
    href: "https://play.google.com/store/apps/details?id=com.peaceai.app",
  },
  {
    imageSrc: "/images/projects/rostroIA.jpg",
    title: "Rostro IA",
    description:
      "Rostro IA es una aplicación que utiliza algoritmos avanzados de IA para generar obras de arte únicas y muy detalladas a partir de cualquier imagen, lo que te permite convertirte en un artista digital, crear avatares de anime, escenas de fantasía, arte NFT y más en segundos. También puedes compartir tus creaciones con una comunidad de artistas.",
    label: "App",
    href: "https://play.google.com/store/apps/details?id=com.lunaai.app",
  },
  {
    imageSrc: "/images/projects/giraffes-nfts.jpg",
    title: "Giraffes 3d",
    description:
      "Giraffes 3d es una colección NFT creada desde cero usando Blender para modelar cada uno de los objetos y texturas 3D de las jirafas. Luego se renderizó cada elemento 3D y textura para generar como resultado final cada jirafa con un diseño único.",
    label: "NFT collection",
    href: "https://opensea.io/collection/giraffes3d",
  },
  {
    imageSrc: "/images/projects/koalastv.gif",
    title: "Koalas tv",
    description:
      "Koalas tv es una colección NFT creada desde cero usando Blender para modelar cada uno de los objetos 3D y texturas de las jirafas. Luego se renderizó cada elemento 3D y textura para generar como resultado final cada koala con un diseño único.",
    label: "NFT collection",
    href: "https://opensea.io/collection/koalastv",
  },
];

export default Projects;
