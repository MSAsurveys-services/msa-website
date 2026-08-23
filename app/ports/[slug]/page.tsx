import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const portsData: Record<string, { city: string; country: string; region: string }> = {
  "douala": { city: "Douala", country: "Cameroon", region: "Central Africa" },
  "kribi": { city: "Kribi", country: "Cameroon", region: "Central Africa" },
  "limbe": { city: "Limbé", country: "Cameroon", region: "Central Africa" },
  "port-gentil": { city: "Port-Gentil", country: "Gabon", region: "Central Africa" },
  "pointe-noire": { city: "Pointe-Noire", country: "Republic of the Congo", region: "Central Africa" },
  "abidjan": { city: "Abidjan", country: "Ivory Coast", region: "West Africa" },
  "lagos": { city: "Lagos (Apapa / Tin Can)", country: "Nigeria", region: "West Africa" },
  "tema": { city: "Tema", country: "Ghana", region: "West Africa" },
  "luanda": { city: "Luanda", country: "Angola", region: "Southern Africa" },
  "dakar": { city: "Dakar", country: "Senegal", region: "West Africa" },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const port = portsData[params.slug.toLowerCase()];
  if (!port) return { title: "Port Not Found | MSA Group" };

  return {
    title: `Marine & Bunker Surveys in ${port.city}, ${port.country} | MSA Group`,
    description: `Independent draft surveys, bunker quantity measurements, and cargo inspections in ${port.city}, ${port.country}.`,
  };
}

export default function PortPage({ params }: { params: { slug: string } }) {
  const port = portsData[params.slug.toLowerCase()];

  if (!port) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="border-b pb-4 mb-6">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{port.region}</span>
        <h1 className="text-3xl font-bold text-slate-900 mt-1">
          Marine & Bunker Surveys in {port.city}, {port.country}
        </h1>
      </div>
      <p className="text-gray-700 leading-relaxed">
        MSA Group provides 24/7 attendance, draft surveys, hold cleanliness inspections, and bunker quantity measurements at {port.city} Port, {port.country}.
      </p>
      
      <div className="mt-8 bg-slate-50 border p-6 rounded-lg">
        <h2 className="text-lg font-bold text-slate-800 mb-2">Operations & Enquiries</h2>
        <p className="text-gray-600 text-sm">
          For operational requests at {port.city} Port, contact our central operations desk:
        </p>
        <p className="mt-3">
          <a href="mailto:services@marinesurveysafrica.com" className="text-blue-600 font-semibold underline">
            services@marinesurveysafrica.com
          </a>
        </p>
      </div>
    </main>
  );
}