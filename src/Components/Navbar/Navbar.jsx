import React from "react";
import 'tailwindcss/tailwind.css';
import{ useTranslation } from "react-i18next"
import { LuLanguages } from "react-icons/lu"

export default function Navbar() {

  const [t, i18n] = useTranslation("global")

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header className="bg-cyan-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-cyan-900">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Alexander Franco
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
          {t("navbar.myapps")}
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            {t("navbar.tech")}
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            {t("navbar.contact")}
          </a>
        </nav>
        
      </div>
    </header>
  );
}