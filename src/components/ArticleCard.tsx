
"use client";

import type { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayDate, setDisplayDate] = useState<string | null>(null);

  useEffect(() => {
    // Defer date formatting to client-side to avoid hydration mismatch
    if (article?.date) {
      setDisplayDate(format(new Date(article.date), 'MMMM d, yyyy'));
    }
  }, [article?.date]);

  return (
    <Link
      href={`/articles/${article.slug}`}
      aria-label={`Read more about ${article.title}`}
      className="block h-full group"
      onClick={() => setIsLoading(true)}
    >
      <Card className="relative flex flex-col overflow-hidden h-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardHeader className="p-0">
          <div className="relative w-full h-56 sm:h-64">
            <Image
              src={article.image || "https://placehold.co/600x400.png"}
              alt={article.title}
              fill
              style={{objectFit: "cover"}}
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="technology abstract"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-lg lg:text-xl mb-3 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {article.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{displayDate || 'Loading date...'}</span>
          </div>
          <div className="inline-flex items-center text-primary group-hover:underline text-sm font-bold">
            <span className="font-bold">Leia</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardFooter>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 rounded-lg">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm shadow-lg">
              Loading...
            </div>
          </div>
        )}
      </Card>
    </Link>
  );
}
