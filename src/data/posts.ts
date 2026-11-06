export interface BlogSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-que-seu-cliente-pesquisa-antes-de-contratar-sua-empresa',
    title: 'O Que Seu Cliente Pesquisa Antes de Contratar Sua Empresa?',
    excerpt: 'Descubra o que potenciais clientes pesquisam antes de entrar em contato com uma empresa e como usar essas informações para melhorar sua presença digital.',
    date: '2026-09-30',
    category: 'Estratégia Digital',
    tags: ['Comportamento do Cliente', 'Google', 'Presença Digital', 'Marketing Digital', 'Empresas'],
    sections: [
      {
        heading: 'A pesquisa começa antes do primeiro contato',
        paragraphs: [
          'Quando alguém percebe que precisa de um produto ou serviço, raramente escolhe a primeira empresa que encontra. A pessoa procura referências, compara opções e tenta reduzir o risco de tomar uma decisão ruim. O caminho muda conforme o setor e a urgência, mas a pesquisa costuma passar por buscadores, redes sociais, avaliações e recomendações.',
          'Entender esse percurso ajuda a responder dúvidas reais no site e nos canais da empresa. Em vez de publicar conteúdo apenas para preencher uma página, organize as informações que alguém precisa para decidir se a sua solução faz sentido.',
        ],
        points: [
          'O que a empresa faz e para quem o serviço é indicado.',
          'Como funciona o atendimento, o prazo e as etapas do trabalho.',
          'Quais são as formas de contato e onde a empresa atende.',
          'Que informações ajudam a comparar alternativas com segurança.',
        ],
      },
      {
        heading: 'O que precisa estar claro na sua presença digital',
        paragraphs: [
          'Uma página inicial deve explicar rapidamente a atividade da empresa, o público atendido e o próximo passo. As páginas de serviço podem aprofundar escopo, processo, dúvidas frequentes e limitações. Essa organização ajuda visitantes e mecanismos de busca a entenderem cada assunto sem depender de textos vagos ou promessas genéricas.',
          'Mantenha informações operacionais consistentes em todos os canais. Nome, endereço, telefone, horários e links desatualizados criam atrito justamente quando alguém está tentando confirmar se a empresa é confiável e está disponível.',
        ],
        points: [
          'Use títulos que descrevam o serviço e a região atendida, quando isso for relevante.',
          'Inclua um contato fácil de localizar em páginas importantes.',
          'Atualize perfis de negócio, redes sociais e diretórios que a empresa realmente utiliza.',
          'Responda avaliações com profissionalismo, sem divulgar dados pessoais do cliente.',
        ],
      },
      {
        heading: 'Transforme dúvidas em conteúdo útil',
        paragraphs: [
          'Perguntas recorrentes recebidas por telefone, e-mail ou atendimento são um bom ponto de partida para artigos e páginas de ajuda. Uma resposta completa pode explicar critérios, opções e próximos passos. Quando houver variações por caso, deixe isso explícito e convide a pessoa a compartilhar o contexto.',
          'Acompanhe quais páginas recebem visitas e quais ações são concluídas, respeitando a privacidade dos usuários. Os dados podem revelar dúvidas sem resposta, mas não substituem conversas com clientes nem justificam afirmar resultados que a empresa não mediu.',
        ],
      },
    ],
  },
  {
    slug: 'por-que-seu-site-nao-gera-clientes',
    title: 'Por Que Seu Site Não Gera Clientes? 7 Erros Que Podem Estar Afastando Oportunidades',
    excerpt: 'Seu site recebe visitas, mas não gera clientes? Descubra 7 erros comuns que prejudicam a conversão, a experiência do usuário e os resultados da sua empresa na internet.',
    date: '2026-09-19',
    category: 'Criação de Sites',
    tags: ['Conversão', 'SEO', 'Marketing Digital', 'Site Profissional', 'Empresas', 'Geração de Leads'],
    sections: [
      {
        heading: '1. A proposta não fica clara',
        paragraphs: [
          'Se a pessoa não consegue entender em poucos segundos o que a empresa oferece, para quem e qual problema resolve, ela precisa fazer esforço para interpretar a página. Um título específico, uma explicação curta e um próximo passo visível reduzem essa ambiguidade.',
          'Evite frases que serviriam para qualquer negócio. Descreva o serviço, o público ou a situação atendida com palavras que seus próprios clientes usariam.',
        ],
      },
      {
        heading: '2. O contato é difícil de encontrar',
        paragraphs: [
          'Um formulário escondido, um telefone sem link ou um botão que não explica o que acontece depois pode interromper a decisão. Coloque chamadas para ação onde fazem sentido e use rótulos objetivos, como “Solicitar orçamento” ou “Falar com a equipe”.',
        ],
      },
      {
        heading: '3. A página carrega mal no celular',
        paragraphs: [
          'Imagens grandes, scripts dispensáveis e layouts que extrapolam a tela tornam a navegação lenta ou desconfortável. Teste o site em uma conexão móvel, comprima imagens, carregue abaixo da dobra de forma eficiente e confira se campos e botões são fáceis de usar com o toque.',
        ],
      },
      {
        heading: '4. Há pouca informação para decidir',
        paragraphs: [
          'Uma página pode parecer bonita e ainda deixar perguntas essenciais sem resposta: o que está incluído, como é o processo, para quem a solução serve e como pedir ajuda. Conteúdo útil não precisa ser longo, mas deve cobrir as dúvidas importantes antes do contato.',
        ],
      },
      {
        heading: '5. A confiança não é sustentada',
        paragraphs: [
          'Informações de contato inconsistentes, links quebrados, erros de escrita e depoimentos sem contexto podem gerar desconfiança. Apresente dados verificáveis e use provas sociais apenas com autorização e contexto verdadeiro; não invente números, clientes ou garantias.',
        ],
      },
      {
        heading: '6. O site não é encontrado para as buscas certas',
        paragraphs: [
          'SEO não é repetir palavras-chave. Cada página deve atender a uma intenção clara, ter título e descrição próprios, conteúdo relevante e links internos que ajudem a navegar. Verifique também indexação, sitemap, canonical e erros no Search Console.',
        ],
      },
      {
        heading: '7. Ninguém mede o que acontece',
        paragraphs: [
          'Sem observar envios de formulário, cliques de contato e caminhos de navegação, fica difícil saber onde a experiência falha. Defina poucas métricas relacionadas a objetivos reais e teste mudanças uma de cada vez. Um site não garante clientes por si só, mas pode remover barreiras do processo.',
        ],
      },
    ],
  },
  {
    slug: 'quanto-custa-criar-site-profissional-2026',
    title: 'Quanto Custa Criar um Site Profissional em 2026?',
    excerpt: 'Descubra quanto custa criar um site profissional em 2026, quais fatores influenciam o preço e quanto investir em landing pages, sites institucionais e lojas virtuais.',
    date: '2026-08-13',
    category: 'Criação de Sites',
    tags: ['Landing Page', 'Site Institucional', 'SEO', 'Site Profissional', 'Desenvolvimento Web', 'Empresas'],
    sections: [
      {
        heading: 'Não existe um preço único para um site',
        paragraphs: [
          'O investimento varia conforme o objetivo, o volume de páginas, o conteúdo, as integrações, o design e a manutenção esperada. Uma landing page de campanha tem escopo diferente de um site institucional com várias áreas, idiomas, catálogo ou funcionalidades próprias.',
          'Por isso, compare propostas pelo que entregam e não apenas pelo valor final. Um orçamento útil explica escopo, responsabilidades, etapas, critérios de aceite e o que será cobrado à parte.',
        ],
      },
      {
        heading: 'O que costuma influenciar o orçamento',
        points: [
          'Estratégia, arquitetura da informação e prototipagem.',
          'Criação visual e adaptação para diferentes tamanhos de tela.',
          'Redação, revisão, fotografia e demais materiais de conteúdo.',
          'Desenvolvimento, CMS, formulários e integrações externas.',
          'Hospedagem, domínio, monitoramento, suporte e manutenção.',
        ],
        paragraphs: [
          'Também considere quem fornece textos e imagens, quantas rodadas de revisão estão incluídas e como serão tratados pedidos que ampliem o escopo. Essas definições evitam comparar propostas incompletas como se fossem equivalentes.',
        ],
      },
      {
        heading: 'Como escolher o escopo certo',
        paragraphs: [
          'Comece pelo problema que o site deve resolver e pelas informações que o visitante precisa encontrar. Uma landing page pode ser adequada para uma oferta específica e uma campanha com foco definido. Um site institucional tende a funcionar melhor quando existem públicos, serviços e conteúdos distintos que precisam de navegação própria.',
          'Reserve orçamento para manutenção e evolução. Atualizações, cópias de segurança, segurança, conteúdo e mudanças de negócio fazem parte do ciclo de vida do site. Solicite uma proposta detalhada e confirme propriedade de domínio, código, contas e materiais ao final.',
        ],
      },
    ],
  },
  {
    slug: '7-sinais-de-que-sua-empresa-precisa-de-um-sistema-personalizado',
    title: '7 sinais de que sua empresa precisa de um sistema personalizado',
    excerpt: 'Descubra os principais sinais de que sua empresa pode se beneficiar de um sistema web personalizado para automatizar processos, reduzir erros e aumentar a produtividade.',
    date: '2026-07-29',
    category: 'Sistema Personalizado',
    tags: ['Sistema Web', 'Automação', 'Produtividade', 'Empresas', 'Desenvolvimento Web', 'Transformação Digital'],
    sections: [
      {
        heading: '1. A equipe repete a mesma digitação',
        paragraphs: [
          'Quando a mesma informação é copiada entre planilhas, e-mails e sistemas, aumentam o retrabalho e a chance de divergência. Primeiro identifique onde o dado nasce e quais ferramentas precisam recebê-lo; uma integração simples pode resolver o problema sem criar um sistema novo.',
        ],
      },
      {
        heading: '2. Planilhas viraram o sistema principal',
        paragraphs: [
          'Planilhas são úteis para explorar dados e organizar tarefas, mas podem ficar frágeis quando várias pessoas editam registros críticos, regras ficam escondidas em fórmulas e não há controle claro de acesso ou histórico. Esse sinal pede revisão do processo e dos riscos, não uma migração automática.',
        ],
      },
      {
        heading: '3. Erros acontecem por falta de validação',
        paragraphs: [
          'Se dados incompletos ou inconsistentes avançam pelas etapas do trabalho, validações no momento do registro podem prevenir correções posteriores. Regras devem vir do processo real e ser documentadas para que o software não codifique exceções arbitrárias.',
        ],
      },
      {
        heading: '4. Aprovações dependem de mensagens dispersas',
        paragraphs: [
          'Pedidos que passam por e-mail, chat e arquivos sem um responsável definido tornam difícil saber o status e o próximo passo. Um fluxo com papéis, estados e notificações explícitos pode dar visibilidade; automações só devem ser adicionadas depois de esclarecer as regras.',
        ],
      },
      {
        heading: '5. Relatórios exigem consolidação manual',
        paragraphs: [
          'Se a equipe precisa reunir dados de fontes diferentes a cada período, vale verificar se as fontes podem ser integradas e se os indicadores têm definições consistentes. Um painel não corrige dados ruins nem substitui acordos sobre o que cada métrica significa.',
        ],
      },
      {
        heading: '6. As ferramentas não acompanham o processo',
        paragraphs: [
          'Soluções improvisadas podem não representar etapas, permissões ou exceções necessárias. Antes de desenvolver, desenhe o processo atual, identifique gargalos e elimine passos sem valor. Às vezes, configurar uma ferramenta existente é suficiente.',
        ],
      },
      {
        heading: '7. O crescimento aumenta o risco operacional',
        paragraphs: [
          'Se mais clientes, pedidos ou colaboradores tornam o processo difícil de controlar, pode ser hora de avaliar capacidade, acesso, auditoria e continuidade. Um sistema personalizado faz sentido quando requisitos importantes não são atendidos por opções disponíveis e o custo total é justificável.',
          'A decisão deve considerar implantação, treinamento, segurança, suporte e manutenção. Prototipe a parte mais arriscada e valide com quem fará o trabalho no dia a dia antes de ampliar o investimento.',
        ],
      },
    ],
  },
  {
    slug: 'quanto-custa-criar-um-site-profissional',
    title: 'Quanto custa criar um site profissional em 2026? Entenda o investimento ideal para sua empresa',
    excerpt: 'Saiba quais fatores influenciam o investimento em um site profissional, quando vale a pena criar um sistema personalizado e como escolher a melhor solução para sua empresa.',
    date: '2026-07-27',
    category: 'Site Profissional',
    tags: ['Site para Empresas', 'Landing Page', 'Sistema Personalizado', 'Software House', 'Transformação Digital', 'SEO'],
    sections: [
      {
        heading: 'O investimento depende do que precisa ser resolvido',
        paragraphs: [
          'Um site profissional pode ser uma página de campanha, um conjunto de páginas institucionais ou uma aplicação com funcionalidades. O preço depende do escopo de design, conteúdo, desenvolvimento, integrações e suporte — não apenas do número de telas.',
          'Antes de pedir orçamento, descreva o público, o objetivo principal, os conteúdos disponíveis e as integrações necessárias. Isso ajuda a receber propostas comparáveis e evita contratar funcionalidades que não resolvem uma necessidade real.',
        ],
      },
      {
        heading: 'Quando uma solução pronta pode bastar',
        paragraphs: [
          'Construtores e CMS podem atender bem quando o site é principalmente editorial, o fluxo é convencional e a equipe consegue manter o conteúdo. Verifique custos recorrentes, limites de personalização, exportação dos dados, segurança e dependência de extensões.',
          'Uma landing page é adequada quando existe uma oferta ou ação principal que pode ser explicada em uma página. Um site institucional é mais apropriado quando cada serviço ou público precisa de conteúdo e navegação próprios.',
        ],
      },
      {
        heading: 'Quando considerar desenvolvimento personalizado',
        paragraphs: [
          'Desenvolvimento sob medida pode ser justificável se houver regras de negócio, integrações ou fluxos que ferramentas existentes não atendem bem. A decisão deve considerar manutenção, documentação, acesso ao código, disponibilidade de suporte e custo de evolução ao longo do tempo.',
          'Inclua no planejamento domínio, hospedagem, certificado, backups, atualizações e monitoramento. Não há um valor universal para um “site profissional”: a melhor escolha é aquela cujo escopo corresponde ao objetivo e pode ser mantida com segurança.',
        ],
      },
    ],
  },
  {
    slug: 'htmx-vale-a-pena',
    title: 'HTMX vale a pena em 2026? Guia completo para desenvolvedores',
    excerpt: 'Entenda o que é HTMX, quando utilizá-lo, suas vantagens, desvantagens e como ele se compara a frameworks como Vue.js e React.',
    date: '2026-07-20',
    category: 'Frontend',
    tags: ['HTMX', 'Vue.js', 'React', 'Frontend', 'JavaScript'],
    sections: [
      {
        heading: 'O que é HTMX',
        paragraphs: [
          'HTMX permite que atributos HTML façam requisições HTTP e atualizem partes da página com respostas do servidor. Em vez de construir toda a interface no navegador, uma aplicação pode devolver fragmentos HTML para interações como busca, paginação e envio de formulários.',
          'A abordagem combina bem com aplicações server-rendered e equipes que preferem manter a lógica de interface próxima das rotas e templates do backend. Ela não elimina JavaScript nem resolve automaticamente arquitetura, acessibilidade ou estado complexo.',
        ],
      },
      {
        heading: 'Quando pode ser uma boa escolha',
        points: [
          'Páginas cujo estado principal vem do servidor.',
          'Interações pontuais que podem ser representadas por HTML.',
          'Produtos que não precisam de uma aplicação client-side extensa.',
          'Equipes que já têm uma base server-rendered bem definida.',
        ],
        paragraphs: [
          'Nesses cenários, o HTML pode reduzir a quantidade de código de interface customizado. Ainda é necessário cuidar de estados de carregamento, erros, histórico, foco, semântica e comportamento quando o usuário desabilita ou perde conectividade.',
        ],
      },
      {
        heading: 'Quando Vue ou React podem ser mais adequados',
        paragraphs: [
          'Aplicações com interações densas, estado compartilhado no cliente, edição em tempo real ou componentes altamente reutilizáveis podem se beneficiar de um framework como Vue ou React. A escolha também depende de experiência da equipe, ecossistema, requisitos de renderização e manutenção.',
          'Compare um fluxo representativo com dados reais antes de escolher. Avalie complexidade total, acessibilidade, testes, desempenho e clareza do código; não há uma tecnologia universalmente melhor para todos os produtos.',
        ],
      },
    ],
  },
  {
    slug: 'vue-ainda-vale-a-pena',
    title: 'Vue.js ainda vale a pena em 2026?',
    excerpt: 'Descubra se Vue.js continua sendo uma boa escolha em 2026, suas vantagens, desvantagens e quando utilizá-lo em projetos modernos.',
    date: '2026-07-21',
    category: 'Frontend',
    tags: ['Vue.js', 'JavaScript', 'Frontend', 'SPA'],
    sections: [
      {
        heading: 'Vue continua sendo uma opção atual',
        paragraphs: [
          'Vue é um framework progressivo para construir interfaces. Ele pode ser adotado em partes de uma página ou usado com componentes, roteamento e ferramentas de build em uma aplicação maior. A sintaxe de Single-File Components mantém template, lógica e estilos próximos quando esse formato é adequado ao projeto.',
          'A versão e as bibliotecas escolhidas importam: confirme compatibilidade, manutenção e suporte antes de iniciar uma aplicação. Também planeje atualizações para não deixar o projeto preso a dependências antigas.',
        ],
      },
      {
        heading: 'Considere o contexto do projeto',
        points: [
          'Complexidade das interações e necessidade de estado compartilhado.',
          'Experiência atual da equipe e facilidade de contratação ou suporte.',
          'Requisitos de SEO, renderização no servidor e desempenho.',
          'Bibliotecas, integrações e ferramentas disponíveis para o produto.',
        ],
        paragraphs: [
          'Para sites predominantemente editoriais, uma SPA pode acrescentar complexidade desnecessária. Para uma interface rica e interativa, componentes e ferramentas do ecossistema Vue podem organizar bem a implementação. A decisão precisa partir dos requisitos, não de tendências.',
        ],
      },
      {
        heading: 'Boas práticas para começar',
        paragraphs: [
          'Defina limites claros para componentes, mantenha estado próximo de onde é usado e valide dados vindos de serviços externos. Use TypeScript quando ele ajudar a explicitar contratos, e adote testes para os fluxos de maior risco.',
          'Antes de migrar uma aplicação existente, meça os problemas que a mudança pretende resolver. Uma migração de framework também exige atualizar dependências, revisar acessibilidade e testar caminhos críticos; trocar tecnologia sem um objetivo claro pode apenas deslocar a complexidade.',
        ],
      },
    ],
  },
  {
    slug: 'tarefas-empresa-automatizar',
    title: '7 tarefas repetitivas que sua empresa deveria automatizar hoje',
    excerpt: 'Descubra quais processos podem ser automatizados para reduzir custos, eliminar erros e aumentar a produtividade da sua empresa.',
    date: '2026-07-22',
    category: 'Automação',
    tags: ['Python', 'Automação', 'Empresas', 'Produtividade', 'Processos'],
    sections: [
      {
        heading: 'Comece pelo processo, não pela ferramenta',
        paragraphs: [
          'Automatizar uma rotina confusa pode apenas fazer o erro acontecer mais rápido. Registre como o trabalho é feito, quem participa, quais exceções existem e qual resultado precisa ser preservado. Escolha um processo frequente, previsível e com baixo risco para um primeiro teste.',
        ],
      },
      {
        heading: 'Processos que costumam merecer avaliação',
        paragraphs: [
          'Estas tarefas podem ser candidatas quando seguem regras previsíveis e têm volume recorrente. Antes de automatizar, verifique exceções, permissões e o impacto de uma falha.',
        ],
        points: [
          'Copiar dados entre formulários, planilhas e sistemas.',
          'Enviar confirmações, lembretes ou notificações padronizadas.',
          'Organizar arquivos recebidos por regras explícitas.',
          'Consolidar informações para relatórios recorrentes.',
          'Validar campos e sinalizar registros incompletos.',
          'Encaminhar solicitações para a equipe responsável.',
          'Sincronizar dados entre serviços que oferecem integração suportada.',
        ],
      },
      {
        heading: 'Planeje exceções, segurança e acompanhamento',
        paragraphs: [
          'Para cada automação, defina o que acontece quando um serviço falha, os dados estão inválidos ou a operação não pode ser repetida com segurança. Registre erros, limite permissões às necessárias e proteja credenciais fora do código-fonte.',
          'Acompanhe tempo poupado, erros evitados e custo de manter o fluxo. Mantenha uma alternativa manual para operações críticas e revise periodicamente se as regras continuam corretas. A automação é útil quando melhora um processo mensurável sem tornar a operação opaca.',
        ],
      },
    ],
  },
  {
    slug: 'como-aparecer-no-google',
    title: 'Como aparecer no Google: guia completo de SEO para iniciantes',
    excerpt: 'Aprenda como otimizar seu site para aparecer no Google utilizando SEO técnico, conteúdo de qualidade e boas práticas de indexação.',
    date: '2026-07-23',
    category: 'SEO',
    tags: ['SEO', 'Google', 'Search Console', 'Marketing Digital', 'Performance'],
    sections: [
      {
        heading: 'Ajude o buscador a entender suas páginas',
        paragraphs: [
          'SEO começa com páginas úteis para pessoas e uma estrutura que possa ser rastreada. Use títulos descritivos, headings organizados e URLs compreensíveis. Cada página importante deve oferecer conteúdo próprio, responder a uma intenção e ter links internos que permitam encontrá-la.',
          'Não existe garantia de posição: indexação e classificação dependem de muitos fatores e mudam ao longo do tempo. Desconfie de promessas de primeira posição e de técnicas que criam conteúdo repetitivo apenas para manipular resultados.',
        ],
      },
      {
        heading: 'Checklist técnico inicial',
        paragraphs: [
          'Use esta lista para encontrar problemas técnicos básicos. Ela não substitui a análise do conteúdo, da intenção de busca e da qualidade da experiência.',
        ],
        points: [
          'Confirme que as páginas importantes retornam o status esperado e não estão bloqueadas por engano.',
          'Configure sitemap e verifique propriedades no Google Search Console.',
          'Use canonical quando houver URLs duplicadas ou variações com parâmetros.',
          'Garanta que conteúdo e navegação funcionam em dispositivos móveis.',
          'Otimize imagens e monitore desempenho e Core Web Vitals.',
          'Corrija links quebrados e redirecionamentos desnecessários.',
        ],
      },
      {
        heading: 'Publique conteúdo que resolva dúvidas',
        paragraphs: [
          'Pesquise como o público descreve o problema e organize o conteúdo por assunto. Uma página de serviço deve explicar escopo, processo e próximos passos; um artigo deve aprofundar uma pergunta sem repetir a mesma resposta em várias URLs.',
          'Use Search Console para observar consultas, impressões e problemas de indexação. Esses dados ajudam a priorizar melhorias, mas precisam ser interpretados junto do contexto do negócio. Atualize informações desatualizadas e mantenha expectativas realistas sobre o tempo necessário para avaliar mudanças.',
        ],
      },
    ],
  },
  {
    slug: 'landing-page',
    title: 'Landing Page ou Site Institucional: qual é a melhor opção para sua empresa?',
    excerpt: 'Entenda as diferenças entre Landing Pages e Sites Institucionais, quando utilizar cada um e como escolher a melhor estratégia para aumentar seus resultados.',
    date: '2026-07-24',
    category: 'Estratégia Digital',
    tags: ['Landing Page', 'Site Institucional', 'Marketing Digital', 'Conversão', 'Negócios'],
    sections: [
      {
        heading: 'O que diferencia os dois formatos',
        paragraphs: [
          'Uma landing page concentra conteúdo em torno de uma oferta ou ação principal, como inscrição ou solicitação de orçamento. Um site institucional apresenta a empresa de forma mais ampla e oferece navegação entre serviços, informações, equipe, contato e outros conteúdos.',
          'Na prática, os formatos podem coexistir. Uma campanha pode ter uma landing page própria enquanto o site institucional atende pessoas que ainda estão conhecendo a empresa.',
        ],
      },
      {
        heading: 'Quando escolher uma landing page',
        paragraphs: [
          'Use esse formato quando o público, a oferta e a ação desejada forem específicos. Remova distrações que não ajudam a decisão, explique benefícios com clareza e apresente os requisitos, condições e próximos passos. A página precisa corresponder ao anúncio ou link que levou a pessoa até ela.',
        ],
        points: [
          'Uma campanha ou serviço prioritário com objetivo definido.',
          'Uma jornada curta com uma chamada principal.',
          'Necessidade de testar mensagens ou versões de uma oferta.',
        ],
      },
      {
        heading: 'Quando escolher um site institucional',
        paragraphs: [
          'Um site institucional é indicado quando as pessoas precisam explorar vários serviços, públicos ou áreas da empresa. Uma arquitetura clara permite que cada página responda a uma necessidade sem sobrecarregar a página inicial.',
        ],
        points: [
          'A empresa oferece serviços diferentes ou atende públicos distintos.',
          'Conteúdos de suporte, institucional ou editorial são importantes.',
          'A presença orgânica depende de páginas específicas por assunto.',
        ],
      },
      {
        heading: 'Decida a partir da jornada do cliente',
        paragraphs: [
          'Mapeie de onde vem a visita, o que a pessoa já sabe e qual informação precisa para avançar. Acompanhe ações relevantes e valide as páginas com usuários. Escolher o formato certo ajuda a organizar a comunicação, mas não substitui uma oferta adequada, atendimento consistente e uma experiência funcional.',
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
