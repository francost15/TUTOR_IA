'use client';

import { titleFont } from "@/config/fonts";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { IoAdd, IoReorderThree } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import { PiChalkboardTeacher, PiChalkboardTeacherFill } from "react-icons/pi";
import { Assistants } from "./Asistants/assistants";
import clsx from "clsx";

const cardsData = [
  { title: "Primer grado", icon: <PiChalkboardTeacher size={20} /> },
  { title: "Segundo grado", icon: <PiChalkboardTeacherFill size={20} /> },
  { title: "Tercer grado", icon: <PiChalkboardTeacher size={20} /> },
  { title: "Cuarto grado", icon: <PiChalkboardTeacherFill size={20} /> },
  { title: "Quinto grado", icon: <PiChalkboardTeacher size={20} /> },
  { title: "Sexto grado", icon: <PiChalkboardTeacherFill size={20} /> },
];

export default function SideBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="relative flex h-screen">
      <button
        className={clsx(
          "absolute top-2 left-2 p-2 rounded-xl",
          isSidebarVisible ? "hover:bg-neutral-700 text-white" : "text-gray-950 hover:bg-neutral-300 "
        )}
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        <IoReorderThree size={30} />
      </button>
      <aside
        className={clsx(
          "flex flex-col h-screen bg-neutral-800 text-white transition-width duration-500",
          { "w-48": isSidebarVisible, "w-0": !isSidebarVisible }
        )}
      >
        {isSidebarVisible && (
          <>
            <div className="flex justify-end p-2">
              <button className="p-2 hover:bg-neutral-700 rounded-xl">
                <IoAdd size={30} />
              </button>
            </div>
            <div className="p-4 hover:bg-neutral-700 rounded-xl">
              <h1 className={`${titleFont.className} text-center text-2xl font-semibold`}>
                Tutor AI
              </h1>
            </div>
            <h1 className={`${titleFont.className} mt-5 text-md p-2`}>Asistentes</h1>
            {cardsData.map((card, index) => (
              <Assistants key={index} title={card.title} icon={card.icon} />
            ))}
            <h1 className={`${titleFont.className} mt-5 text-md p-2`}>Historial</h1>
            <ul className="p-2">
              <li className="flex mt-2 items-center text-sm hover:bg-neutral-700 rounded-xl">
                <FaHistory />
                <span className="ml-2">Inicio</span>
              </li>
              <li className="flex mt-2 items-center text-sm hover:bg-neutral-700 rounded-xl">
                <FaHistory />
                <span className="ml-2">Como sirve</span>
              </li>
              <li className="flex mt-2 items-center text-sm hover:bg-neutral-700 rounded-xl">
                <FaHistory />
                <span className="ml-2">Que es tal tal</span>
              </li>
            </ul>
            <div className="mt-auto p-2">
              <button className="flex items-center">
                <MdWorkspacePremium size={20} />
                <span className={`${titleFont.className} text-center text-md font-semibold ml-2`}>
                  Mejorar plan
                </span>
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
