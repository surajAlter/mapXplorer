import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import PunjabMap from "../../assets/State/Punjab/PunjabDistrict.svg";

const districts = [
	"Amritsar",
	"Ludhiana",
	"Jalandhar",
	"Patiala",
	"Bathinda",
	"Mohali",
	"Firozpur",
	"Hoshiarpur",
	"Kapurthala",
	"Moga",
	"Pathankot",
	"Rupnagar",
	"Sangrur",
	"Fazilka",
	"Barnala",
	"Faridkot",
];

const districtInfo = {
	Amritsar: `Spiritual capital housing the Golden Temple...`,
	Ludhiana: `Industrial powerhouse known as 'Manchester of India'...`,
	Jalandhar: `Sports equipment manufacturing hub...`,
	Patiala: `City of royalty with Qila Mubarak complex...`,
	Bathinda: `Energy hub with thermal plants and oil refinery...`,
	Mohali: `IT and technology hub adjacent to Chandigarh...`,
	Firozpur: `Border district with important military presence...`,
	Hoshiarpur: `Agricultural district famous for wood craftsmanship...`,
	Kapurthala: `'Paris of Punjab' with French-inspired architecture...`,
	Moga: `Agricultural heartland with major dairy cooperatives...`,
	Pathankot: `Gateway to Himachal Pradesh and Jammu...`,
	Rupnagar: `Ancient site of Indus Valley civilization...`,
	Sangrur: `Agricultural research hub...`,
	Fazilka: `Border town with unique 'Gabria' festival...`,
	Barnala: `Textile manufacturing center...`,
	Faridkot: `Historical principality with architectural landmarks...`,
};

const amritsarTopics = [
	"History (Ancient to Modern)",
	"Guru Ram Das and the City’s Foundation",
	"Golden Temple – In-depth chapters",
	"Sikhism’s Evolution in Amritsar",
	"Jallianwala Bagh Massacre – A Deep Dive",
	"Partition and 1947 Impact",
	"Cultural Life of Amritsar",
	"Fairs and Festivals",
	"Food and Culinary Culture",
	"Architecture and Heritage Sites",
	"Wagah Border – Symbolism and Patriotism",
	"Amritsar’s Economy and Trade",
	"Educational Institutions",
	"Tourism Infrastructure",
	"Transport Systems",
	"Modern-Day Challenges and Growth",
	"Famous Personalities from Amritsar",
	"Folklore, Literature, and Art",
	"Future Vision for Amritsar",
];

const amritsarContent = {
	"History (Ancient to Modern)": `
    Amritsar's history spans over 2,000 years, with archaeological evidence suggesting settlements since the Indus Valley Civilization. The area was known as Ramdaspur before acquiring its current name derived from the sacred Amrit Sarovar (Pool of Nectar). During medieval times, it served as an important trading post on the Grand Trunk Road. The city witnessed multiple invasions including by Ahmad Shah Durrani in the 18th century. Under Maharaja Ranjit Singh's rule (1799-1839), Amritsar became the spiritual and cultural capital of the Sikh Empire. British colonial era saw the city transform into a major commercial center, though it remained the heart of India's independence movement, particularly after the Jallianwala Bagh massacre.
  `,

	"Guru Ram Das and the City’s Foundation": `
    In 1577, Guru Ram Das acquired land for 700 rupees from Mughal Emperor Akbar to establish a new Sikh center. He designed the sarovar (sacred pool) which became the nucleus of the city. His successor Guru Arjan Dev expanded the project, completing the Harmandir Sahib (Golden Temple) in 1604. The Guru invited 52 traders from different professions to establish markets around the temple, creating the modern city layout. These markets still exist as Katras (guild neighborhoods). Guru Ram Das composed the "Laavan" marriage hymn here, making Amritsar the birthplace of Sikh wedding rituals. The city's planning incorporated sacred geometry with the temple at the center, surrounded by concentric circles of development.
  `,

	"Golden Temple – In-depth chapters": `
    The Golden Temple (Harmandir Sahib) is a marvel of spiritual architecture blending Hindu and Islamic styles. Its gold-plated dome was added by Maharaja Ranjit Singh in 1830. The temple operates the world's largest community kitchen (Langar), serving 100,000+ free meals daily. The scripture Guru Granth Sahib is ceremonially brought at dawn and returned at night. The complex includes the Akal Takht (supreme temporal seat of Sikhism) and the Sikh Museum. Unique features: 1) Four entrances symbolizing openness to all 2) Lower elevation than surroundings showing humility 3) 1,600 kg gold plating 4) Continuous recitation of Gurbani since 1604. The sarovar contains sacred fish believed to fulfill wishes.
  `,

	"Sikhism’s Evolution in Amritsar": `
    Amritsar became the crucible where Sikhism transformed from a spiritual movement to a distinct religion. The city hosted critical events: compilation of Adi Granth (1604), establishment of the Khalsa (1699), and Sikh resistance against Mughals. The Akal Takht became the center of Sikh political authority. During the 18th century, the city was the staging ground for the Dal Khalsa confederacy. The Singh Sabha Movement (1870s) revived Sikh identity here. Modern institutions like the Shiromani Gurdwara Parbandhak Committee (SGPC) maintain Amritsar's role as the administrative heart of global Sikhism. Over 30 historic gurdwaras dot the city including Gurdwara Baba Atal and Santokhsar Sahib.
  `,

	"Jallianwala Bagh Massacre – A Deep Dive": {
		introduction: `The Jallianwala Bagh Massacre, also known as the Amritsar Massacre, stands as one of the darkest and most shameful episodes in the history of British colonial rule in India. Occurring on April 13, 1919, this tragedy marked a brutal turning point in India’s struggle for independence. It not only revealed the violent underpinnings of British authority but also became a catalyst that radicalized the Indian national movement. The massacre shook the conscience of the world and triggered widespread outrage, uniting Indians across regions and religions in their demand for self-rule.`,
		historicalContext: `To understand the massacre, it is essential to examine the political and social climate of British India during the early 20th century. The First World War (1914–1918) had just concluded, and India, as part of the British Empire, had contributed both soldiers and resources. Over 1.3 million Indian soldiers served abroad, and thousands lost their lives. In return, Indians hoped for greater autonomy and political reforms. However, instead of rewarding Indian loyalty, the British colonial government imposed even more repressive laws.
One such repressive measure was the Rowlatt Act of 1919, officially known as the Anarchical and Revolutionary Crimes Act. This law authorized the government to arrest and detain individuals without trial, suppress the press, and curtail civil liberties. It was widely condemned by Indian leaders and the general public. Mahatma Gandhi launched a nationwide protest against the act, calling for Satyagraha—a peaceful civil disobedience movement. In Punjab, especially in Amritsar, the agitation grew intense. Local leaders like Dr. Saifuddin Kitchlew and Dr. Satyapal led mass protests against the Rowlatt Act.`,
		buildUp: `On April 10, 1919, the British authorities arrested Kitchlew and Satyapal and deported them without explanation. This action triggered large-scale protests in Amritsar. Demonstrations turned violent in some areas, and British officials responded with force. In response, Brigadier-General Reginald Edward Harry Dyer was dispatched to restore "order" in Amritsar. Dyer viewed the peaceful protestors not as civilians exercising their rights, but as threats to colonial authority.
 Amidst this tense atmosphere, a public meeting was scheduled for April 13, 1919, coinciding with Baisakhi, a major Punjabi festival. Thousands of people, many of whom were unaware of the government ban on public gatherings, gathered at Jallianwala Bagh, a public garden surrounded by walls with only a few narrow entrances. It was a peaceful congregation of over 15,000 people, including men, women, and children, who had assembled to protest the Rowlatt Act and express solidarity against colonial repression.`,
		theMassacre: `Without issuing any warning, General Dyer marched into Jallianwala Bagh with a contingent of about 90 soldiers, including Gurkha and Baluchi troops. He positioned his men at the main entrance and ordered them to open fire directly into the crowd. The troops fired continuously for about ten minutes, discharging 1,650 rounds of ammunition until they ran out of bullets. The narrow exits were blocked, and there was no way for people to escape. Panic and chaos ensued as people tried to flee. Many jumped into a well inside the garden to escape the bullets—nearly 120 bodies were later recovered from it.

Official British estimates reported 379 deaths and over 1,200 injured, but Indian nationalists and the Indian National Congress claimed the death toll was over 1,000, with more than 2,000 injured. The sheer brutality of the attack, carried out without warning or provocation, shocked the entire nation. Dyer later admitted he intended to produce a "moral effect" and punish the people of Amritsar to deter future protests.`,
		aftermath: `The massacre sent shockwaves across India and the world. The British government, instead of immediately condemning Dyer, at first supported his actions. However, the widespread criticism forced them to launch an official inquiry—the Hunter Commission. The commission, however, failed to deliver justice. Though it condemned Dyer’s actions as unjustified, it did not impose any punishment on him. Instead, Dyer was allowed to resign and return to England, where he was hailed as a hero by many in Britain. A fund was even raised to reward him, collecting over £26,000—an amount that revealed the colonial mindset still prevalent in British society.

In India, the response was one of national mourning and growing anger. Rabindranath Tagore, Nobel laureate and one of India’s most respected intellectuals, returned his knighthood in protest, stating that "the time has come when badges of honour make our shame glaring in the incongruous context of humiliation." The massacre radicalized many moderate leaders who had previously supported constitutional reforms. Jawaharlal Nehru and Mahatma Gandhi were among those profoundly affected by the massacre. Gandhi abandoned his belief in the possibility of cooperation with the British and instead focused on achieving complete independence or Purna Swaraj.

One of the most dramatic responses came from Udham Singh, a young man who witnessed the massacre as a child. Deeply scarred by the event, he vowed revenge. Over two decades later, on March 13, 1940, he assassinated Michael O'Dwyer, the former Lieutenant Governor of Punjab who had endorsed Dyer’s actions, in London’s Caxton Hall. Udham Singh was tried and hanged, but in India, he was hailed as a national hero.`,
		legacy: `The Jallianwala Bagh Massacre marked a decisive turning point in India’s freedom struggle. It exposed the inherent violence and racism of colonial rule and shattered any remaining illusions of fairness or justice under British governance. The incident unified Indians across caste, class, and religious lines in their collective demand for independence.

It also contributed significantly to the evolution of the Non-Cooperation Movement, led by Gandhi in the early 1920s. The event planted seeds of discontent that would later culminate in mass movements like the Civil Disobedience Movement and the Quit India Movement. Leaders across the ideological spectrum, from moderates to revolutionaries, drew inspiration from the martyrdom of those who died at Jallianwala Bagh.

In the post-independence era, the site of the massacre was converted into a national memorial. The bullet marks on the walls and the preserved Martyrs’ Well serve as stark reminders of the tragedy. The Jallianwala Bagh National Memorial, established in 1951, is visited by millions every year. It continues to educate generations about the price of freedom and the horrors of colonial oppression.`,
		continuingRelevance: `The Jallianwala Bagh Massacre remains a symbol of colonial injustice and the resilience of the Indian spirit. In recent years, calls for a formal apology from the British government have grown stronger. While British leaders have expressed “regret” and termed the event as a "shameful scar," a full formal apology has not yet been issued. This reluctance reflects the ongoing struggle to fully acknowledge and come to terms with the brutal legacy of empire.

In 2019, marking the centenary of the massacre, British Prime Minister Theresa May expressed "deep regret," and Prince Charles visited the site. Yet, critics argue that these symbolic gestures fall short of true accountability. For India, the memory of Jallianwala Bagh continues to be a powerful reminder of the sacrifices made for independence and the necessity of preserving democratic values and human rights.`,
		conclusion: `The Jallianwala Bagh Massacre was more than a horrific event; it was a watershed moment in Indian history. It exposed the brutal face of imperialism and galvanized a nation to demand its rightful freedom. The massacre turned ordinary citizens into freedom fighters, transformed moderate leaders into revolutionaries, and converted a garden into a memorial of resistance and sacrifice. As India continues to grow and evolve, the memory of Jallianwala Bagh reminds us of the cost of freedom and the importance of justice, dignity, and national unity.

`,
	},

	"Partition and 1947 Impact": `
    Amritsar became a border city during Partition, witnessing horrific violence as it lay on the route of refugee trains between India and Pakistan. Nearly 50% of its Muslim population migrated westward, while Hindu/Sikh refugees flooded in from Lahore and other western districts. The city's demographic changed overnight, with many refugees settling in colonies like Majitha Road. Historic ties with Lahore (just 50km away) were severed abruptly. The trauma inspired literary works like "Train to Pakistan" by Khushwant Singh. The city still hosts Partition memorials and annual remembrance events. Many families preserve pre-Partition documents and heirlooms as cultural memory.
  `,

	"Cultural Life of Amritsar": `
    Amritsar's culture blends Sikh religious traditions with Punjabi folk heritage. The city is famous for its kavishri (religious poetry recitals) and dhadhi jathas (ballad singers). Old neighborhoods maintain traditional crafts: 1) Phulkari embroidery 2) Punjabi jutti making 3) Handmade kirpans 4) Sarangi instrument crafting. The Amritsari katib (calligraphy style) is used for Sikh scriptures. Evening gatherings at Company Bagh feature storytelling and chess matches. The city has produced legendary musicians like Surinder Kaur and Kundan Lal Saigal. Distinct cultural markers include the Amritsari turban-tying style and elaborate nagar kirtan processions.
  `,

	"Fairs and Festivals": `
    Baisakhi (April 13-14) marks both the harvest festival and Khalsa founding day, featuring nagar kirtans and martial arts displays. Lohri (January) sees bonfires and gidda dances at Golden Temple. Guru Nanak Jayanti procession stretches 5km with decorated floats. The Ram Tirath Fair (November) commemorates the Ramayana connection at a 5,000-year-old site. Heritage Festival (December) showcases qawwalis at Gobindgarh Fort. Unique local celebrations include Basant Panchami kite-flying at Durgiana Temple and the Shaheedi Jor Mela honoring martyrs. Winter sees the world's largest ice carving competition near Wagah Border.
  `,

	"Food and Culinary Culture": `
    Amritsar's cuisine reflects its status as a historic trade hub: 1) Amritsari kulcha - wood-fired stuffed breads 2) Beera's fish - mustard-spiced river fish 3) Sohan halwa - dense saffron sweet 4) Lassi - thick yogurt drink in kulhads. The 130-year-old Kesar Da Dhaba still uses original recipes. Famous food streets include Lawrence Road and Town Hall area. Unique dishes: dhabe da keema (slow-cooked mutton), tahiri (vegetarian biryani), and amritsari papad warian (lentil crisps). The city has 200+ heritage eateries, many operating since pre-Partition times. Cooking techniques like tandoori and slow-cooking in brass vessels remain unchanged for centuries.
  `,

	"Architecture and Heritage Sites": `
    Beyond the Golden Temple, key landmarks include: 1) Gobindgarh Fort - 18th century fortress with light shows 2) Town Hall - British-era Gothic architecture 3) Khairuddin Mosque - where independence activists gathered 4) Durgiana Temple - Hindu shrine mirroring Golden Temple's design 5) Ram Bagh Gardens - summer palace of Maharaja Ranjit Singh. The Hall Bazaar area preserves colonial-era facades. Heritage walks cover katras (guild neighborhoods) with havelis featuring jharokhas and frescoes. The historic Sultanwind Gate marks the old city entrance. Unique architectural fusion appears in churches like the Cathedral of Holy Family blending Sikh and Christian motifs.
  `,

	"Wagah Border – Symbolism and Patriotism": `
    The daily retreat ceremony at Attari-Wagah border (30km from Amritsar) began in 1959. Soldiers from India's BSF and Pakistan's Rangers perform synchronized drills before lowering flags. The 30-minute spectacle features: 1) High-kick marches 2) Audience chants of "Vande Mataram" 3) Lighting of border gates 4) Handshake ritual. The 120-meter-wide no man's land is floodlit for night ceremonies. Special events occur on Independence Days (Aug 14-15) when civilians can cross briefly. The border complex includes a museum documenting Partition history. Nearby, the Kartarpur Corridor offers views into Pakistan's Sikh holy sites.
  `,

	"Amritsar’s Economy and Trade": `
    As Punjab's second-largest economy, Amritsar contributes $7 billion annually. Key sectors: 1) Handmade textiles (phulkari, durries) 2) Religious tourism (20 million visitors/year) 3) Agriculture (wheat, rice, kinnow) 4) Light manufacturing (textile machinery, auto parts). The city is India's largest exporter of religious artifacts. Traditional industries include gold jewelry (especially kara making) and wooden furniture. Modern growth comes from IT parks near the airport. Wholesale markets like Hall Bazaar and Katra Jaimal Singh date back to Mughal times. The upcoming Amritsar-Kolkata Industrial Corridor will boost cross-country trade.
  `,

	"Educational Institutions": `
    Guru Nanak Dev University (1969) ranks among India's top 50 universities, strong in Punjabi and Sikh studies. Other notable institutions: 1) Khalsa College (1892) - Gothic-style heritage campus 2) Government Medical College - pioneer in rural healthcare 3) Hindu College - established 1896 4) BBK DAV College - center for Punjabi literature. Specialized academies preserve traditional arts: 1) Gurmat Sangeet (Sikh music) 2) Gatka (martial arts) 3) Punjabi folk dance. The city has 15+ research centers studying Sikh history. Recent additions include AIIMS and IIM campuses under national education initiatives.
  `,

	"Tourism Infrastructure": `
    Amritsar receives more foreign tourists than the Taj Mahal, with 12,000+ hotel rooms across categories. The Golden Temple offers free accommodation (sarai) for 10,000 pilgrims nightly. Heritage hotels include Mrs. Bhandari's Guesthouse (1920s villa) and WelcomHotel (former British residency). Smart city projects have improved signage and WiFi coverage. Tourism circuits: 1) Spiritual (major gurdwaras) 2) Partition (Jallianwala, Partition Museum) 3) Heritage (forts, katras) 4) Culinary (food walks). The new Amritsar Interpretation Center provides VR experiences of Sikh history. Over 1,000 licensed guides operate in 15 languages.
  `,

	"Transport Systems": `
    Sri Guru Ram Dass Jee International Airport connects to 25+ global destinations including London and Dubai. The Amritsar Junction railway station (1862) is among India's busiest, with the new Sultanwind terminal easing congestion. Border crossings: 1) Wagah (road to Pakistan) 2) Attari (rail cargo). The city has Punjab's first BRTS corridor with electric buses. Ring road projects reduce traffic in the walled city. Future plans include a metro (2030) and high-speed rail to Delhi. Unique local transport includes cycle-rickshaws for narrow galis and electric tuk-tuks with GPS for tourists.
  `,

	"Modern-Day Challenges and Growth": `
    Urban challenges: 1) Declining groundwater (1.5m/year drop) 2) Air pollution from stubble burning 3) Congestion in 2.5 sq km walled city. Smart City Mission projects (₹2,000 crore allocated) focus on: 1) Solar-powered streetlights 2) Waste-to-energy plants 3) Heritage conservation 4) Intelligent traffic management. The Amritsar Ludhiana Industrial Corridor aims to create 500,000 jobs. Environmental initiatives include urban forests at Verka and rooftop solar mandates for large buildings. The city leads in pedestrianization efforts around heritage zones.
  `,

	"Famous Personalities from Amritsar": `
    Notable figures: 1) Bhagat Singh (revolutionary) - born in Banga village near Amritsar 2) Amrita Pritam - legendary poet who wrote about Partition 3) Dara Singh - wrestler-turned-actor 4) Lala Lajpat Rai - freedom fighter studied here 5) Master Tara Singh - Sikh leader 6) Prithvi Singh Azad - revolutionary 7) Bhisham Sahni - author of "Tamas" 8) Udham Singh - Jallianwala Bagh avenger. Contemporary names include chef Vikas Khanna and golfer Gaganjeet Bhullar. The city has produced 8 Punjab Chiefs Ministers and numerous army generals.
  `,

	"Folklore, Literature, and Art": `
    Amritsar is the cradle of Punjabi literature - birthplace of the first Punjabi novel ("Sundari" by Bhai Vir Singh). The city's printing presses preserved Gurmukhi script during colonial era. Folk traditions: 1) Heer-Ranjha tragic ballads 2) Jugni folk songs 3) Dhadi martial music 4) Giddha women's dance. Artisan communities create miniature paintings of Sikh history. The Partition Museum houses oral history recordings. Annual events: 1) Amritsar Lit Fest 2) Rangla Punjab folk festival 3) World Punjabi Conference. The city has 22 public libraries including the historic Khalsa College collection.
  `,

	"Future Vision for Amritsar": `
    Master Plan 2031 envisions: 1) Metro Phase 1 (27km) 2) Satellite townships 3) Green belt along Ravi River 4) Elevated road to Golden Temple. The Heritage City scheme will restore 500+ historic buildings. Proposed projects: 1) Guru Ram Das Medical City 2) Amritsar Knowledge City 3) International Convention Center. Environmental goals include 50% green cover and zero wastewater discharge into holy sarovars. The Amritsar-Martyr Memorial project will honor all Punjab's freedom fighters. Smart governance initiatives include blockchain-based land records and AI-powered tourist assistance.
  `,
};

const Punjab = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Amritsar"); // No district selected initially
	const [isAmritsarExpanded, setIsAmritsarExpanded] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedTopic, setSelectedTopic] = useState(null);
	const contentRef = useRef(null);

	const topicRefs = useRef({});
	const stateHeadingRef = useRef(null);

	amritsarTopics.forEach((topic) => {
		if (!topicRefs.current[topic]) {
			topicRefs.current[topic] = React.createRef();
		}
	});

	const handleDistrictClick = (district) => {
		// If clicking Amritsar again, toggle expansion
		if (district === "Amritsar" && selectedDistrict === "Amritsar") {
			setIsAmritsarExpanded((prev) => !prev);
		} else {
			// otherwise, switch district and expand Amritsar only if new is Amritsar
			setSelectedDistrict(district);
			setIsAmritsarExpanded(district === "Amritsar");
			setSelectedTopic(null);
			setIsMenuOpen(false);
		}
		// always set the selectedDistrict after toggling logic
		setSelectedDistrict(district);
	};

	const handleTopicClick = (topic) => {
		setSelectedTopic(topic);
		setIsMenuOpen(false);

		// Scroll to the topic section
		const ref = topicRefs.current[topic];
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	// Scroll to content when topic is selected
	useEffect(() => {
		if (selectedTopic && contentRef.current) {
			contentRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, [selectedTopic]);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile Menu Button */}
			<div
				ref={stateHeadingRef}
				className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20"
			>
				<h1 className="text-xl font-bold text-orange-600">Punjab</h1>
				<button
					onClick={() => {
						if (!isMenuOpen) {
							stateHeadingRef.current.scrollIntoView({
								block: "start",
							});
						}
						setIsMenuOpen(!isMenuOpen);
					}}
				>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`md:w-1/4 w-full bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
					isMenuOpen
						? "block fixed inset-0 overflow-y-auto"
						: "hidden"
				} md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto`}
			>
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<div key={district}>
							<li
								className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ${
									selectedDistrict === district
										? "bg-orange-600 text-white font-semibold"
										: "hover:bg-orange-100"
								}`}
								onClick={() => handleDistrictClick(district)}
							>
								{district}
							</li>

							{district === "Amritsar" && isAmritsarExpanded && (
								<ul className="ml-4 mt-2 space-y-1">
									{amritsarTopics.map((topic, idx) => (
										<li
											key={idx}
											onClick={(e) => {
												e.stopPropagation();
												handleTopicClick(topic);
											}}
											className={`text-sm cursor-pointer px-2 py-1 rounded-md ${
												selectedTopic === topic
													? "text-white bg-orange-400"
													: "hover:text-orange-600"
											}`}
										>
											{topic}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<main className="flex-1 px-6 py-10 space-y-10">
				{/* Map Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={PunjabMap}
						alt="Punjab District Map"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* General Info */}
				<section>
					<h1 className="text-5xl font-bold text-[#2E3A59] mb-4">
						Punjab
					</h1>
					<p className="text-lg leading-7">
						The vibrant heart of North India, Punjab is a land of
						fertile fields, spiritual grandeur, and cultural
						richness...
					</p>
				</section>

				{/* District Info */}
				<section className="mt-10 border-t pt-6">
					<h2 className="text-4xl font-semibold text-orange-600 mb-2">
						{selectedDistrict} District
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>

					{selectedDistrict === "Amritsar" && (
						<section className="mt-10">
							{amritsarTopics.map((topic) => (
								<div
									key={topic}
									ref={topicRefs.current[topic]}
									className="mb-12 mobile-scroll-offset"
								>
									<h3 className="text-2xl font-semibold text-orange-700 mb-4">
										{topic}
									</h3>

									{typeof amritsarContent[topic] ===
										"object" &&
									amritsarContent[topic] !== null ? (
										<div className="space-y-8">
											{Object.entries(
												amritsarContent[topic]
											).map(([section, content]) => (
												<div
													key={section}
													className="bg-white p-6 rounded-lg shadow-sm"
												>
													<h4 className="text-xl font-semibold mb-2 capitalize text-gray-800">
														{section
															.replace(
																/([A-Z])/g,
																" $1"
															)
															.replace(
																/^./,
																(str) =>
																	str.toUpperCase()
															)}
													</h4>
													<p className="text-lg leading-7 text-gray-700">
														{content}
													</p>
												</div>
											))}
										</div>
									) : (
										<p className="text-lg leading-7 text-gray-800">
											{amritsarContent[topic]}
										</p>
									)}
								</div>
							))}
						</section>
					)}
				</section>
			</main>
		</div>
	);
};

export default Punjab;
