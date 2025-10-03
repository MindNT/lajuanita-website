import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const TopSection = () => {
  const { addItem } = useCart();

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
    const allItems = [...popularDishes, ...promotions];
    const product = allItems.find(item => item.id === productId);
    
    if (product) {
      addItem(product);
    }
  };

  return (
    <section className="w-full bg-black bg-opacity-60 shadow-lg py-6 sm:py-16 px-3 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-center text-white text-2xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 sm:mb-12">
          Disfruta nuestros platillos más populares
        </h2>
        
        {/* Grid de platillos populares */}
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
          {popularDishes.map((dish) => (
            <ProductCard
              key={dish.id}
              id={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              onAddClick={handleAddClick}
            />
          ))}
        </div>

        {/* Título de promociones */}
        <h2 className="text-center text-white text-2xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 sm:mb-12">
          Conoce nuestras promociones
        </h2>
        
        {/* Grid de promociones */}
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {promotions.map((promo) => (
            <ProductCard
              key={promo.id}
              id={promo.id}
              image={promo.image}
              title={promo.title}
              description={promo.description}
              price={promo.price}
              onAddClick={handleAddClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSection;
