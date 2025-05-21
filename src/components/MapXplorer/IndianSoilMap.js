import React from "react";
import { useNavigate } from "react-router-dom";
import soilMapImage from "../../assets/maps/indian-soil-map.jpg"; // replace with your soil map image
import AdditionalSidebar from "../AdditionalSideBar"; // your sidebar component

const IndiaSoilMap = () => {
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
						Soil Map of India
					</h1>
					<h2 className="text-xl text-blue-700 mt-1">
						भारत का मृदा मानचित्र
					</h2>
				</header>

				{/* Subtext */}
				<p className="mb-4 text-lg font-semibold text-blue-700">
					Click any Soil Type on the Map to Explore Further
				</p>

				{/* Image */}
				<img
					src={soilMapImage}
					alt="Soil Map of India"
					className="w-full h-auto rounded-xl shadow-md mb-6"
				/>

				{/* Separator */}
				<div className="flex items-center my-6">
					<hr className="flex-grow border-t-2 border-gray-300" />
					<span className="mx-3 text-gray-500 font-medium">or</span>
					<hr className="flex-grow border-t-2 border-gray-300" />
				</div>

				{/* Custom Map Link */}
				<div
					className="flex items-center cursor-pointer text-blue-600 hover:underline mb-8"
					onClick={() => navigate("/custom-soil-map")}
				>
					<span>Click here for Customized Soil Maps</span>
					<svg
						className="ml-2 w-5 h-5"
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

				{/* Content */}
				<section className="space-y-4">
					<p>
						India is home to a diverse range of soil types that are
						crucial for agriculture and ecosystem development. These
						soils vary based on factors such as climate, vegetation,
						and topography. Some of the major types of soil found in
						India include:
					</p>

					<h3 className="text-xl font-semibold mt-4">
						Major Types of Soils in India
					</h3>

					<div className="space-y-4">
						<p>
							<strong>1. Laterite Soil:</strong> Found in regions
							with heavy rainfall, such as coastal areas, laterite
							soil is rich in iron and often acidic. It supports
							crops like rice, sugarcane, and tea.
						</p>
						<p>
							<strong>2. Mountain Soil:</strong> Found in the
							Himalayan region and other mountainous areas, this
							soil is rich in organic matter but lacks essential
							minerals. It is ideal for crops like maize and
							temperate fruits.
						</p>
						<p>
							<strong>3. Black Soil:</strong> Rich in calcium and
							magnesium, black soil is ideal for cotton
							cultivation. It is primarily found in states like
							Gujarat, Maharashtra, and Madhya Pradesh.
						</p>
						<p>
							<strong>4. Red Soil:</strong> Known for its high
							iron content, red soil is found in Tamil Nadu,
							Madhya Pradesh, and other parts of peninsular India.
							It is suitable for crops like pulses, groundnut, and
							rice.
						</p>
						<p>
							<strong>5. Alluvial Soil:</strong> The most fertile
							soil in India, alluvial soil is found in the
							northern plains and deltas. It is ideal for crops
							like wheat, rice, and maize.
						</p>
						<p>
							<strong>6. Desert Soil:</strong> Found in arid
							regions like Rajasthan, desert soil is sandy and
							lacks moisture. However, it becomes fertile when
							irrigated.
						</p>
						<p>
							<strong>7. Saline and Alkaline Soil:</strong> Found
							in regions with high evaporation rates, this soil
							has high salt content, which affects its fertility.
						</p>
						<p>
							<strong>8. Peat Soil:</strong> Found in marshy and
							humid areas, peat soil is rich in organic content
							and is typically found in coastal regions.
						</p>
					</div>
				</section>

				{/* Last Updated */}
				<p className="text-sm text-gray-500 mt-8">
					Last Updated on: April 28, 2022
				</p>

				{/* Related Links */}
				<h2 className="text-2xl font-semibold mt-10 mb-6">
					Related Links
				</h2>

				<div className="columns-2 gap-6">
					{[
						"Soil Types in India",
						"Soil Fertility and Agriculture",
						"Soil Conservation Practices",
						"Soil Erosion and its Effects",
						"Soil Testing in India",
						"Soil Map of India: Interactive View",
						"Soil and Climate Interaction",
						"Indian Agricultural Practices",
						"Soil Amendments in India",
						"Soil Conservation Technologies",
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

export default IndiaSoilMap;
