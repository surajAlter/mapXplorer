import React from "react";
import { useNavigate } from "react-router-dom";
import outlineMapImage from "../../assets/maps/india-outline-map.jpg"; // replace with your outline map image
import AdditionalSidebar from "../AdditionalSideBar"; // your sidebar component

const IndiaOutlineMap = () => {
	const navigate = useNavigate();

	const statesData = [
		{ text: "Andaman & Nicobar", path: "/states/andaman-nicobar" },
		{ text: "Andhra Pradesh", path: "/states/andhra-pradesh" },
		{ text: "Arunachal Pradesh", path: "/states/arunachal-pradesh" },
		{ text: "Assam", path: "/states/assam" },
		{ text: "Bihar", path: "/states/bihar" },
		{ text: "Chandigarh", path: "/states/chandigarh" },
		{ text: "Chhattisgarh", path: "/states/chhattisgarh" },
		{ text: "Dadra & Nagar Haveli", path: "/states/dadra-nagar-haveli" },
		{ text: "Daman", path: "/states/daman-diu" },
		{ text: "Delhi", path: "/states/delhi" },
		{ text: "Goa", path: "/states/goa" },
		{ text: "Gujarat", path: "/states/gujarat" },
		{ text: "Haryana", path: "/states/haryana" },
		{ text: "Himachal Pradesh", path: "/states/himachal-pradesh" },
		{ text: "Jammu & Kashmir", path: "/states/jammu-kashmir" },
		{ text: "Jharkhand", path: "/states/jharkhand" },
		{ text: "Karnataka", path: "/states/karnataka" },
		{ text: "Kerala", path: "/states/kerala" },
		{ text: "Lakshadweep", path: "/states/lakshadweep" },
		{ text: "Madhya Pradesh", path: "/states/madhya-pradesh" },
		{ text: "Maharashtra", path: "/states/maharashtra" },
		{ text: "Manipur", path: "/states/manipur" },
		{ text: "Meghalaya", path: "/states/meghalaya" },
		{ text: "Mizoram", path: "/states/mizoram" },
		{ text: "Nagaland", path: "/states/nagaland" },
		{ text: "Odisha", path: "/states/odisha" },
		{ text: "Pondicherry", path: "/states/puducherry" },
		{ text: "Punjab", path: "/states/punjab" },
		{ text: "Rajasthan", path: "/states/rajasthan" },
		{ text: "Sikkim", path: "/states/sikkim" },
		{ text: "Tamil Nadu", path: "/states/tamil-nadu" },
		{ text: "Tripura", path: "/states/tripura" },
		{ text: "Uttar Pradesh", path: "/states/uttar-pradesh" },
		{ text: "Uttaranchal", path: "/states/uttarakhand" },
		{ text: "West Bengal", path: "/states/west-bengal" },
	];

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="w-full md:w-3/4 p-6 max-w-6xl mx-auto text-gray-800">
				{/* Heading */}
				<h1 className="text-3xl font-bold mb-2">India Outline Map</h1>
				<h2 className="text-xl text-gray-500 mb-6">
					भारत का रेखांकित नक्शा
				</h2>

				{/* Subtext */}
				<p className="mb-4 text-lg font-semibold text-blue-700">
					Click any State on the Map to get the State's Outline Map
				</p>

				{/* Image */}
				<img
					src={outlineMapImage}
					alt="India Outline Map"
					className="w-full h-auto rounded-xl shadow-md mb-6"
				/>

				{/* Separator */}
				<div className="flex items-center my-6">
					<hr className="flex-grow border-t-2 border-gray-300" />
					<span className="mx-3 text-gray-500 font-medium">or</span>
					<hr className="flex-grow border-t-2 border-gray-300" />
				</div>

				{/* Custom Map Link */}
				<div
					className="flex items-center cursor-pointer text-blue-600 hover:underline mb-8"
					onClick={() => navigate("/custom-map")}
				>
					<span>Click here for Customized Maps</span>
					<svg
						className="ml-2 w-5 h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>

				{/* Paragraphs */}
				<div className="space-y-4">
					<p>
						India ranks the seventh biggest nation in the world in
						terms of geographical area. It is also the
						second-largest country in Asia and shares its
						international boundaries with countries like Burma,
						Bangladesh, China, Bhutan, Pakistan, and Nepal. The
						country covers a total area of 3,287,240 sq km, and the
						shoreline extends for over 7,517 km, edged by the
						Arabian Sea, Bay of Bengal, and Indian Ocean.
					</p>
					<p>
						India is a republic made up of 28 states and eight union
						territories. The economy is diversified, consisting of
						conventional rural farming, contemporary agriculture,
						handicrafts, industries, and more.
					</p>
					<p>
						The service sector comprises banking, infrastructure,
						telecom, tourism, healthcare, insurance, and more. India
						is an affordable tourism destination with famous places
						like Shimla, Darjeeling, Goa, Agra, Delhi, Jaipur,
						Mumbai, Nainital, Mysore, Chennai, Kolkata, Srinagar,
						and Bangalore.
					</p>
					<p>
						An Outline map of India helps locate all state
						boundaries. It's a perfect guide for geography students
						and learners.
					</p>
					<p>
						Blank outline maps are available online and offline for
						educational use. They are helpful for kids to mark
						states, capitals, seas, and oceans.
					</p>
					<p>
						This blank outline map also highlights international
						boundaries with Bangladesh, Pakistan, China, Nepal,
						Burma, and Bhutan, along with the Bay of Bengal, Arabian
						Sea, and Indian Ocean.
					</p>
				</div>

				{/* Last Updated */}
				<p className="text-sm text-gray-500 mt-8">
					Last Updated on: December 30, 2024
				</p>

				{/* Outline Maps List */}
				<h2 className="text-2xl font-semibold mt-10 mb-6">
					Outline Maps
				</h2>

				<div className="columns-2 gap-6">
					{statesData.map((state, index) => (
						<p
							key={index}
							className="cursor-pointer hover:text-blue-600 mb-2"
							onClick={() => navigate(state.path)}
						>
							{state.text}
						</p>
					))}
				</div>
			</main>
		</div>
	);
};

export default IndiaOutlineMap;
