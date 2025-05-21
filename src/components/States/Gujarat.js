// GujaratComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import gujaratImage from "../../assets/State/Gujarat/Gujarat.jpg";

const cities = [
  { name: "Ahmedabad", description: "A major economic and industrial hub, known for textiles and Sabarmati Ashram." },
  { name: "Surat", description: "Famous for diamond cutting and textile industries." },
  { name: "Vadodara", description: "Known for its palaces, parks, and rich cultural heritage." },
  { name: "Rajkot", description: "A key center for the auto parts industry." },
  { name: "Bhavnagar", description: "Important for ship-breaking industry and religious sites." },
  { name: "Jamnagar", description: "Home to large oil refineries and bird sanctuaries." },
  { name: "Junagadh", description: "Close to Gir National Park, home of Asiatic lions." },
  { name: "Gandhinagar", description: "The capital of Gujarat, known for planned infrastructure." },
  { name: "Anand", description: "Known as the Milk Capital of India (Amul)." },
  { name: "Navsari", description: "Important for Parsi heritage and agriculture." },
  { name: "Bharuch", description: "Industrial town with historical significance." },
  { name: "Vapi", description: "Industrial town near Daman." },
  { name: "Morbi", description: "Famous for ceramic industry." },
  { name: "Mehsana", description: "Known for dairy and temples." },
  { name: "Nadiad", description: "A historic and cultural city." },
  { name: "Porbandar", description: "Birthplace of Mahatma Gandhi." },
  { name: "Gondal", description: "Known for royal heritage and architecture." },
  { name: "Veraval", description: "Fishing port near Somnath temple." },
  { name: "Godhra", description: "Known for historical and political importance." },
  { name: "Palanpur", description: "Center for diamond polishing and agriculture." },
];

const GujaratComponent = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Gujarat</h1>
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
            src={gujaratImage}
            alt="Gujarat"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Gujarat</h1>
          <p className="text-lg leading-7">
            Gujarat or "the land of the legends" is one of the most important states in western India. 
            Bordered by the Arabian Sea and neighboring Rajasthan, Maharashtra, and Madhya Pradesh, 
            it boasts unique topography, rich culture, and a strong industrial base.
          </p>
          <ul className="text-sm mt-4 list-disc list-inside space-y-1">
            <li>Official Website: www.gujaratindia.com</li>
            <li>Date of Formation: May 1, 1960</li>
            <li>Area: 1,96,244 km²</li>
            <li>Population (2011): 6,04,39,692</li>
            <li>Capital: Gandhinagar</li>
            <li>Languages: Gujarati, Hindi, English, and more</li>
            <li>State Animal: Asiatic Lion</li>
            <li>State Bird: Greater Flamingo</li>
            <li>State Tree: Mango</li>
            <li>State Flower: Marigold (Galgota)</li>
            <li>Literacy Rate (2011): 76.64%</li>
            <li>Female per 1000 males: 918</li>
          </ul>
        </section>

        {/* Selected City Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity.name} City Details
          </h2>
          <p className="text-lg text-gray-700">{selectedCity.description}</p>
        </section>
      </main>
    </div>
  );
};

export default GujaratComponent;
