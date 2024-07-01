'use client'
import React, { useState } from 'react';
import { IoCopyOutline, IoReload } from 'react-icons/io5';

const IconsWithTooltip = () => {
  const [tooltipText, setTooltipText] = useState('');

  return (
    <div className="flex mx-2">
      <div className="relative">
        <div
          className="cursor-pointer group"
          onMouseEnter={() => setTooltipText('Copiar')}
          onMouseLeave={() => setTooltipText('')}
        >
          <IoCopyOutline size={18} className="icon hover:text-neutral-500" />
        </div>
        {tooltipText === 'Copiar' && (
          <div className="tooltip absolute z-10 bg-neutral-800 text-white text-xs py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            {tooltipText}
          </div>
        )}
      </div>

      <div className="relative">
        <div
          className="cursor-pointer group mx-2"
          onMouseEnter={() => setTooltipText('Generar de nuevo')}
          onMouseLeave={() => setTooltipText('')}
        >
          <IoReload size={18} className="icon hover:text-neutral-500" />
        </div>
        {tooltipText === 'Generar de nuevo' && (
          <div className="tooltip absolute z-10 bg-neutral-800 text-white text-xs py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconsWithTooltip;
