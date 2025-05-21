import React from "react";
import physicalMapImage from "../../assets/maps/physical-map-indiajpg.jpg";
import AdditionalSidebar from "../AdditionalSideBar";

const IndiaPhysicalMap = () => {
	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">
			{/* Left Sidebar */}
			<aside className="w-full md:w-1/4 bg-gray-100 p-4 border-r border-gray-200 sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="w-full md:w-3/4 p-6 max-w-6xl mx-auto">
				{/* Title */}
				<header className="mb-6">
					<h1 className="text-4xl font-extrabold text-blue-900">
						Physical Map of India
					</h1>
					<h2 className="text-2xl text-blue-700 mt-1">
						भारत का भौतिक नक्शा
					</h2>
				</header>

				{/* Image Section */}
				<div className="mb-8">
					<img
						src={physicalMapImage}
						alt="Physical Map of India"
						className="rounded-xl shadow-xl w-full"
					/>
				</div>

				{/* Custom Map Promotion */}
				<section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
					<h3 className="text-xl font-semibold text-blue-800 mb-2">
						Custom Physical Map of India
					</h3>
					<p className="mb-4">
						Available for purchase with customizable design options
						tailored to preferences and location.
					</p>
					<div className="flex space-x-6 text-blue-600 mb-4">
						<span className="hover:underline cursor-pointer">
							Twitter
						</span>
						<span className="hover:underline cursor-pointer">
							Instagram
						</span>
						<span className="hover:underline cursor-pointer">
							Facebook
						</span>
						<span className="hover:underline cursor-pointer">
							YouTube
						</span>
					</div>
					<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md">
						Buy This Map
					</button>
				</section>

				{/* Description Section */}
				<section className="space-y-4">
					<p>
						<strong>Disclaimer:</strong> Efforts have been made to
						ensure accuracy. Mapping Digiworld Pvt Ltd is not
						responsible for errors.
					</p>

					<p>
						The physical map of India displays topographical
						diversity—mountains, plateaus, rivers, forests, deserts,
						and coastlines—making it ideal for students and
						educators.
					</p>

					<p>
						Snow-capped mountains, the Indo-Gangetic plain, the
						Deccan plateau, and the Thar Desert make India
						geographically diverse. Downloadable maps are useful for
						offline use.
					</p>
				</section>

				{/* Major Physical Features */}
				<section className="mt-10">
					<h3 className="text-2xl font-semibold mb-3 text-blue-800">
						Major Physical Features
					</h3>
					<ul className="list-disc ml-6 space-y-1">
						<li>The Himalayan Mountain Range</li>
						<li>The Indian Peninsula</li>
						<li>The Indo Gangetic Plains</li>
						<li>The Great Indian Thar Desert</li>
						<li>The Western and Eastern Ghats</li>
						<li>The Karakoram Mountain Range</li>
					</ul>
				</section>

				<p className="mt-4">
					Major rivers: Yamuna, Ganga, Sutlej, Jhelum, Indus,
					Godavari. Elevation scales provide topographical clarity.
				</p>

				{/* Physiographic Divisions */}
				<section className="mt-10">
					<h3 className="text-2xl font-semibold mb-3 text-blue-800">
						Physiographic Regions of India
					</h3>
					<ul className="list-disc ml-6 space-y-1">
						<li>The Islands</li>
						<li>Coastal Plains</li>
						<li>The Peninsular Plateau</li>
						<li>The Great Indian Desert</li>
						<li>Indo-Gangetic Plains</li>
						<li>The Himalayan Ranges</li>
					</ul>
				</section>

				<p className="mt-4">
					Key regions include the Deccan Plateau, Thar Desert, and the
					Himalayas. Rivers such as the Narmada, Godavari, Kaveri, and
					Brahmaputra are shown along with surrounding oceans.
				</p>

				{/* Metadata */}
				<p className="text-sm text-gray-500 mt-6">
					Last Updated on: January 08, 2025
				</p>

				{/* States List */}
				<section className="mt-10">
					<h3 className="text-2xl font-semibold mb-3 text-blue-800">
						States of India
					</h3>
					<div className="grid grid-cols-2 gap-x-10 gap-y-1 text-gray-700">
						{[
							"Andhra Pradesh",
							"Arunachal Pradesh",
							"Assam",
							"Bihar",
							"Karnataka",
							"Kerala",
							"Chhattisgarh",
							"Goa",
							"Gujarat",
							"Haryana",
							"Himachal Pradesh",
							"Jharkhand",
							"West Bengal",
							"Madhya Pradesh",
							"Maharashtra",
							"Manipur",
							"Meghalaya",
							"Mizoram",
							"Nagaland",
							"Orissa",
							"Punjab",
							"Rajasthan",
							"Sikkim",
							"Tamil Nadu",
							"Tripura",
							"Uttarakhand (Uttaranchal)",
							"Uttar Pradesh",
						].map((state, index) => (
							<span
								key={index}
								className="hover:text-blue-600 cursor-pointer"
							>
								{state}
							</span>
						))}
					</div>
				</section>

				{/* Union Territories List */}
				<section className="mt-10">
					<h3 className="text-2xl font-semibold mb-3 text-blue-800">
						Union Territories of India
					</h3>
					<div className="grid grid-cols-2 gap-x-10 gap-y-1 text-gray-700">
						{[
							"Andaman and Nicobar",
							"Pondicherry",
							"Dadra and Nagar Haveli and Daman and Diu",
							"Jammu and Kashmir",
							"Delhi",
							"Chandigarh",
							"Lakshadweep",
							"Ladakh",
						].map((ut, index) => (
							<span
								key={index}
								className="hover:text-blue-600 cursor-pointer"
							>
								{ut}
							</span>
						))}
					</div>
				</section>

				{/* General Maps */}
				<section className="mt-10 mb-10">
					<h3 className="text-2xl font-semibold mb-3 text-blue-800">
						India General Maps
					</h3>
					<div className="grid grid-cols-2 gap-x-10 gap-y-1 text-gray-700">
						{[
							"India Political Map",
							"India Road Map",
							"India River Map",
							"India Vegetation Map",
							"India Nuclear Plant Map",
							"Poverty Map of India",
							"Political Parties in States of India",
							"Top Cities by Rape Incidence in 2011",
							"India Physical Map",
							"India Blank Map",
							"India Tourist Map",
							"India Seismic zoning",
							"India Major Sea Routes Map",
							"India Large Color Map",
							"India Power Grid Map",
							"Top States by Rape Incidence in 2011",
							"India Outline Map",
							"Indian Railway Map",
							"Indian Cuisine Map",
							"Thermal Power Plant Map",
							"India Large Map",
							"India Globe",
							"World Heritage Sites in India",
							"Indira Gandhi Canal",
						].map((item, index) => (
							<span
								key={index}
								className="hover:text-blue-600 cursor-pointer"
							>
								{item}
							</span>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default IndiaPhysicalMap;
