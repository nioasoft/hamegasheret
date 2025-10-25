import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Heart, Users, Shield, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "גישור לאחר גירושין - המגשרת עו״ד זהבית דבי | תיאום הורי ופתרון מחלוקות",
  description: "גישור מקצועי לאחר גירושין - תיאום הורי, גישור על הפרות הסכם, קביעת הסדרי שהות חדשים. המגשרת עו״ד זהבית דבי - פתרונות ממוקדי ילד ללא מלחמות משפטיות.",
  keywords: "גישור לאחר גירושין, תיאום הורי, הפרת הסכם גירושין, הסדרי שהות, משמורת ילדים, מזונות, המגשרת באר שבע, עו״ד זהבית דבי, גישור על הפרות, תיאום מפגשים עם ילדים",
  alternates: {
    canonical: "https://hamegasheret.co.il/post-divorce-mediation"
  },
  openGraph: {
    title: "גישור לאחר גירושין - פתרונות מקצועיים למחלוקות שלאחר הגירושין",
    description: "תיאום הורי, גישור על הפרות הסכם, קביעת הסדרי שהות חדשים - פתרונות ממוקדי ילד עם המגשרת עו״ד זהבית דבי",
    url: "https://hamegasheret.co.il/post-divorce-mediation",
    siteName: "המגשרת - עו״ד זהבית דבי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image-post-divorce.jpg",
        width: 1200,
        height: 630,
        alt: "גישור לאחר גירושין - המגשרת עו״ד זהבית דבי",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "גישור לאחר גירושין - המגשרת עו״ד זהבית דבי",
    description: "תיאום הורי, גישור על הפרות הסכם, קביעת הסדרי שהות חדשים - פתרונות מקצועיים ללא מלחמות",
    images: ["/og-image-post-divorce.jpg"],
  },
};

const testimonials = [
  {
    quote: "אחרי הגירושין חשבנו שסיימנו עם מחלוקות. אבל החיים המשיכו, והתחלנו להסתכסך על הסדרי השהות. המגשרת עו״ד זהבית דבי עזרה לנו למצוא פתרון שעובד לכולם.",
    author: "א.ב.",
    role: "לקוחה מבאר שבע"
  },
  {
    quote: "התיאום ההורי עם זהבית שינה לנו את החיים. למדנו לתקשר כהורים, לא כזוג גרוש. הילדים הרוויחו הכי הרבה.",
    author: "ר.כ.",
    role: "לקוח מקיבוץ להב"
  }
];

const stats = [
  { number: "85%", label: "הצלחה בגישור" },
  { number: "60%", label: "חיסכון בזמן" },
  { number: "80%", label: "חיסכון בעלויות" }
];

const scenarios = [
  {
    icon: "💼",
    title: "שינויים תעסוקתיים",
    description: "עבודה חדשה, שינוי שעות, נסיעות לחו\"ל - כל אלה דורשים התאמת הסדרי השהות והמזונות",
    examples: [
      "קבלת עבודה במשרה מלאה במקום חלקית",
      "מעבר לעבודה במשמרות",
      "אובדן מקום עבודה או שינוי בהכנסה",
      "עבודה הדורשת נסיעות תכופות"
    ]
  },
  {
    icon: "👨‍👩‍👧",
    title: "שינויים משפחתיים",
    description: "קשר חדש, נישואין מחדש, לידת ילד נוסף - שינויים הדורשים עדכון ההסכמות",
    examples: [
      "התחלת קשר חדש או נישואין מחדש",
      "לידת ילד חדש למי מההורים",
      "מעבר דירה או שינוי מקום מגורים",
      "שינויים במצב הבריאותי"
    ]
  },
  {
    icon: "👦👧",
    title: "שינויים הקשורים לילדים",
    description: "התבגרות, צרכים חדשים, העדפות משתנות - הילדים גדלים וההסדרים צריכים להתעדכן",
    examples: [
      "התבגרות הילדים והצורך להתאים הסדרים לגילם",
      "ילד מביע רצון לשנות הסדרי שהות",
      "צרכים חינוכיים או רפואיים חדשים",
      "בעיות התנהגותיות או רגשיות"
    ]
  },
  {
    icon: "⚖️",
    title: "הפרות הסכם ומחלוקות",
    description: "אי-קיום הסדרים, מחלוקות על פרשנות, אי-תשלום מזונות - בעיות הדורשות פתרון מיידי",
    examples: [
      "אי-קיום הסדרי ראייה או שהות",
      "מחלוקות על פרשנות סעיפים בהסכם",
      "אי-תשלום מזונות או חובות משותפים",
      "החלטות חד-צדדיות בנושאי הילדים"
    ]
  }
];

const parentalCoordinationBenefits = [
  {
    icon: <Users className="h-8 w-8 text-beige-700" />,
    title: "בניית תקשורת הורית בריאה",
    description: "למידת כלים לתקשורת אפקטיבית בין ההורים, הפרדה בין הקשר הזוגי לקשר ההורי, ויצירת שפה משותפת"
  },
  {
    icon: <Shield className="h-8 w-8 text-beige-700" />,
    title: "הגנה על הילדים מפני קונפליקט",
    description: "מניעת חשיפת הילדים למתחים, הקטנת רמת העימות בין ההורים, ושמירה על טובת הילדים במרכז"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-beige-700" />,
    title: "פתרון מהיר לסכסוכים יומיומיים",
    description: "טיפול מיידי בבעיות כשהן קטנות, לפני שהן הופכות למשברים. מניעת הסלמה והפחתת צורך בהליכים משפטיים"
  },
  {
    icon: <Heart className="h-8 w-8 text-beige-700" />,
    title: "ליווי מקצועי לאורך זמן",
    description: "תמיכה מתמשכת של מקצוען מנוסה, בניית מערכת יחסים הורית פונקציונלית, והתמודדות עם שינויים עתידיים"
  }
];

const violationTypes = [
  {
    category: "הפרות כלכליות",
    color: "bg-red-50 border-red-200",
    examples: [
      "אי-תשלום מזונות ילדים או מזונות אישה",
      "אי-ביצוע חלוקת רכוש כפי שנקבע",
      "אי-תשלום הוצאות חריגות (רפואיות, חינוכיות)",
      "אי-פירעון חובות משותפים"
    ]
  },
  {
    category: "הפרות הקשורות לילדים",
    color: "bg-orange-50 border-orange-200",
    examples: [
      "אי-קיום הסדרי ראייה ושהות",
      "שינוי חד-צדדי של זמני השהות",
      "סירוב לשתף מידע על בריאות או לימודי הילדים",
      "קבלת החלטות חשובות ללא תיאום (שינוי בית ספר, טיפולים רפואיים)"
    ]
  },
  {
    category: "הפרות אחרות",
    color: "bg-yellow-50 border-yellow-200",
    examples: [
      "אי-ביצוע חובות מגורים (סירוב לפנות דירה)",
      "הפרת סעיפי סודיות",
      "השפעה שלילית על תדמית ההורה השני בפני הילדים",
      "מניעת קשר בין הילדים להורה השני"
    ]
  }
];

const successStories = [
  {
    title: "שינוי הסדרי שהות בשל עבודה חדשה",
    situation: "אבא של שני ילדים בני 7 ו-9 קיבל הצעת עבודה מצוינת הכוללת משכורת גבוהה יותר, אך דורשת נסיעות לחו\"ל פעמיים בחודש. הסכם הגירושין קבע שהות שבועית מתחלפת.",
    solution: "במקום לפנות לבית המשפט, ההורים הגיעו לגישור והסכימו על הסדר גמיש: בשבועות שבהם האבא בחו\"ל - הילדים אצל האמא, בשבועות שבהם הוא בארץ - יקבל 10 ימים רצופים עם הילדים. האבא מממן פעילויות נוספות מהשכר הגבוה, ובחופשות - חלוקה שוויונית.",
    result: "ההסכם פועל בהצלחה כבר שנה, הילדים מרוצים, והאבא מצליח לשלב קריירה מתפתחת עם הורות מעורבת."
  },
  {
    title: "פתרון לאי-תשלום מזונות בשל מצב כלכלי",
    situation: "אבא שהתחייב לשלם 3,000 ₪ מזונות חודשיים איבד את עבודתו ולא הצליח לעמוד בתשלומים במשך 4 חודשים. הצטבר חוב של 12,000 ₪.",
    solution: "במקום הגשת תביעה להוצאה לפועל, האם הסכימה לגישור. האבא הציג נתונים על מצבו הכלכלי, והוסכם על הפחתה זמנית ל-1,500 ₪ לחודש למשך 6 חודשים, תוכנית החזר הדרגתית של החוב (200 ₪ חודשיים נוספים למשך 20 חודש), וחזרה לתשלום מלא מיד עם מציאת עבודה.",
    result: "האבא מצא עבודה בחודש ה-4, חזר מיד לתשלום המלא ואף הוסיף 500 ₪ חודשיים להחזר מואץ של החוב. היחסים בין ההורים השתפרו משמעותית."
  },
  {
    title: "תיאום הורי לילד עם צרכים מיוחדים",
    situation: "ילד בן 8 עם ADHD והורים בקונפליקט גבוה שלא הצליחו להסכים על תוכנית טיפול, מתן תרופות, וטיפול בהתפרצויות התנהגותיות.",
    solution: "מתאם הורי תיאם פגישה משותפת עם הפסיכיאטר המטפל, יצר 'תיק מעבר' שעובר עם הילד בין הבתים עם מידע עדכני, קבע פרוטוקול אחיד למתן תרופות בשני הבתים, ותיאם גישה משותפת לטיפול בהתפרצויות.",
    result: "אחרי 6 חודשי תיאום הורי, ההורים מסוגלים לתקשר ישירות בנושאי הטיפול, הילד מקבל טיפול עקבי ואחיד, וההישגים הלימודיים שלו השתפרו משמעותית."
  }
];

const faqs = [
  {
    question: "מה ההבדל בין גישור גירושין לגישור לאחר גירושין?",
    answer: "גישור גירושין מתקיים לפני הגירושין ומטרתו להגיע להסכם גירושין ראשוני. גישור לאחר גירושין מתקיים אחרי שכבר נחתם הסכם גירושין, כאשר מתעוררות מחלוקות חדשות או צריך לעדכן הסכמות בשל שינויים בנסיבות החיים."
  },
  {
    question: "מהו תיאום הורי ומתי זה נחוץ?",
    answer: "תיאום הורי הוא שירות מקצועי להורים גרושים הנמצאים בקונפליקט גבוה. מתאם הורי עוזר לפתור סוגיות יומיומיות הקשורות לילדים, משפר את התקשורת בין ההורים, ומונע הסלמה של סכסוכים. זה נחוץ כאשר ההורים מתקשים לתקשר ישירות ולקבל החלטות משותפות."
  },
  {
    question: "מה קורה כאשר הצד השני מפר את הסכם הגירושין?",
    answer: "יש שתי אפשרויות: להגיש תביעה בבית המשפט (הליך ארוך ויקר) או לפנות לגישור. גישור על הפרת הסכם מאפשר לפתור את הבעיה מהר, בעלות נמוכה, ולמצוא פתרונות יצירתיים שמתאימים למצב החדש. ההסכם החדש שנוצר בגישור מקבל תוקף משפטי."
  },
  {
    question: "האם אפשר לשנות הסדרי שהות שנקבעו בהסכם הגירושין?",
    answer: "כן, אפשר לשנות הסדרי שהות בשתי דרכים: בהסכמה הדדית דרך גישור (מהיר וזול), או באמצעות בית המשפט (ארוך ויקר). השינוי חייב להיות מוצדק ב'שינוי מהותי בנסיבות' ולשרת את טובת הילדים. גישור מאפשר למצוא פתרונות גמישים ומותאמים אישית."
  },
  {
    question: "כמה עולה תהליך גישור לאחר גירושין?",
    answer: "עלות שעת גישור היא 600-750 ₪ פלוס מע\"מ מכל צד. תהליך טיפוסי דורש 4-10 פגישות. זה זול ב-60-80% מהליך משפטי שיכול לעלות עשרות אלפי שקלים. תיאום הורי נמשך בדרך כלל 2-10 חודשים, עם פגישה אחת כל 2-3 שבועות."
  },
  {
    question: "האם גישור לאחר גירושין מתאים גם כשיש קונפליקט גבוה?",
    answer: "כן! למעשה, גישור ותיאום הורי מתאימים במיוחד למצבים של קונפליקט גבוה. המגשר או המתאם ההורי מיומנים בניהול מתחים, הפחתת הסלמה, ויצירת מרחב בטוח לשיחה. במקרים קיצוניים, אפשר אפילו לבצע גישור עם פגישות נפרדות (caucus mediation)."
  }
];

export default function PostDivorceMediationPage() {
  return (
    <>
      <main id="main-content">
        <Hero
          title="גישור לאחר גירושין"
          subtitle="פתרונות מקצועיים למחלוקות שלאחר הגירושין"
          description="גישור לאחר גירושין, תיאום הורי, ופתרון הפרות הסכם עם המגשרת עו״ד זהבית דבי. פתרונות מהירים, זולים וממוקדי ילד - ללא מלחמות משפטיות מיותרות."
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="צור קשר עכשיו"
          secondaryCtaHref="/contact"
          stats={stats}
          testimonials={testimonials}
        />

        {/* מהו גישור לאחר גירושין */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-beige-900 mb-4">
                  מהו גישור לאחר גירושין?
                </h2>
                <p className="text-xl text-beige-600">
                  הגירושין הם רק ההתחלה - החיים ממשיכים והם משתנים
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-beige-700 leading-relaxed space-y-6">
                <p>
                  <strong>גישור לאחר גירושין</strong> הוא תהליך מקצועי המאפשר להורים גרושים לפתור מחלוקות
                  ולהגיע להסכמות חדשות בהתאם למציאות המשתנה, מבלי להגיע שוב לבתי המשפט. התהליך מבוסס על עקרון
                  חשוב: <strong>גירושין לא מסתיימים בהסכם הגירושין</strong> - למעשה, הם מתחילים רק אחרי שההורים
                  נפרדים ומתחילים להתנהל בשני בתים נפרדים.
                </p>

                <div className="bg-beige-50 border-r-4 border-beige-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-beige-900 mb-3">למה צריך גישור אחרי הגירושין?</h3>
                  <p className="mb-3">
                    החיים משתנים כל הזמן - ילדים גדלים, הורים עוברים דירה, משנים עבודה, מתחילים קשרים חדשים,
                    והמציאות שהייתה נכונה בזמן הגירושין כבר לא מתאימה. כאשר מתעוררות מחלוקות חדשות או צורך
                    לשנות הסכמות קיימות, יש שתי אפשרויות:
                  </p>
                  <ul className="mr-6 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold ml-2">❌</span>
                      <span><strong>הליך משפטי</strong> - תביעה בבית המשפט, שנים של דיונים, עשרות אלפי שקלים, קונפליקט מתמשך</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold ml-2">✅</span>
                      <span><strong>גישור לאחר גירושין</strong> - תהליך מהיר (שבועות), זול (עד 80% חיסכון), ממוקד בטובת הילדים</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card className="bg-beige-100 border-beige-300">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl font-bold text-beige-900 mb-2">60-80%</div>
                      <div className="text-beige-700">חיסכון בעלויות</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-beige-100 border-beige-300">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl font-bold text-beige-900 mb-2">4-10</div>
                      <div className="text-beige-700">שבועות בממוצע</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-beige-100 border-beige-300">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl font-bold text-beige-900 mb-2">85%</div>
                      <div className="text-beige-700">שיעור הצלחה</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* תרחישים נפוצים */}
        <section className="py-16 bg-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-beige-900 mb-4">
                  מתי נחוץ גישור לאחר גירושין?
                </h2>
                <p className="text-xl text-beige-600">
                  תרחישים נפוצים הדורשים עדכון הסכמות
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scenarios.map((scenario, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <span className="ml-3 text-3xl">{scenario.icon}</span>
                        {scenario.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-beige-600 mb-4">{scenario.description}</p>
                      <ul className="space-y-2">
                        {scenario.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start text-sm text-beige-700">
                            <Check className="h-4 w-4 text-beige-700 ml-2 mt-0.5 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* תיאום הורי - סקציה מרכזית */}
        <section className="py-16 bg-gradient-to-r from-beige-100 to-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-beige-900 mb-4">
                  👨‍👩‍👧‍👦 תיאום הורי - הפתרון לקונפליקט הורי גבוה
                </h2>
                <p className="text-xl text-beige-600">
                  שירות מקצועי ייעודי להורים גרושים הנמצאים במתח מתמשך
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-beige-900 mb-6">
                  מהו תיאום הורי?
                </h3>
                <div className="prose prose-lg max-w-none text-beige-700 space-y-4">
                  <p>
                    <strong>תיאום הורי (Parental Coordination)</strong> הוא שירות מקצועי ייעודי להורים גרושים או נפרדים
                    שנמצאים ב<strong>קונפליקט גבוה</strong> ומתקשים לשתף פעולה ולקבל החלטות משותפות לגבי ילדיהם.
                    זוהי שיטת התערבות המיועדת לפתור סכסוכים יומיומיים <strong>מחוץ לבית המשפט</strong>, בסביבה
                    מקצועית ותומכת.
                  </p>

                  <div className="bg-beige-50 p-6 rounded-lg">
                    <h4 className="font-bold text-beige-900 mb-3">מי הוא מתאם הורי?</h4>
                    <p>
                      מתאם הורי הוא איש או אשת מקצוע בתחום בריאות הנפש - עובד סוציאלי קליני, פסיכולוג קליני,
                      או מגשר מוסמך עם הכשרה נוספת בתיאום הורי. המתאם ההורי נשכר על ידי שני ההורים יחד, או
                      ממונה על ידי צו בית משפט במקרים של קונפליקט גבוה במיוחד.
                    </p>
                  </div>

                  <h4 className="font-bold text-beige-900 mt-6 mb-3">מטרות תיאום הורי:</h4>
                  <ul className="mr-6 space-y-3">
                    <li className="flex items-start">
                      <span className="text-beige-700 font-bold ml-2 text-xl">📚</span>
                      <div>
                        <strong>חינוך פסיכולוגי</strong> - הבנת ההשפעות של קונפליקט הורי על הילדים,
                        למידת דפוסי תקשורת בריאים, הפרדה בין הקשר הזוגי לקשר ההורי
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-700 font-bold ml-2 text-xl">🔍</span>
                      <div>
                        <strong>הערכת קשיים ופתרון בעיות</strong> - זיהוי נקודות מחלוקת עיקריות,
                        הבנת צרכים, פיתוח פתרונות מעשיים
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-700 font-bold ml-2 text-xl">⚖️</span>
                      <div>
                        <strong>ניהול סכסוכים</strong> - תיווך בין ההורים, סיוע בקבלת החלטות משותפות,
                        מניעת הסלמה
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-700 font-bold ml-2 text-xl">💪</span>
                      <div>
                        <strong>אימון הורי</strong> - כלים להתמודדות עם קונפליקטים, טכניקות תקשורת יעילה,
                        חיזוק יכולות הורות
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-700 font-bold ml-2 text-xl">❤️</span>
                      <div>
                        <strong>שמירה על טובת הילדים</strong> - הילדים במרכז בכל החלטה, הפרדת הקונפליקט
                        ההורי מהילדים
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* יתרונות תיאום הורי */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {parentalCoordinationBenefits.map((benefit, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <div className="ml-3">{benefit.icon}</div>
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-beige-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* ניהול מפגשים עם ילדים */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-beige-900 mb-6">
                  📅 ניהול וסידור מפגשים עם הילדים
                </h3>
                <div className="prose prose-lg max-w-none text-beige-700 space-y-4">
                  <p>
                    אחד ההיבטים המרכזיים של תיאום הורי הוא <strong>ניהול ותיאום סידורי המפגשים</strong>
                    בין ההורים לילדים. תיאום נכון של מפגשים מונע עימותים, מפחית מתחים, ומאפשר לילדים
                    ליהנות מקשר איכותי עם שני ההורים.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <Check className="h-5 w-5 ml-2" />
                        תיאום לוגיסטי
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• קביעת מקומות העברה קבועים ונוחים</li>
                        <li>• תיאום שעות שלא פוגעות בשגרת הילדים</li>
                        <li>• פתרון בעיות של איחורים או ביטולים</li>
                        <li>• תכנון מראש של חגים וחופשות</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        <Check className="h-5 w-5 ml-2" />
                        גמישות והתאמה
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• התאמת זמנים לשינויים בלוח הזמנים</li>
                        <li>• התחשבות בפעילויות חברתיות של הילדים</li>
                        <li>• יצירת "תוכנית גיבוי" למקרים חריגים</li>
                        <li>• התאמה לגיל ולצרכים המשתנים של הילדים</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-beige-100 p-6 rounded-lg mt-6">
                    <h4 className="font-bold text-beige-900 mb-3">משך התהליך והעלויות</h4>
                    <p className="mb-3">
                      תהליך תיאום הורי נמשך בדרך כלל <strong>2-10 חודשים</strong>, בהתאם למורכבות המצב
                      ורמת הקונפליקט. הפגישות מתקיימות בדרך כלל <strong>אחת כל 2-3 שבועות</strong>.
                    </p>
                    <p>
                      <strong>עלות:</strong> דומה לעלות גישור - 600-750 ₪ פלוס מע"מ לשעה מכל צד.
                      למרות שזה נשמע יקר, זה <strong>זול פי 10</strong> מהליכים משפטיים חוזרים ונשנים
                      שיכולים לעלות עשרות אלפי שקלים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* גישור על הפרות הסכם */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-beige-900 mb-4">
                  ⚠️ גישור על הפרות הסכם גירושין
                </h2>
                <p className="text-xl text-beige-600">
                  כאשר הצד השני לא עומד בהתחייבויות - יש פתרון!
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-beige-700 space-y-6 mb-12">
                <p>
                  <strong>הפרת הסכם גירושין</strong> מתרחשת כאשר אחד מהצדדים אינו ממלא אחר תנאי ההסכם
                  שנקבע. חשוב להבין שאחרי שהסכם הגירושין מקבל תוקף של פסק דין בבית המשפט, הפרת ההסכם
                  היא לא רק הפרה של "חוזה רגיל" אלא <strong>הפרה של פסק דין</strong> - עבירה משפטית חמורה.
                </p>

                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-3">יש לכם שתי אפשרויות:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-red-700 mb-2">❌ הליך משפטי (לא מומלץ)</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• הגשת תביעה בבית המשפט</li>
                        <li>• 2-3 שנים של דיונים</li>
                        <li>• עשרות אלפי שקלים בהוצאות</li>
                        <li>• החמרה ביחסים</li>
                        <li>• פגיעה בילדים</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-700 mb-2">✅ גישור על הפרות (מומלץ מאוד)</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• פתרון תוך 4-10 שבועות</li>
                        <li>• חיסכון של 60-80% בעלויות</li>
                        <li>• פתרונות יצירתיים ומותאמים</li>
                        <li>• שמירה על יכולת שיתוף פעולה</li>
                        <li>• הגנה על הילדים מקונפליקט</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* סוגי הפרות */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-beige-900 text-center mb-8">
                  סוגי הפרות נפוצות
                </h3>
                {violationTypes.map((type, index) => (
                  <Card key={index} className={`${type.color} border-2`}>
                    <CardHeader>
                      <CardTitle className="text-xl">{type.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-beige-800 ml-2 mt-0.5 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* סיפורי הצלחה */}
        <section className="py-16 bg-beige-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-beige-900 mb-4">
                  💡 סיפורי הצלחה מהשטח
                </h2>
                <p className="text-xl text-beige-600">
                  דוגמאות אמיתיות לפתרונות שעבדו
                </p>
              </div>

              <div className="space-y-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl text-beige-900">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-bold text-beige-800 mb-2">📋 המצב:</h4>
                        <p className="text-beige-700 leading-relaxed">{story.situation}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-beige-800 mb-2">💡 הפתרון בגישור:</h4>
                        <p className="text-beige-700 leading-relaxed">{story.solution}</p>
                      </div>
                      <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded">
                        <h4 className="font-bold text-green-900 mb-2">✅ התוצאה:</h4>
                        <p className="text-green-800 leading-relaxed">{story.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* שאלות נפוצות */}
        <section className="py-16 bg-white">
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
                    <AccordionTrigger className="text-right text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-right text-base leading-relaxed text-beige-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* קריאה לפעולה */}
        <section className="py-16 bg-beige-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                נתקעתם במחלוקת לאחר הגירושין?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                אל תתנו למחלוקות קטנות להפוך למלחמה משפטית גדולה. פנו לגישור והצילו זמן, כסף ועצבים.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold mb-1">מהיר</div>
                  <div className="text-sm opacity-90">4-10 שבועות</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold mb-1">זול</div>
                  <div className="text-sm opacity-90">60-80% חיסכון</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="font-bold mb-1">ממוקד ילד</div>
                  <div className="text-sm opacity-90">טובת הילדים במרכז</div>
                </div>
              </div>

              <ContactForm email="zehavit@silaw.co.il" phone="+972-53-606-2456" />

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    קבע פגישת ייעוץ
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-beige-900 hover:bg-beige-50" asChild>
                  <a href="tel:+972-53-606-2456">
                    התקשר עכשיו - 053-606-2456
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
