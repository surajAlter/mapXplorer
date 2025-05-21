import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const WestBengal = () => {
	const districts = [
		"Kolkata",
		"Howrah",
		"Darjeeling",
		"Siliguri",
		"Durgapur",
		"Asansol",
		"Burdwan",
		"Kharagpur",
	];

	const districtInfo = {
		Kolkata: `The cultural capital known for its literary heritage, colonial architecture, and vibrant arts scene.`,
		Howrah: `Famous for its massive railway junction and bustling industrial zones, serving as Kolkata's twin city.`,
		Darjeeling: `Renowned for its tea gardens, panoramic Himalayan views, and the historic Darjeeling Himalayan Railway.`,
		Siliguri: `A major gateway to the Northeast with vibrant markets and a strategic transportation hub.`,
		Durgapur: `An industrial town with modern infrastructure, playing a key role in regional commerce.`,
		Asansol: `Known for its coal mining and steel production industries, with a rich working-class heritage.`,
		Burdwan: `Steeped in history with cultural contributions and significant agricultural produce.`,
		Kharagpur: `Famous for its premier technological institute and strong academic reputation.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Kolkata");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">
					West Bengal
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
								setIsMenuOpen(false);
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<main className="flex-1 px-6 py-10">
				{/* Image */}
				<div className="mb-10">
					<img
						src={require("../../assets/State/WestBengal/WestBengal.jpg")}
						alt="West Bengal"
						className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				{/* State Info */}
				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#2E3A59]">
						West Bengal
					</h1>
					<p className="text-lg leading-7">
						West Bengal in eastern India is celebrated for its rich
						cultural legacy, literary traditions, and scenic beauty,
						from the urban vibrancy of Kolkata to the serene tea
						gardens of the hills.
					</p>
				</section>

				{/* District Info */}
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

export default WestBengal;
