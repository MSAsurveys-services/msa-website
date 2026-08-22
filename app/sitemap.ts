import { MetadataRoute } from 'next';
import { PORTS, SERVICES } from '@/data/portsAndServices';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://msa-surveysandservices.com';

  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Dynamic Port Pages (42 URLs)
  const portRoutes = PORTS.map((port) => ({
    url: `${baseUrl}/ports/${port.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Service Pages (17 URLs)
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...portRoutes, ...serviceRoutes];
}