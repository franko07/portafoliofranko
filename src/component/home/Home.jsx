/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Footer from "../footer/Footer"

// const slides = [
//   "../../imagenes/fotoCarousell/carousell01.jpg",
//   "../../imagenes/fotoCarousell/corousell02.jpg",
//   "../../imagenes/fotoCarousell/corousell03.jpg",
//   "../../imagenes/fotoCarousell/carousell04.jpg"
// ]


export default function Home() {
   
  return (
    <div class="bg-lime-100 p-5 mx-2">
      <div class="bg-gray-200 m-30 p-10 rounded-lg shadow-2xl">
        <h1 class="text-5xl">BIENVENIDOS A TAHAMY CAMPESTRE</h1>
        <h3>Disfruta de un hermoso dia de sol</h3>
      </div>

      <section class="px-4 py-18 mx-auto max-w-7xl">
        <h2 class="my-8 text-3xl font-extrabold leading-tight text-gray-900">
          <span>Podrás disfrutar de: </span>
        </h2>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 border-black ">
          <div>
            <img
              src="https://scontent.feoh11-1.fna.fbcdn.net/v/t39.30808-6/265286489_299462272187545_7355246850095483966_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kClQQ-I4jNkAX8cdmH2&_nc_ht=scontent.feoh11-1.fna&oh=00_AfAy5UwyA53ubCVTQ4snq0lBWcGGmAlxvqp8n2sB1GHzsQ&oe=65A31504"
              alt=""
              class="object-cover w-full h-56 mb-5 bg-center rounded transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
            />

            <div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <span>Piscinas</span>
              </h2>
              <p>Ven y comparte en familia de nuestras intalaciones.</p>
              <a
                class="mb-2 text-lg font-semibold text-gray-900"
                href="/ecohotel"
              >
                Leer Más
              </a>
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://scontent.feoh11-1.fna.fbcdn.net/v/t39.30808-6/366283554_760534712746963_3504759313049422210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=BDUvhlYoYDoAX9Axub8&_nc_ht=scontent.feoh11-1.fna&oh=00_AfBQHMQoHrGUH-mRP5r2jjDqrzyXj0txSFkb0lrhng6nhg&oe=65A2EACF"
                alt=""
                class="object-cover w-full h-56 mb-5 bg-center rounded transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
              />
            </figure>
            <div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <span>Restaurante</span>
              </h2>
              <p>
                Disfuta en familia de nuestros deliciosos platos a la carta.
              </p>
              <a
                class="mb-2 text-lg font-semibold text-gray-900"
                href="/restaurante"
              >
                Leer Más
              </a>
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://scontent.feoh11-1.fna.fbcdn.net/v/t1.18169-9/28058500_1607331246021952_5102162674086330635_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=GRPltin647MAX-Jseq1&_nc_ht=scontent.feoh11-1.fna&oh=00_AfD0MmnnBmvXn2rN_cjmHNjT4dGCvcFdjxjt05Xue_RHWQ&oe=65B6C6B0"
                alt=""
                class="object-cover w-full h-56 mb-5 bg-center rounded transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
              />
            </figure>
            <div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <span>Zona de hamacas</span>
              </h2>
              <p>
                Disfuta de nuestra zona de descanso rodeado de la naturaleza.
              </p>
              <a
                class="mb-2 text-lg font-semibold text-gray-900"
                href="/ecohotel"
              >
                Leer Más
              </a>
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://scontent.feoh11-1.fna.fbcdn.net/v/t39.30808-6/395643112_18201424003277504_1122174396978088726_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uKVDtmWpfukAX9OyYIi&_nc_ht=scontent.feoh11-1.fna&oh=00_AfBwbeVp8y54cd6lBCiDAeXqksfeu8NlaEvCggfDwWz4Zw&oe=65A2E02D"
                alt=""
                class="object-cover w-full h-56 mb-5 bg-center rounded transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
              />
            </figure>
            <div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <span>Bar</span>
              </h2>
              <p>
                Disfruta de nuestra gran variedad de bebidas refrescantes que
                tenemos para ofrecerte.
              </p>
              <a class="mb-2 text-lg font-semibold text-gray-900" href="/bar">
                Leer Más
              </a>
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://scontent.feoh11-1.fna.fbcdn.net/v/t1.6435-9/94779969_3010356402386089_7753026533240864768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=vfh03S_t1mcAX83buJW&_nc_ht=scontent.feoh11-1.fna&oh=00_AfCF1cB4OCMNyymyqPr9ozgHW07SRlh1tnb4KZycO9kKDg&oe=65B6B8AA"
                alt=""
                class="object-cover w-full h-56 mb-5 bg-center rounded transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500"
              />
            </figure>
            <div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <span>Ecohotel</span>
              </h2>
              <p>
                Proximamente podras disfrutar de nuestras cabañas rodeado de la
                naturaleza.
              </p>
              <a
                class="mb-2 text-lg font-semibold text-gray-900"
                href="/ecohotel"
              >
                Leer Más
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative items-center w-full py-24 mx-auto md:px-12 lg:px-16 max-w-7xl bg-gray-100">
        <h2 class="mb-6 text-2xl font-light text-gray-900 md:text-3xl uppercase">
          <span>Informacion General</span>
        </h2>
        <div className="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
          <div>
            <h2 class="mb-6 text-2xl font-light text-gray-900 md:text-3xl uppercase">
              Servicios
            </h2>
            <div className="flex flex-col p-8 lg:p-0">
              <ul className="text-gray-600 block text-base/loose">
                <li>Bar.</li>
                <li>Restaurante.</li>
                <li>Piscina al aire libre.</li>
                <li>Zona de hamacas.</li>
                <li>Parqueadero al aire libre.</li>
                <li>Zona para fumadores.</li>
                <li>Se admiten mascotas domésticas</li>
                <p>(en las zonas comunes... no en áreas húmedas).</p>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-light text-gray-900 md:text-3xl uppercase">
              Políticas Tahamy Campestre
            </h2>
            <div className="">
              <ul class="text-gray-600 text-base/loose">
                <li>Estacionamiento ¡Gratis!.</li>
                <li>Horario de dia de sol 9 am - 4-30 pm.</li>
                <li>Se prohibe el ingreso de alimentos y bebidas.</li>
                <h2 className=" text-2xl font-light text-gray-900 md:text-3xl uppercase my-9">
                  Forma de Pago
                </h2>
                <ul class="text-gray-600">
                  <li>Dinero en efectivo.</li>
                  <li>Tranferencia (nequi, Bancolombia)</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
