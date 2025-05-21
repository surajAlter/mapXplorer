import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import maharashtraMap from "../../assets/State/Maharashtra/Maharashtra.jpg";

const districts = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Solapur",
  "Amravati",
  "Kolhapur",
  "Thane",
  "Latur",
];

const districtInfo = {
  Mumbai: "Mumbai, the capital of Maharashtra, is the financial capital of India.",
  Pune: "Pune is known for its educational institutions and vibrant culture.",
  Nagpur: "Nagpur is famous for its oranges and is known as the winter capital of Maharashtra.",
  // Add remaining as needed
};

const districtHighlights = {
  Mumbai: ["Gateway of India", "Marine Drive", "Bandra-Worli Sea Link"],
  Pune: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
  Nagpur: ["Orange Orchards", "Deekshabhoomi"],
  // Add remaining as needed
};

const Maharashtra = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("Mumbai");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#2E3A59]">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Maharashtra</h1>
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
              key={district}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedDistrict === district
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedDistrict(district);
                setIsMenuOpen(false);
              }}
            >
              {district}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10 space-y-10">
        <div className="mb-10">
          <img
            src={maharashtraMap}
            alt="Maharashtra"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Maharashtra</h1>
          <p className="text-lg leading-7">
            Maharashtra, located in the western peninsular region of India, is the second-most populous state and third-largest by area. It is bordered by the Arabian Sea to the west and shares boundaries with Gujarat, Madhya Pradesh, Chhattisgarh, Telangana, Karnataka, and Goa. Its capital, Mumbai, is also the financial capital of India.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedDistrict} District Details
          </h2>
          <p className="text-lg text-gray-700">{districtInfo[selectedDistrict]}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {(districtHighlights[selectedDistrict] || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Maharashtra;
