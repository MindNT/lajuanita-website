import React from 'react';
import WhiteButton from '../utils/WhiteButton';

const ProductCard = ({ image, title, description, price, onAddClick }) => {
  return (
    <div className="bg-white bg-opacity-15 p-4 rounded-lg aspect-square flex flex-col">
      {/* Imagen centrada */}
      <div className="flex justify-center mb-3">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full h-auto max-h-32 object-contain"
        />
      </div>
      
      {/* Título alineado a la izquierda */}
      <h3 className="text-left font-bold mb-2 text-lg text-white">
        {title}
      </h3>
      
      {/* Descripción alineada a la izquierda */}
      <p className="text-left text-sm mb-auto text-white">
        {description}
      </p>
      
      {/* Precio y botón en la parte inferior */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-3xl font-bold text-white">
          ${price}
        </span>
        <WhiteButton 
          text="Agregar" 
          onClick={onAddClick}
          className="text-sm px-3 py-1"
        />
      </div>
    </div>
  );
};

export default ProductCard;
