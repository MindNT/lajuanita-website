import React from 'react';

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-950 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border-4 border-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <img src="/images/logo.png" alt="" className="absolute w-32 h-auto top-4 right-4 rotate-12" />
          <img src="/images/logo.png" alt="" className="absolute w-28 h-auto bottom-8 left-4 -rotate-12" />
        </div>

        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Logo principal */}
          <div className="mb-6">
            <img src="/images/logo.png" alt="La Juanita" className="w-24 h-auto mx-auto" />
          </div>

          {/* Título principal */}
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Intel, sans-serif' }}>
            ¡Bienvenidos!
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-xl text-white mb-4 font-semibold">
            Estamos en fase de apertura
          </h2>

          {/* Descripción */}
          <p className="text-white text-sm leading-relaxed mb-6">
            Celebra con nosotros esta nueva aventura culinaria. Disfruta del auténtico sabor casero con 
            <span className="text-white font-bold"> descuentos especiales</span> y 
            <span className="text-white font-bold"> promociones exclusivas</span> durante nuestro período de apertura.
          </p>

          {/* Promoción destacada */}
          <div className="bg-white text-red-900 rounded-lg p-4 mb-6 border-2 border-gray-200">
            <div className="text-2xl font-bold mb-1">Descuentos exclusivos</div>
            <div className="text-sm font-semibold">Al combinar productos</div>
          </div>

          {/* Fechas del período */}
          <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6 border border-white">
            <div className="text-white font-bold text-sm mb-2">PERÍODO DE APERTURA</div>
            <div className="text-white text-sm">
              <div className="mb-1">
                <span className="font-semibold">Inicio:</span> 15 de Enero 2024
              </div>
              <div>
                <span className="font-semibold">Fin:</span> 15 de Febrero 2024
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="text-white text-sm mb-6">
            <div className="font-semibold text-white mb-1">Horarios de servicio:</div>
            <div>Lunes - Viernes: 8:00 AM - 5:00 PM</div>
            <div>Modalidad: Pick Up</div>
          </div>

          {/* Botón de acción */}
          <button
            onClick={scrollToMenu}
            className="bg-white hover:bg-gray-100 text-red-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ¡Explorar el Menú!
          </button>

          {/* Mensaje adicional */}
          <p className="text-white text-xs mt-4 opacity-80">
            Gracias por ser parte de nuestra familia culinaria ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBeta;
