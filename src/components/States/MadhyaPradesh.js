import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import madhyaPradeshMap from '../../assets/State/MadhyaPradesh/Madhyapradesh.jpg';

const cities = [
  'Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar',
  'Rewa', 'Satna', 'Ratlam', 'Dewas', 'Chhindwara',
  'Katni', 'Khandwa', 'Shivpuri', 'Vidisha'
];

const cityInfo = {
  Bhopal: 'Bhopal is the capital of Madhya Pradesh and is known as the "City of Lakes." It is famous for its historic sites and vibrant culture.',
  Indore: 'Indore is the largest city in Madhya Pradesh and is known for its thriving economy, bustling markets, and rich culinary culture.',
  Gwalior: 'Gwalior is famous for its historic fort, temples, and vibrant music and art scene.',
  // Add more city info as needed...
};

const MadhyaPradesh = () => {
  const [selectedCity, setSelectedCity] = useState('Bhopal');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f9fafb] text-[#2E3A59]">
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Madhya Pradesh</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`lg:w-1/4 w-full bg-white border-r px-4 py-6 shadow-sm transition-all duration-300 z-10 ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false); // Close menu on mobile after selection
              }}
              className={`cursor-pointer px-3 py-2 rounded-xl transition-all ${
                selectedCity === city
                  ? 'bg-orange-600 text-white font-semibold'
                  : 'hover:bg-orange-100'
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-10 space-y-10">
        <div className="w-full h-64 sm:h-96">
          <img
            src={madhyaPradeshMap}
            alt="Madhya Pradesh"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <section>
          <h1 className="text-4xl font-bold mb-4">Madhya Pradesh</h1>
          <p className="text-lg leading-7">
            Madhya Pradesh is a landlocked state in central India. Known for its rich history, culture, and natural beauty...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Date of Formation:</strong> November 1, 1956</li>
            <li><strong>Area:</strong> 308,244 sq km</li>
            <li><strong>Capital:</strong> Bhopal</li>
            <li><strong>Famous for:</strong> Historic sites, wildlife parks, and the Narmada River</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tourism</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Kanha National Park</li>
            <li>Khajuraho Temples</li>
            <li>Sanchi Stupa</li>
            <li>Ujjain Mahakaleshwar Temple</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Geography & Climate</h2>
          <p className="text-lg text-gray-700">
            Madhya Pradesh has a varied climate, with hot summers, cool winters, and monsoons...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Transport</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Air</h3>
              <ul className="list-disc list-inside">
                <li>Indore Devi Ahilya Bai Holkar Airport</li>
                <li>Bhopal Raja Bhoj Airport</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Rail</h3>
              <ul className="list-disc list-inside">
                <li>Bhopal, Indore, Jabalpur (Major Railway Stations)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Government</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Governor: Mangubhai C. Patel</li>
            <li>Chief Minister: Shivraj Singh Chouhan</li>
            <li>Legislature: Bicameral</li>
          </ul>
        </section>

        <section className="border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity} City Details
          </h2>
          <p className="text-lg text-gray-700">{cityInfo[selectedCity]}</p>
        </section>
      </main>
    </div>
  );
};

export default MadhyaPradesh;
