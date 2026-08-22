import { SERVICES, PORTS } from '@/data/portsAndServices';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, MapPin, Anchor, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} Services Across 40+ African Ports | MSA Group`,
    description: `Independent ${service.title} (${service.category}). Available for shipowners, charterers, and P&I clubs across major African maritime hubs.`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
        <ArrowLeft className="w-4 h-4" /> Back to All Services
      </Link>

      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 space-y-4 shadow-xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
          <Anchor className="w-3.5 h-3.5" /> {service.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{service.title}</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-sm md:text-base">{service.fullDescription}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Available Operational Ports for {service.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {PORTS.map((port) => (
            <Link
              key={port.id}
              href={`/ports/${port.id}`}
              className="bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-600 transition text-center space-y-1 block"
            >
              <MapPin className="w-4 h-4 text-blue-600 mx-auto" />
              <p className="font-bold text-slate-900 text-xs">{port.name}</p>
              <p className="text-[10px] text-slate-500">{port.country}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}