
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

// It's good practice to define NEXT_PUBLIC_SITE_URL in your .env.local or environment variables
const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
const defaultSiteImage = `/oie_pnD9PzjNbeOy.png`; // Relative to public folder

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl), // Crucial for resolving relative image paths for OG/Twitter
  title: {
    default: 'VeritasIA Blog',
    template: '%s | VeritasIA Blog', // For individual page titles
  },
  description: 'Revelando o que é fato e o que é fake no mundo das IAs Jurídicas',
  openGraph: {
    title: {
      default: 'VeritasIA Blog',
      template: '%s | VeritasIA Blog',
    },
    description: 'Revelando o que é fato e o que é fake no mundo das IAs Jurídicas',
    url: siteBaseUrl,
    siteName: 'VeritasIA Blog',
    images: [
      {
        url: defaultSiteImage, // Next.js will make this absolute using metadataBase
        width: 200, // Specify actual logo width
        height: 66, // Specify actual logo height
        alt: 'VeritasIA Blog Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Can be 'summary' if images are smaller or less prominent
    title: {
      default: 'VeritasIA Blog',
      template: '%s | VeritasIA Blog',
    },
    description: 'Revelando o que é fato e o que é fake no mundo das IAs Jurídicas',
    images: [defaultSiteImage], // Next.js will make this absolute
    // site: '@YourTwitterHandle', // Optional: Your site's Twitter handle
  },
  // You can also add other meta tags here, like:
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  // robots: { // Example, customize as needed
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-900`}>
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
