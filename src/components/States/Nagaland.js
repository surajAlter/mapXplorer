import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import nagalandMap from '../../assets/State/Nagaland/Nagaland.jpg';

const districts = [
  'Kohima',
  'Dimapur',
  'Mokokchung',
  'Mon',
  'Tuensang',
  'Zunheboto',
  'Phek',
  'Wokha',
  'Peren',
  'Longleng',
  'Kiphire',
  'Noklak',
  'Tseminyu',
  'Chümoukedima',
  'Niuland',
  'Shamator',
];

const Nagaland = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Kohima');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-blue-700">Nagaland</h1>
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
        <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]">Districts</h2>
        <ul className="space-y-2">
          {districts.map((district) => (
            <li
              key={district}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedDistrict === district
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'hover:bg-blue-100'
              }`}
              onClick={() => {
                setSelectedDistrict(district);
                setIsMenuOpen(false);
              }}
            >
              {district}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        {/* Image */}
        <div className="mb-10">
          <img
            src={nagalandMap}
            alt="Nagaland"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        {/* About Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#2E3A59]">Nagaland</h1>
          <p className="text-lg leading-7">
            Nagaland, located in the northeastern part of India, is a land of vibrant tribes,
            pristine landscapes, and rich cultural heritage. Known as the “Land of Festivals,”
            each tribe in Nagaland celebrates its own unique traditions and customs...
          </p>
        </section>

        {/* Tourism Section */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2">
            Tourism
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Nagaland is famous for its scenic beauty, tribal culture, and vibrant festivals...
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Hornbill Festival, Kisama</li>
            <li>Dzukou Valley – Famous for trekking</li>
            {/* Add more as needed */}
          </ul>
        </section>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-xl font-bold text-[#2E3A59] mb-4">
            Selected District: {selectedDistrict}
          </h2>
          <p className="text-lg">You can show dynamic district-specific data here in future.</p>
        </div>
      </main>
    </div>
  );
};

export default Nagaland;
