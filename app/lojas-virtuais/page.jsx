import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import VitrineCard from '../components/VitrineCard';
import { IconCheck, IconArrow, IconRocket } from '../components/icons';
import { whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Vitrine: loja virtual por assinatura',
  description:
    'Loja virtual completa por assinatura, com Pix e cartão, NF-e, frete e painel de gestão. R$ 400 de implantação e R$ 150 por mês, sem taxa por venda da plataforma.',
  alternates: { canonical: '/lojas-virtuais' },
};

// Preencha quando a loja de demonstração estiver no ar (ex.: 'https://lojas.rixxer.com.br').
const URL_DEMO = null;

const MENSAGEM = 'Olá! Tenho interesse na Vitrine, a loja virtual por assinatura da Rixxer.';
const LINK_WHATSAPP = `${whatsappLink()}?text=${encodeURIComponent(MENSAGEM)}`;

const recursos = [
  { titulo: 'Vitrine e catálogo', desc: 'Página inicial, catálogo com busca, filtros e ordenação, página de produto, blog e páginas institucionais.' },
  { titulo: 'Compra completa', desc: 'Carrinho, cadastro de clientes, cupons de desconto e frete calculado pelo CEP.' },
  { titulo: 'Pix e cartão', desc: 'Pagamento dentro do próprio site, com desconto configurável no Pix e o dinheiro caindo direto na sua conta.' },
  { titulo: 'Nota fiscal e frete', desc: 'NF-e automática depois do pagamento, cotação e etiqueta pelo Melhor Envio, motoboy e retirada na loja.' },
  { titulo: 'Estoque e avisos', desc: 'Baixa automática na venda e alerta de estoque mínimo por e-mail ou Telegram.' },
  { titulo: 'Painel e venda presencial', desc: 'Pedidos, produtos, cupons, clientes, relatório de vendas e frente de caixa (PDV) no mesmo estoque.' },
];

const passos = [
  { titulo: 'Implantação', desc: 'Instalamos a loja numa estrutura exclusiva para o seu negócio, com a sua marca, o seu domínio e as suas contas.' },
  { titulo: 'Cadastro', desc: 'Você cadastra categorias e produtos pelo painel ou envia uma planilha para importar.' },
  { titulo: 'Você vende', desc: 'Opera tudo pelo painel. A mensalidade mantém a loja no ar, atualizada e segura.' },
  { titulo: 'Depois de 12 meses', desc: 'Renove o aluguel ou negocie a compra do sistema, com condições próprias para cada caso.' },
];

const personalizado = [
  'Logotipo, cores, textos, fotos e domínio da sua loja',
  'CNPJ, inscrição estadual e endereço usados nas notas e nas etiquetas',
  'Contas próprias de pagamento, Bling, Melhor Envio e e-mail',
  'Regras da loja: entrega, frete grátis, desconto no Pix, cupons e categorias',
];

const perguntas = [
  { p: 'Pago alguma taxa sobre as vendas?', r: 'Não pagamos nem cobramos taxa por venda da plataforma. Você paga a mensalidade e as taxas dos serviços que usa (gateway de pagamento, Melhor Envio, Bling, domínio e e-mail), nas suas próprias contas.' },
  { p: 'O que acontece depois dos 12 meses?', r: 'Você escolhe entre renovar o aluguel ou negociar a compra do sistema. A compra tem condições combinadas à parte.' },
  { p: 'A loja é minha?', r: 'O código é licenciado para uso enquanto o contrato estiver ativo e não é transferido. A marca, os produtos, as contas de pagamento e o domínio são seus.' },
  { p: 'Quanto tempo leva para a loja entrar no ar?', r: 'Depende de logotipo, produtos e contas de integração estarem prontos. Combinamos o prazo na contratação.' },
  { p: 'Serve para qualquer tipo de produto?', r: 'Serve para o comércio de produtos físicos. Recursos de segmento, como verificação de maioridade, são mantidos, removidos ou adaptados na implantação.' },
  { p: 'É seguro?', r: 'Os valores são calculados no servidor, os dados do cartão ficam com o gateway de pagamento e há mais de 260 testes automatizados. A revisão foi feita por análise de código e testes, não por teste de invasão independente.' },
];

export default function LojasVirtuais() {
  return (
    <div className="bg-[#0D0D14] text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#6B2D8B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-[#3AACB8]" />
              <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Produto Rixxer · Vitrine</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                A vitrine da<br />
                <span className="text-[#B57BD6]">sua loja, no ar.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-white/50 text-lg font-light max-w-xl leading-relaxed mb-8">
                Loja virtual completa por assinatura: você não compra o sistema, paga uma mensalidade e vende. Pagamento, nota fiscal, frete e painel já vêm prontos e com a sua marca.
              </p>
            </Reveal>
            <Reveal delay={220} className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href={LINK_WHATSAPP}
                external
                className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-purple-900/20"
              >
                Quero a minha Vitrine
              </MagneticButton>
              {URL_DEMO && (
                <MagneticButton
                  href={URL_DEMO}
                  external
                  className="border-2 border-white/20 hover:border-[#3AACB8] text-white font-bold px-8 py-3.5 rounded-lg uppercase tracking-widest text-sm"
                >
                  Ver loja de exemplo ↗
                </MagneticButton>
              )}
            </Reveal>
          </div>
          <Reveal delay={150}>
            <VitrineCard />
          </Reveal>
        </div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 L1440 60 L1440 0 Q720 60 0 0 Z" fill="#F5F5F7" />
          </svg>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">O que você recebe</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0D0D14] leading-tight">
              Tudo para vender<br />
              <span className="text-[#6B2D8B]">pela internet.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recursos.map((r, i) => (
              <Reveal key={r.titulo} delay={i * 60} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7">
                <span className="w-9 h-9 rounded-full bg-[#6B2D8B]/10 flex items-center justify-center mb-4">
                  <IconCheck className="w-4 h-4 text-[#6B2D8B]" strokeWidth="3" />
                </span>
                <h3 className="font-black uppercase tracking-tight text-[#0D0D14] mb-2">{r.titulo}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="bg-[#0D0D14] py-24 relative overflow-hidden bg-grain">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Simples e previsível</h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-8 text-center">
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Implantação</p>
              <p className="text-5xl font-black text-white">R$ 400</p>
              <p className="text-white/50 text-sm font-medium mt-3">Valor único. Inclui marca, domínio e configuração das integrações.</p>
            </div>
            <div className="bg-white/[0.03] rounded-2xl border border-[#6B2D8B]/50 p-8 text-center">
              <p className="text-[#B57BD6] text-xs font-bold uppercase tracking-widest mb-3">Mensalidade</p>
              <p className="text-5xl font-black text-white">R$ 150<span className="text-xl text-white/50">/mês</span></p>
              <p className="text-white/50 text-sm font-medium mt-3">Hospedagem, atualizações, correções de segurança e suporte.</p>
            </div>
          </Reveal>
          <p className="text-white/50 text-sm font-medium text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Contrato de 12 meses (R$ 2.200 no primeiro ano). Sem taxa por venda da plataforma. As taxas do gateway de pagamento, do Melhor Envio, do Bling, do domínio e do e-mail ficam nas suas contas.
          </p>
        </div>
      </section>

      {/* Como funciona + personalização */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Como funciona</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0D0D14]">Do contrato à primeira venda</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {passos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 80} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="w-10 h-10 rounded-xl bg-[#6B2D8B]/10 flex items-center justify-center font-black text-[#6B2D8B] text-sm mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-black uppercase tracking-tight text-[#0D0D14] text-base mb-2">{p.titulo}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-[#0D0D14] rounded-3xl p-10 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <IconRocket className="w-5 h-5 text-[#3AACB8]" />
              <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">A sua cara</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Cada cliente tem a sua própria instalação
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {personalizado.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-white/60">
                  <span className="w-5 h-5 rounded-full bg-[#3AACB8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck className="w-3 h-3 text-[#3AACB8]" strokeWidth="3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Perguntas */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Dúvidas</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0D0D14]">Perguntas frequentes</h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {perguntas.map((q) => (
              <details key={q.p} className="group rounded-xl border border-gray-200 bg-[#F5F5F7] p-5 open:bg-white open:shadow-md transition-all">
                <summary className="cursor-pointer list-none font-bold text-[#0D0D14] flex items-center justify-between gap-4">
                  {q.p}
                  <IconArrow className="w-4 h-4 text-[#6B2D8B] flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-500 text-sm font-medium leading-relaxed">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="bg-[#F5F5F7] py-20 px-6 text-center">
        <span className="text-[#6B2D8B] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Vamos começar?</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0D0D14] mb-6">
          Abra a sua loja<br />
          <span className="text-[#6B2D8B]">sem complicação.</span>
        </h2>
        <p className="text-gray-500 font-medium text-base mb-10 max-w-md mx-auto">
          Fale com a gente pelo WhatsApp e receba a proposta para o seu negócio.
        </p>
        <MagneticButton
          href={LINK_WHATSAPP}
          external
          className="bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-purple-900/20"
        >
          Falar no WhatsApp
        </MagneticButton>
      </Reveal>
    </div>
  );
}
