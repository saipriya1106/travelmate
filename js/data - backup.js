// ============================================================
//  TravelMate – data.js
//  Central data store for all destinations, places, food, tips
// ============================================================

const DESTINATIONS = [
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    tagline: "Sun, Sand & Serenity",
    description: "India's smallest state packs sun-kissed beaches, vibrant nightlife, Portuguese heritage and lush forests into one unforgettable destination.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    bestSeason: "Nov – Feb",
    bestSeasonLabel: "Winter",
    recommendedDays: "3–5 Days",
    budget: { budget: "₹1,500–2,500/day", moderate: "₹3,000–5,000/day", premium: "₹6,000+/day" },
    about: "Goa is India's beloved coastal paradise, renowned for its golden beaches, azure waters, and a laid-back vibe. The destination blends Indian and Portuguese cultures, visible in its architecture, cuisine, and festivals. Whether you are a beach lover, history enthusiast, or adventure seeker, Goa has something for everyone.",
    culture: "Goa's culture is a vibrant mix of Hindu and Catholic traditions shaped by 450 years of Portuguese rule. Colourful churches, ancient temples, spicy Konkani cuisine and lively Carnival festivals define its unique identity.",
    weather: { summer: "Hot & humid (35°C+)", monsoon: "Heavy rains, rough seas", winter: "Pleasant (20–32°C)", recommended: "Winter (Nov–Feb)", reason: "Cool, sunny weather makes beaches, sightseeing and outdoor dining perfect during this period." },
    howToReach: { air: "Dabolim (GOI) and Mopa (GOX) airports connect Goa to major Indian cities.", train: "Madgaon and Vasco da Gama are the main railway stations linked to Mumbai, Delhi and Bangalore.", road: "Well-connected via NH-66; buses from Mumbai (~10 hrs) and Pune (~12 hrs) are popular." },
    transport: ["Auto-rickshaws", "Rented Bikes & Scooters", "Taxis & App Cabs", "Local Buses (KTC)", "Ferry Boats"],
    tags: ["Beaches", "Adventure", "Cultural"],
    tips: [
      "Carry sunscreen SPF 50+ and reapply regularly at the beach.",
      "Always check beach safety flags before swimming.",
      "Avoid beaches during monsoon (Jun–Sep) due to rough seas.",
      "Carry cash — many local shacks may not accept cards.",
      "Respect local residents and keep beaches clean.",
      "Negotiate fares with auto-rickshaws before boarding."
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    state: "Kerala",
    tagline: "God's Own Country",
    description: "Serene backwaters, misty hill stations, ancient Ayurveda and spice gardens make Kerala a complete sensory retreat.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "5–7 Days",
    budget: { budget: "₹1,200–2,000/day", moderate: "₹2,500–4,500/day", premium: "₹6,000+/day" },
    about: "Kerala, the southernmost state on India's west coast, is celebrated for its tranquil backwaters, emerald hill stations, pristine beaches, dense forests and vibrant cultural traditions like Kathakali and Theyyam.",
    culture: "Kerala's culture is rooted in classical arts, martial arts (Kalaripayattu), and elaborate festivals like Onam and Thrissur Pooram. The state also leads India in literacy and is known for its progressive social fabric.",
    weather: { summer: "Hot & humid (28–38°C)", monsoon: "Monsoon Jun–Sep; lush scenery but heavy rains", winter: "Pleasant (20–32°C)", recommended: "Oct–Mar", reason: "Post-monsoon greenery with cool, pleasant temperatures is ideal for backwaters, hill stations and beaches." },
    howToReach: { air: "Cochin International (COK), Calicut (CCJ) and Trivandrum (TRV) airports.", train: "Extensive rail network; Thiruvananthapuram and Ernakulam are key junctions.", road: "NH-66 runs along the coast; state buses and private cabs connect major towns." },
    transport: ["Auto-rickshaws", "App Cabs (Ola, Uber)", "Houseboat Cruises", "Local KSRTC Buses", "Ferries"],
    tags: ["Nature", "Cultural", "Wildlife"],
    tips: [
      "Book houseboats in advance, especially during Oct–Mar season.",
      "Carry light cotton clothes for coastal areas; layer up for Munnar hills.",
      "Try authentic Kerala Sadhya (feast) during Onam if you visit in Aug–Sep.",
      "Respect dress codes at temples — traditional attire is preferred.",
      "Carry insect repellent for forest and backwater visits.",
      "Drink only bottled or filtered water throughout the trip."
    ]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    tagline: "Land of Kings",
    description: "Majestic forts, colourful bazaars, camel safaris on golden dunes and rich royal heritage define this desert kingdom.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "5–8 Days",
    budget: { budget: "₹1,000–2,000/day", moderate: "₹2,500–5,000/day", premium: "₹7,000+/day" },
    about: "Rajasthan is India's largest state and a treasure trove of medieval history. Grand forts, ornate palaces, vibrant folk music, colourful textiles and camel safaris across the Thar Desert create an experience unlike anywhere else.",
    culture: "The state's culture reflects the pride and valor of Rajput clans. Festivals like Pushkar Mela, Jaipur Literature Festival and Gangaur are celebrated with immense pomp. Folk music, Ghoomar dance and puppet shows are intrinsic to Rajasthani identity.",
    weather: { summer: "Extremely hot (40–48°C)", monsoon: "Sparse rainfall; marginally cooler", winter: "Pleasant days, cold nights (5–25°C)", recommended: "Oct–Mar", reason: "Comfortable temperatures allow full exploration of outdoor forts, desert safaris and markets." },
    howToReach: { air: "Jaipur (JAI), Jodhpur (JDH), Udaipur (UDR) and Jaisalmer (JSA) airports.", train: "Jaipur, Jodhpur, Bikaner and Udaipur are well-connected by rail to major cities.", road: "NH-48 connects Delhi to Jaipur (~5 hrs); state highways link all major cities." },
    transport: ["Auto-rickshaws", "Cycle Rickshaws", "App Cabs", "Tourist Buses", "Camel Carts"],
    tags: ["Historical", "Cultural", "Adventure"],
    tips: [
      "Carry sufficient water and stay hydrated, especially in summer.",
      "Wear light, breathable clothing and a hat for sun protection.",
      "Bargain politely at local markets — it's part of the experience.",
      "Cover your shoulders and knees when visiting temples.",
      "Plan outdoor sightseeing in the early morning to avoid afternoon heat.",
      "Keep cash handy; smaller towns may not have many ATMs."
    ]
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    tagline: "Valley of the Gods",
    description: "Snow-covered peaks, apple orchards, ancient temples and adrenaline-pumping adventure sports make Manali a year-round favourite.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    bestSeason: "Mar – Jun",
    bestSeasonLabel: "Summer",
    recommendedDays: "4–6 Days",
    budget: { budget: "₹1,000–2,000/day", moderate: "₹2,500–4,000/day", premium: "₹5,000+/day" },
    about: "Nestled in the Kullu Valley at 2,050 m, Manali is Himachal Pradesh's premier hill station. It serves as a gateway to Lahaul-Spiti, Leh-Ladakh and offers activities from skiing to paragliding in a breathtaking Himalayan backdrop.",
    culture: "Manali's culture is deeply influenced by Tibetan Buddhism and Himachali traditions. The Old Manali area retains a charming village character, and festivals like Dussehra in Kullu draw thousands of visitors every year.",
    weather: { summer: "Pleasant (10–25°C); ideal for sightseeing", monsoon: "Heavy rains; landslides possible", winter: "Snow & very cold (-5 to 10°C)", recommended: "Mar–Jun", reason: "Snow has melted on lower slopes, roads are open, weather is pleasant and all activities are available." },
    howToReach: { air: "Bhuntar Airport (KUU) is 50 km away; nearest major airport is Chandigarh.", train: "Chandigarh or Pathankot are the closest railheads; buses/taxis connect onward.", road: "Buses from Delhi (~13 hrs) and Chandigarh (~8 hrs) are the most common route." },
    transport: ["Local Buses (HRTC)", "Shared Taxis", "Auto-rickshaws", "Rented Bikes"],
    tags: ["Adventure", "Nature", "Religious"],
    tips: [
      "Carry heavy woollens even in summer — nights are cold.",
      "Check Rohtang Pass and road conditions before travelling.",
      "Carry altitude sickness medication if travelling to higher passes.",
      "Book accommodation in advance during peak season (May–Jun).",
      "Carry comfortable waterproof shoes for trekking.",
      "Avoid travelling to Spiti or Leh during monsoon due to landslides."
    ]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    state: "J&K",
    tagline: "Paradise on Earth",
    description: "Shikara rides on Dal Lake, Mughal gardens, saffron fields and snow-tipped Himalayas justify every superlative ever written about Kashmir.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    bestSeason: "Apr – Oct",
    bestSeasonLabel: "Spring/Summer",
    recommendedDays: "5–7 Days",
    budget: { budget: "₹1,500–2,500/day", moderate: "₹3,000–5,000/day", premium: "₹7,000+/day" },
    about: "Jammu & Kashmir is often called 'Paradise on Earth'. The Kashmir Valley offers a surreal landscape of pristine lakes, lush meadows (Margs), ancient temples, Mughal-era gardens and the world-famous Dal Lake houseboats.",
    culture: "Kashmiri culture is a blend of Hindu, Muslim and Buddhist influences. Pashmina weaving, walnut wood carving, Kashmiri cuisine, and the classical Sufiana Kalam music form the cultural backbone of this region.",
    weather: { summer: "Pleasant (15–30°C); ideal", monsoon: "Light rains; greenery peaks", winter: "Heavy snowfall; very cold (-5 to 5°C)", recommended: "Apr–Oct", reason: "Spring tulips (Apr), summer meadows (Jun–Aug) and autumn chinar colours (Oct) are each spectacular." },
    howToReach: { air: "Sheikh ul-Alam Airport, Srinagar (SXR) connects to Delhi, Mumbai and other cities.", train: "Banihal–Srinagar rail line; otherwise travel by train to Jammu and continue by road.", road: "Jammu–Srinagar National Highway (~8–10 hrs); Leh–Manali road for adventure travellers." },
    transport: ["Shikaras (Dal Lake)", "Shared Sumo Taxis", "JKSRTC Buses", "Auto-rickshaws"],
    tags: ["Nature", "Adventure", "Cultural"],
    tips: [
      "Stay updated on travel advisories before visiting.",
      "Carry warm layers even in summer — evenings are cold.",
      "Negotiate shikara ride prices before boarding.",
      "Respect local customs and dress modestly in religious areas.",
      "Carry enough cash — ATMs can be sparse outside Srinagar.",
      "Book houseboats and hotels well in advance for Apr–Jun season."
    ]
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tagline: "Heart of India",
    description: "India's capital is a living museum — Mughal monuments, colonial buildings, vibrant street food and world-class museums coexist in one grand city.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "3–4 Days",
    budget: { budget: "₹1,000–2,000/day", moderate: "₹2,500–5,000/day", premium: "₹7,000+/day" },
    about: "New Delhi, India's capital, is one of the world's oldest continuously inhabited cities. It offers an extraordinary mix of Mughal-era monuments like Red Fort and Humayun's Tomb, colonial architecture, bustling bazaars and a thriving modern culture.",
    culture: "Delhi's culture is cosmopolitan yet deeply rooted in history. As home to people from every Indian state, it is a microcosm of the nation — reflected in its festivals, food, arts and languages.",
    weather: { summer: "Very hot (40–48°C); heat can be intense", monsoon: "Rains Jun–Sep; some relief from heat", winter: "Cool to cold (5–22°C); foggy in Jan", recommended: "Oct–Mar", reason: "Cool and comfortable temperatures make it ideal for sightseeing all the major monuments outdoors." },
    howToReach: { air: "Indira Gandhi International Airport (DEL) — one of India's busiest airports.", train: "New Delhi, Hazrat Nizamuddin and Delhi Junction railway stations connect to the whole country.", road: "Well-connected via NH-44, NH-48 and NH-9; buses from all major northern cities." },
    transport: ["Delhi Metro (DMRC)", "Auto-rickshaws", "Cycle Rickshaws", "App Cabs", "DTC Buses"],
    tags: ["Historical", "Cultural", "Religious"],
    tips: [
      "Use the Delhi Metro — it's the fastest, cheapest and most comfortable way to get around.",
      "Wear comfortable walking shoes for monument visits.",
      "Stay hydrated; Delhi summers are extreme.",
      "Beware of touts near popular monuments — book entry tickets officially.",
      "Carry an air pollution mask if visiting in winter (Nov–Jan).",
      "Keep your belongings secure in crowded places like Chandni Chowk."
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "City of Dreams",
    description: "The financial capital of India thrills with iconic Marine Drive, Bollywood studios, colonial architecture, street food and an energy that never sleeps.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    bestSeason: "Nov – Feb",
    bestSeasonLabel: "Winter",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹1,500–2,500/day", moderate: "₹3,000–5,000/day", premium: "₹8,000+/day" },
    about: "Mumbai is India's most populous city and its commercial heart. It blends Victorian Gothic architecture with Art Deco buildings, cosmopolitan neighbourhoods, world-class eateries and the glitter of Bollywood, all set against the Arabian Sea.",
    culture: "Mumbai's culture is defined by its spirit of inclusiveness. Ganesh Chaturthi is celebrated with unmatched fervour. The city's dabbawalas, its local train culture and its melting-pot identity make it truly unique.",
    weather: { summer: "Hot & humid (28–38°C)", monsoon: "Heavy rains Jun–Sep; city can flood", winter: "Pleasant (18–32°C)", recommended: "Nov–Feb", reason: "Mild temperatures and clear skies make this the best time to explore the seafront and monuments." },
    howToReach: { air: "Chhatrapati Shivaji Maharaj International Airport (BOM) — India's busiest airport.", train: "Mumbai CST and Bandra Terminus connect to all parts of India.", road: "Mumbai–Pune Expressway, NH-48; buses from Pune, Nashik, Goa are frequent." },
    transport: ["Local Trains (Mumbai Suburban)", "BEST Buses", "Auto-rickshaws (suburbs)", "Taxis & App Cabs", "Metro (Lines 1, 2A, 7)"],
    tags: ["Cultural", "Historical", "Beaches"],
    tips: [
      "Use the local train network — it's the lifeline of Mumbai.",
      "Avoid travelling during peak rush hours (8–10 AM, 6–9 PM) if possible.",
      "Try street food at Juhu Beach and Mohammad Ali Road.",
      "Keep a waterproof bag during monsoon — rains can be sudden and heavy.",
      "Gateway of India is best visited early morning to avoid crowds.",
      "Carry sufficient cash for local markets and taxis."
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City",
    description: "Amber Fort, Hawa Mahal, bustling gem markets and the romantic old walled city paint Jaipur in royal pink and gold.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹800–1,500/day", moderate: "₹2,000–4,000/day", premium: "₹6,000+/day" },
    about: "Jaipur, the capital of Rajasthan, was founded in 1727 by Maharaja Sawai Jai Singh II. It is famous for its stunning fortresses, colourful bazaars, elephants and a UNESCO World Heritage walled city. It forms part of the Golden Triangle tourist circuit.",
    culture: "Jaipur's culture breathes royalty. Puppet shows, folk dances, camel rides and the annual Jaipur Literature Festival draw visitors from around the world. Gem cutting, block printing and blue pottery are traditional crafts that thrive here.",
    weather: { summer: "Very hot (38–45°C)", monsoon: "Some rainfall; moderate humidity", winter: "Pleasant (8–25°C)", recommended: "Oct–Mar", reason: "Perfect weather for exploring the forts, bazaars and palaces without the scorching heat." },
    howToReach: { air: "Jaipur International Airport (JAI) connects to Delhi, Mumbai and other cities.", train: "Jaipur Junction is on the main Delhi–Mumbai and Delhi–Ahmedabad rail lines.", road: "Delhi to Jaipur ~5 hrs via NH-48; excellent road connectivity across Rajasthan." },
    transport: ["Auto-rickshaws", "Cycle Rickshaws", "App Cabs", "City Buses"],
    tags: ["Historical", "Cultural", "Adventure"],
    tips: [
      "Buy a composite ticket for major monuments — it saves money.",
      "Visit Amber Fort early morning to beat the crowd and heat.",
      "Carry water at all times when exploring in winter afternoons.",
      "Bargain at Johari Bazaar for jewellery and handicrafts.",
      "Dress modestly when visiting temples inside the forts.",
      "Be cautious of overcharging at tourist-area restaurants."
    ]
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    tagline: "Home of the Taj Mahal",
    description: "The Taj Mahal — a UNESCO World Heritage monument — stands as the world's greatest symbol of love in this historic Mughal city.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "1–2 Days",
    budget: { budget: "₹800–1,500/day", moderate: "₹2,000–3,500/day", premium: "₹5,000+/day" },
    about: "Agra, a city on the banks of the Yamuna River, was the capital of the Mughal Empire during the 16th and 17th centuries. It is home to three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and Fatehpur Sikri.",
    culture: "Agra's culture is deeply Mughal, reflected in its cuisine (Mughlai food), marble inlay craftsmanship (Pietra Dura) and traditional leather and embroidery work. The city attracts millions of visitors making it one of India's most international destinations.",
    weather: { summer: "Extremely hot (40–46°C)", monsoon: "Humid; smog over the Taj is reduced by rains", winter: "Pleasant (6–25°C)", recommended: "Oct–Mar", reason: "Cool weather and clear skies offer the best visibility and comfort for Taj Mahal visits." },
    howToReach: { air: "Agra Airport (AGR) has limited connectivity; Delhi (DEL) ~230 km is the preferred gateway.", train: "Agra Cantonment is on the Delhi–Mumbai and Delhi–Chennai routes; Gatimaan Express from Delhi.", road: "Yamuna Expressway from Delhi (~3 hrs) and National Highway from Jaipur (~4 hrs)." },
    transport: ["E-rickshaws (near Taj Mahal)", "Auto-rickshaws", "Taxis & App Cabs", "Cycle Rickshaws"],
    tags: ["Historical", "Cultural", "Religious"],
    tips: [
      "Visit the Taj Mahal at sunrise for the best light and fewer crowds.",
      "Only e-rickshaws are allowed near the Taj Mahal — plan accordingly.",
      "Buy official entry tickets from the ASI website to avoid touts.",
      "Carry water and snacks — food stalls inside are expensive.",
      "The Taj Mahal is closed on Fridays.",
      "Visit Agra Fort and Fatehpur Sikri on the same trip to maximise time."
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "City of Light",
    description: "One of the world's oldest living cities, Varanasi's sacred ghats, evening Ganga Aarti and timeless spiritual atmosphere are profoundly moving.",
    image: "https://images.unsplash.com/photo-1561361058-c24e02238058?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹700–1,200/day", moderate: "₹1,500–3,000/day", premium: "₹4,000+/day" },
    about: "Varanasi, also called Kashi or Benaras, is one of the oldest continuously inhabited cities in the world. Situated on the banks of the Ganges, it is the spiritual capital of Hinduism and a major centre for Jainism and Buddhism as well.",
    culture: "Varanasi is the cradle of Banarasi sarees, classical Hindustani music and Sanskrit learning. The evening Ganga Aarti at Dashashwamedh Ghat is one of India's most spectacular rituals. Boat rides at dawn offer a transcendent experience.",
    weather: { summer: "Very hot (38–44°C)", monsoon: "Humid; Ganges floods possible", winter: "Cool (6–22°C)", recommended: "Oct–Mar", reason: "Cool temperatures make morning boat rides and ghat walks very comfortable." },
    howToReach: { air: "Lal Bahadur Shastri International Airport (VNS) connects to Delhi, Mumbai, Bangalore.", train: "Varanasi Junction and Mughal Sarai (Pandit Deen Dayal Upadhyay) are major stations.", road: "NH-19 from Allahabad (~1.5 hrs); well-connected by buses and taxis to Lucknow, Delhi." },
    transport: ["Cycle Rickshaws", "Auto-rickshaws", "Boat Rides (Ghat to Ghat)", "App Cabs"],
    tags: ["Religious", "Cultural", "Historical"],
    tips: [
      "Take a sunrise boat ride on the Ganges — it's the highlight of Varanasi.",
      "Attend the evening Ganga Aarti at Dashashwamedh Ghat.",
      "Dress modestly and respectfully near the ghats and temples.",
      "Avoid touching cremation pyres or photographing cremations.",
      "Carry drinking water; only drink bottled water here.",
      "Be alert for touts near the ghats; stick to clearly marked services."
    ]
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "City of Pearls",
    description: "The City of Nizams combines magnificent forts and mosques with India's booming tech industry, world-famous biryani and sparkling pearl bazaars.",
    image: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=600&q=80",
    bestSeason: "Oct – Feb",
    bestSeasonLabel: "Winter",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹900–1,800/day", moderate: "₹2,000–4,000/day", premium: "₹5,000+/day" },
    about: "Hyderabad, the capital of Telangana, is a fascinating blend of the old and the new. Historic landmarks like Charminar and Golconda Fort stand alongside the ultramodern HITEC City, creating a city that is simultaneously ancient and cutting-edge.",
    culture: "Hyderabad's culture reflects its Nizami heritage — expressed in Urdu poetry, Qawwali music, elaborate cuisine and fine arts. The city's traditions of pearl jewellery, Bidriware and Kalamkari cloth are celebrated nationwide.",
    weather: { summer: "Hot (32–42°C)", monsoon: "Moderate rains Jun–Sep; pleasant", winter: "Mild (15–30°C)", recommended: "Oct–Feb", reason: "Mild and clear weather makes it perfect for exploring monuments and markets." },
    howToReach: { air: "Rajiv Gandhi International Airport (HYD) — well-connected nationally and internationally.", train: "Secunderabad, Hyderabad Deccan and Kacheguda stations serve all major routes.", road: "NH-44, NH-65 connect Hyderabad to Bangalore, Chennai, Pune and Mumbai." },
    transport: ["Hyderabad Metro (HMRL)", "Auto-rickshaws", "TSRTC Buses", "App Cabs"],
    tags: ["Historical", "Cultural", "Religious"],
    tips: [
      "Try authentic Hyderabadi Dum Biryani — it's a must-eat.",
      "Bargain for pearls at Laad Bazaar near Charminar.",
      "Visit Golconda Fort in the morning and attend the evening sound-and-light show.",
      "Use the metro for quick cross-city travel.",
      "Carry water — Hyderabad summers can be intense.",
      "Dress modestly when visiting mosques and religious sites."
    ]
  },
  {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    tagline: "Queen of Hill Stations",
    description: "Rolling tea gardens, the charming Nilgiri Mountain Railway and a refreshing climate make Ooty the quintessential South Indian hill escape.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    bestSeason: "Mar – Jun",
    bestSeasonLabel: "Summer",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹800–1,500/day", moderate: "₹1,800–3,500/day", premium: "₹5,000+/day" },
    about: "Ooty (Udhagamandalam) is a hill station in the Nilgiri district of Tamil Nadu, set at 2,240 m. Known for its tea plantations, serene Ooty Lake, colourful botanical gardens and the UNESCO-listed Nilgiri Mountain Railway (toy train).",
    culture: "Ooty blends British colonial heritage with the vibrant Toda tribal culture. The annual summer festival in May, tea factory tours and handmade chocolate shops are unique local experiences.",
    weather: { summer: "Cool & pleasant (10–25°C); ideal", monsoon: "Heavy rains; leeches on trails", winter: "Cold (5–17°C)", recommended: "Mar–Jun", reason: "Summer is the best time — cool, pleasant weather and the Summer Festival make it ideal for families." },
    howToReach: { air: "Coimbatore Airport (CJB) ~90 km away; taxis connect within ~2.5 hrs.", train: "Mettupalayam is the nearest major station; Nilgiri Mountain Railway connects to Ooty.", road: "Ghat roads from Coimbatore (~3 hrs), Mysore (~3 hrs) and Bangalore (~6 hrs)." },
    transport: ["Local Buses (TNSTC)", "Shared Taxis", "Auto-rickshaws", "Mini Vans"],
    tags: ["Nature", "Adventure", "Cultural"],
    tips: [
      "Take the Nilgiri Mountain Railway (toy train) from Mettupalayam — a UNESCO heritage experience.",
      "Carry a light jacket even in summer — evenings are chilly.",
      "Visit tea estates for a guided tour and fresh tea tasting.",
      "Buy homemade chocolates and eucalyptus oil as local souvenirs.",
      "Book toy train tickets in advance — they sell out fast.",
      "Drive carefully on the winding ghat roads."
    ]
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    tagline: "Queen of the Himalayas",
    description: "Morning views of Kangchenjunga from Tiger Hill, world-famous tea gardens and the charming Darjeeling Himalayan Railway define this iconic hill town.",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=600&q=80",
    bestSeason: "Mar – May, Oct – Nov",
    bestSeasonLabel: "Spring / Autumn",
    recommendedDays: "3–4 Days",
    budget: { budget: "₹700–1,500/day", moderate: "₹1,800–3,500/day", premium: "₹5,000+/day" },
    about: "Darjeeling, set at 2,042 m in the Himalayas, is famous for its Kangchenjunga views, aromatic first-flush teas, Buddhist monasteries and the UNESCO-listed Darjeeling Himalayan Railway (Toy Train).",
    culture: "Darjeeling's culture is a beautiful blend of Nepali, Lepcha and Tibetan traditions. Tibetan Buddhist monasteries, colourful prayer flags, Losar (Tibetan New Year) and tea-plucking festivals shape its identity.",
    weather: { summer: "Pleasant (10–22°C)", monsoon: "Heavy rains Jun–Sep; landslides possible", winter: "Cold (2–12°C)", recommended: "Mar–May, Oct–Nov", reason: "Clear skies offer the best views of Kangchenjunga; spring brings colourful rhododendron blooms." },
    howToReach: { air: "Bagdogra Airport (IXB) ~90 km away; taxis connect in ~2.5–3 hrs.", train: "New Jalpaiguri (NJP) is the nearest major junction; toy train or taxi from there.", road: "Shared jeeps and buses from Siliguri (~2 hrs) and NJP (~2.5 hrs)." },
    transport: ["Shared Jeeps", "Local Buses", "Toy Train", "Rented Taxis"],
    tags: ["Nature", "Adventure", "Cultural"],
    tips: [
      "Wake up by 3–4 AM for the Tiger Hill sunrise view of Kangchenjunga.",
      "Book toy train tickets well in advance — very limited seats.",
      "Carry warm layers — mornings and evenings are cold year-round.",
      "Visit a tea garden and learn about first-flush and second-flush teas.",
      "Carry altitude sickness medicine as a precaution.",
      "Check road conditions before travelling during or after monsoon."
    ]
  },
  {
    id: "andaman",
    name: "Andaman",
    state: "Andaman & Nicobar",
    tagline: "Emerald Islands",
    description: "Crystal-clear turquoise waters, pristine coral reefs, white sand beaches and the historic Cellular Jail make Andaman an island paradise.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    bestSeason: "Oct – May",
    bestSeasonLabel: "Winter / Spring",
    recommendedDays: "5–7 Days",
    budget: { budget: "₹1,500–2,500/day", moderate: "₹3,000–5,000/day", premium: "₹7,000+/day" },
    about: "The Andaman and Nicobar Islands, located in the Bay of Bengal, offer one of India's most exotic travel experiences. Pristine white sand beaches, bio-luminescent plankton, vibrant coral reefs and the solemn Cellular Jail combine for an unforgettable trip.",
    culture: "Andaman's culture is a blend of the indigenous Andamanese tribes and the settler communities from mainland India, Burma and Southeast Asia. The historic Cellular Jail (Kala Pani) is a powerful reminder of India's freedom struggle.",
    weather: { summer: "Hot & humid (27–37°C)", monsoon: "Heavy rains May–Sep; ferries disrupted", winter: "Ideal (22–32°C)", recommended: "Oct–May", reason: "Clear water, calm seas and sunny skies make underwater activities and beach trips perfect." },
    howToReach: { air: "Veer Savarkar International Airport (IXZ), Port Blair connects to Chennai, Delhi, Kolkata, Mumbai.", train: "No rail connectivity; fly to Port Blair.", road: "Ships from Chennai (~60 hrs) and Kolkata (~60 hrs) are a scenic but slow alternative." },
    transport: ["Government Ferries", "Private Speed Boats", "Rented Bikes & Scooters", "Auto-rickshaws (Port Blair)"],
    tags: ["Beaches", "Adventure", "Nature"],
    tips: [
      "Carry sufficient cash — ATMs are limited on smaller islands.",
      "Book ferries to Havelock and Neil Island in advance — they fill up fast.",
      "Apply waterproof sunscreen before every water activity.",
      "Scuba diving and snorkelling require advance booking at approved operators.",
      "Carry seasickness medicine for boat journeys.",
      "Respect restricted tribal territories — visiting protected islands is illegal."
    ]
  },
  {
    id: "mysore",
    name: "Mysore",
    state: "Karnataka",
    tagline: "City of Palaces",
    description: "The magnificent Mysore Palace illuminated during Dasara, fragrant sandalwood, silk sarees and the Chamundi Hills make Mysore a cultural gem.",
    image: "https://images.unsplash.com/photo-1592635196078-9fdc68f0dfd8?w=600&q=80",
    bestSeason: "Oct – Mar",
    bestSeasonLabel: "Winter",
    recommendedDays: "2–3 Days",
    budget: { budget: "₹700–1,400/day", moderate: "₹1,800–3,500/day", premium: "₹5,000+/day" },
    about: "Mysore (Mysuru), the cultural capital of Karnataka, is famous for its royal heritage, magnificent Mysore Palace, the colourful Dasara festival and its world-class yoga tradition. It is also a gateway to Coorg, Ooty and Kodagu.",
    culture: "Mysore's culture is deeply rooted in the Wodeyar dynasty's legacy. Mysore silk, sandalwood crafts, the Ashtanga Yoga tradition and the grand Dasara procession (Mysore Dasara is celebrated as Nadahabba — the state festival) are defining features.",
    weather: { summer: "Warm (24–38°C)", monsoon: "Moderate rains; refreshing", winter: "Pleasant (15–28°C)", recommended: "Oct–Mar", reason: "Comfortable temperatures and the Dasara festival (Oct) make this the most vibrant time to visit." },
    howToReach: { air: "Mysore Airport (MYQ) has limited flights; Bangalore (BLR) ~145 km is the main gateway.", train: "Mysore Junction connects to Bangalore (~2.5 hrs), Chennai and other cities.", road: "Bangalore–Mysore Expressway (~3 hrs); well-connected to Ooty, Coorg and Hassan." },
    transport: ["KSRTC City Buses", "Auto-rickshaws", "App Cabs", "Tonga (horse-drawn carriage near palace)"],
    tags: ["Historical", "Cultural", "Religious"],
    tips: [
      "Visit Mysore Palace at night when it is illuminated — absolutely stunning.",
      "Buy genuine Mysore silk sarees and sandalwood products from government emporiums.",
      "Visit Chamundi Hills early morning to avoid the afternoon crowd.",
      "If visiting during October, experience the Dasara procession.",
      "Try Mysore Pak — the famous sweet — from authentic local shops.",
      "Book accommodation in advance if visiting during Dasara."
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  TOURIST PLACES (3 per destination for brevity + quality)
// ─────────────────────────────────────────────────────────────
const PLACES = {
  goa: [
    { id: "g1", name: "Baga Beach", type: "Beaches", description: "Baga is Goa's most popular beach, known for its vibrant shacks, watersports and nightlife.", duration: "Half Day", bestTime: "Nov–Feb", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80" },
    { id: "g2", name: "Fort Aguada", type: "Historical", description: "A 17th-century Portuguese fort offering panoramic views of the Arabian Sea and a historic lighthouse.", duration: "2–3 Hours", bestTime: "Nov–Feb", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
    { id: "g3", name: "Dudhsagar Falls", type: "Nature", description: "One of India's tallest waterfalls, this four-tiered cascade cascades through dense forest.", duration: "Full Day", bestTime: "Jul–Dec", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ],
  kerala: [
    { id: "k1", name: "Alleppey Backwaters", type: "Nature", description: "A 900 km network of lagoons, rivers and canals best explored on a traditional houseboat.", duration: "1–2 Days", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80" },
    { id: "k2", name: "Munnar Tea Gardens", type: "Nature", description: "Sprawling emerald tea estates in the Western Ghats at 1,600 m — a photographer's dream.", duration: "Full Day", bestTime: "Sep–May", image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=400&q=80" },
    { id: "k3", name: "Periyar Wildlife Sanctuary", type: "Wildlife", description: "Home to wild elephants, tigers and exotic birds around the scenic Periyar Lake in Thekkady.", duration: "Full Day", bestTime: "Oct–Apr", image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=400&q=80" }
  ],
  rajasthan: [
    { id: "r1", name: "Amber Fort, Jaipur", type: "Historical", description: "A magnificent hillside fort-palace complex with intricate mirror work and sweeping city views.", duration: "3–4 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80" },
    { id: "r2", name: "Mehrangarh Fort, Jodhpur", type: "Historical", description: "One of India's largest forts, rising 125 m above the Blue City with extraordinary exhibits.", duration: "Half Day", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80" },
    { id: "r3", name: "Jaisalmer Desert Camp", type: "Adventure", description: "Experience camel safaris and cultural performances under a starlit Thar Desert sky.", duration: "Overnight", bestTime: "Oct–Feb", image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80" }
  ],
  manali: [
    { id: "m1", name: "Rohtang Pass", type: "Adventure", description: "A high mountain pass at 3,978 m offering snow, panoramic Himalayan views and skiing in winter.", duration: "Full Day", bestTime: "May–Oct", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80" },
    { id: "m2", name: "Solang Valley", type: "Adventure", description: "A popular valley for skiing, zorbing, cable car rides and snow activities near Manali.", duration: "Half Day", bestTime: "Dec–Apr (snow), May–Nov (adventure)", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { id: "m3", name: "Hadimba Temple", type: "Religious", description: "A unique 16th-century pagoda-style temple dedicated to Hadimba Devi, set in a cedar forest.", duration: "1–2 Hours", bestTime: "Mar–Jun", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ],
  kashmir: [
    { id: "kas1", name: "Dal Lake", type: "Nature", description: "The iconic 'Jewel of Kashmir' — explore colourful shikaras, floating gardens and houseboats.", duration: "Half Day", bestTime: "Apr–Oct", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { id: "kas2", name: "Gulmarg", type: "Adventure", description: "A world-class skiing destination in winter and a stunning meadow at 2,650 m in summer.", duration: "Full Day", bestTime: "Dec–Feb (ski), May–Sep (meadow)", image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&q=80" },
    { id: "kas3", name: "Pahalgam", type: "Nature", description: "The 'Valley of Shepherds' with pristine rivers, alpine meadows and access to Amarnath trek.", duration: "1–2 Days", bestTime: "May–Sep", image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=400&q=80" }
  ],
  delhi: [
    { id: "d1", name: "Red Fort", type: "Historical", description: "The iconic 17th-century Mughal fort on the banks of the Yamuna — a UNESCO World Heritage Site.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
    { id: "d2", name: "Qutub Minar", type: "Historical", description: "The world's tallest brick minaret (72.5 m) — a UNESCO Site and masterpiece of early Indo-Islamic architecture.", duration: "2 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80" },
    { id: "d3", name: "India Gate", type: "Cultural", description: "A war memorial on the ceremonial Rajpath — a beloved gathering spot especially beautiful at night.", duration: "1–2 Hours", bestTime: "Oct–Feb", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80" }
  ],
  mumbai: [
    { id: "mu1", name: "Gateway of India", type: "Historical", description: "A 26 m basalt arch built in 1924 overlooking the Arabian Sea — the symbolic entrance to India.", duration: "1 Hour", bestTime: "Nov–Feb", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80" },
    { id: "mu2", name: "Marine Drive", type: "Cultural", description: "Mumbai's beloved 3.6 km seafront promenade — spectacular at sunset and dazzling at night.", duration: "1–2 Hours", bestTime: "Nov–Feb", image: "https://images.unsplash.com/photo-1598977118899-5f1f2e8ca8e7?w=400&q=80" },
    { id: "mu3", name: "Elephanta Caves", type: "Historical", description: "Rock-cut Hindu cave temples on Elephanta Island — a UNESCO World Heritage Site.", duration: "Half Day", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80" }
  ],
  jaipur: [
    { id: "j1", name: "Hawa Mahal", type: "Historical", description: "The iconic 'Palace of Winds' with 953 latticed windows — a masterpiece of Rajput architecture.", duration: "1–2 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80" },
    { id: "j2", name: "City Palace", type: "Historical", description: "A magnificent complex of palaces, gardens and courtyards at the heart of Jaipur's old city.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80" },
    { id: "j3", name: "Jantar Mantar", type: "Cultural", description: "A UNESCO-listed astronomical observatory built in 1734 with the world's largest stone sundial.", duration: "1–2 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80" }
  ],
  agra: [
    { id: "a1", name: "Taj Mahal", type: "Historical", description: "One of the Seven Wonders of the World — an eternal symbol of love built by Emperor Shah Jahan.", duration: "3–4 Hours", bestTime: "Oct–Mar (sunrise)", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80" },
    { id: "a2", name: "Agra Fort", type: "Historical", description: "A UNESCO World Heritage fortress that served as the main residence of the Mughal emperors.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80" },
    { id: "a3", name: "Fatehpur Sikri", type: "Historical", description: "A stunning 16th-century abandoned Mughal city — a UNESCO Site 40 km from Agra.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80" }
  ],
  varanasi: [
    { id: "v1", name: "Dashashwamedh Ghat", type: "Religious", description: "The most sacred and vibrant ghat where the spectacular Ganga Aarti is performed every evening.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1561361058-c24e02238058?w=400&q=80" },
    { id: "v2", name: "Kashi Vishwanath Temple", type: "Religious", description: "One of the most sacred Jyotirlinga temples dedicated to Lord Shiva — a major pilgrimage site.", duration: "1–2 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80" },
    { id: "v3", name: "Sarnath", type: "Historical", description: "Where the Buddha delivered his first sermon — an archaeological site with stupas and a museum.", duration: "3–4 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80" }
  ],
  hyderabad: [
    { id: "h1", name: "Charminar", type: "Historical", description: "A 16th-century mosque and monument with four grand minarets — the iconic symbol of Hyderabad.", duration: "1–2 Hours", bestTime: "Oct–Feb", image: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80" },
    { id: "h2", name: "Golconda Fort", type: "Historical", description: "A magnificent 13th-century fort complex famous for its acoustics and diamond history.", duration: "Half Day", bestTime: "Oct–Feb", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
    { id: "h3", name: "Hussain Sagar Lake", type: "Nature", description: "A large artificial lake with a giant monolithic Buddha statue on a rocky island in the centre.", duration: "2 Hours", bestTime: "Oct–Feb", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ],
  ooty: [
    { id: "o1", name: "Botanical Gardens", type: "Nature", description: "A 55-acre spectacular garden maintained since 1848, featuring rare plants and a 20-million-year-old fossil tree.", duration: "2–3 Hours", bestTime: "Mar–Jun", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80" },
    { id: "o2", name: "Ooty Lake", type: "Nature", description: "A picturesque artificial lake built in 1824 perfect for peaceful boating amidst eucalyptus-covered hills.", duration: "1–2 Hours", bestTime: "Mar–Jun", image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=400&q=80" },
    { id: "o3", name: "Nilgiri Mountain Railway", type: "Adventure", description: "A UNESCO World Heritage toy train that has been climbing from Mettupalayam to Ooty since 1908.", duration: "Full Day", bestTime: "Mar–Jun, Oct–Nov", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ],
  darjeeling: [
    { id: "dar1", name: "Tiger Hill Sunrise", type: "Nature", description: "The most dramatic sunrise in India — a golden glow over Kangchenjunga viewed from 2,590 m.", duration: "Half Day (early morning)", bestTime: "Mar–May, Oct–Nov", image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=400&q=80" },
    { id: "dar2", name: "Darjeeling Himalayan Railway", type: "Adventure", description: "The iconic UNESCO-listed toy train that has wound through the tea gardens and hills since 1881.", duration: "Half–Full Day", bestTime: "Mar–May, Oct–Nov", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" },
    { id: "dar3", name: "Happy Valley Tea Estate", type: "Nature", description: "One of the oldest tea estates (est. 1854) offering guided tours of plucking, processing and tasting.", duration: "2–3 Hours", bestTime: "Mar–May", image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=400&q=80" }
  ],
  andaman: [
    { id: "and1", name: "Radhanagar Beach", type: "Beaches", description: "Voted one of Asia's best beaches — crystal turquoise waters and pristine white sand on Havelock Island.", duration: "Half Day", bestTime: "Oct–May", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
    { id: "and2", name: "Cellular Jail", type: "Historical", description: "The colonial-era prison that held India's freedom fighters — now a national memorial with a moving sound-and-light show.", duration: "2–3 Hours", bestTime: "Oct–May", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
    { id: "and3", name: "Elephant Beach", type: "Adventure", description: "The best snorkelling and coral reef destination in the Andamans, accessible by boat from Havelock.", duration: "Half Day", bestTime: "Oct–May", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ],
  mysore: [
    { id: "my1", name: "Mysore Palace", type: "Historical", description: "One of India's grandest palaces — home to the Wodeyar dynasty, lit with 100,000 bulbs on Sundays.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1592635196078-9fdc68f0dfd8?w=400&q=80" },
    { id: "my2", name: "Chamundi Hills", type: "Religious", description: "A sacred hill at 1,065 m with the ancient Chamundeshwari Temple and a giant Nandi statue.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80" },
    { id: "my3", name: "Brindavan Gardens", type: "Nature", description: "Beautiful terraced gardens with illuminated musical fountains — best experienced after sunset.", duration: "2–3 Hours", bestTime: "Oct–Mar", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" }
  ]
};

// ─────────────────────────────────────────────────────────────
//  FOOD DATA
// ─────────────────────────────────────────────────────────────
const FOOD = {
  goa: { dishes: ["Fish Curry Rice", "Prawn Balchão", "Chicken Cafreal", "Bebinca (dessert)", "Goan Bebinca", "Crab Xacuti"], experience: "Shack dining by the beach with sea breeze", market: "Mapusa Friday Market, Anjuna Flea Market" },
  kerala: { dishes: ["Kerala Sadhya (Feast)", "Appam with Stew", "Fish Molee", "Puttu & Kadala Curry", "Karimeen Pollichathu", "Payasam"], experience: "Banana-leaf meals and backwater dining", market: "Chalai Bazaar, Matancherry Spice Market" },
  rajasthan: { dishes: ["Dal Baati Churma", "Laal Maas", "Gatte ki Sabzi", "Bajre ki Roti", "Ghevar", "Mawa Kachori"], experience: "Royal thali dining and desert camp meals", market: "Johari Bazaar, Sadar Bazaar, Tripolia Bazaar" },
  manali: { dishes: ["Sidu (steamed bread)", "Chha Gosht", "Thenthuk (noodle soup)", "Siddu", "Aktori", "Trout Fish"], experience: "Café culture in Old Manali, chai by the river", market: "Old Manali Market, Mall Road" },
  kashmir: { dishes: ["Rogan Josh", "Wazwan (36-course feast)", "Yakhni", "Rista", "Kahwa (saffron tea)", "Sheermal"], experience: "Wazwan ceremonial dining, tea on a shikara", market: "Lal Chowk, Polo View Market" },
  delhi: { dishes: ["Butter Chicken", "Chole Bhature", "Paranthas (Paranthe Wali Gali)", "Daulat ki Chaat", "Gol Gappa", "Biryani"], experience: "Street food in Chandni Chowk — a world in itself", market: "Chandni Chowk, Sarojini Nagar, Lajpat Nagar" },
  mumbai: { dishes: ["Vada Pav", "Pav Bhaji", "Bombay Sandwich", "Misal Pav", "Batatawada", "Modak"], experience: "Street food at Juhu Beach and Mohammed Ali Road", market: "Crawford Market, Chor Bazaar, Fashion Street" },
  jaipur: { dishes: ["Pyaaz Kachori", "Ghevar", "Rajasthani Thali", "Mirchi Bada", "Mawa Kachori", "Daal Baati"], experience: "Rooftop dining with fort views", market: "Johari Bazaar, Bapu Bazaar" },
  agra: { dishes: ["Petha (candied gourd)", "Bedai & Jalebi", "Mughlai Biryani", "Dalmoth", "Mughlai Paratha"], experience: "Rooftop restaurants with Taj Mahal views", market: "Kinari Bazaar, Sadar Bazaar" },
  varanasi: { dishes: ["Kachori Sabzi", "Thandai", "Malaiyo (winter dessert)", "Banarasi Paan", "Tamatar Chaat", "Lassi"], experience: "Chai and snacks along the Ganges ghats at dawn", market: "Vishwanath Gali, Godaulia Market" },
  hyderabad: { dishes: ["Hyderabadi Dum Biryani", "Haleem", "Lukhmi", "Double ka Meetha", "Irani Chai", "Qubani ka Meetha"], experience: "Irani cafés and roadside biryani stalls", market: "Laad Bazaar (bangles), Sultan Bazaar" },
  ooty: { dishes: ["Ooty Varkey", "Nilgiri Tea", "Homemade Chocolates", "Carrot Halwa", "Cheese & Butter Products"], experience: "Tea tasting at Nilgiri tea estates", market: "Charing Cross Market, Ooty Bazaar" },
  darjeeling: { dishes: ["Darjeeling First Flush Tea", "Momos (dumplings)", "Thukpa (noodle soup)", "Sel Roti", "Gundruk"], experience: "Tea tasting at estate bungalows with Himalayan views", market: "Chowk Bazaar, Nehru Road" },
  andaman: { dishes: ["Grilled Barracuda", "Coconut Prawn Curry", "Red Snapper Fish Curry", "Devilled Crab", "Coconut Rice"], experience: "Beachside seafood shacks on Havelock", market: "Aberdeen Bazaar, Sagarika Government Emporium" },
  mysore: { dishes: ["Mysore Pak", "Mysore Masala Dosa", "Khara Bath", "Mysore Sandesh", "Neer Dosa", "Mysore Coffee"], experience: "Udupi breakfast restaurants and palace-area cafés", market: "Devaraja Market, Krishnaraja Circle" }
};

// ─────────────────────────────────────────────────────────────
//  SEASON TIPS
// ─────────────────────────────────────────────────────────────
const SEASON_TIPS = {
  summer: {
    label: "Summer (Mar – Jun)",
    icon: "☀️",
    color: "#f97316",
    tips: [
      "Stay hydrated — carry at least 2 litres of water.",
      "Wear light, breathable cotton or linen clothing.",
      "Apply broad-spectrum SPF 50+ sunscreen and reapply every 2 hours.",
      "Carry a hat, sunglasses and an umbrella for outdoor activities.",
      "Plan outdoor sightseeing in the early morning (6–10 AM) or evening.",
      "Avoid strenuous activities during 12–4 PM peak heat hours.",
      "Keep ORS packets for quick rehydration if needed.",
      "Hill stations like Manali, Ooty, Darjeeling and Kashmir are excellent in summer."
    ]
  },
  monsoon: {
    label: "Monsoon (Jul – Sep)",
    icon: "🌧️",
    color: "#3b82f6",
    tips: [
      "Always carry a sturdy waterproof umbrella or rain jacket.",
      "Wear quick-dry clothes and waterproof footwear.",
      "Check local weather forecasts and flood/road-closure alerts daily.",
      "Avoid trekking or adventure activities near flooded rivers.",
      "Be careful on wet, slippery surfaces at monuments and hill stations.",
      "Carry a dry bag or waterproof cover for your electronics and documents.",
      "Kerala's backwaters and North-East India are particularly beautiful in monsoon.",
      "Avoid beach activities in Goa and Andaman due to rough seas."
    ]
  },
  winter: {
    label: "Winter (Oct – Feb)",
    icon: "❄️",
    color: "#0ea5e9",
    tips: [
      "Carry layered warm clothing — temperatures drop sharply after dark.",
      "Pack woollens, thermals and a heavy jacket for hill stations.",
      "Check fog and cold wave advisories, especially in North India.",
      "Winter is the best time to visit Rajasthan, Delhi, Agra and Goa.",
      "Carry moisturiser and lip balm for cold, dry weather.",
      "Sunrise visits to monuments and hills are cold but absolutely magical.",
      "Carry hot-water bottles or hand warmers for mountain destinations.",
      "Book accommodation in advance for peak season (Dec–Jan)."
    ]
  }
};

// ─────────────────────────────────────────────────────────────
//  GENERAL TRAVEL TIPS
// ─────────────────────────────────────────────────────────────
const GENERAL_TIPS = [
  { icon: "🌤️", title: "Check Weather", tip: "Always check the local weather forecast at least 3 days before travelling." },
  { icon: "👕", title: "Pack Smart", tip: "Carry season-appropriate clothes. Don't overpack — keep luggage manageable." },
  { icon: "📄", title: "Carry Documents", tip: "Keep originals and scanned copies of all important documents (ID, tickets, insurance)." },
  { icon: "💊", title: "Basic Medicines", tip: "Pack a basic medical kit: pain relief, antacids, band-aids and any prescription medicines." },
  { icon: "💧", title: "Stay Hydrated", tip: "Carry a reusable water bottle. Drink only sealed bottled water in new destinations." },
  { icon: "🙏", title: "Respect Culture", tip: "Research local customs, dress codes and etiquette before you go." },
  { icon: "📜", title: "Follow Local Rules", tip: "Respect protected areas, photography restrictions and environmental guidelines." },
  { icon: "🎒", title: "Travel Light", tip: "Avoid carrying unnecessary luggage — a light bag makes every journey easier." },
  { icon: "📞", title: "Emergency Contacts", tip: "Save local emergency numbers (police: 100, ambulance: 108, tourist helpline: 1363)." },
  { icon: "🔒", title: "Secure Belongings", tip: "Use money belts or inner pockets in crowded markets and transit points." },
  { icon: "♻️", title: "Eco-Friendly Travel", tip: "Carry reusable bags and bottles. Avoid single-use plastic. Leave no trash behind." },
  { icon: "🔋", title: "Keep Devices Charged", tip: "Carry a power bank. Charge all devices fully the night before travel days." }
];
