import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-900 bg-opacity-95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-12">
            {/* Left navigation items */}
            <div className="hidden md:flex items-center space-x-10">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('destacados')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium cursor-pointer"
              >
                Destacados
              </button>
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
                src="/images/logonavbar.png" 
                alt="La Juanita Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Right navigation items */}
            <div className="hidden md:flex items-center space-x-10">
              <button 
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
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-yellow-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
