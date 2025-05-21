import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Sikkim = () => {
	const districts = [
		"East Sikkim",
		"West Sikkim",
		"North Sikkim",
		"South Sikkim",
	];

	const districtInfo = {
		"East Sikkim": `Home to Gangtok, the state capital, this district is known for its bustling markets, monasteries like Rumtek, and cultural heritage.`,
		"West Sikkim": `Known for its serene landscapes and secluded valleys, offering a quieter glimpse into Sikkim's natural beauty.`,
		"North Sikkim": `A remote region famous for high-altitude treks, stunning Himalayan vistas, and landmarks like Gurudongmar Lake.`,
		"South Sikkim": `Characterized by lush valleys and diverse communities, with a pleasant climate and rich local traditions.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("East Sikkim");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile Menu Button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">Sikkim</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar - District List */}
			<aside
				className={`md:w-1/4 w-full bg-gray-100 border-r px-4 py-6 shadow-md transition-all duration-300 ${
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
								setIsMenuOpen(false); // close menu on mobile after selecting
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<div className="md:w-3/4 w-full px-6 py-10 space-y-10">
				{/* Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={require("../../assets/State/Sikkim/Sikkim.jpg")}
						alt="Sikkim"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* Sikkim Overview */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Sikkim
					</h1>
					<p className="text-lg leading-7">
						Nestled in the Himalayas, Sikkim is known for its
						breathtaking mountain landscapes, vibrant Buddhist
						culture, and pristine natural beauty. This small state
						offers a unique blend of adventure and serenity.
					</p>
				</section>

				{/* Additional Info Sections (same as before) */}
				{/* ... all your other sections like Quick Facts, Tourism, Transport, etc ... */}

				{/* Right Sidebar Content (District Info) */}
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
							{selectedDistrict === "East Sikkim" && (
								<>
									<li>Gangtok City</li>
									<li>Rumtek Monastery</li>
									<li>Enchey Monastery</li>
								</>
							)}
							{selectedDistrict === "North Sikkim" && (
								<>
									<li>Gurudongmar Lake</li>
									<li>High-altitude Treks</li>
									<li>Scenic Himalayan views</li>
								</>
							)}
							{selectedDistrict === "West Sikkim" && (
								<>
									<li>Serene Valleys</li>
									<li>Rural charm</li>
									<li>Natural landscapes</li>
								</>
							)}
							{selectedDistrict === "South Sikkim" && (
								<>
									<li>Lush Terrains</li>
									<li>Diverse Cultural Heritage</li>
									<li>Milder Climate</li>
								</>
							)}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Sikkim;
