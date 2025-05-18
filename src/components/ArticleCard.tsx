import type { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { format } from 'date-fns';
import { CalendarDays, ArrowRight } from 'lucide-react';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Link href={`/articles/${article.slug}`} aria-label={`Read more about ${article.title}`}>
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
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-lg lg:text-xl mb-3 leading-tight line-clamp-2">
            {article.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {article.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>

        </div>

        <Link href={`/articles/${article.slug}`} className="inline-flex items-center text-primary hover:underline text-sm font-medium">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
