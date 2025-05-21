// DelhiComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import delhiImage from "../../assets/State/Delhi/Delhi.jpg";

const delhiCities = [
  { name: "New Delhi", description: "The seat of the Indian government and famous for India Gate, Parliament House, and Rashtrapati Bhavan." },
  { name: "Central Delhi", description: "Known for Connaught Place, major government buildings, and historic sites." },
  { name: "North Delhi", description: "Features Delhi University and old heritage areas like Kamla Nagar." },
  { name: "North East Delhi", description: "Densely populated area with vibrant local markets." },
  { name: "North West Delhi", description: "An emerging residential and commercial hub with modern developments." },
  { name: "South Delhi", description: "Affluent area with attractions like Qutub Minar and Hauz Khas." },
  { name: "South East Delhi", description: "Known for areas like Kalkaji and prestigious institutions." },
  { name: "South West Delhi", description: "Home to Delhi's diplomatic enclave and the Indira Gandhi International Airport." },
  { name: "West Delhi", description: "Bustling markets, residential areas, and popular shopping destinations." },
];

const DelhiComponent = () => {
  const [selectedCity, setSelectedCity] = useState(delhiCities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Delhi</h1>
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
          {delhiCities.map((city) => (
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
            src={delhiImage}
            alt="Delhi"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>
        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Delhi</h1>
          <p className="text-lg leading-7">
            Delhi, officially the National Capital Territory (NCT) of Delhi, is the political, administrative,
            and cultural heart of India. Spanning 1,483 km² along the Yamuna River, it blends history with modernity.
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

export default DelhiComponent;
