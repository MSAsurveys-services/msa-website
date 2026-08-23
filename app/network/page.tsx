export default function NetworkPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">MSA Group Network & Sister Entities</h1>
      <p className="text-gray-700 mb-6">Our specialized maritime divisions operate across key ports in Central and West Africa.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg bg-white shadow-sm border-l-4 border-l-blue-600">
          <h2 className="text-xl font-bold text-slate-900">Marine Surveys Africa</h2>
          <p className="text-sm text-blue-600 font-semibold mb-3">Pan-African Maritime & Inspection Division</p>
          <p className="text-gray-600 mb-4">Leading independent marine surveying, vessel draft checks, bunker audits, and cargo damage assessments across African ports.</p>
          <a 
            href="https://www.marinesurveysafrica.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Visit Website (www.marinesurveysafrica.com) →
          </a>
        </div>
      </div>
    </main>
  );
}