import React from 'react';
import WhiteButton from '../utils/WhiteButton';
import { useCart } from '../context/CartContext';

const ProductCard = ({ image, title, description, price, id }) => {
  const { addItem } = useCart();

  const handleAddClick = () => {
    addItem({
      id,
      image,
      title,
      description,
      price
    });
  };

  return (
    <div className="bg-white bg-opacity-15 p-2 sm:p-4 rounded-lg aspect-square flex flex-col">
      {/* Imagen centrada */}
      <div className="flex justify-center mb-1 sm:mb-3">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full h-auto max-h-16 sm:max-h-28 md:max-h-32 object-contain"
        />
      </div>
      
      {/* Título alineado a la izquierda */}
      <h3 className="text-left font-bold mb-1 sm:mb-2 text-xs sm:text-base md:text-lg text-white leading-tight">
        {title}
      </h3>
      
      {/* Descripción alineada a la izquierda */}
      <p className="text-left text-xs sm:text-sm mb-auto text-white leading-snug">
        {description}
      </p>
      
      {/* Precio y botón en la parte inferior */}
      <div className="flex justify-between items-center mt-1 sm:mt-3">
        <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
          ${price}
        </span>
        <WhiteButton 
          text="Agregar" 
          onClick={handleAddClick}
          className="text-xs sm:text-sm px-1 sm:px-3 py-1 sm:py-1 min-h-[28px] sm:min-h-auto"
        />
      </div>
    </div>
  );
};

export default ProductCard;
