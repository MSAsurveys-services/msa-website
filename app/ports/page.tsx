export default function PortsPage() {
  const regionalHubs = [
    {
      hub: "Central Africa Hub",
      color: "bg-blue-600",
      description: "Comprehensive marine surveying and cargo inspection across Central African maritime gateways.",
      ports: [
        "Port of Douala (Cameroon)",
        "Port of Kribi (Cameroon)",
        "Port of Pointe-Noire (Congo)",
        "Port of Libreville (Gabon)",
        "Port-Gentil (Gabon)",
        "Port of Malabo (Equatorial Guinea)",
        "Port of Bata (Equatorial Guinea)"
      ]
    },
    {
      hub: "West Africa Hub",
      color: "bg-indigo-600",
      description: "Managing heavy containerized traffic, oil & gas support logistics, and rigorous cargo condition audits.",
      ports: [
        "Port of Lagos - Apapa (Nigeria)",
        "Port of Lagos - Tin Can (Nigeria)",
        "Port Harcourt (Nigeria)",
        "Onne Port (Nigeria)",
        "Port of Tema (Ghana)",
        "Port of Takoradi (Ghana)",
        "Port of Abidjan (Côte d'Ivoire)",
        "Port of Cotonou (Benin)",
        "Port of Lome (Togo)",
        "Port of Dakar (Senegal)"
      ]
    },
    {
      hub: "East Africa & Indian Ocean Hubs",
      color: "bg-sky-600",
      description: "Serving key trade corridors, inland container depots, and island terminals.",
      ports: [
        "Port of Mombasa (Kenya)",
        "Port of Dar es Salaam (Tanzania)",
        "Port Victoria (Seychelles)",
        "Port of Djibouti (Djibouti)",
        "Port of Maputo (Mozambique)",
        "Port of Beira (Mozambique)",
        "Port of Nacala (Mozambique)",
        "Port of Durban (South Africa)",
        "Port of Richards Bay (South Africa)",
        "Port of Cape Town (South Africa)",
        "Port of Walvis Bay (Namibia)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Pan-African Network
          </span>
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight sm:text-5xl mt-3 mb-4">
            Our 42 Operational Port Terminals
          </h1>
          <p className="text-lg text-slate-600">
            Providing rapid response marine surveying, draft surveys, and container cargo inspection across 42 strategic maritime gateways and terminals across the continent.
          </p>
        </div>

        {/* Master Africa Map Embed */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
            <span className="font-bold text-sm tracking-wide uppercase px-2">Continental Coverage Map</span>
            <span className="text-xs text-slate-400">Active across 42 strategic regional points</span>
          </div>
          <div className="w-full h-[450px] bg-slate-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155555.539829472!2d15.558055!3d1.650801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1013dad2649031cf%3A0x8673a5598642a8b9!2sAfrica!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marine Surveys Africa Continental Footprint"
            ></iframe>
          </div>
        </div>

        {/* Regional Hubs & Complete Terminal Breakdowns */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Regional Corridors & Terminal Directory</h2>
            <p className="text-slate-600 mt-2">Complete breakdown of active port terminals across Central, West, East Africa, and Indian Ocean hubs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regionalHubs.map((hubGroup, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`w-3 h-3 rounded-full ${hubGroup.color}`}></span>
                    <h3 className="text-xl font-bold text-slate-900">{hubGroup.hub}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {hubGroup.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Operational Terminals ({hubGroup.ports.length})</h4>
                  <div className="space-y-2">
                    {hubGroup.ports.map((portName, idx) => (
                      <div key={idx} className="flex items-center bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                        <svg className="w-4 h-4 text-blue-600 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-slate-800">{portName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need an Inspector at Any Terminal?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Our mobile surveying teams can be deployed rapidly across all 42 port terminals in our network.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-sm">
            Request an Inspection
          </a>
        </div>

      </div>
    </div>
  );
}