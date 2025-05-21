import React from "react";
import { useNavigate } from "react-router-dom";
import topographicMapImage from "../../assets/maps/india-topographic-map.jpg"; // replace with your topographic map image
import AdditionalSidebar from "../AdditionalSideBar"; // your sidebar component

const IndiaTopographicMap = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="w-full md:w-3/4 p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
				{/* Heading */}
				<header className="mb-6">
					<h1 className="text-4xl font-extrabold text-gray-800">
						India Topographic Map
					</h1>
					<h2 className="text-xl text-blue-700 mt-1">
						भारत का स्थलाकृतिक मानचित्र
					</h2>
				</header>

				{/* Subtext */}
				<p className="text-lg font-medium text-blue-600 mb-3">
					Click on any Topographic Region on the Map to Explore
					Further
				</p>

				{/* Image */}
				<img
					src={topographicMapImage}
					alt="India Topographic Map"
					className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-[1.02] mb-6"
				/>

				{/* Separator */}
				<div className="flex items-center my-8">
					<hr className="flex-grow border-t border-gray-300" />
					<span className="mx-4 text-gray-500 font-medium">or</span>
					<hr className="flex-grow border-t border-gray-300" />
				</div>

				{/* Custom Map Link */}
				<div
					onClick={() => navigate("/custom-topographic-map")}
					className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer mb-10 transition"
				>
					Click here for Customized Topographic Maps
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>

				{/* Content Sections */}
				<section className="space-y-10 text-base leading-relaxed bg-white p-6 rounded-xl shadow-sm">
					<p>
						India is known for its diverse topography, with varying
						geographical features such as the Himalayas, the
						Peninsular Plateau, Northern Plains, and Coastal Plains.
						Each region in India offers a unique landscape and
						ecosystem.
					</p>

					<p>
						The Himalayan mountain range in the north offers steep
						terrains and is home to India’s highest peaks like
						Kanchenjunga (8,598 meters) and Nanda Devi (7,817
						meters). The region is also famous for its glaciers,
						valleys, and rivers that form the lifelines of the
						country.
					</p>

					<p>
						The Peninsular Plateau in the south consists of the
						Deccan Plateau, characterized by highlands, rich soil,
						and ancient rock formations. This region is crucial for
						agriculture and has a large variety of natural
						resources.
					</p>

					<p>
						The Indo-Gangetic Plains in the central and eastern
						parts of India are fertile and agriculturally
						productive. The flat terrain makes it one of the most
						populous regions, with major cities such as Delhi,
						Lucknow, and Patna.
					</p>

					<p>
						The Coastal Plains along the eastern and western coasts
						are home to some of the country’s largest and busiest
						ports. The Western Ghats and Eastern Ghats are mountain
						ranges that run parallel to the coasts and contribute to
						the diverse ecosystem of the coastal regions.
					</p>

					<p>
						India also has the Thar Desert in the northwest,
						characterized by sand dunes and arid conditions. The
						desert is an important region for biodiversity and
						cultural heritage.
					</p>

					<p>
						The islands of Andaman and Nicobar in the Bay of Bengal
						and Lakshadweep in the Arabian Sea are significant parts
						of India’s topography, with tropical forests, marine
						life, and coral reefs.
					</p>

					<p>
						India’s varied topography plays a crucial role in the
						country's climate, agriculture, and socio-economic
						development. Understanding these regions helps in better
						resource management, environmental conservation, and
						disaster preparedness.
					</p>
				</section>

				{/* Last Updated */}
				<footer className="mt-10 text-sm text-gray-500">
					Last Updated on: January 09, 2025
				</footer>

				{/* Disclaimer */}
				<div className="mt-6 text-sm text-gray-500">
					<strong>Disclaimer:</strong> All efforts have been made to
					ensure the accuracy of this image. However, Mapping
					Digiworld Pvt Ltd and its directors do not accept
					responsibility for the correctness or authenticity of this
					map.
				</div>

				{/* Related Links */}
				<h2 className="text-2xl font-semibold mt-10 mb-6">
					Related Links
				</h2>

				<div className="columns-2 gap-6">
					{[
						"Geological Map of India",
						"Climate Map of India",
						"National Science Museums in India",
						"Heritage Map of India",
						"Major Lakes in India",
						"Religions in India",
						"Population Map of India",
						"Cyclone-Prone Areas in India",
						"Tourist Circuits in India",
						"Pin Code Zones in India",
						"Languages in India",
						"Dams in India",
						"India Satellite Map",
						"Geographical Map of India",
						"Map of Indian States and Union Territories",
					].map((link, idx) => (
						<p
							key={idx}
							className="cursor-pointer hover:text-blue-600 mb-2"
						>
							{link}
						</p>
					))}
				</div>
			</main>
		</div>
	);
};

export default IndiaTopographicMap;
