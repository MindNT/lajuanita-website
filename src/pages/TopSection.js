import React from 'react';
import ProductCard from '../components/ProductCard';

const TopSection = () => {
  // Datos dummy para platillos populares
  const popularDishes = [
    {
      id: 1,
      image: "/images/chilesrellenos.png",
      title: "Chiles Rellenos Tradicionales",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 120
    },
    {
      id: 2,
      image: "/images/chilesrellenos.png",
      title: "Chiles Rellenos de Picadillo",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 135
    },
    {
      id: 3,
      image: "/images/chilesrellenos.png",
      title: "Chiles Rellenos de Camarón",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 180
    }
  ];

  // Datos dummy para promociones
  const promotions = [
    {
      id: 1,
      image: "/images/chilesrellenos.png",
      title: "Combo Familiar",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 399
    },
    {
      id: 2,
      image: "/images/chilesrellenos.png",
      title: "Martes 2x1",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 120
    },
    {
      id: 3,
      image: "/images/chilesrellenos.png",
      title: "Menú Ejecutivo",
      description: "Chile poblano asado y relleno de queso derretido, capeado a mano y servido con salsa casera. ¡Sabor auténtico en cada bocado!",
      price: 149
    }
  ];

  const handleAddClick = (productId) => {
    console.log('Agregar producto:', productId);
    // Aquí iría la lógica para agregar al carrito
  };

  return (
    <section className="w-full bg-black bg-opacity-60 shadow-lg py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-center text-white text-5xl font-bold font-inter mb-12">
          Disfruta nuestros platillos más populares
        </h2>
        
        {/* Grid de platillos populares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {popularDishes.map((dish) => (
            <ProductCard
              key={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              onAddClick={() => handleAddClick(dish.id)}
            />
          ))}
        </div>

        {/* Título de promociones */}
        <h2 className="text-center text-white text-5xl font-bold font-inter mb-12">
          Conoce nuestras promociones
        </h2>
        
        {/* Grid de promociones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <ProductCard
              key={promo.id}
              image={promo.image}
              title={promo.title}
              description={promo.description}
              price={promo.price}
              onAddClick={() => handleAddClick(promo.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSection;
