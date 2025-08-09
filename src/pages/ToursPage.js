import React from 'react';
import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const toursData = [
  {
    id: 1,
    name: 'Clases de Surf',
    description: 'Aprende a surfear en las mejores olas del norte peruano con instructores certificados.',
    image: 'https://storage.googleapis.com/a1aa/image/b4e0c5bc-33f2-42c4-d32f-df6872645cc8.jpg',
    location: 'Playas de Los Órganos/Máncora',
    duration: '1.5 horas',
    originalPrice: 'S/. 100',
    price: 'S/. 80 por persona',
  },
  {
    id: 2,
    name: 'Avistamiento de Ballenas',
    description: 'Experiencia única observando ballenas jorobadas en su hábitat natural (Julio - Octubre).',
    image: 'https://storage.googleapis.com/a1aa/image/8892623b-ab4f-4670-f2ae-a792623b7854.jpg',
    location: 'Puerto de Los Órganos',
    duration: '3-4 horas',
    originalPrice: 'S/. 150',
    price: 'S/. 120 por persona',
  },
  {
    id: 3,
    name: 'Pesca Deportiva',
    description: 'Sal a pescar en alta mar y vive una aventura inolvidable con guías expertos.',
    image: 'https://storage.googleapis.com/a1aa/image/1f5e1f2c-d4d7-4d03-01ff-62914b7ebec7.jpg',
    location: 'Alta mar, saliendo de Los Órganos',
    duration: '4-5 horas',
    originalPrice: 'S/. 180',
    price: 'S/. 150 por persona',
  },
  {
    id: 4,
    name: 'Snorkel y Buceo',
    description: 'Explora el mundo submarino y descubre la vida marina local en aguas cristalinas.',
    image: 'https://storage.googleapis.com/a1aa/image/8f00231f-d061-423a-ab4b-557a46a577d0.jpg',
    location: 'Arrecifes de Los Órganos',
    duration: '2-3 horas',
    originalPrice: 'S/. 120',
    price: 'S/. 100 por persona',
  },
  {
    id: 5,
    name: 'Paseo en Bote',
    description: 'Recorre la costa y disfruta de las vistas panorámicas del océano y sus playas escondidas.',
    image: 'https://storage.googleapis.com/a1aa/image/885a9f12-9b1f-4371-66a3-eb07797765fc.jpg',
    location: 'Costa de Los Órganos',
    duration: '1-2 horas',
    originalPrice: 'S/. 80',
    price: 'S/. 60 por persona',
  },
  {
    id: 6,
    name: 'Tour Atardecer',
    description: 'Contempla los más hermosos atardeceres desde el mar, una experiencia mágica.',
    image: 'https://storage.googleapis.com/a1aa/image/ed364335-182a-4267-8b70-069559605f5b.jpg',
    location: 'Mar abierto, cerca de la costa',
    duration: '1.5 horas',
    originalPrice: 'S/. 110',
    price: 'S/. 90 por persona',
  },
];

const ToursPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex flex-col items-center" // Fondo de la página principal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-md md:max-w-4xl lg:max-w-6xl space-y-4"> {/* Aumentamos el max-width para pantallas grandes */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft className="mr-2" /> Volver
        </motion.button>
        <header className="bg-blue-500 rounded-md p-5 shadow-md"> {/* Fondo azul de la página principal */}
          <h1 className="text-white font-extrabold text-xl flex items-center gap-2 md:text-3xl lg:text-4xl"> {/* Aumentamos el tamaño del título */}
            <span>🏖️</span> Los Órganos Tours
          </h1>
          <p className="text-white text-sm mt-1 leading-tight md:text-base lg:text-lg"> {/* Aumentamos el tamaño de la descripción */}
            Descubre las mejores aventuras<br />en el paraíso peruano
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> {/* Usamos un grid para las tarjetas, 2 columnas en md, 3 en lg */}
          {toursData.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ToursPage;