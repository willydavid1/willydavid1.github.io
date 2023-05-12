import React from "react";

import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
  return (
    <section className="text-gray-100">
      <div className="px-4 py-20 mx-auto">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4">
            <div className="text-center sm:text-left mb-14">
              <h2 className="text-3xl mb-2 font-semibold">Experience</h2>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-400">
                {"<Professional Experience />"}
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-8">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-400">
                <a
                  href="https://habi.co/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-start text-xl font-semibold tracking-wide mb-1"
                >
                  Habi
                  <FiExternalLink className="ml-2" />
                </a>
                <p className="text-sm tracking-wide uppercase text-gray-300">
                  Software Developer
                </p>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Ago 2021 - Current
                </time>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-400">
                <a
                  href="https://landing.simetrik.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-start text-xl font-semibold tracking-wide mb-1"
                >
                  Simetrik (YW8)
                  <FiExternalLink className="ml-2" />
                </a>
                <p className="text-sm tracking-wide uppercase text-gray-300">
                  Frontend Developer
                </p>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jun. 2020 - Aug. 2021
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
