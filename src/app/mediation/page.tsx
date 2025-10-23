import Image from "next/image";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { Metadata } from "next";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "גישור גירושין מקצועי - המגשרת עו״ד זהבית דבי | מומחית בגישור",
  description: "גישור גירושין מקצועי עם המגשרת עו״ד זהבית דבי - 85% הצלחה. המגשרת המובילה בבאר שבע והדרום. פתרון בעיות משמורת, רכוש ומזונות ללא מלחמות.",
  keywords: "גישור גירושין, המגשרת עו״ד זהבית דבי, המגשרת באר שבע, פתרון סכסוכים, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין",
  alternates: {
    canonical: "https://hamegasheret.co.il/mediation"
  },
  openGraph: {
    title: "גישור גירושין מקצועי - המגשרת עו״ד זהבית דבי | מומחית",
    description: "גישור גירושין מקצועי עם שיעור הצלחה של 85%. עו״ד זהבית דבי המגשרת מאפשרת לבני זוג להגיע להסכמים מוסכמים ללא מלחמות.",
    url: "https://hamegasheret.co.il/mediation",
    siteName: "המגשרת - עו״ד זהבית דבי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image-mediation.jpg",
        width: 1200,
        height: 630,
        alt: "גישור גירושין מקצועי - המגשרת עו״ד זהבית דבי",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "גישור גירושין מקצועי - המגשרת עו״ד זהבית דבי",
    description: "גישור גירושין מקצועי עם שיעור הצלחה של 85% - פתרון בעיות משמורת, רכוש ומזונות ללא מלחמות",
    images: ["/og-image-mediation.jpg"],
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
    quote: '"עו״ד זהבית דבי עזרה לנו לעבור את תהליך הגירושין בכבוד ובהוגנות. המקצועיות שלה יוצאת דופן."',
    author: "ד.מ.",
    role: "לקוחה מבאר שבע"
  },
  {
    quote: "עו״ד זהבית דבי הצליחה להפוך מצב מורכב לתהליך מכבד. המומחיות שלה בגישור עזרה לנו מאוד.",
    author: "ש.ל.",
    role: "לקוח מקיבוץ להב"
  }
];

const stats = [
  { number: "85%", label: "הצלחה בגישור" },
  { number: "60%", label: "חיסכון בזמן" },
  { number: "80%", label: "חיסכון בעלויות" }
];

const processSteps = [
  {
    step: 1,
    title: "פגישת היכרות",
    description: "פגישה ראשונית להבנת הצרכים והמטרות שלכם"
  },
  {
    step: 2,
    title: "זיהוי נושאים",
    description: "מיפוי כל הנושאים שצריך לדון בהם (רכוש, ילדים, מזונות)"
  },
  {
    step: 3,
    title: "משא ומתן מונחה",
    description: "תהליך מובנה להגעה להסכמות בכל נושא"
  },
  {
    step: 4,
    title: "ניסוח הסכם",
    description: "כתיבת הסכם מפורט ומקצועי"
  },
  {
    step: 5,
    title: "אישור משפטי",
    description: "הגשת ההסכם לאישור בית המשפט או בית הדין"
  }
];

const benefits = [
  {
    title: "חיסכון משמעותי בעלויות",
    description: "בהשוואה להליך משפטי ארוך ויקר, גישור חוסך עד 80% מהעלויות"
  },
  {
    title: "זמן קצר יותר",
    description: "תהליך גישור לוקח 2-3 חודשים בממוצע לעומת שנים בהליך משפטי"
  },
  {
    title: "שמירה על יחסים",
    description: "גישור מאפשר שמירה על יחסים טובים, חשוב במיוחד כשיש ילדים"
  },
  {
    title: "פתרונות יצירתיים",
    description: "אפשרות למצוא פתרונות מותאמים אישית שאינם אפשריים בבית המשפט"
  },
  {
    title: "סודיות מלאה",
    description: "כל הדיונים חסויים ופרטיים, בניגוד להליכים משפטיים פומביים"
  },
  {
    title: "שליטה בתהליך",
    description: "הצדדים שולטים בתהליך ובהחלטות, לא השופט"
  }
];

const faqs = [
  {
    question: "מה זה גישור גירושין?",
    answer: "גישור גירושין הוא תהליך שבו צד שלישי ניטרלי (המגשר) עוזר לבני הזוג להגיע להסכמה על כל הנושאים הקשורים לגירושין, ללא צורך בהליך משפטי ארוך ויקר."
  },
  {
    question: "למה לבחור בגישור במקום בהליך משפטי?",
    answer: "גישור חוסך זמן, כסף ורגשות. הוא מאפשר לבני הזוג לשמור על יחסים טובים ולמצוא פתרונות מותאמים אישית שאינם אפשריים בבית המשפט."
  },
  {
    question: "כמה זמן לוקח תהליך גישור?",
    answer: "בדרך כלל 2-6 חודשים, לעומת שנים בהליך משפטי. אנחנו שואפים לסיים תוך 3-4 חודשים."
  },
  {
    question: "האם ההסכם מגובה משפטית?",
    answer: "כן! ההסכם שנחתם בגישור מקבל תוקף משפטי מלא כאשר הוא מאושר על ידי בית המשפט או בית הדין הרבני."
  },
  {
    question: "מה קורה אם לא מגיעים להסכם?",
    answer: "אם לא מגיעים להסכם בגישור, תמיד אפשר לעבור להליך משפטי. השיחות בגישור חסויות ולא ניתן להשתמש בהן בבית המשפט."
  },
  {
    question: "מי משלם על הגישור?",
    answer: "בדרך כלל שני הצדדים חולקים בעלות באופן שווה, אך זה ניתן לדיון ולהסכמה בין הצדדים."
  }
];

export default function MediationPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navigation menuItems={menuItems} />

      <main id="main-content">
        <Hero
          title="גישור גירושין מקצועי"
          subtitle="הגעה להסכם ללא מלחמות"
          description="עו״ד זהבית דבי, מומחית בגישור גירושין עם שיעור הצלחה של 85%. הגישה הייחודית שלנו מאפשרת לבני זוג להגיע להסכמים מוסכמים תוך שמירה על כבוד הדדי ויחסים טובים."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="צור קשר עכשיו"
          secondaryCtaHref="/contact"
          stats={stats}
          testimonials={testimonials}
        />

                {/* עו״ד זהבית דבי - המומחית */}
                <section className="py-12 bg-gradient-to-r from-beige-50 to-beige-200">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <h2 className="text-3xl font-bold text-beige-900 mb-6">
                            עו״ד זהבית דבי - מומחית בגישור גירושין
                          </h2>
                          <div className="space-y-4 text-beige-700">
                            <p>
                              עו״ד זהבית דבי היא עורכת דין מובילה בתחום דיני המשפחה, עם התמחות מיוחדת בגישור גירושין.
                              הניסיון הרב שלה והגישה הייחודית מאפשרים לה להגיע להישגים יוצאי דופן.
                            </p>
                            <p>
                              המוניטין המקצועי שלה והתוצאות מדברות בעד עצמן - 85% הצלחה בהגעה להסכמים.
                            </p>
                            <p>
                              הגישה של זהבית מתמקדת בזיהוי הצרכים האמיתיים של כל צד, יצירת אווירה של אמון וכבוד הדדי,
                              ומציאת פתרונות יצירתיים שמשרתים את האינטרסים של שני הצדדים ושל הילדים.
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                            <Image
                              src="/images/zehavitmain.webp"
                              alt="עו״ד זהבית דבי"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold mb-4 text-center">הישגים מוכחים</h3>
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <Check className="text-beige-700 ml-2 h-4 w-4 flex-shrink-0" />
                              <span>85% הצלחה בהגעה להסכמים</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-beige-700 ml-2 h-4 w-4 flex-shrink-0" />
                              <span>15+ שנות ניסיון בגישור</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-beige-700 ml-2 h-4 w-4 flex-shrink-0" />
                              <span>מאות זוגות שקיבלו ייעוץ</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-beige-700 ml-2 h-4 w-4 flex-shrink-0" />
                              <span>הכרה מקצועית מדיינים בבתי דין</span>
                            </li>
                          </ul>
                        </div>
              </div>
            </div>
          </div>
        </section>

        {/* יתרונות הגישור */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-beige-900 mb-4">
                יתרונות הגישור על פני הליך משפטי
              </h2>
              <p className="text-xl text-beige-600">
                מדוע כדאי לבחור בגישור גירושין?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-beige-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* תהליך הגישור */}
        <section className="py-12 bg-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-beige-900 mb-4">
                תהליך הגישור צעד אחר צעד
              </h2>
              <p className="text-xl text-beige-600">
                איך מתנהל תהליך הגישור במשרדנו?
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-beige-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-beige-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-beige-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* שאלות נפוצות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-beige-900 mb-4">
                  שאלות נפוצות על גישור גירושין
                </h2>
                <p className="text-xl text-beige-600">
                  התשובות לכל השאלות החשובות
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

        {/* קריאה לפעולה */}
        <section className="py-12 bg-beige-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              מוכנים להתחיל את התהליך?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              פנו אלינו ונבדוק איך נוכל לעזור לכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  קבע פגישת ייעוץ
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+972-53-606-2456">
                  התקשר עכשיו
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
