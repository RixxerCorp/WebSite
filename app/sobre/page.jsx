import Link from 'next/link';
import Image from 'next/image';

function XPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="xpat4" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="80" stroke="#3AACB8" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#6B2D8B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xpat4)" />
      </svg>
    </div>
  );
}

const valores = [
  { emoji: '🎯', titulo: 'Foco no Resultado',  desc: 'Cada linha de código, cada pixel e cada post existe por um motivo: gerar resultado real para o cliente.' },
  { emoji: '🤝', titulo: 'Transparência Total', desc: 'Nada de esconder prazo ou custo. Você sabe o que está sendo feito, quando e quanto custa, sempre.' },
  { emoji: '🚀', titulo: 'Velocidade com Qualidade', desc: 'Processos ágeis que entregam rápido sem cortar atalhos na qualidade técnica e no design.' },
  { emoji: '💡', titulo: 'Inovação Contínua',   desc: 'Estudamos as últimas tecnologias para que você não precise: chegamos sempre com o que há de melhor.' },
];

const tecnologias = [
  { categoria: 'Frontend',  items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { categoria: 'Mobile',    items: ['React Native', 'Flutter', 'Expo', 'Firebase', 'App Store / Play'] },
  { categoria: 'Backend',   items: ['Node.js', 'Laravel', 'Python/FastAPI', 'PostgreSQL', 'Redis'] },
  { categoria: 'Design',    items: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'After Effects'] },
  { categoria: 'Cloud',     items: ['Vercel', 'AWS', 'Google Cloud', 'Docker', 'CI/CD'] },
  { categoria: 'Marketing', items: ['Meta Ads', 'Google Ads', 'SEO', 'Analytics', 'HubSpot'] },
];

const equipe = [
  { nome: 'Hebert Richard',   cargo: 'CEO & Dev Lead',       inicial: 'HR', cor: '#6B2D8B' },
  { nome: 'Lucas Vasconcelos',    cargo: 'Lead Designer',         inicial: 'LV', cor: '#3AACB8' },
  { nome: 'Mariana Albuquerque',   cargo: 'Full Stack Developer',  inicial: 'MA', cor: '#1A1F5E' },
  { nome: 'Thiago Medeiros',  cargo: 'Social Media Manager',  inicial: 'TM', cor: '#6B2D8B' },
];

export default function SobrePage() {
  return (
    <div className="bg-[#0D0D14] text-white">

      <section className="relative pt-36 pb-24 overflow-hidden">
        <XPattern />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#6B2D8B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-[#3AACB8]" />
              <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Quem somos</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Tecnologia<br />
              <span className="text-[#6B2D8B]">com propósito.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              A Rixxer nasceu da convicção de que tecnologia de ponta não precisa ser privilégio de grandes empresas. Somos uma software house fundada por desenvolvedores que acreditam que o código certo transforma negócios.
            </p>
            <p className="text-white/40 text-base font-light leading-relaxed">
              Desde o primeiro projeto, nosso foco nunca foi apenas entregar software. Foi entender o problema real, propor a solução certa e executar com excelência — independente do tamanho do cliente.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-[#6B2D8B]/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-white/3 rounded-3xl border border-white/10 flex items-center justify-center p-8">
                <Image src="/rixxer.png" alt="Rixxer" fill className="object-contain p-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { valor: '2016',  label: 'Fundada em'           },
            { valor: '400+',   label: 'Projetos Entregues'   },
            { valor: '380+',   label: 'Clientes Satisfeitos' },
            { valor: '4',     label: 'Profissionais'        },
          ].map((n, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-[#3AACB8] mb-2">{n.valor}</div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Nossa cultura</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0D0D14]">
              O que guia<br />
              <span className="text-[#6B2D8B]">cada decisão.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-4xl block mb-4">{v.emoji}</span>
                <h3 className="font-black text-[#0D0D14] uppercase tracking-tight text-sm mb-2 group-hover:text-[#6B2D8B] transition-colors duration-200">
                  {v.titulo}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden">
        <XPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Time</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
              As pessoas por<br />
              <span className="text-[#3AACB8]">trás do código.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((m, i) => (
              <div key={i}
                className="bg-white/3 rounded-2xl border border-white/5 p-8 text-center hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-5 shadow-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: m.cor }}>
                  {m.inicial}
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-base mb-1 group-hover:text-[#3AACB8] transition-colors duration-200">
                  {m.nome}
                </h3>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest">{m.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Stack</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0D0D14]">
              Tecnologias que<br />
              <span className="text-[#6B2D8B]">dominamos.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnologias.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-black text-[#0D0D14] uppercase tracking-widest text-xs mb-5 group-hover:text-[#6B2D8B] transition-colors duration-200 border-b border-gray-100 pb-3">
                  {t.categoria}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item, j) => (
                    <span key={j} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#F5F5F7] text-gray-500 rounded-lg border border-gray-100 hover:border-[#6B2D8B] hover:text-[#6B2D8B] transition-colors duration-150 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D8B]/15 to-[#3AACB8]/5 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Quer fazer parte<br />
            <span className="text-[#6B2D8B]">da nossa história?</span>
          </h2>
          <p className="text-white/50 text-base font-light mb-10">
            Seja como cliente, parceiro ou parte da equipe — adoramos conhecer pessoas que querem crescer junto.
          </p>
          <Link href="/contato"
            className="inline-block bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-purple-900/40">
            Fale com a Gente
          </Link>
        </div>
      </section>

    </div>
  );
}
