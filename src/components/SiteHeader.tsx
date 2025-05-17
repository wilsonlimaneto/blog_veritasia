import Link from 'next/link';
import { BookMarked, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between p-2">
        <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="https://ia.maestrialaw.com.br" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Site
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
