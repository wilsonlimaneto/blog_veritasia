---
title: "A verdade sobre a Jurisprudência por IA, como ela é inventada e como evitar (sem prompt milagroso ou falsa promessa)"
description: "Primeiro o ChatGPT inventa, depois surgem funcionalidades de Busca e Investigação (Deep Search e/ou Pesquisa Profunda). Como funciona e até onde estas pesquisas podem ajudar você advogado."
date: "2025-05-17"
image: "search_engine.png"
author: "Wilson Lima"
---


Diariamente, milhares de julgados são publicados. O Direito, em seu turno, manifesta-se por meio do entendimento emanado por julgados publicados, dia após dia. Por outro lado, os mecanismos de pesquisa em sistemas de jurisprudência, estão em sua maioria ultrapassados (palavra-chave) ouinventam jurisprudência, colocando em risco o trabalho e reputação dos advogados.                                                                   

**Se você quer entender como utilizar os melhores motores de busca de jurisprudência e sem armadilhas (ferramentas obsoletas ou jurisprudência inventada), continue lendo. E, se gostar, compartilhe este artigo: ele pode ajudar outros advogados.**
                                                                
Caso prefira correr riscos, sugiro que continue se informando sobre IA jurídica única e exclsivamente por meio de rede social!
                                                                
                                                                
### 1. Princípios de uma busca por documentos:
Na prática qualquer sistema de busca precisa compreender a necessidade do seu usuário e, dentro de uma enorme base de documentos, selecionar aqueles que atendem ao que foi solicitado.                                                       

No caso dos advogados, ao se buscar por jurisprudência, deseja-se que os documentos tratem de assuntos bastante específicos e muitas vezes, para qual parte a decisão foi favorável.                                                         

Por tal motivo, a tecnologia criada para buscar documentos é chamada motor de busca (vide imagem). Um motor é uma constrção do ramo da enhenharia e como tal, irão existir motors bons e motores ruins.



###   2. Como funciona uma busca por palavra-chave e conectivo lógico?

A primeira tecnologia (década de 70) a ser usada para encontrar documentos digitais, foi a de busca por palavra-chave. Algoritmos foram criados para tentar inferir quais documentos seriam mais relevantes para um conjunto de palavras ali digitados pelos advogado.

Os algoritmos usam a sequencia de letras (que formam as palavras) e regras lógicas representadas por meio dos conectivos, para ranquear os documentos que julgam mais relevantes.

> A metodologia de pesquisa de jurisprudência por palavra-chave ainda é usada pela maioria esmagadora dos sistemas de busca jurisprudencial do país: cabe aos advogados ficar testando uma combinação de palavras-chave, que maximizem a chance de o sistema retornar um conjunto de documentos relevante. Tomando tempo preciso numa tarefa improdutiva (caça-palavras).

Logo, percebe-se que os sistemas de busca por com esta tecnologia não entendem o contexto jurídico: são um mero filtro cara-crachá de palavras nos documentos, sem compreender o significado e contexto no qual elas aparecem. Assim uma pesquisa contendo a palavra **rede** irá retornar **acórdãos sobre rede social ou rede de saúde indistintamente**. 

Assim, fica para o advogado desmepenhar o **improdutivo trabalho de selecionar palavras de busca e garimpar documentos relevantes naquele cojunto pouco assertivo de resultados apresentados.**


> Mecanismos antigos, por exemplo, não entendem a diferença entre a palavra **rede** aplicada num contexto de **rede de saúde** ou de **rede social**, retornando **indistintamente** estes resultados, majoritariamente irrelevantes para os advogados.
                                                                                                                                                                                          
                                                                                                                          
####  2.1. Como posso identificar se o sistema que uso é baseado em palavras?
Entendendo que esta metodologia é antiga e que muitos e muitos sistemas ensinam a usar palavras na busca, existem outros fatores que podem ajudar a identificar se o sistema em uso é inadequado.
1. **Uso de conectivos lógicos:** se o advogado precisa utilizar de recursos como E / OU / aspas, o sistema usa tecnologia de pesquisa por palavra-chave.
2. **Garimpar ementas:** se o usuário precisa ficar lendo os documentos checando se o memso retornou uma decisão relevante, provavelmente ele usa uma sistema antigo.
3. **Impossível especificar regras específicas:** em um sistema de pesquisa por palavra não é possivel indicar regras específicas. Não é permitido solicitar que a decisão sobre alguma tese jurídica tenha, por exemplo, sido favorável a determinada parte.
4. **Pouca ou nenhuma resiliência** se uma palavra é digitada (no campo de busca) de forma errada, como o filtro é feito pelas palavras, nenhum ou quase nenhum documento é retornado.

####  2.2. Exemplo de um sistema real baseado em palavra-chave:
É relativamente fácil identificar um sistema baseado em palavra-chave. Você perceberá pelo que foi apresentado no item 2.1, pela qualidade dos documentos retornado e, também, pelo fato de o próprio sistema fornecer botões como os ilustrados:

![jurisprudência por palavra-chave](/images/articles/palavras_chave_stf.png "Sistema de busca por palavra-chave")                                                                                      




###   3. Como funciona uma busca semântica/contextual?

O Google construiu seu império em torno da qualidade de sua busca. Existe até um ditado folclórico que diz:

> "Se não está no Google, não existe no mundo..."

Isto se dá pela reputação construída ao longo de altos e reiterados investimentos em tecnologias de motores de busca. Enquanto usuários, nós percebemos que, ao pesquisar algo no Google, ele entende o contexto daquilo que queremos e, por tal motivo, os resultados sempre são relevantes e na **primeira página (do Google)**.  

> Diferentemente do que os advogados vivenciam ao buscar nos tribunais (ou mesmo outras ferramentas), uma pesquisa no Google sempre retorna páginas relevantes nos primeiros resultados. Isso ocorre pois o motor de busca deo Google entende a semântica (contexto no qual as palavras são empregadas numa frase/texto).

Enquanto numa situação de busca por julgados no sistema do tribunal o advogado precisa digitar várias combinações de palavras e, ato contínuo, garimpar várias ementas por horas a fio, numa busca feita no ambiente Google, rapidamente encontra-se o que quer.
                                                                                     


####  3.1. E, como fazer as máquinas entenderem a semântica das palavras, como se fossem humanas?
Enquanto humanos, nossa linguagem é complexa e cheia de nuances. Se as máquinas irão comunicar-se por bits (0's e 1's), nossa linguagem é rica e cheia de significado.

O problema técnico de busca documental ocorre justamente por este gap entre uma linguagem complexa (a dos humanos) e uma linguagem pobre (a das máquinas).


#### 3.2. Primeira solução técnica para busca de documentos (palavra-chave)
Assim, a primeira técnica desenvolvida na tentativa de mapear uma entrada escrita por um humano num conjunto de documentos (também escritos por humanos) foi a de busca por palavra chave.

> Na busca por palavra-chave, o algoritmo BM25 usa mecanismos de busca para estimar a relevância de documentos para uma determinada consulta de pesquisa. Baseia-se na estrutura de recuperação probabilística desenvolvida nas décadas de 1970 e 1980 por Stephen E. Robertson , Karen Spärck Jones e outros.

                                                                                          
                                                                                           

#### 3.3. A tecnologia de Transformers possibilitou que os computadores passassem a entender a sequencia das palavras e o contexto (ideia semântica) formada por este sequenciamento.

O Google criou a tecnologia capaz de entender o contexto formado pela sequência das palavras numa frase.

A tecnologia de Transformers foi inventada e introduzida ao mundo em 2017, através do artigo científico inovador intitulado "Attention Is All You Need" (Atenção é Tudo o Que Você Precisa), de autoria de Vaswani et al. 

> O Transformer calcula a "importância" ou "relevância" de todas as outras partes da mesma sequência em relação àquela que está sendo processada. Isso permite que o modelo entenda o contexto e as dependências entre palavras que estão distantes na frase. Por fim, GPT é a sigla para Generative Pre-trained Transformer.

**Por tal motivo, o usuário ao buscar no Google percebe que o mecanismo entende o contexto daquilo que você precisa e, por outro lado, ao buscar em tribunais, isto não acontece.**

> Como a tecnologia Transformer entende o contexto proveniente da sequência entre as palavras, ela entende ideias. Assim, se duas frases comunicam a mesma ideia com palavras diferentes, uma busca semântica será capaz de encontrar documentos que tratam de assunsos específicos ainda que o usuário utilize palavras diferentes em sua busca (o que não acontece em pesquisas por palavras-chave).

###   4. O advento do ChatGPT e as alucinações (**jurisprudência inventada**):
Construíndo em cima da ideia dos transformers, a OpenAI, por meio do ChatGPT, inaugurou uma revolução: os computadores passaram a gerar conteúdo como se fossem humanos.

Foi a primeira vez que uma máquina sequenciou palavras em frases, fases em texto com um significado complexo, com nível de detalhes e nuances da escrita humana.

Isso foi possível pois, conforme explicado anteriormente, os transformers, durante a etapa de treinamento de um modelo LLM, atuam para criar representações internas (matemáticas/estatísticas) de qual sequência de palavras compõem um texto contendo a ideia/contexto solicitada via prompt.

E, a pergunta mais importante deste artigo. **Mas, por que o ChatGPT inventa jurisprudência?**

Os modelos de IA generativa, operados por promtps não possuem a inteligência humana (dotada de superior complexidade).

Perceba: não é inerente à IA (às máquinas) as ideias de perpepção, intuição, garra, vontade, dor, crítica, experiência ou muitas outras características humanas (da inteligência natural).

Assim, quando os LLMs são solicitados para apresentar alguma jurisprudência, eles vão naquele conjunto de dados nos quais foi treinado e sequenciam (**geram**) uma resposta por meio de um conjunto de frases que podem até fazer sentido, mas que são geradas do nada e não possuem uma visão crítica acerca do que foi informado.

**Logo, entendendo-se que uma jurisprudência está em um documento escrito por humanos e publicado, qual a chance de uma IA ter todos os julgados brasileiros publicados diariamente no conjunto de dados usados para sua etapa de treinamento (delimitada no tempo)? Além disto, qual a chance de ela concatenar as exatas palavras contidas naquele exato documento (produzindo uma jurisprudência real)?**

> Quando se pesquisa jurisprudência com ChatGPT o memso gera uma resposta por meio de uma seqência de palavras com maior propabilidade de constuir um texto correto. Mas, o ChatGPT não está consultando uma base de julgados reais e selecionado aquele que trata de todos os detalhes solicitados pelo advogado. O ChatGPT está apenas escrevendo o que provavelmenbte é um texto de jurisprudência, mas sem qualquer compromisso com a realidade: o compromisso dos LLMs é com a probabilidade.

###   5. Mas e as funções Buscar / Deep Research / Investigar, elas não resolvem este problema?

Quando as big techs lançaram as funcionalidades de busca, foi uma proliferação de posts nas redes sociais ensinando a buscar jurisprudência com IA Generativa. Parecia, finalmente, que os problemas tinham acabado.

De fato, essas funcionalidades deixam de responder ao pedido por julgado usando uma geração de um texto **provavelmente parecido com uma jurisprudência** como resposta (logo, se é parecido e gerado pela máquina, é falso e inventado) e passam a, em tempo real, buscar nos tribunais por documentos.

**Resolvido o problema, certo? Logicamente, não! Não de forma completa e confiável**

Vale relembrar o que foi explicado no início do artigo: os sistemas de tribunais utilizam a antiga tecnologia por palavra-chave, que retornam julgados de péssima qualidade, por depender da lógica entre as palavras.

Além disso, essas buscas dessas ferramentas encontram muito mais artigos avulsos (e duvidosos) publicados aleatoriamente na internet do que acórdãos propriamente ditos.

Perguntando aos próprios GPTs se é possivel confiar e garantir que ao buscar via funcionalidade de Pesquisa, e se estes podem encontrar todos os documentos devidamente escondidos (captchas e firewalls) dentro dos sistemas de pesquisa de jurisprudência dos tribunais... **a resposta é negativa**. Esses mecanismos não possuem a base integral de julgados disponível para uma busca semântica e retoram apenas uma pequena parcela de documentos, períódicos ou artigos duvidosos escritos sem critério no mundo da Internet.

> Os próprios GPts respondem que não dá para confiar que a melhor e mais específica e atualizada jurisprudência será encontrada pelos novos mecanismos de Busca e Investigação. Eles não possuem acesso irrestrito a todos os documentos e dependem dos péssimos sistemas baseados em palavras-chave dos tribunais (sistemas velhos conhecidos dos advogados).

###   6. Afinal, como podemos buscar jurisprudência real e relevante de uma forma que não seja tão obsoleta quanto a pesquisa por palavra-chave?

Uma pesquisa jurisprudencial bem construída, dentro de todos os aspectos acima elencados depende de alguns requisitos.

1. **Disponibilidade de uma ampla base de julgados reais:** um sistema de pesquisa de julgados real precisa ter, de prontidão, todo o conjunto de decisões: não adianta usar ferramentas que irão tentar encontrar os julgados nos tribunais, conforme anteriormente explicado.
2. **Mecanismo de pesquisa moderno:** com todos os documentos em mãos é necessáriuo que o sistema utilize um motor de pesquisa semântica. Somente este formato poderá garantir que documentos que tratam do mesmo assunto serão retornados numa pesquisa.
3. **Uso de um LLM treinado NÃO para GERAR documentos, mas para SELECIONAR documentos:** enquanto um advogado usa um sistema por palavra-chave e perde tempo digitando palavras/conectivos e, depois, selecionando as ementas mais relevantes num emaranhado de decisões descontextualizadas, um sistema moderno fará este árduo e improdutivo trabalho. Com um LLM específico (não Genérico como ChatGPT) e bem treinado, um sistema de pesquisa será capaz de receber um apanhado inicial de documentos extremamente relevantes e selecionar quais atendem a tudo que foi solicitado pelo advogado.
4. **Capaz de receber o input de pesquisa em linguagem natural:** sistemas modernos retiram mais outro trabalho improdutivo das mãos do advogado: o de tentar encaixar uma sequência de palavras e conectivos que maximizem sua chance de encontrar julgados menos irrelevantes. Assim, no estado tecnológico atual, um sistema será capaz de receber um input em linguagem natural e retornar documentos surpreendentemente relevantes. Dessa forma, o advogado pode pedir que uma pesquisa seja feita como se estivesse conversando com um asistente e receber decisões contendo exatamente o que foi solicitado.


###   7. Conclusão:
Não se deve confiar em tudo que é falado no hype das redes sociais: existe muita coisa boa, mas a onda da IA jurídica apresentou uma séria de desinformação (ou meia-verdade) que é necessário combater para não prejudicar legaltechs sérias. Um sistema bem construído de busca de jurisprudência vai muito além de prompts milagrosos.

No Brasil, algumas empresas passaram a adotar alguns dos mecanismos acima apresentados de um motor de busca inovador. A Maestria Law (www.maestrialaw.com.br) segue a cartilha de forma completa. Selecionada pelo programa Google for Startups, a Maestria desenvolveu uma ferramenta de pesquisa de jurisprudência dno qual o advogado é capaz de solicitar uma pesquisa bem específica por meio de linguagem natural e receber exatamente o que foi solicitado.

**Na Maestria Law o advogado pode pesquisar: "Encontre no TRF2 julgado sobre tributação pis e cofins de uma receita decorrente de perdão de dívida em empresa em recuperação judicial, que tenha sido favorável ao contribuinte."**

A ferramenta irá encontrar sim um acõrdão com todos esses detalhes. Convenhamos em qual ferramenta que você usa hoje seria possível encontrar esta decisão em poucos segundos?

> É isso: o melhor motor de busca de jurisrudência foi selecionado dentre 800 startups para um programa de aceleração. Quem inventou a melhor busca na internet agora acelera quem inventou a melhor busca de jurisprudência.



