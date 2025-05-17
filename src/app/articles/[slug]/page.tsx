
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import type { Article } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

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

export async function generateMetadata({ params }: ArticlePageProps) {
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

  return (
    <div className="dark bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-900 flex-grow py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="mr-2 h-4 w-4" />
              <span>By Digital Pages Team</span> {/* Placeholder author */}
            </div>
          </div>
          {article.image && (
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint="article cover"
              />
            </div>
          )}
          <Separator />
        </header>
        
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Explore More Articles
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
