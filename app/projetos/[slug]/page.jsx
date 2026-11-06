import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '../../components/Reveal';
import MagneticButton from '../../components/MagneticButton';
import { IconArrow, IconCheck } from '../../components/icons';
import Galeria from './Galeria';
import { projetos, getProjeto } from '@/lib/projetos';

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProjeto(slug);
  if (!p) return {};
  const titulo = `${p.titulo} — ${p.cliente}`;
  return {
    title: titulo,
    description: p.resumo,
    alternates: { canonical: `/projetos/${p.slug}` },
    openGraph: {
      title: titulo,
      description: p.resumo,
      images: p.capa ? [{ url: p.capa }] : undefined,
    },
  };
}

function Secao({ titulo, children }) {
  return (
    <Reveal className="mb-12">
      <h2 className="text-2xl font-black uppercase tracking-tight text-[#0D0D14] mb-4">{titulo}</h2>
      {children}
    </Reveal>
  );
}

export default async function ProjetoPage({ params }) {
  const { slug } = await params;
  const p = getProjeto(slug);
  if (!p) notFound();

  const relacionados = (p.relacionados ?? []).map((s) => getProjeto(s)).filter(Boolean);
  const i = projetos.findIndex((x) => x.slug === p.slug);
  const anterior = projetos[(i - 1 + projetos.length) % projetos.length];
  const proximo = projetos[(i + 1) % projetos.length];

  return (
    <div className="bg-[#0D0D14] text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-[420px] h-[420px] rounded-full blur-[110px] opacity-25 pointer-events-none"
          style={{ background: p.cor }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
          >
            <span aria-hidden="true">←</span> Todos os projetos
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 text-white">
              {p.categoria}
            </span>
            <span className="text-white/60 text-xs font-bold">{p.ano}</span>
            {p.status && (
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300">
                {p.status}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">{p.titulo}</h1>
          <p className="text-[#3AACB8] text-sm font-bold uppercase tracking-widest mb-8">{p.cliente}</p>
          <p className="text-white/60 text-lg font-light max-w-2xl leading-relaxed mb-8">{p.resumo}</p>

          <div className="flex flex-wrap items-center gap-4">
            {p.link && (
              <MagneticButton
                href={p.link}
                external
                className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-xs shadow-xl shadow-purple-900/40"
              >
                {p.linkRotulo ?? 'Ver projeto no ar'} ↗
              </MagneticButton>
            )}
            <div className="flex flex-wrap gap-2">
              {p.techs.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 text-white/70 rounded-md border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {p.capa && (
              <Reveal className="mb-12">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  <Image
                    src={p.capa}
                    alt={`Capa do projeto ${p.titulo}`}
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            )}

            {p.descricao?.length > 0 && (
              <Secao titulo="Sobre o projeto">
                {p.descricao.map((t, k) => (
                  <p key={k} className="text-gray-600 font-medium leading-relaxed mb-4">{t}</p>
                ))}
              </Secao>
            )}

            {p.desafio && (
              <Secao titulo="O desafio">
                <p className="text-gray-600 font-medium leading-relaxed">{p.desafio}</p>
              </Secao>
            )}

            {p.solucao && (
              <Secao titulo="A solução">
                <p className="text-gray-600 font-medium leading-relaxed">{p.solucao}</p>
              </Secao>
            )}

            {p.entregas?.length > 0 && (
              <Secao titulo="O que entregamos">
                <ul className="space-y-3">
                  {p.entregas.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-gray-600 font-medium leading-relaxed">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#6B2D8B]" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Secao>
            )}

            {p.resultados?.length > 0 && (
              <Secao titulo="Resultados">
                <ul className="space-y-3">
                  {p.resultados.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-gray-600 font-medium leading-relaxed">
                      <IconArrow className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1B7F8B]" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Secao>
            )}

            {relacionados.length > 0 && (
              <Secao titulo="Projetos relacionados">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relacionados.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/projetos/${r.slug}`}
                        className="group block h-full bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                          {r.categoria} · {r.cliente}
                        </span>
                        <p className="font-black text-[#0D0D14] uppercase tracking-tight mt-1 group-hover:text-[#6B2D8B] transition-colors">
                          {r.titulo} <span aria-hidden="true">→</span>
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Secao>
            )}

            {p.imagens?.length > 0 && (
              <Secao titulo="Galeria">
                <Galeria imagens={p.imagens} />
              </Secao>
            )}
          </div>

          {/* Ficha técnica */}
          <aside>
            <Reveal className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 lg:sticky lg:top-28">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-5">Ficha do projeto</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-500 text-xs font-bold uppercase tracking-wider">Cliente</dt>
                  <dd className="text-[#0D0D14] font-bold">{p.cliente}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-bold uppercase tracking-wider">Categoria</dt>
                  <dd className="text-[#0D0D14] font-bold">{p.categoria}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-bold uppercase tracking-wider">Ano</dt>
                  <dd className="text-[#0D0D14] font-bold">{p.ano}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Tecnologias</dt>
                  <dd className="flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold py-3 rounded-lg uppercase tracking-widest text-xs transition-colors"
                >
                  {p.linkRotulo ?? 'Visitar projeto'} ↗
                </a>
              )}
            </Reveal>
          </aside>
        </div>

        {/* Anterior / próximo */}
        <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href={`/projetos/${anterior.slug}`} className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">← Anterior</span>
            <p className="font-black text-[#0D0D14] uppercase tracking-tight mt-1 group-hover:text-[#6B2D8B] transition-colors">{anterior.titulo}</p>
          </Link>
          <Link href={`/projetos/${proximo.slug}`} className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow sm:text-right">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Próximo →</span>
            <p className="font-black text-[#0D0D14] uppercase tracking-tight mt-1 group-hover:text-[#6B2D8B] transition-colors">{proximo.titulo}</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D14] py-20 px-6 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-6">
            Quer um projeto<br />
            <span className="text-[#B57BD6]">como esse?</span>
          </h2>
          <p className="text-white/60 text-lg font-light mb-8">
            Conte o que você precisa e receba uma proposta em até 24h.
          </p>
          <MagneticButton
            href="/contato"
            className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-purple-900/40"
          >
            Solicitar Proposta
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
