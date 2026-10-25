/**
 * TerraBloom Integrated Farms - Main Corporate JavaScript
 * Location: Plot 1-6 Freedom Way, Lagos-Ibadan Expressway, Nigeria
 * Optimised for Desktop, Tablet & Mobile Experiences
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. Mobile Drawer Navigation
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-nav-item a');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ==========================================================================
  // 2. Header Scroll Elevation & Scrollspy
  // ==========================================================================
  const headerWrapper = document.getElementById('headerWrapper');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerWrapper?.classList.add('scrolled');
    } else {
      headerWrapper?.classList.remove('scrolled');
    }

    // Scrollspy
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ==========================================================================
  // 3. Core Integrated Divisions Tab Switching
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.division-tab-btn');
  const tabPanes = document.querySelectorAll('.division-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetDivision = btn.getAttribute('data-division');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetDivision}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 4. Wholesale Produce Catalog & Live Quote Request System
  // ==========================================================================
  const products = [
    // --- Fresh Tubers & Root Crops ---
    {
      id: 'tuber-1',
      name: 'Export-Grade Nigerian White Yams (Abuja / Pona)',
      category: 'tubers',
      categoryLabel: 'Tubers & Roots',
      spec: 'Premium hand-selected, dry-brushed unblemished white yams (2.5kg – 4.5kg per tuber). Packaged in 50-tuber ventilated crates for export and supermarkets.',
      priceNGN: 145000,
      priceUSD: 95.00,
      unit: 'per 50-tuber crate',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-cubes'
    },
    {
      id: 'tuber-2',
      name: 'Bio-Fortified Orange-Fleshed Sweet Potatoes (OFSP)',
      category: 'tubers',
      categoryLabel: 'Tubers & Roots',
      spec: 'Pro-Vitamin A rich, high-sugar content fresh sweet potato tubers harvested from raised sandy beds. Packed in 50kg aerated polypropylene bags.',
      priceNGN: 28500,
      priceUSD: 19.00,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-carrot'
    },
    {
      id: 'tuber-3',
      name: 'Fresh High-Starch Cassava Roots (TME 419)',
      category: 'tubers',
      categoryLabel: 'Tubers & Roots',
      spec: 'Same-day harvested disease-free industrial cassava tubers with >28% dry starch content. Optimized for garri, fufu, and industrial ethanol/starch processing.',
      priceNGN: 120000,
      priceUSD: 80.00,
      unit: 'per Metric Ton (1,000kg)',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-boxes-stacked'
    },
    {
      id: 'tuber-4',
      name: 'Grade A Fresh Irish Table Potatoes (Jos Plateau / Cold-Stored)',
      category: 'tubers',
      categoryLabel: 'Tubers & Roots',
      spec: 'Firm, smooth-skinned washed table potatoes graded for quick-service restaurant fries, hotels, and retail packaging. 25kg bags.',
      priceNGN: 36000,
      priceUSD: 24.00,
      unit: 'per 25kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-circle-dot'
    },
    {
      id: 'tuber-5',
      name: 'Certified Seed Yam Setts (Sprouted Planting Tubers)',
      category: 'tubers',
      categoryLabel: 'Tubers & Seedlings',
      spec: 'Fungicide-treated, sprouted clean seed yam setts ready for immediate field planting with high multiplication ratio. Bag of 100 seed setts.',
      priceNGN: 55000,
      priceUSD: 36.50,
      unit: 'per 100 seed setts',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-seedling'
    },

    // --- Greenhouse Vegetables ---
    {
      id: 'prod-1',
      name: 'Dutch Sweet Bell Peppers (Grade A Tri-Color)',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Grade A Red, Yellow & Orange Bell Peppers cultivated in climate-controlled hydroponic greenhouses. Packaged in 10kg export crates.',
      priceNGN: 24000,
      priceUSD: 16.00,
      unit: 'per 10kg crate',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-pepper-hot'
    },
    {
      id: 'prod-2',
      name: 'Vine-Ripened Dutch Tomatoes (Plum & Beefsteak)',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Hydroponic firm plum & beefsteak tomatoes with long 21-day shelf-life, thick pericarp, and high Brix sweetness. 25kg wooden crate.',
      priceNGN: 32000,
      priceUSD: 21.50,
      unit: 'per 25kg crate',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-leaf'
    },
    {
      id: 'veg-3',
      name: 'Crisp English Seedless Cucumbers',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Individually wrapped, uniform greenhouse-grown cucumbers with thin tender skin and zero bitterness. 15kg ventilated carton.',
      priceNGN: 18500,
      priceUSD: 12.50,
      unit: 'per 15kg crate',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-leaf'
    },
    {
      id: 'veg-4',
      name: 'Fresh Scotch Bonnet & Habanero Peppers (Yellow & Red)',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Aromatic, ultra-piquant capsicum peppers with high capsaicin content. Hand-sorted in 10kg aerated harvest baskets.',
      priceNGN: 26000,
      priceUSD: 17.50,
      unit: 'per 10kg basket',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-pepper-hot'
    },
    {
      id: 'veg-5',
      name: 'Hydroponic Butterhead & Romaine Lettuce',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Nutrient Film Technique (NFT) hydroponic salad greens, harvested roots-on for 14-day crispness. Carton of 20 heads.',
      priceNGN: 22000,
      priceUSD: 14.50,
      unit: 'per 20-head carton',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-seedling'
    },
    {
      id: 'veg-6',
      name: 'Fresh Culinary Herb Assortment (Sweet Basil, Rosemary & Mint)',
      category: 'vegetables',
      categoryLabel: 'Greenhouse Horticulture',
      spec: 'Gourmet fresh-cut culinary herbs for hotel restaurants and food manufacturers. Delivered in 5kg insulated cold-pack containers.',
      priceNGN: 16000,
      priceUSD: 10.50,
      unit: 'per 5kg cold-pack',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-spa'
    },

    // --- Commercial Poultry & Eggs ---
    {
      id: 'prod-3',
      name: 'Farm Fresh Table Eggs (Jumbo Golden-Yolk)',
      category: 'poultry',
      categoryLabel: 'Commercial Poultry',
      spec: 'Golden-yolk farm brown eggs, graded & sanitised from automated bio-secure poultry houses. 30 eggs per crate (Minimum 50 crates).',
      priceNGN: 5200,
      priceUSD: 3.50,
      unit: 'per 30-egg crate',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-egg'
    },
    {
      id: 'prod-4',
      name: 'Fresh Dressed Whole Broilers (Blast-Frozen 1.8–2.2kg)',
      category: 'poultry',
      categoryLabel: 'Commercial Poultry',
      spec: '1.8kg – 2.2kg bio-secure oven-ready blast-frozen whole chicken. Packaged in 10-piece master cartons.',
      priceNGN: 48000,
      priceUSD: 32.00,
      unit: 'per 10-bird carton',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-drumstick-bite'
    },
    {
      id: 'poultry-3',
      name: 'Prime Boneless Chicken Breast Fillets',
      category: 'poultry',
      categoryLabel: 'Commercial Poultry',
      spec: 'Skinless, boneless blast-frozen chicken fillets for supermarket shelves and restaurant kitchens. Packed in 10kg master cartons.',
      priceNGN: 42000,
      priceUSD: 28.00,
      unit: 'per 10kg carton',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-drumstick-bite'
    },
    {
      id: 'poultry-4',
      name: 'Fresh Chicken Thigh & Drumstick Portions',
      category: 'poultry',
      categoryLabel: 'Commercial Poultry',
      spec: 'Individually quick-frozen (IQF) chicken legs, portions, and drumsticks. Clean cuts with zero antibiotic residue. 10kg carton.',
      priceNGN: 39500,
      priceUSD: 26.00,
      unit: 'per 10kg carton',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-drumstick-bite'
    },
    {
      id: 'poultry-5',
      name: 'Table Eggs Commercial Wholesale Pallet (900 Eggs)',
      category: 'poultry',
      categoryLabel: 'Commercial Poultry',
      spec: 'Wholesale pallet consignment of 30 master crates (900 jumbo eggs), shrink-wrapped with corner boards for safe logistics.',
      priceNGN: 150000,
      priceUSD: 99.00,
      unit: 'per pallet (30 crates)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-egg'
    },

    // --- Day-Old & Brooded Chicks ---
    {
      id: 'chick-1',
      name: 'Day-Old Broiler Chicks (Ross 308 / Cobb 500)',
      category: 'chicks',
      categoryLabel: 'Commercial Hatchery',
      spec: 'Hatchery-vaccinated (Marek’s & Newcastle), vigorous day-old broiler chicks with high feed conversion ratio. Carton of 50 chicks + 1 bonus.',
      priceNGN: 42500,
      priceUSD: 28.00,
      unit: 'per carton (50 chicks)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-feather'
    },
    {
      id: 'chick-2',
      name: 'Day-Old Layer Pullets (Isa Brown)',
      category: 'chicks',
      categoryLabel: 'Commercial Hatchery',
      spec: 'High-yield commercial egg layer chicks (320+ eggs/cycle). Clean parent-stock line, sexed and vaccinated. Carton of 50 chicks.',
      priceNGN: 47500,
      priceUSD: 31.50,
      unit: 'per carton (50 chicks)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-egg'
    },
    {
      id: 'chick-3',
      name: '2-Weeks Brooded Broiler Chicks (Heat-Weaned)',
      category: 'chicks',
      categoryLabel: 'Brooded Poultry',
      spec: '14-day fully brooded, heat-weaned and vaccinated (Gumboro 1 & 2, Lasota). High survival rate, zero brooding equipment required.',
      priceNGN: 34000,
      priceUSD: 22.50,
      unit: 'per pack (20 birds)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-drumstick-bite'
    },
    {
      id: 'chick-4',
      name: '2-Weeks Brooded Layer Pullets (Disease-Resistant)',
      category: 'chicks',
      categoryLabel: 'Brooded Poultry',
      spec: '14-day active layer pullets, de-beaked, fortified with probiotics, and fully vaccinated. Ready for immediate grower feeding.',
      priceNGN: 38000,
      priceUSD: 25.00,
      unit: 'per pack (20 birds)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-feather'
    },
    {
      id: 'chick-5',
      name: 'Day-Old Broad-Breasted White Turkey Poults (Nicholas White)',
      category: 'chicks',
      categoryLabel: 'Commercial Hatchery',
      spec: 'Rapid-growth commercial turkey poults with high breast meat yield and verified pedigree vaccination. Carton of 25 poults.',
      priceNGN: 58000,
      priceUSD: 38.50,
      unit: 'per carton (25 poults)',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-dove'
    },

    // --- Livestock & Cattle Ranching ---
    {
      id: 'prod-5',
      name: 'Pedigree Boran / Friesian Beef Cattle (380kg–480kg)',
      category: 'livestock',
      categoryLabel: 'Livestock Ranching',
      spec: 'Grass-fed and grain-finished steers (380kg – 480kg live weight), veterinary certified with RFID tag and inoculation passport.',
      priceNGN: 850000,
      priceUSD: 565.00,
      unit: 'per head live weight',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-cow'
    },
    {
      id: 'prod-6',
      name: 'South African Boer Goat Breeders',
      category: 'livestock',
      categoryLabel: 'Livestock Ranching',
      spec: 'High-fertility, purebred breeding bucks and does with pedigree vaccination records and fast weight gain genetics.',
      priceNGN: 220000,
      priceUSD: 145.00,
      unit: 'per breeding head',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-paw'
    },
    {
      id: 'live-3',
      name: 'Pasture-Grazed West African Dwarf Premium Sheep / Rams',
      category: 'livestock',
      categoryLabel: 'Livestock Ranching',
      spec: 'Naturally grazed, robust healthy rams and sheep for festive occasions, institutional catering, and breeding. 35kg–50kg.',
      priceNGN: 115000,
      priceUSD: 76.00,
      unit: 'per live head',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-paw'
    },
    {
      id: 'live-4',
      name: 'Weaned Dairy Heifers (Friesian Cross Genetic Line)',
      category: 'livestock',
      categoryLabel: 'Livestock Ranching',
      spec: '6-8 month weaned dairy heifers acclimated to Nigerian tropical humidity with high daily milk potential.',
      priceNGN: 480000,
      priceUSD: 320.00,
      unit: 'per head',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-cow'
    },

    // --- Field Grains & Industrial Staples ---
    {
      id: 'prod-7',
      name: 'Hybrid Yellow Milling Maize (Aflatoxin-Free)',
      category: 'grains',
      categoryLabel: 'Commercial Crops',
      spec: 'Cleaned, moisture-tested (<12%), aflatoxin-free maize for industrial milling, breweries, and livestock feed formulations.',
      priceNGN: 46000,
      priceUSD: 30.50,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-wheat-awn'
    },
    {
      id: 'prod-8',
      name: 'Premium High-Protein Non-GMO Soybeans',
      category: 'grains',
      categoryLabel: 'Commercial Crops',
      spec: 'High protein content (>38%), machine-cleaned and double-bagged for export, edible oil extraction, or soybean meal.',
      priceNGN: 54000,
      priceUSD: 36.00,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-seedling'
    },
    {
      id: 'prod-9',
      name: 'Cold-Pressed High-Grade Cassava Flour (HQCF)',
      category: 'grains',
      categoryLabel: 'Commercial Crops',
      spec: 'Standard industrial grade wheat-substitute flour for bakery and starch manufacturing with low cyanogenic potential.',
      priceNGN: 38000,
      priceUSD: 25.00,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-box'
    },
    {
      id: 'grain-4',
      name: 'Industrial White Sorghum Grain (Brewery Grade)',
      category: 'grains',
      categoryLabel: 'Commercial Crops',
      spec: 'Cleaned white sorghum with high starch conversion rate, low tannin, and lab moisture compliance for beverage processors.',
      priceNGN: 44000,
      priceUSD: 29.00,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-wheat-awn'
    },
    {
      id: 'grain-5',
      name: 'Stone-Free Parboiled Rice (TerraBloom Gold Reserve)',
      category: 'grains',
      categoryLabel: 'Commercial Crops',
      spec: 'Long-grain parboiled polished rice, 100% destoned, sorted with optical color-sorters and packed in sealed 50kg bags.',
      priceNGN: 78000,
      priceUSD: 52.00,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-bowl-rice'
    },

    // --- Improved Seeds & Inputs ---
    {
      id: 'seed-1',
      name: 'Certified Hybrid Maize Seeds (SAMMAZ 15 / 16)',
      category: 'seeds',
      categoryLabel: 'Improved Seeds',
      spec: 'Drought-tolerant, striga-resistant yellow/white hybrid maize seeds with >6MT/ha yield potential. 98% laboratory germination rate.',
      priceNGN: 19500,
      priceUSD: 13.00,
      unit: 'per 5kg certified bag',
      inStock: true,
      image: 'assets/hybrid-farm-operations.png',
      fallbackIcon: 'fa-wheat-awn'
    },
    {
      id: 'seed-2',
      name: 'Dutch F1 Hybrid Sweet Bell Pepper Seeds',
      category: 'seeds',
      categoryLabel: 'Improved Seeds',
      spec: 'Imported high-vigor F1 hybrid bell pepper seeds (Red, Yellow, Orange) for climate-controlled greenhouses and open-field cultivation.',
      priceNGN: 46000,
      priceUSD: 30.50,
      unit: 'per 1,000-seed tin',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-pepper-hot'
    },
    {
      id: 'seed-3',
      name: 'Dutch F1 Indeterminate Greenhouse Tomato Seeds',
      category: 'seeds',
      categoryLabel: 'Improved Seeds',
      spec: 'Bacterial wilt resistant, thick-walled saladette/beefsteak tomato seeds with exceptional 21-day post-harvest shelf firmness.',
      priceNGN: 39500,
      priceUSD: 26.00,
      unit: 'per 1,000-seed pack',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-seedling'
    },
    {
      id: 'seed-4',
      name: 'Pelletized Organic Bio-Fertilizer (Slow-Release NPK)',
      category: 'seeds',
      categoryLabel: 'Organic Farm Inputs',
      spec: 'Pathogen-free, slow-release NPK organic fertilizer enriched with beneficial microbes, produced from bio-secure farm compost.',
      priceNGN: 14500,
      priceUSD: 9.50,
      unit: 'per 50kg bag',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-recycle'
    },
    {
      id: 'seed-5',
      name: 'Certified Inoculated Soybean Seeds (TGX 1448)',
      category: 'seeds',
      categoryLabel: 'Improved Seeds',
      spec: 'Pre-inoculated with Rhizobium nitrogen-fixing bacteria, high pod-setting ratio, shattering-resistant seed variety.',
      priceNGN: 24000,
      priceUSD: 16.00,
      unit: 'per 10kg seed bag',
      inStock: true,
      image: 'assets/hybrid-farm-operations.png',
      fallbackIcon: 'fa-seedling'
    },

    // --- Farm Operations & Agribusiness Services ---
    {
      id: 'srv-haulage',
      name: 'Dedicated Reefer Truck Haulage (Lagos-Ogun Corridor)',
      category: 'services',
      categoryLabel: 'Cold-Chain Logistics',
      spec: '10-Ton temperature-monitored refrigerated freight haulage from farm hub to supermarkets, cold depots, or export docks.',
      priceNGN: 185000,
      priceUSD: 122.00,
      unit: 'per 10-Ton dispatch trip',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-truck-fast'
    },
    {
      id: 'srv-coldstore',
      name: 'Solar-Powered Cold Storage Vault Lease (-2°C to +4°C)',
      category: 'services',
      categoryLabel: 'Cold-Chain Logistics',
      spec: 'Commercial pallet position lease in solar-powered cold room with backup diesel generators and 24/7 telemetry monitoring.',
      priceNGN: 80000,
      priceUSD: 53.00,
      unit: 'per pallet position / month',
      inStock: true,
      image: 'assets/harvest-distribution.png',
      fallbackIcon: 'fa-snowflake'
    },
    {
      id: 'srv-tillage',
      name: 'Mechanized Heavy Tractor Disc Plowing & Harrowing',
      category: 'services',
      categoryLabel: 'Farm Mechanization',
      spec: 'Mechanized land preparation service using modern 90HP 4WD tractors with disc plows, harrowing, and ridging per hectare.',
      priceNGN: 68000,
      priceUSD: 45.00,
      unit: 'per Hectare',
      inStock: true,
      image: 'assets/hybrid-farm-operations.png',
      fallbackIcon: 'fa-tractor'
    },
    {
      id: 'srv-drone',
      name: 'Agricultural Drone NDVI Crop Health & Thermal Moisture Mapping',
      category: 'services',
      categoryLabel: 'Precision AgriTech',
      spec: 'Multispectral aerial survey measuring chlorophyll indices, weed infestation clusters, and irrigation variance with actionable GIS maps.',
      priceNGN: 95000,
      priceUSD: 63.00,
      unit: 'per 50-hectare flight',
      inStock: true,
      image: 'assets/hybrid-farm-operations.png',
      fallbackIcon: 'fa-paper-plane'
    },
    {
      id: 'srv-slaughter',
      name: 'Certified Abattoir Halal Slaughter & Carcass Dressing',
      category: 'services',
      categoryLabel: 'Livestock Services',
      spec: 'Hygienic humane halal abattoir slaughtering, skin dressing, veterinary inspection, and cold carcass chilling for cattle.',
      priceNGN: 25000,
      priceUSD: 16.50,
      unit: 'per head cattle',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-shield-halved'
    },
    {
      id: 'srv-lab',
      name: 'Precision Soil Nutrients & Heavy Metals Laboratory Assay',
      category: 'services',
      categoryLabel: 'Agronomy Testing',
      spec: 'Comprehensive laboratory testing of 5 soil cores: Nitrogen, Phosphorus, Potassium, pH, Organic Matter, and heavy metals screening.',
      priceNGN: 85000,
      priceUSD: 56.00,
      unit: 'per 5-sample parcel',
      inStock: true,
      image: 'assets/nigerian-agronomist-greenhouse.png',
      fallbackIcon: 'fa-flask-vial'
    },
    {
      id: 'consult-1',
      name: 'Farm Setup & Agronomy Feasibility Consultation',
      category: 'services',
      categoryLabel: 'Agri-Business Advisory',
      spec: 'Full-day on-site farm layout audit, soil topography test, water analysis, crop/livestock suitability plan, and 5-year financial model.',
      priceNGN: 150000,
      priceUSD: 100.00,
      unit: 'per facility session',
      inStock: true,
      image: 'assets/nigerian-agronomist-greenhouse.png',
      fallbackIcon: 'fa-user-tie'
    },
    {
      id: 'consult-2',
      name: 'Greenhouse Design & Hydroponics Engineering Advisory',
      category: 'services',
      categoryLabel: 'Agri-Business Advisory',
      spec: 'Complete technical CAD blueprint, micro-climate ventilation schematics, automated fertigation layout, and bill of materials.',
      priceNGN: 250000,
      priceUSD: 165.00,
      unit: 'per project consultation',
      inStock: true,
      image: 'assets/crops-vegetables.png',
      fallbackIcon: 'fa-compass-drafting'
    },
    {
      id: 'consult-3',
      name: 'Poultry Bio-Security & Veterinary Health Audit',
      category: 'services',
      categoryLabel: 'Agri-Business Advisory',
      spec: 'Expert veterinary assessment of flock health, hygiene barrier protocols, mortality reduction strategies, and vaccination schedules.',
      priceNGN: 125000,
      priceUSD: 82.00,
      unit: 'per poultry facility audit',
      inStock: true,
      image: 'assets/poultry-livestock.png',
      fallbackIcon: 'fa-shield-halved'
    }
  ];

  let currentCurrency = 'NGN';
  let rfqCart = [];

  const productsGrid = document.getElementById('productsGrid');
  const catalogFilterBtns = document.querySelectorAll('.catalog-filter-btn');
  const currencyBtns = document.querySelectorAll('.currency-toggle-btn');
  const rfqBadge = document.getElementById('rfqCartCount');
  const mobileRfqBadge = document.getElementById('mobileCartCount');

  function formatMoney(amount, currency) {
    if (currency === 'NGN') {
      return '₦' + amount.toLocaleString('en-NG');
    } else {
      return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  }

  function renderProducts(filter = 'all') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => {
          if (filter === 'services' && (p.category === 'services' || p.category === 'consultation')) return true;
          if (filter === 'consultation' && (p.category === 'services' || p.category === 'consultation')) return true;
          return p.category === filter;
        });

    filtered.forEach(p => {
      const priceText = currentCurrency === 'NGN' ? formatMoney(p.priceNGN, 'NGN') : formatMoney(p.priceUSD, 'USD');

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-thumb-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-thumb" onerror="this.onerror=null; this.src='assets/hero-farm.png';">
          <span class="product-badge">${p.categoryLabel}</span>
          <span class="product-stock-tag">
            <span class="dot"></span>
            ${p.inStock ? 'Harvest In Stock' : 'Pre-Order'}
          </span>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category.toUpperCase()}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-spec">${p.spec}</p>
          <div class="product-pricing-bar">
            <div>
              <div class="product-price">${priceText}</div>
              <div class="product-unit">${p.unit}</div>
            </div>
            <button class="btn-add-rfq" data-id="${p.id}">
              <i class="fa-solid fa-cart-plus"></i> Add to RFQ
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    // Attach click listeners for "Add to RFQ"
    document.querySelectorAll('.btn-add-rfq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        addToRfq(id);
      });
    });
  }

  // Filter Catalog
  catalogFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catalogFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProducts(filter);
    });
  });

  // Global Currency Toggle & Sync
  function setSiteCurrency(newCurrency) {
    currentCurrency = newCurrency;
    document.querySelectorAll('.currency-toggle-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-currency') === currentCurrency);
    });
    const activeFilter = document.querySelector('.catalog-filter-btn.active')?.getAttribute('data-filter') || 'all';
    renderProducts(activeFilter);
    updateRfqModalUI();
    if (typeof updateCalculatorUI === 'function') {
      updateCalculatorUI();
    }
  }

  document.querySelectorAll('.currency-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedCurrency = e.currentTarget.getAttribute('data-currency');
      if (selectedCurrency) {
        setSiteCurrency(selectedCurrency);
      }
    });
  });

  // RFQ Cart Logic
  function addToRfq(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    const existing = rfqCart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      rfqCart.push({ ...prod, quantity: 1 });
    }

    updateCartCounts();
    showToast(`Added ${prod.name} to wholesale quote.`);
  }

  function updateCartCounts() {
    const totalItems = rfqCart.reduce((sum, item) => sum + item.quantity, 0);
    if (rfqBadge) {
      rfqBadge.textContent = totalItems;
      rfqBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    if (mobileRfqBadge) {
      mobileRfqBadge.textContent = totalItems;
      mobileRfqBadge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
    updateRfqModalUI();
  }

  // RFQ Modal Elements
  const rfqModalOverlay = document.getElementById('rfqModalOverlay');
  const rfqModalClose = document.getElementById('rfqModalClose');
  const rfqTriggerBtns = document.querySelectorAll('.trigger-rfq-modal');
  const rfqItemsList = document.getElementById('rfqItemsList');
  const rfqEstimatedTotal = document.getElementById('rfqEstimatedTotal');
  const sendWhatsappRfqBtn = document.getElementById('sendWhatsappRfqBtn');
  const submitOfficialRfqBtn = document.getElementById('submitOfficialRfqBtn');

  function openRfqModal() {
    updateRfqModalUI();
    rfqModalOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeRfqModal() {
    rfqModalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  rfqTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openRfqModal();
    });
  });

  rfqModalClose?.addEventListener('click', closeRfqModal);
  rfqModalOverlay?.addEventListener('click', (e) => {
    if (e.target === rfqModalOverlay) closeRfqModal();
  });

  function updateRfqModalUI() {
    if (!rfqItemsList) return;

    if (rfqCart.length === 0) {
      rfqItemsList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; margin-bottom: 0.8rem; color: var(--gold-primary);"></i>
          <p style="font-weight: 600; font-size: 1.05rem; color: var(--text-dark);">Your Wholesale RFQ basket is empty</p>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">Browse our fresh crops, greenhouse vegetables, poultry, and livestock to add items.</p>
        </div>
      `;
      if (rfqEstimatedTotal) rfqEstimatedTotal.textContent = currentCurrency === 'NGN' ? '₦0' : '$0.00';
      return;
    }

    rfqItemsList.innerHTML = '';
    let total = 0;

    rfqCart.forEach(item => {
      const unitPrice = currentCurrency === 'NGN' ? item.priceNGN : item.priceUSD;
      const subtotal = unitPrice * item.quantity;
      total += subtotal;

      const row = document.createElement('div');
      row.className = 'rfq-item-row';
      row.innerHTML = `
        <div class="rfq-item-info">
          <div class="rfq-item-name">${item.name}</div>
          <div class="rfq-item-price">${formatMoney(unitPrice, currentCurrency)} ${item.unit}</div>
        </div>
        <div class="rfq-item-actions">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
          <button class="remove-btn" data-id="${item.id}" title="Remove item">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      `;
      rfqItemsList.appendChild(row);
    });

    if (rfqEstimatedTotal) {
      rfqEstimatedTotal.textContent = formatMoney(total, currentCurrency);
    }

    // Modal Qty Buttons
    rfqItemsList.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const action = e.currentTarget.getAttribute('data-action');
        const item = rfqCart.find(i => i.id === id);
        if (item) {
          if (action === 'increase') {
            item.quantity += 1;
          } else if (action === 'decrease') {
            item.quantity -= 1;
            if (item.quantity <= 0) {
              rfqCart = rfqCart.filter(i => i.id !== id);
            }
          }
          updateCartCounts();
        }
      });
    });

    rfqItemsList.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.closest('button').getAttribute('data-id');
        rfqCart = rfqCart.filter(i => i.id !== id);
        updateCartCounts();
        showToast('Item removed from quotation.');
      });
    });
  }

  // WhatsApp RFQ Transmission
  if (sendWhatsappRfqBtn) {
    sendWhatsappRfqBtn.addEventListener('click', () => {
      if (rfqCart.length === 0) {
        showToast('Please add items to your RFQ before sending.');
        return;
      }

      let message = `*TERRABLOOM INTEGRATED FARMS - WHOLESALE INQUIRY*\n`;
      message += `Location: Plot 1-6 Freedom Way, Lagos-Ibadan Expressway\n`;
      message += `Currency: ${currentCurrency}\n\n`;
      message += `*Requested Produce & Supplies:*\n`;

      let total = 0;
      rfqCart.forEach((item, idx) => {
        const price = currentCurrency === 'NGN' ? item.priceNGN : item.priceUSD;
        const sub = price * item.quantity;
        total += sub;
        message += `${idx + 1}. ${item.name} (${item.unit})\n   Qty: ${item.quantity} | Subtotal: ${formatMoney(sub, currentCurrency)}\n`;
      });

      message += `\n*Estimated Total: ${formatMoney(total, currentCurrency)}*\n`;
      message += `\nI would like to confirm stock availability, delivery lead-time, and formal invoice. Thank you!`;

      // Official WhatsApp Desk number for TerraBloom Integrated Farms
      const phone = '2348033333333'; // Nigeria Country Code
      const encodedUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(encodedUrl, '_blank');
      closeRfqModal();
      showToast('Opening WhatsApp with your wholesale RFQ details...');
    });
  }

  // Official B2B Submission
  if (submitOfficialRfqBtn) {
    submitOfficialRfqBtn.addEventListener('click', () => {
      if (rfqCart.length === 0) {
        showToast('Please add items to your RFQ before submitting.');
        return;
      }
      closeRfqModal();
      showToast('Your wholesale tender request has been logged. Our corporate desk will contact you within 2 hours.');
      rfqCart = [];
      updateCartCounts();
    });
  }

  // ==========================================================================
  // 5. Farm Visit & Corporate Contact Form Handling
  // ==========================================================================
  const generalContactForm = document.getElementById('corporateInquiryForm');
  if (generalContactForm) {
    generalContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = generalContactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        generalContactForm.reset();
        showToast('Thank you! Your inquiry has been dispatched to TerraBloom Executive Desk.');
      }, 1000);
    });
  }

  // ==========================================================================
  // 6. Toast Notification Helper
  // ==========================================================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-green-bright);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ==========================================================================
  // 6. Interactive Agribusiness Multi-Object Fees Calculator Engine
  // ==========================================================================
  const calculatorObjects = {
    produce: {
      label: 'Produce & Bulk Harvest',
      icon: 'fa-wheat-awn',
      description: 'Configure wholesale harvest volume, custom grading, export palletizing, and bulk quantity tier rebates.',
      items: [
        {
          id: 'calc-pepper',
          name: 'Dutch Sweet Bell Peppers (Grade A Tri-Color)',
          categoryLabel: 'Greenhouse Horticulture',
          unit: '10kg export crate',
          priceNGN: 24000,
          priceUSD: 16.00,
          minQty: 10,
          maxQty: 1000,
          step: 5,
          defaultQty: 50,
          spec: 'Red, Yellow & Orange Bell Peppers in 10kg export-grade aerated crates.',
          bulkTiers: [
            { min: 50, discount: 0.05, label: '5% Bulk Tier (50+ crates)' },
            { min: 150, discount: 0.08, label: '8% Commercial Tier (150+ crates)' },
            { min: 300, discount: 0.12, label: '12% Enterprise Contract (300+ crates)' }
          ]
        },
        {
          id: 'calc-tomato',
          name: 'Dutch Vine-Ripened Plum & Beefsteak Tomatoes',
          categoryLabel: 'Greenhouse Horticulture',
          unit: '25kg wooden crate',
          priceNGN: 32000,
          priceUSD: 21.50,
          minQty: 10,
          maxQty: 800,
          step: 5,
          defaultQty: 40,
          spec: 'Hydroponic firm plum & beefsteak tomatoes with 21-day shelf stability.',
          bulkTiers: [
            { min: 50, discount: 0.05, label: '5% Bulk Tier (50+ crates)' },
            { min: 100, discount: 0.08, label: '8% Supermarket Tier (100+ crates)' },
            { min: 250, discount: 0.12, label: '12% Industrial Tier (250+ crates)' }
          ]
        },
        {
          id: 'calc-yam',
          name: 'Export-Grade Abuja / Pona White Yams',
          categoryLabel: 'Tubers & Roots',
          unit: '50-tuber crate (dry-brushed)',
          priceNGN: 145000,
          priceUSD: 95.00,
          minQty: 5,
          maxQty: 300,
          step: 1,
          defaultQty: 20,
          spec: 'Hand-selected unblemished white yams (2.5kg–4.5kg per tuber) for supermarkets & export.',
          bulkTiers: [
            { min: 20, discount: 0.04, label: '4% Merchant Tier (20+ crates)' },
            { min: 50, discount: 0.07, label: '7% Export Batch Tier (50+ crates)' },
            { min: 100, discount: 0.10, label: '10% Containerized Tier (100+ crates)' }
          ]
        },
        {
          id: 'calc-potato',
          name: 'Grade A Fresh Irish Table Potatoes (Jos Plateau)',
          categoryLabel: 'Tubers & Roots',
          unit: '25kg aerated bag',
          priceNGN: 36000,
          priceUSD: 24.00,
          minQty: 10,
          maxQty: 1000,
          step: 10,
          defaultQty: 50,
          spec: 'Smooth-skinned washed table potatoes for hospitality and food processing.',
          bulkTiers: [
            { min: 50, discount: 0.05, label: '5% Bulk Tier (50+ bags)' },
            { min: 200, discount: 0.09, label: '9% Institutional Tier (200+ bags)' }
          ]
        },
        {
          id: 'calc-egg',
          name: 'Farm Fresh Jumbo Table Eggs (Golden-Yolk)',
          categoryLabel: 'Commercial Poultry',
          unit: '30-egg crate (carton pack)',
          priceNGN: 5200,
          priceUSD: 3.50,
          minQty: 50,
          maxQty: 5000,
          step: 50,
          defaultQty: 200,
          spec: 'Graded & sanitised brown eggs from bio-secure layer flocks.',
          bulkTiers: [
            { min: 200, discount: 0.04, label: '4% Wholesaler Tier (200+ crates)' },
            { min: 500, discount: 0.07, label: '7% Depo Tier (500+ crates)' },
            { min: 1000, discount: 0.10, label: '10% Mega-Distributor Tier (1000+ crates)' }
          ]
        },
        {
          id: 'calc-broiler',
          name: 'Fresh Dressed Whole Broilers (Blast-Frozen 1.8–2.2kg)',
          categoryLabel: 'Commercial Poultry',
          unit: '10-bird master carton',
          priceNGN: 48000,
          priceUSD: 32.00,
          minQty: 10,
          maxQty: 500,
          step: 5,
          defaultQty: 25,
          spec: 'Oven-ready, vacuum-bagged blast-frozen whole chicken in cartons.',
          bulkTiers: [
            { min: 30, discount: 0.04, label: '4% Retailer Tier (30+ cartons)' },
            { min: 80, discount: 0.08, label: '8% Catering Tier (80+ cartons)' }
          ]
        },
        {
          id: 'calc-maize',
          name: 'Industrial Hybrid Yellow Maize (Milling Grade, <12% Moisture)',
          categoryLabel: 'Field Grains & Crops',
          unit: '50kg double-stitched bag',
          priceNGN: 46000,
          priceUSD: 30.50,
          minQty: 20,
          maxQty: 2000,
          step: 20,
          defaultQty: 100,
          spec: 'Cleaned, machine-tested aflatoxin-free maize for milling and animal feed.',
          bulkTiers: [
            { min: 100, discount: 0.05, label: '5% Feedmill Tier (100+ bags)' },
            { min: 500, discount: 0.09, label: '9% Industrial Off-Take Tier (500+ bags)' }
          ]
        },
        {
          id: 'calc-soybeans',
          name: 'Premium Non-GMO High-Protein Soybeans (>38% Protein)',
          categoryLabel: 'Field Grains & Crops',
          unit: '50kg double-stitched bag',
          priceNGN: 54000,
          priceUSD: 36.00,
          minQty: 20,
          maxQty: 2000,
          step: 20,
          defaultQty: 100,
          spec: 'High-oil & high-protein soybeans graded for vegetable oil and poultry meal.',
          bulkTiers: [
            { min: 100, discount: 0.05, label: '5% Processor Tier (100+ bags)' },
            { min: 400, discount: 0.08, label: '8% Bulk Extractor Tier (400+ bags)' }
          ]
        }
      ],
      options: [
        {
          id: 'opt-packaging',
          label: 'Wholesale Packaging Grade',
          type: 'select',
          choices: [
            { label: 'Standard Wholesale Field Crates / Bags (Included)', priceNGN: 0, priceUSD: 0, perUnit: false },
            { label: 'Export Air-Freight Fumigated & Palletized (+₦2,500 / $1.70 per unit)', priceNGN: 2500, priceUSD: 1.70, perUnit: true },
            { label: 'Supermarket Barcoded Retail Packs / Clamshells (+₦1,200 / $0.80 per unit)', priceNGN: 1200, priceUSD: 0.80, perUnit: true }
          ]
        },
        {
          id: 'opt-precooling',
          label: 'Rapid Vacuum Pre-Cooling & Chilled Loading (+₦600 / $0.40 per unit)',
          type: 'checkbox',
          priceNGN: 600,
          priceUSD: 0.40,
          perUnit: true
        },
        {
          id: 'opt-lot-cert',
          label: 'Phytosanitary & Lab Batch Clearance Certificate (+₦15,000 / $10.00 flat)',
          type: 'checkbox',
          priceNGN: 15000,
          priceUSD: 10.00,
          perUnit: false
        }
      ]
    },

    logistics: {
      label: 'Cold-Chain Haulage & Logistics',
      icon: 'fa-truck-fast',
      description: 'Calculate multi-temperature freight dispatch from Plot 1-6 Freedom Way to retail chains, ports, and regional cities.',
      items: [
        {
          id: 'fleet-sprinter',
          name: '3.5-Ton Mercedes Sprinter Reefer Van (0°C to +4°C)',
          categoryLabel: 'Express Reefer Fleet',
          unit: 'dispatch trip',
          priceNGN: 95000,
          priceUSD: 63.00,
          minQty: 1,
          maxQty: 10,
          step: 1,
          defaultQty: 1,
          spec: 'Payload capacity up to 3.5 MT (~180 vegetable crates or 75 broiler cartons).',
          bulkTiers: [
            { min: 3, discount: 0.05, label: '5% Multi-Trip Route Rebate' }
          ]
        },
        {
          id: 'fleet-10ton',
          name: '10-Ton Heavy ThermoKing Refrigerated Truck (-18°C or +4°C)',
          categoryLabel: 'Commercial Distribution Fleet',
          unit: 'dispatch trip',
          priceNGN: 185000,
          priceUSD: 122.00,
          minQty: 1,
          maxQty: 10,
          step: 1,
          defaultQty: 1,
          spec: 'Payload capacity up to 10 MT (~550 crates / 8 Euro-pallets). Dual-temp partition.',
          bulkTiers: [
            { min: 3, discount: 0.06, label: '6% Fleet Dispatch Rebate' }
          ]
        },
        {
          id: 'fleet-30ton',
          name: '30-Ton Tri-Axle Articulated Cold-Chain Semi-Trailer',
          categoryLabel: 'Heavy Freight Logistics',
          unit: 'dispatch trip',
          priceNGN: 380000,
          priceUSD: 252.00,
          minQty: 1,
          maxQty: 5,
          step: 1,
          defaultQty: 1,
          spec: 'Payload capacity up to 30 MT (24 pallet positions) for interstate and sea-port haulage.',
          bulkTiers: [
            { min: 2, discount: 0.05, label: '5% Multi-Consignment Rebate' }
          ]
        }
      ],
      options: [
        {
          id: 'opt-corridor',
          label: 'Delivery Corridor / Drop-off Zone',
          type: 'select',
          choices: [
            { label: 'Ogun Industrial Zone (Sagamu, Interchange, Abeokuta) (Base Rate)', mult: 1.0 },
            { label: 'Lagos Mainland (Ikeja, Maryland, Oshodi, Mile 12 Hub) (+15% Corridor Surcharge)', mult: 1.15 },
            { label: 'Lagos Island (Victoria Island, Lekki, Ikoyi, Epe Axis) (+28% Toll & Island Surcharge)', mult: 1.28 },
            { label: 'Ibadan Metropolitan Depots & Cold Hubs (+20% Interstate Surcharge)', mult: 1.20 },
            { label: 'Apapa & Tin Can Sea Export Terminals / MMIA Air Cargo (+35% Port Clearance Surcharge)', mult: 1.35 },
            { label: 'Interstate Long-Haul (Benin, Asaba, Port Harcourt, Abuja) (+120% Long Distance Corridor)', mult: 2.20 }
          ]
        },
        {
          id: 'opt-labor',
          label: 'Trained Pallet Offloading & Warehousing Crew (+₦25,000 / $16.50 per vehicle)',
          type: 'checkbox',
          priceNGN: 25000,
          priceUSD: 16.50,
          perUnit: true
        },
        {
          id: 'opt-telemetry',
          label: 'Live GPS Satellite Telemetry & Real-Time Temperature Log Report (+₦12,000 / $8.00 per vehicle)',
          type: 'checkbox',
          priceNGN: 12000,
          priceUSD: 8.00,
          perUnit: true
        },
        {
          id: 'opt-express',
          label: 'Guaranteed Priority Same-Day Express Dispatch (+20% of haulage rate)',
          type: 'checkbox',
          rateMult: 0.20
        }
      ]
    },

    storage: {
      label: 'Cold Storage & Silos',
      icon: 'fa-snowflake',
      description: 'Calculate industrial refrigerated storage vaults, blast freezers, and climate-controlled grain silos at our central hub.',
      items: [
        {
          id: 'store-frozen',
          name: 'Blast Deep-Freeze Cold Vault (-18°C to -22°C)',
          categoryLabel: 'Commercial Cold Hub',
          unit: 'pallet position',
          priceNGN: 80000,
          priceUSD: 53.00,
          minQty: 1,
          maxQty: 100,
          step: 1,
          defaultQty: 4,
          spec: 'High-density freezer vault optimized for poultry, dressed meats, and seafood.',
          bulkTiers: [
            { min: 5, discount: 0.05, label: '5% Multi-Pallet Tier' },
            { min: 15, discount: 0.10, label: '10% Warehouse Block Tier' }
          ]
        },
        {
          id: 'store-chilled',
          name: 'High-Humidity Chilled Vegetable Vault (0°C to +4°C)',
          categoryLabel: 'Commercial Cold Hub',
          unit: 'pallet position',
          priceNGN: 68000,
          priceUSD: 45.00,
          minQty: 1,
          maxQty: 100,
          step: 1,
          defaultQty: 5,
          spec: 'Precision humidity and temperature controlled cold room for fresh vegetables and fruits.',
          bulkTiers: [
            { min: 5, discount: 0.05, label: '5% Multi-Pallet Tier' },
            { min: 15, discount: 0.10, label: '10% Warehouse Block Tier' }
          ]
        },
        {
          id: 'store-egg',
          name: 'Controlled Atmosphere Egg & Seed Chamber (+12°C to +15°C)',
          categoryLabel: 'Commercial Cold Hub',
          unit: 'pallet position',
          priceNGN: 52000,
          priceUSD: 34.50,
          minQty: 1,
          maxQty: 100,
          step: 1,
          defaultQty: 4,
          spec: 'Ideal climate preserving hatchability of breeding eggs and viability of hybrid seeds.',
          bulkTiers: [
            { min: 5, discount: 0.05, label: '5% Multi-Pallet Tier' }
          ]
        },
        {
          id: 'store-silo',
          name: 'Nitrogen-Purged Aflatoxin-Protected Grain Silo',
          categoryLabel: 'Bulk Grain Infrastructure',
          unit: 'Metric Ton (1,000kg)',
          priceNGN: 35000,
          priceUSD: 23.00,
          minQty: 2,
          maxQty: 500,
          step: 5,
          defaultQty: 10,
          spec: 'Hermetically sealed steel silo with automated aeration, temperature cables, and zero fumigant residue.',
          bulkTiers: [
            { min: 20, discount: 0.06, label: '6% Commercial Silo Tier' },
            { min: 50, discount: 0.12, label: '12% Industrial Strategic Reserve' }
          ]
        }
      ],
      options: [
        {
          id: 'opt-duration',
          label: 'Storage Duration Period',
          type: 'select',
          choices: [
            { label: '1 Month / 30 Calendar Days (Base Monthly Lease)', mult: 1.0, discount: 0 },
            { label: '1 Week / 7 Calendar Days (Short-term offload rate - 35% of monthly)', mult: 0.35, discount: 0 },
            { label: '2 Weeks / 14 Calendar Days (Short-term offload rate - 60% of monthly)', mult: 0.60, discount: 0 },
            { label: '3 Months / Quarterly Lock (10% Long-Term Agreement Rebate)', mult: 3.0, discount: 0.10 },
            { label: '6 Months / Bi-Annual Offtake Lock (15% Strategic Reserve Rebate)', mult: 6.0, discount: 0.15 }
          ]
        },
        {
          id: 'opt-handling',
          label: 'Forklift Inbound & Outbound Pallet Handling / Stacking (+₦3,500 / $2.30 per unit)',
          type: 'checkbox',
          priceNGN: 3500,
          priceUSD: 2.30,
          perUnit: true
        },
        {
          id: 'opt-insurance',
          label: 'Cold-Chain Commodity Spoilage & Generator Redundancy Insurance (+₦4,500 / $3.00 per unit)',
          type: 'checkbox',
          priceNGN: 4500,
          priceUSD: 3.00,
          perUnit: true
        }
      ]
    },

    livestock: {
      label: 'Livestock & Abattoir Services',
      icon: 'fa-cow',
      description: 'Calculate pedigree cattle acquisition, lairage holding feed, certified halal slaughter, and carcass dressing.',
      items: [
        {
          id: 'live-cattle',
          name: 'Pedigree Boran / Friesian Cross Beef Steer (380–480kg Live Weight)',
          categoryLabel: 'Ruminant Livestock',
          unit: 'live head',
          priceNGN: 850000,
          priceUSD: 565.00,
          minQty: 1,
          maxQty: 50,
          step: 1,
          defaultQty: 2,
          isCattle: true,
          spec: 'Grass-fed and grain-finished steers with complete RFID ear-tag traceability and vet records.',
          bulkTiers: [
            { min: 5, discount: 0.03, label: '3% Herd Tier (5+ head)' },
            { min: 15, discount: 0.06, label: '6% Commercial Ranch Tier (15+ head)' }
          ]
        },
        {
          id: 'live-goat',
          name: 'Purebred South African Boer Breeding Goat (Buck or Doe)',
          categoryLabel: 'Breeding Genetics',
          unit: 'breeding head',
          priceNGN: 220000,
          priceUSD: 145.00,
          minQty: 1,
          maxQty: 30,
          step: 1,
          defaultQty: 2,
          isCattle: false,
          spec: 'High fertility genetic stock, vaccinated against PPR and CCPP with parent pedigree certificate.',
          bulkTiers: [
            { min: 5, discount: 0.04, label: '4% Flock Tier (5+ head)' }
          ]
        },
        {
          id: 'live-sheep',
          name: 'Pasture-Grazed West African Dwarf Premium Sheep / Ram',
          categoryLabel: 'Ruminant Livestock',
          unit: 'live head',
          priceNGN: 115000,
          priceUSD: 76.00,
          minQty: 1,
          maxQty: 50,
          step: 1,
          defaultQty: 3,
          isCattle: false,
          spec: 'Healthy grazing rams and ewes, ideal for event banquets, corporate gifts, and breeding.',
          bulkTiers: [
            { min: 10, discount: 0.05, label: '5% Batch Tier (10+ head)' }
          ]
        },
        {
          id: 'live-chickens-batch',
          name: 'Live Mature Broiler Flock (100-Bird Coop Batch, 2.2kg avg)',
          categoryLabel: 'Commercial Poultry',
          unit: 'coop batch (100 birds)',
          priceNGN: 380000,
          priceUSD: 250.00,
          minQty: 1,
          maxQty: 40,
          step: 1,
          defaultQty: 2,
          isCattle: false,
          spec: 'Flock of 100 vigorous live market-ready broilers loaded in sanitized crates.',
          bulkTiers: [
            { min: 5, discount: 0.05, label: '5% Flock Tier (500+ birds)' }
          ]
        }
      ],
      options: [
        {
          id: 'opt-slaughter',
          label: 'Processing & Abattoir Service Tier',
          type: 'select',
          choices: [
            { label: 'Live Weight Supply & Loading Only (Standard - Included)', priceCattleNGN: 0, priceCattleUSD: 0, priceSmallNGN: 0, priceSmallUSD: 0 },
            { label: 'Certified Halal Slaughter & Skin Dressing (+₦25,000 / $16.50 per cattle; +₦5,000 / $3.30 per small animal)', priceCattleNGN: 25000, priceCattleUSD: 16.50, priceSmallNGN: 5000, priceSmallUSD: 3.30, perAnimal: true },
            { label: 'Halal Slaughter + Cold Quartering & Vacuum Packaging (+₦40,000 / $26.50 per cattle; +₦9,000 / $6.00 per small animal)', priceCattleNGN: 40000, priceCattleUSD: 26.50, priceSmallNGN: 9000, priceSmallUSD: 6.00, perAnimal: true }
          ]
        },
        {
          id: 'opt-lairage',
          label: 'Holding Lairage & Certified Feed Care Days',
          type: 'select',
          choices: [
            { label: 'Zero Holding Days (Immediate Dispatch)', days: 0, rateNGN: 0, rateUSD: 0 },
            { label: '3 Days Pre-Event Holding & Feed (+₦3,500 / $2.30 per head/day)', days: 3, rateNGN: 3500, rateUSD: 2.30 },
            { label: '7 Days Conditioning Holding (+₦3,000 / $2.00 per head/day)', days: 7, rateNGN: 3000, rateUSD: 2.00 }
          ]
        },
        {
          id: 'opt-vetcert',
          label: 'State Veterinary Health & Inter-State Movement Clearance (+₦10,000 / $6.60 per consignment)',
          type: 'checkbox',
          priceNGN: 10000,
          priceUSD: 6.60,
          perUnit: false
        }
      ]
    },

    services: {
      label: 'Farm Mechanization & Agronomy Services',
      icon: 'fa-tractor',
      description: 'Calculate professional tractor land prep, drone multispectral surveys, soil chemistry assays, and technical audits.',
      items: [
        {
          id: 'srv-plow',
          name: 'Heavy Mechanized Tractor Disc Plowing & Primary Tillage',
          categoryLabel: 'Farm Mechanization',
          unit: 'Hectare',
          priceNGN: 68000,
          priceUSD: 45.00,
          minQty: 1,
          maxQty: 100,
          step: 1,
          defaultQty: 5,
          spec: 'High-horsepower 90HP+ 4WD tractors with heavy disc plows breaking hardpan soil down to 30cm depth.',
          bulkTiers: [
            { min: 10, discount: 0.05, label: '5% Scale Tier (10+ Ha)' },
            { min: 25, discount: 0.10, label: '10% Plantation Tier (25+ Ha)' }
          ]
        },
        {
          id: 'srv-harrow',
          name: 'Mechanized Secondary Disc Harrowing & Bed Ridging',
          categoryLabel: 'Farm Mechanization',
          unit: 'Hectare',
          priceNGN: 48000,
          priceUSD: 32.00,
          minQty: 1,
          maxQty: 100,
          step: 1,
          defaultQty: 5,
          spec: 'Fine soil pulverization, weed destruction, and precision ridge formation for planting.',
          bulkTiers: [
            { min: 10, discount: 0.05, label: '5% Scale Tier (10+ Ha)' },
            { min: 25, discount: 0.10, label: '10% Plantation Tier (25+ Ha)' }
          ]
        },
        {
          id: 'srv-drone',
          name: 'Agricultural Drone Multispectral NDVI Health & Moisture Mapping',
          categoryLabel: 'Precision AgriTech',
          unit: '20-Hectare Flight Parcel',
          priceNGN: 75000,
          priceUSD: 50.00,
          minQty: 1,
          maxQty: 25,
          step: 1,
          defaultQty: 2,
          spec: 'Sub-centimeter resolution drone flight providing chlorophyl health index, nitrogen deficiency maps, and weed hotspots.',
          bulkTiers: [
            { min: 3, discount: 0.08, label: '8% Aerial Mapping Tier (60+ Ha)' }
          ]
        },
        {
          id: 'srv-soil',
          name: 'Comprehensive Laboratory Soil Chemistry & Heavy Metals Assay',
          categoryLabel: 'Agronomy Testing',
          unit: '5-Sample Soil Core Parcel',
          priceNGN: 85000,
          priceUSD: 56.00,
          minQty: 1,
          maxQty: 20,
          step: 1,
          defaultQty: 1,
          spec: 'Certified lab report of pH, Organic Matter, N-P-K, micronutrients, CEC, and customized fertilizer recommendations.',
          bulkTiers: [
            { min: 3, discount: 0.06, label: '6% Multi-Field Testing Tier' }
          ]
        },
        {
          id: 'srv-audit',
          name: 'Executive On-Site Farm Setup & Agronomy Feasibility Audit',
          categoryLabel: 'Advisory Consultation',
          unit: 'Full-Day On-Site Session',
          priceNGN: 150000,
          priceUSD: 100.00,
          minQty: 1,
          maxQty: 10,
          step: 1,
          defaultQty: 1,
          spec: 'Comprehensive technical inspection of topography, water resources, bio-security, crop suitability, and 5-year financials.',
          bulkTiers: [
            { min: 3, discount: 0.10, label: '10% Multi-Day Audit' }
          ]
        },
        {
          id: 'srv-greenhouse-eng',
          name: 'Greenhouse CAD Engineering & Automated Fertigation Blueprint',
          categoryLabel: 'Advisory Consultation',
          unit: 'Custom Project Blueprint',
          priceNGN: 250000,
          priceUSD: 165.00,
          minQty: 1,
          maxQty: 5,
          step: 1,
          defaultQty: 1,
          spec: 'Full engineering CAD schematics, shade net / poly-tunnel ventilation models, drip fertigation plumbing, and equipment bill of materials.',
          bulkTiers: []
        }
      ],
      options: [
        {
          id: 'opt-terrain',
          label: 'Terrain / Site Soil Complexity',
          type: 'select',
          choices: [
            { label: 'Cleared Farmland / Gentle Topography (Standard - 1.0x)', mult: 1.0 },
            { label: 'Heavy Clay Soil / Elevated Rock Formations (+15% Machine Wear)', mult: 1.15 },
            { label: 'Uncut Virgin Bush / Light Tree Stumping Required (+35% Land Clearing Surcharge)', mult: 1.35 }
          ]
        },
        {
          id: 'opt-fuel-transport',
          label: 'Heavy Machinery Flatbed Mobilization & Transport (+₦45,000 / $30.00 flat)',
          type: 'checkbox',
          priceNGN: 45000,
          priceUSD: 30.00,
          perUnit: false
        },
        {
          id: 'opt-express-report',
          label: 'Expedited 48-Hour Technical Soil/Engineering Lab Report Turnaround (+₦25,000 / $16.50 flat)',
          type: 'checkbox',
          priceNGN: 25000,
          priceUSD: 16.50,
          perUnit: false
        }
      ]
    }
  };

  let currentCalcCategory = 'produce';
  let currentCalcObjectId = 'calc-pepper';
  let currentCalcQty = 50;
  let currentCalcOptions = {};
  let currentCalcVat = true;

  const calcCategoryTabs = document.querySelectorAll('.calc-tab-btn');
  const calcCategoryBadge = document.getElementById('calcCategoryBadge');
  const calcCategoryDesc = document.getElementById('calcCategoryDesc');
  const calcObjectSelect = document.getElementById('calcObjectSelect');
  const calcUnitLabel = document.getElementById('calcUnitLabel');
  const calcQtyInput = document.getElementById('calcQtyInput');
  const calcQtyRange = document.getElementById('calcQtyRange');
  const calcRangeMin = document.getElementById('calcRangeMin');
  const calcRangeCurrent = document.getElementById('calcRangeCurrent');
  const calcRangeMax = document.getElementById('calcRangeMax');
  const calcQtyDecBtn = document.getElementById('calcQtyDecBtn');
  const calcQtyIncBtn = document.getElementById('calcQtyIncBtn');
  const calcDynamicOptions = document.getElementById('calcDynamicOptions');
  const calcVatToggle = document.getElementById('calcVatToggle');

  const receiptTimestamp = document.getElementById('receiptTimestamp');
  const receiptObjectSummary = document.getElementById('receiptObjectSummary');
  const receiptLineItems = document.getElementById('receiptLineItems');
  const receiptGrossTotal = document.getElementById('receiptGrossTotal');
  const receiptDiscountRow = document.getElementById('receiptDiscountRow');
  const receiptDiscountAmount = document.getElementById('receiptDiscountAmount');
  const receiptVatRow = document.getElementById('receiptVatRow');
  const receiptVatAmount = document.getElementById('receiptVatAmount');
  const receiptGrandTotal = document.getElementById('receiptGrandTotal');
  const receiptCurrencyNote = document.getElementById('receiptCurrencyNote');

  const calcAddRfqBtn = document.getElementById('calcAddRfqBtn');
  const calcSendWhatsappBtn = document.getElementById('calcSendWhatsappBtn');
  const calcCopySummaryBtn = document.getElementById('calcCopySummaryBtn');
  const calcResetBtn = document.getElementById('calcResetBtn');

  function calculateCurrentEstimate() {
    const catData = calculatorObjects[currentCalcCategory];
    if (!catData) return null;

    const obj = catData.items.find(i => i.id === currentCalcObjectId) || catData.items[0];
    const qty = currentCalcQty;

    const baseUnitRate = currentCurrency === 'NGN' ? obj.priceNGN : obj.priceUSD;
    const baseTotal = baseUnitRate * qty;
    const lineItems = [];

    lineItems.push({
      label: `${obj.name} (${qty} ${obj.unit}${qty > 1 && !obj.unit.endsWith('s') && !obj.unit.includes('(') ? 's' : ''} @ ${formatMoney(baseUnitRate, currentCurrency)})`,
      amount: baseTotal
    });

    let additionsTotal = 0;

    catData.options.forEach(opt => {
      const val = currentCalcOptions[opt.id];

      if (opt.type === 'select') {
        const choiceIdx = val !== undefined ? parseInt(val, 10) : 0;
        const choice = opt.choices[choiceIdx] || opt.choices[0];

        if (choice.mult !== undefined && choice.mult !== 1.0) {
          const surchargeRate = choice.mult - 1.0;
          const surchargeAmt = baseTotal * surchargeRate;
          if (surchargeAmt > 0) {
            additionsTotal += surchargeAmt;
            lineItems.push({
              label: `${choice.label.split('(')[0].trim()} (${Math.round(surchargeRate * 100)}% surcharge)`,
              amount: surchargeAmt
            });
          }
        }

        if (choice.priceNGN !== undefined && (choice.priceNGN > 0 || choice.priceUSD > 0)) {
          const optRate = currentCurrency === 'NGN' ? choice.priceNGN : choice.priceUSD;
          const optTotal = choice.perUnit ? optRate * qty : optRate;
          additionsTotal += optTotal;
          lineItems.push({
            label: `${choice.label.split('(')[0].trim()} ${choice.perUnit ? `(${qty} units)` : ''}`,
            amount: optTotal
          });
        }

        if (choice.perAnimal) {
          const isCattle = obj.isCattle;
          const rateNGN = isCattle ? choice.priceCattleNGN : choice.priceSmallNGN;
          const rateUSD = isCattle ? choice.priceCattleUSD : choice.priceSmallUSD;
          const optRate = currentCurrency === 'NGN' ? rateNGN : rateUSD;
          const optTotal = optRate * qty;
          if (optTotal > 0) {
            additionsTotal += optTotal;
            lineItems.push({
              label: `${choice.label.split('(')[0].trim()} (${qty} head${qty > 1 ? 's' : ''})`,
              amount: optTotal
            });
          }
        }

        if (choice.days > 0) {
          const dayRate = currentCurrency === 'NGN' ? choice.rateNGN : choice.rateUSD;
          const optTotal = dayRate * choice.days * qty;
          additionsTotal += optTotal;
          lineItems.push({
            label: `Lairage Care (${choice.days} days x ${qty} head${qty > 1 ? 's' : ''})`,
            amount: optTotal
          });
        }
      } else if (opt.type === 'checkbox' && val) {
        if (opt.perUnit) {
          const optRate = currentCurrency === 'NGN' ? opt.priceNGN : opt.priceUSD;
          const optTotal = optRate * qty;
          additionsTotal += optTotal;
          lineItems.push({
            label: `${opt.label.split('(')[0].trim()} (${qty} units)`,
            amount: optTotal
          });
        } else if (opt.rateMult) {
          const optTotal = baseTotal * opt.rateMult;
          additionsTotal += optTotal;
          lineItems.push({
            label: `${opt.label.split('(')[0].trim()}`,
            amount: optTotal
          });
        } else if (opt.priceNGN !== undefined) {
          const optRate = currentCurrency === 'NGN' ? opt.priceNGN : opt.priceUSD;
          additionsTotal += optRate;
          lineItems.push({
            label: `${opt.label.split('(')[0].trim()}`,
            amount: optRate
          });
        }
      }
    });

    const grossTotal = baseTotal + additionsTotal;

    let discountPct = 0;
    let discountLabel = '';
    if (obj.bulkTiers && obj.bulkTiers.length > 0) {
      obj.bulkTiers.forEach(tier => {
        if (qty >= tier.min && tier.discount > discountPct) {
          discountPct = tier.discount;
          discountLabel = tier.label;
        }
      });
    }

    if (currentCalcCategory === 'storage') {
      const durOpt = catData.options.find(o => o.id === 'opt-duration');
      if (durOpt) {
        const choiceIdx = currentCalcOptions['opt-duration'] !== undefined ? parseInt(currentCalcOptions['opt-duration'], 10) : 0;
        const choice = durOpt.choices[choiceIdx];
        if (choice && choice.discount > discountPct) {
          discountPct = choice.discount;
          discountLabel = `${Math.round(choice.discount * 100)}% Long-Term Agreement Rebate`;
        }
      }
    }

    const discountAmount = grossTotal * discountPct;
    const netBeforeTax = grossTotal - discountAmount;
    const vatRate = currentCalcVat ? 0.075 : 0;
    const vatAmount = netBeforeTax * vatRate;
    const grandTotal = netBeforeTax + vatAmount;

    return {
      object: obj,
      category: catData,
      qty,
      unit: obj.unit,
      baseUnitRate,
      baseTotal,
      lineItems,
      grossTotal,
      discountPct,
      discountLabel,
      discountAmount,
      vatAmount,
      grandTotal,
      currency: currentCurrency
    };
  }

  function updateCalculatorUI() {
    if (!receiptObjectSummary || !calcObjectSelect) return;

    const estimate = calculateCurrentEstimate();
    if (!estimate) return;

    // Timestamp
    if (receiptTimestamp) {
      const now = new Date();
      receiptTimestamp.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Object Summary Header
    receiptObjectSummary.innerHTML = `
      <div class="receipt-object-title">${estimate.object.name}</div>
      <div class="receipt-object-meta">
        <span><i class="fa-solid fa-tag" style="color: var(--gold-primary);"></i> ${estimate.object.categoryLabel}</span>
        <span>•</span>
        <span><i class="fa-solid fa-scale-balanced" style="color: var(--accent-green-bright);"></i> ${formatMoney(estimate.baseUnitRate, currentCurrency)} / ${estimate.unit}</span>
      </div>
    `;

    // Line items
    if (receiptLineItems) {
      receiptLineItems.innerHTML = '';
      estimate.lineItems.forEach(item => {
        const row = document.createElement('div');
        row.className = 'receipt-line-item';
        row.innerHTML = `
          <span class="receipt-line-label"><i class="fa-solid fa-angle-right" style="font-size: 0.75rem; color: var(--gold-primary);"></i> ${item.label}</span>
          <span class="receipt-line-val">${formatMoney(item.amount, currentCurrency)}</span>
        `;
        receiptLineItems.appendChild(row);
      });
    }

    // Totals
    if (receiptGrossTotal) {
      receiptGrossTotal.textContent = formatMoney(estimate.grossTotal, currentCurrency);
    }

    if (receiptDiscountRow && receiptDiscountAmount) {
      if (estimate.discountAmount > 0) {
        receiptDiscountRow.style.display = 'flex';
        receiptDiscountAmount.textContent = `-${formatMoney(estimate.discountAmount, currentCurrency)} (${Math.round(estimate.discountPct * 100)}% off)`;
      } else {
        receiptDiscountRow.style.display = 'none';
      }
    }

    if (receiptVatRow && receiptVatAmount) {
      if (currentCalcVat) {
        receiptVatRow.style.display = 'flex';
        receiptVatAmount.textContent = formatMoney(estimate.vatAmount, currentCurrency);
      } else {
        receiptVatRow.style.display = 'none';
      }
    }

    if (receiptGrandTotal) {
      receiptGrandTotal.textContent = formatMoney(estimate.grandTotal, currentCurrency);
    }

    if (receiptCurrencyNote) {
      receiptCurrencyNote.textContent = `Indicative commercial rate in ${currentCurrency === 'NGN' ? 'Nigerian Naira (₦)' : 'US Dollars ($)'}`;
    }

    if (calcRangeCurrent) {
      calcRangeCurrent.textContent = `Current: ${estimate.qty}`;
    }
  }

  function renderDynamicOptions(categoryKey, objectId) {
    if (!calcDynamicOptions) return;
    calcDynamicOptions.innerHTML = '';

    const catData = calculatorObjects[categoryKey];
    if (!catData || !catData.options) return;

    catData.options.forEach(opt => {
      const block = document.createElement('div');
      block.className = 'calc-option-block';

      if (opt.type === 'select') {
        let optionsHtml = '';
        opt.choices.forEach((choice, idx) => {
          optionsHtml += `<option value="${idx}" ${currentCalcOptions[opt.id] === idx ? 'selected' : ''}>${choice.label}</option>`;
        });

        block.innerHTML = `
          <label class="calc-label" for="opt_${opt.id}">
            <i class="fa-solid fa-sliders"></i> ${opt.label}:
          </label>
          <select id="opt_${opt.id}" class="calc-select form-control" data-opt-id="${opt.id}">
            ${optionsHtml}
          </select>
        `;

        const selectEl = block.querySelector('select');
        selectEl.addEventListener('change', (e) => {
          currentCalcOptions[opt.id] = parseInt(e.target.value, 10);
          updateCalculatorUI();
        });
      } else if (opt.type === 'checkbox') {
        const isChecked = Boolean(currentCalcOptions[opt.id]);
        block.innerHTML = `
          <label class="calc-checkbox-label">
            <input type="checkbox" data-opt-id="${opt.id}" ${isChecked ? 'checked' : ''}>
            <span>${opt.label}</span>
          </label>
        `;

        const checkEl = block.querySelector('input[type="checkbox"]');
        checkEl.addEventListener('change', (e) => {
          currentCalcOptions[opt.id] = e.target.checked;
          updateCalculatorUI();
        });
      }

      calcDynamicOptions.appendChild(block);
    });
  }

  function updateObjectParameters(objectId) {
    const catData = calculatorObjects[currentCalcCategory];
    if (!catData) return;
    const obj = catData.items.find(i => i.id === objectId) || catData.items[0];

    if (calcUnitLabel) calcUnitLabel.textContent = obj.unit;
    if (calcQtyRange) {
      calcQtyRange.min = obj.minQty;
      calcQtyRange.max = obj.maxQty;
      calcQtyRange.step = obj.step;
      calcQtyRange.value = currentCalcQty;
    }
    if (calcQtyInput) {
      calcQtyInput.min = obj.minQty;
      calcQtyInput.max = obj.maxQty;
      calcQtyInput.step = obj.step;
      calcQtyInput.value = currentCalcQty;
    }
    if (calcRangeMin) calcRangeMin.textContent = `Min: ${obj.minQty}`;
    if (calcRangeMax) calcRangeMax.textContent = `Max: ${obj.maxQty}`;
    if (calcRangeCurrent) calcRangeCurrent.textContent = `Current: ${currentCalcQty}`;
  }

  function initCalculatorCategory(categoryKey) {
    const catData = calculatorObjects[categoryKey];
    if (!catData) return;

    currentCalcCategory = categoryKey;

    // Update Category Tabs
    calcCategoryTabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-cat') === categoryKey;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // Update Header badges
    if (calcCategoryBadge) calcCategoryBadge.textContent = catData.label;
    if (calcCategoryDesc) calcCategoryDesc.textContent = catData.description;

    // Populate Object Dropdown
    if (calcObjectSelect) {
      calcObjectSelect.innerHTML = '';
      catData.items.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.name} (${item.unit}) - ${formatMoney(currentCurrency === 'NGN' ? item.priceNGN : item.priceUSD, currentCurrency)}`;
        calcObjectSelect.appendChild(opt);
      });
      calcObjectSelect.value = catData.items[0].id;
    }

    currentCalcObjectId = catData.items[0].id;
    currentCalcQty = catData.items[0].defaultQty || catData.items[0].minQty;

    // Reset default options for category
    currentCalcOptions = {};
    catData.options.forEach(opt => {
      if (opt.type === 'select') {
        currentCalcOptions[opt.id] = 0;
      } else if (opt.type === 'checkbox') {
        currentCalcOptions[opt.id] = false;
      }
    });

    updateObjectParameters(currentCalcObjectId);
    renderDynamicOptions(categoryKey, currentCalcObjectId);
    updateCalculatorUI();
  }

  // Calculator Category Tab Clicks
  calcCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-cat');
      if (cat && calculatorObjects[cat]) {
        initCalculatorCategory(cat);
      }
    });
  });

  // Object Select Change
  if (calcObjectSelect) {
    calcObjectSelect.addEventListener('change', (e) => {
      currentCalcObjectId = e.target.value;
      const catData = calculatorObjects[currentCalcCategory];
      const obj = catData.items.find(i => i.id === currentCalcObjectId);
      if (obj) {
        currentCalcQty = obj.defaultQty || obj.minQty;
      }
      updateObjectParameters(currentCalcObjectId);
      renderDynamicOptions(currentCalcCategory, currentCalcObjectId);
      updateCalculatorUI();
    });
  }

  // Quantity Slider & Input Two-Way Binding
  if (calcQtyRange && calcQtyInput) {
    calcQtyRange.addEventListener('input', (e) => {
      currentCalcQty = parseInt(e.target.value, 10);
      calcQtyInput.value = currentCalcQty;
      updateCalculatorUI();
    });

    calcQtyInput.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      const min = parseInt(calcQtyInput.min, 10) || 1;
      const max = parseInt(calcQtyInput.max, 10) || 1000;
      if (isNaN(val)) val = min;
      if (val < min) val = min;
      if (val > max) val = max;
      currentCalcQty = val;
      calcQtyRange.value = currentCalcQty;
      updateCalculatorUI();
    });
  }

  // Quantity Increment / Decrement Buttons
  if (calcQtyDecBtn && calcQtyInput) {
    calcQtyDecBtn.addEventListener('click', () => {
      const step = parseInt(calcQtyInput.step, 10) || 1;
      const min = parseInt(calcQtyInput.min, 10) || 1;
      currentCalcQty = Math.max(min, currentCalcQty - step);
      calcQtyInput.value = currentCalcQty;
      if (calcQtyRange) calcQtyRange.value = currentCalcQty;
      updateCalculatorUI();
    });
  }

  if (calcQtyIncBtn && calcQtyInput) {
    calcQtyIncBtn.addEventListener('click', () => {
      const step = parseInt(calcQtyInput.step, 10) || 1;
      const max = parseInt(calcQtyInput.max, 10) || 1000;
      currentCalcQty = Math.min(max, currentCalcQty + step);
      calcQtyInput.value = currentCalcQty;
      if (calcQtyRange) calcQtyRange.value = currentCalcQty;
      updateCalculatorUI();
    });
  }

  // VAT Toggle Listener
  if (calcVatToggle) {
    calcVatToggle.addEventListener('change', (e) => {
      currentCalcVat = e.target.checked;
      updateCalculatorUI();
    });
  }

  // Add Calculated Estimate to RFQ Basket
  if (calcAddRfqBtn) {
    calcAddRfqBtn.addEventListener('click', () => {
      const estimate = calculateCurrentEstimate();
      if (!estimate) return;

      const calcTitle = `${estimate.object.name} [Calculated Batch: ${estimate.qty} ${estimate.unit}${estimate.qty > 1 && !estimate.unit.endsWith('s') && !estimate.unit.includes('(') ? 's' : ''}]`;
      const specSummary = estimate.lineItems.map(l => l.label).join(' • ');

      const customItem = {
        id: `calc-est-${Date.now()}`,
        name: calcTitle,
        category: currentCalcCategory,
        categoryLabel: estimate.category.label,
        spec: `${specSummary}${estimate.discountAmount > 0 ? ` (Applied ${estimate.discountLabel})` : ''}${currentCalcVat ? ' [Includes 7.5% Corporate VAT]' : ''}`,
        priceNGN: currentCurrency === 'NGN' ? Math.round(estimate.grandTotal) : Math.round(estimate.grandTotal * 1500),
        priceUSD: currentCurrency === 'USD' ? parseFloat(estimate.grandTotal.toFixed(2)) : parseFloat((estimate.grandTotal / 1500).toFixed(2)),
        unit: 'calculated quote',
        quantity: 1,
        inStock: true,
        image: 'assets/hero-farm.png',
        fallbackIcon: estimate.category.icon
      };

      rfqCart.push(customItem);
      updateCartCounts();
      showToast(`Added calculated estimate (${formatMoney(estimate.grandTotal, currentCurrency)}) to your Wholesale RFQ Basket!`);
    });
  }

  // WhatsApp Quote
  if (calcSendWhatsappBtn) {
    calcSendWhatsappBtn.addEventListener('click', () => {
      const estimate = calculateCurrentEstimate();
      if (!estimate) return;

      let msg = `*TERRABLOOM INTEGRATED FARMS - CALCULATED ESTIMATE*\n`;
      msg += `Location: Plot 1-6 Freedom Way, Lagos-Ibadan Expressway\n`;
      msg += `Quoting Currency: ${estimate.currency}\n\n`;
      msg += `*Selected Object:* ${estimate.object.name}\n`;
      msg += `*Category:* ${estimate.category.label}\n`;
      msg += `*Scale / Volume:* ${estimate.qty} ${estimate.unit}${estimate.qty > 1 && !estimate.unit.endsWith('s') && !estimate.unit.includes('(') ? 's' : ''}\n\n`;
      msg += `*Cost Breakdown:*\n`;
      estimate.lineItems.forEach((li, idx) => {
        msg += ` ${idx + 1}. ${li.label}: ${formatMoney(li.amount, estimate.currency)}\n`;
      });
      msg += `\n*Gross Subtotal:* ${formatMoney(estimate.grossTotal, estimate.currency)}\n`;
      if (estimate.discountAmount > 0) {
        msg += `*Volume Rebate:* -${formatMoney(estimate.discountAmount, estimate.currency)} (${estimate.discountLabel})\n`;
      }
      if (currentCalcVat) {
        msg += `*Statutory VAT (7.5%):* ${formatMoney(estimate.vatAmount, estimate.currency)}\n`;
      }
      msg += `*TOTAL ESTIMATED FEE: ${formatMoney(estimate.grandTotal, estimate.currency)}*\n\n`;
      msg += `Please confirm stock reservation, dispatch timeline, and formal commercial invoice. Thank you!`;

      const phone = '2348033333333';
      const encoded = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(encoded, '_blank');
      showToast('Opening WhatsApp with your calculated quotation breakdown...');
    });
  }

  // Copy / Print Quotation
  if (calcCopySummaryBtn) {
    calcCopySummaryBtn.addEventListener('click', () => {
      const estimate = calculateCurrentEstimate();
      if (!estimate) return;

      let summary = `TERRABLOOM INTEGRATED FARMS - QUOTATION ESTIMATE\n`;
      summary += `Object: ${estimate.object.name}\n`;
      summary += `Category: ${estimate.category.label}\n`;
      summary += `Volume / Scale: ${estimate.qty} ${estimate.unit}${estimate.qty > 1 && !estimate.unit.endsWith('s') && !estimate.unit.includes('(') ? 's' : ''}\n`;
      summary += `Breakdown:\n`;
      estimate.lineItems.forEach(li => {
        summary += ` - ${li.label}: ${formatMoney(li.amount, estimate.currency)}\n`;
      });
      if (estimate.discountAmount > 0) {
        summary += ` - Volume Rebate: -${formatMoney(estimate.discountAmount, estimate.currency)} (${estimate.discountLabel})\n`;
      }
      if (currentCalcVat) {
        summary += ` - Statutory VAT (7.5%): ${formatMoney(estimate.vatAmount, estimate.currency)}\n`;
      }
      summary += `TOTAL ESTIMATED FEE: ${formatMoney(estimate.grandTotal, estimate.currency)}\n`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(summary).then(() => {
          showToast('Quotation estimate copied to clipboard!');
        }).catch(() => {
          window.print();
        });
      } else {
        window.print();
      }
    });
  }

  // Reset Calculator
  if (calcResetBtn) {
    calcResetBtn.addEventListener('click', () => {
      const catData = calculatorObjects[currentCalcCategory];
      if (!catData) return;
      currentCalcObjectId = catData.items[0].id;
      currentCalcQty = catData.items[0].defaultQty || catData.items[0].minQty;
      currentCalcOptions = {};
      currentCalcVat = true;
      if (calcVatToggle) calcVatToggle.checked = true;
      initCalculatorCategory(currentCalcCategory);
      showToast('Calculator parameters reset to defaults.');
    });
  }

  // Initial Product Render & Calculator Boot
  renderProducts('all');
  updateCartCounts();
  if (document.getElementById('calculator')) {
    initCalculatorCategory('produce');
  }
});
