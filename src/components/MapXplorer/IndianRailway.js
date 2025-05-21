import React from "react";
import { useNavigate } from "react-router-dom";
import railwayMapImage from "../../assets/maps/indianrail_zonal-map_big.jpg";
import AdditionalSidebar from "../AdditionalSideBar";

const IndiaRailwayNetworkMap = () => {
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
						India Railway Network Map
					</h1>
					<h2 className="text-xl text-blue-700 mt-1">
						भारतीय रेलवे मानचित्र
					</h2>
				</header>

				{/* CTA */}
				<p className="text-lg font-medium text-blue-600 mb-3">
					Click any Railway Zone on the Map to Explore Further
				</p>

				{/* Image */}
				<img
					src={railwayMapImage}
					alt="Indian Railway Network Map"
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

				{/* Info Section */}
				<section className="space-y-6 bg-white p-6 rounded-xl shadow-sm text-base leading-relaxed">
					<p>
						Indian Railways Map shows the network across the country
						with different zones like Central Railway, Eastern
						Railway, Northern Railway, and more.
					</p>
					<p>
						It is the backbone of freight and passenger
						transportation in India, vital to industrial and
						agricultural growth.
					</p>
					<p>
						Operating over 9,000 passenger trains daily, it moves
						about 18 million passengers and employs over 1.4 million
						people—one of the world’s largest networks.
					</p>
					<p>
						The first freight train ran in 1851 and the first
						passenger train in 1853 between Bombay and Thane,
						marking the beginning of Indian Railways.
					</p>
					<p>
						The network weaves together India’s diverse
						regions—socially, culturally, and economically.
					</p>
					<p>
						Recent projects like the Harmuti–Naharlagun line have
						brought connectivity to remote states like Arunachal
						Pradesh.
					</p>
					<p>
						Indian Railways has 18 zones, including NR, WR, SR, CR,
						and more, each managing operations across major regions.
					</p>
				</section>

				{/* Last Updated */}
				<footer className="mt-10 text-sm text-gray-500">
					Last Updated on: January 09, 2025
				</footer>

				{/* Related Links */}
				<section className="mt-12">
					<h2 className="text-2xl font-semibold mb-6 text-gray-800">
						Related Links
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
						{[
							"Railway Zonal Map of India",
							"Northern Western Railway Zone",
							"North Central Railway Zone",
							"Eastern Railway Zone",
							"South Western Railway Zone",
							"West Central Railway Zone",
							"South East Railway Zone",
							"Western Railway Zone",
							"Northern Railway Zone",
							"East Central Railway Zone",
							"South Central Railway Zone",
							"East Coast Railway Zone",
							"Special Trains in India",
							"Indian Railway Time Table",
							"Northern Eastern Railway Zone",
							"Central Railway Zone",
							"South Eastern Railway Zone",
							"Southern Railway Zone",
							"Northeast Frontier Railway Zone",
						].map((link, idx) => (
							<p
								key={idx}
								className="hover:text-blue-600 cursor-pointer transition duration-150"
							>
								• {link}
							</p>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default IndiaRailwayNetworkMap;
