import React from "react";
import { useNavigate } from "react-router-dom";
import riverMapImage from "../../assets/maps/indian-river-map.jpg"; // River system map image
import AdditionalSidebar from "../AdditionalSideBar"; // Sidebar component

const IndiaRiverSystemMap = () => {
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
						India River System Map
					</h1>
					<h2 className="text-xl text-blue-700 mt-1">
						भारत की नदी प्रणाली
					</h2>
				</header>

				{/* CTA */}
				<p className="text-lg font-medium text-blue-600 mb-3">
					Explore the Major Rivers and their Tributaries
				</p>

				{/* Map Image */}
				<div className="rounded-xl overflow-hidden shadow-lg mb-8">
					<img
						src={riverMapImage}
						alt="Indian River System Map"
						className="w-full h-auto transition-transform hover:scale-[1.02]"
					/>
				</div>

				{/* Customized Map Link */}
				<div
					className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer mb-10 transition"
					onClick={() => navigate("/custom-map")}
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
						The term <strong>river system</strong> refers to a river
						along with all its tributaries. Based on their source,
						Indian rivers are classified into{" "}
						<strong>Himalayan Rivers</strong> and{" "}
						<strong>Peninsular Rivers</strong>.
					</p>

					{/* Himalayan Rivers */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							The Himalayan Rivers
						</h3>
						<p>
							These rivers originate from glaciers in the
							Himalayas and flow across the Northern Plains.
						</p>
						<ul className="list-disc list-inside space-y-2 mt-4">
							<li>
								<strong>Indus River System:</strong> Originates
								near Mansarovar Lake, Tibet. Tributaries:
								Sutlej, Ravi, Beas, Chenab, Jhelum.
							</li>
							<li>
								<strong>Ganga River System:</strong> Originates
								from Gangotri Glacier. Tributaries: Yamuna,
								Gomti, Ghaghara, Gandak, Kosi.
							</li>
							<li>
								<strong>Yamuna River System:</strong> Originates
								from Yamunotri Glacier, joins Ganga at
								Allahabad.
							</li>
							<li>
								<strong>Brahmaputra River System:</strong>{" "}
								Originates from Angsi Glacier, Tibet; enters
								India through Arunachal Pradesh.
							</li>
						</ul>
					</div>

					{/* Peninsular Rivers */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							The Peninsular Rivers
						</h3>
						<p>
							Peninsular rivers are mainly rain-fed and originate
							from the Western Ghats.
						</p>
						<ul className="list-disc list-inside space-y-2 mt-4">
							<li>
								<strong>Mahanadi:</strong> Sihava hills,
								Chhattisgarh → Bay of Bengal.
							</li>
							<li>
								<strong>Godavari:</strong> Triambakeshwar,
								Maharashtra; known as Dakshina Ganga.
							</li>
							<li>
								<strong>Krishna:</strong> Mahabaleshwar,
								Maharashtra; tributaries include Tungabhadra,
								Bhima.
							</li>
							<li>
								<strong>Kaveri (Cauvery):</strong> Brahmagiri
								Hill, Karnataka; considered sacred.
							</li>
							<li>
								<strong>Narmada & Tapi:</strong> Unique
								west-flowing rivers into the Arabian Sea.
							</li>
						</ul>
					</div>

					{/* Key Facts */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-3">
							Key River Facts
						</h3>
						<p>
							Rivers have shaped India's culture, economy, and
							civilizations, with many ancient cities flourishing
							on riverbanks.
						</p>
					</div>

					{/* Important Rivers Table */}
					<div className="overflow-x-auto rounded-lg shadow mt-6">
						<table className="min-w-full bg-white text-sm text-gray-700">
							<thead className="bg-gray-200 text-gray-800 uppercase text-xs">
								<tr>
									<th className="py-3 px-6 text-left">
										Name
									</th>
									<th className="py-3 px-6 text-left">
										Length (km)
									</th>
									<th className="py-3 px-6 text-left">
										Origin
									</th>
									<th className="py-3 px-6 text-left">
										Empties into
									</th>
								</tr>
							</thead>
							<tbody>
								{[
									{
										name: "Indus",
										length: "3180 (1114 in India)",
										origin: "Tibet - Mount Kailash",
										end: "Arabian Sea",
									},
									{
										name: "Ganga",
										length: "2525",
										origin: "Gangotri Glacier, Uttarakhand",
										end: "Bay of Bengal",
									},
									{
										name: "Yamuna",
										length: "1376",
										origin: "Yamunotri, Uttarakhand",
										end: "Bay of Bengal",
									},
									{
										name: "Brahmaputra",
										length: "916 (in India)",
										origin: "Angsi Glacier, Tibet",
										end: "Bay of Bengal",
									},
									{
										name: "Godavari",
										length: "1465",
										origin: "Triambakeshwar, Maharashtra",
										end: "Bay of Bengal",
									},
									{
										name: "Krishna",
										length: "1400",
										origin: "Mahabaleshwar, Maharashtra",
										end: "Bay of Bengal",
									},
									{
										name: "Kaveri",
										length: "765",
										origin: "Brahmagiri Hill, Karnataka",
										end: "Bay of Bengal",
									},
									{
										name: "Narmada",
										length: "1312",
										origin: "Amarkantak, Madhya Pradesh",
										end: "Arabian Sea",
									},
									{
										name: "Tapti",
										length: "724",
										origin: "Satpura ranges, Madhya Pradesh",
										end: "Arabian Sea",
									},
								].map((river, idx) => (
									<tr key={idx} className="border-b">
										<td className="py-3 px-6">
											{river.name}
										</td>
										<td className="py-3 px-6">
											{river.length}
										</td>
										<td className="py-3 px-6">
											{river.origin}
										</td>
										<td className="py-3 px-6">
											{river.end}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* Footer Info */}
				<footer className="mt-10 text-sm text-gray-500">
					Last Updated on: January 10, 2025
				</footer>
			</main>
		</div>
	);
};

export default IndiaRiverSystemMap;
