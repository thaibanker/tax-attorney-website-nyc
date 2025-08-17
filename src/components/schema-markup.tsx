import Script from "next/script";

interface SchemaMarkupProps {
  type: "bank-levy" | "emergency-legal" | "local-business";
  pageData?: {
    title?: string;
    description?: string;
    url?: string;
    location?: string;
  };
}

export function SchemaMarkup({ type, pageData }: SchemaMarkupProps) {
  const getSchemaData = () => {
    const baseOrganization = {
      "@type": "LegalService",
      "name": "NYC Emergency Tax Attorney",
      "description": "Emergency bank levy release and tax resolution services in NYC, New York, and New Jersey",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "150 West 25th Street, RM 403",
        "addressLocality": "New York City",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7589",
        "longitude": "-73.9851"
      },
      "telephone": "+1 929 416 3020",
      "url": "https://www.strategictaxnynj.com",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "areaServed": [
        "Manhattan, NY",
        "Brooklyn, NY", 
        "Queens, NY",
        "Bronx, NY",
        "Staten Island, NY",
        "New Jersey",
        "Connecticut"
      ]
    };

    switch (type) {
      case "bank-levy":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageData?.title || "IRS Seized Bank Account Emergency Release NYC",
          "description": pageData?.description || "Emergency bank levy release services for NYC residents",
          "url": pageData?.url || "https://www.strategictaxnynj.com/irs-seized-my-bank-account",
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What should I do if the IRS seized my bank account in NYC today?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call a Manhattan bank levy attorney immediately. NYC residents have 24-48 hours to act before funds transfer to IRS."
                }
              },
              {
                "@type": "Question", 
                "name": "How long does it take to release a frozen bank account in New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most NYC bank levy releases occur within 24-48 hours when proper hardship documentation is filed."
                }
              }
            ]
          },
          "provider": baseOrganization,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.strategictaxnynj.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "IRS Seized Bank Account",
                "item": pageData?.url || "https://www.strategictaxnynj.com/irs-seized-my-bank-account"
              }
            ]
          }
        };

      case "emergency-legal":
        return {
          "@context": "https://schema.org",
          "@type": "EmergencyService",
          "name": "24/7 Bank Levy Emergency Response",
          "description": "Emergency bank levy release for NYC residents with frozen accounts",
          "provider": baseOrganization,
          "areaServed": baseOrganization.areaServed,
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": "+1 929 416 3020",
            "availableLanguage": ["English", "Spanish"],
            "hoursAvailable": "Mo-Su 00:00-23:59"
          }
        };

      case "local-business":
        return {
          "@context": "https://schema.org",
          "@graph": [
            {
              ...baseOrganization,
              "@id": "https://www.strategictaxnynj.com/#organization"
            },
            {
              "@type": "WebSite",
              "@id": "https://www.strategictaxnynj.com/#website",
              "url": "https://www.strategictaxnynj.com",
              "name": "NYC Emergency Tax Attorney",
              "publisher": {
                "@id": "https://www.strategictaxnynj.com/#organization"
              }
            }
          ]
        };

      default:
        return null;
    }
  };

  const schemaData = getSchemaData();

  if (!schemaData) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}