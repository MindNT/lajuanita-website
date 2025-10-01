import React from 'react';
import WhiteButtonIcon from '../utils/WhiteButtonIcon';
import WhiteButtonTrans from '../utils/WhiteButtonTrans';

const ModalBeta = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scrollToMenu = () => {
    onClose();
    setTimeout(() => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const joinWhatsApp = () => {
    // Add WhatsApp community link here
    window.open('https://chat.whatsapp.com/your-community-link', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 py-6 sm:p-4 sm:py-8 md:py-12">
      <div className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-950 rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md w-full mx-2 my-2 sm:mx-4 sm:my-4 md:my-8 overflow-hidden border-4 border-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-10 p-1 rounded-full touch-manipulation"
        >
          <svg className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <img src="/images/logo.png" alt="" className="absolute w-20 sm:w-24 md:w-32 h-auto top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 rotate-12" />
          <img src="/images/logo.png" alt="" className="absolute w-16 sm:w-20 md:w-28 h-auto bottom-4 sm:bottom-6 md:bottom-8 left-1 sm:left-2 md:left-4 -rotate-12" />
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-6 md:p-8 text-center">
          {/* Logo principal */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <img src="/images/logo.png" alt="La Juanita" className="w-16 sm:w-20 md:w-24 h-auto mx-auto" />
          </div>

          {/* Título principal */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2" style={{ fontFamily: 'Intel, sans-serif' }}>
            ¡Bienvenidos!
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3 md:mb-4 font-semibold">
            Descuentos especiales en combos
          </h2>

          {/* Descripción */}
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2">
            Disfruta del auténtico sabor casero con 
            <span className="text-white font-bold"> descuentos exclusivos</span> al crear 
            <span className="text-white font-bold"> combinaciones únicas</span>. 
            Mezcla tus platos favoritos y ahorra más.
          </p>

          {/* Promoción destacada */}
          <div className="bg-white text-red-900 rounded-lg p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6 border-2 border-gray-200">
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">¡Combos con descuento!</div>
            <div className="text-xs sm:text-sm font-semibold">Crea tu combinación perfecta</div>
          </div>

          {/* Beneficios */}
          <div className="bg-white bg-opacity-20 rounded-lg p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6 border border-white">
            <div className="text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2">BENEFICIOS EXCLUSIVOS</div>
            <div className="text-white text-xs sm:text-sm space-y-0.5 sm:space-y-1">
              <div>✨ Descuentos progresivos por combo</div>
              <div>🍽️ Combina cualquier plato del menú</div>
              <div>⭐ Ofertas especiales para miembros</div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            <WhiteButtonIcon
              text="¡Explorar el Menú!"
              onClick={scrollToMenu}
              className="w-full justify-center font-bold py-2.5 sm:py-3 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 touch-manipulation"
              iconPath="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z M3 7l9 6 9-6"
              iconSize={18}
            />
            
            <WhiteButtonTrans
              text="Únete a nuestra comunidad"
              onClick={joinWhatsApp}
              className="w-full justify-center font-semibold touch-manipulation"
            />
          </div>

          {/* Mensaje adicional */}
          <p className="text-white text-xs opacity-80">
            Gracias por ser parte de nuestra familia culinaria ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBeta;
