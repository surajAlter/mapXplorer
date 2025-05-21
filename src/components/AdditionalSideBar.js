import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const AdditionalSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleSidebar = () => setIsOpen(!isOpen);

	const sections = [
		{
			title: "About India",
			links: [
				{ label: "My India", path: "/maps/my-india" },
				{ label: "Political Map of India", path: "/maps/political" },
				{
					label: "States and Capitals of India",
					path: "/maps/states-capitals",
				},
				{ label: "Districts of India", path: "/maps/districts" },
				{ label: "Physical Map of India", path: "/maps/physical" },
				{ label: "India Outline Map", path: "/maps/outline" },
				{ label: "India River Map", path: "/maps/rivers" },
				{ label: "India Satellite Map", path: "/maps/satellite" },
				{ label: "India Zone Map", path: "/maps/zones" },
				{
					label: "Tier I And Tier II Cities of India",
					path: "/maps/tier-cities",
				},
				{
					label: "Current CM and Governors of India",
					path: "/maps/cm-governors",
				},
				{
					label: "Per Capita Income of India",
					path: "/maps/per-capita-income",
				},
				{ label: "Climate Map of India", path: "/maps/climate" },
				{
					label: "Temperature Map of India",
					path: "/maps/temperature",
				},
				{
					label: "India Seismic Zone Map",
					path: "/maps/seismic-zones",
				},
				{ label: "India Topographic Map", path: "/maps/topographic" },
				{
					label: "Mountain Ranges in India",
					path: "/maps/mountain-ranges",
				},
				{ label: "Soil Map of India", path: "/maps/soil" },
				{ label: "Vegetation Map of India", path: "/maps/vegetation" },
				{ label: "Lakes in India", path: "/maps/lakes" },
				{ label: "Telecom Circles Map", path: "/maps/telecom" },
				{ label: "Hydro Power Plants in India", path: "/maps/hydro" },
				{
					label: "Thermal Power Plants in India",
					path: "/maps/thermal",
				},
				{
					label: "Nuclear Power Plants in India",
					path: "/maps/nuclear",
				},
				{
					label: "Pre Partition Map of India",
					path: "/maps/pre-partition",
				},
				{ label: "Annual Rainfall in India", path: "/maps/rainfall" },
				{
					label: "Water Resources of India",
					path: "/maps/water-resources",
				},
				{
					label: "Map of Ruling Parties of India",
					path: "/maps/ruling-parties",
				},
				{
					label: "India Map in Various Languages",
					path: "/maps/languages",
				},
				{ label: "Google Map India", path: "/maps/google" },
				{ label: "Universities in India", path: "/maps/universities" },
			],
		},
		{
			title: "Transport Network in India",
			links: [
				{ label: "India Road Map", path: "/maps/india-road" },
				{
					label: "National Highways in India",
					path: "/maps/national-highways",
				},
				{ label: "India Railway Map", path: "/maps/railway-map" },
				{
					label: "Indian Railways Timetable",
					path: "/maps/railway-timetable",
				},
				{
					label: "Railway Zones Map of India",
					path: "/maps/railway-zones",
				},
				{ label: "Konkan Railway", path: "/maps/konkan-railway" },
				{ label: "Delhi Metro", path: "/maps/delhi-metro" },
				{ label: "Airports in India", path: "/maps/airports" },
				{ label: "Air Network in India", path: "/maps/air-network" },
				{ label: "Ports in India", path: "/maps/ports" },
			],
		},
		{
			title: "Facts about India",
			links: [
				{ label: "India Flag", path: "/maps/india-flag" },
				{
					label: "Independence Day Wallpapers",
					path: "/maps/independence-day",
				},
				{
					label: "India Independence Day 2019",
					path: "/maps/india-independence-2019",
				},
				{ label: "Geography of India", path: "/maps/geography" },
				{ label: "History of India", path: "/maps/history" },
				{ label: "India Census Maps", path: "/maps/census" },
				{ label: "Economy of India", path: "/maps/economy" },
				{ label: "Culture of India", path: "/maps/culture" },
				{ label: "Why India Matters", path: "/maps/why-india-matters" },
				{
					label: "Chief Ministers of India",
					path: "/maps/chief-ministers",
				},
			],
		},
		{
			title: "Travel to India",
			links: [
				{
					label: "Tourist Places in India",
					path: "/maps/tourist-places",
				},
				{
					label: "Religious Places in India",
					path: "/maps/religious-places",
				},
				{ label: "Taj Mahal India", path: "/maps/taj-mahal" },
				{ label: "Taj Mahal Facts", path: "/maps/taj-mahal-facts" },
				{ label: "Char Dham Yatra", path: "/maps/char-dham" },
				{ label: "Beaches in India", path: "/maps/beaches" },
				{
					label: "Hill Stations in India",
					path: "/maps/hill-stations",
				},
				{ label: "Hotels in India", path: "/maps/hotels" },
				{
					label: "Jyotirlinga Shrines in India",
					path: "/maps/jyotirlinga",
				},
			],
		},
		{
			title: "States of India",
			links: [
				{ label: "Andhra Pradesh", path: "/maps/andhra-pradesh" },
				{ label: "Goa", path: "/maps/goa" },
				{ label: "Gujarat", path: "/maps/gujarat" },
				{ label: "Tamilnadu", path: "/maps/tamilnadu" },
			],
		},
		{
			title: "Cities of India",
			links: [
				{ label: "Delhi", path: "/maps/delhi" },
				{ label: "Mumbai", path: "/maps/mumbai" },
				{ label: "Kolkata", path: "/maps/kolkata" },
			],
		},
	];

	return (
		<>
			{/* Mobile Header */}
			<div className="md:hidden flex justify-between items-center p-4 bg-white shadow sticky top-0 z-20">
				<h2 className="text-lg font-bold text-blue-700">
					Additional Maps
				</h2>
				<button
					onClick={toggleSidebar}
					className="text-blue-700 hover:text-blue-900"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`bg-white p-4 shadow-md md:block h-full overflow-y-auto transition-all duration-300 ${
					isOpen ? "block" : "hidden"
				} md:w-64 lg:w-72 md:h-[calc(100vh-0px)] md:sticky md:top-0`}
			>
				<h2 className="text-xl font-bold text-blue-700 mb-4 hidden md:block">
					Additional Maps
				</h2>
				{sections.map((section, index) => (
					<div key={index} className="mb-6">
						<h3 className="text-md font-semibold bg-blue-600 text-white px-3 py-1 rounded">
							{section.title}
						</h3>
						<ul className="mt-2 text-sm space-y-1">
							{section.links.map((link, i) => (
								<li key={i}>
									<button
										onClick={() => {
											navigate(link.path);
											setIsOpen(false);
										}}
										className="w-full text-left block px-2 py-1 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-700"
									>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>
				))}
			</aside>
		</>
	);
};

export default AdditionalSidebar;
