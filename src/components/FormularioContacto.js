import React, { useState } from 'react';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-white text-sm font-medium mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-white text-sm font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            placeholder="Tu número de teléfono"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-white text-sm font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
            placeholder="Cuéntanos cómo podemos ayudarte..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-300 border border-white border-opacity-30 hover:border-opacity-50"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
