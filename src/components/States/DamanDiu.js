// DamanDiuComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import damanDiuImage from "../../assets/State/DamanDiu/DamanDiu.jpg";

const cities = [
  { name: "Daman", description: "Daman is the administrative capital, known for beaches like Devka and Jampore, historic forts, and Portuguese colonial architecture." },
  { name: "Diu", description: "Diu is a serene island famous for its beaches, Diu Fort, Naida Caves, and a blend of Portuguese and Indian culture." },
];

const DamanDiuComponent = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Daman & Diu</h1>
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
              key={city.name}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedCity.name === city.name
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false);
              }}
            >
              {city.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={damanDiuImage}
            alt="Daman and Diu"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6 text-justify">
          <h1 className="text-4xl font-bold text-[#0f172a]">Daman & Diu</h1>
          <p className="text-lg leading-7">
            Daman & Diu, a former Portuguese colony, is now a Union Territory along India's west coast, known for beautiful beaches, forts, and vibrant Indo-Portuguese culture.
          </p>
        </section>

        {/* Selected City Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity.name} Details
          </h2>
          <p className="text-lg text-gray-700">{selectedCity.description}</p>
        </section>
      </main>
    </div>
  );
};

export default DamanDiuComponent;
