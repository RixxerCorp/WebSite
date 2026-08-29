const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Rixxer/@-14.4095261,-51.31668,4z/data=!3m1!4b1!4m6!3m5!1s0x94cb4ba5854cd717:0x5c347bc7a4a4dfc7!8m2!3d-14.4095262!4d-51.31668!16s%2Fg%2F11rw904lh4?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D';

export default function GoogleRating({ className = '', starClassName = 'text-[#3AACB8]' }) {
  return (
    <a
      href={GOOGLE_MAPS_URL}
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
      <span className="font-bold">5,0</span>
      <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
        · 17 avaliações no Google
      </span>
    </a>
  );
}
