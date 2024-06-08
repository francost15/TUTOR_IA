"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsOpen(false); // Close menu on link click
  };

  const getLinkClass = (path: string): string => {
    return activeLink === path
      ? "px-4 py-2 text-lg text-black bg-white rounded-lg transition duration-300 ease-in-out my-2"
      : "px-4 py-2 text-lg text-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black my-2";
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-red-800 flex items-center justify-between px-4 py-3 shadow-lg">
        <div className="flex items-center">
          <Link href="/home" onClick={() => handleLinkClick('/home')}>
            <Image src="/logouvp.png" alt="logoevento" width={70} height={40} />
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden md:flex md:flex-row md:items-center">
          <Link href="/home" onClick={() => handleLinkClick('/home')} className={getLinkClass('/home')}>
            Inicio
          </Link>
          <Link href="/patrocinadores" onClick={() => handleLinkClick('/patrocinadores')} className={getLinkClass('/patrocinadores')}>
            Patrocinadores
          </Link>
          <Link href="/reglamento" onClick={() => handleLinkClick('/reglamento')} className={getLinkClass('/reglamento')}>
            Reglamento
          </Link>
          <Link href="/categorias" onClick={() => handleLinkClick('/categorias')} className={getLinkClass('/categorias')}>
            Categorías
          </Link>
          <Link href="/dudas" onClick={() => handleLinkClick('/dudas')} className={getLinkClass('/dudas')}>
            Dudas
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">
            &times;
          </button>
          <Link href="/home" onClick={() => handleLinkClick('/home')} className={getLinkClass('/home')}>
            Inicio
          </Link>
          <Link href="/patrocinadores" onClick={() => handleLinkClick('/patrocinadores')} className={getLinkClass('/patrocinadores')}>
            Patrocinadores
          </Link>
          <Link href="/reglamento" onClick={() => handleLinkClick('/reglamento')} className={getLinkClass('/reglamento')}>
            Reglamento
          </Link>
          <Link href="/categorias" onClick={() => handleLinkClick('/categorias')} className={getLinkClass('/categorias')}>
            Categorías
          </Link>
          <Link href="/dudas" onClick={() => handleLinkClick('/dudas')} className={getLinkClass('/dudas')}>
            Dudas
          </Link>
        </div>
      )}
    </>
  );
}
