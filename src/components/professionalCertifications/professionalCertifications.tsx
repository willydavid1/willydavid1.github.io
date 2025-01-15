"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  "cert-CT-YI9RP62I.jpg",
  "curso_10.png",
  "curso_1.png",
  "curso_11.png",
  "curso_12.png",
  "curso_13.png",
  "curso_14.png",
  "curso_2.png",
  "curso_3.png",
  "curso_4.png",
  "curso_5.png",
  "curso_6.png",
  "curso_7.png",
  "curso_8.png",
  "curso_9.png",
  "diploma-aprender-data-ia.jpg",
  "diploma-blender.jpg",
  "diploma-descripcion-familia.jpg",
  "diploma-economia-digital.jpg",
  "diploma-fundamentos-matematicas.jpg",
  "diploma-gatsby_page-0001.jpg",
  "diploma-ingles-basico-principiantes.jpg",
  "diploma-introduccion-backend.jpg",
  "diploma-inversion-startups.jpg",
  "diploma-jamstack.jpg",
  "diploma-jupyter-notebook.jpg",
  "diploma-notacion-matematica.jpg",
  "diploma-pandas-numpy.jpg",
  "diploma-preguntas-respuestas.jpg",
  "diploma-presente-simple-vocabulario-comun.jpg",
  "diploma-python-cs.jpg",
  "diploma-python.jpg",
  "diploma-terminal.jpg",
];

export default function ProfessionalCertifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-4 font-semibold text-center md:text-left">
          Certificaciones profesionales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayedCertificates.map((cert) => (
            <div key={cert} className="relative group w-full h-56">
              <Image
                src={`/cert/${cert}`}
                alt={""}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 rounded-xl group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        {certificates.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
            >
              {showAll ? "Mostrar menos" : "Ver todos los certificados"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
