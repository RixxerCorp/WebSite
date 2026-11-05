import { SITE } from '@/lib/site';

export default function GoogleRating({ className = '', starClassName = 'text-[#3AACB8]' }) {
  return (
    <a
      href={SITE.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 group ${className}`}
    >
      <span className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-3.5 h-3.5 fill-current ${starClassName}`} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </span>
      <span className="font-bold">{SITE.avaliacao.notaTexto}</span>
      <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
        · {SITE.avaliacao.quantidade} avaliações no Google
      </span>
    </a>
  );
}
