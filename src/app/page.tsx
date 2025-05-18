
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
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const binarySequence = "011000011111000011110100011101000101";
  let path_d = "";
  let current_x = 10;
  const y_val = 30; // Center Y for characters
  const char_h = 20; // Height of characters
  const radius_y = char_h / 2;
  const width_0 = 16; // Width of '0' (ensure this is an even number for integer radius_x_0)
  const radius_x_0 = width_0 / 2; // X radius for '0'
  const width_1 = 4; // Width of '1'
  const spacing = 7; // Spacing between characters

  for (const char of binarySequence) {
    if (char === '0') {
      const cx = current_x + radius_x_0;
      path_d += `M${cx},${y_val - radius_y} A${radius_x_0},${radius_y} 0 1,0 ${cx - 0.01},${y_val - radius_y} Z `;
      current_x += width_0 + spacing;
    } else if (char === '1') {
      const dx = current_x + width_1 / 2;
      // Draw '1' as a vertical line of the same height as '0'
      path_d += `M${dx},${y_val - radius_y} L${dx},${y_val + radius_y} `;
      current_x += width_1 + spacing;
    }
  }
  const viewBoxWidth = current_x + 10 - spacing; // Remove last spacing and add right margin

  return (
    <div className="flex-grow">
      <section aria-labelledby="page-introduction" className="flex flex-col items-center sm:px-6 lg:px-8 pt-8 mb-12">
        <img src="/Gemini_Generated_Image_6rww6n6rww6n6rww-removebg-preview.png" alt="Blog VeritasIA logo" className="mx-auto mb-4 w-40 h-auto" />
        <h1 id="page-title" className="text-3xl sm:text-4xl font-bold text-center text-primary">
 Blog VeritasIA
        </h1>
        <h2 className="text-xl sm:text-2xl text-center text-gray-300 mb-8">
          Desmistificando o Hype, Revelando as Meias-Verdades das IAs Jurídicas
        </h2>

        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
          <Accordion type="multiple" className="w-full bg-gray-700/50 rounded-lg shadow-md border border-gray-600" defaultValue={["item-1"]}>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-200 hover:no-underline hover:bg-gray-600/50 rounded-t-lg">
                Conheça os Autores
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">
                {/* Author 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src="https://placehold.co/100x100.png"
                      alt="Foto do Dr. Fulano de Tal"
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-full"
                      sizes="(max-width: 639px) 96px, 112px"
                      data-ai-hint="profile photo"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Wilson Neto</h3>
                    <p className="text-sm leading-relaxed">
                      Formado em Engenharia de Computação pela UFRN (2005) e em Direito pelo Mackenzie (2020), possuo um vasto conhecimento técnico para compreender as capacidades e limitações da IA, garantindo informações claras e precisas para advogados e gestores jurídicos sobre o que a tecnologia pode entregar com qualidade e sem alucinações.
                    </p>
                  </div>
                </div>

                {/* Author 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src="https://placehold.co/100x101.png" /* Different placeholder for distinction */
                      alt="Foto do Eng. Ciclano da Silva"
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-full"
                      sizes="(max-width: 639px) 96px, 112px"
                      data-ai-hint="profile photo"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Cristian Brutten</h3>
                    <p className="text-sm leading-relaxed">
                    Empreendedor serial com dupla cidadania brasileira e americana. Investidor estratégico em empresas inovadoras. Sua visão de negócios foi aprimorada com um MBA por Harvard. Sua paixão por conhecimento o levou a formar-se em Odontologia por Harvard e em Música por Yale, demonstrando uma rara combinação de habilidades e interesses.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
          <Accordion type="multiple" className="w-full bg-gray-700/50 rounded-lg shadow-md border border-gray-600" defaultValue={["aviso-importante"]}>
            <AccordionItem value="aviso-importante" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-yellow-400 hover:no-underline hover:bg-gray-600/50 rounded-t-lg">
                AVISO IMPORTANTE
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-300">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-16 w-16 text-yellow-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p style={{ color: 'white' }}>
                      Conteúdo técnico-jurídico sobre IA no Direito, elaborado por profissionais com formação em Direito e Engenharia de Computação.
                    </p>
                    <p style={{ color: 'white' }}>
                      Nosso objetivo é oferecer uma análise precisa e fundamentada, diferenciando o potencial real da IA de promessas exageradas ou soluções superficiais baseadas apenas em ChatGPT (ou cursos de prompt/agentes de IA).
                    </p>
                    <p style={{ color: 'white' }}>
                      Se você busca sensacionalismo ou resultados irreais, este blog pode não ser para você.
                    </p>
                    <p style={{ color: 'white' }}>
                      Nosso compromisso é promover um entendimento responsável da IA no Direito, valorizando as Legaltechs que realmente agregam valor à advocacia.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="w-full flex justify-center my-12 px-4">
          <svg
            width="100%"
            height="50"
            viewBox={`0 0 ${viewBoxWidth} 50`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="max-w-lg text-gray-400"
          >
            <path
              d={path_d.trim()}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 mb-12">
          <h2 className="text-4xl font-semibold text-gray-200 mb-6 text-center">
            Artigos mais recentes
          </h2>
          <ScrollArea className="h-[1536px] w-full rounded-lg border border-gray-600 p-4 bg-gray-700/50 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>
    </div>
  );
}
