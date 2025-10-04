import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import WhiteButtonMenu from '../utils/WhiteButtonMenu';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/imageHelpers';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('platillos');
  const { addItem } = useCart();

  const categories = [
    { id: 'platillos', name: 'Platillos' },
    { id: 'guarniciones', name: 'Guarniciones' },
    { id: 'bebidas', name: 'Bebidas' }
  ];

  const menuData = {
    platillos: [
      {
        id: 1,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Chiles Rellenos Tradicionales",
        description: "Chiles poblanos rellenos de queso, capeados en salsa roja.",
        price: 120
      },
      {
        id: 2,
        image: assetUrl("/images/chilesrellenos.png"), 
        title: "Mole Poblano",
        description: "Pollo en mole tradicional con sesamo y chocolate.",
        price: 150
      },
      {
        id: 3,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Cochinita Pibil",
        description: "Cerdo marinado en achiote cocido en hoja de plátano.",
        price: 140
      }
    ],
    guarniciones: [
      {
        id: 4,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Arroz Mexicano",
        description: "Arroz rojo tradicional con verduras y especias.",
        price: 35
      },
      {
        id: 5,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Frijoles Refritos",
        description: "Frijoles negros refritos con cebolla y especias.",
        price: 30
      },
      {
        id: 6,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Plátanos Machos",
        description: "Plátanos maduros fritos con crema y queso.",
        price: 45
      }
    ],
    ensaladas: [
      {
        id: 7,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Ensalada de Nopales",
        description: "Nopales asados con jitomate, cebolla y cilantro.",
        price: 65
      },
      {
        id: 8,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Ensalada Mixta",
        description: "Lechuga, tomate, pepino y aderezo de la casa.",
        price: 55
      },
      {
        id: 9,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Pico de Gallo",
        description: "Jitomate, cebolla, chile serrano y cilantro fresco.",
        price: 40
      }
    ],
    bebidas: [
      {
        id: 10,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Agua de Horchata",
        description: "Refrescante agua de arroz con canela y azúcar.",
        price: 25
      },
      {
        id: 11,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Agua de Jamaica",
        description: "Agua fresca de flor de jamaica natural.",
        price: 25
      },
      {
        id: 12,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Refresco",
        description: "Coca Cola, Pepsi, Sprite o Fanta en lata.",
        price: 20
      }
    ],
    caldos: [
      {
        id: 13,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Caldo de Pollo",
        description: "Caldo casero con pollo, verduras y arroz.",
        price: 85
      },
      {
        id: 14,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Pozole Rojo",
        description: "Pozole tradicional con cerdo y chile guajillo.",
        price: 95
      },
      {
        id: 15,
        image: assetUrl("/images/chilesrellenos.png"),
        title: "Sopa de Tortilla",
        description: "Sopa con tiras de tortilla, chile pasilla y aguacate.",
        price: 75
      }
    ]
  };

  const handleAddClick = (productId) => {
    const allItems = Object.values(menuData).flat();
    const product = allItems.find(item => item.id === productId);
    
    if (product) {
      addItem(product);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className="w-full py-6 sm:py-16 px-3 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold font-inter mb-4 sm:mb-8 text-left">
          Descubre nuestro menú
        </h2>
        
        {/* Botones de categorías */}
        <div className="grid grid-cols-3 sm:flex sm:justify-start gap-2 sm:gap-4 mb-6 sm:mb-12">
          {categories.map((category) => (
            <WhiteButtonMenu
              key={category.id}
              text={category.name}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {menuData[activeCategory].map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              onAddClick={handleAddClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;