import React from 'react';
import FormularioContacto from '../components/FormularioContacto';

const ContactoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-5xl font-bold font-inter mb-12">
          Nos mantenemos siempre a un botón de ti
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Google Maps - 50% width */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284364763!2d-122.41941548468204!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante"
              ></iframe>
            </div>
          </div>

          {/* Contact Form - 50% width */}
          <div className="w-full lg:w-1/2">
            <FormularioContacto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
