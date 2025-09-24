import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const menuItems = [
  { label: "דף הבית", href: "/" },
  { label: "גישור גירושין", href: "/mediation" },
  { label: "אודות", href: "/about" },
  { label: "מאמרים", href: "/articles" },
  { label: "סיפורי הצלחה", href: "/cases" },
  { label: "צור קשר", href: "/contact" }
];

const contactMethods = [
  {
    title: "טלפון",
    description: "התקשרו אלינו לקבלת ייעוץ ראשוני מיידי",
    value: "+972-54-423-2167",
    action: "tel:+972-54-423-2167",
    icon: "📞",
    cta: "התקשר עכשיו"
  },
  {
    title: "וואטסאפ",
    description: "שלחו הודעה וואטסאפ ונחזור אליכם בהקדם",
    value: "שלח הודעה",
    action: "https://wa.me/972544232167?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%92%D7%99%D7%A9%D7%95%D7%A8%20%D7%92%D7%99%D7%A8%D7%95%D7%A9%D7%99%D7%9F",
    icon: "💬",
    cta: "פתח וואטסאפ"
  },
  {
    title: "אימייל",
    description: "שלחו מייל מפורט ונענה בהקדם האפשרי",
    value: "asaf@hamegasheret.co.il",
    action: "mailto:asaf@hamegasheret.co.il",
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
      "חניה חינם ללקוחות המשרד",
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

      <main>
        <Hero
          title="צור קשר"
          subtitle="אנחנו כאן לעזור לך"
          description="מוכנים לעזור לך למצוא את הפתרון הטוב ביותר למצבך. צור קשר עכשיו וקבל ייעוץ ראשוני חינם."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="התקשר עכשיו"
          secondaryCtaHref="tel:+972-54-423-2167"
        />

        {/* דרכי התקשרות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                איך תרצה ליצור קשר?
              </h2>
              <p className="text-xl text-gray-600">
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
                    <p className="text-gray-600">{method.description}</p>
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
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  שלח לנו הודעה
                </h2>
                <p className="text-xl text-gray-600">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                מידע על המשרד
              </h2>
              <p className="text-xl text-gray-600">
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
                        <li key={detailIndex} className="text-gray-600">
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
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                מיקום המשרד
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-600">מפה תוצג כאן</p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">הוראות הגעה</h3>
                  <p className="text-gray-600 text-sm">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  שאלות נפוצות
                </h2>
                <p className="text-xl text-gray-600">
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
        <section className="py-12 bg-green-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              אל תחכה, צור קשר עכשיו!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              הבעיה שלך לא תפתור את עצמה. אנחנו כאן לעזור לך למצוא את הפתרון הטוב ביותר
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+972-54-423-2167">
                  📞 התקשר עכשיו
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/972544232167?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%92%D7%99%D7%A9%D7%95%D7%A8%20%D7%92%D7%99%D7%A8%D7%95%D7%A9%D7%99%D7%9F" target="_blank" rel="noopener noreferrer">
                  💬 וואטסאפ
                </a>
              </Button>
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
