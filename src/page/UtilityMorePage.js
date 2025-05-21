import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const IndiaUtilities = () => {
  const utilities = [
    {
      title: "Utilities",
      links: [
        "Pincode Search",
        "Flight Schedule",
        "Census Maps",
        "City Distance Search Engine",
        "Download Wallpapers",
        "Travel Agents in India",
        "India Village Finder",
        "Latitude and Longitude",
        "IFSC Code (New)",
        "Bus Schedule",
        "NH Search Engine",
        "Railway Timetable",
        "Road Companions",
        "State Profiles",
        "Hotels in India",
        "Indian Railway Station Code",
        "Embassies and Consulates in India",
        "STD Search",
        "Distance Chart",
        "Driving Direction Maps",
      ],
    },
    {
      title: "Pincode Search",
      description:
        "Find the PIN code of any area within India or search for an area using its PIN code.",
    },
    {
      title: "Flight Schedule",
      description:
        "Access updated flight schedules for all cities and get flight status between specific destinations.",
    },
    {
      title: "Census Maps",
      description:
        "Find statistical data and maps on Indian Census topics such as population, economy, and literacy.",
    },
    {
      title: "City Distance Search Engine",
      description:
        "Find the distance between two cities and get the shortest route with a road map and driving directions.",
    },
    {
      title: "Download Wallpapers",
      description:
        "Download high-quality themed wallpapers for different festivals, places, and themes.",
    },
    {
      title: "Bus Schedule",
      description:
        "Get information about bus routes, schedules, journey duration, operators, and travel time between destinations.",
    },
    {
      title: "Latitude & Longitude",
      description:
        "Find the geographic coordinates (latitude & longitude) of any state, city, or location in India.",
    },
    {
      title: "National Highway Search Engine",
      description:
        "Search for highways connecting different cities and get detailed route information.",
    },
    {
      title: "Railways Timetable",
      description:
        "Find train schedules, departure and arrival times, distance covered, and train stops.",
    },
    {
      title: "Road Companions",
      description:
        "Find road maps, travel guides, and driving directions between cities in India.",
    },
    {
      title: "State Profiles",
      description:
        "Find complete information about all Indian states and Union Territories, including history, culture, and economy.",
    },
    {
      title: "STD Search",
      description:
        "Search for STD codes of any city in India or get a list of all city codes within a state.",
    },
    {
      title: "Distance Chart",
      description:
        "Find out distances between different cities and access a travel distance chart.",
    },
    {
      title: "Driving Direction Maps",
      description:
        "Get road maps for all major highways and see the cities they pass through.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">India Utilities</h2>

        {/* Main Utilities Section */}
        {utilities.map((section, index) => (
          <div key={index} className="mb-6">
            {/* Utilities Links Grid */}
            {section.links ? (
              <>
                <h3 className="text-lg font-semibold bg-blue-700 text-white px-4 py-2 rounded-t-md">
                  {section.title}
                </h3>
                <div className="bg-white border border-gray-200 shadow-sm rounded-b-md p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {section.links.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-3 py-2 rounded transition duration-200 flex items-center"
                    >
                      <span className="text-red-500 font-bold pr-1">»</span> {item}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              // Expandable Descriptions
              <div
                className="cursor-pointer bg-white shadow-md border border-gray-200 rounded-md p-4 hover:bg-blue-50 transition duration-200"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 flex justify-between">
                  {section.title}
                  <span className="text-blue-600">{expanded === index ? "▲" : "▼"}</span>
                </h3>
                {expanded === index && (
                  <p className="text-gray-600 mt-2">{section.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndiaUtilities;
