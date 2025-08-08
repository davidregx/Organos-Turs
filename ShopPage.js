import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaTimes, FaWhatsapp, FaCamera, FaTrash, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ShopProductCard from '../components/ShopProductCard'; // Importamos el nuevo componente
import html2canvas from 'html2canvas'; // Para capturar la pantalla

// Base de datos de productos por categorías (precios en Soles Peruanos)
const productosDB = {
  frutas: {
    emoji: '🍎',
    nombre: 'Frutas',
    subcategorias: {
      manzanas: {
        emoji: '🍏',
        nombre: 'Manzanas',
        productos: [
          { nombre: 'Manzana Roja', precio: 5.50, unidad: 'kg' },
          { nombre: 'Manzana Verde', precio: 6.00, unidad: 'kg' },
          { nombre: 'Manzana Amarilla', precio: 5.80, unidad: 'kg' },
          { nombre: 'Manzana Gala', precio: 6.50, unidad: 'kg' },
          { nombre: 'Manzana Fuji', precio: 7.00, unidad: 'kg' }
        ]
      },
      platanos: {
        emoji: '🍌',
        nombre: 'Plátanos',
        productos: [
          { nombre: 'Plátano Común', precio: 3.00, unidad: 'kg' },
          { nombre: 'Plátano Maduro', precio: 2.80, unidad: 'kg' },
          { nombre: 'Plátano Verde', precio: 3.20, unidad: 'kg' },
          { nombre: 'Plátano Dominico', precio: 4.00, unidad: 'kg' }
        ]
      },
      naranjas: {
        emoji: '🍊',
        nombre: 'Naranjas',
        productos: [
          { nombre: 'Naranja Común', precio: 3.50, unidad: 'kg' },
          { nombre: 'Naranja Valencia', precio: 4.20, unidad: 'kg' },
          { nombre: 'Naranja Navel', precio: 5.00, unidad: 'kg' },
          { nombre: 'Mandarina', precio: 4.80, unidad: 'kg' }
        ]
      },
      citricos: {
        emoji: '🍋',
        nombre: 'Otros Cítricos',
        productos: [
          { nombre: 'Limón', precio: 7.00, unidad: 'kg' },
          { nombre: 'Lima', precio: 8.00, unidad: 'kg' },
          { nombre: 'Toronja', precio: 4.20, unidad: 'kg' },
          { nombre: 'Pomelo', precio: 6.00, unidad: 'kg' }
        ]
      }
    }
  },
  verduras: {
    emoji: '🥕',
    nombre: 'Verduras',
    subcategorias: {
      hojas: {
        emoji: '🥬',
        nombre: 'Hojas Verdes',
        productos: [
          { nombre: 'Lechuga', precio: 3.00, unidad: 'unidad' },
          { nombre: 'Espinaca', precio: 5.00, unidad: 'kg' },
          { nombre: 'Acelga', precio: 4.20, unidad: 'kg' },
          { nombre: 'Rúcula', precio: 6.50, unidad: 'kg' },
          { nombre: 'Apio', precio: 5.80, unidad: 'kg' }
        ]
      },
      tuberculos: {
        emoji: '🥔',
        nombre: 'Tubérculos',
        productos: [
          { nombre: 'Papa Común', precio: 3.50, unidad: 'kg' },
          { nombre: 'Papa Amarilla', precio: 4.20, unidad: 'kg' },
          { nombre: 'Camote', precio: 5.00, unidad: 'kg' },
          { nombre: 'Yuca', precio: 4.00, unidad: 'kg' },
          { nombre: 'Zanahoria', precio: 4.80, unidad: 'kg' }
        ]
      },
      tomates: {
        emoji: '🍅',
        nombre: 'Tomates',
        productos: [
          { nombre: 'Tomate Común', precio: 6.00, unidad: 'kg' },
          { nombre: 'Tomate Cherry', precio: 10.00, unidad: 'kg' },
          { nombre: 'Tomate de Árbol', precio: 8.50, unidad: 'kg' },
          { nombre: 'Tomate Riñón', precio: 7.50, unidad: 'kg' }
        ]
      },
      cebollas: {
        emoji: '🧅',
        nombre: 'Cebollas',
        productos: [
          { nombre: 'Cebolla Blanca', precio: 4.00, unidad: 'kg' },
          { nombre: 'Cebolla Morada', precio: 5.00, unidad: 'kg' },
          { nombre: 'Cebolla Larga', precio: 5.80, unidad: 'kg' },
          { nombre: 'Cebollín', precio: 2.00, unidad: 'paquete' }
        ]
      }
    }
  },
  carnes: {
    emoji: '🥩',
    nombre: 'Carnes',
    subcategorias: {
      res: {
        emoji: '🐄',
        nombre: 'Carne de Res',
        productos: [
          { nombre: 'Lomo Fino', precio: 28.50, unidad: 'kg' },
          { nombre: 'Chuleta', precio: 24.00, unidad: 'kg' },
          { nombre: 'Bistec', precio: 23.00, unidad: 'kg' },
          { nombre: 'Carne Molida', precio: 20.00, unidad: 'kg' },
          { nombre: 'Costilla', precio: 18.00, unidad: 'kg' }
        ]
      },
      pollo: {
        emoji: '🐔',
        nombre: 'Pollo',
        productos: [
          { nombre: 'Pollo Entero', precio: 12.50, unidad: 'kg' },
          { nombre: 'Pechuga', precio: 16.00, unidad: 'kg' },
          { nombre: 'Muslo', precio: 11.00, unidad: 'kg' },
          { nombre: 'Alas', precio: 10.00, unidad: 'kg' },
          { nombre: 'Pollo Desmenuzado', precio: 18.00, unidad: 'kg' }
        ]
      },
      cerdo: {
        emoji: '🐖',
        nombre: 'Carne de Cerdo',
        productos: [
          { nombre: 'Lomo de Cerdo', precio: 20.00, unidad: 'kg' },
          { nombre: 'Chuleta de Cerdo', precio: 19.00, unidad: 'kg' },
          { nombre: 'Tocino', precio: 16.00, unidad: 'kg' },
          { nombre: 'Jamón', precio: 25.00, unidad: 'kg' }
        ]
      },
      pescado: {
        emoji: '🐟',
        nombre: 'Pescados',
        productos: [
          { nombre: 'Tilapia', precio: 15.00, unidad: 'kg' },
          { nombre: 'Trucha', precio: 22.00, unidad: 'kg' },
          { nombre: 'Atún', precio: 26.00, unidad: 'kg' },
          { nombre: 'Salmón', precio: 40.00, unidad: 'kg' }
        ]
      }
    }
  },
  lacteos: {
    emoji: '🥛',
    nombre: 'Lácteos',
    subcategorias: {
      leche: {
        emoji: '🥛',
        nombre: 'Leche',
        productos: [
          { nombre: 'Leche Entera', precio: 4.20, unidad: 'L' },
          { nombre: 'Leche Descremada', precio: 4.50, unidad: 'L' },
          { nombre: 'Leche Deslactosada', precio: 5.00, unidad: 'L' },
          { nombre: 'Leche de Almendra', precio: 9.00, unidad: 'L' }
        ]
      },
      quesos: {
        emoji: '🧀',
        nombre: 'Quesos',
        productos: [
          { nombre: 'Queso Fresco', precio: 12.00, unidad: 'kg' },
          { nombre: 'Queso Mozzarella', precio: 15.00, unidad: 'kg' },
          { nombre: 'Queso Cheddar', precio: 16.50, unidad: 'kg' },
          { nombre: 'Queso Manchego', precio: 22.00, unidad: 'kg' }
        ]
      },
      yogurt: {
        emoji: '🍶',
        nombre: 'Yogurt',
        productos: [
          { nombre: 'Yogurt Natural', precio: 8.00, unidad: 'kg' },
          { nombre: 'Yogurt con Frutas', precio: 9.50, unidad: 'kg' },
          { nombre: 'Yogurt Griego', precio: 12.50, unidad: 'kg' },
          { nombre: 'Yogurt Descremado', precio: 8.80, unidad: 'kg' }
        ]
      }
    }
  },
  granos: {
    emoji: '🌾',
    nombre: 'Granos y Cereales',
    subcategorias: {
      arroz: {
        emoji: '🍚',
        nombre: 'Arroz',
        productos: [
          { nombre: 'Arroz Blanco', precio: 4.00, unidad: 'kg' },
          { nombre: 'Arroz Integral', precio: 5.80, unidad: 'kg' },
          { nombre: 'Arroz Basmati', precio: 8.00, unidad: 'kg' },
          { nombre: 'Arroz de Coco', precio: 6.50, unidad: 'kg' }
        ]
      },
      frijoles: {
        emoji: '🫘',
        nombre: 'Frijoles',
        productos: [
          { nombre: 'Frijol Negro', precio: 5.00, unidad: 'kg' },
          { nombre: 'Frijol Rojo', precio: 5.20, unidad: 'kg' },
          { nombre: 'Frijol Blanco', precio: 5.50, unidad: 'kg' },
          { nombre: 'Lenteja', precio: 6.50, unidad: 'kg' }
        ]
      },
      pasta: {
        emoji: '🍝',
        nombre: 'Pasta',
        productos: [
          { nombre: 'Espaguetti', precio: 5.00, unidad: 'paquete' },
          { nombre: 'Macarrones', precio: 5.20, unidad: 'paquete' },
          { nombre: 'Penne', precio: 5.80, unidad: 'paquete' },
          { nombre: 'Lasaña', precio: 7.20, unidad: 'paquete' }
        ]
      }
    }
  },
  bebidas: {
    emoji: '🥤',
    nombre: 'Bebidas',
    subcategorias: {
      gaseosas: {
        emoji: '🥤',
        nombre: 'Gaseosas',
        productos: [
          { nombre: 'Coca Cola', precio: 8.00, unidad: 'L' },
          { nombre: 'Pepsi', precio: 7.50, unidad: 'L' },
          { nombre: 'Sprite', precio: 7.80, unidad: 'L' },
          { nombre: 'Fanta', precio: 7.80, unidad: 'L' }
        ]
      },
      jugos: {
        emoji: '🧃',
        nombre: 'Jugos',
        productos: [
          { nombre: 'Jugo de Naranja', precio: 10.00, unidad: 'L' },
          { nombre: 'Jugo de Manzana', precio: 10.50, unidad: 'L' },
          { nombre: 'Jugo de Uva', precio: 11.50, unidad: 'L' },
          { nombre: 'Jugo Multivitamínico', precio: 13.00, unidad: 'L' }
        ]
      },
      agua: {
        emoji: '💧',
        nombre: 'Agua',
        productos: [
          { nombre: 'Agua Mineral', precio: 3.50, unidad: 'L' },
          { nombre: 'Agua con Gas', precio: 5.00, unidad: 'L' },
          { nombre: 'Agua Saborizada', precio: 6.00, unidad: 'L' }
        ]
      }
    }
  }
};

const ShopPage = () => {
  const navigate = useNavigate();
  const [listaProductos, setListaProductos] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [showProducts, setShowProducts] = useState(false);

  const categoriasGridRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Formulario de agregar producto manual
  const [manualProductName, setManualProductName] = useState('');
  const [manualQuantity, setManualQuantity] = useState(1);
  const [manualUnit, setManualUnit] = useState('unidad');
  const [manualPrice, setManualPrice] = useState('');

  useEffect(() => {
    // Actualizar el indicador de scroll al montar y al hacer scroll
    const updateIndicator = () => {
      if (categoriasGridRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = categoriasGridRef.current;
        const hasHorizontalScroll = scrollWidth > clientWidth;
        const atEnd = scrollLeft + clientWidth >= scrollWidth - 5; // Pequeño margen de error
        setShowScrollIndicator(activeCategory === null && hasHorizontalScroll && !atEnd);
      }
    };

    updateIndicator(); // Llamar al montar
    const currentRef = categoriasGridRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', updateIndicator);
    }
    window.addEventListener('resize', updateIndicator);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateIndicator);
      }
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeCategory]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleAddProduct = (product) => {
    setListaProductos(prevList => {
      const existingItemIndex = prevList.findIndex(item => item.nombre === product.nombre);
      if (existingItemIndex > -1) {
        const newList = [...prevList];
        newList[existingItemIndex].cantidad += 1; // Asumimos que siempre se agrega 1 unidad
        return newList;
      } else {
        return [...prevList, { ...product, id: Date.now(), cantidad: 1 }];
      }
    });
    showNotification(`${product.nombre} añadido a la lista`);
  };

  const handleRemoveProduct = (id) => {
    setListaProductos(prevList => {
      const existingItemIndex = prevList.findIndex(item => item.id === id);
      if (existingItemIndex > -1) {
        const newList = [...prevList];
        if (newList[existingItemIndex].cantidad > 1) {
          newList[existingItemIndex].cantidad -= 1;
        } else {
          newList.splice(existingItemIndex, 1);
        }
        return newList;
      }
      return prevList;
    });
  };

  const calculateTotal = () => {
    return listaProductos.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  };

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  const generateWhatsAppMessage = () => {
    if (listaProductos.length === 0) {
      showNotification('Tu lista está vacía. Agrega algunos productos antes de enviar.');
      return;
    }

    let texto = '🛒 *LISTA DE MERCADO*\n\n';
    let total = 0;

    listaProductos.forEach((producto, index) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      texto += `${index + 1}. *${producto.nombre}*\n`;
      texto += `   Cantidad: ${producto.cantidad} ${producto.unidad}${producto.cantidad > 1 && producto.unidad === 'unidad' ? 'es' : ''}\n`;

      if (producto.precio > 0) {
        texto += `   Precio: S/${subtotal.toFixed(2)}\n`;
      }
      texto += '\n';
    });

    if (total > 0) {
      texto += `💰 *TOTAL ESTIMADO: S/${total.toFixed(2)}*\n\n`;
    }

    texto += '📱 Lista generada desde Lista de Mercado App';
    return texto;
  };

  const sendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    if (message) {
      const phoneNumber = '975842622'; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  const captureList = async () => {
    if (listaProductos.length === 0) {
      showNotification('Tu lista está vacía. Agrega algunos productos antes de capturar.');
      return;
    }

    // Ocultar elementos que no queremos en la captura (ej. el botón flotante del carrito)
    const cartIconElement = document.getElementById('cartIcon');
    if (cartIconElement) cartIconElement.style.display = 'none';
    const floatingCartElement = document.getElementById('floatingCart');
    if (floatingCartElement) floatingCartElement.style.display = 'none';

    // Capturar el contenedor principal de la lista
    // Usamos document.body para capturar toda la página si es necesario, o un contenedor específico
    const containerToCapture = document.querySelector('.shop-container-full-width'); // Nuevo selector para el contenedor principal
    if (containerToCapture) {
      try {
        const canvas = await html2canvas(containerToCapture, {
          scale: 2, // Aumentar la escala para mejor calidad
          useCORS: true, // Importante si hay imágenes de diferentes orígenes
          logging: true,
          windowWidth: containerToCapture.scrollWidth, // Capturar el ancho completo del contenido
          windowHeight: containerToCapture.scrollHeight, // Capturar el alto completo del contenido
        });
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = image;
        a.download = 'lista_mercado.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showNotification('Lista capturada y descargada');
      } catch (error) {
        console.error("Error al capturar la lista:", error);
        showNotification('Error al capturar la lista.');
      } finally {
        // Volver a mostrar los elementos ocultos
        if (cartIconElement) cartIconElement.style.display = 'flex';
        if (floatingCartElement) floatingCartElement.style.display = 'flex';
      }
    }
  };

  const clearList = () => {
    if (listaProductos.length > 0 && window.confirm('¿Estás seguro de que quieres limpiar toda la lista?')) {
      setListaProductos([]);
      showNotification('Lista limpiada');
    }
  };

  const handleCategoryClick = (categoryKey) => {
    setActiveCategory(categoryKey);
    setActiveSubcategory(null);
    setShowProducts(false);
  };

  const handleSubcategoryClick = (subCategoryKey) => {
    setActiveSubcategory(subCategoryKey);
    setShowProducts(true);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
    setActiveSubcategory(null);
    setShowProducts(false);
  };

  const handleBackToSubcategories = () => {
    setActiveSubcategory(null);
    setShowProducts(false);
  };

  const handleManualAddProduct = () => {
    if (!manualProductName.trim()) {
      showNotification('Por favor, ingresa el nombre del producto');
      return;
    }

    const newProduct = {
      id: Date.now(),
      nombre: manualProductName.trim(),
      cantidad: manualQuantity,
      unidad: manualUnit,
      precio: parseFloat(manualPrice) || 0,
    };

    setListaProductos(prevList => [...prevList, newProduct]);
    showNotification('Producto agregado correctamente');
    setManualProductName('');
    setManualQuantity(1);
    setManualUnit('unidad');
    setManualPrice('');
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex flex-col items-center shop-container-full-width" // Fondo de la página principal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container w-full mx-auto bg-white bg-opacity-95 backdrop-blur-md rounded-2xl p-5 shadow-xl relative pb-20"> {/* Eliminamos max-w-2xl */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft className="mr-2" /> Volver
        </motion.button>
        
        {/* Nuevo Header para el título de la tienda */}
        <header className="bg-blue-500 rounded-md p-5 shadow-md mb-8"> {/* Fondo azul de la página principal */}
          <h1 className="text-white font-extrabold text-xl flex items-center justify-center gap-2 md:text-3xl lg:text-4xl"> {/* Estilo del título de Tours */}
            <span className="text-yellow-300">🛒</span> Lista de Mercado
          </h1>
          <p className="text-white text-sm mt-1 leading-tight text-center md:text-base lg:text-lg">
            Organiza tus compras de forma sencilla.
          </p>
        </header>

        {/* Categorías y Productos */}
        <div className="relative z-10">
          {activeCategory === null && (
            <div className="categorias-container mb-6">
              <h3 className="text-blue-600 text-xl font-semibold text-center mb-4">📋 Categorías de Productos</h3> {/* Color de la página principal */}
              <div ref={categoriasGridRef} className="categorias-grid flex overflow-x-auto gap-3 pb-3">
                {Object.keys(productosDB).map(categoryKey => {
                  const category = productosDB[categoryKey];
                  return (
                    <motion.div
                      key={categoryKey}
                      className={`categoria-item flex-shrink-0 min-w-[120px] bg-blue-50 border-2 border-blue-400 rounded-xl p-3 text-center font-semibold text-blue-600 text-sm cursor-pointer transition-all duration-300
                                  ${activeCategory === categoryKey ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''}`} // Colores de la página principal
                      data-emoji={category.emoji}
                      onClick={() => handleCategoryClick(categoryKey)}
                      whileHover={{ translateY: -3, boxShadow: '0 5px 15px rgba(37, 99, 235, 0.3)', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white' }} // Colores de la página principal
                    >
                      <span className="text-2xl block mb-1">{category.emoji}</span>
                      {category.nombre}
                    </motion.div>
                  );
                })}
              </div>
              {showScrollIndicator && (
                <div className="scroll-indicator absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg shadow-md animate-bounce-right"> {/* Color de la página principal */}
                  <FaChevronRight />
                </div>
              )}
            </div>
          )}

          {activeCategory && activeSubcategory === null && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="subcategorias-grid grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6"
            >
              <h3 className="col-span-full text-blue-600 text-xl font-semibold text-center mb-2"> {/* Color de la página principal */}
                Subcategorías de {productosDB[activeCategory].nombre}
              </h3>
              {Object.keys(productosDB[activeCategory].subcategorias).map(subCategoryKey => {
                const subCategory = productosDB[activeCategory].subcategorias[subCategoryKey];
                return (
                  <motion.div
                    key={subCategoryKey}
                    className={`subcategoria-item bg-yellow-50 border-2 border-yellow-400 rounded-xl p-3 text-center font-semibold text-gray-800 text-sm cursor-pointer transition-all duration-300
                                ${activeSubcategory === subCategoryKey ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' : ''}`} // Colores de la página principal
                    data-emoji={subCategory.emoji}
                    onClick={() => handleSubcategoryClick(subCategoryKey)}
                    whileHover={{ translateY: -2, boxShadow: '0 3px 10px rgba(255, 213, 79, 0.3)', background: 'linear-gradient(135deg, #facc15, #fb923c)' }} // Colores de la página principal
                  >
                    <span className="text-2xl block mb-1">{subCategory.emoji}</span>
                    {subCategory.nombre}
                  </motion.div>
                );
              })}
              <button
                className="col-span-full btn bg-gray-300 text-gray-800 hover:bg-gray-400 mt-4"
                onClick={handleBackToCategories}
              >
                ← Volver a Categorías
              </button>
            </motion.div>
          )}

          {activeSubcategory && showProducts && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="productos-grid grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6"
            >
              <h3 className="col-span-full text-blue-600 text-xl font-semibold text-center mb-2"> {/* Color de la página principal */}
                Productos de {productosDB[activeCategory].subcategorias[activeSubcategory].nombre}
              </h3>
              {productosDB[activeCategory].subcategorias[activeSubcategory].productos.map(product => (
                <ShopProductCard key={product.nombre} product={product} onAddProduct={handleAddProduct} />
              ))}
              <button
                className="col-span-full btn bg-gray-300 text-gray-800 hover:bg-gray-400 mt-4"
                onClick={handleBackToSubcategories}
              >
                ← Volver a Subcategorías
              </button>
            </motion.div>
          )}
        </div>

        {/* Sección de agregar producto manual */}
        <div className="input-section flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            id="producto"
            placeholder="Nombre del producto"
            className="w-full p-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" // Colores de la página principal
            value={manualProductName}
            onChange={(e) => setManualProductName(e.target.value)}
          />
          <input
            type="number"
            id="cantidad"
            placeholder="Cantidad"
            min="1"
            value={manualQuantity}
            onChange={(e) => setManualQuantity(parseInt(e.target.value) || 1)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" // Colores de la página principal
          />
          <select
            id="unidad"
            value={manualUnit}
            onChange={(e) => setManualUnit(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" // Colores de la página principal
          >
            <option value="unidad">Unidad</option>
            <option value="kg">Kilogramo</option>
            <option value="lb">Libra</option>
            <option value="g">Gramo</option>
            <option value="L">Litro</option>
            <option value="ml">Mililitro</option>
            <option value="paquete">Paquete</option>
            <option value="caja">Caja</option>
          </select>
          <input
            type="number"
            id="precio"
            placeholder="Precio (opcional)"
            min="0"
            step="0.01"
            value={manualPrice}
            onChange={(e) => setManualPrice(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" // Colores de la página principal
          />
          <motion.button
            className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl uppercase tracking-wide shadow-md
                       hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300" // Colores de la página principal
            onClick={handleManualAddProduct}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agregar
          </motion.button>
        </div>

        {listaProductos.length === 0 && (
          <div className="empty-state text-center p-8 text-gray-500 text-lg">
            <span className="text-5xl block mb-3">🛒</span>
            Tu lista está vacía. ¡Agrega algunos productos!
          </div>
        )}
      </div>

      {/* Ícono flotante del carrito */}
      <motion.div
        id="cartIcon"
        className="cart-icon fixed bottom-5 right-5 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl cursor-pointer z-50" // Colores de la página principal
        onClick={toggleCart}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        <FaShoppingCart className="text-white text-2xl" />
        <AnimatePresence>
          {listaProductos.length > 0 && (
            <motion.div
              className="cart-count absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {listaProductos.length}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Carrito flotante */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            id="floatingCart"
            className="floating-cart fixed inset-0 md:inset-auto md:bottom-5 md:right-5 md:w-96 md:h-auto md:max-h-[80vh] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl z-[1000] flex flex-col"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="cart-header bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center rounded-t-2xl"> {/* Colores de la página principal */}
              <div className="cart-title text-xl font-semibold">Tu Carrito de Compras</div>
              <button className="close-cart text-white text-2xl p-1" onClick={toggleCart}>
                <FaTimes />
              </button>
            </div>
            <div className="cart-content flex-1 overflow-y-auto p-4 bg-gray-50">
              {listaProductos.length === 0 ? (
                <div className="empty-state text-center p-8 text-gray-500 text-lg">
                  <span className="text-5xl block mb-3">🛒</span>
                  Tu carrito está vacío.
                </div>
              ) : (
                listaProductos.map(item => (
                  <div key={item.id} className="cart-item flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <div className="cart-item-name font-medium text-gray-800 flex-1 text-sm">{item.nombre}</div>
                    <div className="cart-item-details text-gray-600 text-xs text-right ml-2">
                      {item.cantidad} {item.unidad}{item.cantidad > 1 && item.unidad === 'unidad' ? 'es' : ''}
                      <br />
                      {item.precio > 0 && `S/${(item.precio * item.cantidad).toFixed(2)}`}
                    </div>
                    <button
                      className="ml-2 bg-red-500 text-white rounded-md px-2 py-1 text-xs hover:bg-red-600 transition-colors"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      -
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="cart-total bg-blue-50 p-4 text-center font-bold text-xl text-blue-600 border-t-2 border-blue-500"> {/* Colores de la página principal */}
              Total estimado: S/{calculateTotal().toFixed(2)}
            </div>
            <div className="cart-actions flex flex-wrap gap-3 p-4 bg-blue-50">
              <motion.button
                className="btn bg-red-500 text-white font-semibold py-3 rounded-xl flex-1 flex items-center justify-center gap-2 shadow-md
                           hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
                onClick={captureList}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCamera /> Capturar
              </motion.button>
              <motion.button
                className="btn bg-green-500 text-white font-semibold py-3 rounded-xl flex-1 flex items-center justify-center gap-2 shadow-md
                           hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
                onClick={sendWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp /> WhatsApp
              </motion.button>
              <motion.button
                className="btn bg-gray-400 text-gray-800 font-semibold py-3 rounded-xl flex-1 flex items-center justify-center gap-2 shadow-md
                           hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
                onClick={clearList}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaTrash /> Limpiar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notificaciones */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-4 right-4 left-4 sm:left-auto bg-green-500 text-white p-3 rounded-lg shadow-lg z-[2000] text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ShopPage;