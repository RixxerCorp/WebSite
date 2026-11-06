'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Galeria de imagens do projeto: miniaturas que ampliam em uma janela (dialog nativo).
// Esc fecha, setas do teclado navegam, clicar fora fecha.
export default function Galeria({ imagens }) {
  const dialogRef = useRef(null);
  const [atual, setAtual] = useState(0);
  const total = imagens.length;

  function abrir(i) {
    setAtual(i);
    dialogRef.current?.showModal();
  }
  function fechar() {
    dialogRef.current?.close();
  }
  const ir = (delta) => setAtual((a) => (a + delta + total) % total);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e) => {
      if (!dlg.open) return;
      if (e.key === 'ArrowRight') setAtual((a) => (a + 1) % total);
      if (e.key === 'ArrowLeft') setAtual((a) => (a - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  const img = imagens[atual];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {imagens.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => abrir(i)}
            aria-label={`Ampliar imagem: ${m.alt}`}
            className={`group relative ${m.retrato ? 'aspect-[3/4]' : 'aspect-[4/3]'} rounded-xl overflow-hidden border border-gray-200 bg-white cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2D8B]`}
          >
            <Image
              src={m.src}
              alt={m.alt}
              fill
              sizes="(min-width: 640px) 320px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Imagem ampliada"
        onClick={(e) => e.target === e.currentTarget && fechar()}
        className="m-auto w-full max-w-none bg-transparent p-0 backdrop:bg-black/85 open:flex open:items-center open:justify-center"
      >
        <div className="relative flex flex-col items-center px-4 py-6" onClick={(e) => e.stopPropagation()}>
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={1600}
            height={1200}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto', maxWidth: 'min(94vw, 1400px)', maxHeight: '80vh' }}
            className="rounded-lg shadow-2xl"
          />
          <p className="mt-3 text-white/80 text-sm max-w-2xl text-center">{img.alt}</p>
          <p className="mt-1 text-white/50 text-xs font-bold tracking-widest">
            {atual + 1} / {total}
          </p>

          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl leading-none"
          >
            ×
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => ir(-1)}
                aria-label="Imagem anterior"
                className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => ir(1)}
                aria-label="Próxima imagem"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
              >
                ›
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
