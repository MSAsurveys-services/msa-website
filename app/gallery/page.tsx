'use client';

export default function GalleryPage() {
  const images = Array.from({ length: 73 }, (_, index) => ({
    id: index + 1,
    src: `/gallery/gallery-${index + 1}.jpg`,
    title: `Port Operation & Marine Survey #${index + 1}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Operational Gallery</h1>
        <p className="text-gray-600">Explore our marine survey and port inspection operations across Africa.</p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div 
            key={img.id} 
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group"
          >
            <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center">
              <img
                src={img.src}
                alt={img.title}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                #{img.id}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{img.title}</h3>
              <p className="text-xs text-gray-500 mt-1">MSA Surveys & Services</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}