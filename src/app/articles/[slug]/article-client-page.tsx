
"use client";

import type { Article } from '@/types';
import Image from 'next/image';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CalendarDays, UserCircle, ArrowLeft, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect, type MouseEvent } from 'react';

type ArticleClientPageProps = {
  article: Article;
  canonicalUrl: string;
  absoluteImageUrl: string;
};

export default function ArticleClientPage({ article, canonicalUrl, absoluteImageUrl }: ArticleClientPageProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [copyMessageText, setCopyMessageText] = useState('');
  const [displayDate, setDisplayDate] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    if (article?.date) {
      setDisplayDate(format(new Date(article.date), 'MMMM d, yyyy'));
    }
  }, [article?.date]);

  const handleShare = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopyMessageText("Copiado!");
      setShowCopyMessage(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopyMessageText("Erro ao copiar!");
      setShowCopyMessage(true);
    } finally {
      setTimeout(() => {
        setShowCopyMessage(false);
        setCopyMessageText(''); 
      }, 3000);
    }
  };

  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
  const publisherLogoUrl = `${siteBaseUrl}/oie_pnD9PzjNbeOy.png`; // Assuming your logo is here

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": [absoluteImageUrl],
    "datePublished": article.date, // ISO 8601 format
    "dateModified": article.date, // Assuming date is also last modified date, update if different
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "VeritasIA Blog",
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogoUrl
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        <article>
          <header className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-6 text-primary hover:text-primary/80">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para os artigos
              </Link>
            </Button>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{displayDate ? displayDate : 'Processing date...'}</span>
              </div>
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Por {article.author}</span> 
              </div>
              <div className="flex items-center">
                <button 
                  onClick={handleShare}
                  aria-label="Share this article"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer"
                >
                  <Share2 className="mr-1 h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
                {showCopyMessage && (
                  <span className="ml-3 px-2 py-1 text-xs bg-primary/10 text-primary rounded-md shadow-sm animate-fadeIn">
                    {copyMessageText}
                  </span>
                )}
              </div>
            </div>
            {article.image && (
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{objectFit: "cover"}}
                  sizes="(max-width: 768px) 100vw, 768px"
                  data-ai-hint="article cover"
                  priority
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
                Explore mais artigos
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
