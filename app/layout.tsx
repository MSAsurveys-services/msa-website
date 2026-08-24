"use client";

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-gray-800 antialiased flex flex-col min-h-screen">
        <NavigationWrapper />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-8 text-center text-sm border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} MSA Surveys & Services. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

function NavigationWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceCategories = [
    { name: 'Cargo & Quantity Management', href: '/services#cargo-quantity' },
    { name: 'Vessel Integrity & Chartering', href: '/services#vessel-integrity' },
    { name: 'Operational & Port Services', href: '/services#operational-port' },
    { name: 'Damage & Forensic Investigation', href: '/services#damage-forensic' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasSubmenu: true },
    { name: 'Ports', href: '/ports' },
    { name: 'MSA Network', href: '/msa-network' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* TOP HEADER BAR (Logo on left, Hamburger Menu on the right) */}
      <header className="bg-white shadow-sm sticky top-0 z-50 px-4 sm:px-8 h-16 flex justify-between items-center w-full border-b border-gray-200">
        <Link href="/">
          <span className="font-bold text-lg sm:text-xl text-blue-900">MSA Surveys & Services</span>
        </Link>
        
        {/* Right-Side Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-700 hover:text-blue-600 focus:outline-none p-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition flex items-center gap-2"
          aria-label="Toggle Menu"
        >
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* RIGHT-SIDE SLIDE-OUT / DROPDOWN MENU DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs flex justify-end" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full sm:w-80 bg-white h-full shadow-2xl border-l border-gray-200 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <span className="font-bold text-sm text-gray-400 uppercase tracking-wider">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-700 p-1 text-sm font-semibold"
                >
                  ✕ Close
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1.5">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-50 last:border-none pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => { if (!link.hasSubmenu) setIsOpen(false); }}
                        className="flex-1 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {link.name}
                      </Link>
                      {link.hasSubmenu && (
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="p-2 text-gray-400 hover:text-blue-600 focus:outline-none"
                          aria-label="Toggle Submenu"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Sub-menu items for Services */}
                    {link.hasSubmenu && servicesOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 my-1 border-l-2 border-blue-200 ml-3">
                        {serviceCategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
              <p>MSA Surveys & Services Operational Hub</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}