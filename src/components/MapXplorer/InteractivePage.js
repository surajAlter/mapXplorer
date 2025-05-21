import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../../assets/Indian.svg";

const idToSlugMap = {
  "IN-AN": "andaman-nicobar",
  "IN-AP": "andhra-pradesh",
  "IN-AR": "arunachal-pradesh",
  "IN-AS": "assam",
  "IN-BR": "bihar",
  "IN-CH": "chandigarh",
  "IN-CT": "chhattisgarh",
  "IN-DN": "dadra-nagar-haveli",
  "IN-DD": "daman-diu",
  "IN-DL": "delhi",
  "IN-GA": "goa",
  "IN-GJ": "gujarat",
  "IN-HR": "haryana",
  "IN-HP": "himachal-pradesh",
  "IN-JH": "jharkhand",
  "IN-KA": "karnataka",
  "IN-KL": "kerala",
  "IN-LD": "lakshadweep",
  "IN-MP": "madhya-pradesh",
  "IN-MH": "maharashtra",
  "IN-MN": "manipur",
  "IN-ML": "meghalaya",
  "IN-MZ": "mizoram",
  "IN-NL": "nagaland",
  "IN-OD": "odisha",
  "IN-PB": "punjab",
  "IN-PY": "puducherry",
  "IN-RJ": "rajasthan",
  "IN-SK": "sikkim",
  "IN-TN": "tamil-nadu",
  "IN-TG": "telangana",
  "IN-TR": "tripura",
  "IN-UP": "uttar-pradesh",
  "IN-UT": "uttarakhand",
  "IN-WB": "west-bengal",
  "IN-LA": "ladakh",
  "IN-JK": "jammu-kashmir"
};

const InteractiveIndiaMapPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const svg = document.getElementById("india-svg");
    if (!svg) return;

    const paths = svg.querySelectorAll("path");

    paths.forEach((path) => {
      const stateId = path.id;
      const slug = idToSlugMap[stateId];

      if (slug) {
        path.style.cursor = "pointer";
        path.addEventListener("mouseenter", () => {
          path.style.opacity = 0.7;
        });
        path.addEventListener("mouseleave", () => {
          path.style.opacity = 1;
        });
        path.addEventListener("click", () => {
          navigate(`/states/${slug}`);
        });
      }
    });

    return () => {
      paths.forEach((path) => {
        const stateId = path.id;
        const slug = idToSlugMap[stateId];
        if (slug) {
          path.removeEventListener("mouseenter", () => {});
          path.removeEventListener("mouseleave", () => {});
          path.removeEventListener("click", () => {});
        }
      });
    };
  }, [navigate]);

  return (
    <div className="p-8 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-4">Interactive Maps of India</h1>
      <p className="text-center text-lg mb-8">Click on any State for its Map and Information.</p>

      <div className="w-full flex justify-center mb-10">
        <IndiaMap id="india-svg" className="w-full max-w-5xl h-auto" />
      </div>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          MapsofIndia offers the best expertise in drawing India specific Maps, Interactive Maps for all your needs.
          It includes the states and union territories Interactive maps of India along with their capitals, to the
          national highway map, Indian railway network map, important tourist centre maps, to easily printable maps for
          school children, Indian assembly election maps, history of India map, political and physical maps of India to
          maps on Indian census.
        </p>
        <p>
          India map also has maps of transport networks in India, pin code search maps, latitude and longitude maps, and
          maps available for free download and maps on Indian state profiles.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Maps and Information on India</h2>
        <ul className="list-disc pl-6">
          <li>India Interactive and clickable maps of all the states and union territories of India</li>
          <li>Road Network: Clickable National Highway, state, and district level road maps of India</li>
          <li>Indian Railways and Tourism Map</li>
          <li>Annual Temperature and Soil Maps of India</li>
          <li>About India: Overview, Education, Transport Network, Tourism, Census, Culture, Food, and more</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Top Ten Thematic Maps</h2>
        <ul className="list-disc pl-6">
          <li>India Cereal Map</li>
          <li>India Cotton Map</li>
          <li>India Foodgrain Map</li>
          <li>Rice, Wheat, Onion, and Vegetable Producing States Map</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">School Children's Maps</h2>
        <ul className="list-disc pl-6">
          <li>Outline Maps, Political Map, States & Capitals</li>
          <li>Topographic Map, Major Soil Types</li>
          <li>World Continents, Oceans, Deserts Maps</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Other Useful Maps</h2>
        <ul className="list-disc pl-6">
          <li>India - History Maps</li>
          <li>Indian Freedom Struggle, Pre-Partition India, Ancient India</li>
          <li>Printable Political & Physical Maps (A4, A3 Sizes)</li>
          <li>Major Rivers Map: Ganges, Brahmaputra, Godavari, Krishna, etc.</li>
        </ul>

        <p className="text-gray-500 text-sm mt-6">Last Updated on: January 08, 2025</p>
      </div>
    </div>
  );
};

export default InteractiveIndiaMapPage;