import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import WhiteButtonIcon from '../utils/WhiteButtonIcon';
import WhiteButtonTrans from '../utils/WhiteButtonTrans';

const ModalBilling = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  React.useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const tomorrow = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour ahead
      const defaultDate = now.toISOString().split('T')[0];
      const defaultTime = tomorrow.toTimeString().slice(0, 5);
      
      setCustomerInfo(prev => ({
        ...prev,
        date: defaultDate,
        time: defaultTime
      }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatOrderForWhatsApp = () => {
    let message = `🍽️ *NUEVA ORDEN - LA JUANITA*\n\n`;
    message += `👤 *Cliente:* ${customerInfo.name}\n`;
    message += `📱 *Teléfono:* ${customerInfo.phone}\n`;
    message += `📅 *Fecha:* ${customerInfo.date}\n`;
    message += `⏰ *Hora:* ${customerInfo.time}\n\n`;
    message += `🛒 *PEDIDO:*\n`;
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.title} - $${item.price * item.quantity}\n`;
    });
    
    message += `\n💰 *Total: $${getTotalPrice()}*\n\n`;
    message += `¡Gracias por elegir La Juanita! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor completa nombre y teléfono');
      return;
    }
    
    const whatsappNumber = '5555555555'; // Replace with actual number
    const message = formatOrderForWhatsApp();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 py-4 sm:py-8">
      <div className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-950 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-lg mx-2 sm:mx-4 my-2 sm:my-4 overflow-hidden border-2 sm:border-4 border-white max-h-[95vh] sm:max-h-[90vh] lg:max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-10 p-1 sm:p-0"
        >
          <svg className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
              Tu Orden
            </h1>
            <p className="text-white text-xs sm:text-sm opacity-80">
              Revisa y confirma tu pedido
            </p>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <div className="text-center text-white py-6 sm:py-8">
              <p className="text-sm sm:text-base">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-h-48 sm:max-h-60 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="bg-white bg-opacity-15 rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight pr-2">{item.title}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-300 hover:text-red-100 p-1 -m-1 flex-shrink-0"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="bg-white bg-opacity-20 text-white w-7 h-7 sm:w-6 sm:h-6 rounded flex items-center justify-center text-sm font-semibold"
                        >
                          -
                        </button>
                        <span className="text-white text-sm sm:text-base w-6 sm:w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="bg-white bg-opacity-20 text-white w-7 h-7 sm:w-6 sm:h-6 rounded flex items-center justify-center text-sm font-semibold"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-white font-bold text-sm sm:text-base">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Info Form */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <h3 className="text-white font-semibold text-base sm:text-lg">Información de contacto</h3>
                
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 sm:p-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-opacity-60 focus:outline-none transition-all"
                />
                
                <input
                  type="tel"
                  placeholder="Número de teléfono"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 sm:p-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-opacity-60 focus:outline-none transition-all"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="date"
                    value={customerInfo.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="p-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-opacity-60 focus:outline-none transition-all"
                  />
                  
                  <input
                    type="time"
                    value={customerInfo.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="p-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-opacity-60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Total */}
              <div className="bg-white text-red-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-center">
                <div className="text-xl sm:text-2xl font-bold">Total: ${getTotalPrice()}</div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <WhiteButtonIcon
                  text="Enviar Pedido por WhatsApp"
                  onClick={handleSendOrder}
                  className="w-full justify-center font-bold py-3 sm:py-3 text-sm sm:text-base rounded-full min-h-[48px] sm:min-h-auto"
                  iconPath="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  iconSize={18}
                />
                
                <WhiteButtonTrans
                  text="Seguir comprando"
                  onClick={onClose}
                  className="w-full justify-center font-semibold text-sm sm:text-base py-3 min-h-[48px] sm:min-h-auto"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalBilling;
