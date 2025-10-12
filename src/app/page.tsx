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
    quote: "המגשרת זהבית דבי עזרה לנו להגיע להסכם הוגן תוך שמירה על כבוד הדדי. התהליך היה מקצועי ורגיש.",
    author: "א.ב.",
    role: "לקוחה מבאר שבע"
  },
  {
    quote: "התהליך היה מקצועי, רגיש ויעיל. חסכנו זמן וכסף רב. המגשרת הובילה אותנו בחכמה להסכם מוצלח.",
    author: "ר.כ.",
    role: "לקוח מקיבוץ להב"
  },
  {
    quote: "ההדרכה המקצועית של זהבית עזרה לנו לחשוב על טובת הילדים. הגענו להסכם שכולם מרוצים ממנו.",
    author: "מ.ל.",
    role: "לקוחה מלהבים"
  },
  {
    quote: "גישה אמפתית ומקצועית שהובילה להסכם מוצלח. המגשרת זהבית דבי היא מקצועית מהשורה הראשונה.",
    author: "ד.ש.",
    role: "לקוח ממיתר"
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
    description: "ייעוץ וליווי משפטי מקצועי בענייני משמורת ילדים והסדרי שהות.",
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
      "הערכת חישוב מזונות המותאם לתא המשפחתי ובהתאם לפסיקה הרווחת",
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
            src: "/images/zehavitmain.webp",
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
              <h2 className="text-3xl font-bold text-beige-900 mb-8">
                למה לבחור במשרד שלנו?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-8">
                <div>
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-beige-100">
                    <h3 className="text-xl font-semibold mb-3">ניסיון מוכח</h3>
                    <p className="text-beige-600 leading-relaxed">
                      למעלה מ-15 שנות ניסיון בדיני משפחה וגירושין, עם התמחות מיוחדת בגישור.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-beige-100">
                    <h3 className="text-xl font-semibold mb-3">גישה אנושית</h3>
                    <p className="text-beige-600 leading-relaxed">
                      אנו מבינים את הרגישות של הנושאים ומתייחסים לכל לקוח באמפתיה ובמקצועיות.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-beige-100">
                    <h3 className="text-xl font-semibold mb-3">פתרונות יצירתיים</h3>
                    <p className="text-beige-600 leading-relaxed">
                      אנו מוצאים פתרונות מותאמים אישית לכל מקרה, תוך התחשבות בצרכים הייחודיים.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-beige-100">
                    <h3 className="text-xl font-semibold mb-3">שירות אישי</h3>
                    <p className="text-beige-600 leading-relaxed">
                      ליווי צמוד וזמינות מלאה לאורך כל התהליך עד להשגת התוצאה הרצויה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-beige-900 mb-6">
                צריכים ייעוץ משפטי?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div className="text-right">
                  <p className="text-xl text-beige-600 mb-6">
                    פנו אלינו ונעזור לכם למצוא את הפתרון הטוב ביותר למצבכם
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
              <ContactForm email="zehavit@silaw.co.il" phone="+972-54-423-2167" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-beige-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">דבי סיידה ושו״ת</h3>
              <p className="text-beige-300">
                משרד עורכי דין מוביל בדיני משפחה וגירושין
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="/mediation" className="text-beige-300 hover:text-white transition-colors">גישור גירושין</a></li>
                <li><a href="/child-custody" className="text-beige-300 hover:text-white transition-colors">משמורת ילדים</a></li>
                <li><a href="/child-support" className="text-beige-300 hover:text-white transition-colors">מזונות</a></li>
                <li><a href="/about" className="text-beige-300 hover:text-white transition-colors">אודות המשרד</a></li>
                <li><a href="/articles" className="text-beige-300 hover:text-white transition-colors">מאמרים</a></li>
                <li><a href="/cases" className="text-beige-300 hover:text-white transition-colors">סיפורי הצלחה</a></li>
                <li><a href="/contact" className="text-beige-300 hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">פרטי קשר</h4>
              <p className="text-beige-300">
                יהודה הנחתום 4<br />
                בניין בית בלטק<br />
                באר שבע<br />
                <a href="tel:+972-54-423-2167" className="hover:text-white transition-colors">054-423-2167</a> / <a href="tel:+972-53-606-2456" className="hover:text-white transition-colors">053-606-2456</a><br />
                <a href="mailto:zehavit@silaw.co.il" className="hover:text-white transition-colors">zehavit@silaw.co.il</a>
              </p>
            </div>
          </div>
          <div className="border-t border-beige-800 mt-8 pt-8 text-center text-beige-400">
            <p>&copy; 2024 דבי סיידה ושו״ת. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
