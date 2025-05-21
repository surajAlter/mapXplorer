import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import roadMapImage from '../../assets/maps/india-road-map.jpg';

const IndiaRoadNetworkMap = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarItems = [
    { name: "Road Maps", link: "/road-maps" },
    { name: "Distance Calculator", link: "/distance-calculator" },
    { name: "Driving Directions Map", link: "/driving-directions-map" },
    { name: "Pocket Maps", link: "/pocket-maps" },
    { name: "National Highway", link: "/national-highway" },
    { name: "Wall Map", link: "/wall-map" },
    { name: "Golden Quadrilateral", link: "/golden-quadrilateral" },
    { name: "Expressway", link: "/expressway" },
    { name: "States Road Network", link: "/states-road-network" },
    { name: "Mumbai Road Map", link: "/mumbai-road-map" },
    { name: "Hyderabad Road Map", link: "/hyderabad-road-map" },
    { name: "Delhi Road Map", link: "/delhi-road-map" },
    { name: "Bengaluru Road Map", link: "/bengaluru-road-map" },
    { name: "Pune Road Map", link: "/pune-road-map" },
    { name: "Jaipur Road Map", link: "/jaipur-road-map" },
    { name: "Ahmedabad Road Map", link: "/ahmedabad-road-map" },
    { name: "South India Road Map", link: "/south-india-road-map" },
    { name: "Kundli Manesar Palwal (KMP) Expressway Map", link: "/kmp-expressway-map" },
    { name: "India Traffic Signs", link: "/india-traffic-signs" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-blue-700">India Road Network</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-1/4 bg-white shadow-md p-4 border-r z-10 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navigation</h2>
        <ul className="space-y-3">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="block p-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 md:p-10 max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">India Road Network Map</h1>
          <h2 className="text-xl text-blue-700 mt-1">भारतीय सड़क नेटवर्क मानचित्र</h2>
        </header>

        <p className="text-lg font-medium text-blue-600 mb-3">
          Click on any Section of the Map to Explore Further
        </p>

        <img
          src={roadMapImage}
          alt="Indian Road Network Map"
          className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-[1.02] mb-6"
        />

        <div className="flex items-center my-8">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div
          onClick={() => navigate('/custom-road-map')}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer mb-10 transition"
        >
          Click here for Customized Road Maps
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <section className="space-y-10 text-base leading-relaxed bg-white p-6 rounded-xl shadow-sm">
          <p>
            India road maps make you familiar with the Indian road network...
          </p>
          {/* ... rest of the content ... */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Indian Road Network Overview</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>State Highways: 128,000 km</li>
              <li>Expressways/National Highways: 66,754 km</li>
              <li>Rural and Other Roads: 2,650,000 km</li>
              <li>Important District Roads: 470,000 km</li>
              <li>Total: Approx. 3,314,754 km</li>
            </ul>
          </div>
        </section>

        <footer className="mt-10 text-sm text-gray-500">
          Last Updated on: January 09, 2025
        </footer>
      </main>
    </div>
  );
};

export default IndiaRoadNetworkMap;
