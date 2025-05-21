// ChandigarhComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import chandigarhImage from "../../assets/State/Chandigarh/Chandigarh.jpg";

const sectors = [
  { name: "Sector 1", description: "Includes Capitol Complex, the seat of government buildings." },
  { name: "Sector 17", description: "Chandigarh's commercial and shopping hub." },
  { name: "Sector 22", description: "One of the oldest sectors, known for local markets." },
  { name: "Sector 35", description: "A lively area with restaurants and nightlife." },
  { name: "Sector 43", description: "Major transport hub with inter-state bus terminal." },
  { name: "Sector 16", description: "Location of Postgraduate Institute of Medical Education and Research (PGIMER)." },
  { name: "Sector 10", description: "Known for the Government Museum and Art Gallery." },
];

const ChandigarhComponent = () => {
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Chandigarh</h1>
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
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Sectors</h2>
        <ul className="space-y-2">
          {sectors.map((sec) => (
            <li
              key={sec.name}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedSector.name === sec.name
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedSector(sec);
                setIsMenuOpen(false);
              }}
            >
              {sec.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={chandigarhImage}
            alt="Chandigarh"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Chandigarh</h1>
          <p className="text-lg leading-7">
            Chandigarh, the capital of both Punjab and Haryana, is a union territory in India and
            one of the best‑planned cities in the country. Designed by Le Corbusier, it’s famed for
            its lush sectors, green belts, and high standard of living.
          </p>
        </section>

        {/* Selected Sector Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedSector.name} Sector Details
          </h2>
          <p className="text-lg text-gray-700">{selectedSector.description}</p>
        </section>
      </main>
    </div>
  );
};

export default ChandigarhComponent;
