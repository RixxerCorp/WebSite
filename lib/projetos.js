// Portfólio da Rixxer. Para adicionar um projeto, copie um bloco e preencha.
//
// Campos obrigatórios:
//   slug       endereço da página (sem espaços/acentos): /projetos/<slug>
//   titulo, categoria (Web | Mobile | Sistema | Design | Social), cliente, ano, cor (hex)
//   resumo     texto curto que aparece no cartão da lista
//   techs      tags exibidas no cartão e na página
//
// Campos opcionais (a seção só aparece se estiver preenchida):
//   link       endereço do projeto no ar (https://...)  → botão "Ver projeto no ar"
//   descricao  lista de parágrafos ("Sobre o projeto")
//   desafio    texto: qual era o problema do cliente
//   solucao    texto: o que foi feito
//   entregas   lista: o que foi entregue (itens curtos)
//   resultados lista: resultados/números (só o que for verdadeiro e comprovável)
//   linkRotulo texto do botão do link (padrão: "Ver projeto no ar"; ex.: "Ver no Instagram")
//   capa       imagem principal: '/projetos/<slug>/capa.jpg' (arquivo em public/projetos/<slug>/)
//   relacionados lista de slugs de projetos ligados a este (mesmo cliente/grupo): seção "Projetos relacionados"
//   imagens    galeria: [{ src: '/projetos/<slug>/tela-1.jpg', alt: 'descrição da imagem' }]

export const projetos = [
  {
    slug: 'portal-imobiliario-alexandria',
    titulo: 'Portal Imobiliário',
    categoria: 'Web',
    cliente: 'Alexandria Negócios Imobiliários',
    ano: '2026',
    cor: '#6B2D8B',
    resumo:
      'Site institucional completo com área restrita para corretores, com cadastro de imóveis para venda e locação, cadastro de clientes e cadastro de imóveis favoritos. O site ainda conta com um login para o próprio cliente, para favoritar imóveis e enviar seus próprios imóveis para venda.',
    techs: ['Next.js', 'Tailwind', 'Vercel', 'PostgreSQL'],
    link: 'https://www.alexandriaimobiliaria.com.br',
    capa: '/projetos/portal-imobiliario-alexandria/capa.jpg',
    descricao: [
      'O site reúne imóveis para venda e locação, organizados por tipo (casas, apartamentos, terrenos, imóveis comerciais, chácaras, sítios, lojas e coberturas), com filtro e ordenação por preço.',
      'Cada imóvel tem uma página própria, com galeria de fotos, ficha de características (área, quartos, suítes, banheiros e vagas) e contato direto por mensagem, agendamento de visita ou WhatsApp. O visitante pode criar uma conta para favoritar imóveis e enviar o seu próprio imóvel para venda.',
    ],
    desafio: 'O corretor não tinha um site para apresentar os imóveis disponíveis aos interessados.',
    solucao:
      'Criação de um site dinâmico, com portal de administração para o cadastro dos imóveis disponíveis.',
    entregas: [
      'Área restrita para corretores',
      'Cadastro de leads',
      'Controle para inclusão e edição dos imóveis',
    ],
    resultados: ['Site pronto e no ar, recebendo leads.'],
    imagens: [
      {
        src: '/projetos/portal-imobiliario-alexandria/imovel.jpg',
        alt: 'Página de um imóvel no site da Alexandria, com galeria de fotos, valor e características',
      },
      {
        src: '/projetos/portal-imobiliario-alexandria/listagem.jpg',
        alt: 'Listagem de imóveis à venda no site da Alexandria, com filtro por preço',
      },
    ],
  },
  {
    slug: 'site-hamburgueria-the-seventies',
    titulo: 'Site e Delivery para Hamburgueria',
    categoria: 'Web',
    cliente: 'The Seventies Burgers',
    ano: '2026',
    cor: '#3AACB8',
    resumo:
      'Site completo para divulgação do local, com sistema de pedidos integrado: o cliente escolhe os itens do cardápio, personaliza o pedido e envia direto para a hamburgueria.',
    techs: ['Next.js', 'Tailwind', 'PostgreSQL', 'Stripe'],
    link: 'https://site-virid-mu-63.vercel.app/',
    relacionados: ['redes-sociais-the-seventies-burgers'],
    capa: '/projetos/site-hamburgueria-the-seventies/capa.jpg',
    descricao: [
      'Site completo para divulgação do local, com cardápio online, cupons e área para o cliente. Além disso, um sistema de pedidos integrado ao WhatsApp, em que o cliente escolhe os itens, personaliza o pedido e envia direto para a hamburgueria.',
      'O sistema reúne em um só lugar os pedidos feitos no local, pelo WhatsApp e pelo UaiRango, de forma automática.',
    ],
    desafio:
      'Os pedidos eram coletados manualmente, o que gerava confusão e dificultava as entradas. Também não havia como controlar o tempo de preparo de cada pedido.',
    solucao:
      'Foi criado um sistema que registra o pedido pelo próprio celular, direto da mesa. Assim que o pedido é enviado, um notebook na cozinha recebe o alerta de pedido novo.',
    entregas: [
      'Mais controle sobre os pedidos',
      'Integração com o UaiRango',
      'Controle financeiro e cadastro de clientes',
    ],
    resultados: [
      'Projeto no ar e em funcionamento.',
      'Homologação do WhatsApp em andamento, para receber pedidos também pelo aplicativo.',
    ],
    imagens: [
      {
        src: '/projetos/site-hamburgueria-the-seventies/cardapio.jpg',
        alt: 'Destaques do cardápio no site da The Seventies Burgers, com foto, descrição e preço de cada hambúrguer',
      },
    ],
  },
  {
    slug: 'revista-viva-sao-lourenco',
    titulo: 'Revista Impressa',
    categoria: 'Design',
    cliente: 'VIVA São Lourenço',
    ano: '2026',
    cor: '#1A1F5E',
    resumo:
      'Revista impressa de 92 páginas, com artigos, entrevistas, fotos e anúncios de comércios locais. Projeto gráfico, diagramação, revisão e arte final para impressão.',
    techs: ['InDesign', 'Illustrator', 'Photoshop'],
    link: 'https://www.revistavivacidades.com.br/edicao-digital',
    capa: '/projetos/revista-viva-sao-lourenco/capa.jpg',
    descricao: [
      'A revista circula gratuitamente na cidade duas vezes por ano, em consultórios, salões e outros locais de grande fluxo de pessoas. Também pode ser lida online, com efeito de virada de página, na página de edições digitais.',
    ],
    desafio: 'Criar as páginas da revista, que circula na cidade duas vezes ao ano.',
    solucao:
      'Todas as páginas seguem o mesmo padrão visual, com sangrias e áreas de corte ajustadas para a impressão.',
    entregas: [
      'Projeto gráfico e diagramação',
      'Revisão e arte final para impressão',
      '7 edições prontas e circulando pela cidade até o momento',
    ],
    resultados: ['A revista dá mais visibilidade aos negócios dos anunciantes.'],
    imagens: [
      {
        src: '/projetos/revista-viva-sao-lourenco/edicao.jpg',
        alt: 'Capa da edição nº 04 da Revista Viva São Lourenço, com 92 páginas, na página de edições digitais',
      },
    ],
  },
  {
    slug: 'banner-copa-espetinho-da-vila',
    titulo: 'Banner para Impressão',
    categoria: 'Design',
    cliente: 'Espetinho da Vila',
    ano: '2026',
    cor: '#6B2D8B',
    resumo:
      'Criação de material para divulgação para a Copa do Mundo, fechamento de arquivo e acompanhamento para impressão em lona.',
    techs: ['InDesign', 'Illustrator', 'Photoshop'],
    link: null,
    relacionados: ['logotipo-grupo-beg'],
    descricao: [
      'Criação da arte de divulgação para a Copa do Mundo, com fechamento do arquivo e acompanhamento da impressão em lona.',
      'A arte ao lado é uma ação de "Palpite do Jogo": o cliente do Espetinho da Vila deixa o palpite nos comentários do Instagram e concorre a um chopp grátis.',
    ],
    imagens: [
      {
        src: '/projetos/banner-copa-espetinho-da-vila/palpite.jpg',
        alt: 'Arte "Palpite do Jogo" do Espetinho da Vila para a Copa do Mundo, com a promoção de um chopp grátis',
        retrato: true,
      },
    ],
  },
  {
    slug: 'logotipo-grupo-beg',
    titulo: 'Logotipo Grupo BEG',
    categoria: 'Design',
    cliente: 'Grupo BEG',
    ano: '2026',
    cor: '#4F342F',
    resumo:
      'Logotipo do Grupo BEG, que reúne três restaurantes sob uma única marca: Batata Show, Espetinho da Vila e Gula Gula. O monograma entrelaça as letras B, E e G, as iniciais dos três negócios.',
    techs: ['Illustrator'],
    link: null,
    relacionados: ['banner-copa-espetinho-da-vila'],
    capa: '/projetos/logo-grupo-beg/capa.jpg',
    descricao: [
      'O Grupo BEG nasceu da aquisição de novas empresas pelo cliente. O nome vem das iniciais de três restaurantes: Batata Show, focado em batata frita; Espetinho da Vila, de alimentação em geral; e Gula Gula, uma pizzaria.',
      'O logotipo foi desenvolvido no Illustrator, em vetor, com versão colorida e versão em branco para fundos escuros. Os tons de marrom, bege e azul-petróleo acompanham as formas fluidas do monograma, com a identificação "Grupo BEG" logo abaixo. Projeto entregue em setembro de 2026.',
      'As imagens abaixo são simulações (mockups) para mostrar o logotipo aplicado em cartão de visita e sacola de papel.',
    ],
    desafio:
      'Reunir sob uma única marca três restaurantes de segmentos diferentes: batata frita, alimentação em geral e pizzaria.',
    solucao:
      'Um monograma em que as letras B, E e G se entrelaçam, representando os três negócios dentro de um mesmo grupo.',
    entregas: [
      'Logotipo em vetor (Illustrator)',
      'Versão colorida e versão em branco para fundos escuros',
    ],
    imagens: [
      {
        src: '/projetos/logo-grupo-beg/mockup-cartoes.jpg',
        alt: 'Simulação do logotipo do Grupo BEG em cartões de visita, nas versões branca e marrom',
      },
      {
        src: '/projetos/logo-grupo-beg/mockup-sacola.jpg',
        alt: 'Simulação do logotipo do Grupo BEG aplicado em uma sacola de papel',
      },
    ],
  },
  {
    slug: 'catalogo-atacadao-ferrossul',
    titulo: 'Catálogo de Produtos',
    categoria: 'Design',
    cliente: 'Atacadão Ferrossul',
    ano: '2026',
    cor: '#0B1F6B',
    resumo:
      'Catálogo impresso de 12 páginas para o Atacadão Ferrossul, com capa, índice e os produtos organizados por categoria, para o vendedor apresentar aos clientes.',
    techs: ['Photoshop'],
    link: null,
    capa: '/projetos/catalogo-atacadao-ferrossul/capa.jpg',
    descricao: [
      'O Atacadão Ferrossul abriu recentemente na cidade e contratou um vendedor, mas ele ainda não tinha um catálogo físico para mostrar aos clientes. A Rixxer montou o catálogo para que ele pudesse trabalhar.',
      'O catálogo foi criado no Photoshop e impresso. São 12 páginas, com capa, índice, produtos organizados por categoria (tubos e metalons, bombonas e tanques, barras, telhas, chapas, calhas, telas, arames, fixação, móveis e outros) e contracapa com endereço e WhatsApp da loja.',
    ],
    desafio:
      'A empresa abriu recentemente na cidade e o vendedor contratado não tinha um catálogo físico para mostrar os produtos aos clientes.',
    solucao:
      'Montagem de um catálogo de produtos impresso, com os itens organizados por categoria, índice e contato da loja, para o vendedor apresentar durante as visitas.',
    entregas: [
      'Arte e diagramação de 12 páginas no Photoshop',
      'Índice e produtos organizados por categoria',
      'Contracapa com endereço e WhatsApp',
      'Catálogo impresso',
    ],
    resultados: ['Catálogo impresso, pronto para o vendedor apresentar aos clientes.'],
    imagens: [
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-01.jpg',
        alt: "Capa do catálogo de produtos 2026/2027 do Atacadão Ferrossul",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-02.jpg',
        alt: "Índice do catálogo, com as categorias de produtos e as páginas",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-03.jpg',
        alt: "Página 3: metalons, tubos galvanizados e tubos pretos",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-04.jpg',
        alt: "Página 4: bombonas, tambores e tanques",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-05.jpg',
        alt: "Página 5: barras metálicas, discos de corte e desbaste e eletrodos",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-06.jpg',
        alt: "Página 6: telhas e coberturas, cantoneiras e perfis",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-07.jpg',
        alt: "Página 7: vergalhões e ferros redondos, estruturas e treliças, perfil U",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-08.jpg',
        alt: "Página 8: chapa metálica",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-09.jpg',
        alt: "Página 9: calhas e rufos, telhados",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-10.jpg',
        alt: "Página 10: telas e malhas, arames, fixação e acessórios",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-11.jpg',
        alt: "Página 11: móveis e outros",
        retrato: true,
      },
      {
        src: '/projetos/catalogo-atacadao-ferrossul/pagina-12.jpg',
        alt: "Contracapa do catálogo, com endereço e WhatsApp do Atacadão Ferrossul",
        retrato: true,
      },
    ],
  },
  {
    slug: 'redes-sociais-lavanderia-mundial',
    titulo: 'Gestão de Redes - Lavanderia Mundial',
    categoria: 'Social',
    cliente: 'Lavanderia Mundial',
    ano: 'Desde 2018',
    cor: '#3AACB8',
    resumo:
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    link: 'https://www.instagram.com/lavanderia_mundial',
    linkRotulo: 'Ver no Instagram',
    desafio:
      'Aumentar a visibilidade da empresa nas redes sociais para atrair mais clientes e fechar mais negócios.',
    solucao:
      'Gestão mensal do Instagram e do Facebook, com criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    entregas: [
      'Criação de conteúdo para Instagram e Facebook',
      'Planejamento estratégico',
      'Monitoramento de métricas',
      'Campanhas de anúncios',
    ],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    ],
  },
  {
    slug: 'redes-sociais-the-seventies-burgers',
    titulo: 'Gestão de Redes — The Seventies Burgers',
    categoria: 'Social',
    cliente: 'The Seventies Burgers',
    ano: 'Desde 2025',
    cor: '#1A1F5E',
    resumo:
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    link: 'https://www.instagram.com/theseventiesburgers',
    linkRotulo: 'Ver no Instagram',
    desafio:
      'Aumentar a visibilidade da empresa nas redes sociais para atrair mais clientes e fechar mais negócios.',
    solucao:
      'Gestão mensal do Instagram e do Facebook, com criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    entregas: [
      'Criação de conteúdo para Instagram e Facebook',
      'Planejamento estratégico',
      'Monitoramento de métricas',
      'Campanhas de anúncios',
    ],
    relacionados: ['site-hamburgueria-the-seventies'],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    ],
  },
];

export function getProjeto(slug) {
  return projetos.find((p) => p.slug === slug) ?? null;
}
