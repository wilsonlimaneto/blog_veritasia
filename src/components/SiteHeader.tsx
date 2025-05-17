import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between p-2">
        <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Consultar Processo
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Fale Conosco
            </Link>
          </nav>
          <Link
            href="https://ia.maestrialaw.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-primary/80 transition-colors ml-auto text-sm"
          >
            <Globe className="mr-2 h-4 w-4" />
            <span className="font-bold">Site</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
