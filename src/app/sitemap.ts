import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://inversiones-moy-web.vercel.app';

  const routes = [
    '',
    '/nosotros',
    '/contacto',
    '/cotiza',
    '/servicios',
    '/servicios/mudanzas',
    '/servicios/almacenaje',
    '/servicios/renting',
    '/servicios/transporte-frio',
    '/servicios/productos-peligrosos',
    '/servicios/gestion-logistica',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/servicios' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/servicios/') ? 0.8 : 0.6,
  }));
}
