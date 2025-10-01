import React from 'react';
import WhiteButtonIcon from '../utils/WhiteButtonIcon';

const ComboSection = () => {
  const handleCreateCombo = () => {
    console.log('Crear combo clicked');
    // Aquí iría la lógica para crear combo
  };

  // SVG path para el icono de combo
  const comboIconPath = "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z";

  return (
    <section className="w-full bg-black bg-opacity-60 shadow-lg py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
          {/* Imagen lado izquierdo - responsive */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <img 
              src="/images/chilesrellenos.png" 
              alt="Combo Misterioso" 
              className="w-full h-auto object-contain rounded-lg max-w-md mx-auto lg:max-w-none lg:mx-0"
            />
          </div>
          
          {/* Contenido lado derecho - responsive */}
          <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-right flex flex-col items-center lg:items-end">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold font-inter mb-6 sm:mb-7 lg:mb-8 leading-tight px-2">
              Ordena y descubre combos misteriosos para ganar divertidos descuentos
            </h2>
            
            <WhiteButtonIcon
              text="Crear Combo"
              iconPath={comboIconPath}
              onClick={handleCreateCombo}
              className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 w-full sm:w-auto max-w-xs sm:max-w-none"
              iconSize={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;