import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import andamanImage from "../../assets/State/AndamanAndNicobar/AndamanAndNicobar.jpg";

const cities = [
  {
    name: "Port Blair",
    description: "Capital city, houses the Cellular Jail, museums, and airport.",
  },
  {
    name: "Havelock Island",
    description: "Known for Radhanagar Beach and diving spots.",
  },
  {
    name: "Neil Island",
    description: "Peaceful island with coral reefs and tropical beauty.",
  },
  {
    name: "Diglipur",
    description: "Home to Saddle Peak, the highest point in the islands.",
  },
  {
    name: "Mayabunder",
    description: "Less crowded, offers mangrove creeks and quiet beaches.",
  },
  {
    name: "Rangat",
    description: "Great for eco-tourism and turtle nesting beaches.",
  },
  {
    name: "Baratang",
    description: "Famous for limestone caves and mud volcano.",
  },
  {
    name: "Campbell Bay",
    description: "Remote location on Great Nicobar Island with rich biodiversity.",
  },
  {
    name: "Car Nicobar",
    description: "Flat, fertile island known for coconut plantations.",
  },
];

const AndamanAndNicobar = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Andaman & Nicobar</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar for desktop + conditional for mobile */}
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
                setIsMenuOpen(false); // auto-close on mobile
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
            src={andamanImage}
            alt="Andaman and Nicobar Islands"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">
            Andaman and Nicobar Islands
          </h1>
          <p className="text-lg leading-7">
            The Andaman and Nicobar Islands are a group of picturesque islands
            located in the Bay of Bengal. Known for their pristine beaches,
            rich marine biodiversity, and historical significance, they form
            one of the seven union territories of India. The territory comprises
            around 572 islands, of which only a few are open to tourists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
                Capital
              </h2>
              <p>Port Blair</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
                Districts
              </h2>
              <ul className="list-disc pl-5">
                <li>Nicobar</li>
                <li>North and Middle Andaman</li>
                <li>South Andaman</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
              Key Attractions
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cellular Jail</li>
              <li>Radhanagar Beach</li>
              <li>Havelock Island</li>
              <li>Baratang Island</li>
              <li>Limestone Caves</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
              Culture and People
            </h2>
            <p>
              The islands are home to a diverse population that includes
              indigenous tribes such as the Great Andamanese, Onge, Jarwa, and
              Sentinelese. Due to restricted access, contact with these tribes
              is limited to preserve their way of life. The settlers on the
              islands come from various parts of India, contributing to a
              multicultural society.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
              Economy
            </h2>
            <p>
              The economy of the islands is mainly based on agriculture,
              fishing, and tourism. Port Blair is a commercial hub with
              infrastructure to support tourism, which is a major contributor to
              the local economy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
              Transportation
            </h2>
            <p>
              The islands are accessible via air and sea. Port Blair has a
              well-connected airport with flights from major Indian cities.
              Inter-island transportation is facilitated through ferries and
              boats.
            </p>
          </div>
        </section>

        {/* Selected City Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity.name}
          </h2>
          <p className="text-lg text-gray-700">{selectedCity.description}</p>
        </section>
      </main>
    </div>
  );
};

export default AndamanAndNicobar;
