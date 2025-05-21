import React from "react";
import Sidebar from "./Sidebar";
import IndiaMap from "../assets/India.jpg"

const MoreInfoPage = ({ title }) => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700">
          Welcome to the detailed information section about Maps of India.
          Here you will find various categories of maps, including Physical, Outline, 
          Census, Business, Economy, Culture, and much more.
        </p>

        {/* Delhi Information Section */}
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Delhi - The Heart of India</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Delhi Image */}
            <img
              src={IndiaMap}
              alt="Delhi India Gate"
              className="w-full md:w-1/3 rounded shadow"
            />
            <div className="flex-1">
              <p className="text-gray-700">
                Delhi, or the National Capital Territory of Delhi, is India's capital and includes 
                New Delhi, Old Delhi, and Delhi Cantt. Also referred to as NCR, it incorporates satellite 
                cities like Faridabad, Gurgaon, Ghaziabad, and Noida. Delhi has always been an attraction 
                for travelers and tourists. From shopping to sightseeing, forts and monuments to beautiful 
                gardens, Delhi has it all.
              </p>
              <p className="text-gray-700 mt-2">
                It also has many state-of-the-art hotels to offer to its tourists. The economy of the 
                state benefits from its service sector, which includes Insurance, Travel and Tourism, 
                Mortgage, Real Estate, Consultancy, and Educational Institutes. A direct consequence of 
                Delhi's rich history is its magnificent monuments.
              </p>
              <p className="text-gray-700 mt-2">
                Delhi also offers a glimpse of India's religious diversity. It has many temples, mosques, 
                gurudwaras, and churches. Undoubtedly, Delhi is the 'Heart of India'.
              </p>
            </div>
          </div>
        </div>

        {/* Information & Maps on India */}
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Information & Maps on India</h2>
          <ul className="grid grid-cols-3 gap-4 mt-2">
            <li>India Map in Different Languages</li>
            <li>Physical Map of India</li>
            <li>Zonal Maps of India</li>
            <li>Reference Maps</li>
            <li>Political Map of India</li>
            <li>General Information on India</li>
            <li>Tricolor Map of India</li>
            <li>Outline Map of India</li>
            <li>Maps for School Children</li>
            <li>States and Territories Map of India</li>
          </ul>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <div>
              <h3 className="font-bold">About India</h3>
              <ul>
                <li>India Flag</li>
                <li>Geography of India</li>
                <li>History of India</li>
                <li>Economy of India</li>
                <li>Culture of India</li>
                <li>Languages in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Transport in India</h3>
              <ul>
                <li>Road Map of India</li>
                <li>National Highways</li>
                <li>Indian Railways</li>
                <li>Airports in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Cities of India</h3>
              <ul>
                <li>Top Ten Cities</li>
                <li>Agra</li>
                <li>Hyderabad</li>
                <li>Pune</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Travel to India</h3>
              <ul>
                <li>Hotels in India</li>
                <li>Tourist Places</li>
                <li>Beaches in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Government Schemes</h3>
              <ul>
                <li>Digital India</li>
                <li>Make in India</li>
                <li>Swachh Bharat Abhiyan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;
