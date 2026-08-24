'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PORTS, SERVICES } from '@/data/portsAndServices';
import { 
  ShieldCheck, MapPin, ChevronDown, Anchor, Scale, Fuel, 
  PackageCheck, Eye, Sparkles, Ship, Box, Calendar, 
  AlertTriangle, Wrench, Search, Waves, CheckCircle, Clock, Globe, Mail, MessageCircle
} from 'lucide-react';

export default function Home() {
  const [openRegion, setOpenRegion] = useState<string | null>('West Africa Corridor');

  const regions: Record<string, string[]> = {
    "West Africa Corridor": ["Ivory Coast", "Gambia", "Liberia", "Nigeria", "Guinea", "Benin", "Senegal", "Sierra Leone", "Togo", "Mauritania", "Ghana"],
    "Central Africa Corridor": ["Cameroon", "Gabon", "Congo", "DR Congo", "Angola"],
    "East Africa & Indian Ocean": ["Mozambique", "Tanzania", "Kenya"],
    "Southern Africa Hubs": ["South Africa", "Namibia"]
  };

 const categories = [
  "Cargo & Quantity Management",
  "Vessel Integrity & Chartering Support",
  "Operational, Port & Specialized Services",
  "Damage & Forensic Investigation"
];

  const getPortsByCountries = (countries: string[]) => {
    return PORTS.filter(p => countries.includes(p.country));
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'draft-surveys': return Scale;
      case 'bunker-quantity-surveys': return Fuel;
      case 'tallying-services': return PackageCheck;
      case 'loading-discharge-supervision': return Eye;
      case 'cargo-hold-cleaning-inspections': return Sparkles;
      case 'pre-purchase-surveys': return Ship;
      case 'pre-shipment-surveys': return Box;
      case 'on-hire-condition-surveys': return Calendar;
      case 'off-hire-condition-surveys': return Calendar;
      case 'cargo-damage-surveys': return AlertTriangle;
      case 'hull-inspections': return Search;
      case 'machinery-inspections': return Wrench;
      case 'crane-cargo-gear-checks': return Anchor;
      case 'container-inspections': return Box;
      case 'project-cargo-heavy-lift': return Anchor;
      case 'underwater-hull-inspections': return Waves;
      case 'hull-cleaning-supervision': return Sparkles;
      default: return Anchor;
    }
  };

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center py-16 md:py-24 bg-slate-900 text-white rounded-2xl shadow-xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <ShieldCheck className="w-4 h-4" /> Marine Surveying & Port Inspection Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">MSA Group</h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Delivering independent, highly technical, and precise marine surveying services across 40+ African ports.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="#services" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg">
              Explore Services
            </a>
            <a href="#ports" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-lg transition">
              View Operational Ports
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-100 rounded-2xl p-8 md:p-12 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Pan-African Port Reach</h3>
              <p className="text-sm text-slate-600">Dedicated surveyors available across 40+ key regional ports for rapid mobilization.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Accepted Industry Authority</h3>
              <p className="text-sm text-slate-600">Independent reports trusted by global P&I Clubs, insurers, and maritime courts.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Rapid Digital Reporting</h3>
              <p className="text-sm text-slate-600">Fast preliminary findings delivered directly after inspection to keep port turnarounds moving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-600">Standalone operational, condition, and quantity assessments engineered for shipowners, charterers, insurers, and cargo owners.</p>
        </div>

        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
              <Anchor className="w-6 h-6 text-blue-600" />
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter(s => s.category === category).map((service) => {
                const IconComponent = getServiceIcon(service.id);
                return (
                  <div key={service.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-44 object-cover"
                        />
                      ) : (
                        <div className="w-full h-44 bg-slate-900 flex items-center justify-center text-blue-400">
                          <IconComponent className="w-12 h-12" />
                        </div>
                      )}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-50 text-blue-800 rounded-md">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900">{service.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.fullDescription}</p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2">
                      <a
                        href={`https://wa.me/237622532310?text=Hello%20MSA%20Group,%20I%20would%20like%20to%20request%20information%20or%20a%20quote%20for%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs transition shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </a>
                      <a
                        href={`mailto:services@marinesurveysafrica.com?subject=Inquiry%20regarding%20${encodeURIComponent(service.title)}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs transition shadow-sm"
                      >
                        <Mail className="w-4 h-4" /> Email
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Collapsible Ports Section */}
      <section id="ports" className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">40+ Operational Ports</h2>
          <p className="text-slate-600">Select a regional corridor to view active ports. Click any port to open its dedicated SEO page.</p>
        </div>

        <div className="space-y-4">
          {Object.entries(regions).map(([regionName, countries]) => {
            const portsInRegion = getPortsByCountries(countries);
            const isOpen = openRegion === regionName;

            return (
              <div key={regionName} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenRegion(isOpen ? null : regionName)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-900 text-lg">{regionName}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                      {portsInRegion.length} Ports
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {isOpen && (
                  <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 bg-white border-t border-slate-100">
                    {portsInRegion.map(port => (
                      <Link
                        key={port.id}
                        href={`/ports/${port.id}`}
                        className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-500 rounded-lg text-center transition group block"
                      >
                        <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <p className="font-bold text-slate-900 text-xs group-hover:text-blue-700 transition-colors">{port.name}</p>
                        <p className="text-[10px] text-slate-500">{port.country}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}