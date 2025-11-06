import type { MetadataRoute } from 'next'
import { allServices } from './(site)/data/services'
import { blogPosts } from './(site)/data/blog/posts'

const siteUrl = 'https://abantosgb.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = ['', '/genel', '/iletisim', '/blog'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${siteUrl}/hizmetler/${service.slug}`,
    lastModified: now,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
