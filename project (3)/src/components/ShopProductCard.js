import React from 'react';
import { motion } from 'framer-motion';

const ShopProductCard = ({ product, onAddProduct }) => {
  return (
    <motion.div
      className="producto-item bg-white border-2 border-blue-200 rounded-xl p-3 relative overflow-hidden cursor-pointer
                 hover:translate-y-[-2px] hover:shadow-md hover:border-blue-400 hover:bg-blue-50 transition-all duration-300" // Colores adaptados
      whileHover={{ boxShadow: '0 3px 10px rgba(37, 99, 235, 0.3)' }} // Sombra azul
    >
      <div className="producto-nombre font-semibold text-gray-800 mb-1 text-sm">{product.nombre}</div>
      <div className="producto-precio font-bold text-blue-600 text-base">S/{product.precio.toFixed(2)}</div> {/* Color azul para precio */}
      <div className="producto-unidad text-gray-600 text-xs">por {product.unidad}</div>
      <motion.div
        className="btn-agregar absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-xs rounded-b-xl
                   transform translate-y-full opacity-0 transition-all duration-300 cursor-pointer
                   hover:bg-blue-600" // Color azul para el botón
        onClick={() => onAddProduct(product)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Agregar a lista
      </motion.div>
    </motion.div>
  );
};

export default ShopProductCard;