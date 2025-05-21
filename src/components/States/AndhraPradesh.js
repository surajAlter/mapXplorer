import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "../../assets/State/Andhrapradesh/Andhrapradesh.jpg";

const districts = [
  { name: "Vizianagaram", population: 2344474, male: 1161477, female: 1182997 },
  { name: "Prakasam", population: 3397448, male: 1714764, female: 1682684 },
  { name: "West Godavari", population: 3936966, male: 1964918, female: 1972048 },
  { name: "Kurnool", population: 4053463, male: 2039227, female: 2014236 },
  { name: "Srikakulam", population: 2703114, male: 1341738, female: 1361376 },
  { name: "YSR", population: 2882469, male: 1451777, female: 1430692 },
  { name: "Sri Potti Sriramulu Nellore", population: 2963557, male: 1492974, female: 1470583 },
  { name: "Visakhapatnam", population: 4290589, male: 2138910, female: 2151679 },
  { name: "Krishna", population: 4517398, male: 2267375, female: 2250023 },
];

const AndhraPradeshComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Andhra Pradesh</h1>
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
          {districts.map((district) => (
            <li
              key={district.name}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedDistrict.name === district.name
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedDistrict(district);
                setIsMenuOpen(false); // close menu on mobile
              }}
            >
              {district.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={Image}
            alt="Andhra Pradesh"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6 text-justify">
          <h1 className="text-4xl font-bold text-[#0f172a]">Andhra Pradesh</h1>
          <p className="text-lg leading-7">
            Andhra Pradesh is a state in India, situated on the country's southeastern coast.
            The state is known for crafting of stones, doll-making, carving of idols, beautiful
            paintings, folk dances like Yaksha Ganam, Urumula Natyam, Ghato Natyam, and festivals
            like Sankranthi.
          </p>

          <p className="text-lg leading-7">
            The northern area of Andhra Pradesh is mountainous. The highest peak Mahendragiri rises
            1,500 meters above sea level. Climate is generally hot and humid, annual rainfall
            around 125 cm. Major rivers: Krishna and Godavari.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Capital</h2>
              <p>Hyderabad (Vijayawada proposed)</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Important Rivers</h2>
              <ul className="list-disc pl-5">
                <li>Godavari</li>
                <li>Krishna</li>
                <li>Tungabhadra</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Quick Facts</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Formation: Nov 1, 1956 / June 2, 2014</li>
              <li>Area: 1,60,200 km²</li>
              <li>Density: 308/km²</li>
              <li>Population (2011): 4,93,86,799</li>
              <li>Districts: 13</li>
              <li>State Animal: Blackbuck</li>
              <li>State Bird: Indian Roller</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">History</h2>
            <p>
              From being part of Ashoka's empire, to the rule of Satavahanas, Chalukyas, Cholas,
              Muslim Sultanates, and Mughals — Andhra Pradesh has a deep historical legacy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">Geography</h2>
            <p>
              The state includes the Deccan Plateau and Eastern Ghats, with Telangana to the north
              and Rayalaseema in the south, divided by the Krishna river.
            </p>
          </div>
        </section>

        {/* Selected District Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedDistrict.name} District Details
          </h2>
          <p className="text-lg text-gray-700">
            <strong>Population:</strong> {selectedDistrict.population.toLocaleString()}<br />
            <strong>Male:</strong> {selectedDistrict.male.toLocaleString()}<br />
            <strong>Female:</strong> {selectedDistrict.female.toLocaleString()}
          </p>
        </section>
      </main>
    </div>
  );
};

export default AndhraPradeshComponent;
