export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image?: string;
}

export interface Port {
  id: string;
  name: string;
  country: string;
}

export const SERVICES: Service[] = [
  // --- CARGO & QUANTITY MANAGEMENT ---
  {
    id: "draft-surveys",
    title: "Draft Surveys",
    category: "Cargo & Quantity Management",
    description: "Hydrostatic calculations before and after cargo operations to establish dry bulk weight.",
    fullDescription: "We execute precise hydrostatic calculations before and after cargo operations to establish the exact weight of bulk shipments like coal, grain, and iron ore. By taking meticulous draft mark readings and adjusting for ballast, trim, and water density, we guarantee verifiable figures that safeguard you against weight-discrepancy losses.",
    image: "/services/draft-surveys.jpg"
  },
  {
    id: "bunker-quantity-surveys",
    title: "Bunker Quantity Surveys (BQS)",
    category: "Cargo & Quantity Management",
    description: "Independent fuel oil measurement and density testing to prevent short delivery.",
    fullDescription: "Our independent surveyors measure fuel oil transfers via barge or shore pipe to safeguard your bunker purchases. We conduct tank soundings, verify fuel temperatures, and test density before and after delivery to ensure you receive the exact volume paid for and eliminate short-delivery disputes.",
    image: "/services/bunker-quantity-surveys.jpg"
  },
  {
    id: "tally-and-supervision",
    title: "Tally and Supervision",
    category: "Cargo & Quantity Management",
    description: "Physical unit counts, live handling monitoring, and stowage verification.",
    fullDescription: "We deliver continuous physical counts and live monitoring during loading and discharge. Our team inspects packaging, logs damaged units on the spot, monitors handling practices, and verifies stowage to ensure your cargo counts match the manifests precisely.",
    image: "/services/tally-and-supervision.jpg"
  },
  {
    id: "pre-shipment-inspections",
    title: "Pre-Shipment Inspections (PSI)",
    category: "Cargo & Quantity Management",
    description: "Condition, specification, and L/C compliance checks before cargo leaves origin.",
    fullDescription: "Before your goods leave the factory floor, warehouse, or quay, we verify cargo condition, specifications, quantity, packaging, and labeling. We ensure full compliance with letters of credit and international regulatory standards to head off destination disputes.",
    image: "/services/pre-shipment-inspections.jpg"
  },

  // --- VESSEL INTEGRITY & CHARTERING SUPPORT ---
  {
    id: "on-off-hire-bunker-surveys",
    title: "On / Off Hire Bunker Surveys",
    category: "Vessel Integrity & Chartering Support",
    description: "Definitive fuel inventory soundings at charter delivery and redelivery.",
    fullDescription: "We conduct accurate fuel tank soundings at the exact moment a vessel enters or exits a charter party. Our team delivers definitive fuel inventory reports that give owners and charterers complete clarity for seamless financial settlements.",
    image: "/services/on-off-hire-bunker-surveys.jpg"
  },
  {
    id: "on-off-hire-condition-surveys",
    title: "On / Off Hire Condition Surveys",
    category: "Vessel Integrity & Chartering Support",
    description: "Physical examinations of decks, holds, and equipment to document pre-existing wear.",
    fullDescription: "We perform thorough physical examinations of decks, holds, hatch covers, and cargo equipment at charter onset and termination. We meticulously document existing wear, tear, or structural defects to shield you from unfair liability claims.",
    image: "/services/on-off-hire-condition-surveys.jpg"
  },
  {
    id: "pre-purchase-surveys",
    title: "Pre-Purchase Surveys",
    category: "Vessel Integrity & Chartering Support",
    description: "Deep-dive technical evaluations of hull, machinery, and class records for buyers.",
    fullDescription: "We provide deep-dive technical evaluations for prospective ship buyers and financial institutions. Our inspectors evaluate hull condition, machinery health, class records, and maintenance history to give you a clear assessment of market value and upcoming capital requirements.",
    image: "/services/pre-purchase-surveys.jpg"
  },
  {
    id: "hull-and-machinery-surveys",
    title: "Hull and Machinery (H&M) Surveys",
    category: "Vessel Integrity & Chartering Support",
    description: "Structural and mechanical health assessments for propulsion, auxiliary, and hull systems.",
    fullDescription: "We assess the operational condition and structural integrity of a vessel’s hull, main propulsion, auxiliary equipment, and electrical systems. Whether for routine insurance profiling or incident evaluations, we provide actionable technical clarity.",
    image: "/services/hull-and-machinery-surveys.jpg"
  },
  {
    id: "crane-reliability-and-vessel-assessment",
    title: "Crane Reliability and Vessel Assessment",
    category: "Vessel Integrity & Chartering Support",
    description: "Structural checks and load testing for shipboard cranes and cargo gear.",
    fullDescription: "We test and evaluate shipboard cargo gear, derricks, and deck cranes. Through structural checks, safety interlock tests, and load testing reviews, we identify mechanical risks before they lead to costly operational failures or port delays.",
    image: "/services/crane-reliability-vessel-assessment.jpg"
  },

  // --- OPERATIONAL, PORT & SPECIALIZED SERVICES ---
  {
    id: "port-captain-services",
    title: "Port Captain Services (Supercargo)",
    category: "Operational, Port & Specialized Services",
    description: "Master mariner representation for stowage, stability, and fast turnaround.",
    fullDescription: "We deploy master mariners and experienced supercargoes to represent your interests on the ground. We manage stowage planning, stability calculations, port authority coordination, and stevedore operations to minimize turnarounds and maximize port efficiency.",
    image: "/services/port-captain-services.jpg"
  },
  {
    id: "project-cargo-heavy-lift",
    title: "Project Cargo & Heavy Lift",
    category: "Operational, Port & Specialized Services",
    description: "Transport engineering review and loading oversight for out-of-gauge assets.",
    fullDescription: "We deliver specialized oversight for out-of-gauge, heavy, or sensitive project assets like turbines and modules. Our team reviews transport engineering plans, verifies floor-load limits, calculates sea-fastening and lashing requirements, and supervises all handling operations on-site.",
    image: "/services/project-cargo-heavy-lift.jpg"
  },
  {
    id: "container-inspections",
    title: "Container Inspections",
    category: "Operational, Port & Specialized Services",
    description: "CSC standard inspections for structural integrity, seals, and hygiene.",
    fullDescription: "We conduct structural and cleanliness inspections on dry, reefer, and specialized ISO containers under strict CSC standards. We verify door seals, flooring, structural frames, and interior hygiene so your containerized cargo travels without risk.",
    image: "/services/container-inspections.jpg"
  },
  {
    id: "cargo-hold-cleaning",
    title: "Cargo Hold Cleaning",
    category: "Operational, Port & Specialized Services",
    description: "Washing, chemical treatment, and inspection to pass strict hold readiness checks.",
    fullDescription: "We manage comprehensive hold washing, chemical treatments, and mechanical descaling to transition holds between incompatible cargoes (e.g., from petcoke to grain). We deliver clean, dry, residue-free holds that secure required hold cleanliness certificates without delay.",
    image: "/services/cargo-hold-cleaning.jpg"
  },
  {
    id: "underwater-inspection-and-cleaning",
    title: "Underwater Inspection and Cleaning",
    category: "Operational, Port & Specialized Services",
    description: "Diver/ROV hull assessments, biofouling removal, and propeller polishing.",
    fullDescription: "We deploy certified commercial divers and ROVs to inspect hulls, propellers, and sea chests without interrupting your schedule. Our team removes biofouling, performs propeller polishing, and conducts Class In-Water Surveys to boost fuel efficiency and postpone unnecessary drydocking.",
    image: "/services/underwater-inspection-cleaning.jpg"
  },

  // --- DAMAGE & FORENSIC INVESTIGATION ---
  {
    id: "cargo-damage-surveys",
    title: "Cargo Damage Surveys",
    category: "Damage & Forensic Investigation",
    description: "Rapid root-cause analysis, loss quantification, and insurance-ready reporting.",
    fullDescription: "When cargo suffers loss, contamination, wetting, or physical damage, our marine investigators act fast. We determine root causes, quantify losses, recommend immediate salvage measures, and deliver defensible survey reports to support your insurance claims or legal disputes.",
    image: "/services/cargo-damage-surveys.jpg"
  }
];

export const PORTS: Port[] = [
  { id: "abidjan", name: "Port of Abidjan", country: "Ivory Coast" },
  { id: "algoa-bay", name: "Algoa Bay", country: "South Africa" },
  { id: "banjul", name: "Port of Banjul", country: "Gambia" },
  { id: "beira", name: "Port of Beira", country: "Mozambique" },
  { id: "buchanan", name: "Port of Buchanan", country: "Liberia" },
  { id: "calabar", name: "Port of Calabar", country: "Nigeria" },
  { id: "conakry", name: "Port of Conakry", country: "Guinea" },
  { id: "cotonou", name: "Port of Cotonou", country: "Benin" },
  { id: "dakar", name: "Port of Dakar", country: "Senegal" },
  { id: "dar-es-salaam", name: "Port of Dar Es Salaam", country: "Tanzania" },
  { id: "douala", name: "Port of Douala", country: "Cameroon" },
  { id: "durban", name: "Port of Durban", country: "South Africa" },
  { id: "freetown", name: "Port of Freetown", country: "Sierra Leone" },
  { id: "kamsar", name: "Port of Kamsar", country: "Guinea" },
  { id: "kribi", name: "Kribi Deep Sea Port", country: "Cameroon" },
  { id: "lagos", name: "Port of Lagos (Apapa/Tin Can)", country: "Nigeria" },
  { id: "limbe", name: "Port of Limbe", country: "Cameroon" },
  { id: "lobito", name: "Port of Lobito", country: "Angola" },
  { id: "lome", name: "Port of Lomé", country: "Togo" },
  { id: "luanda", name: "Port of Luanda", country: "Angola" },
  { id: "luderitz", name: "Port of Lüderitz", country: "Namibia" },
  { id: "maputo", name: "Port of Maputo", country: "Mozambique" },
  { id: "matadi", name: "Port of Matadi", country: "DR Congo" },
  { id: "mombasa", name: "Port of Mombasa", country: "Kenya" },
  { id: "monrovia", name: "Port of Monrovia", country: "Liberia" },
  { id: "mtwara", name: "Port of Mtwara", country: "Tanzania" },
  { id: "nacala", name: "Port of Nacala", country: "Mozambique" },
  { id: "namibe", name: "Port of Namibe", country: "Angola" },
  { id: "nouakchott", name: "Port of Nouakchott", country: "Mauritania" },
  { id: "onne", name: "Onne Port Complex", country: "Nigeria" },
  { id: "owendo", name: "Port of Owendo (Libreville)", country: "Gabon" },
  { id: "pointe-noire", name: "Port of Pointe-Noire", country: "Congo" },
  { id: "port-elizabeth", name: "Port Elizabeth", country: "South Africa" },
  { id: "port-gentil", name: "Port-Gentil", country: "Gabon" },
  { id: "port-harcourt", name: "Port Harcourt", country: "Nigeria" },
  { id: "richards-bay", name: "Port of Richards Bay", country: "South Africa" },
  { id: "saldanha-bay", name: "Saldanha Bay", country: "South Africa" },
  { id: "san-pedro", name: "Port of San Pédro", country: "Ivory Coast" },
  { id: "sherbro-island", name: "Sherbro Island", country: "Sierra Leone" },
  { id: "tema", name: "Port of Tema", country: "Ghana" },
  { id: "takoradi", name: "Port of Takoradi", country: "Ghana" },
  { id: "warri", name: "Port of Warri", country: "Nigeria" }
];