import Link from 'next/link';

function XPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="xpat2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="80" stroke="#3AACB8" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#6B2D8B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xpat2)" />
      </svg>
    </div>
  );
}

const servicos = [
  {
    emoji: '🌐',
    titulo: 'Desenvolvimento Web',
    subtitulo: 'Sites que convertem',
    desc: 'Criamos sites institucionais, landing pages, portais e plataformas web com foco em performance, SEO técnico e conversão. Cada projeto é desenvolvido do zero, responsivo e otimizado para os mecanismos de busca.',
    itens: ['Sites Institucionais', 'Landing Pages', 'Portais e Intranets', 'E-commerce', 'Blogs e Notícias', 'Integração com CMS'],
    cor: '#6B2D8B',
  },
  {
    emoji: '📱',
    titulo: 'Aplicativos Mobile',
    subtitulo: 'Apps do protótipo às lojas',
    desc: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android. Do wireframe à publicação nas lojas, nossa equipe cuida de UX, design, desenvolvimento e testes para garantir uma experiência fluida ao usuário.',
    itens: ['Apps iOS e Android', 'React Native / Flutter', 'Publicação nas Lojas', 'Notificações Push', 'Login Social', 'Pagamento Integrado'],
    cor: '#3AACB8',
  },
  {
    emoji: '⚙️',
    titulo: 'Sistemas & Automação',
    subtitulo: 'Tecnologia que trabalha por você',
    desc: 'Desenvolvemos sistemas sob medida para automatizar processos, integrar plataformas via API e centralizar a gestão do seu negócio. ERPs, CRMs, dashboards e painéis administrativos.',
    itens: ['Sistemas ERP/CRM', 'Integrações via API', 'Automação de Processos', 'Dashboards', 'Painéis Administrativos', 'Migração de Dados'],
    cor: '#1A1F5E',
  },
  {
    emoji: '📣',
    titulo: 'Gestão de Redes Sociais',
    subtitulo: 'Sua marca onde o cliente está',
    desc: 'Planejamento estratégico, produção de conteúdo, publicação e monitoramento de resultados. Cuidamos das suas redes para que você foque no que importa: o seu negócio.',
    itens: ['Planejamento Editorial', 'Produção de Conteúdo', 'Stories e Reels', 'Gestão de Comentários', 'Relatório Mensal', 'Tráfego Pago (Meta Ads)'],
    cor: '#6B2D8B',
  },
  {
    emoji: '🎨',
    titulo: 'Design Gráfico & UI',
    subtitulo: 'Comunicação visual que impacta',
    desc: 'Criação de identidade visual completa, design de interfaces (UI/UX), materiais gráficos para digital e impresso. Seu brand comunicando com consistência em todos os pontos de contato.',
    itens: ['Identidade Visual', 'Logo e Manual de Marca', 'UI/UX Design', 'Flyers e Materiais', 'Apresentações', 'Peças para Redes Sociais'],
    cor: '#3AACB8',
  },
  {
    emoji: '🔍',
    titulo: 'SEO & Performance',
    subtitulo: 'Visibilidade orgânica real',
    desc: 'Otimização técnica completa para seu site aparecer nas primeiras posições do Google. Auditoria, correções, produção de conteúdo otimizado e monitoramento de resultados mês a mês.',
    itens: ['Auditoria SEO', 'Otimização On-Page', 'Link Building', 'Core Web Vitals', 'Pesquisa de Palavras-chave', 'Relatórios de Posicionamento'],
    cor: '#1A1F5E',
  },
];

const processo = [
  { titulo: 'Briefing', desc: 'Entendemos a fundo seu negócio, objetivos e público antes de escrever uma linha de código.' },
  { titulo: 'Proposta', desc: 'Elaboramos escopo, cronograma e investimento de forma clara e sem surpresas.' },
  { titulo: 'Desenvolvimento', desc: 'Sprint iterativo com entregas parciais e alinhamentos frequentes via Slack ou WhatsApp.' },
  { titulo: 'Entrega & Suporte', desc: 'Lançamento acompanhado, treinamento da equipe e suporte pós-entrega garantido.' },
];

export default function ServicosPage() {
  return (
    <div className="bg-[#0D0D14] text-white">

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <XPattern />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#6B2D8B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#3AACB8]" />
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">O que fazemos</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Soluções digitais<br />
            <span className="text-[#6B2D8B]">do começo ao fim.</span>
          </h1>
          <p className="text-white/50 text-xl font-light max-w-xl leading-relaxed">
            Da estratégia ao lançamento, a Rixxer entrega tudo que sua empresa precisa para crescer no digital.
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 L1440 60 L1440 0 Q720 60 0 0 Z" fill="#F5F5F7" />
          </svg>
        </div>
      </section>

      {/* Cards de serviços */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          {servicos.map((s, i) => (
            <div key={i}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Info */}
                <div className="p-10">
                  <span className="text-4xl block mb-4">{s.emoji}</span>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: s.cor }}>
                    {s.subtitulo}
                  </span>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#0D0D14] mb-4 group-hover:text-[#6B2D8B] transition-colors duration-200">
                    {s.titulo}
                  </h2>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">{s.desc}</p>
                  <Link href="/contato"
                    className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors duration-200"
                    style={{ color: s.cor }}>
                    Solicitar orçamento
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Lista de itens */}
                <div className="p-10 border-t lg:border-t-0 lg:border-l border-gray-100"
                  style={{ background: s.cor + '08' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Inclui</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.itens.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: s.cor + '22' }}>
                          <svg className="w-3 h-3" fill={s.cor} viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              {/* Barra de cor */}
              <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(to right, ${s.cor}, #3AACB8)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="bg-[#0D0D14] py-24 relative overflow-hidden">
        <XPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Processo</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Como trabalhamos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processo.map((p, i) => (
              <div key={i} className="bg-white/3 rounded-2xl border border-white/5 p-7 hover:border-[#6B2D8B]/50 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#6B2D8B]/20 border border-[#6B2D8B]/30 flex items-center justify-center font-black text-[#6B2D8B] text-sm mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-base mb-2 group-hover:text-[#3AACB8] transition-colors duration-200">
                  {p.titulo}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F7] py-20 px-6 text-center">
        <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Vamos começar?</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0D0D14] mb-6">
          Qual serviço você<br />
          <span className="text-[#6B2D8B]">precisa hoje?</span>
        </h2>
        <p className="text-gray-500 font-medium text-base mb-10 max-w-md mx-auto">
          Conte o seu projeto e receba uma proposta personalizada em até 24h.
        </p>
        <Link href="/contato"
          className="inline-block bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-purple-900/20">
          Solicitar Proposta
        </Link>
      </section>

    </div>
  );
}
