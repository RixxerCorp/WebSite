'use client';

import { useState } from 'react';
import Link from 'next/link';

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

const projetos = [
  {
    titulo: 'Portal Imobiliário',
    categoria: 'Web',
    cliente: 'Alexandria Negócios Imobiliários',
    ano: '2026',
    cor: '#6B2D8B',
    desc: 'Site institucional completo com área restrita para corretores, com cadastro de imóveis para venda e locação, cadastro de clientes e cadastro de imóveis favoritos. O site ainda conta com um login para o próprio cliente, para favoritar imóveis e enviar seus próprios imóveis para venda.',
    techs: ['Next.js', 'Tailwind', 'Vercel', 'PostgreSQL'],
    destaque: true,
  },
  {
    titulo: 'Site para Hamburgueria',
    categoria: 'Web',
    cliente: 'The Seventies Burgers',
    ano: '2026',
    cor: '#3AACB8',
    desc: 'Site completo para divulgação do local, além de um sistema de delivery integrado com WhatsApp, onde o cliente pode escolher os itens do cardápio, personalizar seu pedido e enviar diretamente para o WhatsApp da hamburgueria.',
    techs: ['Next.js', 'Tailwind', 'PostgreSQL', 'Stripe'],
    destaque: true,
  },
  {
    titulo: 'Revista Impressa',
    categoria: 'Design',
    cliente: 'VIVA São Lourenço',
    ano: '2026',
    cor: '#1A1F5E',
    desc: 'Revista Impressa com 92 páginas, incluindo artigos, entrevistas, fotos e anúncios de comércios locais. Projeto gráfico completo, diagramação, revisão e arte final para impressão.',
    techs: ['InDesign', 'Illustrator', 'Photoshop'],
    destaque: true,
  },
  {
    titulo: 'Banner para Impressão',
    categoria: 'Design',
    cliente: 'Espetinho da Vila',
    ano: '2026',
    cor: '#6B2D8B',
    desc: 'Criação de material para divulgação para a Copa do Mundo, fechamento de arquivo e acompanhamento para impressão em lona.',
    techs: ['InDesign', 'Illustrator', 'Photoshop'],
    destaque: true,
  },
  {
    titulo: 'Gestão de Redes - Lavanderia Mundial',
    categoria: 'Social',
    cliente: 'Lavanderia Mundial',
    ano: 'Desde 2018',
    cor: '#3AACB8',
    desc: 'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    destaque: true,
  },
  {
    titulo: 'Gestão de Redes — The Seventies Burgers',
    categoria: 'Social',
    cliente: 'The Seventies Burgers',
    ano: 'desde 2025',
    cor: '#1A1F5E',
    desc: 'Gestão mensal de Instagram e Facebook com a criação de conteúdo, planejamento estratégico, monitoramento de métricas e campanhas de anúncios.',
    techs: ['Meta Business', 'Photoshop', 'Edits', 'Google Meu Negócio'],
    destaque: true,
  },
];

export default function ProjetosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const filtrados = categoriaAtiva === 'Todos'
    ? projetos
    : projetos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <div className="bg-[#0D0D14] text-white">

      <section className="relative pt-36 pb-24 overflow-hidden">
        <XPattern />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#3AACB8]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#3AACB8]" />
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Portfólio</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Projetos que<br />
            <span className="text-[#3AACB8]">falam por si.</span>
          </h1>
          <p className="text-white/50 text-xl font-light max-w-xl leading-relaxed">
            São mais de 400 projetos entregues para clientes de diferentes segmentos. Aqui estão alguns dos nossos favoritos.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F7] pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {categorias.map((cat) => (
              <button key={cat} onClick={() => setCategoriaAtiva(cat)}
                className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-200
                  ${categoriaAtiva === cat
                    ? 'bg-[#6B2D8B] text-white shadow-lg shadow-purple-900/20'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#6B2D8B] hover:text-[#6B2D8B]'
                  }`}>
                {cat}
              </button>
            ))}
            <span className="ml-auto text-gray-400 text-sm font-medium self-center">
              {filtrados.length} {filtrados.length === 1 ? 'projeto' : 'projetos'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            {filtrados.map((p, i) => (
              <div key={i}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col
                  ${p.destaque ? 'md:col-span-1' : ''}`}>

                <div className="h-3 w-full" style={{ background: `linear-gradient(to right, ${p.cor}, #3AACB8)` }} />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: p.cor + '15', color: p.cor }}>
                      {p.categoria}
                    </span>
                    <span className="text-gray-300 text-xs font-bold">{p.ano}</span>
                  </div>

                  <h3 className="font-black text-[#0D0D14] uppercase tracking-tight text-xl mb-1 group-hover:text-[#6B2D8B] transition-colors duration-200">
                    {p.titulo}
                  </h3>
                  <p className="text-[#3AACB8] text-xs font-bold uppercase tracking-widest mb-3">{p.cliente}</p>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed flex-grow">{p.desc}</p>

                  <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                    {p.techs.map((t, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-50 text-gray-400 rounded-md border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D14] py-24 relative overflow-hidden">
        <XPattern />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Próximo projeto?</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white mb-6">
            O seu pode ser<br />
            <span className="text-[#6B2D8B]">o próximo aqui.</span>
          </h2>
          <p className="text-white/50 text-lg font-light mb-10 max-w-md mx-auto">
            Vamos construir algo juntos. Fale com a gente e receba uma proposta em até 24h.
          </p>
          <Link href="/contato"
            className="inline-block bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-purple-900/40">
            Solicitar Proposta
          </Link>
        </div>
      </section>

    </div>
  );
}
