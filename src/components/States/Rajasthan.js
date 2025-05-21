import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import rajasthanMap from "../../assets/State/Rajasthan/Rajasthan.jpg";

const Rajasthan = () => {
	const districts = [
		"Jaipur",
		"Jodhpur",
		"Udaipur",
		"Kota",
		"Bikaner",
		"Ajmer",
		"Alwar",
		"Bharatpur",
		"Chittorgarh",
		"Pali",
		"Sri Ganganagar",
		"Sikar",
		"Barmer",
		"Jaisalmer",
		"Nagaur",
		"Bhilwara",
	];

	const districtInfo = {
		Jaipur: `The Pink City, capital of Rajasthan, known for its historic forts, palaces, and vibrant markets. Home to Amber Fort and Hawa Mahal.`,
		Jodhpur: `The Blue City, dominated by Mehrangarh Fort. Center for traditional handicrafts and Marwar culture.`,
		Udaipur: `City of Lakes, famous for Lake Pichola and City Palace. Known as the Venice of the East.`,
		Kota: `Education hub and industrial city on the Chambal River. Known for Kota stone and coaching institutes.`,
		Bikaner: `Desert city famous for Junagarh Fort, camel safaris, and Bikaneri bhujia snacks.`,
		Ajmer: `Pilgrimage center housing the Dargah Sharif. Gateway to Pushkar Lake and annual camel fair.`,
		Alwar: `Gateway to Rajasthan, known for Sariska Tiger Reserve and Bala Qila fort.`,
		Bharatpur: `Home to Keoladeo National Park (UNESCO World Heritage Site) and Lohagarh Fort.`,
		Chittorgarh: `Historic city with Chittor Fort, symbol of Rajput valor and sacrifice.`,
		Pali: `Industrial city known for textile production and ancient temples.`,
		"Sri Ganganagar": `Northernmost city known for irrigation canal system and citrus fruits.`,
		Sikar: `Part of Shekhawati region, known for havelis and educational institutions.`,
		Barmer: `Desert district famous for traditional embroidery and wooden furniture.`,
		Jaisalmer: `Golden City in the Thar Desert, known for Jaisalmer Fort and sand dunes.`,
		Nagaur: `Historical town hosting the Nagaur Cattle Fair and Ahhichatragarh Fort.`,
		Bhilwara: `Textile manufacturing hub known as the Manchester of Rajasthan.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Jaipur");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">Rajasthan</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar for districts */}
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
							className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ${
								selectedDistrict === district
									? "bg-amber-600 text-white font-semibold"
									: "hover:bg-amber-100"
							}`}
							onClick={() => {
								setSelectedDistrict(district);
								setIsMenuOpen(false);
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main content */}
			<main className="flex-1 px-6 py-10 space-y-10">
				{/* Image */}
				<div className="w-full max-w-4xl mx-auto">
					<img
						src={rajasthanMap}
						alt="Rajasthan"
						className="w-full h-auto rounded-xl shadow-md"
					/>
				</div>

				{/* Intro */}
				<section className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Rajasthan
					</h1>
					<p className="text-lg leading-7">
						The Land of Kings, Rajasthan is a vibrant tapestry of
						desert landscapes, majestic forts, and rich cultural
						heritage. Known for its Rajput valor, colorful
						festivals, and warm hospitality, it offers a royal
						journey through India's history and traditions.
					</p>
				</section>

				{/* Selected District Info */}
				<section className="max-w-4xl mx-auto border-t pt-6">
					<h2 className="text-3xl font-semibold text-amber-600 mb-2">
						{selectedDistrict} District
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>

					{/* Key features for some districts */}
					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">
							Key Features
						</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-600">
							{selectedDistrict === "Jaipur" && (
								<>
									<li>Amber Fort</li>
									<li>Hawa Mahal</li>
									<li>Jantar Mantar</li>
								</>
							)}
							{selectedDistrict === "Jodhpur" && (
								<>
									<li>Mehrangarh Fort</li>
									<li>Umaid Bhawan Palace</li>
									<li>Clock Tower Market</li>
								</>
							)}
							{selectedDistrict === "Udaipur" && (
								<>
									<li>City Palace</li>
									<li>Lake Pichola</li>
									<li>Jag Mandir</li>
								</>
							)}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Rajasthan;
