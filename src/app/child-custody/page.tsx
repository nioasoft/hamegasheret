import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "משמורת ילדים - המגשרת זהבית דבי | מומחית בגישור משמורת",
  description: "משמורת ילדים עם המגשרת זהבית דבי - פתרונות יצירתיים למשמורת משותפת, יחידה ואחריות הורית. 85% הצלחה במציאת הסכמי משמורת מאוזנים לטובת הילדים והמשפחה.",
  keywords: "משמורת ילדים, המגשרת זהבית דבי, משמורת משותפת, משמורת יחידה, אחריות הורית, הסדרי ראייה, גישור משמורת, דיני משפחה, זכויות ילדים, הורות משותפת",
  openGraph: {
    title: "משמורת ילדים - המגשרת זהבית דבי | פתרונות לטובת הילדים",
    description: "המגשרת זהבית דבי מתמחה בגישור משמורת ילדים. פתרונות יצירתיים ומאוזנים לטובת הילדים עם שיעור הצלחה של 85% בהגעה להסכמי משמורת מוסכמים.",
    type: "website",
  },
};

const menuItems = [
  { label: "דף הבית", href: "/" },
  { label: "גישור גירושין", href: "/mediation" },
  { label: "משמורת ילדים", href: "/child-custody" },
  { label: "מזונות", href: "/child-support" },
  { label: "אודות", href: "/about" },
  { label: "מאמרים", href: "/articles" },
  { label: "סיפורי הצלחה", href: "/cases" },
  { label: "צור קשר", href: "/contact" }
];

const testimonials = [
  {
    quote: "המגשרת זהבית דבי הציגה לנו פתרון שלא חשבנו עליו - משמורת משותפת שמתאימה לכולם. הילדים שלנו זוכים לשני הורים מעורבים.",
    author: "מ.ר.",
    role: "הורה מרוצה"
  },
  {
    quote: "בזכות המגשרת זהבית דבי הגענו להסכם משמורת שמתחשב בצרכים של הילדים ובלוח הזמנים של העבודה שלנו. פתרון יצירתי ומעשי.",
    author: "ד.כ.",
    role: "הורה מרוצה"
  }
];

const stats = [
  { number: "85%", label: "הצלחה בהסכמי משמורת" },
  { number: "90%", label: "שביעות רצון הילדים" },
  { number: "75%", label: "משמורת משותפת מוסכמת" }
];

const custodyTypes = [
  {
    title: "משמורת משותפת",
    description: "שני ההורים חולקים באחריות על הילדים ומקבלים החלטות יחד",
    icon: "👨‍👩‍👧‍👦",
    benefits: [
      "הילדים זוכים לשני הורים מעורבים",
      "חלוקה הוגנת של האחריות",
      "שמירה על קשר חזק עם שני ההורים",
      "פחות קונפליקטים לאורך זמן"
    ],
    suitableFor: "זוגות שמסוגלים לתקשר בצורה בוגרת ולשתף פעולה"
  },
  {
    title: "משמורת יחידה",
    description: "הורה אחד מקבל את המשמורת העיקרית והשני זוכה להסדרי ראייה",
    icon: "👤",
    benefits: [
      "יציבות מרבית לילדים",
      "החלטות מהירות יותר",
      "פחות מעברים לילדים",
      "בית אחד כבסיס יציב"
    ],
    suitableFor: "מקרים בהם יש הבדל גדול ביכולות ההוריות או במצב הגיאוגרafi"
  },
  {
    title: "אחריות הורית משותפת",
    description: "שני ההורים ממשיכים לקבל החלטות חשובות יחד גם אחרי הגירושין",
    icon: "🤝",
    benefits: [
      "החלטות חינוכיות משותפות",
      "החלטות רפואיות משותפות",
      "שמירה על מעמד שווה",
      "המשך מעורבות שני ההורים"
    ],
    suitableFor: "זוגות שמסוגלים להפריד בין הקשר הזוגי להוריות"
  }
];

const lawChanges = [
  {
    title: "חוק שוויון זכויות האישה (תיקון), התשע״ח-2018",
    description: "הרחבת המקרים בהם ניתן לתת משמורת משותפת גם ללא הסכמה הדדית"
  },
  {
    title: "פסיקת בית המשפט העליון - 'רכות השנים'",
    description: "שינוי בגישה לעדיפות האם בילדים קטנים - כיום הדגש על טובת הילד"
  },
  {
    title: "חוק האחריות ההורית, התשס״א-2001",
    description: "הבחנה בין משמורת לאחריות הורית - אפשרות לאחריות משותפת גם במשמורת יחידה"
  }
];

const coParentingTips = [
  {
    title: "תקשורת יעילה",
    tips: [
      "שימוש באפליקציות ייעודיות לתיאום",
      "שיחות קצרות וענייניות",
      "התמקדות בצרכי הילדים",
      "הימנעות מביקורת על ההורה השני"
    ]
  },
  {
    title: "יציבות לילדים",
    tips: [
      "שמירה על שגרה קבועה",
      "כללים דומים בשני הבתים",
      "הכנת הילדים למעברים",
      "גמישות בזמני ראייה לפי הצורך"
    ]
  },
  {
    title: "רווחה רגשית",
    tips: [
      "אי מעורבות הילדים בסכסוכים",
      "עידוד הקשר עם ההורה השני",
      "קשב לקשיים רגשיים של הילדים",
      "שיתוף פעולה באירועים חשובים"
    ]
  }
];

const successStories = [
  {
    title: "משמורת משותפת יצירתית",
    description: "זוג עם שלושה ילדים הגיע להסכם משמורת משותפת עם חלוקת שבוע-שבוע, כולל גמישות בחגים וחופשות.",
    outcome: "הילדים מרוצים, ההורים שמחים, והקונפליקטים פחתו ב-80%"
  },
  {
    title: "פתרון למרחק גיאוגרפי",
    description: "במקרה של הורה שעבר לגור בעיר אחרת, נמצא פתרון של סופי שבוע ארוכים וחצי מחופשות הקיץ.",
    outcome: "הילד שומר על קשר חזק עם שני ההורים למרות המרחק"
  },
  {
    title: "משמורת מדורגת",
    description: "פתרון יצירתי למשפחה עם ילדים בגילאים שונים - משמורת משותפת לבני הנוער ומשמורת יחידה לילדים הקטנים.",
    outcome: "התחשבות בצרכים השונים של כל ילד בהתאם לגילו ובגרותו"
  }
];

const faqs = [
  {
    question: "מה זה משמורת משותפת ואיך היא עובדת?",
    answer: "משמורת משותפת פירושה ששני ההורים חולקים באחריות על הילדים ומקבלים החלטות יחד. זה לא אומר בהכרח חלוקה של 50%-50% בזמן, אלא שיתוף של אחריות הורית. המגשרת זהבית דבי עוזרת למצוא את החלוקה המתאימה לכל משפחה."
  },
  {
    question: "מתי כדאי לבחור במשמורת יחידה?",
    answer: "משמורת יחידה מתאימה כאשר יש פער גדול ביכולות ההוריות, כאשר יש אלימות או זניחה, או כאשר ההורים גרים רחוק מאוד זה מזה. המגשרת זהבית דבי בוחנת כל מקרה לגופו ומציעה את הפתרון הטוב ביותר לטובת הילדים."
  },
  {
    question: "איך המשמורת משפיעה על מזונות ילדים?",
    answer: "המשמורת משפיעה על חישוב המזונות. במשמורת משותפת, העלויות מתחלקות יותר בין ההורים. במשמורת יחידה, ההורה שאינו משמורן בדרך כלל משלם מזונות. המגשרת זהבית דבי עוזרת לחשב את המזונות בצורה הוגנת ומדויקת."
  },
  {
    question: "מה קורה אם רוצים לשנות הסכם משמורת קיים?",
    answer: "אפשר לשנות הסכם משמורת אם השתנו הנסיבות משמעותית או אם ההסכם הקיים לא עובד. המגשרת זהבית דבי עוזרת להגיע להסכמה על שינויים הדרושים ולהגיש לבית המשפט לאישור."
  },
  {
    question: "איך מכינים ילדים לגירושין ולשינוי במשמורת?",
    answer: "חשוב לדבר עם הילדים בכנות המתאימה לגילם, להבטיח להם שהם לא אשמים, ולהסביר שההורים ממשיכים לאהוב אותם. המגשרת זהבית דבי מנחה הורים כיצד לתקשר עם הילדים ובמידת הצורך ממליצה על ליווי מקצועי."
  },
  {
    question: "כמה זמן לוקח להגיע להסכם משמורת?",
    answer: "תהליך גישור משמורת לוקח בדרך כלל 3-6 חודשים, תלוי במורכבות המקרה ובמידת השיתוף פעולה בין ההורים. המגשרת זהבית דבי שואפת לתהליך מהיר ויעיל תוך התחשבות בצרכי כל המעורבים."
  }
];

const childCustodyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const custodyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "משמורת ילדים - המגשרת זהבית דבי",
  "description": "שירות גישור מקצועי למשמורת ילדים עם המגשרת זהבית דבי. פתרונות יצירתיים לטובת הילדים והמשפחה עם שיעור הצלחה של 85%.",
  "provider": {
    "@type": "LegalService",
    "name": "המגשרת - זהבית דבי | דבי סיידה ושו״ת"
  },
  "serviceType": "משמורת ילדים וגישור",
  "areaServed": "IL"
};

export default function ChildCustodyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([childCustodyFaqSchema, custodyServiceSchema]),
        }}
      />
      <Navigation menuItems={menuItems} />

      <main>
        <Hero
          title="משמורת ילדים - פתרונות לטובת הילדים"
          subtitle="המגשרת זהבית דבי - כל ילד זכאי לשני הורים"
          description="המגשרת זהבית דבי מאמינה שכל ילד זוכה לשני הורים אוהבים ומעורבים. גישור משמורת עם המגשרת מביא לפתרונות יצירתיים לטובת הילדים עם שיעור הצלחה של 85% בהגעה להסכמי משמורת מאוזנים."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="צור קשר עכשיו"
          secondaryCtaHref="/contact"
          stats={stats}
          testimonials={testimonials}
        />

        {/* המגשרת זהבית דבי - המומחיות */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  המגשרת זהבית דבי - מומחית במשמורת ילדים
                </h2>
                <p className="text-xl text-gray-600">
                  "כל ילד זוכה לשני הורים" - זהו העיקרון המנחה את המגשרת זהבית דבי
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      המגשרת זהבית דבי מאמינה שגירושין לא צריכים להרוס את הקשר של הילדים עם ההורים.
                      הגישה הייחודית שלה מתמקדת בטובת הילד קודם כל.
                    </p>
                    <p>
                      <strong>85% הצלחה</strong> בהגעה להסכמי משמורת מאוזנים המתאימים לכל משפחה.
                    </p>
                    <p>
                      המגשרת זהבית דבי מתמחה בפתרונות יצירתיים שמתחשבים בצרכים הייחודיים של כל ילד,
                      בלוח הזמנים של ההורים ובמרחק הגיאוגרפי.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center">התמחויות המגשרת</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      <span>משמורת משותפת יצירתית</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      <span>הסדרי ראייה גמישים</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      <span>פתרונות למרחק גיאוגרפי</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      <span>משמורת בגילאים שונים</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      <span>הכנת ילדים לשינוי</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* סוגי משמורת */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                סוגי משמורת - מה מתאים למשפחה שלכם?
              </h2>
              <p className="text-xl text-gray-600">
                המגשרת זהבית דבי עוזרת למצוא את הפתרון הטוב ביותר לכל משפחה
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {custodyTypes.map((type, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">יתרונות:</h4>
                        <ul className="space-y-1">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 ml-2 mt-0.5">•</span>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">מתאים עבור:</h4>
                        <p className="text-sm text-gray-600">{type.suitableFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* שינויים בחוק */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  שינויים חשובים בחוק הישראלי
                </h2>
                <p className="text-xl text-gray-600">
                  המגשרת זהבית דבי מעודכנת בכל השינויים החדשים בחקיקה
                </p>
              </div>

              <div className="space-y-6">
                {lawChanges.map((change, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-blue-700">
                        {change.title}
                      </h3>
                      <p className="text-gray-700">{change.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">השפעה על הגישור</h3>
                <p className="text-gray-700">
                  השינויים החדשים בחוק מחזקים את האפשרויות לגישור יעיל במשמורת.
                  המגשרת זהבית דבי מנצלת את החידושים החוקיים כדי למצוא פתרונות מתקדמים יותר
                  המתאימים לעידן החדש של הוריות משותפת.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* טיפים להוריות משותפת */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                טיפים להוריות משותפת מוצלחת
              </h2>
              <p className="text-xl text-gray-600">
                עצות מעשיות מהמגשרת זהבית דבי לניהול הוריות אחרי גירושין
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coParentingTips.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 ml-2 mt-1">→</span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">עזרה מקצועית</h3>
                <p className="text-gray-700">
                  המגשרת זהבית דבי מספקת ליווי מתמשך גם אחרי חתימת ההסכם,
                  כולל הכוונה בקושי והתאמות לפי הצורך.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* סיפורי הצלחה */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                סיפורי הצלחה במשמורת ילדים
              </h2>
              <p className="text-xl text-gray-600">
                דוגמאות אמיתיות לפתרונות יצירתיים של המגשרת זהבית דבי
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{story.description}</p>
                    <div className="p-3 bg-green-100 rounded">
                      <p className="text-sm font-medium text-green-800">תוצאות:</p>
                      <p className="text-sm text-green-700">{story.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>85% שיעור הצלחה</strong> בהגעה להסכמי משמורת מאוזנים עם המגשרת זהבית דבי
              </p>
            </div>
          </div>
        </section>

        {/* שאלות נפוצות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  שאלות נפוצות על משמורת ילדים
                </h2>
                <p className="text-xl text-gray-600">
                  התשובות לכל השאלות החשובות מהמגשרת זהבית דבי
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-right">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* סטטיסטיקות */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                סטטיסטיקות משמעותיות
              </h2>
              <p className="text-xl opacity-90">
                נתונים חשובים על משמורת ילדים בישראל
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">75%</div>
                <div className="text-lg">מההסכמים הם למשמורת משותפת</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-lg">הצלחה בגישור עם המגשרת</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-lg">שביעות רצון של הילדים</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-lg">חיסכון בזמן לעומת בית משפט</div>
              </div>
            </div>
          </div>
        </section>

        {/* קריאה לפעולה */}
        <section className="py-12 bg-green-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              מוכנים למצוא את הפתרון הטוב ביותר לילדים שלכם?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              המגשרת זהבית דבי כאן לעזור לכם - ייעוץ ראשוני חינם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  קבע פגישת ייעוץ חינם
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+972-54-423-2167">
                  התקשר עכשיו
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* טופס יצירת קשר */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                צוות המומחים שלנו כאן לעזור
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                פנו אלינו לייעוץ ראשוני חינם במשמורת ילדים ונמצא יחד את הפתרון הטוב ביותר למשפחה שלכם
              </p>
              <ContactForm
                email="asaf@hamegasheret.co.il"
                phone="+972-54-423-2167"
                whatsappText="שלום, אני מעוניין בייעוץ במשמורת ילדים"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">דבי סיידה ושו״ת</h3>
              <p className="text-gray-300">
                משרד עורכי דין מוביל בדיני משפחה וגירושין - המגשרת המובילה במשמורת ילדים
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="/mediation" className="text-gray-300 hover:text-white">גישור גירושין</a></li>
                <li><a href="/child-custody" className="text-gray-300 hover:text-white">משמורת ילדים</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">אודות המשרד</a></li>
                <li><a href="/articles" className="text-gray-300 hover:text-white">מאמרים</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">פרטי קשר</h4>
              <p className="text-gray-300">
                יהודה הנחתום 4<br />
                בניין בית בלטק<br />
                באר שבע<br />
                <a href="tel:+972-54-423-2167" className="hover:text-white">+972-54-423-2167</a><br />
                <a href="mailto:asaf@hamegasheret.co.il" className="hover:text-white">asaf@hamegasheret.co.il</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 דבי סיידה ושו״ת. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}