import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaWifi } from 'react-icons/fa'; // Ejemplo de otro ícono

const QuickAccess = () => {
  return (
    <motion.section
      className="bg-blue-200 p-6 flex justify-around items-center flex-wrap gap-4 sm:gap-6 my-8 rounded-lg shadow-md w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.3, duration: 0.8 }}
    >
      <motion.button
        className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-xl font-bold shadow-lg flex items-center gap-2 sm:gap-3 flex-1 min-w-[140px] max-w-[200px]"
        whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe' }}
        whileTap={{ scale: 0.95 }}
      >
        <FaShoppingCart className="text-xl sm:text-2xl" />
        Mercado
      </motion.button>
      <motion.button
        className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-xl font-bold shadow-lg flex items-center gap-2 sm:gap-3 flex-1 min-w-[140px] max-w-[200px]"
        whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe' }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWifi className="text-xl sm:text-2xl" />
        Internet
      </motion.button>
    </motion.section>
  );
};

export default QuickAccess;