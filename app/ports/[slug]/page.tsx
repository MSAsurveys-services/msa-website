import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Master Database of Your Exact 42 Operational Ports with SVG Map Pin Coordinates (0-100% relative position on Africa map)
export const portsData: Record<string, { city: string; country: string; region: string; mapX: number; mapY: number }> = {
  "abidjan": { city: "Abidjan", country: "Ivory Coast", region: "West Africa", mapX: 32, mapY: 52 },
  "algoa-bay": { city: "Algoa Bay", country: "South Africa", region: "Southern Africa", mapX: 62, mapY: 90 },
  "banjul": { city: "Banjul", country: "Gambia", region: "West Africa", mapX: 18, mapY: 42 },
  "beira": { city: "Beira", country: "Mozambique", region: "Southern Africa", mapX: 68, mapY: 72 },
  "buchanan": { city: "Buchanan", country: "Liberia", region: "West Africa", mapX: 25, mapY: 51 },
  "calabar": { city: "Calabar", country: "Nigeria", region: "West Africa", mapX: 43, mapY: 51 },
  "conakry": { city: "Conakry", country: "Guinea", region: "West Africa", mapX: 20, mapY: 46 },
  "cotonou": { city: "Cotonou", country: "Benin", region: "West Africa", mapX: 37, mapY: 50 },
  "dakar": { city: "Dakar", country: "Senegal", region: "West Africa", mapX: 17, mapY: 40 },
  "dar-es-salaam": { city: "Dar Es Salaam", country: "Tanzania", region: "East Africa", mapX: 74, mapY: 58 },
  "douala": { city: "Douala", country: "Cameroon", region: "Central Africa", mapX: 45, mapY: 53 },
  "durban": { city: "Durban", country: "South Africa", region: "Southern Africa", mapX: 66, mapY: 86 },
  "freetown": { city: "Freetown", country: "Sierra Leone", region: "West Africa", mapX: 21, mapY: 48 },
  "kamsar": { city: "Kamsar", country: "Guinea", region: "West Africa", mapX: 19, mapY: 44 },
  "kribi": { city: "Kribi", country: "Cameroon", region: "Central Africa", mapX: 46, mapY: 55 },
  "lagos": { city: "Lagos", country: "Nigeria", region: "West Africa", mapX: 39, mapY: 50 },
  "limbe": { city: "Limbé", country: "Cameroon", region: "Central Africa", mapX: 44, mapY: 52 },
  "lobito": { city: "Lobito", country: "Angola", region: "Southern Africa", mapX: 49, mapY: 67 },
  "lome": { city: "Lomé", country: "Togo", region: "West Africa", mapX: 36, mapY: 50 },
  "luanda": { city: "Luanda", country: "Angola", region: "Southern Africa", mapX: 48, mapY: 63 },
  "luderitz": { city: "Lüderitz", country: "Namibia", region: "Southern Africa", mapX: 51, mapY: 81 },
  "maputo": { city: "Maputo", country: "Mozambique", region: "Southern Africa", mapX: 67, mapY: 81 },
  "matadi": { city: "Matadi", country: "DR Congo", region: "Central Africa", mapX: 49, mapY: 60 },
  "mombasa": { city: "Mombasa", country: "Kenya", region: "East Africa", mapX: 75, mapY: 53 },
  "monrovia": { city: "Monrovia", country: "Liberia", region: "West Africa", mapX: 23, mapY: 50 },
  "mtwara": { city: "Mtwara", country: "Tanzania", region: "East Africa", mapX: 75, mapY: 61 },
  "nacala": { city: "Nacala", country: "Mozambique", region: "Southern Africa", mapX: 74, mapY: 68 },
  "namibe": { city: "Namibe", country: "Angola", region: "Southern Africa", mapX: 48, mapY: 71 },
  "nouakchott": { city: "Nouakchott", country: "Mauritania", region: "West Africa", mapX: 18, mapY: 33 },
  "onne": { city: "Onne", country: "Nigeria", region: "West Africa", mapX: 42, mapY: 51 },
  "owendo": { city: "Owendo", country: "Gabon", region: "Central Africa", mapX: 46, mapY: 56 },
  "pointe-noire": { city: "Pointe-Noire", country: "Republic of the Congo", region: "Central Africa", mapX: 47, mapY: 58 },
  "port-elizabeth": { city: "Port Elizabeth", country: "South Africa", region: "Southern Africa", mapX: 61, mapY: 91 },
  "port-gentil": { city: "Port-Gentil", country: "Gabon", region: "Central Africa", mapX: 45, mapY: 57 },
  "port-harcourt": { city: "Port-Harcourt", country: "Nigeria", region: "West Africa", mapX: 41, mapY: 51 },
  "richards-bay": { city: "Richards Bay", country: "South Africa", region: "Southern Africa", mapX: 67, mapY: 85 },
  "saldanha-bay": { city: "Saldanha Bay", country: "South Africa", region: "Southern Africa", mapX: 52, mapY: 90 },
  "san-pedro": { city: "San Pédro", country: "Ivory Coast", region: "West Africa", mapX: 30, mapY: 52 },
  "sherbro-island": { city: "Sherbro Island", country: "Sierra Leone", region: "West Africa", mapX: 22, mapY: 49 },
  "tema": { city: "Tema", country: "Ghana", region: "West Africa", mapX: 34, mapY: 51 },
  "takoradi": { city: "Takoradi", country: "Ghana", region: "West Africa", mapX: 33, mapY: 51 },
  "warri": { city: "Warri", country: "Nigeria", region: "West Africa", mapX: 40, mapY: 51 },
};

// Your Exact 15 Services across 4 Specialized Categories
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
            <div className="relative w-40 h-10 flex items-center">
              {/* Primary Logo Image Call */}
              <Image 
                src="/logo.png" 
                alt="Marine Surveys Africa Logo" 
                width={160} 
                height={40} 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs tracking-widest text-slate-400 uppercase font-bold border-l border-slate-700 pl-3">
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
        {/* Breadcrumb Navigation */}
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

        {/* AFRICAN CONTINENT MAP WITH ALL 42 OPERATIONAL PORTS */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Our 42 Operational Ports Across Africa</h2>
              <p className="text-xs text-slate-400 mt-1">Highlighted pin shows active selection: <span className="text-blue-400 font-bold">{titleLocation}</span></p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block animate-ping"></span> Active Port</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></span> Operational Hub</span>
            </div>
          </div>

          <div className="relative w-full h-[450px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
            {/* Styled SVG Silhouette Vector Map of Africa */}
            <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-25 fill-slate-700 stroke-slate-600">
              <path d="M 350,150 Q 550,120 700,200 Q 800,300 780,450 Q 820,550 750,650 Q 650,850 550,950 Q 480,950 480,850 Q 450,700 350,600 Q 200,550 150,450 Q 120,300 250,200 Z" />
            </svg>

            {/* Dynamic Rendering of All 42 Port Pins onto the African Map */}
            {Object.entries(portsData).map(([key, data]) => {
              const isActive = key === params.slug;
              return (
                <Link
                  key={key}
                  href={`/ports/${key}`}
                  style={{ left: `${data.mapX}%`, top: `${data.mapY}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                  title={`${data.city}, ${data.country}`}
                >
                  <div className="relative flex items-center justify-center">
                    {isActive ? (
                      <>
                        <span className="absolute w-6 h-6 bg-blue-500/40 rounded-full animate-ping"></span>
                        <span className="w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full z-20 shadow-lg"></span>
                        <span className="absolute bottom-5 whitespace-nowrap bg-blue-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow-md z-30">
                          📍 {data.city}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 bg-slate-400 group-hover:bg-blue-400 rounded-full transition"></span>
                        <span className="hidden group-hover:block absolute bottom-4 whitespace-nowrap bg-slate-800 text-slate-200 text-[10px] px-1.5 py-0.5 rounded border border-slate-700 z-30">
                          {data.city}
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Click Directory Grid for All 42 Ports */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">All 42 Network Ports</h3>
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
            <p className="text-sm text-slate-300 mt-1">24/7 Desk Coordination & Rapid Technical Reporting across {port.country}</p>
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