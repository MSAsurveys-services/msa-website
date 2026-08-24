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
      <body className="bg-white text-gray-800 antialiased">
        <NavigationWrapper />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8 text-center text-sm">
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
    { name: 'MSA Network', href: '/network' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative">
          
          {/* Logo / Brand Name on the Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="MSA Surveys & Services Logo" 
                className="h-10 w-auto object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <span className="font-bold text-xl text-blue-900 tracking-tight">
                MSA Surveys & Services
              </span>
            </Link>
          </div>

          {/* Hamburger Button on the Right */}
          <div className="flex items-center relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg bg-gray-50 border border-gray-200 transition"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Compact Right-Aligned Vertical Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-14 w-72 bg-white border border-gray-200 rounded-xl shadow-xl py-2 px-3 z-50 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-50 last:border-none pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => { if (!link.hasSubmenu) setIsOpen(false); }}
                        className="flex-1 block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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

                    {/* Sub-menu items dropping down vertically under Services */}
                    {link.hasSubmenu && servicesOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 my-1 border-l-2 border-blue-200 ml-2">
                        {serviceCategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-2.5 py-1.5 rounded text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}