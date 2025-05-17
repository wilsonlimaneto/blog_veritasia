import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';

export default function HomePage() {
  const articles = getAllArticles();

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-semibold mb-4">No Articles Found</h1>
        <p className="text-muted-foreground">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section aria-labelledby="latest-articles">
        <h1 id="latest-articles" className="text-3xl sm:text-4xl font-bold mb-8 text-center text-primary">
          Latest Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
