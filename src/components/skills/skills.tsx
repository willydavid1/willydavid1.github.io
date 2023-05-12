import React from "react";

const Skills = () => {
  return (
    <section className="mt-8 mb-8" id="projects">
      <h2 className="text-3xl mb-6 font-semibold text-center px-4 md:text-left">
        Skills
      </h2>

      <div className="space-y-8 px-4">
        <div className="flex justify-between space-x-6">
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            Frontend
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            Backend
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            Mobile
          </p>
        </div>
        <div className="flex justify-around space-x-6">
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            React
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            Python
          </p>
        </div>
        <div className="flex justify-between space-x-6">
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            JavaScript
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            Tailwind
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            AI
          </p>
        </div>
        <div className="flex justify-around space-x-6">
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            TypeScript
          </p>
          <p className="p-1.5 md:p-2 bg-blue-600 text-sm md:text-lg font-semibold rounded-full w-52 flex items-center justify-center">
            CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
