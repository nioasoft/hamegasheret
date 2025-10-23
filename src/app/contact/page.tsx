import type { Metadata } from "next";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "צור קשר - המגשרת עו״ד זהבית דבי | ייעוץ משפטי ראשוני חינם",
  description: "צור קשר עם המגשרת עו״ד זהבית דבי לייעוץ משפטי בגישור גירושין ודיני משפחה. ייעוץ ראשוני חינם. טלפון: 053-606-2456 | באר שבע והדרום",
  keywords: "צור קשר המגשרת, ייעוץ משפטי, עורך דין גירושין באר שבע, פגישת ייעוץ, המגשרת זהבית דבי",
  alternates: {
    canonical: "https://hamegasheret.co.il/contact"
  },
  openGraph: {
    title: "צור קשר - המגשרת עו״ד זהבית דבי",
    description: "קבע פגישת ייעוץ עם המגשרת - ייעוץ ראשוני חינם",
    url: "https://hamegasheret.co.il/contact",
    siteName: "המגשרת - עו״ד זהבית דבי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "צור קשר עם המגשרת עו״ד זהבית דבי",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "צור קשר - המגשרת עו״ד זהבית דבי",
    description: "ייעוץ ראשוני חינם בגישור גירושין - טלפון: 053-606-2456, זמינות 24/7",
    images: ["/og-image-contact.jpg"],
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

const contactMethods = [
  {
    title: "טלפון",
    description: "התקשרו אלינו לקבלת ייעוץ מיידי",
    value: "053-606-2456",
    action: "tel:+972-53-606-2456",
    icon: "📞",
    cta: "התקשר עכשיו"
  },
  {
    title: "וואטסאפ",
    description: "שלחו הודעה וואטסאפ ונחזור אליכם בהקדם",
    value: "שלח הודעה",
    action: "https://wa.me/972536062456?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%92%D7%99%D7%A9%D7%95%D7%A8%20%D7%92%D7%99%D7%A8%D7%95%D7%A9%D7%99%D7%9F",
    icon: "💬",
    cta: "פתח וואטסאפ"
  },
  {
    title: "אימייל",
    description: "שלחו מייל מפורט ונענה בהקדם האפשרי",
    value: "zehavit@silaw.co.il",
    action: "mailto:zehavit@silaw.co.il",
    icon: "✉️",
    cta: "שלח אימייל"
  }
];

const officeInfo = [
  {
    title: "כתובת המשרד",
    details: [
      "יהודה הנחתום 4",
      "בניין בית בלטק",
      "באר שבע"
    ]
  },
  {
    title: "שעות פעילות",
    details: [
      "ראשון - חמישי: 08:00 - 18:00",
      "שישי: 08:00 - 13:00",
      "זמינות 24/7 למקרים דחופים"
    ]
  },
  {
    title: "חניה",
    details: [
      "חניה ללקוחות המשרד",
      "גישה נוחה ונגישה",
      "כניסה למשרד ללא מדרגות"
    ]
  }
];

const faqs = [
  {
    question: "איך אני יכול לקבוע פגישת ייעוץ?",
    answer: "ניתן לקבוע פגישת ייעוץ באחת מהדרכים הבאות: התקשרות טלפונית, שליחת הודעת וואטסאפ, או מילוי הטופס באתר. נחזור אליכם תוך 24 שעות."
  },
  {
    question: "האם הייעוץ הראשוני בתשלום?",
    answer: "הייעוץ הראשוני הוא חינם וללא התחייבות. בפגישה נבין את המצב שלכם ונמליץ על הדרך הטובה ביותר להתקדם."
  },
  {
    question: "כמה זמן לוקח לקבל מענה לפנייה?",
    answer: "אנו מתחייבים לחזור לכל פנייה תוך 24 שעות. במקרים דחופים, ניתן להתקשר ישירות למספר הטלפון."
  },
  {
    question: "האם ניתן לקבל ייעוץ בזום?",
    answer: "כן, אנו מציעים ייעוץ גם בזום ובטלפון לנוחותכם, במיוחד ללקוחות מחוץ לבאר שבע."
  },
  {
    question: "מה צריך להביא לפגישת הייעוץ?",
    answer: "לפגישת הייעוץ רצוי להביא: תעודת זהות, מסמכים רלוונטיים לעניין (כגון הסכם נישואין, צוואות), וכל מידע נוסף שיכול לעזור בהבנת המקרה."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation menuItems={menuItems} />

      <main id="main-content">
        <Hero
          title="צור קשר"
          subtitle="אנחנו כאן לעזור לך"
          description="מוכנים לעזור לך למצוא את הפתרון הטוב ביותר למצבך. צור קשר עכשיו."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="התקשר עכשיו"
          secondaryCtaHref="tel:+972-53-606-2456"
        />

        {/* דרכי התקשרות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-beige-900 mb-4">
                איך תרצה ליצור קשר?
              </h2>
              <p className="text-xl text-beige-600">
                בחר את הדרך הנוחה ביותר עבורך
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-beige-600">{method.description}</p>
                    <Button
                      className="w-full"
                      asChild
                    >
                      <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {method.cta}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* טופס צור קשר + מידע על המשרד */}
        <section className="py-12 bg-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-beige-900 mb-4">
                  שלח לנו הודעה
                </h2>
                <p className="text-xl text-beige-600">
                  מלא את הפרטים ונחזור אליך בהקדם
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* מידע על המשרד */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-beige-900 mb-4">
                מידע על המשרד
              </h2>
              <p className="text-xl text-beige-600">
                כל מה שאתה צריך לדעת לפני הביקור
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {officeInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-beige-600">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* מפה */}
        <section className="py-12 bg-beige-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-beige-900 mb-8">
                מיקום המשרד
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="aspect-video rounded overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.765888186687!2d34.79168761547!3d31.74936908129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502666aa0ef1c3b%3A0x8e0b1e0b1e0b1e0b!2z15nXlNeV15PXlCDXlNeg15fXqteV150gNCwg15HXkNeoINep15HXog!5e0!3m2!1siw!2sil!4v1700000000000!5m2!1siw!2sil"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="מיקום המשרד - יהודה הנחתום 4, באר שבע"
                  ></iframe>
                </div>

                {/* כפתורי ניווט */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com/maps?q=יהודה+הנחתום+4,+באר+שבע,+ישראל"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>🗺️</span>
                      פתח ב-Google Maps
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://waze.com/ul?q=יהודה+הנחתום+4,+באר+שבע&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>🚗</span>
                      נווט עם Waze
                    </a>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <h3 className="font-semibold text-beige-900 mb-2">הוראות הגעה</h3>
                  <p className="text-beige-600 text-sm">
                    המשרד ממוקם במרכז באר שבע, עם גישה נוחה לתחבורה ציבורית ולחניה.
                    הכניסה למשרד נגישה לחלוטין וכוללת מעלית.
                  </p>
                </div>
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
                  שאלות נפוצות
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

        {/* קריאה לפעולה אחרונה */}
        <section className="py-12 bg-beige-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              אל תחכה, צור קשר עכשיו!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              הבעיה שלך לא תפתור את עצמה. אנחנו כאן לעזור לך למצוא את הפתרון הטוב ביותר
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+972-53-606-2456">
                  📞 התקשר עכשיו
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/972536062456?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%92%D7%99%D7%A9%D7%95%D7%A8%20%D7%92%D7%99%D7%A8%D7%95%D7%A9%D7%99%D7%9F" target="_blank" rel="noopener noreferrer">
                  💬 וואטסאפ
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
