import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'MSA Surveys & Services',
  description: 'Container cargo inspection and damage surveying services',
};

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

// Client-side Navigation Component with Mobile Menu Toggle
import { useState } from 'react';

function NavigationWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Ports', href: '/ports' },
    { name: 'MSA Network', href: '/msa-network' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="font-bold text-xl text-blue-900">MSA Surveys & Services</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
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
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}