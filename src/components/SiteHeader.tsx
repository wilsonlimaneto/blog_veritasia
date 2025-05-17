import Link from 'next/link';
import { BookMarked } from 'lucide-react';

export default function SiteHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <BookMarked className="h-7 w-7" />
          Digital Pages
        </Link>
        {/* Navigation links can be added here if needed */}
      </div>
    </header>
  );
}
