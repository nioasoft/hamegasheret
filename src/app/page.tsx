import Image from "next/image";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/hero";
import { ServicesSection } from "@/components/ui/services-section";
import { ContactForm } from "@/components/ui/contact-form";
import { organizationSchema, mediationServiceSchema, localBusinessSchema } from "@/lib/schema";

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
    quote: "המגשרת זהבית דבי היא קוסמת אמיתית בגישור. היכולת שלה להביא זוגות להסכמה הדדית פשוט מדהימה.",
    author: "ד.מ.",
    role: "דיין בבית הדין הרבני באר שבע"
  },
  {
    quote: "הקוסמת זהבית דבי הופכת מלחמות למשא ומתן. המומחיות שלה בגישור גירושין היא ללא תחרות.",
    author: "ש.ל.",
    role: "דיין בבית הדין הרבני תל אביב"
  },
  {
    quote: "בזכות גישור המגשרת זהבית דבי, זוגות רבים מצליחים להגיע להסכמים הוגנים ללא קרבות מיותרים.",
    author: "י.א.",
    role: "דיין בבית הדין הרבני חיפה"
  },
  {
    quote: "המקצועיות והרגישות של הקוסמת זהבית דבי בגישור הן יוצאות דופן. היא באמת משנה חיים.",
    author: "מ.כ.",
    role: "דיין בבית הדין הרבני ירושלים"
  }
];

const stats = [
  { number: "85%", label: "הצלחה עם המגשרת" },
  { number: "60%", label: "חיסכון בזמן" },
  { number: "80%", label: "חיסכון בעלויות" }
];

const services = [
  {
    title: "גישור גירושין",
    description: "תהליך גישור מקצועי להגעה להסכם גירושין מוסכם ללא מלחמות משפטיות מיותרות.",
    icon: "🤝",
    href: "/mediation",
    features: [
      "הגעה להסכמים מוסכמים",
      "שמירה על מערכות יחסים",
      "חיסכון משמעותי בעלויות",
      "תהליך מהיר ויעיל"
    ]
  },
  {
    title: "משמורת ילדים",
    description: "ייעוץ וליווי משפטי מקצועי בענייני משמורת ילדים והסדרי ראייה.",
    icon: "👨‍👩‍👧‍👦",
    href: "/child-custody",
    features: [
      "הסכמי משמורת מותאמים",
      "התחשבות בצרכי הילדים",
      "ליווי משפטי מלא",
      "פתרונות יצירתיים"
    ]
  },
  {
    title: "מזונות",
    description: "ייעוץ וייצוג משפטי בענייני מזונות ילדים ומזונות אישה בהתאם לחוק.",
    icon: "💰",
    href: "/child-support",
    features: [
      "חישוב מזונות מדויק",
      "התאמה לצרכים המשפחתיים",
      "ייצוג בבית המשפט",
      "עדכון שוטף של פסקי דין"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, mediationServiceSchema, localBusinessSchema]),
        }}
      />
      <Navigation menuItems={menuItems} />

      <main>
        <Hero
          title="המגשרת זהבית דבי"
          subtitle="מומחית בגישור גירושין - הסכמים ללא מלחמות"
          description="המגשרת הבכירה בבאר שבע ותל אביב, עם שיעור הצלחה של 85% בהגעה להסכמים מוסכמים. מתמחה בתהליך גישור מקצועי ורגיש שמביא לתוצאות מעולות ללא קרבות משפטיים."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="למד על גישור"
          secondaryCtaHref="/mediation"
          profileImage={{
            src: "/images/zehavit.webp",
            alt: "המגשרת זהבית דבי - מומחית בגישור גירושין"
          }}
          stats={stats}
          testimonials={testimonials}
        />

        <ServicesSection
          title="השירותים של המגשרת"
          subtitle="זהבית דבי - המגשרת המובילה בגישור גירושין ודיני משפחה"
          services={services}
        />

        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                למה לבחור במשרד שלנו?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-8">
                <div>
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">ניסיון מוכח</h3>
                    <p className="text-gray-600 leading-relaxed">
                      למעלה מ-15 שנות ניסיון בדיני משפחה וגירושין, עם התמחות מיוחדת בגישור.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">גישה אנושית</h3>
                    <p className="text-gray-600 leading-relaxed">
                      אנו מבינים את הרגישות של הנושאים ומתייחסים לכל לקוח באמפתיה ובמקצועיות.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">פתרונות יצירתיים</h3>
                    <p className="text-gray-600 leading-relaxed">
                      אנו מוצאים פתרונות מותאמים אישית לכל מקרה, תוך התחשבות בצרכים הייחודיים.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">שירות אישי</h3>
                    <p className="text-gray-600 leading-relaxed">
                      ליווי צמוד וזמינות מלאה לאורך כל התהליך עד להשגת התוצאה הרצויה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                צריכים ייעוץ משפטי?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div className="text-right">
                  <p className="text-xl text-gray-600 mb-6">
                    פנו אלינו לייעוץ ראשוני חינם ונעזור לכם למצוא את הפתרון הטוב ביותר למצבכם
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/images/consultation-hero.webp"
                      alt="ייעוץ משפטי מקצועי עם המגשרת זהבית דבי"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
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
                <li><a href="/mediation" className="text-gray-300 hover:text-white transition-colors">גישור גירושין</a></li>
                <li><a href="/child-custody" className="text-gray-300 hover:text-white transition-colors">משמורת ילדים</a></li>
                <li><a href="/child-support" className="text-gray-300 hover:text-white transition-colors">מזונות</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">אודות המשרד</a></li>
                <li><a href="/articles" className="text-gray-300 hover:text-white transition-colors">מאמרים</a></li>
                <li><a href="/cases" className="text-gray-300 hover:text-white transition-colors">סיפורי הצלחה</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">פרטי קשר</h4>
              <p className="text-gray-300">
                יהודה הנחתום 4<br />
                בניין בית בלטק<br />
                באר שבע<br />
                <a href="tel:+972-54-423-2167" className="hover:text-white transition-colors">+972-54-423-2167</a><br />
                <a href="mailto:asaf@hamegasheret.co.il" className="hover:text-white transition-colors">asaf@hamegasheret.co.il</a>
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
