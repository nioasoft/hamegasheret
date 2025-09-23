export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "דבי סיידה ושו״ת - משרד עורכי דין",
  "description": "משרד עורכי דין מוביל בגישור גירושין ודיני משפחה. זהבית דבי מומחית בגישור עם 85% הצלחה.",
  "url": "https://hamegasheret.co.il",
  "logo": "https://hamegasheret.co.il/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "יהודה הנחתום 4, בניין בית בלטק",
    "addressLocality": "באר שבע",
    "addressCountry": "IL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+972-54-423-2167",
    "email": "asaf@hamegasheret.co.il",
    "contactType": "customer service",
    "availableLanguage": "Hebrew"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "serviceType": [
    "גישור גירושין",
    "דיני משפחה",
    "משמורת ילדים",
    "מזונות",
    "הסכמי גירושין"
  ],
  "priceRange": "$$"
}

export const mediationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "גישור גירושין",
  "description": "שירות גישור גירושין מקצועי עם שיעור הצלחה של 85%. הגעה להסכמים מוסכמים ללא מלחמות משפטיות.",
  "provider": {
    "@type": "LegalService",
    "name": "דבי סיידה ושו״ת"
  },
  "serviceType": "גישור גירושין",
  "areaServed": "IL",
  "offers": {
    "@type": "Offer",
    "price": "5000-15000",
    "priceCurrency": "ILS",
    "description": "מחיר משוער לגישור גירושין מלא"
  }
}

export const familyLawServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "דיני משפחה",
  "description": "שירותים משפטיים בתחום דיני המשפחה: משמורת ילדים, מזונות, הסכמי גירושין ועוד.",
  "provider": {
    "@type": "LegalService",
    "name": "דבי סיידה ושו״ת"
  },
  "serviceType": "דיני משפחה",
  "areaServed": "IL"
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "דבי סיידה ושו״ת",
  "description": "משרד עורכי דין מוביל בגישור גירושין ודיני משפחה בבאר שבע",
  "url": "https://hamegasheret.co.il",
  "telephone": "+972-54-423-2167",
  "email": "asaf@hamegasheret.co.il",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "יהודה הנחתום 4, בניין בית בלטק",
    "addressLocality": "באר שבע",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.252973",
    "longitude": "34.791462"
  },
  "openingHours": [
    "Mo-Th 08:00-18:00",
    "Fr 08:00-13:00"
  ],
  "priceRange": "$$"
}
