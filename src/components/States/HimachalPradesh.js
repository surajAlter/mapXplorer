import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import HimachalPradeshImage from "../../assets/State/HimachalPradesh/HimachalPradesh.jpg";

const districts = [
  { name: "Bilaspur", description: "Known for its rich culture and Bhakra Dam." },
  { name: "Chamba", description: "Famous for the Chamba Rumal and historic temples." },
  { name: "Hamirpur", description: "A blend of ancient history and modern development." },
  { name: "Kangra", description: "Home to the famous Kangra Fort and vast tea gardens." },
  { name: "Kinnaur", description: "Known for apple orchards and the Kinnaur Kailash peak." },
  { name: "Kullu", description: "Known for the Great Himalayan National Park and tourism." },
  { name: "Lahaul and Spiti", description: "Famous for its Buddhist monasteries and landscapes." },
  { name: "Mandi", description: "A historical city with temples and rivers." },
  { name: "Shimla", description: "Capital city, famous for colonial architecture and scenic views." },
  { name: "Sirmaur", description: "Famous for its temples and historical significance." },
  { name: "Solan", description: "Known for its serene landscapes and fruit orchards." },
  { name: "Una", description: "An emerging town with industries and agricultural richness." },
];

const HimachalPradesh = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Himachal Pradesh</h1>
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
            src={HimachalPradeshImage}
            alt="Himachal Pradesh"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Himachal Pradesh</h1>
          <p className="text-lg leading-7">
            Referred to as "Land of Gods", Himachal Pradesh is known for its majestic snow-capped mountains,
            lush valleys, vibrant culture, and scenic beauty. Shimla is the capital and the state is popular
            for its tourism, handicrafts, and religious significance.
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

export default HimachalPradesh;
