import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import haryanaImage from "../../assets/State/Haryana/Haryana.jpg";

const districts = [
  "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
  "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal",
  "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
  "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa",
  "Sonipat", "Yamunanagar"
];

const HaryanaComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-orange-600">Haryana</h1>
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
              key={d}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                selectedDistrict === d
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
              onClick={() => {
                setSelectedDistrict(d);
                setIsMenuOpen(false);
              }}
            >
              {d}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mb-10">
          <img
            src={haryanaImage}
            alt="Haryana"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
          />
        </div>

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#0f172a]">Haryana</h1>
          <p className="text-lg leading-7">
            Haryana, a state in north India formed on November 1, 1966, has a very fertile land and is called the Green Land of India. The state of Delhi is landlocked on three sides by Haryana. The capital city of Haryana is Chandigarh, which is also the capital of Punjab. The largest city of Haryana is Faridabad. The state of Haryana is stretched over an area of 44,212 sq. km. ... [trimmed for brevity]
          </p>
        </section>

        <section className="max-w-4xl mx-auto mt-10 border-t pt-6">
          <h2 className="text-3xl font-semibold text-orange-600 mb-2">
            {selectedDistrict} District Details
          </h2>
          <p className="text-lg text-gray-700">
            Detailed information about {selectedDistrict} district coming soon.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HaryanaComponent;
