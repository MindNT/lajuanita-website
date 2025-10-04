import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { assetUrl, handleImgError } from '../utils/imageHelpers';

const Navbar = ({ onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-red-900 bg-opacity-95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-center py-4">
            
            {/* Mobile: Left side - Menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-yellow-300 focus:outline-none p-1"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation layout */}
            <div className="hidden md:flex items-center space-x-12">
              {/* Left navigation items */}
              <div className="flex items-center space-x-10">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Inicio
                </button>
                {/* <button 
                  onClick={() => scrollToSection('destacados')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Destacados
                </button> */}
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Menú
                </button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 mx-12">
                <img 
                  src={assetUrl('/images/logonavbar.png')}
                  alt="La Juanita Logo" 
                  className="h-16 w-auto object-contain"
                  onError={handleImgError}
                />
              </div>

              {/* Right navigation items */}
              <div className="flex items-center space-x-10">
                {/* <button 
                  onClick={() => scrollToSection('opiniones')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Opiniones
                </button>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Galería
                </button>
                <button 
                  onClick={() => scrollToSection('footer')}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Redes Sociales
                </button> */}
                
                {/* Cart button - Desktop */}
                <button
                  onClick={onCartClick}
                  className="relative bg-white text-red-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                  Carrito
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile: Center - Logo */}
            <div className="md:hidden flex-shrink-0">
              <img 
                src={assetUrl('/images/logonavbar.png')}
                alt="La Juanita Logo" 
                className="h-12 w-auto object-contain"
                onError={handleImgError}
              />
            </div>

            {/* Mobile: Right side - Cart button */}
            <div className="md:hidden">
              <button
                onClick={onCartClick}
                className="relative bg-white text-red-900 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span className="text-sm">Carrito</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-red-900 shadow-lg border-t border-red-700">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Inicio
              </button>
              {/* <button 
                onClick={() => scrollToSection('destacados')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Destacados
              </button> */}
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Menú
              </button>
              {/* <button 
                onClick={() => scrollToSection('opiniones')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Opiniones
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('footer')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium text-left py-2 px-4 rounded-lg hover:bg-red-800 hover:bg-opacity-50"
              >
                Redes Sociales
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
