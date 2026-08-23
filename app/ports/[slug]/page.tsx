import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const portsData: Record<string, { city: string; country: string; region: string; topPercent: number; leftPercent: number }> = {
  "abidjan": { city: "Abidjan", country: "Ivory Coast", region: "West Africa", topPercent: 54, leftPercent: 28 },
  "algoa-bay": { city: "Algoa Bay", country: "South Africa", region: "Southern Africa", topPercent: 88, leftPercent: 57 },
  "banjul": { city: "Banjul", country: "Gambia", region: "West Africa", topPercent: 41, leftPercent: 12 },
  "beira": { city: "Beira", country: "Mozambique", region: "Southern Africa", topPercent: 71, leftPercent: 66 },
  "buchanan": { city: "Buchanan", country: "Liberia", region: "West Africa", topPercent: 52, leftPercent: 20 },
  "calabar": { city: "Calabar", country: "Nigeria", region: "West Africa", topPercent: 52, leftPercent: 41 },
  "conakry": { city: "Conakry", country: "Guinea", region: "West Africa", topPercent: 47, leftPercent: 15 },
  "cotonou": { city: "Cotonou", country: "Benin", region: "West Africa", topPercent: 51, leftPercent: 33 },
  "dakar": { city: "Dakar", country: "Senegal", region: "West Africa", topPercent: 39, leftPercent: 11 },
  "dar-es-salaam": { city: "Dar Es Salaam", country: "Tanzania", region: "East Africa", topPercent: 58, leftPercent: 72 },
  "douala": { city: "Douala", country: "Cameroon", region: "Central Africa", topPercent: 53, leftPercent: 43 },
  "durban": { city: "Durban", country: "South Africa", region: "Southern Africa", topPercent: 84, leftPercent: 62 },
  "freetown": { city: "Freetown", country: "Sierra Leone", region: "West Africa", topPercent: 49, leftPercent: 16 },
  "kamsar": { city: "Kamsar", country: "Guinea", region: "West Africa", topPercent: 45, leftPercent: 14 },
  "kribi": { city: "Kribi", country: "Cameroon", region: "Central Africa", topPercent: 55, leftPercent: 44 },
  "lagos": { city: "Lagos", country: "Nigeria", region: "West Africa", topPercent: 51, leftPercent: 36 },
  "limbe": { city: "Limbé", country: "Cameroon", region: "Central Africa", topPercent: 53, leftPercent: 42 },
  "lobito": { city: "Lobito", country: "Angola", region: "Southern Africa", topPercent: 66, leftPercent: 48 },
  "lome": { city: "Lomé", country: "Togo", region: "West Africa", topPercent: 51, leftPercent: 32 },
  "luanda": { city: "Luanda", country: "Angola", region: "Southern Africa", topPercent: 62, leftPercent: 47 },
  "luderitz": { city: "Lüderitz", country: "Namibia", region: "Southern Africa", topPercent: 79, leftPercent: 49 },
  "maputo": { city: "Maputo", country: "Mozambique", region: "Southern Africa", topPercent: 79, leftPercent: 64 },
  "matadi": { city: "Matadi", country: "DR Congo", region: "Central Africa", topPercent: 59, leftPercent: 48 },
  "mombasa": { city: "Mombasa", country: "Kenya", region: "East Africa", topPercent: 53, leftPercent: 73 },
  "monrovia": { city: "Monrovia", country: "Liberia", region: "West Africa", topPercent: 51, leftPercent: 18 },
  "mtwara": { city: "Mtwara", country: "Tanzania", region: "East Africa", topPercent: 61, leftPercent: 73 },
  "nacala": { city: "Nacala", country: "Mozambique", region: "Southern Africa", topPercent: 67, leftPercent: 72 },
  "namibe": { city: "Namibe", country: "Angola", region: "Southern Africa", topPercent: 70, leftPercent: 47 },
  "nouakchott": { city: "Nouakchott", country: "Mauritania", region: "West Africa", topPercent: 32, leftPercent: 13 },
  "onne": { city: "Onne", country: "Nigeria", region: "West Africa", topPercent: 52, leftPercent: 39 },
  "owendo": { city: "Owendo", country: "Gabon", region: "Central Africa", topPercent: 56, leftPercent: 44 },
  "pointe-noire": { city: "Pointe-Noire", country: "Republic of the Congo", region: "Central Africa", topPercent: 58, leftPercent: 46 },
  "port-elizabeth": { city: "Port Elizabeth", country: "South Africa", region: "Southern Africa", topPercent: 89, leftPercent: 56 },
  "port-gentil": { city: "Port-Gentil", country: "Gabon", region: "Central Africa", topPercent: 57, leftPercent: 43 },
  "port-harcourt": { city: "Port-Harcourt", country: "Nigeria", region: "West Africa", topPercent: 52, leftPercent: 38 },
  "richards-bay": { city: "Richards Bay", country: "South Africa", region: "Southern Africa", topPercent: 83, leftPercent: 63 },
  "saldanha-bay": { city: "Saldanha Bay", country: "South Africa", region: "Southern Africa", topPercent: 87, leftPercent: 48 },
  "san-pedro": { city: "San Pédro", country: "Ivory Coast", region: "West Africa", topPercent: 54, leftPercent: 26 },
  "sherbro-island": { city: "Sherbro Island", country: "Sierra Leone", region: "West Africa", topPercent: 50, leftPercent: 17 },
  "tema": { city: "Tema", country: "Ghana", region: "West Africa", topPercent: 52, leftPercent: 30 },
  "takoradi": { city: "Takoradi", country: "Ghana", region: "West Africa", topPercent: 53, leftPercent: 29 },
  "warri": { city: "Warri", country: "Nigeria", region: "West Africa", topPercent: 52, leftPercent: 37 },
};

const serviceCategories = [
  {
    category: "Cargo & Quantity Management",
    services: [
      "Draft Surveys",
      "Bunker Quantity Surveys (BQS)",
      "Tally and Supervision",
      "Pre-Shipment Inspections (PSI)"
    ]
  },
  {
    category: "Vessel Integrity & Chartering Support",
    services: [
      "On / Off Hire Bunker Surveys",
      "On / Off Hire Condition Surveys",
      "Pre-Purchase Surveys",
      "Hull and Machinery (H&M) Surveys",
      "Crane Reliability and Vessel Assessment"
    ]
  },
  {
    category: "Operational, Port & Specialized Services",
    services: [
      "Port Captain Services (Supercargo)",
      "Project Cargo & Heavy Lift",
      "Container Inspections",
      "Cargo Hold Cleaning",
      "Underwater Inspection and Cleaning"
    ]
  },
  {
    category: "Damage & Forensic Investigation",
    services: [
      "Cargo Damage Surveys"
    ]
  }
];

// Port Operations Gallery Sample Items
const galleryItems = [
  { title: "Vessel Draft Surveying", desc: "Precise displacement calculations at berth", category: "Inspection" },
  { title: "Container Hold Integrity", desc: "Structural & lock mechanism inspection", category: "Cargo" },
  { title: "Bunker Quantity Surveying", desc: "Fuel measurement and sampling attendance", category: "Marine" },
  { title: "Heavy Lift Supervision", desc: "Project cargo loading and lashing audit", category: "Operations" },
];

export async function generateStaticParams() {
  return Object.keys(portsData).map((slug) => ({ slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const port = portsData[params.slug];
  if (!port) return {};

  return {
    title: `Marine Surveys in ${port.city}, ${port.country} | African Port Network`,
    description: `Independent marine & cargo surveying in ${port.city} (${port.country}). Full technical attendance across all operational terminals.`,
  };
}

export default function PortSEOPage({ params }: Props) {
  const port = portsData[params.slug];
  if (!port) notFound();

  const titleLocation = `${port.city}, ${port.country}`;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* HEADER WITH INTEGRATED LOGO */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Marine Surveys Africa Logo" 
              width={160} 
              height={40} 
              className="object-contain"
              priority
            />
            <span className="text-xs tracking-widest text-slate-400 uppercase font-bold border-l border-slate-700 pl-3 hidden sm:inline">
              African Port Network
            </span>
          </Link>
          <a 
            href={`mailto:services@marinesurveysafrica.com?subject=Survey Nomination - ${port.city}`}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
          >
            Nominate Surveyor
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-8">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span className="text-slate-800 font-semibold">{titleLocation}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{port.region} Operational Hub</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Marine Surveying & Cargo Inspections in {titleLocation}
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            We provide specialized marine and cargo surveying services tailored to protect your financial interests, ensure compliance, and streamline your operations at every stage of transit across all terminals and anchorages in **{titleLocation}**.
          </p>
        </div>

        {/* REAL GRAPHIC MAP OF AFRICA WITH ALL 42 OPERATIONAL PORTS */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Our 42 Operational Ports Across Africa</h2>
              <p className="text-xs text-slate-400 mt-1">Active Selected Location: <span className="text-blue-400 font-bold">{titleLocation}</span></p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block animate-ping"></span> Active Port</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> Operational Hub</span>
            </div>
          </div>

          <div className="relative w-full h-[520px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
            {/* Geographic Vector Continental Africa Map */}
            <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-40 fill-slate-800 stroke-blue-500/30 stroke-2">
              <path d="M 320,120 C 450,100 650,110 750,220 C 850,320 880,420 810,530 C 780,580 820,680 750,780 C 680,880 580,980 480,980 C 420,980 420,880 400,780 C 380,680 320,620 220,560 C 120,500 80,380 140,260 C 180,180 250,130 320,120 Z" />
            </svg>

            {/* Dynamic Rendering of All 42 Port Markers */}
            {Object.entries(portsData).map(([key, data]) => {
              const isActive = key === params.slug;
              return (
                <Link
                  key={key}
                  href={`/ports/${key}`}
                  style={{ top: `${data.topPercent}%`, left: `${data.leftPercent}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  title={`${data.city}, ${data.country}`}
                >
                  <div className="relative flex items-center justify-center">
                    {isActive ? (
                      <>
                        <span className="absolute w-8 h-8 bg-blue-500/50 rounded-full animate-ping"></span>
                        <span className="w-4 h-4 bg-blue-500 border-2 border-white rounded-full z-20 shadow-lg"></span>
                        <span className="absolute -top-8 whitespace-nowrap bg-blue-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded shadow-xl z-30">
                          📍 {data.city}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="w-2.5 h-2.5 bg-amber-400 border border-slate-900 group-hover:scale-150 rounded-full transition shadow-md"></span>
                        <span className="hidden group-hover:block absolute -top-6 whitespace-nowrap bg-slate-900 text-amber-300 font-medium text-[10px] px-2 py-0.5 rounded border border-slate-700 z-30 shadow-md">
                          {data.city}
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Directory Grid */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Directory (All 42 Network Ports)</h3>
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(portsData).map(([key, data]) => (
                <Link
                  key={key}
                  href={`/ports/${key}`}
                  className={`text-[11px] px-2.5 py-1 rounded-md transition ${
                    key === params.slug 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {data.city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PORT OPERATIONS & FIELD GALLERY */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Field Operations</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Inspection & Attendance Gallery in {port.city}</h2>
            </div>
            <span className="text-xs text-gray-500 hidden md:inline">24/7 Technical Support</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="h-40 bg-slate-800 relative flex items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition" />
                  <span className="text-3xl">⚓</span>
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 15 Core Services Grid */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Specialized Marine & Cargo Surveying Services in {port.city}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 border rounded-xl shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Category 0{idx + 1}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">{cat.category}</h3>
              <ul className="text-xs text-gray-700 space-y-2.5 font-medium">
                {cat.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="text-blue-500">⚓</span> {service} in {port.city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nomination CTA */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Nominate a Marine Surveyor in {port.city}</h3>
            <p className="text-sm text-slate-300 mt-1">24/7 Desk Coordination & Rapid Attendance across {port.country}</p>
          </div>
          <a 
            href={`mailto:services@marinesurveysafrica.com?subject=Surveyor Nomination - ${port.city} (${port.country})`}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl whitespace-nowrap transition"
          >
            Book Survey in {port.city}
          </a>
        </div>
      </main>
    </div>
  );
}