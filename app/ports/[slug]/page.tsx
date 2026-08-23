import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Master Database of Your Exact 42 Operational Ports
export const portsData: Record<string, { city: string; country: string; region: string; lat: number; lng: number }> = {
  "abidjan": { city: "Abidjan", country: "Ivory Coast", region: "West Africa", lat: 5.3096, lng: -4.0127 },
  "algoa-bay": { city: "Algoa Bay", country: "South Africa", region: "Southern Africa", lat: -33.8333, lng: 25.6667 },
  "banjul": { city: "Banjul", country: "Gambia", region: "West Africa", lat: 13.4549, lng: -16.5790 },
  "beira": { city: "Beira", country: "Mozambique", region: "Southern Africa", lat: -19.8436, lng: 34.8389 },
  "buchanan": { city: "Buchanan", country: "Liberia", region: "West Africa", lat: 5.8808, lng: -10.0467 },
  "calabar": { city: "Calabar", country: "Nigeria", region: "West Africa", lat: 4.9589, lng: 8.3269 },
  "conakry": { city: "Conakry", country: "Guinea", region: "West Africa", lat: 9.5370, lng: -13.6785 },
  "cotonou": { city: "Cotonou", country: "Benin", region: "West Africa", lat: 6.3654, lng: 2.4183 },
  "dakar": { city: "Dakar", country: "Senegal", region: "West Africa", lat: 14.6928, lng: -17.4467 },
  "dar-es-salaam": { city: "Dar Es Salaam", country: "Tanzania", region: "East Africa", lat: -6.8235, lng: 39.2695 },
  "douala": { city: "Douala", country: "Cameroon", region: "Central Africa", lat: 4.0511, lng: 9.7679 },
  "durban": { city: "Durban", country: "South Africa", region: "Southern Africa", lat: -29.8587, lng: 31.0218 },
  "freetown": { city: "Freetown", country: "Sierra Leone", region: "West Africa", lat: 8.4844, lng: -13.2344 },
  "kamsar": { city: "Kamsar", country: "Guinea", region: "West Africa", lat: 10.6625, lng: -14.6067 },
  "kribi": { city: "Kribi", country: "Cameroon", region: "Central Africa", lat: 2.9378, lng: 9.9077 },
  "lagos": { city: "Lagos", country: "Nigeria", region: "West Africa", lat: 6.4549, lng: 3.3887 },
  "limbe": { city: "Limbé", country: "Cameroon", region: "Central Africa", lat: 4.0244, lng: 9.2049 },
  "lobito": { city: "Lobito", country: "Angola", region: "Southern Africa", lat: -12.3644, lng: 13.5469 },
  "lome": { city: "Lomé", country: "Togo", region: "West Africa", lat: 6.1375, lng: 1.2125 },
  "luanda": { city: "Luanda", country: "Angola", region: "Southern Africa", lat: -8.8390, lng: 13.2894 },
  "luderitz": { city: "Lüderitz", country: "Namibia", region: "Southern Africa", lat: -26.6481, lng: 15.1594 },
  "maputo": { city: "Maputo", country: "Mozambique", region: "Southern Africa", lat: -25.9692, lng: 32.5732 },
  "matadi": { city: "Matadi", country: "DR Congo", region: "Central Africa", lat: -5.8167, lng: 13.4500 },
  "mombasa": { city: "Mombasa", country: "Kenya", region: "East Africa", lat: -4.0435, lng: 39.6682 },
  "monrovia": { city: "Monrovia", country: "Liberia", region: "West Africa", lat: 6.3005, lng: -10.7969 },
  "mtwara": { city: "Mtwara", country: "Tanzania", region: "East Africa", lat: -10.2736, lng: 40.1828 },
  "nacala": { city: "Nacala", country: "Mozambique", region: "Southern Africa", lat: -14.5628, lng: 40.6728 },
  "namibe": { city: "Namibe", country: "Angola", region: "Southern Africa", lat: -15.1961, lng: 12.1522 },
  "nouakchott": { city: "Nouakchott", country: "Mauritania", region: "West Africa", lat: 18.0735, lng: -15.9582 },
  "onne": { city: "Onne", country: "Nigeria", region: "West Africa", lat: 4.7208, lng: 7.1539 },
  "owendo": { city: "Owendo", country: "Gabon", region: "Central Africa", lat: 0.2931, lng: 9.5058 },
  "pointe-noire": { city: "Pointe-Noire", country: "Republic of the Congo", region: "Central Africa", lat: -4.7761, lng: 11.8635 },
  "port-elizabeth": { city: "Port Elizabeth", country: "South Africa", region: "Southern Africa", lat: -33.9608, lng: 25.6022 },
  "port-gentil": { city: "Port-Gentil", country: "Gabon", region: "Central Africa", lat: -0.7193, lng: 8.7815 },
  "port-harcourt": { city: "Port-Harcourt", country: "Nigeria", region: "West Africa", lat: 4.8156, lng: 7.0498 },
  "richards-bay": { city: "Richards Bay", country: "South Africa", region: "Southern Africa", lat: -28.7807, lng: 32.0383 },
  "saldanha-bay": { city: "Saldanha Bay", country: "South Africa", region: "Southern Africa", lat: -33.0153, lng: 17.9442 },
  "san-pedro": { city: "San Pédro", country: "Ivory Coast", region: "West Africa", lat: 4.7485, lng: -6.6363 },
  "sherbro-island": { city: "Sherbro Island", country: "Sierra Leone", region: "West Africa", lat: 7.5525, lng: -12.6958 },
  "tema": { city: "Tema", country: "Ghana", region: "West Africa", lat: 5.6698, lng: -0.0166 },
  "takoradi": { city: "Takoradi", country: "Ghana", region: "West Africa", lat: 4.8845, lng: -1.7554 },
  "warri": { city: "Warri", country: "Nigeria", region: "West Africa", lat: 5.5177, lng: 5.7501 },
};

// Exact Categories and Specific Services Word-for-Word
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
    title: `Marine Surveys in ${port.city}, ${port.country} | Specialized Marine & Cargo Inspections`,
    description: `Independent marine & cargo surveying in ${port.city} (${port.country}). 24/7 technical attendance across all specialized service categories.`,
  };
}

export default function PortSEOPage({ params }: Props) {
  const port = portsData[params.slug];
  if (!port) notFound();

  const titleLocation = `${port.city}, ${port.country}`;
  
  // Dynamic OpenStreetMap Embed URL centered directly on the port coordinates
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${port.lng - 0.25}%2C${port.lat - 0.25}%2C${port.lng + 0.25}%2C${port.lat + 0.25}&layer=mapnik&marker=${port.lat}%2C${port.lng}`;

  return (
    <main className="max-w-6xl mx-auto p-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/ports" className="hover:underline">Ports</Link> &gt; <span className="text-slate-800 font-semibold">{titleLocation}</span>
      </nav>

      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{port.region} Regional Hub</span>
      <h1 className="text-3xl font-extrabold text-slate-900 mt-1 mb-3">
        Marine Surveying & Cargo Inspections in {titleLocation}
      </h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        We provide specialized marine and cargo surveying services tailored to protect your financial interests, ensure compliance, and streamline your operations at every stage of transit across all terminals and anchorages in **{titleLocation}**.
      </p>

      {/* Embedded Dynamic Port Map Section */}
      <div className="mb-12 border rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider">Operational Location: {port.city} Port Authority & Terminals</span>
          <span className="text-xs text-blue-400 font-mono">GPS: {port.lat.toFixed(4)}° N, {port.lng.toFixed(4)}° E</span>
        </div>
        <div className="w-full h-80 bg-slate-100">
          <iframe
            title={`Map location of ${titleLocation}`}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            src={mapUrl}
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Specialized Marine & Cargo Surveying Services in {port.city}</h2>
      
      {/* Dynamic Render of Your Exact Categories and Services */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-6 border rounded-xl shadow-sm">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Category 0{idx + 1}</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">{cat.category}</h3>
            <ul className="text-xs text-gray-700 space-y-2.5 font-medium">
              {cat.services.map((service, sIdx) => (
                <li key={sIdx}>
                  ⚓ {service} in {port.city}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Nomination Call-To-Action */}
      <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">Nominate a Marine Surveyor in {port.city}</h3>
          <p className="text-sm text-slate-300 mt-1">24/7 Desk Coordination & Rapid Technical Reporting</p>
        </div>
        <a 
          href={`mailto:services@marinesurveysafrica.com?subject=Surveyor Nomination - ${port.city} (${port.country})`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-lg whitespace-nowrap transition"
        >
          Book Survey in {port.city}
        </a>
      </div>
    </main>
  );
}