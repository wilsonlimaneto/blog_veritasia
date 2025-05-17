import Link from 'next/link';
import { BookMarked, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <BookMarked className="h-8 w-8" />
          <span>Digital Pages</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Consultar Processo
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Fale Conosco
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
          </nav>
          <Button variant="outline" asChild>
            <Link href="#">
              Login
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
