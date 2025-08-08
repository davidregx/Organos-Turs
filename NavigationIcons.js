import React from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaUtensils, FaMapSigns, FaStore } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const iconsData = [
  { name: 'Taxi', icon: FaMotorcycle, color: 'bg-pink-400', path: '/taxi' },
  { name: 'Rest', icon: FaUtensils, color: 'bg-blue-400', path: '/restaurants' },
  { name: 'Tours', icon: FaMapSigns, color: 'bg-orange-400', path: '/tours' },
  { name: 'Tienda', icon: FaStore, color: 'bg-red-400', path: '/shop' },
];

const NavigationIcons = () => {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <motion.section
      className="relative p-4 md:p-12 bg-yellow-400 shadow-lg w-full" // Reducimos el padding en pantallas pequeñas
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Contenedor para los íconos: flex, no-wrap, justify-around, y overflow-x-auto para asegurar que siempre quepan */}
      <div className="max-w-6xl mx-auto flex flex-row justify-around items-stretch flex-nowrap gap-2 sm:gap-8 overflow-x-auto pb-2"> {/* Reducimos el gap y añadimos overflow-x-auto */}
        {iconsData.map((item, index) => (
          <motion.button
            key={item.name}
            className="flex flex-col items-center bg-white rounded-xl p-3 sm:p-8 text-center shadow-md cursor-pointer transition-all duration-300 border-2 border-transparent
                       hover:translate-y-[-5px] hover:shadow-xl hover:border-blue-500
                       flex-shrink-0 w-[calc(25%-0.5rem)] sm:w-[calc(25%-2rem)] min-w-[80px] max-w-[120px] sm:min-w-[150px] sm:max-w-[200px]" // Ajustamos el ancho y min-width
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleIconClick(item.path)}
          >
            <motion.div
              className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl shadow-lg transition-transform duration-300 ${item.color}`} // Reducimos el tamaño del círculo y el ícono
              whileHover={{ scale: 1.1 }}
            >
              <item.icon />
            </motion.div>
            <h3 className="mt-2 text-blue-600 text-sm sm:text-xl font-semibold mb-1"> {/* Reducimos el tamaño del texto */}
              {item.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-base"> {/* Reducimos el tamaño del texto */}
              {item.name === 'Taxi' && 'Transporte rápido'}
              {item.name === 'Rest' && 'Delicias culinarias'}
              {item.name === 'Tours' && 'Aventuras inolvidables'}
              {item.name === 'Tienda' && 'Compras locales'}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};

export default NavigationIcons;