
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
  const articles = getAllArticles(); // Assuming getAllArticles is synchronous or already awaited
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: `${article.title} | Digital Pages`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleClientPage article={article} />;
}
