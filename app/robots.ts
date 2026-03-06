import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/form/'],
      },
    ],
    sitemap: 'https://rentabiliza.com/sitemap.xml',
  }
}
