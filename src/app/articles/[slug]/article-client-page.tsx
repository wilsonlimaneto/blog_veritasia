
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
};

export default function ArticleClientPage({ article }: ArticleClientPageProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [copyMessageText, setCopyMessageText] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

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
                <button 
                  onClick={handleShare}
                  aria-label="Share this article"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer"
                >
                  <Share2 className="mr-1 h-4 w-4" />
                  <span>Share</span>
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
