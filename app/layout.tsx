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
      <body className="bg-slate-50 text-gray-800 antialiased flex flex-col md:flex-row-reverse min-h-screen">
        <NavigationWrapper />
        {/* Main content shifts to the left on desktop to make room for the right sidebar */}
        <div className="flex-1 flex flex-col min-w-0 md:pr-64">
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-900 text-white py-8 text-center text-sm border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} MSA Surveys & Services. All rights reserved.</p>
          </footer>
        </div>
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
      {/* MOBILE TOP BAR (Hidden on Desktop) */}
      <nav className="md:hidden bg-white shadow-md sticky top-0 z-50 px-4 h-16 flex justify-between items-center w-full">
        <Link href="/">
          <span className="font-bold text-lg text-blue-900">MSA Surveys</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
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
      </nav>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-2 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => { if (!link.hasSubmenu) setIsOpen(false); }}
                  className="flex-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
                {link.hasSubmenu && (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="p-2 text-gray-500 hover:text-blue-600"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {link.hasSubmenu && servicesOpen && (
                <div className="pl-4 space-y-1 my-1 border-l-2 border-blue-100">
                  {serviceCategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-blue-600"
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

      {/* DESKTOP VERTICAL SIDEBAR (Fixed on the right side) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-l border-gray-200 h-screen sticky top-0 z-40 p-6 shadow-sm overflow-y-auto">
        <div className="mb-8">
          <Link href="/">
            <span className="font-bold text-lg text-blue-900 leading-snug block">
              MSA Surveys & Services
            </span>
          </Link>
          <p className="text-xs text-gray-400 mt-1">Operational Navigation</p>
        </div>

        <div className="flex flex-col space-y-1 flex-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between rounded-lg hover:bg-blue-50/60 transition-colors">
                <Link
                  href={link.href}
                  className="flex-1 px-3.5 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  {link.name}
                </Link>
                {link.hasSubmenu && (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="p-2 mr-1 text-gray-400 hover:text-blue-600 focus:outline-none"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Desktop Sub-menu */}
              {link.hasSubmenu && servicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 my-1 border-l-2 border-blue-200 ml-3">
                  {serviceCategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-2.5 py-1.5 rounded text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
          <p>HQ Support Available</p>
        </div>
      </aside>
    </>
  );
}