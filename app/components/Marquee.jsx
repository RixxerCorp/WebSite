export default function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 py-2">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-xl font-black uppercase tracking-wide text-white/25 md:text-2xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
