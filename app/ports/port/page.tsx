export default function PortOverviewPage() {
  const ports = [
    { city: "Douala", country: "Cameroon", region: "Central Africa" },
    { city: "Kribi", country: "Cameroon", region: "Central Africa" },
    { city: "Limbé", country: "Cameroon", region: "Central Africa" },
    { city: "Port-Gentil", country: "Gabon", region: "Central Africa" },
    { city: "Pointe-Noire", country: "Republic of the Congo", region: "Central Africa" },
    { city: "Abidjan", country: "Ivory Coast", region: "West Africa" },
    { city: "Lagos", country: "Nigeria", region: "West Africa" },
    { city: "Tema", country: "Ghana", region: "West Africa" },
    { city: "Luanda", country: "Angola", region: "Southern Africa" },
    { city: "Dakar", country: "Senegal", region: "West Africa" },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Port Operations & Reach</h1>
      <p className="text-gray-700 mb-6">
        MSA Group provides independent 24/7 marine surveying, bunker quantity verifications, and draft surveys across our key African port network.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {ports.map((p, idx) => (
          <div key={idx} className="p-4 border rounded bg-slate-50">
            <span className="text-xs font-semibold text-blue-600 uppercase">{p.region}</span>
            <h2 className="text-lg font-bold text-slate-800">{p.city}, {p.country}</h2>
            <p className="text-xs text-gray-500 mt-1">Full inspection & survey coverage available.</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg">
        <h3 className="text-lg font-bold">Operational Enquiries</h3>
        <p className="text-sm text-gray-300 mt-1">To order attendance or request rate sheets for any port:</p>
        <p className="mt-2 font-semibold text-blue-400">
          <a href="mailto:services@marinesurveysafrica.com">services@marinesurveysafrica.com</a>
        </p>
      </div>
    </main>
  );
}