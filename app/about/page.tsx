export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Decade of Maritime Excellence</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4 text-slate-900">About MSA Surveys & Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing professional maritime inspection, cargo surveying, and technical superintendency across a robust pan-African network.
          </p>
        </div>

        {/* Core Overview Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Who We Are</h2>
          <p className="text-slate-700 leading-relaxed">
            MSA Surveys & Services offers a technical portfolio of core maritime operations across 42 ports, refined to emphasize professional expertise over a decade of activity. Our offerings encompass specialized cargo inspections for dry, reefer, and mineral commodities, alongside comprehensive draft and bunker surveys that prioritize client capital protection.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Additionally, the firm provides expert superintendency, vessel condition assessments, hull and machinery forensics, and advanced underwater maintenance solutions, including propeller polishing.
          </p>
        </div>

        {/* Accreditations & Quality Standards */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Accreditations & Memberships</h2>
            <p className="text-slate-600 text-sm mt-1">Operating strictly under recognized international maritime bodies and quality standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
              <div className="font-extrabold text-blue-900 text-base mb-1">IAMCS</div>
              <p className="text-[11px] text-slate-600">Marine & Cargo Surveyors Member</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
              <div className="font-extrabold text-blue-900 text-base mb-1">IIMS</div>
              <p className="text-[11px] text-slate-600">International Institute of Marine Surveying</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
              <div className="font-extrabold text-blue-900 text-base mb-1">Project Cargo</div>
              <p className="text-[11px] text-slate-600">Project Cargo Network (PCN) Member</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
              <div className="font-extrabold text-blue-900 text-base mb-1">ISO 9001</div>
              <p className="text-[11px] text-slate-600">Quality Management Systems</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
              <div className="font-extrabold text-blue-900 text-base mb-1">ISO 45001</div>
              <p className="text-[11px] text-slate-600">Health & Safety Management</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Ready to Partner With Us?</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
            Our certified master mariners and technical survey teams are ready for immediate vessel attendance across our 42 port network.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </main>
  );
}