'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.jpg" 
              alt="MSA Surveys & Services Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-extrabold text-xl text-blue-900 tracking-tight">
              MSA <span className="text-blue-600 font-normal text-sm">SURVEYS</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/ports" className="hover:text-blue-600 transition">Ports</Link>
            <Link href="/network" className="hover:text-blue-600 transition">MSA Network</Link>
            <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition shadow-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">Services</Link>
          <Link href="/ports" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">Ports</Link>
          <Link href="/network" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">MSA Network</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-center w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium mt-2">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}