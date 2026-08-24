"use client";

import '../globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function NetworkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">MSA Network & Operations</h1>
        <p className="text-gray-600">Our strategic presence and operational coverage across major African ports.</p>
      </div>

      {/* Network Content Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Operational Hubs & Sister Companies</h2>
        <p className="text-gray-600">
          MSA Surveys & Services operates alongside our sister company, <strong>Marine Survey Africa</strong> (visit their official website at{' '}
          <a 
            href="https://www.marinesurveysafrica.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            www.marinesurveysafrica.com
          </a>), covering key maritime regions to ensure prompt coordination, professional marine surveying, and container cargo damage inspection.
        </p>
      </div>
    </div>
  );
}