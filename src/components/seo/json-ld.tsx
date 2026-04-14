export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Репетитор",
    alternateName: "Repetitor",
    url: "https://repetitor.tj",
    logo: "https://repetitor.tj/logo.png",
    description:
      "Ведущий учебный центр Таджикистана по подготовке к вступительным экзаменам. 20+ лет опыта, 10 000+ выпускников.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Рудаки 120",
      addressLocality: "Душанбе",
      addressCountry: "TJ",
    },
    telephone: "+992900123456",
    email: "info@repetitor.tj",
    sameAs: [
      "https://t.me/repetitor_tj",
      "https://instagram.com/repetitor_tj",
    ],
    foundingDate: "2003",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
  };

  // JSON-LD is static hardcoded data (no user input), safe to serialize
  const jsonString = JSON.stringify(jsonLd);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
