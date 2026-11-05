export default function AlicerceCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12121b] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/50">imobiliaria.rixxer.com.br</span>
      </div>

      <div
        className="relative h-72 sm:h-80"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(227,184,118,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(227,184,118,0.14) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D14]" />

        <div className="absolute left-5 top-7 w-[64%] rounded-xl border border-[#E3B876]/30 bg-[#0D0D14]/85 p-4 shadow-xl backdrop-blur-sm sm:left-8 sm:top-9">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3AACB8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3AACB8]">Ao vivo</span>
          </div>
          <p className="mb-1 text-sm font-black uppercase tracking-tight text-white">Site</p>
          <p className="text-xs text-white/55">Vitrine de imóveis</p>
        </div>

        <div className="absolute bottom-7 right-5 w-[64%] rounded-xl border border-[#E3B876]/30 bg-[#0D0D14]/85 p-4 shadow-xl backdrop-blur-sm sm:bottom-9 sm:right-8">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3AACB8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3AACB8]">Ao vivo</span>
          </div>
          <p className="mb-1 text-sm font-black uppercase tracking-tight text-white">Painel Admin</p>
          <p className="text-xs text-white/55">Imóveis, clientes e corretores</p>
        </div>
      </div>
    </div>
  );
}
