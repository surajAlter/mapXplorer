import React from "react";
import { useNavigate } from "react-router-dom";
import AdditionalSidebar from "../AdditionalSideBar";

import mapImage from "../../assets/India.jpg";
import politicalMap from "../../assets/maps/india-political-map.jpg";
import statesCapitalsMap from "../../assets/maps/india_states_and_capitals.jpg";
import railwayMap from "../../assets/maps/indianrail_zonal-map_big.jpg";
import physicalMap from "../../assets/maps/physical-map-indiajpg.jpg";
import worldMap from "../../assets/maps/india-location-map.jpg";

const MapofIndiaPage = () => {
	const navigate = useNavigate();

	const mostViewedMaps = [
		{
			title: "POLITICAL MAP OF INDIA",
			image: politicalMap,
			path: "/maps/political",
		},
		{
			title: "INDIA STATES AND CAPITALS",
			image: statesCapitalsMap,
			path: "/maps/states-capitals",
		},
		{
			title: "STATES AND CAPITALS ON INDIA MAP FOR SCHOOLS",
			image: statesCapitalsMap,
			path: "/maps/states-capitals-schools",
		},
		{
			title: "RAILWAY MAP OF INDIA",
			image: railwayMap,
			path: "/maps/railway",
		},
		{
			title: "PHYSICAL MAP OF INDIA",
			image: physicalMap,
			path: "/maps/physical",
		},
		{ title: "INDIA ON WORLD MAP", image: worldMap, path: "/maps/world" },
	];

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="w-full md:w-3/4 p-4 md:p-10">
				{/* Hero Section: Title + Image */}
				<section className="flex flex-col items-center text-center">
					<h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
						Map of India
					</h1>
					<img
						src={mapImage}
						alt="Map of India"
						className="w-full max-w-3xl rounded-lg shadow-md"
					/>
				</section>

				{/* Text Content */}
				<section className="mt-8 text-gray-800 space-y-6 max-w-4xl mx-auto">
					<p>
						India is officially known as the Republic of India. It
						comprises a total of 28 states along with eight union
						territories...
					</p>

					<p>
						Broadly, India is divided into six major zones: East
						India, West India, North India, South India, Northeast
						India, and Central India.
					</p>

					{/* Most Viewed Maps */}
					<div className="mt-12">
						<h2 className="text-2xl font-semibold text-center mb-8">
							Most Viewed Maps of India
						</h2>

						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{mostViewedMaps.map((map, idx) => (
								<div
									key={idx}
									className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition"
									onClick={() => navigate(map.path)}
								>
									<img
										src={map.image}
										alt={map.title}
										className="h-40 w-full object-cover rounded-md"
									/>
									<p className="mt-2 text-sm font-medium text-gray-700">
										{map.title}
									</p>
								</div>
							))}
						</div>

						<div className="mt-6 text-center">
							<button
								onClick={() => navigate("/maps/india")}
								className="text-blue-600 font-semibold hover:underline"
							>
								See All &gt;&gt;
							</button>
						</div>
					</div>

					{/* Zones */}
					<div className="mt-12 space-y-6">
						<h2 className="text-xl font-bold">Eastern India</h2>
						<p>
							Includes Bihar, Jharkhand, Odisha, West Bengal, and
							Andaman and Nicobar Islands...
						</p>

						<h2 className="text-xl font-bold">Western India</h2>
						<p>
							Includes Gujarat, Goa, Maharashtra, Dadra & Nagar
							Haveli, and Daman & Diu...
						</p>

						<h2 className="text-xl font-bold">North India</h2>
						<p>
							Includes Himachal Pradesh, Uttar Pradesh, Rajasthan,
							Uttarakhand, Punjab, Haryana...
						</p>

						<h2 className="text-xl font-bold">South India</h2>
						<p>
							Covers Tamil Nadu, Karnataka, Kerala, Andhra
							Pradesh, Telangana...
						</p>

						<h2 className="text-xl font-bold">Northeast India</h2>
						<p>Includes Seven Sister States and Sikkim.</p>

						<h2 className="text-xl font-bold">Central India</h2>
						<p>Includes Madhya Pradesh and Chhattisgarh.</p>

						<h2 className="text-xl font-bold">
							India General Maps
						</h2>
						<ul className="list-disc list-inside">
							<li>India Political Map</li>
							<li>India Road Map</li>
							<li>India River Map</li>
							<li>India Vegetation Map</li>
							<li>India Nuclear Plant Map</li>
							<li>Poverty Map of India</li>
							<li>India Physical Map</li>
							<li>India Tourist Map</li>
							<li>Indian Railway Map</li>
							<li>Thermal Power Plant Map</li>
						</ul>

						<p className="text-gray-500 text-sm">
							Last Updated on: January 09, 2025
						</p>
					</div>
				</section>
			</main>
		</div>
	);
};

export default MapofIndiaPage;
