import React, { useState } from "react";
import { Link } from "react-router-dom";
//import SearchBar from "../searchBar/SearchBar";

import logo from "../../imagenes/logoTahamy01.jpg";

const Navbar = (props) => {
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
      <nav className="bg-[#f3f4f6] shadow my-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start m-5 ">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-20 w-auto" src={logo} alt="Logo tahamy" />
              </div>
              <div className="hidden sm:ml-6 sm:block py-5">
                <div className="flex space-x-4 ">
                  <Link to="/">
                    <button
                      className="bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors "
                      aria-current="page"
                    >
                      Home
                    </button>
                  </Link>
                  <div
                    className="relative"
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
                </div>
              </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
