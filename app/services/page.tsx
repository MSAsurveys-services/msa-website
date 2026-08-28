export const dynamic = "force-static";

export default function ServicesPage() {
  const MSA_SERVICES = [
    {
      title: "Container Cargo Inspection (Dry & Reefer/Wet)",
      desc: "Our container inspection protocols cover both standard dry vans and specialized refrigerated (reefer/wet) units. Inspectors perform rigorous structural checks—evaluating door gasket integrity, floor corrosion, sidewall dents, and roof leaks—alongside cleanliness evaluations to ensure container fitness prior to loading. For refrigerated and wet containers, we monitor machinery performance, set-point compliance, pre-trip inspections (PTIs), and continuous temperature logs. We provide direct supervision during container stuffing and unstuffing operations to verify weight distribution, proper lashing, and absolute protection against condensation, cargo cross-contamination, or moisture spoilage.",
    },
    {
      title: "Port Captain Services",
      desc: "Port Captains act as your dedicated on-site operational representatives, coordinating seamlessly between vessel masters, terminal operators, stevedores, and local authorities. We manage port log execution, monitor terminal turnaround speeds, eliminate bottlenecks, and ensure strict compliance with port regulations. Our Port Captains oversee loading and discharging sequences from berth to departure, safeguarding owner and charterer interests while maintaining world-class safety standards across all 42 ports.",
    },
    {
      title: "Cargo Damages",
      desc: "When cargo damage occurs, we provide independent, forensic evaluations resulting from heavy weather, shifting, condensation, or improper stevedore handling. Our technical teams conduct thorough physical inspections, photographic documentation, and root-cause analyses of compromised cargo lots. We establish the exact extent, nature, and probable timing of loss to formulate comprehensive survey reports. Backed by our proven recovery track record, our certified documents are meticulously prepared to withstand legal scrutiny and are trusted globally by underwriters, P&I clubs, and cargo owners.",
    },
    {
      title: "Draft Surveys (Loading & Unloading Operations)",
      desc: "Conducted with absolute mathematical and physical precision by experienced master mariners and surveyors. We perform systematic draft readings across six standard points (forward, midship port/starboard, and aft) combined with precise density testing of port or terminal waters using specialized hydrometers. To guarantee accurate Bill of Lading figures and protect charterers or owners from cargo short-delivery claims, our draft surveys are executed rigorously at both the absolute commencement and final completion phases of loading and unloading operations, factoring in constant weight adjustments, ballast soundings, and consumable burn rates.",
    },
    {
      title: "Bunker Surveys",
      desc: "Our bunker quantity and quality surveys protect vessel owners, charterers, and fuel buyers against short-delivery disputes and substandard fuel oils. We measure exact quantities including Remaining On Board (ROB) and Bunker Inspection Surveys (BIS) during on-hire and off-hire transitions. Our surveyors utilize specialized detection techniques to uncover hidden bunker spaces, unpumpable pockets, trim corrections, and pipeline hold-ups. We protect clients in every case by supervising representative drip-sampling at the manifold per MARPOL Annex VI, reconciling Bunker Delivery Notes (BDNs), and ensuring strict compliance with ISO 8217 fuel standards, backed by our strong recovery track record.",
    },
    {
      title: "Tally & Superintendency Services",
      desc: "Our cargo superintendents provide independent count verification, tallying, and end-to-end operational oversight for break-bulk, general cargo, steel products, timber, bagged goods, and containerized freight. Throughout discharge and loading sequences, our tally clerks maintain meticulous logs of piece counts, package conditions, bundle markings, and manifest discrepancies. We closely monitor stevedore handling techniques to minimize handling damages, record exceptions on tally sheets in real time, and issue comprehensive outturn reports upon completion of port operations.",
    },
    {
      title: "On-Hire / Off-Hire Condition Surveys",
      desc: "To protect commercial interests during charter party transitions, we carry out exhaustive physical and technical inspections of vessel condition upon delivery (on-hire) and redelivery (off-hire). Our surveyors inspect all accessible spaces—including cargo holds, deck plating, cranes, hatch covers, and accommodation areas—documenting pre-existing structural dents, paint scaling, or operational wear-and-tear through high-resolution photography. Simultaneously, we perform thorough bunker fuel soundings across all tanks to determine exact quantities remaining on board, preventing future financial disputes between owners and charterers.",
    },
    {
      title: "Project Cargo & Heavy Lift",
      desc: "Handling oversized industrial machinery, transformers, wind turbines, locomotives, and heavy infrastructure components demands specialized engineering expertise. Our project cargo superintendents oversee every phase of the lifting, stowage, and securing process. We evaluate vessel stability calculations, crane SWL (Safe Working Load) limits, spreader bar setups, and lifting gear certifications. We ensure that all lashing designs comply fully with the vessel's Cargo Securing Manual (CSM) and IMO guidelines, calculating acceleration forces to prevent shifting during heavy ocean passages.",
    },
    {
      title: "Pre-Shipment Inspection (PSI)",
      desc: "We perform rigorous Pre-Shipment Inspections on diverse commercial commodities to verify quality, quantity, packaging, labeling, and regulatory export compliance before dispatch. We specialize in inspecting critical bulk minerals—such as manganese, iron ore, and bauxite—ensuring moisture limits (Transportable Moisture Limit / TML) comply with IMSBC code standards to prevent liquefaction. We also inspect sensitive perishable agricultural fruits including avocados, pineapples, and bananas, checking temperature controls, maturity stages, and packaging integrity to guarantee export readiness.",
    },
    {
      title: "Pre-Purchase Surveys",
      desc: "For prospective vessel buyers, investors, or financial institutions, we deliver comprehensive Pre-Purchase Condition Surveys. Our senior marine surveyors and engineers conduct thorough physical inspections of the vessel's structural hull, machinery spaces, electrical installations, safety equipment, and maintenance records. We evaluate operational efficiency, identify latent defects or deferred maintenance liabilities, and provide an objective market valuation assessment to protect your capital investment.",
    },
    {
      title: "Crane Reliability and Vessel Assessment",
      desc: "We evaluate shipboard lifting equipment and overall vessel operational readiness to ensure maximum safety and performance. We conduct thorough operational load testing, wire rope inspections, hydraulic system checks, and safety limit switch verifications for ship cranes and derricks. Our comprehensive vessel assessments review machinery status, structural integrity, and compliance with classification society rules, minimizing unexpected breakdown risks during critical port operations.",
    },
    {
      title: "Cleanliness & Hold Inspection",
      desc: "Loading sensitive bulk commodities like grain, fertilizer, animal feed, or high-grade minerals requires absolute cargo compartment cleanliness. Our surveyors carry out meticulous pre-loading inspections of ship cargo holds, checking for residues of previous cargoes, rust scale, paint flaking, insect infestation, bilge cleanliness, and odor contamination. Our team executes cleaning standards for both dry and wet conditions strictly in accordance with international maritime laws and charter party agreements (e.g., 'shovel clean', 'grain clean', or 'hospital clean'), issuing formal hold inspection certificates before passing spaces fit to load.",
    },
    {
      title: "Hull & Machinery",
      desc: "We provide specialized marine engineering and forensic surveys for Hull & Machinery (H&M) underwriting and casualty investigations. In the event of vessel collisions, groundings, or main engine failures, our surveyors conduct exhaustive structural assessments. For groundings and collisions, we evaluate bottom shell damage, framing distortion, rudder and propeller alignment, and watertight bulkhead integrity. Our detailed technical reports establish casualty causes, repair scopes, and cost estimates required by underwriters and classification societies.",
    },
    {
      title: "Underwater Hull Inspection & Maintenance",
      desc: "To maintain optimal hydrodynamic performance and reduce vessel fuel consumption, we coordinate and oversee advanced underwater operations. Utilizing certified commercial divers and ROV technology, we inspect underwater shell plating, assess biofouling, and examine sacrificial anodes. Furthermore, we supervise expert propeller polishing to eliminate surface roughness and cavitation damage, alongside inspecting and clearing sea chest gratings, overboard discharge valves, and bow thruster tunnels to ensure unobstructed cooling water intake and optimal maneuverability.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center my-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Technical Portfolio</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Our Maritime & Surveying Services Across 42 Ports</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Delivering high-precision inspection and surveying protocols. Contact our dispatch team at <a href="mailto:services@marinesurveysafrica.com" className="text-blue-600 font-semibold underline">services@marinesurveysafrica.com</a>.
          </p>
        </header>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {MSA_SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition space-y-3">
              <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}