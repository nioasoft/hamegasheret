export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "המגשרת - עו״ד זהבית דבי | דבי סיידה ושות'",
  "description": "המגשרת עו״ד זהבית דבי - משרד עורכי דין מוביל בגישור גירושין ודיני משפחה. המגשרת המובילה עם 85% הצלחה בגישור.",
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
    "telephone": "+972-53-606-2456",
    "email": "zehavit@silaw.co.il",
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
  "name": "גישור גירושין - המגשרת עו״ד זהבית דבי",
  "description": "שירות גישור גירושין מקצועי של המגשרת עו״ד זהבית דבי עם שיעור הצלחה של 85%. הגעה להסכמים מוסכמים ללא מלחמות משפטיות.",
  "provider": {
    "@type": "LegalService",
    "name": "המגשרת - עו״ד זהבית דבי | דבי סיידה ושות'"
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
    "name": "דבי סיידה ושות'"
  },
  "serviceType": "דיני משפחה",
  "areaServed": "IL"
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "המגשרת - עו״ד זהבית דבי | דבי סיידה ושות'",
  "description": "המגשרת עו״ד זהבית דבי - משרד עורכי דין מוביל בגישור גירושין ודיני משפחה בבאר שבע. המגשרת המובילה בישראל.",
  "url": "https://hamegasheret.co.il",
  "telephone": "+972-53-606-2456",
  "email": "zehavit@silaw.co.il",
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

export const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "לקוח מרוצה"
  },
  "reviewBody": "עו״ד זהבית דבי המגשרת היא מקצועית מהשורה הראשונה. היא הצליחה להחזיר לנו לא רק את הנישואין אלא גם את החלום המשותף שלנו. היום אנחנו צוות חזק יותר מתמיד.",
  "itemReviewed": {
    "@type": "Service",
    "name": "גישור גירושין - המגשרת עו״ד זהבית דבי"
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "מה זה גישור גירושין?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "גישור גירושין הוא תהליך שבו צד שלישי ניטרלי (המגשרת) עוזר לבני הזוג להגיע להסכמה על כל הנושאים הקשורים לגירושין, ללא צורך בהליך משפטי ארוך ויקר."
      }
    },
    {
      "@type": "Question",
      "name": "למה לבחור בגישור במקום בהליך משפטי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "גישור חוסך זמן, כסף ורגשות. הוא מאפשר לבני הזוג לשמור על יחסים טובים ולמצוא פתרונות מותאמים אישית שאינם אפשריים בבית המשפט."
      }
    },
    {
      "@type": "Question",
      "name": "כמה זמן לוקח תהליך גישור?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "בדרך כלל 2-6 חודשים, לעומת שנים בהליך משפטי. אנחנו שואפים לסיים תוך 3-4 חודשים."
      }
    }
  ]
}

export const articleSchema = (article: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "datePublished": article.date,
  "dateModified": article.date,
  "author": {
    "@type": "Person",
    "name": "עו״ד זהבית דבי",
    "jobTitle": "המגשרת - מומחית בגישור גירושין"
  },
  "publisher": {
    "@type": "Organization",
    "name": "המגשרת - עו״ד זהבית דבי",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hamegasheret.co.il/logo.png"
    }
  },
  "articleSection": article.category,
  "timeRequired": article.readTime,
  "inLanguage": "he-IL"
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
