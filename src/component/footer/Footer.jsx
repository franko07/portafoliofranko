/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logoTahamy01.jpg";


const Footer = (props) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div>
      <footer class="text-gray-600 body-font bg-gray-100">
        <div class="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="" class="w-20 h-20 " />
              <span class="ml-3 text-xl">Tahamy Campestre</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">Gracias por elegirnos.</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-6 md:mt-0 mt-6 md:text-left text-center">
            <div className="hidden sm:ml-6 sm:block py-5">
              <div className="flex space-x-4 ">
                <Link to="/">
                  <button
                    className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </button>
                </Link>
                <div
                  className="relative bg"
                  onMouseEnter={openSubMenu}
                  onMouseLeave={closeSubMenu}
                >
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex w-full outline-none  focus:outline-none">
                    Servicios
                  </button>
                  {isSubMenuOpen && (
                    <div className="absolute -right-16 p-2 mt-1 bg-slate-200 rounded-md shadow">
                      <ul className="space-y-2 lg:w-48">
                        <li>
                          <Link to="/restaurante">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Restaurante
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/bar">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Bar
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/ecohotel">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Ecohotel
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link to="/galery">
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Galeria
                  </button>
                </Link>
                <Link to="/about">
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Acerca de
                  </button>
                </Link>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4 my-1">
                  <Link
                    to="https://api.whatsapp.com/send?phone=3104582710"
                    target="_blank"
                  >
                    <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Contacto
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/">
                  <button
                    className="bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors "
                    aria-current="page"
                  >
                    Home
                  </button>
                </Link>
                <Link to="/galery">
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Galeria
                  </button>
                </Link>
                <div className="relative" onClick={toggleSubMenu}>
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                    Servicios
                  </button>
                  {isSubMenuOpen && (
                    <div className="-right-16 p-2 mt-1 bg-slate-200 rounded-md shadow lg:absolute">
                      <ul className="space-y-2 lg:w-48">
                        <li>
                          <Link to="/restaurante">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Restaurante
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/bar">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Bar
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/ecohotel">
                            <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              Ecohotel
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link to="/about">
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Acerca de
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container m-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row bg-black  md:items-center lg:items-start md:flex-row md:flex-nowrap ">
            <p class="text-gray-100 text-sm text-center sm:text-left">
              <p>
                &copy; 2024 TAHAMY CAMPESTRE. Todos los derechos reservados.
              </p>
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @webjaf.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer



