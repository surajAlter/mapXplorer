import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import karnatakaMap from "../../assets/State/Karnataka/Karnataka.jpg";

const cities = [
  "Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi",
  "Ballari", "Davangere", "Tumakuru", "Shivamogga", "Kalaburagi"
];

const cityInfo = {
  Bengaluru: "The capital city, known for its IT industry and vibrant culture.",
  Mysuru: "Famous for its royal heritage and Dasara celebrations.",
  Mangaluru: "A coastal city known for its ports and educational institutions.",
  Hubballi: "An important commercial center in North Karnataka.",
  Belagavi: "A historical city with a mix of cultural influences.",
  Ballari: "Known for its rich iron ore deposits and historic sites.",
  Davangere: "An educational and textile hub in central Karnataka.",
  Tumakuru: "An emerging industrial city near Bengaluru.",
  Shivamogga: "Known for its lush greenery and Jog Falls.",
  Kalaburagi: "Famous for historical monuments and Sufi heritage."
};

const Karnataka = () => {
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-[#2E3A59] bg-[#f9fafb]">
      {/* Mobile menu header */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-[#FFB703]">Karnataka</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar menu */}
      <div className={`lg:w-1/4 w-full bg-[#F9F9F9] rounded-none lg:rounded-2xl shadow-lg p-4 h-fit lg:sticky top-10 transition-all duration-300 ${
        isMenuOpen ? "block" : "hidden"
      } lg:block`}>
        <h2 className="text-xl font-bold mb-4">Major Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => {
                setSelectedCity(city);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 rounded-xl transition-all ${
                selectedCity === city
                  ? "bg-[#FFB703] text-white font-semibold"
                  : "hover:bg-[#FFE8B2]"
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="lg:w-2/4 w-full px-4 sm:px-10 py-10 space-y-10">
        <div className="w-full h-64 sm:h-96">
          <img
            src={karnatakaMap}
            alt="Karnataka"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <section>
          <h1 className="text-4xl font-bold mb-4">Karnataka</h1>
          <p className="text-lg leading-7">
            Karnataka, located in the southwest region of India, is known for its rich cultural heritage,
            diverse landscapes, and booming IT industry. The state is a blend of modern urban centers and
            ancient temples, hills, and forests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Capital:</strong> Bengaluru</li>
            <li><strong>Formed:</strong> November 1, 1956</li>
            <li><strong>Area:</strong> 191,791 sq km</li>
            <li><strong>Population:</strong> ~61 million (2011)</li>
            <li><strong>Languages:</strong> Kannada, Tulu, Hindi, others</li>
            <li><strong>State Animal:</strong> Elephant</li>
            <li><strong>State Bird:</strong> Indian Roller</li>
            <li><strong>State Tree:</strong> Sandalwood</li>
            <li><strong>State Flower:</strong> Lotus</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tourism</h2>
          <p className="text-lg leading-7 mb-2">
            Karnataka offers a variety of attractions:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Hampi – UNESCO World Heritage site</li>
            <li>Coorg – The Scotland of India</li>
            <li>Jog Falls – One of the highest waterfalls</li>
            <li>Mysore Palace – A royal residence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Geography & Climate</h2>
          <p className="text-lg leading-7 text-gray-700">
            Karnataka is characterized by coastal areas, mountains, and plains. The Western Ghats influence
            the state's climate, which ranges from coastal humid to dry inland.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Transport</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Air</h3>
              <ul className="list-disc list-inside">
                <li>Kempegowda International Airport (Bengaluru)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Rail</h3>
              <ul className="list-disc list-inside">
                <li>Extensive rail network connecting all regions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Government</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Legislative Assembly with 224 seats</li>
            <li>30 districts for administrative purposes</li>
            <li>High Court: Karnataka High Court in Bengaluru</li>
          </ul>
        </section>
      </div>

      {/* City detail highlights */}
      <div className="lg:w-1/4 w-full bg-white rounded-none lg:rounded-2xl shadow-lg p-6 h-fit lg:sticky top-10">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          {selectedCity}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          {cityInfo[selectedCity]}
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {selectedCity === "Bengaluru" && (
              <>
                <li>Lalbagh Botanical Garden</li>
                <li>ISKCON Temple</li>
                <li>Bannerghatta National Park</li>
              </>
            )}
            {selectedCity === "Mysuru" && (
              <>
                <li>Mysore Palace</li>
                <li>Chamundi Hills</li>
                <li>Brindavan Gardens</li>
              </>
            )}
            {selectedCity === "Mangaluru" && (
              <>
                <li>Panambur Beach</li>
                <li>Kadri Manjunath Temple</li>
                <li>St. Aloysius Chapel</li>
              </>
            )}
            {selectedCity === "Hubballi" && (
              <>
                <li>Unkal Lake</li>
                <li>Nrupatunga Hill</li>
                <li>Chandramouleshwara Temple</li>
              </>
            )}
            {selectedCity === "Belagavi" && (
              <>
                <li>Belagavi Fort</li>
                <li>Gokak Falls</li>
                <li>Military Mahadeva Temple</li>
              </>
            )}
            {selectedCity === "Ballari" && (
              <>
                <li>Bellary Fort</li>
                <li>Kumbara Rock</li>
                <li>Sandur Hills</li>
              </>
            )}
            {selectedCity === "Davangere" && (
              <>
                <li>Kunduvada Lake</li>
                <li>Bathi Gudda Hill</li>
                <li>Davangere Benne Dosa</li>
              </>
            )}
            {selectedCity === "Tumakuru" && (
              <>
                <li>Devarayanadurga Hills</li>
                <li>Siddaganga Matha</li>
                <li>Shivagange</li>
              </>
            )}
            {selectedCity === "Shivamogga" && (
              <>
                <li>Jog Falls</li>
                <li>Sacred Heart Cathedral</li>
                <li>Tunga River</li>
              </>
            )}
            {selectedCity === "Kalaburagi" && (
              <>
                <li>Gulbarga Fort</li>
                <li>Sharana Basaveshwara Temple</li>
                <li>Haft Gumbaz</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Karnataka;
