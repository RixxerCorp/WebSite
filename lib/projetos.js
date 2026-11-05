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
//   capa       imagem principal: '/projetos/<slug>/capa.jpg' (arquivo em public/projetos/<slug>/)
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
    titulo: 'Site para Hamburgueria',
    categoria: 'Web',
    cliente: 'The Seventies Burgers',
    ano: '2026',
    cor: '#3AACB8',
    resumo:
      'Site completo para divulgação do local, além de um sistema de delivery integrado com WhatsApp, onde o cliente pode escolher os itens do cardápio, personalizar seu pedido e enviar diretamente para o WhatsApp da hamburgueria.',
    techs: ['Next.js', 'Tailwind', 'PostgreSQL', 'Stripe'],
    link: null,
    descricao: [
      'Site completo para divulgação do local, além de um sistema de delivery integrado com WhatsApp, onde o cliente pode escolher os itens do cardápio, personalizar seu pedido e enviar diretamente para o WhatsApp da hamburgueria.',
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
      'Revista Impressa com 92 páginas, incluindo artigos, entrevistas, fotos e anúncios de comércios locais. Projeto gráfico completo, diagramação, revisão e arte final para impressão.',
    techs: ['InDesign', 'Illustrator', 'Photoshop'],
    link: null,
    descricao: [
      'Revista Impressa com 92 páginas, incluindo artigos, entrevistas, fotos e anúncios de comércios locais. Projeto gráfico completo, diagramação, revisão e arte final para impressão.',
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
    descricao: [
      'Criação de material para divulgação para a Copa do Mundo, fechamento de arquivo e acompanhamento para impressão em lona.',
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
    link: null,
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
    link: null,
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    ],
  },
];

export function getProjeto(slug) {
  return projetos.find((p) => p.slug === slug) ?? null;
}
