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
    <section className="w-full bg-black bg-opacity-60 shadow-lg py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center min-h-[400px]">
          {/* Imagen lado izquierdo - 50% */}
          <div className="w-1/2 pr-8">
            <img 
              src="/images/chilesrellenos.png" 
              alt="Combo Misterioso" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          
          {/* Contenido lado derecho - 50% */}
          <div className="w-1/2 pl-8 text-right flex flex-col items-end">
            <h2 className="text-white text-5xl font-bold font-inter mb-8 leading-tight text-right">
              Ordena y descubre combos misteriosos para ganar divertidos descuentos
            </h2>
            
            <WhiteButtonIcon
              text="Crear Combo"
              iconPath={comboIconPath}
              onClick={handleCreateCombo}
              className="text-lg px-8 py-4"
              iconSize={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;