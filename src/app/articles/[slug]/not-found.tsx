import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ArticleNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-destructive mb-6" />
      <h1 className="text-4xl font-bold mb-3">Article Not Found</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Sorry, we couldn't find the article you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  );
}
