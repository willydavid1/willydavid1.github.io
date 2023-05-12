import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 mt-24 bg-gray-800 text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-white">
            <Image
              width={35}
              height={35}
              alt="Logo portfolio Willy"
              src={"/images/logoWilly.png"}
            />
          </div>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/willydavid1/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/willydavid1"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/WillyDaconceic1"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/willy-david-da-conceicao-lozada-355799184/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
