import './globals.css';
import Link from 'next/link';
import { Anchor, Phone, Mail } from 'lucide-react';


import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://msa-surveysandservices.com'),
  title: {
    default: 'MSA Group | Marine Surveys & Inspection Services Across African Ports',
    template: '%s | MSA Group',
  },
  description: 'Independent marine surveying, draft surveys, bunker quantity surveys, container inspections, and tallying services across 40+ African ports.',
  keywords: [
    'Marine Survey Africa',
    'Draft Survey Douala',
    'Bunker Quantity Survey Durban',
    'Cargo Tallying Lagos',
    'Off Hire Condition Survey Mombasa',
    'P&I Club Surveyor Africa',
    'Hull Cleaning Supervision Kribi'
  ],
  openGraph: {
    title: 'MSA Group | Pan-African Marine Surveyors',
    description: 'Independent marine inspection & survey coverage across 40+ ports.',
    url: 'https://msa-surveysandservices.com',
    siteName: 'MSA Group',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Top Announcement Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>MSA Group — Operating across 40+ African Ports</span>
            <div className="flex gap-6">
              <a href="mailto:ops@msa-surveysandservices.com" className="flex items-center gap-1 hover:text-white transition">
                <Mail className="w-3 h-3" /> ops@msa-surveysandservices.com
              </a>
              <a href="tel:+237000000000" className="flex items-center gap-1 hover:text-white transition">
                <Phone className="w-3 h-3" /> 24/7 Operations Desk
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
  {/* Your Logo Image */}
  <img 
    src="/logo.jpg" 
    alt="MSA Group Logo" 
    className="h-12 w-auto object-contain"
  />
  <div>
    <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
      MSA GROUP
    </span>
    <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase block mt-1">
      Surveys & Services
    </span>
  </div>
</Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <Link href="/" className="hover:text-blue-900 transition">Home</Link>
              <Link href="#services" className="hover:text-blue-900 transition">Services</Link>
              <Link href="#ports" className="hover:text-blue-900 transition">Coverage Ports</Link>
              <Link 
                href="#contact" 
                className="bg-blue-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition shadow-sm"
              >
                Request a Survey
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg font-bold text-white mb-2">MSA Group</p>
            <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
              Independent Marine Surveys, Tallying, Loss Adjusting & Cargo Inspection Services across 40+ key African trade hubs.
            </p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} MSA Group. All rights reserved.
            </p>
          </div>
        </footer>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/23782326577?text=Hello%20MSA%20Group,%20I%20would%20like%20to%20inquire%20about%20a%20marine%20survey."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all transform hover:scale-110"
  title="Chat with MSA Operations on WhatsApp"
>
  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
</a>
      </body>
    </html>
  );
}