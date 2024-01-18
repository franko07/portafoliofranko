import React from "react";

import perfil from "../../imagenes/fotoCarousell/carousell01.jpg";
import Footer from "../footer/Footer";



export default function About(props) {
  return (
    <div className="">
      <section className="text-gray-600 body-font shadow bg-[#ecfccb] py-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded w-full"
                src={perfil}
                alt="foto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h1 className="text-3xl font-medium mb-4 text-gray-900">
                HOSTERIA TAHAMY CAMPESTRE
              </h1>
              <p className="mb-4 leading-relaxed">
                Este complejo turístico informal con vista a las exuberantes
                montañas se encuentra en un terreno arbolado en el corregimiento
                de Olaya, Limita al norte con el municipio de Liborina, por el
                sur con el municipio de Sopetrán y por el oeste con el municipio
                de Santa Fe de Antioquia.
              </p>
              <p className="mb-4 leading-relaxed">
                El estacionamiento es gratuito. El complejo turístico cuenta con
                2 piscinas al aire libre (totalmente naturales) con vista a las
                montañas y una hermosa cascada. Otros servicios incluyen un
                restaurante y comedor, bar, una zona de hamacas, zona de
                antigüedades y unas zonas verdes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}