export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} Digital Pages. All rights reserved.</p>
        <p className="text-sm mt-1">Crafted with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
