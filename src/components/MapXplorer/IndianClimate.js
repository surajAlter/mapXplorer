import React from "react";
import { useNavigate } from "react-router-dom";
import climaticMapImage from "../../assets/maps/Inda-climate-map.jpg";
import AdditionalSidebar from "../AdditionalSideBar";

const IndiaClimaticRegionsMap = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r  sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="w-full md:w-3/4 p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
				{/* Heading */}
				<header className="mb-6">
					<h1 className="text-4xl font-extrabold text-gray-800">
						Map of Climatic Regions in India
					</h1>
					<h2 className="text-xl text-blue-700 mt-1">
						भारत में जलवायु क्षेत्रों का नक्शा
					</h2>
				</header>

				{/* Disclaimer */}
				<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6 text-sm text-yellow-700">
					Disclaimer: All efforts have been made to make this image
					accurate. However, Mapping Digiworld Pvt Ltd and its
					directors do not own any responsibility for the correctness
					or authenticity of the same.
				</div>

				{/* CTA */}
				<p className="text-lg font-medium text-blue-600 mb-3">
					Click on the Map to Explore Further
				</p>

				{/* Image */}
				<img
					src={climaticMapImage}
					alt="Climatic Regions of India Map"
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
					onClick={() => navigate("/custom-map")}
					className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer mb-10 transition"
				>
					Click here for Customized Maps
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
						India experiences a variety of climates ranging from
						tropical in the south to temperate and alpine in the
						north. The Himalayas and the Thar Desert strongly
						influence these patterns. The Tropic of Cancer divides
						the country, giving rise to multiple climate zones.
					</p>

					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							Different Types of Climatic Regions
						</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>
								<strong>Tropical Wet (Humid):</strong> Found in
								Western Ghats, Assam, Andaman & Nicobar, and
								Lakshadweep.
							</li>
							<li>
								<strong>Tropical Dry:</strong> Includes regions
								in Karnataka, Maharashtra, Rajasthan, Tamil
								Nadu, etc.
							</li>
							<li>
								<strong>Sub-tropical Humid:</strong> Dominates
								North and Northeast India with extreme seasonal
								variation.
							</li>
							<li>
								<strong>Mountain Climate:</strong> Varies from
								subtropical to tundra; heavy snowfall in
								winters.
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							Seasons of India
						</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>
								<strong>Winter (Jan–Feb):</strong> Cool temps;
								rainfall in some southern and northern areas.
							</li>
							<li>
								<strong>Summer (Mar–Jun):</strong> Very hot;
								thunderstorms common in Eastern India.
							</li>
							<li>
								<strong>Monsoon (Jul–Sep):</strong> Peak
								rainfall due to southwest monsoon winds.
							</li>
							<li>
								<strong>Autumn (Oct–Dec):</strong> Transition
								period; retreating monsoons bring rain to south.
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							Factors Affecting India's Climate
						</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>
								<strong>Latitude:</strong> Divides tropical and
								sub-tropical zones.
							</li>
							<li>
								<strong>Altitude:</strong> Himalayas reduce
								impact of cold Central Asian winds.
							</li>
							<li>
								<strong>Monsoon Winds:</strong> Cause seasonal
								rainfall variation.
							</li>
							<li>
								<strong>
									Western Disturbances & Cyclones:
								</strong>{" "}
								Affect winter rains and coastal climates.
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							Climate-Related Calamities
						</h3>
						<p>
							India is prone to natural disasters like floods,
							landslides, cyclones, and droughts. Poor
							infrastructure and climate extremes worsen the
							damage, especially in low-lying and coastal areas.
						</p>
					</div>
				</section>

				{/* Footer Info */}
				<footer className="mt-10 text-sm text-gray-500">
					Last Updated on: January 09, 2025
				</footer>
			</main>
		</div>
	);
};

export default IndiaClimaticRegionsMap;
