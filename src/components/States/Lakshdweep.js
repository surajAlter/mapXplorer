import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import lakshadweepMap from '../../assets/State/Lakshadweep/Lakshadweep.jpg';

const islands = [
  'Andrott', 'Amini', 'Agatti', 'Bitra', 'Chetlat',
  'Kadmat', 'Kalpeni', 'Kavaratti', 'Kiltan', 'Minicoy'
];

const islandInfo = {
  Kavaratti: 'Kavaratti is the capital of Lakshadweep and is known for its beautiful beaches and marine life.',
  Andrott: 'Andrott is the largest island and is famous for its lush green environment and ancient temples.',
  Amini: 'Amini is known for its beautiful lagoons and palm-fringed beaches.',
};

const islandHighlights = {
  Kavaratti: ['Kavaratti Beach', 'Kavaratti Aquarium', 'Lighthouse'],
  Andrott: ['Andrott Island', 'Ancient Temples'],
  Amini: ['Amini Beach', 'Lagoons'],
};

const Lakshadweep = () => {
  const [selectedIsland, setSelectedIsland] = useState('Kavaratti');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f9fafb] text-[#2E3A59]">
      {/* Mobile menu header */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Lakshadweep</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar for island list */}
      <aside
        className={`lg:w-1/4 w-full bg-[#F9F9F9] rounded-none lg:rounded-2xl shadow-lg p-4 h-fit sticky top-0 z-10 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <h2 className="text-xl font-bold mb-4">Islands</h2>
        <ul className="space-y-2">
          {islands.map((island) => (
            <li
              key={island}
              onClick={() => {
                setSelectedIsland(island);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 rounded-xl transition-all ${
                selectedIsland === island
                  ? 'bg-[#FFB703] text-white font-semibold'
                  : 'hover:bg-[#FFE8B2]'
              }`}
            >
              {island}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="lg:w-2/4 w-full space-y-10 px-6 py-10">
        <div className="w-full h-64 sm:h-96">
          <img
            src={lakshadweepMap}
            alt="Lakshadweep"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <section>
          <h1 className="text-4xl font-bold mb-4">Lakshadweep</h1>
          <p className="text-lg leading-7">
            Lakshadweep is a group of 36 islands in the Arabian Sea. It is India's smallest Union Territory and is known for its pristine beaches, coral reefs, and rich marine life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Date of Formation:</strong> November 1, 1956</li>
            <li><strong>Islands:</strong> 36 (10 inhabited)</li>
            <li><strong>Languages:</strong> Divehi, Malayalam, Jeseri, Tamil, Mahi, English</li>
            <li><strong>Capital:</strong> Kavaratti</li>
            <li><strong>Famous for:</strong> Pristine beaches, marine biodiversity, and eco-tourism</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tourism</h2>
          <p className="text-lg leading-7 mb-2">
            Lakshadweep is a serene tourist destination known for its clear waters and vibrant marine life:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Kavaratti Beach</li>
            <li>Agatti Island</li>
            <li>Minicoy Island</li>
            <li>Scuba Diving and Snorkeling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Geography & Climate</h2>
          <p className="text-lg leading-7 text-gray-700">
            Lakshadweep has a tropical climate with warm, humid weather year-round. The islands are surrounded by coral reefs and have lush vegetation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Transport</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Air</h3>
              <ul className="list-disc list-inside">
                <li>Agatti Aerodrome</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Sea</h3>
              <ul className="list-disc list-inside">
                <li>Ships from Kochi to the islands</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Government</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Union Territory directly governed by the Ministry of Home Affairs</li>
            <li>Under the jurisdiction of Kerala High Court</li>
            <li>Administrator: Praful Patel</li>
          </ul>
        </section>
      </div>

      {/* Island info sidebar */}
      <div className="lg:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-10">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          {selectedIsland}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          {islandInfo[selectedIsland]}
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {(islandHighlights[selectedIsland] || []).map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lakshadweep;
