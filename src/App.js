import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import MoreInfoPage from "./components/MoreInfoMapPage";
import StatesPage from "./page/StatePages";
import MapofIndiaPage from "./components/MapXplorer/MapofIndiaPage";
import Utility from "./page/UtilityMorePage";
import AndhraPradesh from "./components/States/AndhraPradesh";
import ArunachalPradesh from "./components/States/ArunachalPradesh";
import AndamanAndNicobar from "./components/States/AndamanAndNicobar";
import Assam from "./components/States/Assam";
import Bihar from "./components/States/Bihar";
import Chhattisgarh from "./components/States/Chattisgarh";
import ChandigarhComponent from "./components/States/Chandigarh";
import Dadranagarhaveli from "./components/States/DadraNagarHaveli";
import DamanDiuComponent from "./components/States/DamanDiu";
import DelhiComponent from "./components/States/Delhi";
import GoaComponent from "./components/States/Goa";
import GujaratComponent from "./components/States/Gujarat";
import Haryana from "./components/States/Haryana";
import HimachalPradesh from "./components/States/HimachalPradesh";
import Jharkhand from "./components/States/Jharkhand";
import Karnataka from "./components/States/Karanatak";
import Kerala from "./components/States/kerala";
import Lakshadweep from "./components/States/Lakshdweep";
import MadhyaPradesh from "./components/States/MadhyaPradesh";
import Maharashtra from "./components/States/Maharashtra";
import Manipur from "./components/States/Manipur";
import Meghalaya from "./components/States/Meghalaya";
import Mizoram from "./components/States/Mizoram";
import Nagaland from "./components/States/Nagaland";
import Odisha from "./components/States/Odisha";
import PuducherryPage from "./components/States/Puducherry";
import Punjab from "./components/States/Punjab";
import Rajasthan from "./components/States/Rajasthan";
import Sikkim from "./components/States/Sikkim";
import TamilNadu from "./components/States/TamilNadu";
import Telangana from "./components/States/Telangana";
import Tripura from "./components/States/Tripura";
import UttarPradesh from "./components/States/UttarPradesh";
import Uttarakhand from "./components/States/Uttarakhand";
import WestBengal from "./components/States/WestBengal";
import Ladakh from "./components/States/Ladakh";
import JammuKashmir from "./components/States/JammuKashmir";

// ⚡ These were wrongly placed inside the function. Move them here:
import Interactive from "./components/MapXplorer/InteractivePage";
import IndiaPoliticalMap from "./components/MapXplorer/IndianPoliticalMap";
import IndiaPhysicalMap from "./components/MapXplorer/PhysicalMap";
import IndiaOutlineMap from "./components/MapXplorer/OutlineMap";
import IndiaRailwayNetworkMap from "./components/MapXplorer/IndianRailway";
import IndiaRoadNetworkMap from "./components/MapXplorer/IndianRoadMap";
import IndiaRiverSystemMap from "./components/MapXplorer/IndianRiver";
import IndiaClimaticRegionsMap from "./components/MapXplorer/IndianClimate";
import IndiaTopographicMap from "./components/MapXplorer/IndianTopographic";
import IndiaSoilMap from "./components/MapXplorer/IndianSoilMap";
import ComingSoon from "./components/ComingSoon";
import SearchPage from "./page/SearchPage";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />

				{/* Fixing Map of India Route */}
				<Route path="/mapxplorer" element={<MapofIndiaPage />} />

				<Route path="/physical-map" element={<HomePage />} />
				<Route path="/outline-map" element={<IndiaOutlineMap />} />
				<Route path="/india-geography" element={<ComingSoon />} />
				<Route path="/history" element={<ComingSoon />} />
				<Route path="/census-maps" element={<ComingSoon />} />
				<Route path="/business-economy" element={<ComingSoon />} />
				<Route path="/india-culture" element={<ComingSoon />} />
				<Route path="/road-map" element={<IndiaRoadNetworkMap />} />
				<Route
					path="/rail-network"
					element={<IndiaRailwayNetworkMap />}
				/>
				<Route path="/air-network" element={<ComingSoon />} />
				<Route path="/ports-waterways" element={<ComingSoon />} />
				<Route path="/hotels" element={<ComingSoon />} />
				<Route path="/temples" element={<ComingSoon />} />
				<Route path="/hill-stations" element={<ComingSoon />} />
				<Route path="/top-cities" element={<ComingSoon />} />
				<Route path="/bangalore" element={<ComingSoon />} />
				<Route path="/mumbai" element={<ComingSoon />} />
				<Route path="/chennai" element={<ComingSoon />} />
				<Route path="/cities" element={<ComingSoon />} />
				<Route path="/transport-network" element={<ComingSoon />} />
				<Route path="/whats-new" element={<ComingSoon />} />
				<Route path="/my-india" element={<ComingSoon />} />
				<Route path="/our-channel" element={<ComingSoon />} />
				<Route path="/national-highways" element={<ComingSoon />} />
				<Route
					path="/driving-direction-maps"
					element={<ComingSoon />}
				/>
				<Route path="/intra-city-maps" element={<ComingSoon />} />
				<Route path="/driving-map" element={<ComingSoon />} />
				<Route path="/world-map" element={<ComingSoon />} />
				<Route path="/product-services" element={<ComingSoon />} />
				<Route path="/contact-us" element={<ComingSoon />} />
				<Route path="/maps-store" element={<ComingSoon />} />
				<Route path="custom-mapping" element={<ComingSoon />} />
				<Route path="location-solutions" element={<ComingSoon />} />
				<Route path="/current-events" element={<ComingSoon />} />
				<Route path="/india-automobiles" element={<ComingSoon />} />
				<Route path="/live-cricket-score" element={<ComingSoon />} />
				<Route path="/india-news" element={<ComingSoon />} />
				<Route path="/karten-goa" element={<ComingSoon />} />
				<Route path="/landkarten-kerala" element={<ComingSoon />} />
				<Route path="/landkarten-rajasthan" element={<ComingSoon />} />
				<Route path="/indien-karten" element={<ComingSoon />} />

				{/* Fixing Maps of India Route */}
				<Route path="/maps" element={<MapofIndiaPage />} />

				<Route path="/india-maps-and-views" element={<ComingSoon />} />
				<Route path="/transport-network" element={<ComingSoon />} />
				<Route path="/india-travel" element={<ComingSoon />} />

				<Route
					path="/moreinfopage"
					element={
						<MoreInfoPage title="MapXplorer - More Information" />
					}
				/>
				<Route path="/states" element={<StatesPage />} />
				<Route path="/utilities" element={<Utility />} />
				<Route path="/search" element={<SearchPage />} />

				<Route
					path="/states/andhra-pradesh"
					element={<AndhraPradesh />}
				/>
				<Route
					path="/states/arunachal-pradesh"
					element={<ArunachalPradesh />}
				/>
				<Route
					path="/states/andaman-nicobar"
					element={<AndamanAndNicobar />}
				/>
				<Route path="/states/assam" element={<Assam />} />
				<Route path="/states/bihar" element={<Bihar />} />
				<Route path="/states/chhattisgarh" element={<Chhattisgarh />} />
				<Route
					path="/states/chandigarh"
					element={<ChandigarhComponent />}
				/>
				<Route
					path="/states/dadra-nagar-haveli"
					element={<Dadranagarhaveli />}
				/>
				<Route
					path="/states/daman-diu"
					element={<DamanDiuComponent />}
				/>
				<Route path="/states/delhi" element={<DelhiComponent />} />
				<Route path="/states/goa" element={<GoaComponent />} />
				<Route path="/states/gujarat" element={<GujaratComponent />} />
				<Route path="/states/haryana" element={<Haryana />} />
				<Route
					path="/states/himachal-pradesh"
					element={<HimachalPradesh />}
				/>
				<Route path="/states/jharkhand" element={<Jharkhand />} />
				<Route path="/states/karnataka" element={<Karnataka />} />
				<Route path="/states/kerala" element={<Kerala />} />
				<Route path="/states/lakshadweep" element={<Lakshadweep />} />
				<Route
					path="/states/madhya-pradesh"
					element={<MadhyaPradesh />}
				/>
				<Route path="/states/maharashtra" element={<Maharashtra />} />
				<Route path="/states/manipur" element={<Manipur />} />
				<Route path="/states/meghalaya" element={<Meghalaya />} />
				<Route path="/states/mizoram" element={<Mizoram />} />
				<Route path="/states/nagaland" element={<Nagaland />} />
				<Route path="/states/odisha" element={<Odisha />} />
				<Route path="/states/puducherry" element={<PuducherryPage />} />
				<Route path="/states/ladakh" element={<Ladakh />} />
				<Route path="/maps/india" element={<Interactive />} />
				<Route path="/states/punjab" element={<Punjab />} />
				<Route path="/states/rajasthan" element={<Rajasthan />} />
				<Route path="/states/sikkim" element={<Sikkim />} />
				<Route path="/states/tamil-nadu" element={<TamilNadu />} />
				<Route path="/states/telangana" element={<Telangana />} />
				<Route path="/states/tripura" element={<Tripura />} />
				<Route
					path="/states/uttar-pradesh"
					element={<UttarPradesh />}
				/>
				<Route path="/states/uttarakhand" element={<Uttarakhand />} />
				<Route path="/states/west-bengal" element={<WestBengal />} />
				<Route
					path="/states/jammu-kashmir"
					element={<JammuKashmir />}
				/>
				<Route path="/states/ladakh" element={<Ladakh />} />
				<Route
					path="/states/andaman-and-nicobar"
					element={<AndamanAndNicobar />}
				/>

				{/* Add other state routes here */}
				<Route path="/maps/political" element={<IndiaPoliticalMap />} />
				<Route path="/maps/physical" element={<IndiaPhysicalMap />} />
				<Route path="/maps/outline" element={<IndiaOutlineMap />} />
				<Route
					path="/maps/railway"
					element={<IndiaRailwayNetworkMap />}
				/>
				<Route path="/maps/road" element={<IndiaRoadNetworkMap />} />
				<Route path="/maps/river" element={<IndiaRiverSystemMap />} />
				<Route
					path="/maps/climate"
					element={<IndiaClimaticRegionsMap />}
				/>
				<Route
					path="/maps/topographic"
					element={<IndiaTopographicMap />}
				/>
				<Route path="/maps/soil" element={<IndiaSoilMap />} />

				{/* Add more map routes here  for ComingSoon*/}
				<Route path="/maps/my-india" element={<ComingSoon />} />
				<Route path="/maps/states-capitals" element={<ComingSoon />} />
				<Route path="/maps/districts" element={<ComingSoon />} />
				<Route path="/maps/rivers" element={<ComingSoon />} />
				<Route path="/maps/satellite" element={<ComingSoon />} />
				<Route path="/maps/zones" element={<ComingSoon />} />
				<Route path="/maps/tier-cities" element={<ComingSoon />} />
				<Route path="/maps/cm-governors" element={<ComingSoon />} />
				<Route
					path="/maps/per-capita-income"
					element={<ComingSoon />}
				/>
				<Route path="/maps/temperature" element={<ComingSoon />} />
				<Route path="/maps/seismic-zones" element={<ComingSoon />} />
				<Route path="/maps/mountain-ranges" element={<ComingSoon />} />
				<Route path="/maps/vegetation" element={<ComingSoon />} />
				<Route path="/maps/lakes" element={<ComingSoon />} />
				<Route path="/maps/telecom" element={<ComingSoon />} />
				<Route path="/maps/hydro" element={<ComingSoon />} />
				<Route path="/maps/thermal" element={<ComingSoon />} />
				<Route path="/maps/nuclear" element={<ComingSoon />} />
				<Route path="/maps/pre-partition" element={<ComingSoon />} />
				<Route path="/maps/rainfall" element={<ComingSoon />} />
				<Route path="/maps/water-resources" element={<ComingSoon />} />
				<Route path="/maps/ruling-parties" element={<ComingSoon />} />
				<Route path="/maps/languages" element={<ComingSoon />} />
				<Route path="/maps/google" element={<ComingSoon />} />
				<Route path="/maps/universities" element={<ComingSoon />} />
				<Route path="/maps/india-road" element={<ComingSoon />} />
				<Route
					path="/maps/national-highways"
					element={<ComingSoon />}
				/>
				<Route path="/maps/railway-map" element={<ComingSoon />} />
				<Route
					path="/maps/railway-timetable"
					element={<ComingSoon />}
				/>
				<Route path="/maps/railway-zones" element={<ComingSoon />} />
				<Route path="/maps/konkan-railway" element={<ComingSoon />} />
				<Route path="/maps/delhi-metro" element={<ComingSoon />} />
				<Route path="/maps/airports" element={<ComingSoon />} />
				<Route path="/maps/air-network" element={<ComingSoon />} />
				<Route path="/maps/ports" element={<ComingSoon />} />
				<Route path="/maps/india-flag" element={<ComingSoon />} />
				<Route path="/maps/independence-day" element={<ComingSoon />} />
				<Route
					path="/maps/india-independence-2019"
					element={<ComingSoon />}
				/>
				<Route path="/maps/geography" element={<ComingSoon />} />
				<Route path="/maps/history" element={<ComingSoon />} />
				<Route path="/maps/census" element={<ComingSoon />} />
				<Route path="/maps/economy" element={<ComingSoon />} />
				<Route path="/maps/culture" element={<ComingSoon />} />
				<Route
					path="/maps/why-india-matters"
					element={<ComingSoon />}
				/>
				<Route path="/maps/chief-ministers" element={<ComingSoon />} />
				<Route path="/maps/tourist-places" element={<ComingSoon />} />
				<Route path="/maps/religious-places" element={<ComingSoon />} />
				<Route path="/maps/taj-mahal" element={<ComingSoon />} />
				<Route path="/maps/taj-mahal-facts" element={<ComingSoon />} />
				<Route path="/maps/char-dham" element={<ComingSoon />} />
				<Route path="/maps/beaches" element={<ComingSoon />} />
				<Route path="/maps/hill-stations" element={<ComingSoon />} />
				<Route path="/maps/hotels" element={<ComingSoon />} />
				<Route path="/maps/jyotirlinga" element={<ComingSoon />} />
			</Routes>
		</Router>
	);
}

export default App;
