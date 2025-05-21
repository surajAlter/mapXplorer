import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const TamilNadu = () => {
	const districts = [
		"Chennai",
		"Coimbatore",
		"Madurai",
		"Tiruchirappalli",
		"Salem",
		"Tirunelveli",
		"Erode",
		"Tiruppur",
	];

	const districtInfo = {
		Chennai: `The capital city...`,
		Coimbatore: `Often called the Manchester of South India...`,
		Madurai: `Famous for the Meenakshi Amman Temple...`,
		Tiruchirappalli: `An ancient city with iconic landmarks...`,
		Salem: `Known for its steel and textile industries...`,
		Tirunelveli: `Celebrated for its magnificent temples...`,
		Erode: `A key hub for agriculture and textiles...`,
		Tiruppur: `An emerging industrial powerhouse...`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Chennai");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile Top Bar */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">Tamil Nadu</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar Menu */}
			<aside
				className={`md:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-4 z-10 transition-all duration-300 ${
					isMenuOpen ? "block" : "hidden"
				} md:block`}
			>
				<h2 className="text-xl font-bold mb-4 text-[#2E3A59]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-md ${
								selectedDistrict === district
									? "bg-amber-600 text-white font-semibold"
									: "hover:bg-amber-100"
							}`}
							onClick={() => {
								setSelectedDistrict(district);
								setIsMenuOpen(false); // Close menu on mobile
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<div className="flex-1 px-4 sm:px-10 py-10 space-y-10">
				{/* Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={require("../../assets/State/TamilNadu/TamilNadu.jpg")}
						alt="Tamil Nadu"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Tamil Nadu
					</h1>
					<p className="text-lg leading-7">
						Located in the southern tip of India, Tamil Nadu is
						famed for its rich Dravidian heritage...
					</p>
				</section>

				{/* Other Sections (Facts, Tourism, etc.) */}
				{/* ... You can keep your existing sections below this ... */}

				{/* District Info */}
				<section className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-2xl font-bold mb-4 text-[#2E3A59] border-b pb-2">
						{selectedDistrict} District
					</h2>
					<p className="text-lg leading-relaxed text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>
					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">
							Key Features
						</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-600">
							{selectedDistrict === "Chennai" && (
								<>
									<li>Marina Beach</li>
									<li>Fort St. George</li>
									<li>Kapaleeshwarar Temple</li>
								</>
							)}
							{selectedDistrict === "Coimbatore" && (
								<>
									<li>Textile Markets</li>
									<li>Marudamalai Temple</li>
									<li>Western Ghats views</li>
								</>
							)}
							{/* Add other conditions as before... */}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default TamilNadu;
