export const dynamic = "force-static";

export default function PortsPage() {
  const REGIONS = [
    {
      title: "Central Africa Regional Hub",
      ports: ["Douala (Cameroon)", "Kribi (Cameroon)", "Pointe-Noire (Congo)", "Libreville / Port-Gentil (Gabon)", "Malabo / Bata (Equatorial Guinea)"],
      desc: "Our primary Central African operational bedrock, offering rapid 24/7 terminal dispatch for containerized cargo, timber, and oil & gas logistics."
    },
    {
      title: "West Africa Regional Corridors",
      ports: ["Lagos / Apapa / Tin Can (Nigeria)", "Port Harcourt / Onne (Nigeria)", "Tema (Ghana)", "Takoradi (Ghana)", "Abidjan (Ivory Coast)", "Cotonou (Benin)", "Lome (Togo)", "Dakar (Senegal)"],
      desc: "High-volume trade terminals managed by certified master mariners ensuring precise draft surveys, bunker reconciliations, and heavy lift superintendency."
    },
    {
      title: "East Africa & Indian Ocean Terminals",
      ports: ["Mombasa (Kenya)", "Dar es Salaam (Tanzania)", "Port Victoria (Seychelles)", "Djibouti (Djibouti)", "Maputo / Beira (Mozambique)"],
      desc: "Strategic gateways connecting East African trade routes and island terminals, backed by full compliance with international maritime conventions."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center my-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Geographic Footprint</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Our 42-Port African & Indian Ocean Network</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MSA Surveys & Services provides standardized, rapid-response technical inspection and surveying across <span className="font-semibold text-slate-900">42 major ports</span>. Wherever your vessel docks in Africa, our certified surveyors are ready.
          </p>
        </header>

        {/* Pan-African Coverage Banner */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl my-10">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-xs">Pan-African Maritime Grid</span>
            <h2 className="text-3xl font-bold mt-2 mb-3">Live Terminal Tracking Across 42 Hubs</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our network spans the continent's most critical shipping lanes. From Central African timber ports to West African container terminals and East African gateways, our regional dispatchers maintain constant contact with port authorities.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-600/30 border border-blue-400/30 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300">Central Africa Hubs</span>
              <span className="bg-blue-600/30 border border-blue-400/30 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300">West Africa Corridors</span>
              <span className="bg-blue-600/30 border border-blue-400/30 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300">East Africa Terminals</span>
            </div>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {REGIONS.map((region, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">Region 0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{region.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{region.desc}</p>
                
                <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-3">Key Ports Covered:</h4>
                <ul className="space-y-2 mb-6">
                  {region.ports.map((port, pIdx) => (
                    <li key={pIdx} className="flex items-center text-sm text-slate-700">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span>{port}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                24/7 Terminal Dispatch Available
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center my-12 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Need a Survey in a Specific Port?</h3>
          <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">
            Contact our central dispatch team for immediate surveyor availability and port tariff estimates across all 42 locations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Request Port Dispatch
          </a>
        </div>

      </div>
    </main>
  );
}