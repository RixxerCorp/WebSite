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
//   status     "Em desenvolvimento" (mostra selo no cartão e na página; sem ele, projetos com link mostram "No ar")
//   linkRotulo texto do botão do link (padrão: "Ver projeto no ar"; ex.: "Ver no Instagram")
//   capa       imagem principal: '/projetos/<slug>/capa.jpg' (arquivo em public/projetos/<slug>/)
//   relacionados lista de slugs de projetos ligados a este (mesmo cliente/grupo): seção "Projetos relacionados"
//   (imagem) aspecto: '4/5' (post de Instagram), '1/1' (quadrado), '9/16' (story), '2/3' (vídeo vertical), '16/10' (captura de site), '11/3' (faixa larga, como backdrop); retrato: true para folhas A4 verticais
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
    slug: 'site-axis-performance',
    titulo: 'Site para Fisioterapeuta',
    categoria: 'Web',
    cliente: 'Axis Performance',
    ano: '2026',
    cor: '#9A7B4F',
    resumo:
      'Site institucional de página única para a Curadoria Axis Performance, serviço de uma fisioterapeuta que seleciona a estrutura de apoio mais adequada à postura de cada pessoa.',
    techs: ['React', 'Tailwind', 'Vercel'],
    link: 'https://project-489.vercel.app',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-axis-performance/capa.jpg',
    descricao: [
      'Site institucional de página única para a Dra. Lilian Oricchio, fisioterapeuta, apresentando a Curadoria Axis Performance: um processo individual de avaliação postural, mapeamento corporal, escolha da estrutura de apoio e orientação de uso.',
      'O visual usa tons terrosos e dourados, com tipografia elegante e muito espaço em branco, para transmitir calma e profissionalismo. O texto conduz o visitante da visão da profissional até a proposta e a curadoria, e o contato fica a um toque, com botão de WhatsApp sempre visível.',
      'Projeto feito em parceria com a One Design Marketing: a Rixxer foi responsável pelo site, e a One Design Marketing, pelo logotipo da marca. O endereço de teste será trocado pelo domínio próprio da cliente.',
    ],
    desafio:
      'Apresentar com clareza e sofisticação uma proposta pouco conhecida, a relação entre postura e desempenho, para um público de profissionais e empresas.',
    solucao:
      'Um site de página única, com mensagem direta, seções bem divididas (visão, proposta, curadoria, sobre e contato) e chamadas para conversar com a profissional.',
    entregas: [
      'Site institucional de página única, responsivo',
      'Estrutura de conteúdo e navegação por seções',
      'Botão de WhatsApp e links para redes sociais',
      'Aplicação da identidade visual da marca',
    ],
    imagens: [
      { src: '/projetos/site-axis-performance/pagina-inicial.jpg', alt: "Página inicial do site Axis Performance, com o título \"Postura que sustenta decisões\" e o logotipo da marca", aspecto: '16/10' },
      { src: '/projetos/site-axis-performance/proposta.jpg', alt: "Seção \"Uma nova forma de pensar ergonomia\" do site Axis Performance", aspecto: '16/10' },
      { src: '/projetos/site-axis-performance/curadoria.jpg', alt: "Seção \"A Curadoria Axis Performance\", com as quatro etapas do processo", aspecto: '16/10' },
      { src: '/projetos/site-axis-performance/sobre.jpg', alt: "Seção sobre a Dra. Lilian Oricchio, fisioterapeuta, com foto e depoimento", aspecto: '16/10' },
      { src: '/projetos/site-axis-performance/celular.jpg', alt: "Página inicial do site Axis Performance no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'site-diamantino-maduro',
    titulo: "Site e Logotipo para Advogado",
    categoria: 'Web',
    cliente: "Diamantino Maduro Advogado",
    ano: '2024',
    cor: '#B8892B',
    resumo:
      "Criação do logotipo e do site institucional de um advogado, com as áreas de atuação, apresentação profissional e contato direto por WhatsApp e formulário.",
    techs: ["HTML","CSS","JavaScript","Bootstrap"],
    link: 'https://www.diamantinomaduroadv.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-diamantino-maduro/capa.jpg',
    descricao: [
      "A Rixxer criou a identidade visual e o site do advogado Diamantino Maduro: o logotipo, em preto e dourado, e um site institucional que apresenta o profissional e as áreas em que ele atua.",
      "O site organiza os serviços em Direito de Família, Direito Criminal e Direito Civil, cada um com a lista dos temas atendidos e um botão para contratar pelo WhatsApp. Há também uma seção sobre o advogado, formulário de contato, endereço com link de rota e o perfil no Instagram. O layout se adapta ao celular."
    ],
    desafio:
      "Dar a um advogado uma presença digital própria, com identidade visual e um site que deixe claras as áreas de atuação e facilite o contato.",
    solucao:
      "Criação do logotipo e de um site institucional direto, com as áreas de atuação em destaque e chamadas para contato em todas as seções.",
    entregas: [
      "Criação do logotipo",
      "Site institucional responsivo",
      "Áreas de atuação com chamada para WhatsApp",
      "Formulário de contato e link de localização"
    ],
    imagens: [
      { src: '/projetos/site-diamantino-maduro/pagina-inicial.jpg', alt: "Página inicial do site do advogado Diamantino Maduro, com o logotipo em dourado sobre fundo preto", aspecto: '16/10' },
      { src: '/projetos/site-diamantino-maduro/areas-de-atuacao.jpg', alt: "Seção de áreas de atuação do site: Direito de Família, Direito Criminal e Direito Civil", aspecto: '16/10' },
      { src: '/projetos/site-diamantino-maduro/sobre.jpg', alt: "Seção \"Sobre mim\" do site do advogado Diamantino Maduro", aspecto: '16/10' },
      { src: '/projetos/site-diamantino-maduro/celular.jpg', alt: "Página inicial do site do advogado no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'site-ergaut-brasil',
    titulo: "Site Institucional para Tecnologia em Içamento",
    categoria: 'Web',
    cliente: "Ergaut Brasil",
    ano: '2024',
    cor: '#0F3E86',
    resumo:
      "Site institucional de uma startup de ferramentas mecânicas para içamento de precisão, com apresentação do produto, benefícios e área para novos revendedores.",
    techs: ["PHP","Tailwind","Flowbite"],
    link: 'https://ergautbrasil.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-ergaut-brasil/capa.jpg',
    descricao: [
      "Site institucional da Ergaut Brasil, startup do sul de Minas que desenvolve ferramentas mecânicas para içamento e transporte de precisão, voltadas à indústria e à construção civil. O destaque é o içador Lifton-GHX.",
      "O site apresenta a empresa, o produto e seus benefícios (segurança nas operações, eficiência e praticidade de uso), os tipos de máquina em que a ferramenta pode ser usada e um espaço para quem quer ser revendedor, além de pedido de orçamento e contato por WhatsApp. Conta ainda com banner de cookies e páginas de privacidade.",
      "Projeto feito em parceria com Daniel Araújo."
    ],
    desafio:
      "Apresentar um produto técnico e inovador de forma clara, gerando pedidos de orçamento e atraindo novos revendedores.",
    solucao:
      "Um site institucional com o produto em destaque, benefícios explicados de forma direta e chamadas para orçamento e revenda em todas as páginas.",
    entregas: [
      "Site institucional responsivo",
      "Páginas da empresa e do produto",
      "Área para revendedores e pedido de orçamento",
      "Política de privacidade e aviso de cookies"
    ],
    imagens: [
      { src: '/projetos/site-ergaut-brasil/pagina-inicial.jpg', alt: "Página inicial do site da Ergaut Brasil, com o içador Lifton-GHX no banner", aspecto: '16/10' },
      { src: '/projetos/site-ergaut-brasil/solucao.jpg', alt: "Seção do produto Lifton-GHX e de seus benefícios no site da Ergaut Brasil", aspecto: '16/10' },
      { src: '/projetos/site-ergaut-brasil/sobre.jpg', alt: "Seção sobre a empresa Ergaut Brasil, com três destaques", aspecto: '16/10' },
      { src: '/projetos/site-ergaut-brasil/celular.jpg', alt: "Página inicial do site da Ergaut Brasil no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'site-incor-circuito-das-aguas',
    titulo: "Site para Clínica de Cardiologia",
    categoria: 'Web',
    cliente: "Instituto do Coração Circuito das Águas",
    ano: '2026',
    cor: '#7A1620',
    resumo:
      "Site institucional de uma clínica de cardiologia, com especialidades, exames, equipe médica e agendamento de consultas. Versão renovada de um site criado em 2024.",
    techs: ["Next.js","Tailwind"],
    link: 'https://www.incorcircuitodasaguas.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-incor-circuito-das-aguas/capa.jpg',
    descricao: [
      "Site do Instituto do Coração Circuito das Águas, clínica de cardiologia do Dr. Giovani Dias. A Rixxer criou a primeira versão em 2024 e, em 2026, entregou esta versão atualizada, com visual mais moderno.",
      "A página inicial leva o paciente direto ao agendamento de consulta e apresenta os diferenciais da clínica, a lista de especialidades e exames, a equipe médica e depoimentos de pacientes, com contato por telefone e WhatsApp sempre à vista. O layout se adapta ao celular."
    ],
    desafio:
      "Atualizar o site de uma clínica para transmitir confiança e facilitar o agendamento, mostrando com clareza as especialidades e os exames oferecidos.",
    solucao:
      "Reformulação completa do visual e do conteúdo, com foco em chamadas para agendar a consulta e em uma lista organizada de especialidades e exames.",
    entregas: [
      "Nova versão do site, responsiva",
      "Páginas de especialidades e exames",
      "Apresentação da equipe médica e depoimentos",
      "Botões de agendamento e WhatsApp"
    ],
    imagens: [
      { src: '/projetos/site-incor-circuito-das-aguas/pagina-inicial.jpg', alt: "Página inicial do site do Instituto do Coração Circuito das Águas, com a fachada da clínica", aspecto: '16/10' },
      { src: '/projetos/site-incor-circuito-das-aguas/diferenciais.jpg', alt: "Seção \"Sua saúde é nossa prioridade\", com os diferenciais da clínica e o Dr. Giovani Dias", aspecto: '16/10' },
      { src: '/projetos/site-incor-circuito-das-aguas/especialidades.jpg', alt: "Seção de especialidades e exames, com fotos e nomes de cada exame", aspecto: '16/10' },
      { src: '/projetos/site-incor-circuito-das-aguas/celular.jpg', alt: "Página inicial do site da clínica no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'site-precision-equipamentos',
    titulo: 'Site para Equipamentos Médicos',
    categoria: 'Web',
    cliente: 'Precision Equipamentos Médicos',
    ano: '2023',
    cor: '#0A6EBD',
    resumo:
      'Site institucional para uma empresa de venda, manutenção e calibração de equipamentos médicos, com apresentação dos serviços, outlet de seminovos e contato por WhatsApp.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://precisionequipamentos.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-precision-equipamentos/capa.jpg',
    descricao: [
      'Site institucional da Precision Equipamentos Médicos, empresa que atende todo o Brasil com venda, manutenção e calibração de aparelhos para Medicina do Trabalho, Fonoaudiologia e Otorrinolaringologia.',
      'O site apresenta cada frente de negócio em uma seção própria: venda de equipamentos novos e seminovos (com carrossel de produtos), calibração, manutenção e outlet. Há ainda os diferenciais da empresa, formulário de contato, botão flutuante de WhatsApp, links para as redes sociais e aviso de cookies. O layout se adapta ao celular.',
    ],
    desafio:
      'Apresentar com clareza vários serviços técnicos de uma empresa que atende o Brasil inteiro e facilitar o pedido de orçamento.',
    solucao:
      'Um site de página única, com uma seção para cada serviço, chamadas para contato e o produto em destaque.',
    entregas: [
      'Site institucional responsivo',
      'Seções de produtos, calibração, manutenção e outlet',
      'Formulário de contato e botão de WhatsApp',
      'Aviso de cookies',
    ],
    imagens: [
      { src: '/projetos/site-precision-equipamentos/pagina-inicial.jpg', alt: "Página inicial do site da Precision Equipamentos Médicos, com o logotipo e a apresentação da empresa", aspecto: '16/10' },
      { src: '/projetos/site-precision-equipamentos/produtos.jpg', alt: "Seção de venda de equipamentos médicos novos e seminovos, com carrossel de produtos", aspecto: '16/10' },
      { src: '/projetos/site-precision-equipamentos/calibracao.jpg', alt: "Seção de calibração de equipamentos médicos no site da Precision", aspecto: '16/10' },
      { src: '/projetos/site-precision-equipamentos/celular.jpg', alt: "Página inicial do site da Precision Equipamentos Médicos no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'site-mega-2b-engenharia',
    titulo: 'Site para Engenharia Elétrica',
    categoria: 'Web',
    cliente: 'Mega 2B Engenharia',
    ano: '2025',
    cor: '#ED7C2F',
    resumo:
      'Site institucional de uma empresa de instalações e projetos elétricos, com serviços, atendimentos recentes em fotos, depoimentos e pedido de orçamento.',
    techs: ['Next.js', 'Tailwind'],
    link: 'https://www.mega2bengenharia.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-mega-2b-engenharia/capa.jpg',
    descricao: [
      'Site institucional da Mega 2B Engenharia, empresa de Jarinu/SP que executa projetos e instalações elétricas para indústrias, condomínios, hotéis e escritórios.',
      'O site apresenta a empresa e os diferenciais, mostra em carrossel os atendimentos recentes e traz uma galeria de projetos, depoimentos de clientes, formulário de contato e botão de WhatsApp. O layout se adapta ao celular.',
      'Projeto desenvolvido pela Rixxer, a convite da Agência Dueto.',
    ],
    desafio:
      'Dar à empresa uma presença digital que transmita segurança e mostre, com fotos reais, o tipo de serviço que ela executa.',
    solucao:
      'Um site com foco em imagens dos trabalhos, apresentação clara dos serviços e chamadas para pedir orçamento em todas as seções.',
    entregas: [
      'Site institucional responsivo',
      'Carrossel de atendimentos e galeria de projetos',
      'Seção de depoimentos',
      'Formulário de contato e botão de WhatsApp',
    ],
    imagens: [
      { src: '/projetos/site-mega-2b-engenharia/pagina-inicial.jpg', alt: "Página inicial do site da Mega 2B Engenharia, com carrossel de fotos de instalações e os diferenciais da empresa", aspecto: '16/10' },
      { src: '/projetos/site-mega-2b-engenharia/sobre.jpg', alt: "Seção sobre a empresa e atendimentos recentes no site da Mega 2B Engenharia", aspecto: '16/10' },
      { src: '/projetos/site-mega-2b-engenharia/projetos.jpg', alt: "Seção de clientes e projetos, com fotos de instalações elétricas e painéis", aspecto: '16/10' },
      { src: '/projetos/site-mega-2b-engenharia/celular.jpg', alt: "Página inicial do site da Mega 2B Engenharia no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'acai-no-ponto',
    titulo: 'Logotipo e Cardápio Impresso',
    categoria: 'Design',
    cliente: 'Açaí no Ponto',
    ano: '2019',
    cor: '#5B1A6B',
    resumo:
      'Criação do logotipo e do cardápio impresso de uma açaiteria, com identidade em roxo e amarelo e um layout fácil de ler para o delivery.',
    techs: ['Photoshop'],
    link: null,
    capa: '/projetos/acai-no-ponto/capa.jpg',
    descricao: [
      'Para a açaiteria Açaí no Ponto, de Carmo de Minas (MG), a Rixxer criou o logotipo e o cardápio impresso, ambos no Photoshop. O logotipo combina o nome em letras amarelas com contorno roxo e uma tigela de açaí, e define as cores usadas em todo o material.',
      'O cardápio tem duas páginas. A primeira apresenta os tamanhos de copo e os adicionais, com fotos dos ingredientes. A segunda traz as outras opções da casa, como bombadão, cupuaçu, milk shake e banana split. As duas terminam com o contato para delivery, o horário de funcionamento e as redes sociais.',
    ],
    desafio:
      'Dar uma identidade própria a uma açaiteria e organizar muitas opções de tamanhos, adicionais e sobremesas em um cardápio simples de entender.',
    solucao:
      'Um logotipo marcante em roxo e amarelo e um cardápio em duas páginas, com os preços em destaque, fotos dos produtos e o contato para pedidos sempre no rodapé.',
    entregas: [
      'Criação do logotipo',
      'Cardápio impresso de duas páginas',
      'Identidade visual em roxo e amarelo',
    ],
    imagens: [
      { src: '/projetos/acai-no-ponto/logotipo.jpg', alt: "Logotipo da Açaí no Ponto, com o nome em letras amarelas e uma tigela de açaí" },
      { src: '/projetos/acai-no-ponto/cardapio-1.jpg', alt: "Primeira página do cardápio da Açaí no Ponto, com tamanhos de copo e adicionais", retrato: true },
      { src: '/projetos/acai-no-ponto/cardapio-2.jpg', alt: "Segunda página do cardápio, com bombadão, cupuaçu, milk shake e banana split", retrato: true },
    ],
  },
  {
    slug: 'logotipo-amanda-lobo',
    titulo: 'Logotipo para Acupuntura',
    categoria: 'Design',
    cliente: 'Amanda Lobo',
    ano: '2023',
    cor: '#D9798A',
    resumo:
      'Criação do logotipo de uma profissional de acupuntura médica, com símbolo próprio em tons de rosa, e mockups que mostram a marca aplicada em cartões, placa, embalagem e papel.',
    techs: ['Illustrator', 'Photoshop'],
    link: null,
    capa: '/projetos/logotipo-amanda-lobo/capa.jpg',
    descricao: [
      'Logotipo criado no Illustrator para Amanda Lobo, que atua com acupuntura médica. O símbolo mostra o perfil de uma cabeça com um cérebro em destaque e uma linha que desce até um pequeno ponto luminoso, ao lado do nome e da especialidade.',
      'A paleta usa tons de rosa e um cinza escuro para o texto, com um toque de verde-limão nos pontos de luz, o que dá à marca um ar suave, acolhedor e ao mesmo tempo técnico. Para mostrar a marca em uso, foram criados no Photoshop mockups em papel com relevo, parede escura em 3D, placa de fachada, cartões de visita e embalagem de vela.',
    ],
    desafio:
      'Criar uma identidade que unisse o lado técnico da acupuntura médica neurofuncional a um visual acolhedor, para uma profissional que atende pessoas em tratamento.',
    solucao:
      'Um símbolo simples, feito de linhas, que une cabeça, cérebro e ponto de luz, aplicado em uma paleta de rosa e cinza e testado em diferentes materiais.',
    entregas: [
      'Criação do logotipo e do símbolo',
      'Definição da paleta de cores',
      'Mockups de aplicação da marca (cartões, placa, embalagem e papel)',
    ],
    imagens: [
      { src: '/projetos/logotipo-amanda-lobo/mockup-parede.jpg', alt: "Logotipo Amanda Lobo, Acupuntura Médica Neurofuncional, em mockup de parede escura com efeito 3D" },
      { src: '/projetos/logotipo-amanda-lobo/mockup-papel.jpg', alt: "Logotipo Amanda Lobo em relevo sobre papel texturizado", aspecto: '16/10' },
      { src: '/projetos/logotipo-amanda-lobo/mockup-cartoes.jpg', alt: "Cartões de visita com o logotipo Amanda Lobo", aspecto: '16/10' },
      { src: '/projetos/logotipo-amanda-lobo/mockup-placa.jpg', alt: "Placa de fachada com o logotipo Amanda Lobo" },
      { src: '/projetos/logotipo-amanda-lobo/mockup-vela.jpg', alt: "Embalagem de vela com o logotipo Amanda Lobo" },
    ],
  },
  {
    slug: 'logotipo-area-51-by-mafra',
    titulo: 'Criação de Logotipo',
    categoria: 'Design',
    cliente: 'Área 51 by Mafra',
    ano: '2025',
    cor: '#1B8A2A',
    resumo:
      'Criação do logotipo da marca Área 51 by Mafra, de Pouso Alegre (MG), em verde neon sobre preto, com versões para redes sociais e mockups em lona e vitrine.',
    techs: ['Illustrator', 'Photoshop'],
    link: null,
    capa: '/projetos/logotipo-area-51-by-mafra/capa.jpg',
    descricao: [
      'Logotipo criado no Illustrator para a Área 51 by Mafra, de Pouso Alegre (MG). O símbolo une o A e o número 51 em letras largas e anguladas, em verde neon sobre fundo preto, com a assinatura "by Mafra" em branco.',
      'Além do logotipo, foram preparadas uma versão sem fundo, para usar sobre qualquer cor, e uma versão em formato redondo para a foto de perfil das redes sociais. Os mockups, feitos no Photoshop, mostram a marca aplicada em uma lona e em uma vitrine.',
    ],
    desafio:
      'Criar uma marca forte e fácil de reconhecer, que funcionasse bem tanto em placas e fachadas quanto em perfis de redes sociais.',
    solucao:
      'Um logotipo de formas simples e alto contraste, com versões pensadas para cada uso e mockups que mostram o resultado em aplicações reais.',
    entregas: [
      'Criação do logotipo',
      'Versão sem fundo',
      'Versão para foto de perfil de redes sociais',
      'Mockups de lona e vitrine',
    ],
    imagens: [
      { src: '/projetos/logotipo-area-51-by-mafra/mockups.jpg', alt: "Mockups do logotipo Área 51 by Mafra em uma lona e em uma vitrine", aspecto: '9/16' },
      { src: '/projetos/logotipo-area-51-by-mafra/logo-redes-sociais.jpg', alt: "Logotipo Área 51 by Mafra em formato redondo, para foto de perfil de redes sociais", aspecto: '1/1' },
      { src: '/projetos/logotipo-area-51-by-mafra/logo-sem-fundo.jpg', alt: "Logotipo Área 51 em verde, versão sem fundo, sobre preto", aspecto: '4/3' },
    ],
  },
  {
    slug: 'blessed-multimarcas',
    titulo: 'Cartão de Visita e Backdrop',
    categoria: 'Design',
    cliente: 'Blessed Multimarcas',
    ano: '2023',
    cor: '#0E7C93',
    resumo:
      'Criação do cartão de visita e do backdrop de uma loja de atacado multimarcas de São Lourenço (MG), a partir da marca do cliente, em azul-turquesa sobre preto.',
    techs: ['Illustrator'],
    link: null,
    capa: '/projetos/blessed-multimarcas/capa.jpg',
    descricao: [
      'Material de papelaria e de loja criado no Illustrator para a Blessed Multimarcas, atacadão de São Lourenço (MG): um cartão de visita e um backdrop, ambos a partir da marca do cliente.',
      'As duas peças seguem o mesmo visual: fundo preto, a marca em azul-turquesa com degradê e os contatos (WhatsApp e Instagram) em destaque. No cartão, a marca fica no centro, com o contato logo abaixo. No backdrop, em formato horizontal, a marca fica à esquerda e os contatos à direita, pensados para aparecer bem em fotos e eventos.',
    ],
    desafio:
      'Dar à loja materiais de divulgação padronizados, que mostrassem a marca e facilitassem o contato dos clientes.',
    solucao:
      'Um cartão de visita e um backdrop com o mesmo fundo escuro e as mesmas cores da marca, com os contatos sempre à vista.',
    entregas: ['Cartão de visita', 'Backdrop horizontal', 'Arquivos prontos para impressão'],
    imagens: [
      { src: '/projetos/blessed-multimarcas/cartao-de-visita.jpg', alt: 'Cartão de visita da Blessed Multimarcas, com a marca em azul-turquesa sobre fundo preto', aspecto: '16/10' },
      { src: '/projetos/blessed-multimarcas/backdrop.jpg', alt: 'Backdrop da Blessed Multimarcas, com a marca à esquerda e o WhatsApp e o Instagram à direita', aspecto: '11/3' },
    ],
  },
  {
    slug: 'site-ice-zone',
    titulo: 'Site para Pistas de Patinação',
    categoria: 'Web',
    cliente: 'Ice Zone',
    ano: '2022',
    cor: '#2A4A73',
    resumo:
      'Site institucional de uma empresa de pistas de patinação no gelo, cine simulador 8D e brinquedoteca, com páginas de cada atração, vídeo, fotos e pedido de cotação.',
    techs: ['HTML', 'PHP', 'Bootstrap', 'JavaScript'],
    link: 'https://brinquedoemania.com.br/',
    linkRotulo: 'Ver site',
    capa: '/projetos/site-ice-zone/capa.jpg',
    descricao: [
      'Site institucional da Ice Zone, empresa de entretenimento que aluga pistas de patinação no gelo, natural e sintético, e também oferece cine simulador 8D e brinquedoteca.',
      'O menu leva a uma página para cada atração (pista de gelo natural, pista de gelo sintético e cine simulador 8D), à apresentação da empresa, à galeria de fotos e à área de locação, venda e contato. Na página inicial, um banner com fotos grandes abre o site, seguido de atalhos para a localização, a compra de ingressos e as dicas de patinação, de um vídeo da empresa no YouTube e de um pedido de cotação. Há ainda formulário de contato, cadastro de newsletter, links para as redes sociais e botão de WhatsApp. O layout se adapta ao celular.',
    ],
    desafio:
      'Apresentar várias atrações e serviços em um só site e facilitar o pedido de cotação para quem quer alugar uma pista.',
    solucao:
      'Um site organizado por atração, com fotos e vídeo em destaque, atalhos para as dúvidas mais comuns e um caminho curto até o pedido de cotação.',
    entregas: [
      'Site institucional responsivo',
      'Páginas para cada atração e galeria de fotos',
      'Formulário de cotação e de contato',
      'Cadastro de newsletter e botão de WhatsApp',
    ],
    imagens: [
      { src: '/projetos/site-ice-zone/pagina-inicial.jpg', alt: "Página inicial do site da Ice Zone, com o logotipo e a foto de duas crianças patinando no gelo", aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/atalhos-e-video.jpg', alt: "Atalhos do site da Ice Zone (onde estamos, ingresso e dicas) e apresentação da empresa com vídeo", aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/cotacao.jpg', alt: "Seção de cotação e formulário de contato do site da Ice Zone", aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/pista-de-gelo-natural.jpg', alt: 'Página da pista de gelo natural do site da Ice Zone, com foto de uma patinadora', aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/cine-simulador-8d.jpg', alt: 'Página do cine simulador 8D do site da Ice Zone, com a lista de temas dos filmes', aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/fotos.jpg', alt: 'Página de fotos das instalações do site da Ice Zone', aspecto: '16/10' },
      { src: '/projetos/site-ice-zone/celular.jpg', alt: "Página inicial do site da Ice Zone no celular", aspecto: '9/16' },
    ],
  },
  {
    slug: 'catalogo-cafes-da-vinci',
    titulo: 'Catálogo de Cafés Especiais',
    categoria: 'Design',
    cliente: 'Café da Vinci',
    ano: '2023',
    cor: '#6B3E26',
    resumo:
      'Catálogo de cafés especiais que apresenta os lotes da colheita de 2023, com as notas de sabor de cada café ilustradas por fotos e a pontuação de qualidade.',
    techs: ['Photoshop'],
    link: null,
    capa: '/projetos/catalogo-cafes-da-vinci/capa.jpg',
    descricao: [
      'Catálogo criado no Photoshop para a Café da Vinci, de Dom Viçoso (MG), com o objetivo de mostrar os cafés especiais de cada lote da colheita de 2023.',
      'A capa traz a marca em branco sobre grãos de café e fumaça. A segunda página apresenta a idealizadora do projeto e a proposta da marca, com fotos coladas como em um mural. Cada lote ganha uma página própria, sobre fundo de madeira escura: o talhão, a altitude, as notas de sabor e a finalização, e a pontuação de qualidade, com fotos de frutas, chocolate, mel e outros ingredientes que ajudam o leitor a imaginar o sabor da xícara. A contracapa reúne os contatos da marca.',
    ],
    desafio:
      'Explicar, de um jeito visual e fácil de entender, as diferenças de sabor entre os lotes de uma colheita, para quem ainda não conhece cafés especiais.',
    solucao:
      'Cada café ganhou uma página com fotos dos sabores que ele lembra, ligadas por setas e rabiscos, em um visual quente de madeira, grãos e papel, que combina com a marca.',
    entregas: [
      'Projeto gráfico e diagramação do catálogo',
      'Páginas dos lotes com notas de sabor ilustradas',
      'Capa, apresentação e contracapa',
      'Tratamento de imagens no Photoshop',
    ],
    imagens: [
      { src: '/projetos/catalogo-cafes-da-vinci/capa-catalogo.jpg', alt: "Capa do catálogo 2023 do Café da Vinci, com a marca sobre grãos de café e fumaça", retrato: true },
      { src: '/projetos/catalogo-cafes-da-vinci/apresentacao.jpg', alt: "Página de apresentação do catálogo de cafés especiais, com fotos da colheita e texto da idealizadora", retrato: true },
      { src: '/projetos/catalogo-cafes-da-vinci/lote-02.jpg', alt: "Página do lote 02, com as notas de sabor ilustradas por frutas vermelhas, frutas secas e chocolate", retrato: true },
      { src: '/projetos/catalogo-cafes-da-vinci/lote-03.jpg', alt: "Página do lote 03, com as notas de sabor ilustradas por avelã, baunilha e creme de chocolate", retrato: true },
      { src: '/projetos/catalogo-cafes-da-vinci/contracapa.jpg', alt: "Contracapa do catálogo, com os contatos do Café da Vinci e uma foto de café sendo servido", retrato: true },
    ],
  },
  {
    slug: 'flyer-casa-vo-biza',
    titulo: 'Flyer para Restaurante',
    categoria: 'Design',
    cliente: 'Casa Vó Biza',
    ano: '2023',
    cor: '#8A4B3C',
    resumo:
      'Criação de um flyer de divulgação para um restaurante caseiro, com fotos dos próprios pratos, tiradas pela Rixxer, e um visual quente em marrom, cobre e preto.',
    techs: ['Illustrator'],
    link: null,
    capa: '/projetos/flyer-casa-vo-biza/capa.jpg',
    descricao: [
      'Flyer criado no Illustrator para o restaurante Casa Vó Biza, de São Lourenço (MG), entregue pronto para uso. As fotos dos pratos foram tiradas pela própria Rixxer no restaurante, o que dá ao material um ar real e apetitoso.',
      'No topo, a foto principal de um prato servido em chapa quente, com o logotipo do restaurante em destaque. Mais abaixo, as chamadas "Comida com carinho da vovó!" e "Com muita variedade e qualidade", o título "Pratos Magníficos" e três pratos em círculos (filé de frango, filé de peixe e lombo), com o endereço no rodapé. As cores marrom, cobre e preto combinam com o clima de comida caseira.',
    ],
    desafio:
      'Divulgar um restaurante caseiro de um jeito apetitoso, mostrando os pratos reais em vez de imagens de banco de fotos.',
    solucao:
      'Um flyer com uma foto grande de um prato em destaque, três pratos em miniatura e chamadas curtas, em um visual quente que lembra a comida da vovó.',
    entregas: [
      'Criação do flyer',
      'Fotografia dos pratos',
      'Arte final pronta para uso',
    ],
    imagens: [
      { src: '/projetos/flyer-casa-vo-biza/flyer.jpg', alt: 'Flyer do restaurante Casa Vó Biza, com um prato em chapa quente, as chamadas "Comida com carinho da vovó" e três pratos em destaque', aspecto: '2/3' },
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
    capa: '/projetos/banner-copa-espetinho-da-vila/capa.jpg',
    relacionados: ['logotipo-grupo-beg', 'redes-sociais-espetinho-da-vila'],
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
    relacionados: ['banner-copa-espetinho-da-vila', 'redes-sociais-espetinho-da-vila'],
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
    slug: 'paradise-materiais-impressos',
    titulo: 'Materiais Impressos',
    categoria: 'Design',
    cliente: 'Paradise SUP & Surf',
    ano: '2026',
    cor: '#E8602C',
    resumo:
      'Três peças para impressão para a escola de surf e SUP do Rio de Janeiro: flyer de divulgação, tabela de preços e placa para avaliações no Google.',
    techs: ['Photoshop'],
    link: null,
    relacionados: ['paradise-site','redes-sociais-paradise-sup-surf'],
    capa: '/projetos/paradise-materiais-impressos/capa.jpg',
    descricao: [
      'Material gráfico criado para a Paradise SUP & Surf, em Arpoador, no Rio de Janeiro, com a identidade da marca em todas as peças.',
      'O flyer de divulgação apresenta as experiências de SUP e surf, o aluguel de pranchas e as aulas, com QR Code para reservar o lugar pelo WhatsApp. A tabela de preços reúne as aulas de surf e o aluguel de pranchas. A placa convida o cliente a avaliar a empresa no Google por meio de um QR Code.',
      'A última imagem da galeria é uma foto enviada pelo próprio cliente, com o flyer já impresso e em uso.',
    ],
    entregas: [
      'Flyer de divulgação',
      'Tabela de preços (aulas de surf e aluguel de pranchas)',
      'Placa com QR Code para avaliações no Google',
      'Arquivos prontos para impressão',
    ],
    resultados: ['Material impresso e já em uso pelo cliente.'],
    imagens: [
      { src: '/projetos/paradise-materiais-impressos/flyer.jpg', alt: 'Flyer de divulgação da Paradise SUP & Surf: "Viva o nascer e o pôr do sol no mar", com QR Code para WhatsApp', retrato: true },
      { src: '/projetos/paradise-materiais-impressos/tabela-de-precos.jpg', alt: 'Tabela de preços da Paradise SUP & Surf, com aulas de surf e aluguel de pranchas', retrato: true },
      { src: '/projetos/paradise-materiais-impressos/placa-avaliacao.jpg', alt: 'Placa "Avalie-nos no Google", com QR Code, da Paradise SUP & Surf', retrato: true },
      { src: '/projetos/paradise-materiais-impressos/flyer-impresso.jpg', alt: 'Flyer já impresso, em um display de acrílico (foto enviada pelo cliente)', retrato: true },
    ],
  },
  {
    slug: 'paradise-site',
    titulo: 'Site para Escola de Surf',
    categoria: 'Web',
    cliente: 'Paradise SUP & Surf',
    ano: '2026',
    cor: '#1B6FA8',
    resumo:
      'Site da escola de surf e experiências de natureza no Rio de Janeiro, com aulas, SUP no amanhecer, tour cultural, trilhas, cachoeiras e praias secretas, e contato direto pelo WhatsApp.',
    techs: ['Next.js', 'Vercel'],
    link: 'https://paradisesupsurf.vercel.app/',
    status: 'Em desenvolvimento',
    relacionados: ['paradise-materiais-impressos','redes-sociais-paradise-sup-surf'],
    capa: '/projetos/paradise-site/capa.jpg',
    descricao: [
      'Site institucional da Paradise SUP & Surf, com uma página para cada atividade: aulas de surf, SUP no amanhecer, tour cultural, trilhas e aventura, cachoeiras e praias secretas.',
      'O site explica como funciona (chamar no WhatsApp, escolher o horário e viver a experiência) e leva o visitante direto para a conversa com a equipe. O projeto ainda está em desenvolvimento.',
    ],
    imagens: [
      { src: '/projetos/paradise-site/aulas.jpg', alt: 'Seção de aulas de surf do site da Paradise, com opções para iniciantes, turistas e grupos, e evolução técnica' },
    ],
  },
  {
    slug: 'redes-sociais-paradise-sup-surf',
    titulo: 'Gestão de Redes — Paradise SUP & Surf',
    categoria: 'Social',
    cliente: 'Paradise SUP & Surf',
    ano: '2026',
    cor: '#E8602C',
    resumo:
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    capa: '/projetos/redes-sociais-paradise-sup-surf/capa.jpg',
    link: 'https://www.instagram.com/paradisesupsurf',
    linkRotulo: 'Ver no Instagram',
    relacionados: ['paradise-materiais-impressos','paradise-site'],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
      'Os posts abaixo são exemplos de artes criadas para o Instagram do cliente, divulgando as experiências de SUP e surf ao nascer e ao pôr do sol.',
    ],
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
    imagens: [
      { src: '/projetos/redes-sociais-paradise-sup-surf/post-2.jpg', alt: "Post \"Nascer do sol no Arpoador (vagas limitadas)\", da Paradise SUP & Surf", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-paradise-sup-surf/post-3.jpg', alt: "Post \"Experiência do amanhecer em Copacabana\", da Paradise SUP & Surf", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-paradise-sup-surf/post-1.jpg', alt: "Post com uma frase sobre o céu e o mar ao pôr do sol, com uma pessoa sobre uma prancha de SUP", aspecto: '4/5' },
    ],
  },
  {
    slug: 'redes-sociais-blessed-lavanderia',
    titulo: 'Gestão de Redes — Blessed Lavanderia',
    categoria: 'Social',
    cliente: 'Blessed Lavanderia',
    ano: '2026',
    cor: '#7A4F8F',
    resumo:
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    link: 'https://www.instagram.com/blessedlavanderia',
    linkRotulo: 'Ver no Instagram',
    relacionados: ['redes-sociais-lavanderia-mundial'],
    capa: '/projetos/redes-sociais-blessed-lavanderia/capa.jpg',
    descricao: [
      'Gestão mensal de Instagram e Facebook da Blessed Lavanderia, que atua na limpeza de tapetes e estofados, com criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios, mantendo a identidade visual da marca em todas as peças.',
      'Os posts abaixo são exemplos: apresentação do processo de limpeza, promoções, dicas sobre cuidados com sofás e colchões e chamadas para agendamento.',
    ],
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
    imagens: [
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-01.jpg', alt: "Post \"Seu sofá merece o melhor cuidado\", com chamada para agendamento", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-02.jpg', alt: "Post \"Nosso processo para manter seu ambiente impecável\", com as etapas do serviço", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-03.jpg', alt: "Story \"Faça a limpeza de seu estofado e ganhe 40% de desconto na limpeza de seu colchão\"", aspecto: '9/16' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-04.jpg', alt: "Post \"Tranquilidade é o que transmitimos com a nossa limpeza especializada de estofados\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-05.jpg', alt: "Post \"Não é apenas estética, é proteção para você e sua família\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-06.jpg', alt: "Post \"Quer melhorar a qualidade do seu sono? Aprenda como!\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-07.jpg', alt: "Post \"Antes ou depois da mudança? Qual o momento certo para limpar os estofados?\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-08.jpg', alt: "Post \"Trabalhamos removendo sujidades e bactérias dos seus estofados\"", retrato: true },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-09.jpg', alt: "Post \"Motivos para higienizar seu sofá agora\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-10.jpg', alt: "Post \"Limpeza profunda que elimina ácaros e bactérias\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-blessed-lavanderia/post-11.jpg', alt: 'Post "Sofá limpo e renovado", da Blessed Lavanderia', aspecto: '4/5' },
    ],
  },
  {
    slug: 'redes-sociais-espetinho-da-vila',
    titulo: 'Gestão de Redes — Espetinho da Vila',
    categoria: 'Social',
    cliente: 'Espetinho da Vila',
    ano: '2026',
    cor: '#C2410C',
    resumo:
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    capa: '/projetos/redes-sociais-espetinho-da-vila/capa.jpg',
    link: 'https://www.instagram.com/espetinhodavilasl',
    linkRotulo: 'Ver no Instagram',
    relacionados: ['banner-copa-espetinho-da-vila', 'logotipo-grupo-beg'],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
      'O post abaixo é um exemplo de arte criada para o Instagram do cliente, divulgando as refeições do restaurante.',
    ],
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
    imagens: [
      { src: '/projetos/redes-sociais-espetinho-da-vila/post-1.jpg', alt: 'Post "Refeição de qualidade", do Espetinho da Vila, com prato feito, refrigerante e o logotipo do restaurante', aspecto: '4/5' },
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
    capa: '/projetos/redes-sociais-lavanderia-mundial/capa.jpg',
    link: 'https://www.instagram.com/lavanderia_mundial',
    relacionados: ['redes-sociais-blessed-lavanderia'],
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
    imagens: [
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-2.jpg', alt: "Post \"Estofados impecáveis!\" da Lavanderia Mundial, com foto de uma sala e o logotipo", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-3.jpg', alt: "Post \"Livre-se da sujeira e dos ácaros presentes no seu colchão\", da Lavanderia Mundial", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-1.jpg', alt: "Post \"Como é feita a limpeza profissional do seu sofá\", com as 5 etapas do processo", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-4.jpg', alt: "Story \"Faça a limpeza de seu estofado e ganhe 40% de desconto na higienização de seu colchão\"", aspecto: '9/16' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-5.jpg', alt: "Post \"Agora é só relaxar\", com estofados limpos e cheirosos", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-6.jpg', alt: "Post \"Vai receber suas visitas com as cadeiras nesse estado? Nem pensar!\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-7.jpg', alt: "Post \"Agenda aberta: agende a limpeza de seus estofados conosco\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-8.jpg', alt: "Post de um ambiente com o convite \"Confira na legenda\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-9.jpg', alt: "Post \"Erros que podem acabar com a beleza do seu estofado\"", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-lavanderia-mundial/post-10.jpg', alt: "Post \"Seu carpete limpo, com qualidade Mundial\", com um profissional limpando o carpete de um auditório", aspecto: '4/5' },
    ],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
      'Os posts abaixo são exemplos de artes criadas para o Instagram do cliente: passo a passo da limpeza, promoções, dicas e ofertas para sofás, estofados, cadeiras, colchões e carpetes.',
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
    capa: '/projetos/redes-sociais-the-seventies-burgers/capa.jpg',
    link: 'https://www.instagram.com/theseventiesburgers',
    linkExtra: { url: 'https://www.instagram.com/reel/DbcDYfINW0H/', rotulo: 'Assistir ao vídeo' },
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
    imagens: [
      { src: '/projetos/redes-sociais-the-seventies-burgers/post-1.jpg', alt: "Post \"Hoje é Dia Mundial do Hambúrguer!\", da The Seventies Burgers", aspecto: '4/5' },
      { src: '/projetos/redes-sociais-the-seventies-burgers/post-2.jpg', alt: "Post \"Seu lanche direto em casa\", da The Seventies Burgers, com o telefone para pedidos", aspecto: '1/1' },
      { src: '/projetos/redes-sociais-the-seventies-burgers/post-3.jpg', alt: 'Quadro de um vídeo gravado dentro do restaurante The Seventies, para o Instagram do cliente', aspecto: '2/3' },
    ],
    relacionados: ['site-hamburgueria-the-seventies'],
    descricao: [
      'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
      'Os posts abaixo são exemplos de artes criadas para o Instagram do cliente, com divulgação do cardápio, datas especiais e pedidos por telefone. A Rixxer também grava vídeos no próprio restaurante, como o da última imagem.',
    ],
  },
];

export function getProjeto(slug) {
  return projetos.find((p) => p.slug === slug) ?? null;
}
