import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import manipurMap from '../../assets/State/Manipur/Manipur.jpg';

const Manipur = () => {
  const [selectedCity, setSelectedCity] = useState('Imphal');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cities = [
    'Imphal',
    'Kaina',
    'Bishnupur',
    'Loktak Lake',
    'Moreh',
    'Keibul Lamjao National Park'
  ];

  const cityContent = {
    Imphal: `Manipur is situated in the Northeast region of India. Imphal is the capital of Manipur. The state comprises people of various cultures such as Kuki, Naga, Pangal and Mizo, who speak different languages. The total area covered by Manipur is 22,347 square kilometers. Manipur shares its borders with Nagaland, Mizoram, and Assam. The state shares its international borders with Myanmar.

About Manipur

Manipur is paradise on earth. It literally means "The Jeweled Land". Manipur is richly endowed with natural beauty and splendour. It is home to Sangai, a rare species of deer and Siroy Lily, the only terrestrial lily grown on the hill tops of Siroi hill. St. Clair Grimwood described it as "A pretty place, more beautiful than many show places of the world." Late Pandit Jawaharlal Nehru paid a fitting tribute by describing it as "Jewel of India"...`,

    Kaina: `Kaina is a sacred place of the Hindus located in Manipur. It is believed to be associated with Shri Govindajee, and the temple here is surrounded by lush greenery, making it a serene spot for both spiritual and nature lovers.`,

    Bishnupur: `Bishnupur is famous for its ancient temples and historical significance in Manipur. It is known for the Vishnu Temple built in the 15th century and also serves as a cultural hub.`,

    'Loktak Lake': `Loktak Lake is the largest freshwater lake in northeast India. It is known for its phumdis (floating islands) and is home to the endangered Sangai deer found in the Keibul Lamjao National Park, the only floating national park in the world.`,

    Moreh: `Moreh is a border town in Manipur that serves as a trade gateway between India and Myanmar. It is known for its cultural diversity and bustling local markets.`,

    'Keibul Lamjao National Park': `This is the only floating national park in the world and is located on Loktak Lake. It is home to the endangered Sangai deer, the state animal of Manipur, and offers a unique ecological experience.`
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-green-600">Manipur</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-64 bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Cities of Manipur</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedCity === city
                  ? 'bg-green-600 text-white font-semibold'
                  : 'hover:bg-green-100'
              }`}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false); // Close menu when city is selected on mobile
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-10 overflow-y-auto">
        <div className="mb-10">
          <img
            src={manipurMap}
            alt="Manipur"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">{selectedCity}</h1>
          <p className="text-lg leading-7">{cityContent[selectedCity]}</p>
        </section>
      </main>
    </div>
  );
};

export default Manipur;
