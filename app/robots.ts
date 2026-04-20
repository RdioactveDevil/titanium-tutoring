import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://titaniumtutoring.com.au').replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/contact/thank-you',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
