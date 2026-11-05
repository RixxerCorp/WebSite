'use client';

import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

const linhas = [
  { prefix: '$', text: 'rixxer init seu-projeto', color: 'text-white/70' },
  { prefix: '✓', text: 'design system carregado', color: 'text-[#3AACB8]' },
  { prefix: '✓', text: 'performance otimizada', color: 'text-[#3AACB8]' },
  { prefix: '✓', text: 'pronto para o próximo nível', color: 'text-[#9A5CC0]' },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= linhas.length) return;
    if (prefersReducedMotion()) {
      const t = setTimeout(() => setVisibleLines(linhas.length), 0);
      return () => clearTimeout(t);
    }
    const current = linhas[visibleLines].text;

    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 32);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 450);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  const typing = visibleLines < linhas.length ? linhas[visibleLines] : null;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/50">rixxer — zsh</span>
      </div>
      <div className="min-h-[168px] space-y-2.5 p-5 font-mono text-sm">
        {linhas.slice(0, visibleLines).map((l, i) => (
          <div key={i} className={l.color}>
            <span className="mr-2 text-white/50">{l.prefix}</span>
            {l.text}
          </div>
        ))}
        {typing && (
          <div className={typing.color}>
            <span className="mr-2 text-white/50">{typing.prefix}</span>
            {typing.text.slice(0, charCount)}
            <span className="ml-0.5 inline-block h-4 w-2 align-middle bg-white/60 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
