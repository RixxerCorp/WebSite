export default function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rixxer',
    image: 'https://www.rixxer.com.br/rixxer.png',
    url: 'https://www.rixxer.com.br',
    telephone: '+5511926404724',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Santos Dumont, 43 - Centro',
      addressLocality: 'São Lourenço',
      addressRegion: 'MG',
      postalCode: '37470-000',
      addressCountry: 'BR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '17',
      bestRating: '5',
    },
    sameAs: [
      'https://instagram.com/rixxerbr',
      'https://linkedin.com/company/rixxerbr',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
