import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import tripuraImage from "../../assets/State/Tripura/Tripura.jpg"; // Better import for image

const Tripura = () => {
	const districts = [
		"West Tripura",
		"South Tripura",
		"North Tripura",
		"Dhalai",
	];

	const districtInfo = {
		"West Tripura":
			"Home to Agartala, known for its historical sites and vibrant cultural heritage.",
		"South Tripura":
			"Rich in natural beauty and tribal traditions, showcasing scenic landscapes.",
		"North Tripura":
			"Offers lush green hills and unique cultural experiences in rural settings.",
		Dhalai: "Known for its picturesque nature and rural charm with untouched environments.",
	};

	const [selectedDistrict, setSelectedDistrict] = useState("West Tripura");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile Menu Button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">Tripura</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar - District List */}
			<aside
				className={`md:w-1/4 w-full bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
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
			<main className="flex-1 px-6 py-10 space-y-10">
				{/* Image */}
				<div className="w-full">
					<img
						src={tripuraImage}
						alt="Tripura"
						className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl transition duration-300"
					/>
				</div>

				{/* State Info */}
				<section className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl font-bold text-[#2E3A59]">
						Tripura
					</h1>
					<p className="text-lg leading-7">
						Tripura, nestled in the Northeast, combines rich tribal
						traditions with natural beauty and historical landmarks.
						Its scenic landscapes and cultural diversity make it a
						unique destination.
					</p>

					{/* Quick Facts */}
					<div className="mt-6">
						<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
							Quick Facts
						</h2>
						<ul className="list-disc list-inside space-y-1">
							<li>
								<strong>Capital:</strong> Agartala
							</li>
							<li>
								<strong>Area:</strong> 10,491 sq km
							</li>
							<li>
								<strong>Population:</strong> ~3.67 million
							</li>
							<li>
								<strong>Official Language:</strong> Bengali,
								Kokborok
							</li>
						</ul>
					</div>

					{/* Tourism */}
					<div className="mt-6">
						<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
							Tourism
						</h2>
						<ul className="list-disc list-inside space-y-1">
							<li>Ujjayanta Palace</li>
							<li>Neermahal</li>
							<li>Heritage villages</li>
						</ul>
					</div>

					{/* Geography & Climate */}
					<div className="mt-6">
						<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
							Geography & Climate
						</h2>
						<p className="text-lg leading-7">
							Tripura features a tropical savanna climate with
							distinct wet and dry seasons, complemented by
							rolling hills and dense forests.
						</p>
					</div>

					{/* Transport */}
					<div className="mt-6">
						<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
							Transport
						</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<h3 className="font-semibold text-lg">Air</h3>
								<ul className="list-disc list-inside">
									<li>
										Maharaja Bir Bikram Airport, Agartala
									</li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold text-lg">Rail</h3>
								<ul className="list-disc list-inside">
									<li>Agartala Railway Station</li>
									<li>Regional rail connections</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Government */}
					<div className="mt-6">
						<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
							Government
						</h2>
						<ul className="list-disc list-inside">
							<li>Unicameral Legislature</li>
							<li>
								Divided into 8 districts (current status may
								vary)
							</li>
						</ul>
					</div>
				</section>

				{/* District Info */}
				<section className="max-w-4xl mx-auto mt-10 border-t pt-6">
					<h2 className="text-3xl font-semibold text-amber-600 mb-2">
						{selectedDistrict} District Details
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>

					{/* Key Features */}
					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">
							Key Features
						</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-600">
							{selectedDistrict === "West Tripura" && (
								<>
									<li>Agartala City Center</li>
									<li>Heritage Sites</li>
									<li>Cultural Hubs</li>
								</>
							)}
							{selectedDistrict === "South Tripura" && (
								<>
									<li>Scenic Villages</li>
									<li>Local Markets</li>
									<li>Natural Landscapes</li>
								</>
							)}
							{selectedDistrict === "North Tripura" && (
								<>
									<li>Lush Hills</li>
									<li>Tribal Culture</li>
									<li>Rural Charm</li>
								</>
							)}
							{selectedDistrict === "Dhalai" && (
								<>
									<li>Rustic Beauty</li>
									<li>Forest Areas</li>
									<li>Peaceful Countryside</li>
								</>
							)}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Tripura;
