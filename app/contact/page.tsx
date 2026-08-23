export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact & Operational Address</h1>
      <div className="bg-white p-6 border rounded-lg shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Email Enquiries</h2>
          <p className="text-blue-600 font-semibold">
            <a href="mailto:services@marinesurveysafrica.com">services@marinesurveysafrica.com</a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">Operational Head Office</h2>
          <p className="text-gray-700">Douala Port Authority Zone, Douala, Republic of Cameroon</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">Coverage Area</h2>
          <p className="text-gray-700">Douala Port, Kribi Deep Seaport, Limbé Oil Terminal, and all maritime hubs across Cameroon & Central Africa.</p>
        </div>
      </div>
    </main>
  );
}