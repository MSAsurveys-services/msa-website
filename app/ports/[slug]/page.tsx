import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ port: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const portSlug = resolvedParams.port;
  const canonicalUrl = `https://www.msa-surveysandservices.com/ports/${portSlug}`;

  return {
    title: `MSA Port Operations Live - ${portSlug.toUpperCase()}`,
    description: `Live port operations and survey services for ${portSlug} port.`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function PortPage({ params }: Props) {
  const resolvedParams = await params;
  
  return (
    <main className="p-8 bg-slate-50 min-h-screen text-slate-900">
      <h1 className="text-3xl font-bold">MSA Port Operations Live: {resolvedParams.port}</h1>
    </main>
  );
}