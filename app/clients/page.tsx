export const dynamic = "force-static";

export default function ClientsPage() {
  const CLIENT_CATEGORIES = [
    {
      title: "Ship Owners & Vessel Managers",
      desc: "Protecting physical fleet assets and ensuring long-term vessel compliance across all operational regions.",
      services: [
        "On-Hire / Off-Hire Condition Surveys",
        "Hull & Machinery Structural Assessments",
        "Crane Reliability & Load Testing",
        "Bunker Quantity & Quality Surveys (ROB/BIS)"
      ]
    },
    {
      title: "Charterers",
      desc: "Minimizing commercial exposure and verifying contractual performance before and during port calls.",
      services: [
        "Draft Surveys (Loading & Unloading)",
        "Cargo Quantity Tally & Superintendency",
        "Container Integrity & Seal Verification",
        "Off-Hire Performance & Bunker Reconciliation"
      ]
    },
    {
      title: "P&I Clubs & Correspondents",
      desc: "Providing rapid, independent forensic evaluations, quantity verifications, and technical evidence preservation when cargo claims or disputes arise.",
      services: [
        "Initial and Final Draft Surveys for Shortage Claims",
        "Tally Surveys for Discharge & Loading Operations",
        "Container Inspections (Structural, Dry & Reefer/Wet)",
        "Supervision and Monitoring of Cargo Operations",
        "Cargo Damage, Shortage & Contamination Investigations",
        "Collision & Grounding Casualty Assessments"
      ]
    },
    {
      title: "Marine Insurance Underwriters & Adjusters",
      desc: "Accurately determining loss extents, mitigating risk exposure, and supporting fair claim settlements.",
      services: [
        "Forensic Damage Survey Reports",
        "Pre-Purchase Condition & Valuation Assessments",
        "Repair Scope and Cost Estimations",
        "General Average Loss Verification"
      ]
    },
    {
      title: "Cargo Owners & Importers/Exporters",
      desc: "Guaranteeing product specifications, outturn quality, and regulatory compliance prior to dispatch.",
      services: [
        "Pre-Shipment Inspections (PSI)",
        "Bulk Mineral Moisture Limit (TML / IMSBC) Testing",
        "Container Stuffing & Stowage Supervision",
        "Perishable Fruit & Cold-Chain Monitoring"
      ]
    },
    {
      title: "Terminal Operators & Port Authorities",
      desc: "Optimizing berth turnaround times, eliminating bottlenecks, and maintaining rigorous safety protocols.",
      services: [
        "Dedicated Port Captain Operational Oversight",
        "Stevedore Handling Supervision",
        "Port Log Execution & Bottleneck Resolution",
        "Safety & Regulatory Compliance Audits"
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center my-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Commercial Partnerships</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Who We Serve</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored, high-precision inspection and surveying solutions designed to meet the exact operational and regulatory demands of every maritime stakeholder.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {CLIENT_CATEGORIES.map((client, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{client.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mt-1">{client.desc}</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Key Services Provided:</h4>
                <ul className="space-y-1.5">
                  {client.services.map((service, sIndex) => (
                    <li key={sIndex} className="text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}