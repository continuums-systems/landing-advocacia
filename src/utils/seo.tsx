const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Silva & Associados Advocacia',
  description:
    'Escritório de advocacia especializado em soluções jurídicas com atendimento personalizado, ética e excelência.',
  url: 'https://advocaciasilvaassociados.com.br',
  telephone: '+551130001234',
  email: 'contato@advocaciasilva.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1000',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-100',
    addressCountry: 'BR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
  sameAs: ['https://linkedin.com/in/advocaciasilva', 'https://instagram.com/advocaciasilva'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://advocaciasilvaassociados.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Sobre' },
    { '@type': 'ListItem', position: 3, name: 'Áreas de Atuação' },
    { '@type': 'ListItem', position: 4, name: 'Contato' },
  ],
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
