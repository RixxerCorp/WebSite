'use client';

import { useRef, useState } from 'react';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import MagneticButton from '../components/MagneticButton';
import { prefersReducedMotion } from '@/lib/motion';

function XPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="xpat3" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="80" stroke="#3AACB8" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#6B2D8B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xpat3)" />
      </svg>
    </div>
  );
}

const categorias = ['Todos', 'Web', 'Mobile', 'Sistema', 'Design', 'Social'];
const POR_PAGINA = 9;

export default function ProjetosClient({ projetos }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const [pagina, setPagina] = useState(1);
  const topoRef = useRef(null);

  const filtrados = categoriaAtiva === 'Todos'
    ? projetos
    : projetos.filter((p) => p.categoria === categoriaAtiva);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const inicio = (paginaAtual - 1) * POR_PAGINA;
  const visiveis = filtrados.slice(inicio, inicio + POR_PAGINA);

  function trocarCategoria(cat) {
    setCategoriaAtiva(cat);
    setPagina(1);
  }
  function irParaPagina(n) {
    setPagina(n);
    topoRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <div className="bg-[#0D0D14] text-white">

      <section className="relative pt-36 pb-24 overflow-hidden">
        <XPattern />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#3AACB8]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#3AACB8]" />
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Portfólio</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Projetos que<br />
              <span className="text-[#3AACB8]">falam por si.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-white/50 text-xl font-light max-w-xl leading-relaxed">
              Sites, sistemas, design, impressos e gestão de redes sociais para clientes de diferentes segmentos. Veja alguns dos nossos trabalhos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F5F7] pt-16 pb-0">
        <div ref={topoRef} className="max-w-7xl mx-auto px-6 scroll-mt-24">
          <div className="flex flex-wrap gap-3 mb-12">
            {categorias.map((cat) => (
              <button key={cat} onClick={() => trocarCategoria(cat)}
                className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-200
                  ${categoriaAtiva === cat
                    ? 'bg-[#6B2D8B] text-white shadow-lg shadow-purple-900/20'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#6B2D8B] hover:text-[#6B2D8B]'
                  }`}>
                {cat}
              </button>
            ))}
            <span className="ml-auto text-gray-500 text-sm font-medium self-center">
              {filtrados.length} {filtrados.length === 1 ? 'projeto' : 'projetos'}
              {totalPaginas > 1 && ` · página ${paginaAtual} de ${totalPaginas}`}
            </span>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${totalPaginas > 1 ? 'pb-12' : 'pb-24'}`}>
            {visiveis.map((p, i) => (
              <Reveal key={`${categoriaAtiva}-${paginaAtual}-${p.slug}`} delay={i * 60}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full relative`}>

                <div className="h-3 w-full" style={{ background: `linear-gradient(to right, ${p.cor}, #3AACB8)` }} />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: p.cor + '15', color: p.cor }}>
                      {p.categoria}
                    </span>
                    <span className="text-gray-500 text-xs font-bold">{p.ano}</span>
                  </div>

                  <h3 className="font-black text-[#0D0D14] uppercase tracking-tight text-xl mb-1 group-hover:text-[#6B2D8B] transition-colors duration-200">
                    <Link href={`/projetos/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
                      {p.titulo}
                    </Link>
                  </h3>
                  <p className="text-[#1B7F8B] text-xs font-bold uppercase tracking-widest mb-3">{p.cliente}</p>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed flex-grow">{p.resumo}</p>

                  <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                    {p.techs.map((t, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-2 text-[#6B2D8B] text-xs font-bold uppercase tracking-widest">
                    Ver projeto <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    {p.status ? (
                      <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700">{p.status}</span>
                    ) : (
                      p.noAr && <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">No ar</span>
                    )}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {totalPaginas > 1 && (
            <nav aria-label="Paginação dos projetos" className="pb-24 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => irParaPagina(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest bg-white text-gray-500 border border-gray-200 hover:border-[#6B2D8B] hover:text-[#6B2D8B] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                ← Anterior
              </button>
              {Array.from({ length: totalPaginas }, (_, k) => k + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => irParaPagina(n)}
                  aria-label={`Página ${n}`}
                  aria-current={n === paginaAtual ? 'page' : undefined}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors ${
                    n === paginaAtual
                      ? 'bg-[#6B2D8B] text-white shadow-lg shadow-purple-900/20'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-[#6B2D8B] hover:text-[#6B2D8B]'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => irParaPagina(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest bg-white text-gray-500 border border-gray-200 hover:border-[#6B2D8B] hover:text-[#6B2D8B] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Próxima →
              </button>
            </nav>
          )}
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden bg-grain">
        <XPattern />
        <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#B57BD6] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Próximo projeto?</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white mb-6">
            O seu pode ser<br />
            <span className="text-[#B57BD6]">o próximo aqui.</span>
          </h2>
          <p className="text-white/50 text-lg font-light mb-10 max-w-md mx-auto">
            Vamos construir algo juntos. Fale com a gente e receba uma proposta em até 24h.
          </p>
          <MagneticButton href="/contato"
            className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-purple-900/40">
            Solicitar Proposta
          </MagneticButton>
        </Reveal>
      </section>

    </div>
  );
}
