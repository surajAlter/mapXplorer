import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon from lucide-react (install if needed)

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	const sidebarSections = [
		{
			title: "MapXplorer",
			links: [
				{ name: "Explore Indian Maps", path: "/mapxplorer" },
				{ name: "Physical Maps", path: "/maps/political" },
				{ name: "Outline Maps", path: "/outline-map" },
				{ name: "More...", path: "/moreinfopage" },
			],
		},
		{
			title: "India Maps And Views",
			links: [
				{ name: "India Geography", path: "/india-geography" },
				{ name: "History of India", path: "/history" },
				{ name: "India Census Maps", path: "/census-maps" },
				{ name: "Business and Economy", path: "/business-economy" },
				{ name: "India Culture", path: "/india-culture" },
				{ name: "More...", path: "/india-maps-and-views" },
			],
		},
		{
			title: "Transport Network In India",
			links: [
				{ name: "Road Map of India", path: "/road-map" },
				{ name: "India Rail Network", path: "/rail-network" },
				{ name: "Air Network in India", path: "/air-network" },
				{
					name: "Ports in India & waterways",
					path: "/ports-waterways",
				},
				{ name: "More...", path: "/transport-network" },
			],
		},
		{
			title: "India Travel",
			links: [
				{ name: "Hotels in India", path: "/hotels" },
				{ name: "Temples in India", path: "/temples" },
				{ name: "Hill Stations", path: "/hill-stations" },
				{ name: "More...", path: "/india-travel" },
			],
		},
		{
			title: "India States & Union Territories",
			links: [
				{ name: "Kerala", path: "/States/kerala" },
				{ name: "Goa", path: "/State/goa" },
				{ name: "Gujarat", path: "/States/gujarat" },
				{ name: "Rajasthan", path: "/States/rajasthan" },
				{ name: "More...", path: "/states" },
			],
		},
		{
			title: "Cities Of India",
			links: [
				{ name: "Top 10 Cities of India", path: "/top-cities" },
				{ name: "Bangalore", path: "/bangalore" },
				{ name: "Mumbai", path: "/mumbai" },
				{ name: "Chennai", path: "/chennai" },
				{ name: "More...", path: "/cities" },
			],
		},
		// {
		//   title: "Driving Direction Maps",
		//   links: [
		//     { name: "National Highways", path: "/national-highways" },
		//     { name: "Intra City Maps", path: "/intra-city-maps" },
		//     { name: "More...", path: "/driving-maps" },
		//   ],
		// },
		// {
		//   title: "World Map",
		//   links: [{ name: "World Map", path: "/world-map" }],
		// },
		// {
		//   title: "Product & Services",
		//   links: [
		//     { name: "India Maps Store", path: "/maps-store" },
		//     { name: "Custom Mapping", path: "/custom-mapping" },
		//     { name: "Location Locator Solutions", path: "/location-solutions" },
		//     { name: "More...", path: "/products-services" },
		//   ],
		// },
		// {
		//   title: "Our Channels",
		//   links: [
		//     { name: "Current Events", path: "/current-events" },
		//     { name: "India Automobiles", path: "/india-automobiles" },
		//     { name: "Live Cricket Score", path: "/live-cricket-score" },
		//     { name: "India News", path: "/india-news" },
		//   ],
		// },
		// {
		//   title: "Indien Karten",
		//   links: [
		//     { name: "Karten von Goa", path: "/karten-goa" },
		//     { name: "Landkarten von Kerala", path: "/landkarten-kerala" },
		//     { name: "Landkarten von Rajasthan", path: "/landkarten-rajasthan" },
		//     { name: "More...", path: "/indien-karten" },
		//   ],
		// },
	];

	return (
		<>
			{/* Mobile menu button */}
			<div className="md:hidden flex justify-between items-center p-4 bg-white shadow sticky top-0 z-20">
				<h2 className="text-lg font-bold text-blue-700">Linkages</h2>
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
					Linkages
				</h2>
				{sidebarSections.map((section, index) => (
					<div key={index} className="mb-6">
						<h3 className="text-md font-semibold bg-blue-600 text-white px-3 py-1 rounded">
							{section.title}
						</h3>
						<ul className="mt-2 text-sm space-y-1">
							{section.links.map((link, i) => (
								<li key={i}>
									<Link
										to={link.path}
										className="block px-2 py-1 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-700"
										onClick={() => setIsOpen(false)} // close on mobile click
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</aside>
		</>
	);
};

export default Sidebar;
