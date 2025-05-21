import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
	const location = useLocation();

	useEffect(() => {
		// console.log("Search query:", location.search);
		const script = document.createElement("script");
		script.src = "https://cse.google.com/cse.js?cx=c1c5185bc55af4ad6"; // Replace with your actual cx
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [location.search]);
	return (
		<div>
			{/* Sidebar and Main Content */}
			<div className="container mx-auto px-6 py-4 flex flex-col md:flex-row gap-6">
				<Sidebar />
				<div>
					<h2 className="text-2xl font-bold mb-4">Search Results</h2>
					{/* <div className="gcse-search"></div> */}
					<div className="gcse-searchresults-only"></div>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
