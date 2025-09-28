import Image from "next/image";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות המגשרת זהבית דבי | מומחית בגישור גירושין ודיני משפחה",
  description: "הכירו את המגשרת זהבית דבי - מומחית בגישור גירושין עם 15+ שנות ניסיון ו-85% הצלחה. המגשרת המובילה באר שבע ובכל הארץ. דיני משפחה, משמורת ילדים ופתרון סכסוכים.",
  keywords: "זהבית דבי, המגשרת, אודות המגשרת, ניסיון בגישור, מומחית דיני משפחה, המגשרת באר שבע, עורך דין משפחה, גישור מקצועי",
  openGraph: {
    title: "אודות המגשרת זהבית דבי | מומחית בגישור",
    description: "הכירו את המגשרת זהבית דבי - מומחית בגישור גירושין עם ניסיון של 15+ שנים ושיעור הצלחה של 85%.",
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
    quote: '"עו״ד זהבית דבי היא מגשרת מקצועית ביותר. היכולת שלה להביא אותנו להסכמה הדדית הייתה מדהימה."',
    author: "ד.מ.",
    role: "לקוחה מבאר שבע"
  },
  {
    quote: "זהבית הצליחה להפוך מצב קשה לתהליך מכבד. המומחיות שלה בגישור גירושין עזרה לנו מאוד.",
    author: "ש.ל.",
    role: "לקוח מתל אביב"
  },
  {
    quote: "בזכות הגישור של עו״ד דבי, הצלחנו להגיע להסכם הוגן שמתחשב בכולם, במיוחד בילדים.",
    author: "י.א.",
    role: "לקוחה מחיפה"
  },
  {
    quote: "המקצועיות והרגישות של זהבית דבי בגישור הן יוצאות דופן. התהליך שינה את חיינו לטובה.",
    author: "מ.כ.",
    role: "לקוח מירושלים"
  }
];

const teamMembers = [
  {
    name: "זהבית דבי",
    title: "שותפה בכירה - מומחית בגישור גירושין",
    description: '"עורכת דין מובילה בתחום דיני המשפחה עם התמחות מיוחדת בגישור גירושין. בעלת ניסיון של למעלה מ-15 שנים ומוניטין מעולה בתחום הגישור."',
    achievements: [
      "85% הצלחה בהגעה להסכמים בגישור",
      "15+ שנות ניסיון בגישור גירושין",
      "מאות זוגות שקיבלו ליווי מקצועי",
      "הכרה מקצועית בתחום הגישור",
      "מומחית בהגעה להסכמים ללא מלחמות"
    ],
    specialties: ["גישור גירושין", "דיני משפחה", "הסכמי גירושין", "משמורת ילדים", "מזונות"]
  },
  {
    name: "אסף סיידה",
    title: "מייסד המשרד - מומחה בדיני משפחה ומסחרי",
    description: "עורך דין מנוסה בתחום דיני המשפחה והמשפט המסחרי, עם התמחות מיוחדת בליווי עסקים ובפתרון סכסוכים מורכבים.",
    achievements: [
      "מייסד המשרד עם ניסיון עשיר",
      "מומחה בדיני משפחה ומסחרי",
      "ליווי מאות לקוחות פרטיים ועסקיים",
      "התמחות בהסכמי ממון ושותפויות",
      "פתרון סכסוכים מורכבים"
    ],
    specialties: ["דיני משפחה", "משפט מסחרי", "הסכמי ממון", "שותפויות", "ליווי עסקי"]
  }
];

const values = [
  {
    title: "מקצועיות",
    description: "אנו מחויבים לסטנדרטים הגבוהים ביותר של מקצועיות ויושרה בעבודתנו"
  },
  {
    title: "רגישות",
    description: "אנו מבינים את הרגישות של הנושאים המשפטיים ומתייחסים לכל לקוח באמפתיה"
  },
  {
    title: "יצירתיות",
    description: "אנו מוצאים פתרונות יצירתיים ומותאמים אישית לכל מקרה ומקרה"
  },
  {
    title: "שירות אישי",
    description: "אנו מעניקים ליווי צמוד וזמינות מלאה לאורך כל התהליך המשפטי"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation menuItems={menuItems} />

      <main>
        <Hero
          title="אודות המשרד"
          subtitle="מומחים בגישור גירושין ובדיני משפחה"
          description="משרד עורכי דין מוביל המתמחה בגישור גירושין ובדיני משפחה, עם דגש על הגעה להסכמים מוסכמים ללא מלחמות מיותרות."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="למד על גישור"
          secondaryCtaHref="/mediation"
        />

        {/* אודות המשרד */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  דבי סיידה ושו״ת - משרד עורכי דין
                </h2>
                <div className="space-y-5 text-gray-700 text-base leading-7">
                  <p>
                    משרד {`"דבי סיידה ושו״ת"`} הינו משרד מקצועי למתן ייעוץ, סיוע משפטי וייצוג למוסדות ציבוריים,
                    תאגידים מסחריים וללקוחות פרטיים. המשרד מציע שירותים משפטיים במגוון התחומים המסחריים-אזרחיים
                    ובתחום המנהלי-מוניציפאלי וזאת באמצעות עורכי דין איכותיים ומקצועיים.
                  </p>
                  <p>
                    המשרד מתמחה במיוחד בתחום דיני המשפחה והגירושין, עם דגש על גישור כפתרון מועדף להגעה להסכמים.
                    אנו מאמינים בגישה שונה - לא מלחמות משפטיות, אלא דיאלוג ופשרה תוך שמירה על כבוד הדדי.
                  </p>
                  <p>
                    במשרד קיימות מחלקות שונות ובחלוקה לפי תחומי התמחות, המאפשרות מתן שירות מקצועי וממוקד לכל לקוח.
                    אנו שמים דגש על ליווי אישי, זמינות מלאה ופתרונות מותאמים אישית.
                  </p>
                </div>
              </div>

              {/* הערכים שלנו */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 md:col-span-2 text-center mb-8">
                  הערכים שלנו
                </h3>
                {values.map((value, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* הצוות */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                צוות המשרד
              </h2>
              <p className="text-xl text-gray-600">
                עורכי דין מקצועיים ומנוסים בתחום דיני המשפחה
              </p>
            </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {teamMembers.map((member, index) => (
                        <Card key={index} className="h-full bg-white border border-gray-200 shadow-md">
                          <CardHeader className="text-center pb-4">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                              <Image
                                src={index === 0 ? "/images/zehavit.webp" : "/images/asaf.webp"}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                            <p className="text-slate-600 font-medium">{member.title}</p>
                          </CardHeader>

                  <CardContent className="space-y-5">
                    <p className="text-gray-700 leading-7 text-base">
                      {member.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">הישגים:</h4>
                      <ul className="space-y-1.5">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <span className="text-slate-500 mr-2 mt-1">•</span>
                            <span className="leading-6">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">תחומי התמחות:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* המלצות לקוחות */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                מה אומרים עלינו הלקוחות שלנו
              </h2>
              <p className="text-xl text-gray-600">
                המוניטין שלנו מדבר בעד עצמו
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full flex flex-col bg-white border border-gray-200 shadow-md">
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="text-center h-full flex flex-col">
                      <p className="text-gray-700 mb-4 italic text-base leading-7 flex-1">
                        {`"${testimonial.quote}"`}
                      </p>
                      <div className="border-t pt-3 mt-auto">
                        <div className="font-semibold text-gray-900 text-base">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* סטטיסטיקות */}
        <section className="py-12 bg-slate-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                המספרים שלנו מדברים
              </h2>
              <p className="text-xl opacity-90">
                שנים של ניסיון והצלחה בליווי לקוחות
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="opacity-90">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">לקוחות שקיבלו ייעוץ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="opacity-90">הצלחה בגישור</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">זמינות ללקוחות</div>
              </div>
            </div>
          </div>
        </section>

        {/* קריאה לפעולה */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              פנו אלינו לייעוץ ראשוני חינם ונראה איך נוכל לעזור לכם למצוא את הפתרון הטוב ביותר למצבכם
            </p>
            <ContactForm />
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
