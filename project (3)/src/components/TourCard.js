import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const TourCard = ({ tour, index }) => {
  const handleReserveClick = () => {
    // Construir el mensaje de WhatsApp
    let message = `*📅 Reserva de Tour*\n`;
    message += `🏝️ *Tour:* ${tour.name}\n`;
    message += `💰 *Precio:* ${tour.price}\n`;
    message += `📍 *Ubicación:* ${tour.location}\n`;
    message += `⏳ *Duración:* ${tour.duration}\n`;
    message += `\n¡Hola! Me gustaría reservar este tour. Por favor, envíame más detalles para coordinar la fecha y hora.`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp (ejemplo, reemplaza con el número real)
    const phoneNumber = "975842622"; // Reemplaza con el número de WhatsApp real

    // URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      className="relative rounded-lg shadow-lg overflow-hidden text-white font-semibold leading-tight h-64
                 bg-white border border-gray-200 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl
                 md:h-72 lg:h-80" // Aumentamos la altura de la tarjeta en pantallas grandes
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <img
        alt={tour.name}
        className="absolute inset-0 w-full h-full object-cover"
        src={tour.image}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-800/80 to-transparent p-4 flex flex-col justify-between" // Usamos un degradado de azul más oscuro
      >
        <h2 className="font-bold text-xl drop-shadow-md text-white md:text-2xl lg:text-3xl">{tour.name}</h2> {/* Texto blanco para el título */}
        <div className="flex-grow"></div>
        <p className="text-sm drop-shadow-md max-w-[90%] mb-2 text-gray-100 md:text-base lg:text-lg overflow-hidden line-clamp-3"> {/* Añadimos line-clamp-3 para limitar líneas */}
          {tour.description}
        </p>
        <div
          className="flex flex-col items-end text-sm font-normal drop-shadow-md space-y-1"
        >
          {tour.originalPrice && (
            <span className="line-through opacity-70 text-gray-200 md:text-base">{tour.originalPrice}</span> // Texto gris claro para precio original
          )}
          <span className="font-bold text-yellow-300 text-lg md:text-xl lg:text-2xl">{tour.price}</span> {/* Texto amarillo para el precio */}
          <motion.button
            onClick={handleReserveClick}
            className="reserveBtn bg-yellow-400 text-gray-900 text-xs font-bold rounded-full px-4 py-2 w-max drop-shadow-md flex items-center gap-1
                       hover:bg-yellow-500 transition-colors duration-300
                       md:text-sm md:px-5 md:py-2.5 lg:text-base lg:px-6 lg:py-3" // Aumentamos el tamaño del botón
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-sm md:text-base lg:text-lg" /> RESERVAR AHORA
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default TourCard;