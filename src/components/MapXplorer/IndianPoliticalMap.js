import React from "react";
import mapImage from "../../assets/India.jpg";
import AdditionalSidebar from "../AdditionalSideBar";

const IndiaPoliticalMap = () => {
	return (
		<div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
			{/* Sidebar */}
			<aside className="md:w-1/4 w-full bg-white shadow-lg p-4 sticky top-0 z-20">
				<AdditionalSidebar />
			</aside>

			{/* Main Content */}
			<main className="md:w-3/4 w-full p-6 md:p-10 text-gray-800 max-w-7xl mx-auto">
				<header className="mb-8">
					<h1 className="text-4xl font-extrabold text-indigo-700">
						India Political Map
					</h1>
					<p className="text-lg text-gray-600">
						भारत का राजनीतिक नक्शा
					</p>
				</header>

				<section className="mb-6">
					<img
						src={mapImage}
						alt="India Political Map"
						className="w-full rounded-lg border shadow-md"
					/>
					<p className="text-sm text-red-600 italic mt-2">
						Disclaimer: All efforts have been made to make this
						image accurate. However, Mapping Digiworld Pvt Ltd and
						its directors do not own any responsibility for the
						correctness or authenticity of the same.
					</p>
				</section>

				<Card>
					<p>
						India is officially known as the Republic of India. It
						comprises of 28 states and 8 union territories. India is
						the world’s largest democracy and second-most populated
						country. Its 7,517 km coastline includes 5,423 km from
						the mainland and 2,094 km from islands.
					</p>
				</Card>

				<Section title="Regional Zones of India">
					<ul className="list-disc ml-6 space-y-2 text-gray-700">
						<li>
							<strong>East India:</strong> Bihar, Jharkhand,
							Odisha, West Bengal, Andaman and Nicobar Islands.
						</li>
						<li>
							<strong>West India:</strong> Gujarat, Goa,
							Maharashtra, Dadra & Nagar Haveli, Daman & Diu.
						</li>
						<li>
							<strong>North India:</strong> Himachal Pradesh,
							Uttar Pradesh, Rajasthan, Uttarakhand, Punjab,
							Haryana, Delhi, Chandigarh, Ladakh, Jammu and
							Kashmir.
						</li>
						<li>
							<strong>South India:</strong> Tamil Nadu, Karnataka,
							Kerala, Andhra Pradesh, Telangana, Lakshadweep,
							Puducherry.
						</li>
						<li>
							<strong>Northeast India:</strong> Arunachal Pradesh,
							Assam, Meghalaya, Tripura, Mizoram, Manipur,
							Nagaland, Sikkim.
						</li>
						<li>
							<strong>Central India:</strong> Madhya Pradesh and
							Chhattisgarh.
						</li>
					</ul>
				</Section>

				<Section title="Maps in Other Regional Languages">
					<ul className="list-disc ml-6 space-y-1 text-indigo-600 hover:text-indigo-800">
						<li>View India Maps in Hindi</li>
						<li>View India Maps in Malayalam</li>
						<li>View India Political Map Enlarged</li>
						<li>View India Political Map in A4 size</li>
						<li>View Political Map of the World</li>
					</ul>
				</Section>

				<Section title="States of India">
					<PillGrid
						items={[
							"Andhra Pradesh",
							"Arunachal Pradesh",
							"Asom (Assam)",
							"Bihar",
							"Karnataka",
							"Kerala",
							"Chhattisgarh",
							"Uttar Pradesh",
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
							"Telangana",
							"Tripura",
							"Uttarakhand (Uttaranchal)",
						]}
					/>
				</Section>

				<Section title="Union Territories of India">
					<PillGrid
						items={[
							"Andaman and Nicobar",
							"Pondicherry",
							"Jammu and Kashmir",
							"Dadra and Nagar Haveli",
							"Daman and Diu",
							"Ladakh",
							"Delhi",
							"Chandigarh",
							"Lakshadweep",
						]}
					/>
				</Section>

				<Section title="India General Maps">
					<PillGrid
						items={[
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
						]}
					/>
				</Section>

				<footer className="text-sm text-gray-500 mt-10">
					Last Updated on: January 09, 2025
				</footer>
			</main>
		</div>
	);
};

const Section = ({ title, children }) => (
	<section className="mb-10">
		<h2 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-400 pl-3">
			{title}
		</h2>
		{children}
	</section>
);

const Card = ({ children }) => (
	<div className="bg-white p-6 rounded-lg shadow-md mb-8">{children}</div>
);

const PillGrid = ({ items }) => (
	<div className="flex flex-wrap gap-3">
		{items.map((item, i) => (
			<span
				key={i}
				className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium transition duration-200 cursor-pointer"
			>
				{item}
			</span>
		))}
	</div>
);

export default IndiaPoliticalMap;
