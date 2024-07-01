'use client';

import { BiUser } from 'react-icons/bi';
import IconsWithTooltip from '../IconsWithTooltip';
import { RiRobot3Line } from 'react-icons/ri';

export const ChatAsistant = () => {
  return (
    <div className="flex justify-center w-full custom-height -mt-14">
      <div className="flex flex-col custom-container h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" >
          {/* Primer mensaje con icono a la derecha */}
          <div className="flex justify-center  items-center space-x-2">
            <div className="text-xs md:text-sm w-2/5">
              <span className="text-white text-center block px-4 py-3 rounded-lg border shadow-md bg-neutral-800">
                Quiero saber más sobre campos formativos
              </span>
            </div>
            <BiUser size={30} />
          </div>

          {/* Mensajes siguientes con icono a la izquierda */}
          <div className="flex justify-center items-center space-x-2">
            <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-full mx-2 order-1 items-start w-2/5">
              <span className="text-center block px-3 py-3 rounded-lg border shadow-md bg-white w-full">
                Los campos formativos son los siguientes: 
                <ol className="list-decimal list-inside">
                  <li>El lenguaje y la comunicación</li>
                  <li>El pensamiento matemático</li>
                  <li>Exploración y conocimiento del mundo</li>
                </ol>
              </span>
              <IconsWithTooltip />
            </div>
            <RiRobot3Line size={30} />
          </div>

          {/* Puedes añadir más mensajes aquí con icono a la izquierda si es necesario */}
        </div>
      </div>
    </div>
  );
};

export default ChatAsistant;
