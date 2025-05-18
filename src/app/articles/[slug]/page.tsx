
import type { Metadata } from 'next';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Article } from '@/types';
import ArticleClientPage from './article-client-page';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

  if (!article) {
    return {
      title: 'Article Not Found | VeritasIA Blog',
    };
  }

  const articleUrl = `${siteBaseUrl}/articles/${article.slug}`;
  // Ensure article.image is an absolute URL for OG tags
  const absoluteImageUrl = article.image.startsWith('http') ? article.image : `${siteBaseUrl}${article.image}`;

  return {
    title: `${article.title} | VeritasIA Blog`,
    description: article.description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: 'VeritasIA Blog',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200, // Provide actual width or a common aspect ratio like 1.91:1
          height: 630, // Provide actual height
          alt: article.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: article.date, // ISO 8601 format
      authors: [article.author], // Can be an array of author names or profile URLs
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [absoluteImageUrl],
      // site: '@YourTwitterHandle', // Optional: Your site's Twitter handle
      // creator: '@AuthorTwitterHandle', // Optional: Author's Twitter handle if available
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
  const articleUrl = `${siteBaseUrl}/articles/${article.slug}`;
  const absoluteImageUrl = article.image.startsWith('http') ? article.image : `${siteBaseUrl}${article.image}`;


  return <ArticleClientPage article={article} canonicalUrl={articleUrl} absoluteImageUrl={absoluteImageUrl} />;
}
