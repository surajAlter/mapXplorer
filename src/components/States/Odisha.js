import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import OdishaMap from "../../assets/State/Odisha/Odisha.jpg"; // Replace with actual path

const cities = [
  "Bhubaneshwar", "Puri", "Konark", "Cuttack", "Bargarh",
  "Jeypore", "Barbil", "Paradip", "Rourkela", "Sambalpur", "Daringbadi", "Gopalpur"
];

const OdishaPage = () => {
  const [selectedCity, setSelectedCity] = useState("Bhubaneshwar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-indigo-600">Odisha</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-1/5 bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Cities in Odisha</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedCity === city
                  ? "bg-indigo-600 text-white font-semibold"
                  : "hover:bg-indigo-100"
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
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Map */}
        <div className="w-full mb-6">
          <img
            src={OdishaMap}
            alt="Map of Odisha"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-indigo-700">Odisha</h1>
          <p>
            Odisha lies on the east coast of the Indian subcontinent. Bhubaneswar is the capital...
          </p>

          {/* Details (abbreviated) */}
          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Facts on Odisha</h2>
          <ul className="list-disc list-inside">
            <li>Date of Formation: April 1, 1936</li>
            <li>Area: 155,707 sq km</li>
            <li>Population (2011): 41,974,218</li>
            <li>Capital: Bhubaneswar</li>
            <li>State Animal: Sambar Deer</li>
            <li>State Bird: Indian roller</li>
            <li>Official Language: Oriya</li>
          </ul>

          {/* Additional Sections... */}
          {/* Add rest of your sections as you had them: History, Geography, Tourism, etc. */}
        </section>

        {/* Selected City (Optional) */}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            {selectedCity} City
          </h2>
          <p>
            {/* You can insert dynamic details here in future */}
            More info about {selectedCity} will be displayed here...
          </p>
        </section>
      </main>
    </div>
  );
};

export default OdishaPage;
