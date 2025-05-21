import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import keralaMap from "../../assets/State/Kerala/kerala.jpg";

const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod"
];

const districtInfo = {
  Thiruvananthapuram: "The capital city, known for beaches, temples, and the IT hub Technopark.",
  Kollam: "Known for its cashew industry and beautiful backwaters.",
  Pathanamthitta: "Famous for Sabarimala temple and eco-tourism.",
  Alappuzha: "Often called the Venice of the East due to its scenic backwaters.",
  Kottayam: "Renowned for literacy, rubber plantations, and publishing houses.",
  Idukki: "A hilly district known for spice gardens, forests, and dams.",
  Ernakulam: "Home to Kochi, the commercial capital and a major port city.",
  Thrissur: "Cultural capital of Kerala, known for Thrissur Pooram and temples.",
  Palakkad: "Known for the Palakkad Gap, dams, and rich agriculture.",
  Malappuram: "A center of Islamic learning and rich cultural heritage.",
  Kozhikode: "Historical seaport where Vasco da Gama landed in 1498.",
  Wayanad: "A lush green district with wildlife sanctuaries and waterfalls.",
  Kannur: "Known for handlooms, beaches, and traditional Theyyam rituals.",
  Kasaragod: "Northernmost district, famous for forts, coir, and diverse culture."
};

const districtHighlights = {
  Thiruvananthapuram: ["Kovalam Beach", "Padmanabhaswamy Temple", "Ponmudi Hills"],
  Kollam: ["Ashtamudi Lake", "Thangassery Light House", "Palaruvi Waterfalls"],
  Pathanamthitta: ["Sabarimala Temple", "Perunthenaruvi Falls", "Konni Elephant Camp"],
  Alappuzha: ["Backwater Houseboats", "Alleppey Beach", "Ambalapuzha Temple"],
  Kottayam: ["Vembanad Lake", "Kumarakom Bird Sanctuary", "Thazhathangady Juma Masjid"],
  Idukki: ["Idukki Dam", "Munnar", "Thekkady"],
  Ernakulam: ["Fort Kochi", "Marine Drive", "Lulu Mall"],
  Thrissur: ["Vadakkunnathan Temple", "Athirapally Falls", "Thrissur Zoo"],
  Palakkad: ["Silent Valley", "Malampuzha Dam", "Palakkad Fort"],
  Malappuram: ["Kottakkunnu", "Teak Museum", "Nilambur Forests"],
  Kozhikode: ["Kappad Beach", "Mananchira Square", "Sweet Street"],
  Wayanad: ["Edakkal Caves", "Banasura Sagar Dam", "Wayanad Wildlife Sanctuary"],
  Kannur: ["St. Angelo Fort", "Payyambalam Beach", "Parassinikadavu Temple"],
  Kasaragod: ["Bekal Fort", "Chandragiri Fort", "Ananthapura Lake Temple"]
};

const Kerala = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("Thiruvananthapuram");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f9fafb] text-[#2E3A59]">
      {/* Mobile menu header */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-[#FFB703]">Kerala</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`lg:w-1/4 w-full bg-white rounded-2xl shadow-lg p-4 h-fit lg:block transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Districts</h2>
        <ul className="space-y-2">
          {districts.map((district) => (
            <li
              key={district}
              onClick={() => {
                setSelectedDistrict(district);
                setIsMenuOpen(false); // Close on mobile after selection
              }}
              className={`cursor-pointer px-3 py-2 rounded-xl transition-all ${
                selectedDistrict === district
                  ? "bg-[#FFB703] text-white font-semibold"
                  : "hover:bg-[#FFE8B2]"
              }`}
            >
              {district}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10 space-y-10">
        <div className="w-full h-64 sm:h-96">
          <img
            src={keralaMap}
            alt="Kerala"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <section>
          <h1 className="text-4xl font-bold mb-4">Kerala</h1>
          <p className="text-lg leading-7">
            Kerala, located on the southwestern coast of India, is famous for its serene backwaters,
            lush landscapes, rich traditions, and high literacy. It's often called "God's Own Country."
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Capital:</strong> Thiruvananthapuram</li>
            <li><strong>Formed:</strong> November 1, 1956</li>
            <li><strong>Area:</strong> 38,863 sq km</li>
            <li><strong>Population:</strong> ~33.4 million (2011)</li>
            <li><strong>Languages:</strong> Malayalam, English, Tamil</li>
            <li><strong>State Animal:</strong> Indian Elephant</li>
            <li><strong>State Bird:</strong> Great Hornbill</li>
            <li><strong>State Tree:</strong> Coconut Tree</li>
            <li><strong>State Flower:</strong> Kanikonna (Golden Shower)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tourism</h2>
          <p className="text-lg leading-7 mb-2">
            Kerala offers a wealth of attractions:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Alleppey Backwaters</li>
            <li>Munnar Hills</li>
            <li>Periyar Wildlife Sanctuary</li>
            <li>Fort Kochi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Geography & Climate</h2>
          <p className="text-lg leading-7 text-gray-700">
            Kerala features a tropical climate with a long coastline along the Arabian Sea,
            and hilly regions in the Western Ghats, supporting rich biodiversity and scenic views.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Transport</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Air</h3>
              <ul className="list-disc list-inside">
                <li>Cochin International Airport</li>
                <li>Trivandrum International Airport</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Rail</h3>
              <ul className="list-disc list-inside">
                <li>Well-connected railways across all districts</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Government</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Legislative Assembly with 140 constituencies</li>
            <li>14 districts for administrative purposes</li>
            <li>High Court: Kerala High Court in Ernakulam</li>
          </ul>
        </section>
      </main>

      {/* District Info Sidebar */}
      <div className="lg:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-10 hidden lg:block">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          {selectedDistrict}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          {districtInfo[selectedDistrict]}
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {(districtHighlights[selectedDistrict] || []).map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kerala;
