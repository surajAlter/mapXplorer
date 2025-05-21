import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import uttarPradeshMap from "../../assets/State/UttarPradesh/UttarPradesh.jpg";

const districts = [
	"Lucknow",
	"Kanpur",
	"Agra",
	"Varanasi",
	"Noida",
	"Ghaziabad",
	"Prayagraj",
];

const districtInfo = {
	Lucknow: `The capital city renowned for its Nawabi architecture, rich cultural legacy, and vibrant culinary scene.`,
	Kanpur: `An industrial and commercial hub with a deep historical background and dynamic urban growth.`,
	Agra: `World-famous for the Taj Mahal and Mughal-era heritage, a top destination for history and architecture enthusiasts.`,
	Varanasi: `One of the oldest inhabited cities, a spiritual epicenter along the Ganges with vibrant rituals and traditions.`,
	Noida: `A modern city known for its IT industries, commercial centers, and rapid urban development.`,
	Ghaziabad: `An important industrial city experiencing fast-paced growth and modernization.`,
	Prayagraj: `Steeped in history and spirituality, known for its grand Kumbh Mela and the confluence of sacred rivers.`,
};

const UttarPradesh = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Lucknow");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">
					Uttar Pradesh
				</h1>
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
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
								selectedDistrict === district
									? "bg-amber-600 text-white font-semibold"
									: "hover:bg-amber-100"
							}`}
							onClick={() => {
								setSelectedDistrict(district);
								setIsMenuOpen(false); // close menu on selection (mobile)
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main content */}
			<main className="flex-1 px-6 py-10 space-y-10">
				{/* Map Image */}
				<div className="w-full max-w-4xl mx-auto">
					<img
						src={uttarPradeshMap}
						alt="Uttar Pradesh"
						className="w-full rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				{/* State Info */}
				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#2E3A59]">
						Uttar Pradesh
					</h1>
					<p className="text-lg leading-7">
						Uttar Pradesh, located in northern India, is steeped in
						ancient history and spirituality. The state is home to
						iconic monuments, bustling cities, and revered
						pilgrimage sites.
					</p>
				</section>

				{/* Selected District Info */}
				<section className="max-w-4xl mx-auto mt-10 border-t pt-6">
					<h2 className="text-3xl font-semibold text-amber-600 mb-2">
						{selectedDistrict} District Details
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>
				</section>
			</main>
		</div>
	);
};

export default UttarPradesh;
