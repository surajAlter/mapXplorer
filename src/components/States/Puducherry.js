import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PuducherryMap from '../../assets/State/Puducherry/Puducherry.jpg';

const cities = ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'];

const PuducherryPage = () => {
  const [selectedCity, setSelectedCity] = useState('Puducherry');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
      {/* Mobile Menu Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-indigo-600">Puducherry</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-1/5 bg-white border-r border-gray-300 px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Cities in Puducherry</h2>
        <ul className="space-y-2">
          {cities.map((city, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedCity === city
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'hover:bg-indigo-100'
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Map */}
        <div className="w-full mb-6">
          <img
            src={PuducherryMap}
            alt="Map of Puducherry"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-indigo-700">Puducherry</h1>
          <p>
            Puducherry, also known as Pondicherry, is a Union Territory of India known for its
            French colonial heritage. It has beautiful beaches, spiritual centers like Auroville,
            and peaceful architecture.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Facts on Puducherry</h2>
          <ul className="list-disc list-inside">
            <li>Date of Formation: November 1, 1954 (de facto), 1962 (de jure)</li>
            <li>Area: 492 sq km</li>
            <li>Population (2011): ~1.25 million</li>
            <li>Capital: Puducherry</li>
            <li>Official Language: Tamil, French, English</li>
            <li>State Animal: Indian Palm Squirrel</li>
            <li>State Bird: Koel</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">History</h2>
          <p>
            Puducherry was a French colony until 1954. The region has seen rule by the Pallavas,
            Cholas, and Vijayanagar empire before European powers arrived.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Geography</h2>
          <p>
            Puducherry consists of four small unconnected districts: Puducherry, Karaikal, Mahe,
            and Yanam located in different parts of South India.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Tourism</h2>
          <p>
            Key attractions include Promenade Beach, Paradise Beach, Auroville, French Quarter,
            and the Aurobindo Ashram.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Government and Politics</h2>
          <p>
            Puducherry has a legislative assembly and functions under a Lieutenant Governor
            appointed by the President of India.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Education</h2>
          <p>
            Puducherry is home to institutions like Pondicherry University, JIPMER, and the French
            Institute of Puducherry.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Transport</h2>
          <p>
            Puducherry is connected by road to Chennai and other cities via NH-32, has a small
            airport, and good bus connectivity.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Culture & Society</h2>
          <p>
            The territory blends Tamil and French influences. Major festivals include Pongal,
            Bastille Day, and Diwali.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PuducherryPage;
