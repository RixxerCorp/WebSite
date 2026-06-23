import Link from 'next/link';
import Image from 'next/image';

const servicos = [
  { emoji: '🌐', titulo: 'Desenvolvimento Web', desc: 'Sites institucionais, landing pages e portais com foco em performance, SEO e conversão.' },
  { emoji: '📱', titulo: 'Aplicativos Mobile', desc: 'Apps nativos e híbridos para iOS e Android, do protótipo à publicação nas lojas.' },
  { emoji: '⚙️', titulo: 'Sistemas & Automação', desc: 'Sistemas sob medida, integrações via API e automações que eliminam trabalho manual.' },
  { emoji: '📣', titulo: 'Gestão de Redes Sociais', desc: 'Estratégia de conteúdo, criação e publicação para sua marca estar onde o cliente está.' },
  { emoji: '🎨', titulo: 'Design Gráfico & UI', desc: 'Identidade visual, flyers, apresentações e interfaces que comunicam antes mesmo de ler.' },
  { emoji: '🔍', titulo: 'SEO & Performance', desc: 'Otimização técnica para seu site rankear no Google e carregar em menos de 2 segundos.' },
];

const numeros = [
  { valor: '400+', label: 'Projetos Entregues' },
  { valor: '20+', label: 'Clientes Ativos'    },
  { valor: '10+',  label: 'Anos de Mercado'    },
  { valor: '95%', label: 'Taxa de Satisfação' },
];

const projetos = [
  { titulo: 'Portal Imobiliário', categoria: 'Web/Mobile', cor: '#6B2D8B', desc: 'Site completo com área restrita para cadastro de imóveis para a Alexandria Negócios Imobiliários.' },
  { titulo: 'Site para Hamburgueria', categoria: 'Web/Mobile', cor: '#3AACB8', desc: 'Site completo com cardápio e solução de pagamentos para a The Seventies Artesanal Burgers.' },
  { titulo: 'Revista Impressa', categoria: 'Design Gráfico', cor: '#1A1F5E', desc: 'Montagem e impressão da Revista Viva São Lourenço, impresso conceituado na Cidade.' },
  { titulo: 'Banner para Impressão', categoria: 'Design', cor: '#6B2D8B', desc: 'Criação de material para o Restaurante do Calçadão, com design e impressão personalizados.' },
  { titulo: 'Gestão de Redes Sociais', categoria: 'Web', cor: '#3AACB8', desc: 'Estratégia e produção de conteúdo mensal para a Lavanderia Mundial, de Goiânia.' },
  { titulo: 'Conteúdo para Hamburgueria', categoria: 'Design Gráfico', cor: '#1A1F5E', desc: 'Produção de conteúdo e estratégia para a hamburgueria The Seventies' },
];

const depoimentos = [
  { nome: 'Isa Marassi', cargo: 'Psicanalista', texto: 'Pensa numa empresa séria com pessoal altamente capacitado!? São excelentes na produção e estão sempre prontos a nos atender. Estou super satisfeita com os serviços e atendimento.  Super recomendo!!!', inicial: 'I' },
  { nome: 'Matheus Silva',  cargo: 'Farmacêutico', texto: 'Conheço o dono da empresa, e a empresa. Eles trabalham com bastante seriedade para entregar o serviço contratado. O legal dessa empresa que vc pode enviar os seus próprios vídeos e fotos que a Rixxer trata, ou então a própria empresa filma e tira as fotos para o cliente. Ou seja, se vc precisar de montar um projeto do zero até o final eles fazem. E os preços são bons, tem muita competitividade no mercado. Eu super recomendo o trabalho da Rixxer, os caras dão show em marketing.', inicial: 'M' },
  { nome: 'Mary Lindsen Lasek Luzia', cargo: 'Customer Success Specialist', texto: 'Empresa maravilhosa. Trabalha com redes sociais, sites e até com serviço de divulgação. Empresa completa! Super recomendo!', inicial: 'M' },
  { nome: 'Leonardo Ortiz', cargo: 'CEO Revista Viva', texto: 'Manda muito bem, trabalho de alto nível. Parabéns!!!', inicial: 'L' },
  { nome: 'Igor Fonseca', cargo: 'Técnico em Informática', texto: 'Ótimos profissionais, sempre atendendo de uma forma atenciosa e entregando ótimos resultado.', inicial: 'I' },
  { nome: 'Jokasta Mariana', cargo: 'CEO The Seventies', texto: 'Empresa fantástica, uma agência que veste a camisa de seus clientes, excelente qualidade, dedicação e profissionalismo, agradecimentos mil por todo empenho e carinho do Hebert em cuidar de cada detalhe.', inicial: 'J' },
];

function XPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="xpat" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="80" stroke="#3AACB8" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#6B2D8B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xpat)" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#0D0D14] text-white">

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <XPattern />

        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#6B2D8B]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#3AACB8]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-0.5 bg-[#3AACB8]" />
              <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Rixxer</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              <span className="text-white">Seu negócio</span><br />
              <span className="text-[#6B2D8B]">no próximo</span><br />
              <span className="relative inline-block">
                <span className="text-white">nível.</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3AACB8] to-[#6B2D8B]" />
              </span>
            </h1>

            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mt-10 mb-12">
              Desenvolvemos Sites, Aplicativos e Sistemas que transformam ideias em resultados reais. Design. Tecnologia. Estratégia Digital.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projetos"
                className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-purple-900/40">
                Ver Projetos
              </Link>
              <Link href="/contato"
                className="border border-white/20 hover:border-[#3AACB8] text-white hover:text-[#3AACB8] font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200">
                Fale Conosco →
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <Image src="/rixxer2.png" alt="" width={700} height={700} className="object-contain" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {numeros.map((n, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black text-[#3AACB8] mb-2">{n.valor}</div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">O que fazemos</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0D0D14] leading-tight">
                Soluções digitais<br />
                <span className="text-[#6B2D8B]">do começo ao fim.</span>
              </h2>
            </div>
            <Link href="/servicos"
              className="flex-shrink-0 border-2 border-[#6B2D8B] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white font-bold px-6 py-3 rounded-lg uppercase tracking-widest text-xs transition-all duration-200 self-start md:self-auto">
              Todos os serviços →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6B2D8B] to-[#3AACB8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="text-3xl block mb-4">{s.emoji}</span>
                <h3 className="font-black text-[#0D0D14] uppercase tracking-tight text-base mb-2 group-hover:text-[#6B2D8B] transition-colors duration-200">
                  {s.titulo}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden">
        <XPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Portfólio</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                Projetos que<br />
                <span className="text-[#3AACB8]">falam por si.</span>
              </h2>
            </div>
            <Link href="/projetos"
              className="flex-shrink-0 border border-white/20 hover:border-[#3AACB8] text-white/60 hover:text-[#3AACB8] font-bold px-6 py-3 rounded-lg uppercase tracking-widest text-xs transition-all duration-200 self-start md:self-auto">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projetos.map((p, i) => (
              <div key={i}
                className="rounded-2xl border border-white/5 bg-white/3 p-7 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: p.cor + '22', color: p.cor }}>
                    {p.categoria}
                  </span>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-200 group-hover:translate-x-1 transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-lg mb-2 group-hover:text-[#3AACB8] transition-colors duration-200">
                  {p.titulo}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{p.desc}</p>
                <div className="mt-5 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: p.cor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Clientes</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0D0D14]">
              Quem trabalhou<br />
              <span className="text-[#6B2D8B]">sabe o resultado.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-[#3AACB8]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 italic">`{d.texto}`</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6B2D8B] flex items-center justify-center text-white font-black text-sm">
                    {d.inicial}
                  </div>
                  <div>
                    <p className="font-black text-[#0D0D14] text-sm uppercase tracking-wide">{d.nome}</p>
                    <p className="text-gray-400 text-xs font-medium">{d.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D8B]/20 via-transparent to-[#3AACB8]/10 pointer-events-none" />
        <XPattern />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Vamos começar?</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
            Sua ideia merece<br />
            <span className="text-[#6B2D8B]">sair do papel.</span>
          </h2>
          <p className="text-white/50 text-lg font-light mb-12 max-w-xl mx-auto">
            Conte para a gente o que você precisa. Respondemos em até 24h com uma proposta personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato"
              className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-5 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:scale-105 shadow-2xl shadow-purple-900/40">
              Solicitar Proposta
            </Link>
            <a href="https://wa.me/5511926404724" target="_blank" rel="noopener noreferrer"
              className="border border-[#3AACB8]/40 hover:border-[#3AACB8] text-[#3AACB8] font-bold px-10 py-5 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:bg-[#3AACB8]/10">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
