import Link from 'next/link';
import { Globe } from 'lucide-react'; // Changed BookMarked, ChevronRight to Globe
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between p-2"> {/* Changed h-20 to h-18 */}
        <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="https://ia.maestrialaw.com.br" className="text-white hover:text-primary transition-colors flex items-center" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" /> {/* Added Globe icon */}
              Site
            </Link>
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
          <Button variant="outline" size="sm" className="ml-auto">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
