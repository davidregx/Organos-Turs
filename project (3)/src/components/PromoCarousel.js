import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-761005834782019595/original/9d573305-7318-40f3-8ab9-cb61cad4e94a.jpeg?im_w=1440', // Nueva imagen para Playa de Los Órganos
    alt: 'Playa de Los Órganos',
    title: 'Bienvenidos',
    subtitle: 'El Paraíso te Espera',
    description: 'Descubre la magia de Los Órganos',
    style: {
      backgroundImage: 'url(https://a0.muscache.com/im/pictures/miso/Hosting-761005834782019595/original/9d573305-7318-40f3-8ab9-cb61cad4e94a.jpeg?im_w=1440)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    },
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Bienvenidos a <span className="text-yellow-400">Los Órganos</span>
        </motion.h3>
        <motion.p
          className="text-xl sm:text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Tu destino tropical en el norte de Perú
        </motion.p>
      </div>
    )
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqUqwUnIkB169N2J42cesLHLVc4yVmSXhM6N-sBSeZiREwZj4V0lkhGH97TlXyj44untBYqkrY64FBk_C-oo9n-fFlU1E4pdLOHTXpRrB6YrOD1SvdESFhj9_7b_nESzAGr611Xfw=s483-k-no', // Nueva imagen para Muelle de Los Órganos
    alt: 'Muelle de Los Órganos',
    title: 'Explora el Muelle',
    subtitle: 'Corazón de Los Órganos',
    description: 'Punto de partida de aventuras',
    style: {
      backgroundImage: 'url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqUqwUnIkB169N2J42cesLHLVc4yVmSXhM6N-sBSeZiREwZj4V0lkhGH97TlXyj44untBYqkrY64FBk_C-oo9n-fFlU1E4pdLOHTXpRrB6YrOD1SvdESFhj9_7b_nESzAGr611Xfw=s483-k-no)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    },
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          El <span className="text-blue-400">Muelle</span> de Los Órganos
        </motion.h3>
        <motion.p
          className="text-xl sm:text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Donde la aventura comienza
        </motion.p>
      </div>
    )
  },
  {
    id: 3,
    src: 'https://lh3.googleusercontent.com/p/AF1QipMK5QBBQxYhJ85kGj0zFvs4NJbkILvNnPRbchVm=w1000-h1000-k-no', // Nueva imagen para Vida Marina en Los Órganos
    alt: 'Vida Marina en Los Órganos',
    title: 'Vida Submarina',
    subtitle: 'Explora la Biodiversidad',
    description: 'Un mundo bajo el mar',
    style: {
      backgroundImage: 'url(https://lh3.googleusercontent.com/p/AF1QipMK5QBBQxYhJ85kGj0zFvs4NJbkILvNnPRbchVm=w1000-h1000-k-no)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    },
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Un Mundo Bajo el <span className="text-cyan-400">Mar</span>
        </motion.h3>
        <motion.p
          className="text-xl sm:text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Descubre la vida marina de Los Órganos
        </motion.p>
      </div>
    )
  }
];

const PromoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative w-full h-[40vh] sm:h-96 overflow-hidden shadow-xl rounded-lg my-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={images[currentIndex].style}
        >
          {images[currentIndex].content}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300`}
            data-active={currentIndex === index} // Añadimos data-active para el selector de Tailwind
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PromoCarousel;