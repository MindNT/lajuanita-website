import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: '/assets/facebook.svg',
      url: '#'
    },
    {
      name: 'Instagram', 
      icon: '/assets/instagram.svg',
      url: '#'
    },
    {
      name: 'WhatsApp',
      icon: '/assets/whatsapp.svg', 
      url: '#'
    }
  ];

  const categories = [
    'Inicio',
    'Menú',
    'Combos',
    'Galería',
    'Contacto'
  ];

  return (
    <footer id="footer" className="py-16 px-4 border-t border-white border-opacity-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1 - Redes Sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-bold mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 - Categorías */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-bold mb-6">Categorías</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {categories.map((category, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3 - Logo, Frase y MindNT */}
          <div className="flex flex-col items-center md:items-end -mt-2">
            <img 
              src="/images/logo.png" 
              alt="La Juanita Logo"
              className="w-32 h-auto mb-4"
            />
            <p className="text-white text-lg font-medium text-center md:text-right mb-4">
              El verdadero sabor casero
            </p>
            <p className="text-white text-opacity-60 text-sm text-center md:text-right">
              Developed by <span className="text-white font-medium">MindNT</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;