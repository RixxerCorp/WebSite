'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',         label: 'Início'   },
  { href: '/servicos', label: 'Serviços' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/sobre',    label: 'Sobre'    },
];

export default function Layout({ children }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D14]/95 backdrop-blur-md shadow-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center">
            <Image src="/rixxer.png" alt="Rixxer" width={130} height={40} className="object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200
                  ${pathname === l.href ? 'text-[#3AACB8]' : 'text-white/70 hover:text-white'}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contato"
              className="ml-2 bg-[#6B2D8B] hover:bg-[#7B3FA0] text-white font-bold text-sm px-6 py-2.5 rounded-lg uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-900/30">
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden text-white p-2">
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${menuAberto ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${menuAberto ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-200 ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuAberto && (
          <div className="md:hidden bg-[#0D0D14]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuAberto(false)}
                className={`text-sm font-bold uppercase tracking-widest ${pathname === l.href ? 'text-[#3AACB8]' : 'text-white/70'}`}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── Conteúdo ───────────────────────────────────────────────────────── */}
      <main>{children}</main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0D0D14] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            <div className="md:col-span-2">
              <Image src="/rixxer.png" alt="Rixxer" width={140} height={42} className="object-contain mb-4" />
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Transformamos ideias em soluções digitais que geram resultado. Sites, apps, sistemas, design e gestão de redes sociais.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/rixxerbr', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/company/rixxerbr', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#6B2D8B] border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Navegação</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/50 hover:text-[#3AACB8] text-sm font-medium transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contato</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <li><a href="mailto:contato@rixxer.com.br" className="hover:text-[#3AACB8] transition-colors duration-200">contato@rixxer.com.br</a></li>
                <li><a href="https://wa.me/5511926404724" target="_blank" rel="noopener noreferrer" className="hover:text-[#3AACB8] transition-colors duration-200">WhatsApp</a></li>
                <li><a href="https://www.rixxer.com.br" className="hover:text-[#3AACB8] transition-colors duration-200">www.rixxer.com.br</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
            <span>© {new Date().getFullYear()} Rixxer. Todos os direitos reservados.</span>
            <span>Feito com 💜 pela Rixxer</span>
          </div>
        </div>
      </footer>
    </>
  );
}
