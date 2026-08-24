"use client";

import '../globals.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/40 py-16 px-4 sm:px-6 lg:px-8">
      {/* Centered Container with constrained max-width */}
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs bg-blue-100 px-3 py-1 rounded-full">
            Strategic Presence
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            MSA Network & Operations
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Our strategic presence and operational coverage across major African ports.
          </p>
        </div>

        {/* Styled Card Container */}
        <div className="bg-white rounded-2xl border border-blue-100 p-8 shadow-lg shadow-blue-900/5 space-y-6 relative overflow-hidden">
          {/* Decorative Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Operational Hubs & Sister Companies
          </h2>

          <div className="text-slate-600 leading-relaxed text-base space-y-4">
            <p>
              MSA Surveys & Services operates alongside our sister company,{' '}
              <strong className="text-slate-900 font-semibold">Marine Surveys Africa</strong> (visit their official website at{' '}
              <a 
                href="https://www.marinesurveysafrica.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors"
              >
                www.marinesurveysafrica.com
              </a>), covering key maritime regions to ensure prompt coordination, professional marine surveying, and container cargo damage inspection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}