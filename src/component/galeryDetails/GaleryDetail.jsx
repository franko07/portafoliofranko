import React from 'react'
import Footer from "../footer/Footer";
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom"
import {data} from "../../dataGaleria"



function GaleryDetail () {
    const navigate = useNavigate();
    const { id } = useParams();
    const [detailFoto, setDetailFoto]= useState({});
    

    useEffect(() => {
        let datafoto = data.filter(fot => fot.id === id)
        if (datafoto){
            setDetailFoto(datafoto)
        }
    },[id])
    return (
      <div>
        <section class="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <div class="container px-5 py-12 mx-auto flex flex-wrap justify-center items-center">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ">
              <img
                src={detailFoto[0]?.image.url}
                alt=""
                class="w-full h-[400px] transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
              />
            </div>
          </div>
          <button
            class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => navigate(-1)}
          >
            <span>Volver</span>
          </button>
        </section>
        <Footer />
      </div>
    );
}

export default GaleryDetail;
