
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="space-y-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-900 flex-grow">
      <section aria-labelledby="latest-articles" className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <img src="/Gemini_Generated_Image_6rww6n6rww6n6rww-removebg-preview.png" alt="Blog VeritasIA logo" className="mx-auto mb-4 w-32 h-auto" />
        <h1 id="latest-articles" className="text-4xl sm:text-5xl font-bold text-center text-primary">
          Blog VeritasIA
        </h1>
        <h2 className="text-xl sm:text-2xl text-center text-gray-300 mb-8">
          Desmistificando o Hype, revelando as meias-verdades das IAs Jurídicas
        </h2>

        <div className="w-full max-w-4xl mb-8">
          <Accordion type="multiple" className="w-full bg-gray-700/50 rounded-lg shadow-md border border-gray-600" defaultValue={["item-1"]}>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-200 hover:no-underline hover:bg-gray-600/50 rounded-t-lg">
                Minibio (Currículo dos Responsáveis pelo conteúdo)
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">
                {/* Author 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src="https://placehold.co/100x100.png"
                      alt="Foto do Dr. Fulano de Tal"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      data-ai-hint="profile photo"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Dr. Fulano de Tal</h3>
                    <p className="text-sm leading-relaxed">
                      Profissional com vasta experiência em Direito, dedicado a analisar e desmistificar as aplicações de Inteligência Artificial no setor jurídico. Meu objetivo é fornecer informações claras e precisas para advogados e gestores jurídicos.
                    </p>
                  </div>
                </div>

                {/* Author 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src="https://placehold.co/100x101.png" /* Different placeholder for distinction */
                      alt="Foto do Eng. Ciclano da Silva"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      data-ai-hint="profile photo"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Eng. Ciclano da Silva</h3>
                    <p className="text-sm leading-relaxed">
                      Especialista em Engenharia de Computação com foco em Inteligência Artificial. Dedico-me a explorar e explicar as tecnologias por trás das IAs jurídicas, ajudando a traduzir o complexo para o compreensível.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full max-w-4xl mb-8">
          <Accordion type="multiple" className="w-full bg-gray-700/50 rounded-lg shadow-md border border-gray-600" defaultValue={["aviso-importante"]}>
            <AccordionItem value="aviso-importante" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-yellow-400 hover:no-underline hover:bg-gray-600/50 rounded-t-lg">
                AVISO IMPORTANTE
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-16 w-16 text-yellow-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p style={{ color: 'white' }}>Este conteúdo é desenvolvido e mantido por profissionais com 2 diplomas (Direito + Engenharia de Computação).</p>
                    <center><p style={{ color: 'white' }}> - </p></center>
                    <p style={{ color: 'white' }}>Se preferir acreditar em sensacionalismo de rede social (Tenha um Exército de Advogados trabalhando por vocês 24h/dia), em hype ou em produtos montados apenas em cima do ChatGPT, sugerimos não perder tempo lendo as verdades abaixo!</p>
                    <center><p style={{ color: 'white' }}> - </p></center>
                    <p style={{ color: 'white' }}>O nosso principal objetivo é evitar que as mentiras contadas cansem o mercado e prejudiquem as Legaltechs que, de fato, agregam valor ao dia a dia da advocacia brasileira!</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mt-8"> {/* Ensured articles take available width and added margin-top */}
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
