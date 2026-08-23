import Image from 'next/image';

// Automatically generate the list of 73 images based on your clean filenames
const TOTAL_IMAGES = 73;
const GALLERY_IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  src: `/gallery/gallery-${i + 1}.jpg`,
  title: `Marine Survey Operation ${i + 1}`, // Generic titles, feel free to customize later
  port: 'Pan-African Network'               // Generic port, feel free to customize later
}));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Operational Fieldwork</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4 text-slate-950">Marine Survey Gallery</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A visual showcase of our master mariners and technical surveyors attending vessels across our 42 port network. Below is a selection of our recent operations.
          </p>
        </div>

        {/* Image Grid (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3] bg-slate-100 w-full overflow-hidden">
                {/* Note: Ensure the image files actually exist in public/gallery/ folder */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" // Optimizes page loading
                />
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.port}</span>
                  <h3 className="font-semibold text-slate-900 text-sm mt-1">{item.title}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex justify-between items-center">
                  <span>MSA Global Standards</span>
                  <span className="text-blue-600">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-inner">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need a Survey?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">Our surveyors are ready for immediate dispatch to your vessel. Contact our central operations team.</p>
            <a href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Request Vessel Attendance
            </a>
        </div>

      </div>
    </main>
  );
}