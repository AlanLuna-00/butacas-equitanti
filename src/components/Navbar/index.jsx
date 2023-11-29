"use client";
// Navbar.js

import { useState } from "react";

const Navbar = () => {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Cierra el menú al hacer clic en un enlace
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center relative">
      {/* Logo o nombre de la marca a la izquierda */}
      <div className="text-white text-lg font-bold">Butacas Equitanti</div>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="lg:hidden">
        <button
          className="text-white focus:outline-none transition-transform transform hover:scale-110"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className={`h-6 w-6 transition-transform transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 p-4 transition-opacity opacity-90 flex flex-col items-center justify-center">
          <div className="flex justify-end w-full absolute top-4 right-4">
            <button
              className="text-white focus:outline-none transition-transform transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="h-6 w-6 transition-transform transform hover:scale-110"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-opacity text-lg animate-fadeIn"
              onClick={handleLinkClick}
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-opacity text-lg animate-fadeIn"
              onClick={handleLinkClick}
            >
              Productos
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-opacity text-lg animate-fadeIn"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </div>
        </div>
      )}

      {/* Enlaces de landing a la derecha (visible en dispositivos mayores a lg) */}
      <div className="hidden lg:flex space-x-4">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-opacity"
          onClick={handleLinkClick}
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-opacity"
          onClick={handleLinkClick}
        >
          Productos
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-opacity"
          onClick={handleLinkClick}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
