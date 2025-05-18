import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

  const articles = getAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteBaseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7, // Articles are important, but homepage might be slightly more so
  }));

  return [
    {
      url: siteBaseUrl,
      lastModified: new Date().toISOString(), // Or a more specific last modified date for the homepage
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...articleEntries,
    // Add other static pages here if you have them
    // e.g., { url: `${siteBaseUrl}/about`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
