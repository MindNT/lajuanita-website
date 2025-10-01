import './App.css';
import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import TopSection from './pages/TopSection';
import MenuSection from './pages/MenuSection';
import ComboSection from './pages/ComboSection';
import ClientesSection from './pages/ClientesSection';
import GallerySection from './pages/GallerySection';
import ContactoSection from './pages/ContactoSection';
import Footer from './pages/Footer';
import ModalBeta from './components/ModalBeta';
import ModalBilling from './components/ModalBilling';

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showBillingModal, setShowBillingModal] = useState(false);

  useEffect(() => {
    // Mostrar la modal después de un breve delay para mejor experiencia
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
  };

  const handleCartClick = () => {
    setShowBillingModal(true);
  };

  const handleCloseBilling = () => {
    setShowBillingModal(false);
  };
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-950 relative overflow-hidden" 
           style={{background: 'linear-gradient(180deg, #820000 0%, #860000 50%, #200000 100%)'}}>
        
        {/* Modal de bienvenida */}
        <ModalBeta isOpen={showWelcomeModal} onClose={handleCloseModal} />
        
        {/* Modal de facturación */}
        <ModalBilling isOpen={showBillingModal} onClose={handleCloseBilling} />
        
        {/* Navbar */}
        <Navbar onCartClick={handleCartClick} />
        
        {/* Watermark logo pattern - hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none z-0 h-full hidden lg:block">
          {/* Primera fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-70 h-auto top-[5%] right-[0%] rotate-[15deg]" />
          
          {/* Segunda fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-72 h-auto top-[15%] left-[10%] -rotate-[12deg]" />
          
          {/* Tercera fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-76 h-auto top-[25%] right-[12%] rotate-[-30deg]" />
          
          {/* Cuarta fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-72 h-auto top-[35%] left-[18%] -rotate-[-45deg]" />
          
          {/* Quinta fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-60 h-auto top-[45%] right-[50%] rotate-[0deg]" />
          
          {/* Sexta fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-76 h-auto top-[55%] left-[15%] -rotate-[15deg]" />
          
          {/* Séptima fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-80 h-auto top-[65%] right-[18%] rotate-[10deg]" />
          
          {/* Octava fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-72 h-auto top-[75%] left-[12%] -rotate-[22deg]" />
          
          {/* Novena fila */}
          <img src="/images/logo.png" alt="" 
               className="absolute w-78 h-auto top-[85%] right-[14%] rotate-[16deg]" />
          
          {/* Décima fila 
          <img src="/images/logo.png" alt="" 
               className="absolute w-76 h-auto top-[95%] left-[20%] -rotate-[14deg]" />*/}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div id="hero">
            <HeroSection />
          </div>
          <div id="destacados">
            <TopSection />
          </div>
          <div id="menu">
            <MenuSection />
          </div>
          <ComboSection />
          <div id="opiniones">
            <ClientesSection />
          </div>
          <div id="galeria">
            <GallerySection />
          </div>
          {/*<div id="contacto">
            <ContactoSection />
          </div>*/}
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;