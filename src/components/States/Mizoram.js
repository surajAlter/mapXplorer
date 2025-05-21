import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import mizoramImage from '../../assets/State/Mizoram/Mizoram.jpg';

const Mizoram = () => {
  const [selectedCity, setSelectedCity] = useState('Aizawl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cities = [
    'Aizawl',
    'Lunglei',
    'Champhai',
    'Serchhip',
    'Saiha',
    'Kolasib'
  ];

  const cityContent = {
    Aizawl: `Aizawl is the capital of Mizoram and is the largest city in the state. It is known for its scenic beauty, cultural richness, and peaceful lifestyle. The city is a center for administration, commerce, and education in Mizoram.`,
    Lunglei: `Lunglei is the second-largest town in Mizoram. Located in the southern part of the state, it is known for its natural beauty, rich biodiversity, and historical significance.`,
    Champhai: `Champhai is a town near the Indo-Myanmar border. It is often called the 'Fruit Bowl of Mizoram' for its vineyards and fruit orchards. It also offers beautiful views of the Myanmar hills.`,
    Serchhip: `Serchhip is a scenic town in central Mizoram. It is known for Vantawng Falls, the highest waterfall in the state, and for being a peaceful residential area.`,
    Saiha: `Saiha is located in the southernmost part of Mizoram and is known for its lush greenery and proximity to the Palak Dil (Palak Lake), which is a major tourist attraction.`,
    Kolasib: `Kolasib lies in the northern part of Mizoram and is a growing town with increasing agricultural and economic activity. It offers scenic landscapes and a tranquil environment.`
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-green-700">Mizoram</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white md:w-64 w-full md:block shadow-lg px-4 py-6 z-10 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Cities of Mizoram</h2>
        <ul>
          {cities.map(city => (
            <li
              key={city}
              className={`cursor-pointer p-3 mb-3 rounded-lg transition-all duration-300 font-medium ${
                selectedCity === city
                  ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
              }`}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false); // close on mobile
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">Explore Mizoram</h1>
        <img
          src={mizoramImage}
          alt="Mizoram Map"
          className="w-full h-96 object-cover rounded-3xl shadow-lg mb-8 hover:scale-105 transition-transform duration-500"
        />

        <motion.div
          key={selectedCity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-700">{selectedCity}</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">{cityContent[selectedCity]}</p>
        </motion.div>

        {/* Additional Info */}
        <div className="mt-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">About Mizoram</h2>
          <p><strong>Tourism of Mizoram:</strong> The hilly city Aizawl, located nearly 4,000 feet above sea-level... More Details...</p>
          <p><strong>History and Geography:</strong> Between 1750 and 1850 the Mizo tribes migrated... More Details...</p>
          <p><strong>Society and Culture:</strong> The Mizos are divided into several tribes... More Details...</p>
          <p><strong>Government of Mizoram:</strong> Mizoram government is headed by the Chief Minister... More Details...</p>
          <p><strong>Economy and Infrastructure:</strong> About three-quarters of the population... More Details...</p>
          <p><strong>Hotels of Mizoram:</strong> The state has hotels of star and non-star category... More Details...</p>
          <p><strong>Capital:</strong> Aizawl</p>
          <p><strong>Area:</strong> 21,087 sq. km</p>
          <p><strong>Population:</strong> 10,91,014 (2011 Census)</p>
          <p><strong>Weather:</strong> Summer: 20°C–29°C, Winter: 11°C–21°C, Avg Rainfall: 254 cm annually</p>
          <p><strong>Lakes:</strong> Palak Lake (Saiha), Tamdil Lake</p>
          <p><strong>Minerals:</strong> Sandstones, Siltstones, Shale, Greywacke, Mudstones, Petroleum & Gas</p>
          <p><strong>Demographics:</strong> Mizo tribes include Lushei, Hmar, Lai, Paite, and Mara... More Details...</p>
          <p><strong>Festivals:</strong> Mim Kut, Pawl Kut, Chapchar Kut</p>
          <p><strong>Dance Forms:</strong> Cheraw, Chheih Lam, Khuallam</p>
          <p><strong>Languages:</strong> Mizo (official), English used in academics and administration</p>
          <p><strong>Religions:</strong> Christianity (majority), Hinduism, Islam, Buddhism, Judaism</p>
          <p><strong>Education:</strong> Literacy rate: 92%. Notable institutes: Mizoram University, NIT Mizoram, ICFAI University</p>
          <p><strong>Transport:</strong> Lengpui Airport (Aizawl), NH connections, nearest rail at Silchar (180 km)</p>
        </div>
      </main>
    </div>
  );
};

export default Mizoram;
