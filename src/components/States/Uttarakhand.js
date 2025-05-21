import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import uttarakhandMap from "../../assets/State/Uttarakhand/Uttarakhand.jpg";

const Uttarakhand = () => {
	const districts = ["Dehradun", "Nainital", "Haridwar", "Chamoli", "Almora"];

	const districtInfo = {
		Dehradun: `The capital region noted for its pleasant climate, educational institutions, and gateways to hill stations.`,
		Nainital: `A famed hill station recognized for its shimmering lake and colonial charm.`,
		Haridwar: `One of India's holiest cities where pilgrims flock to the sacred Ganges.`,
		Chamoli: `Offers rugged Himalayan landscapes, adventure treks, and spiritual sites.`,
		Almora: `Known for its rich cultural legacy, panoramic mountain views, and serene environment.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Dehradun");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-amber-600">
					Uttarakhand
				</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar: District List */}
			<aside
				className={`bg-gray-100 md:w-1/4 w-full p-4 shadow-md transition-all duration-300 z-10 ${
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
								setIsMenuOpen(false); // Close menu after selecting
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Center Content */}
			<main className="md:w-2/4 w-full p-6 space-y-10">
				<div className="w-full h-64 sm:h-96">
					<img
						src={uttarakhandMap}
						alt="Uttarakhand"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Uttarakhand
					</h1>
					<p className="text-lg leading-7">
						Nestled in the Himalayas, Uttarakhand is renowned for
						its spiritual centers, breathtaking landscapes, and
						adventure activities amidst pristine nature.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Dehradun
						</li>
						<li>
							<strong>Area:</strong> 53,483 sq km
						</li>
						<li>
							<strong>Population:</strong> ~10 million
						</li>
						<li>
							<strong>Official Language:</strong> Hindi, English
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Uttarakhand is famed for its pilgrimage sites, hill
						stations, and adventure tourism.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Har Ki Pauri in Haridwar</li>
						<li>Nainital Lake</li>
						<li>Jim Corbett National Park</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						From the foothills to alpine peaks, Uttarakhand
						experiences a range of climates—from subtropical in the
						lower regions to frigid in the high mountains.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Transport
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h3 className="font-semibold text-lg">Air</h3>
							<ul className="list-disc list-inside">
								<li>Jolly Grant Airport, Dehradun</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Dehradun Railway Station</li>
								<li>Regional routes across hill regions</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Government
					</h2>
					<ul className="list-disc list-inside">
						<li>Unicameral Legislature</li>
						<li>
							Divided into multiple districts for regional
							administration
						</li>
					</ul>
				</section>
			</main>

			{/* Right Sidebar: District Info */}
			<aside className="md:w-1/4 w-full bg-white p-6 rounded-lg shadow-md sticky top-10">
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59] border-b pb-2">
					{selectedDistrict} District
				</h2>
				<p className="text-lg leading-relaxed text-gray-700">
					{districtInfo[selectedDistrict]}
				</p>

				<div className="mt-6">
					<h3 className="text-lg font-semibold mb-2">Key Features</h3>
					<ul className="list-disc list-inside space-y-1 text-gray-600">
						{selectedDistrict === "Dehradun" && (
							<>
								<li>Educational Hubs</li>
								<li>Scenic Valleys</li>
								<li>Gateway to Hill Stations</li>
							</>
						)}
						{selectedDistrict === "Nainital" && (
							<>
								<li>Lake District Charm</li>
								<li>Colonial Architecture</li>
								<li>Hiking Trails</li>
							</>
						)}
						{selectedDistrict === "Haridwar" && (
							<>
								<li>Spiritual Pilgrimage</li>
								<li>Ganga Aarti</li>
								<li>Cultural Heritage</li>
							</>
						)}
						{selectedDistrict === "Chamoli" && (
							<>
								<li>Himalayan Treks</li>
								<li>Adventure Sports</li>
								<li>Pristine Nature</li>
							</>
						)}
						{selectedDistrict === "Almora" && (
							<>
								<li>Local Art & Culture</li>
								<li>Mountain Views</li>
								<li>Peaceful Countryside</li>
							</>
						)}
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Uttarakhand;
