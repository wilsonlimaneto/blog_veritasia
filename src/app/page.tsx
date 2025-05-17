import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { AlertTriangle } from 'lucide-react';

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
    <div className="space-y-12 bg-[#CCCCCC]">
      <section aria-labelledby="latest-articles" className="flex flex-col items-center px-4">
        <img src="/Gemini_Generated_Image_6rww6n6rww6n6rww-removebg-preview.png" alt="Blog VeritasIA logo" className="mx-auto mb-4 w-32 h-auto" />
        <h1 id="latest-articles" className="text-4xl sm:text-5xl font-bold text-center text-primary">
          Blog VeritasIA
        </h1>
        <h2 className="text-xl sm:text-2xl text-center text-muted-foreground mb-8">
          Desmistificando o Hype, revelando as meias-verdades das IAs Jurídicas
        </h2>
        <div className="flex items-start gap-4 mb-8">
          <AlertTriangle className="h-24 w-24 text-yellow-500 flex-shrink-0" />
          <div className="flex-grow rounded-md border-2 border-black bg-[#666666] p-4">
            <p style={{ color: 'white' }}>AVISO IMPORTANTE - Este conteúdo é desenvolvido e mantido por profissionais com 2 diplomas (Direito + Engenharia de Computação).</p>

            <center><p style={{ color: 'white' }}> - </p></center>
            <p style={{ color: 'white' }}>Se preferir acreditar em sensacionalismo de rede social (Tenha um Exército de Advogados trabalhando por vocês 24h/dia), em hype ou em produtos montados apenas em cima do ChatGPT, sugerimos não perder tempo lendo as verdades abaixo!</p>
            <center><p style={{ color: 'white' }}> - </p></center>

            <p style={{ color: 'white' }}>O nosso principal objetivo é evitar que as mentiras contadas cansem o mercado e prejudiquem as Legaltechs que, de fato, agregam valor ao dia a dia da advocacia brasileira!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

