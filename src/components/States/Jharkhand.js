import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import jharkhandMap from "../../assets/State/Jharkhand/Jharkhand.jpg";

const cities = [
	"Ranchi",
	"Jamshedpur",
	"Dhanbad",
	"Bokaro",
	"Hazaribagh",
	"Deoghar",
];

const cityInfo = {
	Ranchi: "The capital city, known for its waterfalls, temples, and greenery.",
	Jamshedpur: "An industrial city developed by Tata, known as Steel City of India.",
	Dhanbad: "Famous for coal mining and industrial establishments.",
	Bokaro: "Hosts one of the largest steel plants and has modern infrastructure.",
	Hazaribagh: "A peaceful city with forests, national parks, and heritage.",
	Deoghar: "A religious city known for the Baidyanath Jyotirlinga temple.",
};

const Jharkhand = () => {
	const [selectedCity, setSelectedCity] = useState("Ranchi");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-orange-600">Jharkhand</h1>
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
				<h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Cities</h2>
				<ul className="space-y-2">
					{cities.map((city) => (
						<li
							key={city}
							className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
								selectedCity === city
									? "bg-orange-600 text-white font-semibold"
									: "hover:bg-orange-100"
							}`}
							onClick={() => {
								setSelectedCity(city);
								setIsMenuOpen(false);
							}}
						>
							{city}
						</li>
					))}
				</ul>
			</aside>

			{/* Main content */}
			<main className="flex-1 px-6 py-10">
				<div className="mb-10">
					<img
						src={jharkhandMap}
						alt="Jharkhand"
						className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#0f172a]">Jharkhand</h1>
					<p className="text-lg leading-7">
						Jharkhand, formed in 2000, is known as "The Land of Forests".
						It is rich in minerals, culture, tribal heritage, and natural
						beauty. The state offers scenic waterfalls, spiritual destinations,
						and industrial cities.
					</p>
				</section>

				<section className="max-w-4xl mx-auto mt-10 border-t pt-6">
					<h2 className="text-3xl font-semibold text-orange-600 mb-2">
						{selectedCity} City Details
					</h2>
					<p className="text-lg text-gray-700">
						{cityInfo[selectedCity]}
					</p>
				</section>
			</main>
		</div>
	);
};

export default Jharkhand;
