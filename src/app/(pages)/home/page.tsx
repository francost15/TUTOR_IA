"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const xRotation = (clientY / innerHeight - 0.9) * 30;
      const yRotation = (clientX / innerWidth - 0.9) * 30;

      if (imageRef.current) {
        imageRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <section className="flex flex-col items-center space-y-4">
      <div ref={imageRef} className="transition-transform duration-200 ease-out">
        <Image src='/logouvp.png' alt="logoevento" width={400} height={400} />
      </div>
      <h1 className="text-2xl font-extrabold">1er concurso de programación</h1>
      <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-900 via-purple-600 to-red-700 inline-block text-transparent bg-clip-text">IntelliHack UVP</h1>
      <div className="mt-3">
        <button className="mt-5 group relative h-14 w-56 overflow-hidden rounded-2xl bg-purple-700 text-lg font-bold text-white shadow-2xl hover:bg-orange-600">
          Registra tu proyecto
        </button>
      </div>
    </section>
    </>
  );
}