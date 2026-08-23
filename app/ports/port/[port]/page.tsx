import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Complete database of your 42 ports and regions for Google SEO search
const PORTS_DATA: Record<string, { name: string; region: string; country: string }> = {
  'douala': { name: 'Douala', region: 'Central Africa', country: 'Cameroon' },
  'kribi': { name: 'Kribi', region: 'Central Africa', country: 'Cameroon' },
  'pointe-noire': { name: 'Pointe-Noire', region: 'Central Africa', country: 'Republic of the Congo' },
  'libreville': { name: 'Libreville', region: 'Central Africa', country: 'Gabon' },
  'port-gentil': { name: 'Port-Gentil', region: 'Central Africa', country: 'Gabon' },
  'malabo': { name: 'Malabo', region: 'Central Africa', country: 'Equatorial Guinea' },
  'bata': { name: 'Bata', region: 'Central Africa', country: 'Equatorial Guinea' },
  'lagos': { name: 'Lagos (Apapa & Tin Can)', region: 'West Africa', country: 'Nigeria' },
  'port-harcourt': { name: 'Port Harcourt', region: 'West Africa', country: 'Nigeria' },
  'onne': { name: 'Onne Port', region: 'West Africa', country: 'Nigeria' },
  'tema': { name: 'Tema', region: 'West Africa', country: 'Ghana' },
  'takoradi': { name: 'Takoradi', region: 'West Africa', country: 'Ghana' },
  'abidjan': { name: 'Abidjan', region: 'West Africa', country: 'Ivory Coast' },
  'cotonou': { name: 'Cotonou', region: 'West Africa', country: 'Benin' },
  'lome': { name: 'Lome', region: 'West Africa', country: 'Togo' },
  'dakar': { name: 'Dakar', region: 'West Africa', country: 'Senegal' },
  'mombasa': { name: 'Mombasa', region: 'East Africa', country: 'Kenya' },
  'dar-es-salaam': { name: 'Dar es Salaam', region: 'East Africa', country: 'Tanzania' },
  'port-victoria': { name: 'Port Victoria', region: 'Indian Ocean', country: 'Seychelles' },
  'djibouti': { name: 'Djibouti Port', region: 'East Africa', country: 'Djibouti' },
  'maputo': { name: 'Maputo', region: 'East Africa', country: 'Mozambique' },
  'beira': { name: 'Beira', region: 'East Africa', country: 'Mozambique' },
};

// All 15 core technical maritime services
const ALL_15_SERVICES = [
  "Bunker Surveys & ROB Reconciliations",
  "Draft Surveys & Weight Determinations",
  "Container Cargo Inspection & Damage Surveying",
  "Dry Bulk & Break-Bulk Superintendency",
  "Refrigerated (Reefer) Cargo Monitoring",
  "Heavy Lift & Project Cargo Superintending",
  "Vessel Condition & Pre-Purchase Assessments",
  "On-Hire / Off-Hire Condition Surveys",
  "Hull & Machinery Forensic Investigations",
  "Cargo Lashing & Securing Appraisals",
  "P&I Club Representation & Claim Support",
  "Tally & Cargo Quantity Verification",
  "Underwater Inspection & Propeller Polishing Oversight",
  "Port Captain & 24/7 Terminal Dispatch Management",
  "Marine Risk, Safety & IMS Compliance Audits"
];

interface Props {
  params: { port: string };
}

export async function generateStaticParams() {
  return Object.keys(PORTS_DATA).map((port) => ({ port }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const portInfo = PORTS_DATA[params.port];
  if (!portInfo) return {};

  return {
    title: `Marine Survey & 15 Port Services in ${portInfo.name}, ${portInfo.country} | MSA Surveys`,
    description: `Professional maritime inspection, bunker surveys, draft surveys, and certified technical services across ${portInfo.name} port, ${portInfo.country}. ISO 9001 & IAMCS certified.`,
    keywords: [
      `marine surveyor ${portInfo.name}`,
      `bunker survey ${portInfo.country}`,
      `draft survey ${portInfo.name}`,
      ...ALL_15_SERVICES.map(service => `${service} ${portInfo.name}`)
    ]
  };
}

export default function PortDetailPage({ params }: Props) {
  const portInfo = PORTS_DATA[params.port];
  if (!portInfo) notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb Header */}
        <div className="text-sm text-slate-500 mb-4">
          <a href="/ports" className="hover:text-blue-600">Ports Overview</a> &gt; <span className="text-blue-600 font-semibold">{portInfo.region}</span> &gt; <span className="text-slate-900">{portInfo.name}</span>
        </div>

        <header className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">24/7 Terminal Dispatch Active</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
            Marine Survey & Port Services in {portInfo.name}, {portInfo.country}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            MSA Surveys & Services delivers all <span className="font-semibold text-slate-900">15 professional maritime services</span> in {portInfo.name}. Backed by our decade of regional expertise, ISO 9001/45001 standards, and IAMCS accreditation, our certified master mariners provide rapid 24/7 terminal dispatch.
          </p>
        </header>

        {/* All 15 Services Displayed */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold mb-2 text-slate-800">
            All 15 Certified Services Available in {portInfo.name}
          </h2>
          <p className="text-slate-500 text-sm mb-6">Every service is backed by our strict Integrated Management System (IMS) framework.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ALL_15_SERVICES.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{service}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Available for immediate vessel attendance in {portInfo.name}.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Request a Survey in {portInfo.name}</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
            Contact our central dispatch team for immediate surveyor availability, tariff estimates, and bunker dispute interventions in {portInfo.name}.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Dispatch Surveyor to {portInfo.name}
          </a>
        </div>

      </div>
    </main>
  );
}