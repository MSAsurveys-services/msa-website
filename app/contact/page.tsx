"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">24/7 Dispatch Availability</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4 text-slate-900">Contact MSA Surveys & Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team is on standby around the clock for immediate terminal dispatch, port coordination, and technical marine surveys across all our offices.
          </p>
        </div>

        {/* Office Locations Grid (Clean & Neutral) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Cameroon Office */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Cameroon Office</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Petit Pond Besseke<br />
              Ancienne Road Bonaberi<br />
              Douala, Cameroon
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Day & Night Dispatch Active
            </div>
          </div>

          {/* Kenya Office */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Kenya Office</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Mpesi Lane Building<br />
              Westpark Towers<br />
              Nairobi, Kenya
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              24/7 Port Coordination
            </div>
          </div>

          {/* Seychelles Office */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Seychelles Office</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Suite 9, Ansuya Estate,<br />
              Mahe Victoria<br />
              Seychelles
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Island Terminal Support
            </div>
          </div>

        </div>

        {/* Bottom Section: Operational Headquarters & Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* General Dispatch Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Operational Headquarters</h2>
            
            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-1">Availability</h3>
                <p className="text-base font-medium text-slate-900">
                  24 Hours / 7 Days a Week (Day & Night Operations)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-1">Direct Inquiries</h3>
                <p className="text-base font-medium text-blue-600">
                  services@marinesurveysafrica.com
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              ISO 9001 & ISO 45001 Certified Quality Management Systems | IAMCS Member
            </div>
          </div>

          {/* Quick Booking Message Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Request Vessel Attendance</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Survey request submitted successfully. Our dispatcher will contact you immediately.'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Your Name / Company</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Captain Miller / Global Shipping Ltd" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Target Port</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Douala, Lagos, Cotonou, Mombasa" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Required Service</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Draft Survey, Bunker Reconciliation" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Message / Vessel Details</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Include ETA, vessel name, or specific survey requirements..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Submit Survey Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}