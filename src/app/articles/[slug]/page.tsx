
"use client";

import type { Article } from '@/types';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CalendarDays, UserCircle, ArrowLeft, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, type MouseEvent } from 'react';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

// generateStaticParams and generateMetadata can remain server-side,
// but since we need "use client" for hooks, they are effectively
// part of a client component's module. Next.js handles this.

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// generateMetadata still works with "use client" at the top of the file
// as Next.js can distinguish it as a special export.
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
  const { toast } = useToast();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!article) {
    notFound();
  }

  const handleShare = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent navigation if href is "#"
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Copiado!",
        description: "Link do artigo copiado para a área de transferência.",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Erro",
        description: "Não foi possível copiar o link.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        <article>
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
              <div className="flex items-center">
                <Link 
                  href="#" 
                  aria-label="Share this article" 
                  onClick={handleShare}
                  className="text-primary hover:text-primary/80 transition-colors flex items-center"
                >
                  <Share2 className="mr-1 h-4 w-4" />
                  <span>Share</span>
                </Link>
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
    </div>
  );
}
