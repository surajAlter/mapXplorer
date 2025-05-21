// GoaComponent.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import goaImage from "../../assets/State/Goa/Goa.jpg"; // Ensure path is correct

const goaCities = [
  { name: "Panaji", description: "The capital city known for its beautiful Latin Quarter and riverside promenade." },
  { name: "Vasco da Gama", description: "The largest city and an important port town in Goa." },
  { name: "Margao", description: "A major commercial and cultural hub of South Goa." },
  { name: "Mapusa", description: "Famous for its traditional Friday market and vibrant culture." },
];

const GoaComponent = () => {
  const [selectedCity, setSelectedCity] = useState(goaCities[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Goa</h1>
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
          {goaCities.map((city) => (
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
            src={goaImage}
            alt="Goa"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Goa</h1>
          <p className="text-lg leading-7">
            Goa, the smallest state of India, is famous for its pristine beaches, vibrant nightlife, Portuguese heritage, and laid-back lifestyle. 
            It offers a perfect blend of Indian and European cultures and is a hotspot for domestic and international tourists.
          </p>

          <div className="text-sm italic text-gray-600">
            Map shows official boundaries and major landmarks.<br />
            Disclaimer: While we strive for accuracy, Mapping Digiworld takes no responsibility for errors.
          </div>
        </section>

        {/* Selected City Info */}
        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedCity.name} City Details
          </h2>
          <p className="text-lg text-gray-700">{selectedCity.description}</p>
        </section>

        {/* Culture & Heritage Section */}
        <section className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#0f172a]">Culture & Heritage</h2>
          <p className="text-gray-700 leading-7">
            Goa’s culture is a colorful blend of Hindu and Portuguese traditions, seen vividly in its festivals, cuisine, music, and architecture.
            The state is renowned for its vibrant celebrations like Carnival and Sao Joao, seafood delicacies, and the historic churches
            and temples dotting its landscape.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GoaComponent;
