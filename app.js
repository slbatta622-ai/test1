/**
 * ANCIENT PLACES OF SRI LANKA - Interactive Web Application Engine
 * Integrates: 240-Frame Canvas Scroll Engine with Velocity Blur,
 * Dynamic Destination Filtering, Interactive Modal Lightbox, and Booking Logic.
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. DESTINATION DATABASE (Rich Historical, Cultural & Tour Info)
       ========================================================================== */
    const DESTINATIONS_DATA = {
        sigiriya: {
            title: "Sigiriya Lion Rock Citadel (සීගිරිය)",
            category: "Ancient Citadel & UNESCO World Heritage",
            location: "Matale District, Central Province, Sri Lanka",
            image: "assets/sigiriya.jpg",
            duration: "3 - 4 Hours Climb",
            bestTime: "Early Morning (6:30 AM) or Late Afternoon (3:30 PM)",
            entryFee: "Foreign: $36 USD (Approx LKR 11,000) | Local: LKR 100",
            rating: "4.9 / 5.0 (1,420 Reviews)",
            description: "Built in the 5th century AD by King Kashyapa, Sigiriya (The Lion Rock) is an awe-inspiring ancient palace fortress perched atop a 200-meter sheer granite column. Renowned as the 'Eighth Wonder of the World', it features the world-famous colorful Sigiriya Frescoes (maidens of the clouds), the mirror wall with ancient poetic graffiti, giant carved lion paws at the terrace, and sophisticated landscaped water gardens with subterranean hydraulic mechanisms that still function during rainy seasons.",
            highlights: [
                "Climb 1,200 steps to the summit royal palace ruins",
                "View the ancient 5th-century celestial maiden frescoes",
                "Walk through symmetrical terraced and water gardens",
                "Panoramic 360-degree views of the surrounding jungle"
            ],
            dressCode: "Comfortable hiking clothes, breathable footwear, sun hat, and sunscreen.",
            price: "$45 / Person"
        },
        anuradhapura: {
            title: "Anuradhapura Sacred Kingdom (අනුරාධපුරය)",
            category: "Sacred Ancient Capital & UNESCO Heritage",
            location: "North Central Province, Sri Lanka",
            image: "assets/ruwanwelisaya.jpg",
            duration: "Full Day (6 - 8 Hours)",
            bestTime: "Year Round (Best at Sunrise & Evening Poya ceremonies)",
            entryFee: "Cultural Triangle Ticket: $30 USD",
            rating: "4.9 / 5.0 (980 Reviews)",
            description: "Established in the 4th century BC, Anuradhapura served as the glorious first capital of Sri Lanka for over a millennium. It is home to Ruwanwelisaya (the great white bubble-shaped stupa built by King Dutugemunu), the sacred Jaya Sri Maha Bodhi (the oldest recorded human-planted tree in the world, brought in 288 BC), the towering brick dome of Jetavanaramaya (once the 3rd tallest structure in the ancient world), Kuttam Pokuna (Twin Ponds), and the serenely carved Samadhi Buddha statue.",
            highlights: [
                "Worship at the 2,300+ year-old sacred Jaya Sri Maha Bodhi tree",
                "Marvel at the giant white architectural dome of Ruwanwelisaya",
                "Explore ancient monastic ruins, stone baths & moonstones",
                "Experience sacred Buddhist chanting and jasmine flower offerings"
            ],
            dressCode: "Modest white/light attire covering shoulders and knees. Remove hats and shoes at sacred stupa terraces.",
            price: "$55 / Person"
        },
        polonnaruwa: {
            title: "Polonnaruwa Medieval Kingdom (පොළොන්නරුව)",
            category: "Medieval Royal City & UNESCO Heritage",
            location: "North Central Province, Sri Lanka",
            image: "assets/polonnaruwa.jpg",
            duration: "4 - 5 Hours (Best explored by Bicycle or AC Car)",
            bestTime: "Morning (7:00 AM - 11:00 AM)",
            entryFee: "Foreign: $30 USD",
            rating: "4.8 / 5.0 (850 Reviews)",
            description: "The second great capital of ancient Sri Lanka from the 11th to 13th century. Polonnaruwa was a flourishing garden city with advanced engineering under King Parakramabahu I. Highlights include the Gal Vihara (four monumental Buddha statues carved out of a single granite rock face), the 7-story Royal Palace, the sacred Quadrangle (Vatadage, Hatadage), Rankoth Vehera, and the vast artificial sea known as Parakrama Samudra.",
            highlights: [
                "Inspect the masterfully carved granite statues of Gal Vihara",
                "Cycle along quiet shaded paths amidst ancient brick temples",
                "Witness the massive Parakrama Samudra man-made reservoir",
                "Explore the lotus-shaped stone ponds and council chambers"
            ],
            dressCode: "Shoulders and knees covered when entering sacred enclosures.",
            price: "$50 / Person"
        },
        dambulla: {
            title: "Dambulla Golden Cave Temple (දඹුල්ල)",
            category: "Living Cave Monastery & UNESCO Heritage",
            location: "Matale District, Central Province",
            image: "assets/dambulla.jpg",
            duration: "2 - 3 Hours",
            bestTime: "Morning or Late Afternoon",
            entryFee: "Foreign: $10 USD (Approx LKR 3,000)",
            rating: "4.9 / 5.0 (1,120 Reviews)",
            description: "Dambulla is the largest and most exceptionally preserved cave temple sanctuary in South Asia. Spanning five separate natural cavern sanctuaries under a massive overhanging rock, it contains 153 Buddha statues, statues of Sri Lankan kings, Hindu deities, and over 2,100 square meters of vibrant ceiling murals depicting Buddha's life and historical battles dating back over 22 centuries to King Valagamba.",
            highlights: [
                "Enter 5 expansive rock-cut sanctuary caves filled with golden statues",
                "Admire 2,100 m² of intricate ceiling and wall Buddhist frescoes",
                "Enjoy sweeping panoramic views of Sigiriya rock in the distance",
                "Visit the giant Golden Buddha statue at the foot of the rock"
            ],
            dressCode: "Shoulders and knees covered. Shoes must be deposited at the temple entrance.",
            price: "$35 / Person"
        },
        kandy: {
            title: "Temple of the Sacred Tooth Relic (ශ්‍රී දළදා මාළිගාව)",
            category: "Sacred Buddhist Shrine & Royal Complex",
            location: "Kandy, Central Highlands",
            image: "assets/kandy_temple.jpg",
            duration: "2 - 3 Hours",
            bestTime: "Daily Puja Ceremonies: 5:30 AM, 9:30 AM, or 6:30 PM",
            entryFee: "Foreign: $10 USD",
            rating: "4.9 / 5.0 (1,850 Reviews)",
            description: "Located within the royal palace complex of the former Kingdom of Kandy, Sri Dalada Maligawa is Sri Lanka's most venerated Buddhist temple. It safeguards the sacred left canine tooth of Gautama Buddha. The temple features golden canopy roofs, carved ivory and wooden pillars, traditional Kandyan drummers during daily Thevava rituals, and is the focal point of the world-renowned annual Esala Perahera festival.",
            highlights: [
                "Witness the traditional drumming and sacred casket viewing ceremony",
                "Walk around the picturesque Kandy Lake and Royal Audience Hall",
                "Visit the World Buddhist Museum located behind the shrine",
                "Stroll through royal botanical gardens nearby at Peradeniya"
            ],
            dressCode: "Strict white or light clothing covering shoulders and knees.",
            price: "$40 / Person"
        },
        galle: {
            title: "Galle Dutch Maritime Fort (ගාල්ල කොටුව)",
            category: "16th-Century Living Colonial Fortress",
            location: "Galle, Southern Coast",
            image: "assets/galle_fort.jpg",
            duration: "Half / Full Day",
            bestTime: "Afternoon & Sunset (3:30 PM - 6:30 PM)",
            entryFee: "Free Entry to Fort Ramparts & Streets",
            rating: "4.8 / 5.0 (1,340 Reviews)",
            description: "Founded by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, Galle Fort is an extraordinary living UNESCO heritage monument where heritage meets the azure Indian Ocean. Walk on ancient granite ramparts, see the iconic white lighthouse, visit old Dutch Reformed churches, and wander cobblestone alleys lined with boutique cafes, gem shops, and colonial villas.",
            highlights: [
                "Walk the oceanfront stone ramparts and watch the sunset at Flag Rock",
                "Photograph the iconic Galle Fort Lighthouse and Clock Tower",
                "Dine at authentic colonial heritage courtyards and seafood bistros",
                "Explore the Dutch Maritime Museum and Old Dutch Hospital precinct"
            ],
            dressCode: "Casual coastal attire.",
            price: "$50 / Person"
        },
        diyaluma: {
            title: "Diyaluma Waterfall & Infinity Pools (දියලුම ඇල්ල)",
            category: "Cascading Waterfall & Natural Swimming Pools",
            location: "Koslanda, Badulla District",
            image: "assets/diyaluma.jpg",
            duration: "4 - 5 Hours (Hike + Swim)",
            bestTime: "December to August (Dry/sunny days for safe swimming)",
            entryFee: "Free (Local trekking guide recommended for upper falls)",
            rating: "4.9 / 5.0 (760 Reviews)",
            description: "Standing at 220 meters, Diyaluma is the 2nd tallest waterfall in Sri Lanka. What sets Diyaluma apart is its series of upper clifftop tiered cascades and natural rock infinity plunge pools perched on the very edge of the abyss, giving thrill-seekers a world-class natural swimming experience with sweeping vistas of valleys below.",
            highlights: [
                "Hike through scenic rubber plantations and lemongrass hills",
                "Swim in crystal-clear natural infinity rock pools at the upper tiers",
                "Take iconic cliff-edge photos overlooking the valley",
                "Picnic by the cascading mountain river"
            ],
            dressCode: "Sturdy hiking shoes, swimwear, and dry change of clothes.",
            price: "$45 / Person"
        },
        dunhinda: {
            title: "Dunhinda 'Smoky' Waterfall (දුන්හිඳ ඇල්ල)",
            category: "Majestic Canyon Waterfall",
            location: "Badulla, Uva Province",
            image: "assets/dunhinda.jpg",
            duration: "2 - 3 Hours Hike",
            bestTime: "June to October & Post-monsoon",
            entryFee: "LKR 500 (Foreign) | LKR 50 (Local)",
            rating: "4.8 / 5.0 (620 Reviews)",
            description: "Dunhinda is widely regarded as one of Sri Lanka's most beautiful and dramatic waterfalls. Plummeting 64 meters into a massive rock canyon, it gets its name 'Dunhinda' (Smoky mist) from the thick veil of spray vapor it generates. The 1.5 km walking trail to the falls is an adventure through dense jungle accompanied by wild butterflies, monkeys, and exotic birds.",
            highlights: [
                "Scenic jungle canopy footpath with mountain river views",
                "Spectacular viewpoint of the roaring smoky plume",
                "Encounter endemic birds and primates along the trail",
                "Taste traditional herbal drinks (Belimal / Kithul jaggery) from local stalls"
            ],
            dressCode: "Comfortable walking shoes with good grip (path can be slippery).",
            price: "$35 / Person"
        },
        ravana: {
            title: "Ravana Falls & Mythological Caves (රාවණා ඇල්ල)",
            category: "Legendary Mountain Cataract & Caves",
            location: "Ella, Badulla District",
            image: "assets/ravana_falls.jpg",
            duration: "1 - 2 Hours",
            bestTime: "Morning or Afternoon on the Ella - Wellawaya road",
            entryFee: "Free access at roadside viewpoint",
            rating: "4.7 / 5.0 (910 Reviews)",
            description: "Dropping 25 meters across concave limestone rock tiers, Ravana Falls is one of the widest waterfalls in Sri Lanka. It is deeply entwined with the epic Ramayana legend, named after the legendary ten-headed King Ravana who is believed to have hidden Princess Sita in the subterranean cave chambers situated behind the waterfall.",
            highlights: [
                "Easy roadside access right on the scenic Ella mountain pass",
                "Explore the nearby Ravana Cave and Nil Diya Pokuna underground pool",
                "Combine with Ella Rock hike and Nine Arch Bridge train crossing",
                "Enjoy chilled fresh king coconuts from roadside vendors"
            ],
            dressCode: "Casual travel wear.",
            price: "$30 / Person"
        },
        bambarakanda: {
            title: "Bambarakanda Waterfall (බඹරකන්ද ඇල්ල)",
            category: "Sri Lanka's Tallest Waterfall (263m)",
            location: "Kalupahana, Central Highlands",
            image: "assets/bambarakanda.jpg",
            duration: "3 - 4 Hours",
            bestTime: "September to March (Full flow seasons)",
            entryFee: "LKR 150",
            rating: "4.8 / 5.0 (540 Reviews)",
            description: "Soaring at a staggering height of 263 meters (863 feet), Bambarakanda is the highest waterfall on the island. Fed by the Kuda Oya tributary of the Walawe River, it plunges like a white ribbon through a dramatic evergreen pine forest gorge.",
            highlights: [
                "Hike through fragrant pine forest trails to the base pool",
                "Trek to the upper falls and hidden Lanka Ella waterfall nearby",
                "Peaceful, secluded environment away from mass tourism",
                "Superb landscape and drone photography opportunities"
            ],
            dressCode: "Hiking boots and light rain jacket.",
            price: "$40 / Person"
        },
        sinharaja: {
            title: "Sinharaja Virgin Rain Forest (සිංහරාජය)",
            category: "UNESCO World Biosphere & Primary Tropical Rainforest",
            location: "Sabaragamuwa & Southern Provinces",
            image: "assets/sinharaja.jpg",
            duration: "Full Day (4 - 7 Hours Trek)",
            bestTime: "December to April & August to September (Driest months)",
            entryFee: "Foreign: $12 USD + Mandatory Certified Forest Guide Fee",
            rating: "4.9 / 5.0 (1,280 Reviews)",
            description: "Sinharaja is Sri Lanka's last remaining undisturbed primary tropical rainforest, designated as a UNESCO World Heritage Site and Biosphere Reserve. Over 60% of the trees are endemic and it is home to 21 out of 26 endemic bird species, rare reptiles, vibrant tree frogs, giant lianas, and untouched crystal clear streams.",
            highlights: [
                "Experience the famous 'Mixed-Species Bird Flocks' phenomenon",
                "Spot the Blue Magpie, Red-faced Malkoha & Green Pit Viper",
                "Trek to secluded jungle waterfalls and dip in clear spring pools",
                "Learn about ancient medicinal rainforest plants from expert naturalists"
            ],
            dressCode: "Leech socks, lightweight long trousers, rain poncho, and insect repellent.",
            price: "$60 / Person"
        },
        knuckles: {
            title: "Knuckles Conservation Forest (නකල්ස් කඳුවැටිය)",
            category: "UNESCO Cloud Forest & High-Altitude Wilderness",
            location: "Matale and Kandy Districts",
            image: "assets/knuckles.jpg",
            duration: "1 - 2 Days Trekking Expeditions",
            bestTime: "January to April & June to September",
            entryFee: "Forest Permit: $10 USD",
            rating: "4.9 / 5.0 (890 Reviews)",
            description: "Named for its resemblance to the clenched knuckles of a human fist, this mountain range encompasses 34 peaks rising above 1,500m. It represents all climatic zones of the island—from dry plains to montane cloud forests shrouded in perpetual mist.",
            highlights: [
                "Trek across dramatic mountain ridges with panoramic cloud views",
                "Visit traditional secluded mountain villages like Meemure",
                "Swim in hidden river pools and natural waterfalls",
                "Camp under brilliant star-filled mountain night skies"
            ],
            dressCode: "Trail hiking boots, thermal layers for cool nights, rain gear.",
            price: "$75 / Person"
        },
        horton: {
            title: "Horton Plains & World's End (හෝර්ටන් තැන්න)",
            category: "High-Altitude Montane Plateau & Cloud Forest",
            location: "Nuwara Eliya, Central Highlands",
            image: "assets/horton_plains.jpg",
            duration: "4 - 5 Hours (9.5 km circular trail)",
            bestTime: "Early Morning (Must arrive before 9:00 AM for World's End visibility)",
            entryFee: "Foreign: Approx $35 USD",
            rating: "4.9 / 5.0 (1,650 Reviews)",
            description: "Perched 2,100 meters above sea level in the misty highlands, Horton Plains is a dramatic plateau of windswept grasslands, stunted pygmy cloud forests, and crystal montane streams. The key highlight is 'World's End', an astonishing 870-meter sheer cliff drop with vistas stretching all the way to the southern coastline.",
            highlights: [
                "Stand at the edge of the 870m sheer vertical drop at World's End",
                "Encounter herds of majestic wild Sambar Deer grazing peacefully",
                "Visit the cascading Baker's Falls along the circular hiking trail",
                "Crisp cool mountain breeze and unique highland vegetation"
            ],
            dressCode: "Warm sweater/jacket for early morning, walking shoes. No plastic bags allowed inside.",
            price: "$65 / Person"
        },
        yala: {
            title: "Yala National Park (යාල වනෝද්‍යානය)",
            category: "Premier Wildlife Sanctuary & Leopard Safari",
            location: "Southern & Uva Provinces",
            image: "assets/yala.jpg",
            duration: "Half Day (Morning: 6 AM - 10 AM / Afternoon: 2:30 PM - 6 PM)",
            bestTime: "February to July (Leopard spotting season)",
            entryFee: "Park Entry + 4x4 Luxury Safari Jeep with Driver/Tracker",
            rating: "4.9 / 5.0 (2,100 Reviews)",
            description: "Yala is world-renowned for having the highest density of wild leopards (Panthera pardus kotiya) on Earth. Combining coastal lagoons, savannah scrubland, and rocky outcrops, it provides exhilarating safari encounters with Sri Lankan elephants, sloth bears, marsh crocodiles, and over 215 bird species.",
            highlights: [
                "Thrilling 4x4 open-top safari game drive with expert tracker",
                "High probability of wild leopard and sloth bear sightings",
                "Watch herds of Asian elephants bathing in natural waterholes",
                "Spectacular coastal sand dunes and Indian Ocean beach viewpoints"
            ],
            dressCode: "Neutral/khaki clothing, sun hat, sunglasses, binoculars, and camera with zoom lens.",
            price: "$70 / Person"
        }
    };

    /* ==========================================================================
       2. CANVAS 240-FRAME SCROLL SEQUENCE ENGINE (WITH VELOCITY MOTION BLUR)
       ========================================================================== */
    const TOTAL_FRAMES = 240;
    const FRAME_PREFIX = 'image/ezgif-frame-';
    const FRAME_EXT = '.jpg';
    const LERP_FACTOR = 0.12;
    const MAX_BLUR = 5.0;

    const canvas = document.getElementById('sequence-canvas');
    const ctx = canvas.getContext('2d', { alpha: false });
    const preloader = document.getElementById('preloader');
    const loaderPercent = document.getElementById('loader-percent');
    const loaderBar = document.getElementById('loader-bar');
    const ringProgress = document.getElementById('ring-progress');
    const scrollTrack = document.getElementById('scroll-track');
    const heroContent = document.getElementById('hero-overlay-content');
    const scrollHint = document.getElementById('scroll-hint');
    const floatingDock = document.getElementById('floating-dock');
    const dockProgressBar = document.getElementById('dock-progress-bar');
    const dockProgressWrapper = document.getElementById('dock-progress-wrapper');
    const frameCounter = document.getElementById('frame-counter');
    const autoplayBtn = document.getElementById('autoplay-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');

    const images = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let targetFrame = 0;
    let currentFrame = 0;
    let lastRenderedFrame = -1;
    let currentBlur = 0;
    let isAutoplaying = false;
    let autoplayDir = 1;
    let isSeeking = false;

    function padIndex(index) {
        return String(index).padStart(3, '0');
    }

    function getFrameUrl(index) {
        return `${FRAME_PREFIX}${padIndex(index + 1)}${FRAME_EXT}`;
    }

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        const frameToRender = Math.round(currentFrame);
        if (images[frameToRender] && images[frameToRender].complete) {
            renderFrame(frameToRender, currentBlur);
        }
    }

    function renderFrame(frameIndex, blurAmount = 0) {
        const img = images[frameIndex];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(vw / iw, vh / ih);
        const rw = iw * scale;
        const rh = ih * scale;
        const ox = (vw - rw) / 2;
        const oy = (vh - rh) / 2;

        if (blurAmount > 0.3) {
            ctx.filter = `blur(${blurAmount.toFixed(1)}px)`;
        } else {
            ctx.filter = 'none';
        }

        ctx.drawImage(img, ox, oy, rw, rh);
        ctx.filter = 'none';

        lastRenderedFrame = frameIndex;
    }

    function tick() {
        if (isAutoplaying) {
            targetFrame += autoplayDir * 0.4;
            if (targetFrame >= TOTAL_FRAMES - 1) {
                targetFrame = TOTAL_FRAMES - 1;
                autoplayDir = -1;
            } else if (targetFrame <= 0) {
                targetFrame = 0;
                autoplayDir = 1;
            }

            const trackHeight = scrollTrack.offsetHeight;
            if (trackHeight > 0) {
                const scrollProgress = targetFrame / (TOTAL_FRAMES - 1);
                window.scrollTo({ top: scrollProgress * trackHeight, behavior: 'instant' });
            }
        }

        const delta = targetFrame - currentFrame;
        currentFrame += delta * LERP_FACTOR;

        const velocity = Math.abs(delta);
        const targetBlur = Math.min(velocity * 0.5, MAX_BLUR);
        currentBlur += (targetBlur - currentBlur) * 0.25;

        const frameToDraw = Math.min(Math.max(Math.round(currentFrame), 0), TOTAL_FRAMES - 1);

        if (frameToDraw !== lastRenderedFrame || currentBlur > 0.2) {
            renderFrame(frameToDraw, currentBlur);
            updateHUD(frameToDraw);
        }

        requestAnimationFrame(tick);
    }

    function updateHUD(frameIndex) {
        const percent = (frameIndex / (TOTAL_FRAMES - 1)) * 100;
        if (dockProgressBar) dockProgressBar.style.width = `${percent.toFixed(1)}%`;
        if (frameCounter) frameCounter.textContent = `FRAME ${padIndex(frameIndex + 1)} / ${TOTAL_FRAMES}`;
    }

    function handleScroll() {
        if (isAutoplaying) return;

        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const trackHeight = scrollTrack ? scrollTrack.offsetHeight : window.innerHeight * 2;

        if (scrollTop <= trackHeight) {
            const fraction = Math.max(0, Math.min(scrollTop / trackHeight, 1));
            targetFrame = fraction * (TOTAL_FRAMES - 1);

            // Fade Hero Overlay smoothly as you scroll into track
            if (heroContent) {
                const opacity = Math.max(0, 1 - (scrollTop / (window.innerHeight * 0.9)));
                heroContent.style.opacity = opacity;
                heroContent.style.pointerEvents = opacity < 0.2 ? 'none' : 'auto';
            }

            if (floatingDock) {
                floatingDock.style.opacity = '1';
                floatingDock.style.pointerEvents = 'auto';
            }

            if (scrollHint) {
                if (scrollTop > 30) scrollHint.style.opacity = '0';
                else scrollHint.style.opacity = '0.85';
            }
        } else {
            // Once user scrolls past the hero sequence into destination sections
            targetFrame = TOTAL_FRAMES - 1;
            if (heroContent) {
                heroContent.style.opacity = '0';
                heroContent.style.pointerEvents = 'none';
            }
            if (floatingDock) {
                floatingDock.style.opacity = '0';
                floatingDock.style.pointerEvents = 'none';
            }
        }
    }

    function preloadImages() {
        const circumference = 2 * Math.PI * 42;
        if (ringProgress) {
            ringProgress.style.strokeDasharray = circumference;
            ringProgress.style.strokeDashoffset = circumference;
        }

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFrameUrl(i);

            img.onload = () => {
                loadedCount++;
                const progress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
                if (loaderPercent) loaderPercent.textContent = `${progress}%`;
                if (loaderBar) loaderBar.style.width = `${progress}%`;
                if (ringProgress) {
                    const offset = circumference - (progress / 100) * circumference;
                    ringProgress.style.strokeDashoffset = offset;
                }

                if (i === 0) renderFrame(0, 0);

                if (loadedCount >= TOTAL_FRAMES) {
                    setTimeout(() => {
                        if (preloader) preloader.classList.add('hidden');
                        renderFrame(0, 0);
                        updateHUD(0);
                    }, 300);
                }
            };

            img.onerror = () => {
                loadedCount++;
                if (loadedCount >= TOTAL_FRAMES && preloader) {
                    preloader.classList.add('hidden');
                }
            };

            images[i] = img;
        }
    }

    function toggleAutoplay(forceState) {
        isAutoplaying = typeof forceState === 'boolean' ? forceState : !isAutoplaying;
        if (isAutoplaying) {
            if (playIcon) playIcon.classList.add('hidden');
            if (pauseIcon) pauseIcon.classList.remove('hidden');
        } else {
            if (playIcon) playIcon.classList.remove('hidden');
            if (pauseIcon) pauseIcon.classList.add('hidden');
        }
    }

    function handleSeek(e) {
        if (!dockProgressWrapper || !scrollTrack) return;
        const rect = dockProgressWrapper.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (clientX === undefined) return;

        const fraction = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1));
        const trackHeight = scrollTrack.offsetHeight;

        toggleAutoplay(false);
        window.scrollTo({ top: fraction * trackHeight, behavior: 'auto' });
        targetFrame = fraction * (TOTAL_FRAMES - 1);
    }

    /* ==========================================================================
       3. FILTER & SEARCH ENGINE
       ========================================================================== */
    function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.destination-card');
        const searchInput = document.getElementById('dest-search');

        function applyFilter() {
            const activeBtn = document.querySelector('.filter-btn.active');
            const selectedCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const snippet = card.querySelector('.card-snippet').textContent.toLowerCase();
                const location = card.querySelector('.card-location').textContent.toLowerCase();

                const matchesCategory = (selectedCategory === 'all' || category === selectedCategory);
                const matchesSearch = query === '' || title.includes(query) || snippet.includes(query) || location.includes(query);

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilter();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', applyFilter);
        }
    }

    /* ==========================================================================
       4. INTERACTIVE DESTINATION MODAL LIGHTBOX
       ========================================================================== */
    const modal = document.getElementById('detail-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    function openModal(destId) {
        const data = DESTINATIONS_DATA[destId];
        if (!data || !modalContent || !modal) return;

        const highlightsHtml = data.highlights.map(h => `<li><i class="fas fa-check text-gold"></i> ${h}</li>`).join('');

        modalContent.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="modal-hero-img">
            <div class="modal-body">
                <div class="modal-header-meta">
                    <span class="gold-pill"><i class="fas fa-map-marker-alt"></i> ${data.location}</span>
                    <span class="badge-gold"><i class="fas fa-star"></i> ${data.rating}</span>
                </div>

                <h2 class="modal-title">${data.title}</h2>

                <div class="modal-highlights-grid">
                    <div class="modal-hl-item">
                        <span class="modal-hl-label">Recommended Duration</span>
                        <span class="modal-hl-val">${data.duration}</span>
                    </div>
                    <div class="modal-hl-item">
                        <span class="modal-hl-label">Best Visiting Time</span>
                        <span class="modal-hl-val">${data.bestTime}</span>
                    </div>
                    <div class="modal-hl-item">
                        <span class="modal-hl-label">Entry Permit / Fee</span>
                        <span class="modal-hl-val">${data.entryFee}</span>
                    </div>
                </div>

                <div class="modal-description">
                    <p>${data.description}</p>
                </div>

                <div class="modal-hl-section">
                    <h4 style="font-family: var(--font-heading); color: #fff; margin-bottom: 8px;">Key Highlights & Experiences</h4>
                    <ul class="package-features" style="margin-bottom: 0;">
                        ${highlightsHtml}
                    </ul>
                </div>

                <div class="modal-dress-code" style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--gold-primary); padding: 10px 14px; border-radius: 4px; font-size: 0.85rem; color: #e2e8f0;">
                    <strong><i class="fas fa-info-circle text-gold"></i> Visitor Guidelines:</strong> ${data.dressCode}
                </div>

                <div class="modal-actions">
                    <div>
                        <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Private Guided Tour</span>
                        <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--gold-light);">${data.price}</div>
                    </div>
                    <button class="btn btn-primary-gold" id="modal-book-btn" data-title="${data.title}">
                        <i class="fas fa-calendar-check"></i> Book Tour For This Place
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Connect book button inside modal
        const bookBtn = document.getElementById('modal-book-btn');
        if (bookBtn) {
            bookBtn.addEventListener('click', () => {
                closeModal();
                selectDestinationAndScroll(destId);
            });
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function selectDestinationAndScroll(destKey) {
        const destSelect = document.getElementById('form-destination');
        const data = DESTINATIONS_DATA[destKey];
        if (destSelect && data) {
            // Find option matching title keyword
            for (let i = 0; i < destSelect.options.length; i++) {
                if (destSelect.options[i].text.toLowerCase().includes(destKey.toLowerCase()) || 
                    data.title.toLowerCase().includes(destSelect.options[i].value.toLowerCase())) {
                    destSelect.selectedIndex = i;
                    break;
                }
            }
        }

        const contactSec = document.getElementById('contact');
        if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
        }
        showToast(`Selected "${data ? data.title : 'Destination'}". Complete the form below to inquire!`);
    }

    function initModals() {
        // Event delegation for "Explore Details" buttons
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.view-details-btn');
            if (btn) {
                const id = btn.getAttribute('data-id');
                openModal(id);
            }
        });

        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    /* ==========================================================================
       5. PACKAGE SELECTION & BOOKING FORM
       ========================================================================== */
    function initBooking() {
        // Package select buttons
        const pkgBtns = document.querySelectorAll('.select-package-btn');
        pkgBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pkgName = btn.getAttribute('data-pkg');
                const destSelect = document.getElementById('form-destination');
                if (destSelect && pkgName) {
                    for (let i = 0; i < destSelect.options.length; i++) {
                        if (destSelect.options[i].value.includes(pkgName) || destSelect.options[i].text.includes(pkgName)) {
                            destSelect.selectedIndex = i;
                            break;
                        }
                    }
                }
                showToast(`Package selected: ${pkgName}`);
            });
        });

        // Booking Form Submission
        const form = document.getElementById('booking-form');
        const successBox = document.getElementById('form-success');
        const submitBtn = document.getElementById('form-submit-btn');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('form-name').value;
                const email = document.getElementById('form-email').value;
                const phone = document.getElementById('form-phone').value;
                const dest = document.getElementById('form-destination').value;

                if (!name || !email || !phone || !dest) {
                    showToast('Please fill out all required fields.');
                    return;
                }

                // Simulate loading state
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Inquiry...';
                }

                setTimeout(() => {
                    form.classList.add('hidden');
                    if (successBox) successBox.classList.remove('hidden');
                    showToast(`Thank you ${name}! Inquiry submitted successfully.`);
                }, 1000);
            });
        }
    }

    /* ==========================================================================
       6. MOBILE MENU & TOAST NOTIFICATION
       ========================================================================== */
    function initMobileMenu() {
        const toggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        const links = document.querySelectorAll('.nav-link');

        if (toggle && navMenu) {
            toggle.addEventListener('click', () => {
                navMenu.classList.toggle('open');
            });
        }

        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) navMenu.classList.remove('open');
            });
        });
    }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.innerHTML = `<i class="fas fa-info-circle text-gold"></i> <span>${msg}</span>`;
        toast.classList.remove('hidden');
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 300);
        }, 4000);
    }

    /* ==========================================================================
       7. INITIALIZE EVERYTHING
       ========================================================================== */
    function init() {
        resizeCanvas();
        preloadImages();
        tick();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', resizeCanvas);

        if (dockProgressWrapper) {
            dockProgressWrapper.addEventListener('click', handleSeek);
            dockProgressWrapper.addEventListener('mousedown', () => isSeeking = true);
            window.addEventListener('mousemove', (e) => { if (isSeeking) handleSeek(e); });
            window.addEventListener('mouseup', () => isSeeking = false);
        }

        if (autoplayBtn) {
            autoplayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleAutoplay();
            });
        }

        initFilters();
        initModals();
        initBooking();
        initMobileMenu();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
