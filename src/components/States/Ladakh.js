import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ladakhMap from "../../assets/State/Ladakh/Ladakh.jpg";

const districts = ["Leh", "Kargil"];

const districtInfo = {
	Leh: "Leh is known for its high-altitude desert landscape, Buddhist monasteries, and the Pangong Lake.",
	Kargil: "Kargil is famous for its strategic location, the Kargil War memorial, and scenic views of the Himalayas.",
};

const districtHighlights = {
	Leh: ["Pangong Tso Lake", "Thiksey Monastery", "Nubra Valley"],
	Kargil: ["Kargil War Memorial", "Drass", "Suru Valley"],
};

const Ladakh = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Leh");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#2E3A59]">
			{/* Mobile Menu Header */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-orange-600">Ladakh</h1>
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
				<h2 className="text-xl font-bold mb-4">Districts</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							onClick={() => {
								setSelectedDistrict(district);
								setIsMenuOpen(false);
							}}
							className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${
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

			{/* Main Content */}
			<main className="flex-1 px-6 py-10 space-y-10">
				<div className="mb-10">
					<img
						src={ladakhMap}
						alt="Ladakh"
						className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#0f172a]">
						Ladakh
					</h1>
					<p className="text-lg leading-7">
						Ladakh is a Union Territory in the northern part of
						India, renowned for its stunning landscapes, Buddhist
						culture, and serene high-altitude lakes like Pangong Tso
						and Tso Moriri.
					</p>
				</section>

				<section className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-semibold text-orange-600 mb-2">
						{selectedDistrict} District Details
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>
					<div className="mt-4">
						<h3 className="text-2xl font-semibold mb-2">
							Highlights
						</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-600">
							{(districtHighlights[selectedDistrict] || []).map(
								(place) => (
									<li key={place}>{place}</li>
								)
							)}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Ladakh;
