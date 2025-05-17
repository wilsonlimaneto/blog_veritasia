import Link from 'next/link';
import { Youtube, InstagramIcon, Linkedin } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
 <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
            <p className="mt-2 text-sm">Faça buscas Inteligentes, sem esforço. Ganhe mais causas.</p>
            <p className="mt-2 text-sm">
              &copy; {currentYear} Maestria Law. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white">Siga nossas redes!</h3>
            <div className="flex space-x-4 mt-4"> {/* This div already controls spacing */}
              <Link href="https://www.youtube.com/@Maestrialaw" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/maestrialaw/" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/maestrialaw/" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div> {/* Closing div for flex space-x-4 mt-4 */}
      </div></div>
    </footer>)}