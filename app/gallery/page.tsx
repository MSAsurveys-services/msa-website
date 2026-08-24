'use client';

import { useState } from 'react';

export default function GalleryPage() {
  const totalPhotos = 73;
  const photosPerPage = 24; // Roughly 3 pages total (24 + 24 + 25 = 73)
  const [currentPage, setCurrentPage] = useState(1);

  // Generate all 73 photos array
  const allImages = Array.from({ length: totalPhotos }, (_, index) => ({
    id: index + 1,
    src: `/images/gallery-${index + 1}.jpg`,
    title: `Port Operation & Marine Survey #${index + 1}`
  }));

  const totalPages = Math.ceil(allImages.length / photosPerPage);

  // Slice photos for the current page
  const startIndex = (currentPage - 1) * photosPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + photosPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Operational Gallery</h1>
        <p className="text-gray-600">Explore our professional marine survey and port inspection operations across Africa.</p>
        <p className="text-xs text-blue-600 font-semibold">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* Grid Layout for Current Page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentImages.map((img) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 pt-6 border-t border-gray-100">
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 transition"
        >
          ← Previous Page
        </button>

        <span className="text-sm font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 transition"
        >
          Next Page →
        </button>
      </div>
    </div>
  );
}