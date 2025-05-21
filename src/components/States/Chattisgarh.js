// ChhattisgarhComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import chhattisgarhImage from "../../assets/State/Chhattisgarh/Chhattishgarh.jpg";

const districts = [
  { name: "Raipur", description: "Capital of Chhattisgarh, a major industrial and educational hub." },
  { name: "Bilaspur", description: "Known for the High Court and Achanakmar Wildlife Sanctuary." },
  { name: "Durg", description: "An important city with a strong steel industry." },
  { name: "Bastar", description: "Rich in tribal culture and home to Chitrakote Falls." },
  { name: "Korba", description: "A major center for coal mining and power generation." },
  { name: "Jagdalpur", description: "Gateway to Bastar with scenic landscapes and waterfalls." },
  { name: "Raigarh", description: "A growing industrial city, especially for power and steel." },
  { name: "Dantewada", description: "Known for tribal heritage and forests." },
  { name: "Kanker", description: "Famous for its palace, waterfalls, and tribal markets." },
  { name: "Sarguja", description: "Taat Pani hot spring and tribal culture are key highlights." },
];

const ChhattisgarhComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Chhattisgarh</h1>
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
        <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Districts</h2>
        <ul className="space-y-2">
          {districts.map((d) => (
            <li
              key={d.name}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedDistrict.name === d.name
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedDistrict(d);
                setIsMenuOpen(false);
              }}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={chhattisgarhImage}
            alt="Chhattisgarh"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Chhattisgarh</h1>
          <p className="text-lg leading-7">
            Created on November 1, 2000 from Madhya Pradesh, Chhattisgarh is rich in minerals,
            power and steel industries, dense forests, and vibrant tribal cultures. Raipur is the
            capital and commercial center.
          </p>
        </section>

        {/* Selected District Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedDistrict.name} District Details
          </h2>
          <p className="text-lg text-gray-700">{selectedDistrict.description}</p>
        </section>
      </main>
    </div>
  );
};

export default ChhattisgarhComponent;
