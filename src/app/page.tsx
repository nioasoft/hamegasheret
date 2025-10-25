import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { ServicesSection } from "@/components/ui/services-section";
import { ContactForm } from "@/components/ui/contact-form";
import { organizationSchema, mediationServiceSchema, localBusinessSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "המגשרת באר שבע - עו״ד זהבית דבי | גישור גירושין מקצועי עם 85% הצלחה",
  description: "המגשרת עו״ד זהבית דבי - המובילה בגישור גירושין באר שבע והדרום עם 85% הצלחה. גישור מקצועי לגירושין, משמורת ילדים, מזונות ודיני משפחה. ייעוץ ראשוני חינם! חיסכון של 80% בעלויות.",
  keywords: "המגשרת, המגשרת באר שבע, המגשרת זהבית דבי, עו״ד זהבית דבי, גישור גירושין, גישור גירושין באר שבע, עורך דין גירושין, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין, גישור משפחה באר שבע, עורכי דין משפחה באר שבע, תיאום הורי, גישור מקצועי דרום",
  openGraph: {
    title: "המגשרת באר שבע - עו״ד זהבית דבי | גישור גירושין עם 85% הצלחה",
    description: "המגשרת עו״ד זהבית דבי - המובילה בגישור גירושין באר שבע והדרום. 85% הצלחה בהגעה להסכמים, חיסכון של 80% בעלויות. גישור מקצועי לגירושין, משמורת ילדים ומזונות.",
    url: "https://hamegasheret.co.il",
    siteName: "המגשרת - עו״ד זהבית דבי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "המגשרת עו״ד זהבית דבי - גישור גירושין מקצועי",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "המגשרת באר שבע - עו״ד זהבית דבי | גישור גירושין",
    description: "המגשרת באר שבע - 85% הצלחה בגישור גירושין, חיסכון של 80% בעלויות. ייעוץ ראשוני חינם!",
    images: ["/og-image-home.jpg"],
  },
};

const testimonials = [
  {
    quote: "המגשרת עו״ד זהבית דבי עזרה לנו להגיע להסכם הוגן תוך שמירה על כבוד הדדי. התהליך היה מקצועי ורגיש.",
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
    quote: "גישה אמפתית ומקצועית שהובילה להסכם מוצלח. המגשרת עו״ד זהבית דבי היא מקצועית מהשורה הראשונה.",
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
      "הגעה להסכמים",
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
  },
  {
    title: "גישור לאחר גירושין",
    description: "תיאום הורי ופתרון מחלוקות לאחר הגירושין. התאמת הסכמים לנסיבות משתנות.",
    icon: "🔄",
    href: "/post-divorce-mediation",
    features: [
      "תיאום הורי מקצועי",
      "עדכון הסדרי שהות ומזונות",
      "פתרון מחלוקות ללא ביהמ״ש",
      "שמירה על יחסים תקינים"
    ]
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, mediationServiceSchema, localBusinessSchema]),
        }}
      />

      <main id="main-content">
        <Hero
          title="המגשרת עו״ד זהבית דבי"
          subtitle="מומחית בגישור גירושין - הסכמים ללא מלחמות"
          description="המגשרת הבכירה בבאר שבע והדרום, עם שיעור הצלחה של 85% בהגעה להסכמים. מתמחה בתהליך גישור מקצועי ורגיש שמביא לתוצאות מעולות ללא קרבות משפטיים."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="למד על גישור"
          secondaryCtaHref="/mediation"
          profileImage={{
            src: "/images/zehavitmain.webp",
            alt: "המגשרת עו״ד זהבית דבי - מומחית בגישור גירושין באר שבע והדרום"
          }}
          stats={stats}
          testimonials={testimonials}
        />

        <ServicesSection
          title="השירותים של המגשרת"
          subtitle="עו״ד זהבית דבי - המגשרת המובילה בגישור גירושין ודיני משפחה"
          services={services}
        />

        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-beige-900 mb-8">
                למה לבחור במגשרת עו״ד זהבית דבי - המשרד המוביל בבאר שבע?
              </h1>
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
                      alt="ייעוץ משפטי מקצועי עם המגשרת עו״ד זהבית דבי בבאר שבע - גישור גירושין ודיני משפחה"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <ContactForm email="zehavit@silaw.co.il" phone="+972-53-606-2456" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
