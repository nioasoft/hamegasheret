import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/contact-form";
import { Metadata } from "next";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "מזונות ילדים - המגשרת זהבית דבי | חישוב מזונות מקצועי 2024",
  description: "מזונות ילדים עם המגשרת זהבית דבי - חישוב מזונות מדויק לפי חוק 2024, הסכמי מזונות הוגנים, גישור מזונות וחיסכון של 80% בעלויות משפט. ייעוץ ראשוני חינם.",
  keywords: "מזונות ילדים, חישוב מזונות, המגשרת זהבית דבי, הסכמי מזונות, גישור מזונות, מזונות 2024, תקנות מזונות, מזונות נטל, מזונות לפי גיל, עדכון מזונות",
  openGraph: {
    title: "מזונות ילדים - המגשרת זהבית דבי | חישוב מזונות מקצועי",
    description: "גישור מזונות ילדים מקצועי עם המגשרת זהבית דבי. הסכמי מזונות הוגנים לשני הצדדים עם חיסכון של 80% בעלויות. חישוב מזונות מדויק לפי חוק 2024.",
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
    quote: "המגשרת זהבית דבי הצליחה לגשר בין הצרכים הכלכליים שלי לבין יכולתו של אבא הילדים. ההסכם הוגן לשני הצדדים.",
    author: "ר.כ.",
    role: "אם לשלושה ילדים"
  },
  {
    quote: "בזכות גישור המגשרת זהבית דבי, הגענו להסכם מזונות מאוזן שלוקח בחשבון את כל הצרכים המיוחדים של הילדים.",
    author: "ד.מ.",
    role: "אבא לילד עם צרכים מיוחדים"
  }
];

const stats = [
  { number: "85%", label: "הצלחה בגישור מזונות" },
  { number: "3 שבועות", label: "זמן ממוצע להסכם" },
  { number: "80%", label: "חיסכון בעלויות" }
];

const supportAmountsByAge = [
  {
    ageRange: "0-6 שנים",
    averageAmount: "1,500-2,500 ₪",
    description: "כולל עלויות גן, חיתולים, מזון מיוחד ובגדים"
  },
  {
    ageRange: "7-14 שנים",
    averageAmount: "2,000-3,500 ₪",
    description: "כולל חינוך, פעילויות חוץ-בית-ספריות ובגדים"
  },
  {
    ageRange: "15-18 שנים",
    averageAmount: "2,500-4,000 ₪",
    description: "כולל הכנה לבגרות, קורסים והוצאות נוספות"
  },
  {
    ageRange: "18+ (סטודנטים)",
    averageAmount: "2,000-3,000 ₪",
    description: "תלוי בלימודים ומצב כלכלי של ההורים"
  }
];

const calculationFactors = [
  {
    title: "הכנסה חודשית",
    description: "ההכנסה הנטו של שני ההורים נלקחת בחשבון בחישוב המזונות"
  },
  {
    title: "נכסים ורכוש",
    description: "רכוש, השקעות וחסכונות יכולים להשפיע על חישוב המזונות"
  },
  {
    title: "הסדרי לינה",
    description: "כמות הלילות שהילד נמצא אצל כל הורה משפיעה על החישוב"
  },
  {
    title: "צרכים מיוחדים",
    description: "ילדים עם צרכים מיוחדים, רפואיים או חינוכיים זכאים למזונות נוספים"
  },
  {
    title: "מספר הילדים",
    description: "המזונות מחושבים בהתאם למספר הילדים והפרשי הגילאים"
  },
  {
    title: "הוצאות קבועות",
    description: "דמי שכירות, הלוואות וחובות קבועים נלקחים בחשבון"
  }
];

const mediationBenefits = [
  {
    title: "הסכמים גמישים",
    description: "אפשרות ליצור הסכמי מזונות מותאמים לצרכים המשתנים של המשפחה"
  },
  {
    title: "עדכונים עתידיים",
    description: "הסכמה מראש על מנגנון לעדכון המזונות בהתאם לשינויים בהכנסה"
  },
  {
    title: "פתרונות יצירתיים",
    description: "חלוקה שונה של ההוצאות (למשל: אחד משלם חינוך, השני מזונות)"
  },
  {
    title: "שמירה על יחסים",
    description: "גישור מאפשר להגיע להסכם תוך שמירה על יחסים טובים בין ההורים"
  }
];

const faqs = [
  {
    question: "איך מחושבים מזונות ילדים בישראל?",
    answer: "מזונות ילדים מחושבים על בסיס כמה גורמים: הכנסות שני ההורים, צרכי הילד, הסדרי הלינה, ועלויות חיים. החישוב נעשה לפי תקנות מזונות 2019 ועדכונים שוטפים של בתי המשפט."
  },
  {
    question: "מה השתנה בחוק המזונות ב-2017?",
    answer: "התיקון מ-2017 יצר נוסחת חישוב אחידה יותר, הגביר את המזונות הממוצעים, וקבע כי שני ההורים חייבים במזונות (לא רק האבא). הדגש עבר לצרכי הילד בפועל ולא רק להכנסת ההורים."
  },
  {
    question: "עד איזה גיל משלמים מזונות?",
    answer: "מזונות לילדים משולמים עד גיל 18. אחרי 18, אם הילד לומד או משרת בצבא, ניתן לחייב במזונות עד גיל 23. במקרים מיוחדים (לימודים גבוהים, צרכים מיוחדים) יכול להתארך."
  },
  {
    question: "מתי אפשר לעדכן את סכום המזונות?",
    answer: "ניתן לבקש עדכון כשחל שינוי משמעותי: עלייה או ירידה בהכנסה, שינוי בצרכי הילד, שינוי בהסדרי הלינה, או כל שינוי נסיבות משמעותי שמשפיע על יכולת התשלום או הצורך."
  },
  {
    question: "האם גם אמהות צריכות לשלם מזונות?",
    answer: "כן, מאז תיקון החוק ב-2017, גם אמהות יכולות להתחייב במזונות אם הכנסתן גבוהה מהאבא או אם הילדים גרים עם האבא רוב הזמן. העקרון הוא שישוב הורים אחראים למזונות."
  },
  {
    question: "כמה עולה הליך גישור מזונות לעומת בית משפט?",
    answer: "גישור מזונות עולה כ-3,000-5,000 ₪ לכל התהליך, לעומת 15,000-25,000 ₪ בממוצע בבית משפט (כולל עורכי דין לשני הצדדים). בגישור התהליך נמשך 3-6 שבועות לעומת חודשים בבית משפט."
  }
];

const costComparison = [
  {
    method: "גישור עם המגשרת זהבית דבי",
    cost: "3,000-5,000 ₪",
    time: "3-6 שבועות",
    benefits: ["הסכם מותאם אישית", "שמירה על יחסים", "גמישות בתנאים", "סודיות מלאה"]
  },
  {
    method: "הליך משפטי בבית המשפט",
    cost: "15,000-25,000 ₪",
    time: "6-18 חודשים",
    benefits: ["פסיקה מחייבת", "תקדימים משפטיים", "הליך רשמי", "אכיפה ממלכתית"]
  }
];

export default function ChildSupportPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navigation menuItems={menuItems} />

      <main>
        <Hero
          title="מזונות ילדים - הסכמים הוגנים לשני הצדדים"
          subtitle="המגשרת זהבית דבי - מומחית בגישור מזונות"
          description="המגשרת זהבית דבי מתמחה בגישור הסכמי מזונות הוגנים ומאוזנים. חישוב מזונות מדויק לפי חוק 2024, פתרונות יצירתיים למצבים מורכבים, וחיסכון של 80% בעלויות משפטיות."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="חישוב מזונות"
          secondaryCtaHref="#calculator"
          stats={stats}
          testimonials={testimonials}
        />

        {/* מהו תיקון 2017 */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                תיקון חוק המזונות 2017 - מה השתנה?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">החידושים החשובים</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 ml-2 mt-1">✓</span>
                        <span>שני ההורים אחראים למזונות (לא רק האבא)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 ml-2 mt-1">✓</span>
                        <span>נוסחת חישוב אחידה ושקופה</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 ml-2 mt-1">✓</span>
                        <span>דגש על צרכי הילד בפועל</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 ml-2 mt-1">✓</span>
                        <span>התחשבות בהסדרי לינה</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">ההשפעה על ההורים</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 ml-2 mt-1">•</span>
                        <span>עלייה ממוצעת של 20-30% בסכומי המזונות</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 ml-2 mt-1">•</span>
                        <span>הוגנות רבה יותר בחלוקת העבור</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 ml-2 mt-1">•</span>
                        <span>התאמה לעידן המודרני</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 ml-2 mt-1">•</span>
                        <span>פחות סכסוכים בזכות נוסחה ברורה</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 text-center">
                  <strong>המגשרת זהבית דבי</strong> מתמחה ביישום התיקון החדש ויודעת בדיוק איך לחשב מזונות הוגנים לפי החוק המעודכן.
                  הניסיון שלה מאפשר למצוא פתרונות יצירתיים שעונים על הצרכים של כל המשפחה.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* טבלת מזונות לפי גילאים */}
        <section className="py-16" id="calculator">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                מזונות ממוצעים לפי גיל הילד - 2024
              </h2>
              <p className="text-xl text-gray-600">
                הסכומים משתנים בהתאם להכנסות ההורים ולצרכים המיוחדים
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {supportAmountsByAge.map((ageGroup, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{ageGroup.ageRange}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-3">
                      {ageGroup.averageAmount}
                    </div>
                    <p className="text-sm text-gray-600">
                      {ageGroup.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-center">חשוב לדעת</h3>
              <p className="text-gray-700 text-center">
                הסכומים לעיל הם הערכה כללית בלבד. החישוב המדויק נעשה על בסיס הכנסות ההורים, צרכי הילד הספציפיים,
                והסדרי הלינה. <strong>המגשרת זהבית דבי</strong> מתמחה בחישוב מזונות מדויק ובהתאמת הסכמים לנסיבות הייחודיות של כל משפחה.
              </p>
            </div>
          </div>
        </section>

        {/* גורמים המשפיעים על החישוב */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                גורמים המשפיעים על חישוב המזונות
              </h2>
              <p className="text-xl text-gray-600">
                כל מקרה הוא ייחודי - אלו הגורמים שנלקחים בחשבון
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {calculationFactors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* יתרונות גישור מזונות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                למה לבחור בגישור מזונות עם המגשרת זהבית דבי?
              </h2>
              <p className="text-xl text-gray-600">
                פתרונות מותאמים אישית במקום פסיקות נוקשות
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {mediationBenefits.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* הצלחות מוכחות */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6">הצלחות מוכחות עם המגשרת זהבית דבי</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-gray-700">הצלחה בגישור מזונות</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3 שבועות</div>
                  <p className="text-gray-700">זמן ממוצע להסכם</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <p className="text-gray-700">הסכמי מזונות מוצלחים</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* השוואת עלויות */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                השוואת עלויות - גישור מול בית משפט
              </h2>
              <p className="text-xl text-gray-600">
                חיסכון משמעותי בזמן ובכסף
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {costComparison.map((method, index) => (
                <Card key={index} className={`h-full ${index === 0 ? 'border-green-500 border-2' : ''}`}>
                  <CardHeader>
                    <CardTitle className={`text-xl ${index === 0 ? 'text-green-600' : 'text-gray-700'}`}>
                      {method.method}
                      {index === 0 && <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">מומלץ</span>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-1">{method.cost}</div>
                      <div className="text-gray-600">משך זמן: {method.time}</div>
                    </div>
                    <h4 className="font-semibold mb-3">יתרונות:</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <span className={`${index === 0 ? 'text-green-500' : 'text-blue-500'} ml-2 mt-1`}>
                            {index === 0 ? '✓' : '•'}
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* שאלות נפוצות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  שאלות נפוצות על מזונות ילדים
                </h2>
                <p className="text-xl text-gray-600">
                  התשובות לכל השאלות החשובות מההורים
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

        {/* מקרים מיוחדים */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                מקרים מיוחדים במזונות ילדים
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">מזונות לחיילים ובני 18+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p><strong>שירות צבאי:</strong> במהלך השירות הצבאי, ההורים עדיין חייבים במזונות אך בסכום מופחת</p>
                      <p><strong>לימודים אקדמיים:</strong> מזונות יכולים להתקיים עד גיל 23 אם הילד לומד</p>
                      <p><strong>צרכים מיוחדים:</strong> ילדים עם מוגבלות זכאים למזונות ללא הגבלת גיל</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">מצבים כלכליים מורכבים</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p><strong>הכנסה משתנה:</strong> עצמאיים וקבלני משנה - חישוב לפי הכנסה ממוצעת</p>
                      <p><strong>אבטלה:</strong> גם מובטלים חייבים במזונות מינימליים</p>
                      <p><strong>הכנסה מעל הממוצע:</strong> פתרונות יצירתיים לשמירה על רמת החיים</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 text-center">
                  <strong>המגשרת זהבית דבי</strong> מתמחה במקרים מורכבים ויודעת למצוא פתרונות יצירתיים
                  לכל מצב. הניסיון הרב שלה מאפשר להתמודד עם כל סוגי המורכבות הכלכלית והמשפחתית.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* קריאה לפעולה ויצירת קשר */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                מוכנים להגיע להסכם מזונות הוגן?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div className="text-right">
                  <p className="text-xl text-gray-600 mb-6">
                    פנו אלינו לייעוץ ראשוני חינם ונעזור לכם להגיע להסכם מזונות הוגן ומאוזן עם חיסכון של 80% בעלויות
                  </p>
                  <div className="space-y-2 text-lg">
                    <p>📞 <a href="tel:+972-54-423-2167" className="hover:text-blue-600">054-423-2167</a></p>
                    <p>📧 <a href="mailto:asaf@hamegasheret.co.il" className="hover:text-blue-600">asaf@hamegasheret.co.il</a></p>
                    <p>📍 יהודה הנחתום 4, באר שבע</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <img
                      src="/images/placeholder.svg"
                      alt="המגשרת זהבית דבי - ייעוץ מזונות"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <ContactForm email="asaf@hamegasheret.co.il" phone="+972-54-423-2167" />
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
                משרד עורכי דין מוביל בדיני משפחה וגירושין
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="/mediation" className="text-gray-300 hover:text-white">גישור גירושין</a></li>
                <li><a href="/child-custody" className="text-gray-300 hover:text-white">משמורת ילדים</a></li>
                <li><a href="/child-support" className="text-gray-300 hover:text-white">מזונות</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">אודות המשרד</a></li>
                <li><a href="/articles" className="text-gray-300 hover:text-white">מאמרים</a></li>
                <li><a href="/cases" className="text-gray-300 hover:text-white">סיפורי הצלחה</a></li>
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