import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import meghalayaMap from '../../assets/State/Meghalaya/Meghalaya.jpg';

const Meghalaya = () => {
  const [selectedCity, setSelectedCity] = useState('Shillong');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cities = [
    'Shillong',
    'Cherrapunji',
    'Mawsynram',
    'Tura',
    'Dawki',
    'Nongstoin'
  ];

  const cityContent = {
    Shillong: `Shillong is the capital of Meghalaya and is known as the "Scotland of the East"...`,
    Cherrapunji: `Cherrapunji, also known as Sohra, is famous for receiving one of the highest...`,
    Mawsynram: `Mawsynram holds the record as one of the wettest places on Earth...`,
    Tura: `Tura is a picturesque town located in the Garo Hills...`,
    Dawki: `Dawki is a small town on the Indo-Bangladesh border known for the crystal-clear...`,
    Nongstoin: `Nongstoin is the headquarters of the West Khasi Hills district...`
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-green-700">Meghalaya</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block md:w-1/4 bg-white p-6 shadow-xl z-10 transition-all duration-300`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Cities of Meghalaya
        </h2>
        <ul>
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer p-3 mb-3 rounded-lg transition-all duration-300 font-medium ${
                selectedCity === city
                  ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
              }`}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false); // Close menu on mobile when a city is selected
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
          Explore Meghalaya
        </h1>
        <img
          src={meghalayaMap}
          alt="Meghalaya Map"
          className="w-full h-96 object-cover rounded-3xl shadow-lg mb-8 hover:scale-105 transition-transform duration-500"
        />
        <motion.div
          key={selectedCity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-700">
            {selectedCity}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {cityContent[selectedCity]}
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Meghalaya;
