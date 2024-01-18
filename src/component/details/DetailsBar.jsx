import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { infoBar } from "../../dataBar";

function DetailsBar() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [detailBar, setDetailBar] = useState({});

  useEffect(() => {
    let infoBarDetail = infoBar.filter(beb => beb.id === id);

    if (infoBarDetail) {
      setDetailBar(infoBarDetail);
    }
  }, [id]);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img src={detailBar[0]?.image.url} alt="" />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  <span>{detailBar[0]?.nombre}</span>
                </h2>
                <p class="leading-relaxed text-base">
                  <span>${detailBar[0]?.precio}</span>
                </p>
                <p class="leading-relaxed text-base">
                  <span>{detailBar[0]?.descripcion}</span>
                </p>
              </div>
            </div>
            <button
              class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => navigate(-1)}
            >
              <span>Volver</span>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default DetailsBar;
