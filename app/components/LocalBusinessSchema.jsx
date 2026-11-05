import { SITE } from '@/lib/site';

export default function LocalBusinessSchema({ rating }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.nome,
    image: `${SITE.url}/rixxer.png`,
    url: SITE.url,
    telephone: SITE.whatsapps.map((w) => `+${w.numero}`),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.endereco.rua,
      addressLocality: SITE.endereco.cidade,
      addressRegion: SITE.endereco.uf,
      postalCode: SITE.endereco.cep,
      addressCountry: 'BR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SITE.horario.dias,
      opens: SITE.horario.abre,
      closes: SITE.horario.fecha,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.nota.toFixed(1),
      reviewCount: String(rating.quantidade),
      bestRating: '5',
    },
    sameAs: [SITE.redes.instagram, SITE.redes.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
