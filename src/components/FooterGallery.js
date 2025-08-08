import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import DynamicCarousel from './DynamicCarousel';

// Importar datos de las otras páginas
import { restaurantsData } from '../pages/RestaurantsPage'; // Importamos directamente desde RestaurantsPage
import toursData from '../mock/toursData';
import shopCategoriesData from '../mock/shopCategoriesData';

const FooterGallery = () => {
  const scrollContainerRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
      // Mostrar indicador si hay más contenido a la derecha y no estamos al final
      // Y solo si la pantalla es pequeña (menos de lg)
      const isMobile = window.innerWidth < 1024; // Tailwind's 'lg' breakpoint
      setShowScrollIndicator(isMobile && scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      // También verificar al cargar y al redimensionar
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  return (
    <motion.section
      className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 mt-8 rounded-lg shadow-xl relative overflow-hidden w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.8 }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Contenedor para el scroll horizontal en móviles */}
      <div 
        ref={scrollContainerRef}
        className="relative z-10 flex overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory
                   lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0 lg:mb-0" // En pantallas grandes, vuelve a ser grid
      >
        {/* Carrusel de Restaurantes */}
        <motion.div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] mr-4 snap-start
                     lg:w-auto lg:mr-0" // Ancho para 2 tarjetas en móvil, sin margen en lg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + 0 * 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}
        >
          <div className="bg-white rounded-xl p-2 flex flex-col items-center text-center shadow-lg h-64 w-full">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Restaurantes</h4>
            <DynamicCarousel items={restaurantsData} type="restaurant" navigateTo="/restaurants" />
          </div>
        </motion.div>

        {/* Carrusel de Tours */}
        <motion.div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] mr-4 snap-start
                     lg:w-auto lg:mr-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + 1 * 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}
        >
          <div className="bg-white rounded-xl p-2 flex flex-col items-center text-center shadow-lg h-64 w-full">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Tours</h4>
            <DynamicCarousel items={toursData} type="tour" navigateTo="/tours" />
          </div>
        </motion.div>

        {/* Carrusel de Categorías de Tienda */}
        <motion.div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] mr-4 snap-start
                     lg:w-auto lg:mr-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + 2 * 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}
        >
          <div className="bg-white rounded-xl p-2 flex flex-col items-center text-center shadow-lg h-64 w-full">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Tienda</h4>
            <DynamicCarousel items={Object.values(shopCategoriesData)} type="shopCategory" navigateTo="/shop" />
          </div>
        </motion.div>

        {/* Tarjeta Estática (o carrusel si hay más contenido para Taxi) */}
        <motion.div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] snap-start
                     lg:w-auto" // Ancho para 2 tarjetas en móvil, sin margen en lg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + 3 * 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}
          onClick={() => window.location.href = '/taxi'} // Redirige a la página de Taxi
        >
          <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg h-64 w-full justify-center">
            <div className="text-5xl sm:text-6xl mb-2 sm:mb-4">🚕</div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
              Taxi
            </h4>
            <p className="text-sm sm:text-lg text-gray-600">
              Transporte seguro y rápido.
            </p>
            <FaMapMarkerAlt className="mt-2 sm:mt-3 text-gray-400 text-lg sm:text-xl" />
          </div>
        </motion.div>
      </div>

      {/* Flecha indicadora de scroll (solo en móviles) */}
      {showScrollIndicator && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md cursor-pointer z-20
                     flex items-center justify-center lg:hidden" // Visible en sm y md, oculto en lg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollBy({ left: scrollContainerRef.current.clientWidth / 2, behavior: 'smooth' });
            }
          }}
        >
          <FaChevronRight className="text-blue-600 text-xl" />
        </motion.div>
      )}
    </motion.section>
  );
};

export default FooterGallery;