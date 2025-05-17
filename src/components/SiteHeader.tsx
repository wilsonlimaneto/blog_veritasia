import Link from 'next/link';
import { Globe, MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between p-2">
        <Link href="/" aria-label="Pagina inicial">
          <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
        </Link>
        
        <div className="flex items-center gap-4"> {/* Reduced gap for potentially more items */}
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
          <div className="flex items-center gap-4"> {/* Group for Site and WhatsApp links */}
            <Link
              href="https://ia.maestrialaw.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-primary/80 transition-colors text-sm"
            >
              <Globe className="mr-2 h-4 w-4" />
              <span className="font-bold">Site</span>
            </Link>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#" /* Substitua pelo link real do WhatsApp */
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-primary/80 transition-colors text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span className="font-bold">Entre no Grupo de Discussão</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>(Para Engenheiros e Advogados)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  );
}
