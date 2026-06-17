'use client';

import { useState } from 'react';

function XPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="xpat5" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="80" stroke="#3AACB8" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#6B2D8B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xpat5)" />
      </svg>
    </div>
  );
}

const servicos = [
  'Desenvolvimento Web',
  'Aplicativo Mobile',
  'Sistema Personalizado',
  'Gestão de Redes Sociais',
  'Design Gráfico / UI',
  'SEO & Performance',
  'Outro',
];

const canais = [
  { emoji: '✉️', titulo: 'E-mail',     valor: 'contato@rixxer.com.br',  href: 'mailto:contato@rixxer.com.br' },
  { emoji: '💬', titulo: 'WhatsApp',   valor: '(11) 92640-4724',        href: 'https://wa.me/5511926404724'  },
  { emoji: '💬', titulo: 'WhatsApp',   valor: '(35) 98426-5018',        href: 'https://wa.me/5535984265018'  },
  { emoji: '🌐', titulo: 'Site',       valor: 'www.rixxer.com.br',      href: 'https://www.rixxer.com.br'   },
  { emoji: '📍', titulo: 'Localização',valor: 'São Lourenço, Minas Gerais, Brasil',   href: 'https://www.google.com/maps/place/Rixxer/@-14.4095261,-51.31668,4z/data=!3m1!4b1!4m6!3m5!1s0x94cb4ba5854cd717:0x5c347bc7a4a4dfc7!8m2!3d-14.4095262!4d-51.31668!16s%2Fg%2F11rw904lh4?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D' },
];

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', servico: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você integra com seu backend, Formspree, EmailJS etc.
    setEnviado(true);
  }

  return (
    <div className="bg-[#0D0D14] text-white">

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <XPattern />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#6B2D8B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#3AACB8]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#3AACB8]" />
            <span className="text-[#3AACB8] text-xs font-bold uppercase tracking-[0.3em]">Fale com a Rixxer</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Vamos construir<br />
            <span className="text-[#6B2D8B]">algo juntos?</span>
          </h1>
          <p className="text-white/50 text-xl font-light max-w-xl leading-relaxed">
            Conta o seu projeto. Respondemos em até 24h com uma proposta personalizada e sem compromisso.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Formulário */}
          <div className="lg:col-span-3">
            {enviado ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">
                <span className="text-6xl block mb-6">🚀</span>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-[#0D0D14] mb-3">Mensagem enviada!</h2>
                <p className="text-gray-500 font-medium">Recebemos seu contato e retornaremos em até 24h. Fique de olho no seu e-mail!</p>
                <button onClick={() => setEnviado(false)}
                  className="mt-8 text-[#6B2D8B] font-bold text-sm uppercase tracking-widest hover:underline">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-[#0D0D14] mb-2">Solicitar Proposta</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nome *</label>
                    <input name="nome" value={form.nome} onChange={handleChange} required
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-[#F5F5F7] border border-gray-200 rounded-xl text-[#0D0D14] text-sm font-medium focus:outline-none focus:border-[#6B2D8B] transition-colors duration-200 placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-[#F5F5F7] border border-gray-200 rounded-xl text-[#0D0D14] text-sm font-medium focus:outline-none focus:border-[#6B2D8B] transition-colors duration-200 placeholder:text-gray-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Empresa / Projeto</label>
                  <input name="empresa" value={form.empresa} onChange={handleChange}
                    placeholder="Nome da empresa ou projeto"
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-gray-200 rounded-xl text-[#0D0D14] text-sm font-medium focus:outline-none focus:border-[#6B2D8B] transition-colors duration-200 placeholder:text-gray-300" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Serviço de Interesse *</label>
                  <select name="servico" value={form.servico} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-gray-200 rounded-xl text-[#0D0D14] text-sm font-medium focus:outline-none focus:border-[#6B2D8B] transition-colors duration-200 appearance-none">
                    <option value="">Selecione um serviço</option>
                    {servicos.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Conte seu projeto *</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={5}
                    placeholder="Descreva o que você precisa, seu prazo e qualquer detalhe relevante..."
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-gray-200 rounded-xl text-[#0D0D14] text-sm font-medium focus:outline-none focus:border-[#6B2D8B] transition-colors duration-200 placeholder:text-gray-300 resize-none" />
                </div>

                <button type="submit"
                  className="w-full bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-purple-900/20 mt-2">
                  Enviar Mensagem →
                </button>
              </form>
            )}
          </div>

          {/* Info lateral */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Canais */}
            <div className="bg-[#0D0D14] rounded-3xl p-8">
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6">Canais de Contato</h3>
              <div className="flex flex-col gap-4">
                {canais.map((c, i) => (
                  <a key={i} href={c.href} target={c.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:border-[#6B2D8B]/50 transition-colors duration-200">
                      {c.emoji}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{c.titulo}</p>
                      <p className="text-white text-sm font-bold group-hover:text-[#3AACB8] transition-colors duration-200">{c.valor}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Horário */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-[#0D0D14] font-black text-sm uppercase tracking-widest mb-5">Horário de Atendimento</h3>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { dia: 'Segunda — Sexta', hora: '09h às 17h' },
                  { dia: 'Sábado',          hora: 'Fechado' },
                  { dia: 'Domingo',         hora: 'Fechado'     },
                ].map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 font-medium">{h.dia}</span>
                    <span className={`font-black text-xs uppercase tracking-wider ${h.hora === 'Fechado' ? 'text-gray-300' : 'text-[#6B2D8B]'}`}>{h.hora}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs font-medium mt-4 leading-relaxed">
                Urgências? Nos acione pelo WhatsApp — respondemos sempre que possível fora do horário comercial.
              </p>
            </div>

            {/* Tempo de resposta */}
            <div className="bg-gradient-to-br from-[#6B2D8B] to-[#1A1F5E] rounded-3xl p-8 text-white">
              <span className="text-4xl block mb-4">⚡</span>
              <h3 className="font-black text-xl uppercase tracking-tight mb-2">Resposta em 24h</h3>
              <p className="text-white/70 text-sm font-medium leading-relaxed">
                Todo contato recebe uma resposta personalizada em até 24 horas úteis. Nada de resposta automática sem nexo.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
