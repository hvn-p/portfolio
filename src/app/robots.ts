import type { MetadataRoute } from 'next'
import { indexable, siteUrl } from '@/site'

// A preview keeps crawlers out; the public site lists its sitemap.
export default function robots(): MetadataRoute.Robots {
  if (!indexable) return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/' }, sitemap: new URL('/sitemap.xml', siteUrl).toString() }
}
