export default function VitrineCard() {
  const produtos = [
    { nome: 'Produto de exemplo', preco: 'R$ 89,90' },
    { nome: 'Produto de exemplo', preco: 'R$ 129,00' },
    { nome: 'Produto de exemplo', preco: 'R$ 59,90' },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-gray-500">sualoja.com.br</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-black uppercase tracking-tight text-[#0D0D14]">Sua Loja</span>
          <span className="rounded-full bg-[#3AACB8]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2A8791]">
            Pix com desconto
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {produtos.map((p, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-2.5">
              <div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-[#6B2D8B]/15 to-[#3AACB8]/20" />
              <p className="text-[11px] font-semibold leading-tight text-gray-700">{p.nome}</p>
              <p className="mt-0.5 text-xs font-black text-[#6B2D8B]">{p.preco}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {['Frete pelo CEP', 'NF-e automática', 'Painel admin'].map((t) => (
            <div key={t} className="rounded-lg bg-[#0D0D14] px-2 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
