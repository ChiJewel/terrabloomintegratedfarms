# TerraBloom Integrated Farms — Corporate Agribusiness Web Platform

> **Location:** Plot 1-6 Freedom Way, Off Lagos-Ibadan Expressway, Ogun/Lagos Border Corridor, Nigeria  
> **Brand Identity:** Premium, Corporate & International Standard Agribusiness  
> **Specialization:** Commercial Field Crops, High-Tech Greenhouse Horticulture, Bio-Secure Poultry & Certified Livestock Ranching  

---

## 🌟 Executive Overview

**TerraBloom Integrated Farms** is designed to establish an international agribusiness benchmark for West Africa. Operating from a strategic 1,200+ acre estate along Nigeria's premier arterial logistics route (Lagos-Ibadan Expressway at Plot 1-6 Freedom Way), the farm unites precision horticulture, industrial grain farming, humane bio-secure poultry, and pedigreed livestock ranching into an integrated circular bio-economy.

---

## 🚀 Key Website Features & Capabilities

### 1. 📱 Mobile-First Ergonomic Optimization
- **Full Responsive Fluid Layout:** Seamless scaling across all screen sizes (iPhone SE, Pro Max, Android tablets, and ultra-wide corporate desktop monitors).
- **Sticky Mobile Bottom Quick-Action Bar:** Instant one-tap access for mobile users to:
  - 📞 **Direct Call Desk** (`+234 (0) 800-TERRABLOOM`)
  - 💬 **Direct WhatsApp Sales Desk**
  - 📋 **Wholesale RFQ Cart Viewer**
  - 📍 **GPS Expressway Directions**
- **Slide-Out Mobile Drawer Navigation:** Smooth animated touch drawer with contact information, opening hours, and one-tap social channels.
- **Thumb-Friendly Touch Targets:** All buttons, interactive tabs, form controls, and cart counters are calibrated with a minimum 48px height.
- **Safe Area Inset Support:** Native compatibility with Apple iOS home indicator and notch geometry (`env(safe-area-inset-bottom)`).

### 2. 🎨 Premium International Corporate Branding
- **Color Architecture:**
  - *Deep Emerald Forest Green* (`#082115`, `#0D2E1F`): Representing fertile Nigerian loam, prosperity, and longevity.
  - *Refined Champagne Gold* (`#C99726`, `#E5B239`): Signifying harvest distinction, premium value, and export excellence.
  - *Crisp Clean Off-Whites & Translucent Glassmorphism*: Delivering world-class corporate readability and cleanliness.
- **Typography:** Contemporary corporate pairings with *Plus Jakarta Sans* and *Cinzel*.
- **Accreditation Highlights:** NAFDAC compliance, Federal Ministry of Agriculture standards, Global G.A.P. guidelines, and CAC registration.

### 3. 🌾 Four Integrated Agricultural Divisions (Interactive Panes)
1. **Greenhouse Horticulture & Vegetables:** Dutch-style poly-houses with precision drip fertigation producing Grade A sweet bell peppers (red, yellow, orange), vine plum tomatoes, English seedless cucumbers, and organic greens.
2. **Commercial Crops & Field Grains:** Mechanized center-pivot acreage cultivating high-protein milling maize, non-GMO soybeans, industrial high-starch cassava, and sorghum.
3. **Commercial Bio-Secure Poultry:** Computerized tunnel-ventilated houses producing 60,000+ daily brown table eggs, blast-frozen dressed broilers (1.8kg–2.2kg), and parent-stock Ross 308/Cobb 500 day-old chicks.
4. **Livestock Ranching & Dairy Genetics:** Pedigree Boran & Friesian cross beef cattle, purebred South African Boer goats, and West African dwarf sheep raised on nutritious rotational pasture with RFID ear-tag tracking.
5. **Solar-Powered Cold-Chain Logistics:** On-site cold hub (-18°C to +4°C) with dedicated refrigerated trucks ensuring same-day transit to Lagos supermarkets and hospitality hubs.

### 4. 🛒 Interactive Wholesale Produce Catalog & Live Quote Builder
- **Category Filter Tabs:** Filter produce by *Fresh Tubers & Roots*, *Greenhouse Vegetables*, *Day-Old & Brooded Chicks*, *Improved Seeds & Inputs*, *Farm Consultations*, *Commercial Poultry & Eggs*, *Livestock & Meat*, or *Field Grains*.
- **Featured Tuber Portfolio:**
  - Export-Grade Nigerian White Yams (Abuja / Pona Variety) in 50-tuber ventilated crates
  - Pro-Vitamin A Bio-Fortified Orange-Fleshed Sweet Potatoes (OFSP)
  - Industrial High-Starch Cassava Roots (TME 419) in bulk metric tonnes
  - Grade A Fresh Irish Table Potatoes
  - Certified Sprouted Seed Yam Setts for planting
- **Dual Currency Switcher:** Toggle between **₦ NGN (Naira)** for domestic supply and **$ USD** for international export contracts.
- **Interactive RFQ Basket:** Add items, adjust bulk quantities, calculate total costs in real-time, and transmit via:
  - **Direct WhatsApp API:** Generates a pre-formatted, itemized quotation ready to send to the sales desk with a single tap.
  - **Official B2B Tender Request:** Logs formal tender requirements for enterprise food processors and supermarket chains.

### 5. 📍 Strategic Expressway Logistics Hub (Plot 1-6 Freedom Way)
- **Transit Velocity:**
  - Lagos Berger / Ikeja CBD: **25 Minutes**
  - Sagamu Industrial Interchange: **15 Minutes**
  - Ibadan City (Challenge / Tollgate): **45 Minutes**
  - Apapa & Lekki Deep Sea Ports: **Direct Freight Access**
- Interactive styled Google Map and highway driving guide.

### 6. 📅 Executive Farm Visit & B2B Inquiry Portal
- Booking module for institutional buyers, supermarket procurement officers, agricultural investors, culinary chefs, and educational delegations.

---

## 🖼️ Brand Assets & AI Image Generation

All generated brand assets are organized in the `assets/` folder:
- **`assets/logo.png` / `assets/logo.jpg`:** Official brand logo for TerraBloom Integrated Farms featuring an emerald and champagne gold crest badge with stylized sprout and furrowed earth lines on pure white background.
- **`assets/crops-vegetables.png`:** Ultra-high resolution commercial photography showcasing high-tech hydroponic vertical greenhouses, ripe vine tomatoes, vibrant bell peppers, and professional agronomists in uniform.
- **`assets/hero-farm.png`:** Expansive commercial agricultural landscape along the Lagos-Ibadan corridor.
- **`assets/poultry-livestock.png`:** Bio-secure poultry operations and pastoral livestock ranching.
- **`assets/harvest-distribution.png`:** Packhouse grading, sorting, and cold-chain refrigerated distribution.

---

## 💻 How to Run the Website Locally

### Option 1: Using the Built-In Node Server (Running)
The website is currently hosted locally on port 3000:
```bash
node server.js
```
Open your browser to: **[http://localhost:3000/](http://localhost:3000/)**

### Option 2: Direct File Viewing
You can open `index.html` directly in any web browser without needing any web server:
- Path: `c:\Users\User\Documents\terrabloom integrated farms\index.html`

### Option 3: Deploy to Vercel (Production Ready)
The repository is fully pre-configured for instant zero-config deployment to **Vercel** with:
- `vercel.json`: Edge routing, clean URLs, immutable asset caching, and strict enterprise security headers (CSP, HSTS, X-Frame-Options).
- `.gitignore`: Configured to exclude system files, build cache, logs, and `node_modules/`.
- `package.json`: Configured with static production build commands.

#### Method A: Using Vercel CLI (Fastest — 1 Minute)
Run inside the project root:
```bash
npx vercel
```
Follow the interactive prompts:
- Set up and deploy: **`Y`**
- Which scope: *(Select your Vercel account)*
- Link to existing project: **`N`**
- What's your project's name: **`terrabloom-integrated-farms`**
- In which directory is your code located: **`./`**
- Deploy to production:
  ```bash
  npx vercel --prod
  ```

#### Method B: Deploying via GitHub to Vercel Dashboard
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete TerraBloom website with Vercel configuration & mobile optimization"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/terrabloom-integrated-farms.git
   git branch -M main
   git push -u origin main
   ```
3. In [Vercel Dashboard](https://vercel.com/new):
   - Click **Add New...** > **Project**
   - Select your GitHub repository
   - Leave Framework Preset as **Other** (Root directory `./`)
   - Click **Deploy**

---

## 🧮 Integrated Agricultural Fee & Procurement Calculator
The platform features an interactive real-time multi-object fees calculator accessible at `#calculator`:
1. **Bulk Produce Haulage & Wholesale:** Calculates tonnage, produce crate quantities, delivery destination corridors (Lagos, Ogun, Ibadan, Interstate, Port), and refrigerated cold-chain options.
2. **Day-Old & Brooded Chicks Booking:** Calculates batch sizes (Ross 308 / Cobb 500 broilers, Lohmann Brown pullets, turkey poults), vaccination packages, brooding feed starter packs, and specialized aerated transit crates.
3. **Livestock & Genetics Procurement:** Computes pedigreed breeding stock (Boran cross bulls, South African Boer goats, West African dwarf sheep), veterinary quarantine certification, RFID tracking tags, and transit escort insurance.
4. **Soil & Farm Feasibility Consultation:** Real-time pricing for soil chemistry profiling, greenhouse engineering surveys, and turn-key agronomy advisory packages.
5. **Real-time Live Receipt & Direct WhatsApp Export:** Instant breakdown of Subtotal, Logistics/Haulage, Quality Assurance/Certification, Applied Tier Bulk Discounts, and Grand Total with 1-click official quote generation.

---

## 📱 Mobile-First Viewport & Touch Ergonomics
- **Safe Area Insets:** Fully respects modern notch and iPhone Home Indicator margins via `env(safe-area-inset-bottom)`.
- **Zero Input Zoom:** Strict 16px mobile input font sizes ensure iOS Safari never zooms uncontrollably on form interaction.
- **Horizontal Momentum Scrolling:** Smooth touch swipeable tab navigation for Divisions, Catalog filters, and Calculator tabs.
- **Sticky Quick-Action Bottom Bar:** 1-tap thumb navigation for Call Desk, WhatsApp Sales Desk, Quote Builder, and the interactive Fee Calculator.

