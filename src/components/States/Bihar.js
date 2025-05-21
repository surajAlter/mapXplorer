import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import biharImage from "../../assets/State/Bihar/Bihar.jpg";

const cities = [
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Darbhanga",
  "Purnia",
  "Arrah",
  "Begusarai",
  "Katihar",
];

const BiharComponent = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Bihar</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-64 bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedCity === city
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={biharImage}
            alt="Bihar"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6 text-justify">
          <h1 className="text-4xl font-bold text-[#0f172a]">Bihar</h1>
          <p className="text-lg leading-7">
            Bihar—ancient “Vihara” (monastery)—sits in eastern India. It’s the thirteenth largest state by area and third most populous. Enriched by the Ganges and vast forests, Bihar blends history with rapid growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Capital</h2>
              <p>Patna</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Districts</h2>
              <p>38</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Key Attractions</h2>
            <ul className="list-disc pl-5">
              <li>Bodhgaya & Mahabodhi Temple</li>
              <li>Nalanda Ruins</li>
              <li>Rajgir Stupa</li>
              <li>Vaishali Pillars</li>
              <li>Sher Shah Suri Mausoleum</li>
              <li>World Peace Pagoda</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Culture & Economy</h2>
            <p>
              Birthplace of Buddha & Mahavira, Bihar celebrates Chhath and rich folk arts. Agriculture and development accelerate its per‑capita growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Transport & Languages</h2>
            <p>
              Extensive rail, road, and river networks connect Patna, Gaya, and Darbhanga. Hindi, Bhojpuri, Maithili, and Urdu are widely spoken.
            </p>
          </div>
        </section>

        {/* Selected City Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity}
          </h2>
          <p className="text-lg text-gray-700">
            More detailed info about <strong>{selectedCity}</strong> coming soon!
          </p>
        </section>
      </main>
    </div>
  );
};

export default BiharComponent;
