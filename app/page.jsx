import Link from 'next/link';
import Reveal from './components/Reveal';
import CountUp from './components/CountUp';
import Marquee from './components/Marquee';
import MagneticButton from './components/MagneticButton';
import { SITE, whatsappLink } from '@/lib/site';
import TerminalWidget from './components/TerminalWidget';
import AlicerceCard from './components/AlicerceCard';
import GoogleRating from './components/GoogleRating';
import {
  IconGlobe,
  IconDevice,
  IconGear,
  IconBroadcast,
  IconPalette,
  IconSearch,
  IconArrow,
  IconQuote,
  IconBuilding,
  IconCheck,
} from './components/icons';

const servicos = [
  {
    Icon: IconGlobe,
    titulo: 'Desenvolvimento Web',
    desc: 'Sites institucionais, landing pages e portais com foco em performance, SEO e conversão.',
    span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    destaque: true,
  },
  {
    Icon: IconDevice,
    titulo: 'Aplicativos Mobile',
    desc: 'Apps nativos e híbridos para iOS e Android, do protótipo à publicação nas lojas.',
    span: '',
  },
  {
    Icon: IconGear,
    titulo: 'Sistemas & Automação',
    desc: 'Sistemas sob medida, integrações via API e automações que eliminam trabalho manual.',
    span: '',
  },
  {
    Icon: IconBroadcast,
    titulo: 'Gestão de Redes Sociais',
    desc: 'Estratégia de conteúdo, criação e publicação para sua marca estar onde o cliente está.',
    span: 'sm:col-span-2 lg:col-span-1',
  },
  {
    Icon: IconPalette,
    titulo: 'Design Gráfico & UI',
    desc: 'Identidade visual, flyers, apresentações e interfaces que comunicam antes mesmo de ler.',
    span: '',
  },
  {
    Icon: IconSearch,
    titulo: 'SEO & Performance',
    desc: 'Otimização técnica para seu site rankear no Google e carregar em menos de 2 segundos.',
    span: 'sm:col-span-2 lg:col-span-2',
  },
];

const numeros = [
  { valor: '400+', label: 'Projetos Entregues' },
  { valor: '20+', label: 'Clientes Ativos' },
  { valor: '10+', label: 'Anos de Mercado' },
  { valor: SITE.avaliacao.notaTexto, label: 'Nota no Google' },
];

const clientes = [
  'Alexandria Negócios Imobiliários',
  'The Seventies Artesanal Burgers',
  'Revista Viva São Lourenço',
  'Restaurante do Calçadão',
  'Lavanderia Mundial',
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
  { nome: 'Isa Marassi', cargo: 'Psicanalista', texto: 'Pensa numa empresa séria com pessoal altamente capacitado!? São excelentes na produção e estão sempre prontos a nos atender. Estou super satisfeita com os serviços e atendimento. Super recomendo!!!', inicial: 'I' },
  { nome: 'Matheus Silva', cargo: 'Farmacêutico', texto: 'Conheço o dono da empresa, e a empresa. Eles trabalham com bastante seriedade para entregar o serviço contratado. O legal dessa empresa que vc pode enviar os seus próprios vídeos e fotos que a Rixxer trata, ou então a própria empresa filma e tira as fotos para o cliente. Eu super recomendo o trabalho da Rixxer, os caras dão show em marketing.', inicial: 'M' },
  { nome: 'Mary Lindsen Lasek Luzia', cargo: 'Customer Success Specialist', texto: 'Empresa maravilhosa. Trabalha com redes sociais, sites e até com serviço de divulgação. Empresa completa! Super recomendo!', inicial: 'M' },
  { nome: 'Leonardo Ortiz', cargo: 'CEO Revista Viva', texto: 'Manda muito bem, trabalho de alto nível. Parabéns!!!', inicial: 'L' },
  { nome: 'Igor Fonseca', cargo: 'Técnico em Informática', texto: 'Ótimos profissionais, sempre atendendo de uma forma atenciosa e entregando ótimos resultado.', inicial: 'I' },
  { nome: 'Jokasta Mariana', cargo: 'CEO The Seventies', texto: 'Empresa fantástica, uma agência que veste a camisa de seus clientes, excelente qualidade, dedicação e profissionalismo, agradecimentos mil por todo empenho e carinho do Hebert em cuidar de cada detalhe.', inicial: 'J' },
  { nome: 'Fernanda Quintanilha', cargo: 'Artesã', texto: 'Fiquei encantada com o material apresentado! Super atencioso, profissional, humilde, sabe o que está fazendo, conseguiu transformar minhas idéias junto com as dele em um site que simplesmente me apaixonei!!! Eu agradeço de todo coração, vcs me conquistaram! Super recomendo.', inicial: 'F' },
];

function XPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
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

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#0D0D14] text-white">

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GridLines />
        <XPattern />

        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#6B2D8B]/25 rounded-full blur-[120px] pointer-events-none animate-pulse [animation-duration:6s]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#3AACB8]/15 rounded-full blur-[100px] pointer-events-none animate-pulse [animation-duration:8s]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            <div className="max-w-4xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-0.5 bg-[#3AACB8]" />
                  <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">
                    Software House · Rixxer
                  </span>
                </div>
              </Reveal>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                <Reveal as="span" className="block" delay={80}>
                  <span className="text-white">Seu negócio</span>
                </Reveal>
                <Reveal as="span" className="block" delay={160}>
                  <span className="text-[#B57BD6]">no próximo</span>
                </Reveal>
                <Reveal as="span" className="block" delay={240}>
                  <span className="relative inline-block">
                    <span className="text-white">nível.</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3AACB8] to-[#6B2D8B]" />
                  </span>
                </Reveal>
              </h1>

              <Reveal delay={320}>
                <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mt-10 mb-12">
                  Desenvolvemos Sites, Aplicativos e Sistemas que transformam ideias em resultados reais. Design. Tecnologia. Estratégia Digital.
                </p>
              </Reveal>

              <Reveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton
                    href="/projetos"
                    className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-purple-900/40"
                  >
                    Ver Projetos
                  </MagneticButton>
                  <MagneticButton
                    href="/contato"
                    className="border border-white/20 hover:border-[#3AACB8] text-white hover:text-[#3AACB8] font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm"
                  >
                    Fale Conosco →
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="hidden lg:flex justify-center">
              <TerminalWidget />
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0D0D14] py-6">
        <Marquee items={clientes} />
      </section>

      <section className="border-b border-white/5 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {numeros.map((n, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <div className="text-5xl font-black text-[#3AACB8] mb-2">
                <CountUp value={n.valor} />
              </div>
              <div className="text-white/55 text-xs font-bold uppercase tracking-widest">{n.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden bg-grain">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E3B876]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <IconBuilding className="w-5 h-5 text-[#E3B876]" />
                <span className="text-[#E3B876] text-xs font-bold uppercase tracking-[0.3em]">Produto Rixxer · Gerido por nós</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6">
                A planta baixa da<br />
                <span className="text-[#E3B876]">sua imobiliária digital.</span>
              </h2>

              <p className="text-white/50 text-base font-light leading-relaxed mb-8 max-w-lg">
                O <strong className="text-white font-semibold">Alicerce</strong> é o sistema white-label que desenvolvemos e mantemos para imobiliárias: um site para anunciar os imóveis e um painel para administrar tudo — imóveis, clientes e corretores. Cada imobiliária recebe a sua própria versão, com a sua marca.
              </p>

              <ul className="flex flex-col gap-3 mb-10">
                {[
                  'Vitrine de imóveis com busca e filtros, no ar em poucos dias',
                  'Painel para cadastrar imóveis, clientes e corretores em tempo real',
                  'Identidade visual 100% personalizada — a marca é da imobiliária, não da nossa',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/60">
                    <span className="w-5 h-5 rounded-full bg-[#E3B876]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-[#E3B876]" strokeWidth="3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="https://imobiliaria.rixxer.com.br"
                external
                className="bg-[#E3B876] hover:bg-[#eec38f] text-[#1A1408] font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-black/20"
              >
                Conhecer o Alicerce ↗
              </MagneticButton>
              <p className="text-white/50 text-xs font-medium mt-4">Um produto Rixxer, gerido de ponta a ponta pela nossa equipe.</p>
            </Reveal>

            <Reveal delay={150}>
              <AlicerceCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
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
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense auto-rows-[190px] gap-5">
            {servicos.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 60}
                className={`${s.span} rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col ${
                  s.destaque ? 'bg-[#0D0D14] p-8 justify-between' : 'bg-white p-7 justify-start'
                }`}
              >
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6B2D8B] to-[#3AACB8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                <div>
                  <s.Icon
                    className={`w-8 h-8 mb-4 ${s.destaque ? 'text-[#3AACB8]' : 'text-[#6B2D8B]'} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className={`font-black uppercase tracking-tight mb-2 transition-colors duration-200 ${
                    s.destaque ? 'text-white group-hover:text-[#B57BD6] text-2xl' : 'text-[#0D0D14] group-hover:text-[#6B2D8B] text-base'
                  }`}>
                    {s.titulo}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed ${s.destaque ? 'text-white/50 max-w-sm' : 'text-gray-500'}`}>
                    {s.desc}
                  </p>
                </div>

                {s.destaque && (
                  <span className="inline-flex items-center gap-2 text-[#3AACB8] text-xs font-bold uppercase tracking-widest mt-6">
                    Saiba mais <IconArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden bg-grain">
        <XPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
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
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projetos.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-7 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl cursor-pointer h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: p.cor + '22', color: p.cor }}>
                      {p.categoria}
                    </span>
                    <IconArrow className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-200 group-hover:translate-x-1 transform" />
                  </div>
                  <h3 className="font-black text-white uppercase tracking-tight text-lg mb-2 group-hover:text-[#3AACB8] transition-colors duration-200">
                    {p.titulo}
                  </h3>
                  <p className="text-white/55 text-sm font-medium leading-relaxed">{p.desc}</p>
                  <div className="mt-5 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: p.cor }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Clientes</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0D0D14] mb-5">
              Quem trabalhou<br />
              <span className="text-[#6B2D8B]">sabe o resultado.</span>
            </h2>
            <GoogleRating className="text-gray-500 text-sm font-medium justify-center" starClassName="text-[#6B2D8B]" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <IconQuote className="w-7 h-7 text-[#3AACB8]/30 mb-4" />
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-1">{d.texto}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6B2D8B] flex items-center justify-center text-white font-black text-sm">
                      {d.inicial}
                    </div>
                    <div>
                      <p className="font-black text-[#0D0D14] text-sm uppercase tracking-wide">{d.nome}</p>
                      <p className="text-gray-500 text-xs font-medium">{d.cargo}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden bg-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D8B]/20 via-transparent to-[#3AACB8]/10 pointer-events-none" />
        <XPattern />
        <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Vamos começar?</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
            Sua ideia merece<br />
            <span className="text-[#B57BD6]">sair do papel.</span>
          </h2>
          <p className="text-white/50 text-lg font-light mb-12 max-w-xl mx-auto">
            Conte para a gente o que você precisa. Respondemos em até 24h com uma proposta personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="/contato"
              className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-5 rounded-lg uppercase tracking-widest text-sm shadow-2xl shadow-purple-900/40"
            >
              Solicitar Proposta
            </MagneticButton>
            <MagneticButton
              href={whatsappLink()}
              external
              className="border border-[#3AACB8]/40 hover:border-[#3AACB8] text-[#3AACB8] font-bold px-10 py-5 rounded-lg uppercase tracking-widest text-sm hover:bg-[#3AACB8]/10"
            >
              WhatsApp
            </MagneticButton>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
