import React from 'react';
import { motion } from 'framer-motion';
import RestaurantCard from '../components/RestaurantCard';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const restaurantsData = [ // Exportamos la constante
  {
    id: 1,
    name: 'Restaurante Turístico Bambu',
    type: 'Restaurante de Mariscos / Cocina Peruana',
    // rating: '4.1', // Eliminado
    image: 'https://i.ibb.co/Wv8Z4gq8/20250713-1524-Playa-Tropical-Soleada-remix-01k02q83wpeggb3srkn40chsb9.png',
    location: 'Malecón de Los Órganos',
    instagram: 'https://www.instagram.com/turisticobambu/',
    facebook: 'https://www.facebook.com/turisticobambu/',
  },
  {
    id: 2,
    name: 'La Cabaña de Wilo',
    type: 'Pizzería',
    // rating: '4.2', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqRB7FCM0NunpzDcYXj_xlpGFTaGAAcASXwLNOurGdNlt2RNcW7-D3w0i4mzYbtVfc_54w6hAEVawE4VhbYrf5tVfcXTPB1xHIwmPRjh01ADGb04TOmXj6X5y6b6R9TE8qNSAXtVw=w1000-h1000-k-no',
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/lacabanadewilo/',
    facebook: 'https://www.facebook.com/lacabanadewilo/',
  },
  {
    id: 4,
    name: 'Restaurant Donde Rosa',
    type: 'Restaurante de Mariscos',
    // rating: '4.2', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npgJhRfn4B7_I2ELsPG5x15VQr0299bRaRlF6e7qa6lxRhlq2G4jk5Br4n1A9ByxUHiUZ5UJpefZG0PnlxqVJFIEFvlB4G7-y3G2YqIo_bJp9TTU13gz_BeX_kkYbtkhq81aA97=w1000-h1000-k-no',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/restaurantdonderosa/',
    facebook: 'https://www.facebook.com/restaurantdonderosa/',
  },
  {
    id: 7,
    name: 'Ocean Blue & Venezia Restobar',
    type: 'Restobar / Mariscos',
    // rating: '4.1', // Eliminado
    image: 'https://scontent.ftru1-1.fna.fbcdn.net/v/t1.6435-9/169498038_2951018241891248_2074712641897707410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=nuBcgdOgTVkQ7kNvwHccINt&_nc_oc=Adk5zf0iABeWHBVJ9xZd80HwweW87m5fcT17iqrrMLfhQIuLm53YYR7wuPDkFNc7wZM&_nc_zt=23&_nc_ht=scontent.ftru1-1.fna&_nc_gid=Q3xxnQ_3d84zjqYNGw7HoA&oh=00_AfU9jyb51qqMb5IEnmdeP8AX32pgyDiw8rNdYlT7yp9JYQ&oe=68BB986F', // IMAGEN ACTUALIZADA
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/oceanbluevenezia/',
    facebook: 'https://www.facebook.com/oceanbluevenezia/',
  },
  {
    id: 8,
    name: 'El Point de Órganos',
    type: 'Restobar',
    // rating: '4.9', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqNTs0_sEY5Mdb2BphJS5aiWfjMyGb2lp-UMqDIb-dl5gwsDhRRRJgujlefW-za4NOzSluy0WsBgmJaB2xEf0Gxv5X99YPBjUT4F9QuoouQX3DZx_AuunFMh9sTxMm8YrW6s2lG=w1000-h1000-k-no',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/elpointdeorganos/',
    facebook: 'https://www.facebook.com/elpointdeorganos/',
  },
  {
    id: 9,
    name: 'El Imperio del Sabor',
    type: 'Cevichería',
    // rating: 'N/A', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrYtQQstGm42FkIpPql2cMUjSwPTHPwgRzJqDF57E_16NKixMw4rPAVgQ2-JgU9FUdTm6VQziwrfFz0n6N3SXR3KF8rv7lp5o27kwsofu5IVxxzDkwwnTp5BC6DY8ZUw6FRY8qT_pi49qbA=w1000-h1000-k-no',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/elimperiodelsabor/',
    facebook: 'https://www.facebook.com/elimperiodelsabor/',
  },
  {
    id: 10,
    name: 'Las 10 Lucas de Pino',
    type: 'Cevichería',
    // rating: '4.2', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrYHhaKLyt1VlgBkQIWbWcGvS68VCRRjiHZqy6H_MjZ_mU2N90KwAVVal5sKKzbC-DCK-kc7s8cSv5IYEdlUI8QkO5Hbgts2HfkkKyTY-bweOAoF7UQiWNTJaMHNXifl-6B8Cc3=w1000-h1000-k-no',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/las10lucasdepino/',
    facebook: 'https://www.facebook.com/las10lucasdepino/',
  },
  {
    id: 11,
    name: 'Burger Beach y Pizzas El Che',
    type: 'Hamburguesería / Pizzería',
    // rating: '4.1', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_kMzpZJSGESrLSCRuVLOFcVyGVNQPXFci65yfzz0eL7cqwPgKecOO5vQlut73XXiNmhrE19CytzgsW7znnusIYaNyu-HopSTATJYtQvuvzUEKqIGKn45gBxuoYts5BK3w_AuJtw=w1000-h1000-k-no', // IMAGEN ACTUALIZADA
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/burgerbeachpizzaselche/',
    facebook: 'https://www.facebook.com/burgerbeachpizzaselche/',
  },
  {
    id: 13,
    name: 'El Manglar Oficial',
    type: 'Cevichería / Restaurante de Mariscos',
    // rating: '4.0', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npPF7US2AcTiyWM5t-IQJ35qHw6fNlqkZTc_zYZDiNSkSSK9JMeat2Ll0iWgSfmXyMNA6vzmwPM6CMwGFiiX_y6fBywmllWc3fL9KEW7bg9sAhcsyRktP4seSZV3RHaFcBo9Y5y=w1000-h1000-k-no',
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/elmanglaroficial/',
    facebook: 'https://www.facebook.com/elmanglaroficial/',
  },
  {
    id: 14,
    name: 'Punto Marino Restaurant',
    type: 'Restaurante de Mariscos',
    // rating: '4.0', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noIcm8683XYXdxCcHdAvdwzncuGk6u9nUa2O6A4I-WMA7oa73VOgXfai1UKc1ebV2jQzSvIwqveyyAtqvSyMjFv24n10qwS-cFuTULzdgvlmgRAOigVyaSxZSWVdBn0WGyOTByK=w1000-h1000-k-no',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/puntomarinorestaurant/',
    facebook: 'https://www.facebook.com/puntomarinorestaurant/',
  },
  {
    id: 16,
    name: 'Restobar El Fogón',
    type: 'Restobar / Mariscos',
    // rating: '4.8', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrWSa0JSwCVqeENaYjFodn1An04iNszBLJcVDS_tjcRXJkCMVGdLFGwBKGpUnI6CkMrFSLMfRedxaGeSElo3W7ZDmu1AatJQ0ya8Y2wR0NgMgJFAWk8EG-zTj6h9pduYn3lI9HTzw=w1000-h1000-k-no',
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/restobarelfogon/',
    facebook: 'https://www.facebook.com/restobarelfogon/',
  },
  {
    id: 18,
    name: 'Cevichería Percebes',
    type: 'Cevichería',
    // rating: '3.8', // Eliminado
    image: 'https://lh3.googleusercontent.com/p/AF1QipNfVN4sOT4hltyspml7-jk7X09JlU3OaokRzPDj=w1000-h1000-k-no',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/cevicheriapercebes/',
    facebook: 'https://www.facebook.com/cevicheriapercebes/',
  },
  {
    id: 19,
    name: 'Café de Barrio',
    type: 'Cafetería',
    // rating: '4.5', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npfEgFuUi8nryJ5JUxsn5gzCkZ2exKh1Dvt1cdDh2YeAIKNc6Eq58K1mqnqDF7YPjfN87HIjvGh6e8NCTX5Vb3Y8q2lATv-VDjWwRBL_YbbO9AeAz43PU-MgvKqy3mVIowKiKfE=w1000-h1000-k-no', // IMAGEN ACTUALIZADA
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/cafedebarrio/',
    facebook: 'https://www.facebook.com/cafedebarrio/',
  },
  {
    id: 22,
    name: 'El Huarique de Valeria',
    type: 'Cevichería',
    // rating: 'N/A', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqyfxmLiqJinB0lv5aD5vxYU4SIieChJ4l71ubvTwty8QNzCpyyUuhxHfTPmU-gvyW6PbYaVjHOI0i1HKjBAk0gHm7Q_gJZfhy26zjuDjbPx3ZR8cuxYSy38sgW0bI658TBKnXarel4Xfg=w1000-h1000-k-no',
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/elhuariquedevaleria/',
    facebook: 'https://www.facebook.com/elhuariquedevaleria/',
  },
  {
    id: 23,
    name: 'Cevichería Benito',
    type: 'Cevichería',
    // rating: '4.4', // Eliminado
    image: 'https://lh3.googleusercontent.com/p/AF1QipP5LSAostWvKJW5ckO0ziIv2Sh-mxHemQJm_ZaS=w1000-h1000-k-no',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/cevicheriabenito/',
    facebook: 'https://www.facebook.com/cevicheriabenito/',
  },
  {
    id: 24,
    name: 'El Arbolito Sechurano',
    type: 'Restaurante de Mariscos / Cocina Peruana',
    // rating: '4.1', // Eliminado
    image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=maps_sv.tactile.gps&panoid=ksD2tFwOhEeC00shlVOOKw&w=735&h=362&thumb=2&yaw=324.5434&pitch=0',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/elarbolitosechurano/',
    facebook: 'https://www.facebook.com/elarbolitosechurano/',
  },
  {
    id: 25,
    name: 'Manón Beach',
    type: 'Pollería / Hamburguesería',
    // rating: 'N/A', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrPSDa53b4XnxQ-PjhHm7lGT2QtBgKqKZHhZMYrHsj5yBRHTnvAV2ZLZhkGPr318XRPHF4y1zA8FKZ4_4iGecIj7b0s3QYztKiS4dCfUE0HhHhH_ysQQV7FLqTLzDFkDNUltaMc=w1000-h1000-k-no', // IMAGEN ACTUALIZADA
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/manonbeach/',
    facebook: 'https://www.facebook.com/manonbeach/',
  },
  {
    id: 26,
    name: 'Cevichería Lissette',
    type: 'Cevichería',
    // rating: '4.7', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrn1ZSNqoLAa8_nA5ax7_f0fqQOrbEGSNUU8R66537Q29jJLdfbpKYt4Hu301H_mA39QkSOl5_pvzcaKEokgrxPALDTOY_BkC9AnJHT-26Fxmz-LMYDwZ8-PVvYZhrSEyUffi3uAA=w1000-h1000-k-no',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/cevicherialissette/',
    facebook: 'https://www.facebook.com/cevicherialissette/',
  },
  {
    id: 27,
    name: 'Huarique Cevichería Rosy',
    type: 'Cevichería',
    // rating: '5.0', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqN8GOK92pBtCcaM2z7OMV6m15xzOqBZ0NCnqd485j6v97TL1lfqp_ywBe4tRmMZ8sQ_3yNWOKKtVb3YCqDA7GjrGLM5F_DdkF5Jqi-G7ilf302ZQkgV1z-EeeJwoE2lz7b9Q=s1000-k-no', // IMAGEN ACTUALIZADA
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/huariquecevicheriariosy/',
    facebook: 'https://www.facebook.com/huariquecevicheriariosy/',
  },
  {
    id: 28,
    name: 'Restaurante Turístico El Ostion',
    type: 'Restaurante de Mariscos',
    // rating: '3.9', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npm-VBhvQhMphEv97cy8cUFmEz3tUERFkjsUEi9APQetwMFpHxE2OzuemKiD6KhU3GGyJMpV3aLSqMqbAALnk56oGEiiFtI092Z6oABmnLPHvmxFcEwsJZYNbsFAO_xXkoMz2s=w1000-h1000-k-no',
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/restauranteelostion/',
    facebook: 'https://www.facebook.com/restauranteelostion/',
  },
  {
    id: 29,
    name: 'Pollería Las Piedritas',
    type: 'Pollería',
    // rating: '3.8', // Eliminado
    image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7nak4EgngesiYgVZjkO7hg&cb_client=maps_sv.tactile.gps&w=1000&h=1000&yaw=229.67632&pitch=0&thumbfov=100',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/pollerialaspiedritas/',
    facebook: 'https://www.facebook.com/pollerialaspiedritas/',
  },
  {
    id: 30,
    name: 'Café Restaurant Jimmy',
    type: 'Cafetería / Restaurante',
    // rating: '3.6', // Eliminado
    image: 'https://lh3.googleusercontent.com/p/AF1QipNLrJ2sBpKN1q1E4hacEf5Vzw63rqoUU75KbeIh=w1000-h1000-k-no',
    location: 'Av. Panamericana Norte Km 1153, Los Órganos',
    instagram: 'https://www.instagram.com/caferestaurantjimmy/',
    facebook: 'https://www.facebook.com/caferestaurantjimmy/',
  },
  {
    id: 31,
    name: 'Cevichería Kalifa',
    type: 'Cevichería',
    // rating: '3.4', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nobif1dkjE7_XlNO247qq7tSBiMXebZrhkolK-yM5fXrAi1RvJWZqPW0BkvLIhOUkGD7835VQiOjW1YF30PQ7byRH36pkr7ll72eu22sKpG07NLCn2iaSrZIPU39r4sQWmud9M=w1000-h1000-k-no', // IMAGEN ACTUALIZADA
    location: 'Av. La Marina s/n, Los Órganos',
    instagram: 'https://www.instagram.com/cevicheriakalifa/',
    facebook: 'https://www.facebook.com/cevicheriakalifa/',
  },
  {
    id: 32,
    name: 'Chicken Room',
    type: 'Pollería / Cevichería',
    // rating: '4.0', // Eliminado
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npZ0bcWF307nMCzCxc8zHdy6NkvqDxfCslAmYg-fw_E3e_5GXO-l-T8UW9KosuZMCEE9A7MLgHKjFUwoeY3eUD193ClG_PLGsQmOeYO9pmMeKiaJjAH1ddC2OThg3b_Z5gyupk=s1000-k-no',
    location: 'Av. Grau 345, Los Órganos',
    instagram: 'https://www.instagram.com/chickenroom/',
    facebook: 'https://www.facebook.com/chickenroom/',
  },
];

const RestaurantsPage = () => {
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
            <span>🍽️</span> Restaurantes en Los Órganos
          </h1>
          <p className="text-white text-sm mt-1 leading-tight md:text-base lg:text-lg"> {/* Aumentamos el tamaño de la descripción */}
            Descubre los mejores sabores de la gastronomía local.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> {/* Usamos un grid para las tarjetas, 2 columnas en md, 3 en lg */}
          {restaurantsData.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantsPage;