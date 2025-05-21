// DadraNagarHaveliComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import dadraImage from "../../assets/State/DadraNagarHaveli/DadraNagarHaveli.jpg";

const sections = [
  {
    name: "Overview",
    description:
      "Dadra & Nagar Haveli is a 491 km² Union Territory on India’s west coast. Formerly under Portuguese rule, Silvassa is its capital. Known for dense forests, the Daman Ganga River, tribal cultures (Varli, Kokna, Dhodia), and tourist attractions like Lion Safari Park and Dudhni Lake.",
  },
  {
    name: "Silvassa",
    description:
      "Silvassa, the capital of Dadra and Nagar Haveli, is famous for its lush greenery, Roman Catholic churches, tribal culture, and vibrant industries. Popular tourist spots include Vanganga Garden, Tribal Museum, and Dudhani Lake.",
  },
  {
    name: "Khanvel",
    description:
      "Khanvel is a serene town near Silvassa, surrounded by forests and known for its peaceful resorts, beautiful gardens, and the Madhuban Dam. A perfect getaway for nature lovers.",
  },
  {
    name: "Dudhani",
    description:
      "Dudhani is famous for its large lake formed by the Madhuban Dam reservoir. It is ideal for water sports like boating and kayaking amidst a scenic, hilly backdrop.",
  },
  {
    name: "Naroli",
    description:
      "Naroli is a small town near Silvassa, featuring traditional architecture, quiet streets, and access to nearby tourist attractions. It offers a glimpse into local life and culture.",
  },
];

const DadraNagarHaveliComponent = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Dadra & Nagar Haveli</h1>
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
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Sections</h2>
        <ul className="space-y-2">
          {sections.map((s) => (
            <li
              key={s.name}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedSection.name === s.name
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedSection(s);
                setIsMenuOpen(false);
              }}
            >
              {s.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={dadraImage}
            alt="Dadra and Nagar Haveli"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6 text-justify">
          <h1 className="text-4xl font-bold text-[#0f172a]">Dadra & Nagar Haveli</h1>
          <p className="text-lg leading-7">
            A small yet culturally rich Union Territory nestled between Gujarat and Maharashtra,
            known for its lush greenery, tribal traditions, and growing industrial presence centered around Silvassa.
          </p>
        </section>

        {/* Selected Section Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedSection.name} Details
          </h2>
          <p className="text-lg text-gray-700">{selectedSection.description}</p>
        </section>
      </main>
    </div>
  );
};

export default DadraNagarHaveliComponent;
