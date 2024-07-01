'use client'
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import IconsWithTooltip from "../IconsWithTooltip";

export const ChatAsistantMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div
      className={clsx("flex-1 p-2 sm:p-6 flex flex-col -mt-16 md:-mt-20 w-full", {
        "custom-scrollbar custom-height": !isMobile,
        "custom-height-mobile": isMobile,
      })}
    >
      <div
        className={clsx("flex flex-col space-y-4 p-3 overflow-y-auto", {
          "custom-container-mobile": isMobile,
          "custom-container": !isMobile,
        })}
      >
        <div className="flex items-end mr-6 justify-end">
          <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-2 order-1 items-end">
            <span className="px-4 py-2 rounded-lg inline-block rounded-border-none bg-neutral-800 text-white">
              Quiero saber más sobre campos formativos
            </span>
          </div>
        </div>

        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-2 order-2 items-start">
            <span className="px-3 py-3 rounded-lg inline-block rounded-border-none border shadow-md">
              Los campos formativos son los siguientes:
              <ol className="list-decimal list-inside">
                <li>El lenguaje y la comunicación</li>
                <li>El pensamiento matemático</li>
                <li>Exploración y conocimiento del mundo</li>
              </ol>
            </span>
            <IconsWithTooltip />
          </div>
        </div>


        {/* Repite el patrón para los demás mensajes según necesites */}

      </div>
    </div>
  );
};
