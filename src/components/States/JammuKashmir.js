import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const JammuAndKashmir = () => {
	const districts = [
		"Srinagar",
		"Jammu",
		"Anantnag",
		"Baramulla",
		"Pulwama",
		"Udhampur",
		"Kathua",
		"Budgam",
	];

	const districtInfo = {
		Srinagar: `The summer capital of J&K, famous for Dal Lake, Mughal gardens, and houseboats. It's a cultural and tourism hub.`,
		Jammu: `The winter capital, known for the Vaishno Devi temple and vibrant Dogra culture.`,
		Anantnag: `A scenic district with lush meadows and important religious sites, serving as a gateway to South Kashmir.`,
		Baramulla: `Rich in natural beauty, Baramulla offers snowy landscapes and a peaceful atmosphere.`,
		Pulwama: `An agricultural heartland known for saffron fields and apple orchards.`,
		Udhampur: `A hilly district with army establishments, famous for its natural landscapes and Devika river.`,
		Kathua: `Southernmost district, noted for industrial areas and religious shrines.`,
		Budgam: `Located in central Kashmir, known for Yusmarg meadows and traditional Kashmiri life.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Srinagar");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-orange-600">
					Jammu and Kashmir
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
				<h2 className="text-2xl font-bold mb-4 text-[#0f172a]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							onClick={() => setSelectedDistrict(district)}
							className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
								selectedDistrict === district
									? "bg-orange-600 text-white font-semibold"
									: "hover:bg-orange-100"
							}`}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main content */}
			<main className="flex-1 px-6 py-10">
				<div className="mb-10">
					<img
						src={require("../../assets/State/JammuKashmir/JammuKashmir.jpg")}
						alt="Jammu and Kashmir"
						className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#0f172a]">
						Jammu and Kashmir
					</h1>
					<p className="text-lg leading-7">
						Jammu and Kashmir, a union territory since 2019, is
						renowned for its breathtaking landscapes, religious
						significance, and cultural diversity. It includes the
						valleys of Kashmir and the plains of Jammu, offering a
						blend of Himalayan beauty and spiritual tranquility.
					</p>
				</section>

				{/* Selected District Info */}
				<section className="max-w-4xl mx-auto mt-10 border-t pt-6">
					<h2 className="text-3xl font-semibold text-orange-600 mb-2">
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

export default JammuAndKashmir;
