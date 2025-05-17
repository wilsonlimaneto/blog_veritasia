import Link from 'next/link';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              Digital Pages
            </Link>
            <p className="mt-2 text-sm">
              &copy; {currentYear} Digital Pages. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm mb-4">
              Desenvolvido por{' '}
              <a
                href="#" // Replace with actual developer link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Seu Nome/Empresa Aqui
              </a>
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#" // Replace with actual WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#" // Replace with actual Instagram link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#" // Replace with actual LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
