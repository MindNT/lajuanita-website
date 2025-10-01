import React from 'react';
import CommentCard from '../components/CommentCard';
import WhiteButtonIcon from '../utils/WhiteButtonIcon';

const ClientesSection = () => {
  // Datos dummy para comentarios
  const comments = [
    {
      id: 1,
      rating: 5,
      comment: "Los chiles rellenos están deliciosos, el sabor es auténtico y el servicio excelente. Definitivamente regresaré pronto con mi familia.",
      author: "María González"
    },
    {
      id: 2,
      rating: 4,
      comment: "Excelente comida tradicional mexicana. El ambiente es muy acogedor y los precios son justos. Recomiendo el mole poblano.",
      author: "Carlos Hernández"
    },
    {
      id: 3,
      rating: 5,
      comment: "La mejor cocina casera de la ciudad. Los ingredientes son frescos y se nota el amor con el que preparan cada platillo.",
      author: "Ana Rodríguez"
    }
  ];

  const handleGoogleMapsClick = () => {
    console.log('Abrir Google Maps');
    // Aquí iría la lógica para abrir Google Maps
  };

  // SVG path para el icono de ubicación/maps
  const locationIconPath = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";

  return (
    <section className="w-full py-6 sm:py-16 px-3 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título centrado */}
        <h2 className="text-center text-white text-2xl sm:text-4xl lg:text-5xl font-bold font-inter mb-4 sm:mb-8 px-2">
          Por qué nuestros clientes nos escogen
        </h2>
        
        {/* Grid de comentarios */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-12">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              rating={comment.rating}
              comment={comment.comment}
              author={comment.author}
            />
          ))}
        </div>

        {/* Botón de Google Maps centrado */}
        <div className="flex justify-center px-2 sm:px-4">
          <WhiteButtonIcon
            text="Visítanos en Google Maps"
            iconPath={locationIconPath}
            onClick={handleGoogleMapsClick}
            className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 w-full sm:w-auto max-w-xs sm:max-w-none"
            iconSize={20}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
