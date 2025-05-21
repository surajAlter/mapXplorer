import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import telanganaMap from "../../assets/State/Telangana/Telangana.jpg";

const districts = [
	"Hyderabad",
	"Karimnagar",
	"Warangal",
	"Nizamabad",
	"Khammam",
	"Nalgonda",
	"Medak",
	"Rangareddy",
];

const districtInfo = {
	Hyderabad:
		"The bustling capital, renowned for its iconic Charminar, Golconda Fort, and a flourishing IT industry.",
	Karimnagar:
		"A district with rich historical roots and agricultural prominence, featuring ancient temples.",
	Warangal:
		"Home to magnificent Kakatiya-era monuments, including Warangal Fort and the Thousand Pillar Temple.",
	Nizamabad:
		"Known for its historic sites, scenic lakes, and a blend of cultural traditions.",
	Khammam:
		"A district celebrated for its cultural heritage, natural landscapes, and historical forts.",
	Nalgonda: "Characterized by ancient temples and rural charm.",
	Medak: "Rich in history, known for its impressive Medak Cathedral.",
	Rangareddy:
		"An emerging industrial and suburban hub adjacent to Hyderabad.",
};

const Telangana = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Hyderabad");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row px-4 sm:px-10 md:px-20 py-10 text-[#333] gap-10">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">Telangana</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`md:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-4 h-fit sticky top-10 transition-all duration-300 ${
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
							onClick={() => setSelectedDistrict(district)}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content Area */}
			<div className="md:w-2/4 w-full space-y-10">
				{/* Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={telanganaMap}
						alt="Telangana"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Telangana
					</h1>
					<p className="text-lg leading-7">
						Formed in 2014, Telangana is a land of historical
						marvels and dynamic growth, blending rich cultural
						heritage with rapid modernization.
					</p>
				</section>

				{/* District Info Section */}
				<section>
					<h2 className="text-3xl font-semibold text-amber-600 mb-2">
						{selectedDistrict} District Details
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>
				</section>
			</div>
		</div>
	);
};

export default Telangana;
