import React from 'react';

const CommentCard = ({ rating, comment, author }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg sm:text-2xl ${
            i <= rating ? 'text-white' : 'text-white text-opacity-30'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white bg-opacity-15 p-4 sm:p-6 rounded-[25px] aspect-square flex flex-col">
      {/* Estrellas alineadas a la izquierda */}
      <div className="flex justify-start mb-3 sm:mb-4">
        {renderStars()}
      </div>
      
      {/* Texto del comentario */}
      <p className="text-white text-xs sm:text-sm mb-auto leading-relaxed">
        {comment}
      </p>
      
      {/* Nombre del autor alineado a la derecha */}
      <div className="text-right mt-3 sm:mt-4">
        <span className="text-white text-opacity-90 font-semibold text-xs sm:text-sm">
          {author}
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
