import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { testimonialSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "סיפורי הצלחה - המגשרת עו״ד זהבית דבי",
  description: "סיפורי הצלחה אמיתיים של המגשרת עו״ד זהבית דבי. גישור מוצלח בגירושין, משמורת ילדים ורכוש. 85% הצלחה בפתרון סכסוכים. כך המגשרת פותרת בעיות קשות ומורכבות בגירושין.",
  keywords: "סיפורי הצלחה, המגשרת עו״ד זהבית דבי, גישור מוצלח, פתרון סכסוכים, גירושין בלי מלחמה, המגשרת באר שבע, גישור משמורת, חלוקת רכוש",
  openGraph: {
    title: "סיפורי הצלחה - המגשרת עו״ד זהבית דבי",
    description: "הכירו את הסיפורים המרגשים של זוגות שהצליחו להגיע להסכמות בזכות הגישור המקצועי של עו״ד זהבית דבי המגשרת",
    type: "website",
  },
};

const caseStudies = [
  {
    id: 1,
    title: "יעל ודני מבאר שבע - מעסק משפחתי למלחמה לשותפות מחודשת",
    location: "באר שבע",
    marriageDuration: "12 שנים",
    mainConflict: "עסק משפחתי",
    tags: ["עסק משפחתי", "רכוש", "שותפות"],
    background: {
      description: "יעל (39) ודני (42) נשואים 12 שנים ובעלי מסעדה משפחתית מצליחה בבאר שבע. לאחר שנים של עבודה משותפת, החלו מחלוקות על ניהול העסק והתפתח קרע שהוביל לבקשת גירושין.",
      quote: "\"אנחנו בנינו את המקום הזה יחד במשך שנים, ועכשיו כל אחד רוצה לקחת את המסעדה לבד. זה הרס את הנישואין שלנו.\""
    },
    conflict: {
      description: "המחלוקת התמקדה בבעלות על המסעדה, חלוקת הרווחים, וקבלת החלטות עסקיות. יעל טענה שדני מקבל החלטות חד-צדדיות, בעוד דני טען שיעל לא מבינה בהיבטים הפיננסיים.",
      dialogue: [
        {
          speaker: "יעל",
          text: "אתה לא מתייעץ איתי על שום דבר! אתה פשוט מחליט על ספקים חדשים, על שינויי תפריט, על הכל!"
        },
        {
          speaker: "דני",
          text: "את לא מבינה איך עסק עובד! כשיש הזדמנות צריך לתפוס אותה מהר, לא להתכנס לועדות!"
        },
        {
          speaker: "יעל",
          text: "אבל זה גם שלי! אני השקעתי כאן את כל החיים שלי!"
        }
      ]
    },
    intervention: {
      description: "עו״ד זהבית דבי המגשרת הצליחה לזהות שהבעיה האמיתית לא הייתה העסק אלא חוסר תקשורת. היא ארגנה פגישות נפרדות עם כל צד ולאחר מכן פגישות משותפות עם מתודולוגיה מיוחדת.",
      methods: [
        "הפרדה בין הרגשות האישיים לעסקיים",
        "יצירת מסגרת תקשורת מובנית",
        "הגדרת תפקידים ואחריות ברורים",
        "פיתוח מנגנון קבלת החלטות משותף"
      ]
    },
    solution: {
      description: "הפתרון שנמצא היה חדשני: הקמת מועצת מנהלים משפחתית עם חלוקת תחומי אחריות מדויקת. יעל קיבלה אחריות על השירות והאווירה, דני על הכספים וההתקשרויות.",
      details: [
        "פגישה שבועית קבועה לקבלת החלטות משותפות",
        "הפרדה בין החשבון העסקי לאישי",
        "מנגנון פתרון סכסוכים מובנה",
        "הסכם שותפות מחודש ומפורט"
      ]
    },
    outcome: {
      success: true,
      description: "לאחר 4 חודשי גישור, הזוג לא רק נשאר נשוי אלא גם חיזק את העסק. המסעדה גדלה ב-30% והם פתחו סניף נוסף.",
      clientQuote: "זהבית היא מגשרת מצוינת. היא הצליחה להחזיר לנו לא רק את הנישואין אלא גם את החלום המשותף שלנו. היום אנחנו צוות חזק יותר מתמיד."
    }
  },
  {
    id: 2,
    title: "רונית ומיכאל מקיבוץ להב - ממאבק משמורת לשיתוף פעולה הורי",
    location: "קיבוץ להב",
    marriageDuration: "8 שנים",
    mainConflict: "משמורת ילדים",
    tags: ["משמורת", "ילדים", "הסכם הורי"],
    background: {
      description: "רונית (35) ומיכאל (37) נשואים 8 שנים ובני זוג לשני ילדים: נועה (6) ותום (4). לאחר גירושין סוער, נכנסו למאבק קשה על המשמורת שפגע בילדים.",
      quote: "\"הילדים שלנו הפכו לקורבנות של המלחמה בינינו. כל פעם שהם חוזרים מהשני, הם מתנהגים אחרת.\""
    },
    conflict: {
      description: "הקונפליקט התמקד בהסדרי המשמורת והראייה. כל אחד מההורים האמין שהוא הטוב יותר לילדים והאשים את השני בפגיעה ברווחתם.",
      dialogue: [
        {
          speaker: "רונית",
          text: "הוא לא מסוגל לטפל בילדים! הוא עובד עד מאוחר ומשאיר אותם עם הבייביסיטר כל הזמן!"
        },
        {
          speaker: "מיכאל",
          text: "היא מרעילה את הילדים נגדי! כל פעם שהם חוזרים אליה הם לא רוצים לדבר איתי!"
        },
        {
          speaker: "רונית",
          text: "אני לא מרעילה אף אחד! אני רק אומרת להם את האמת על מי שאבא שלהם באמת!"
        }
      ]
    },
    intervention: {
      description: "המגשרת עו״ד זהבית דבי זיהתה שהילדים נמצאים במרכז הסכסוך וזה פוגע בהם קשה. היא החליטה על גישה ממוקדת ילדים עם מפגשים נפרדים וטכניקות מיוחדות.",
      methods: [
        "הכנת תוכנית הורית משותפת",
        "קביעת כללי תקשורת בנוכחות הילדים",
        "יצירת מרחבים נייטרליים למעברים",
        "הדרכה על השפעת גירושין על ילדים"
      ]
    },
    solution: {
      description: "הפתרון כלל יצירת הסכם הורי מפורט עם דגש על טובת הילדים, לוח זמנים גמיש, ומנגנון תקשורת בריא בין ההורים.",
      details: [
        "משמורת משותפת עם לוח זמנים גמיש",
        "מעברי ילדים במקומות ציבוריים נייטרליים",
        "אפליקציית תקשורת הורית מיוחדת",
        "פגישות הערכה רבעוניות לבחינת הצרכים"
      ]
    },
    outcome: {
      success: true,
      description: "לאחר 6 חודשי עבודה, ההורים למדו לתקשר בצורה בונה ולשים את הילדים במרכז. הילדים החלו להראות שיפור משמעותי בהתנהגות ובלימודים.",
      clientQuote: "זהבית לימדה אותנו איך להיות הורים גם אחרי הגירושין. היום הילדים שלנו מאושרים ואנחנו מצליחים לעבוד כצוות הורי למענם."
    }
  },
  {
    id: 3,
    title: "שירה ועמיר מלהבים - מחלוקת רכוש שהפכה להסכם הוגן",
    location: "להבים",
    marriageDuration: "15 שנים",
    mainConflict: "חלוקת רכוש",
    tags: ["רכוש", "נכסים", "חלוקה הוגנת"],
    background: {
      description: "שירה (44) ועמיר (46) נשואים 15 שנים וצברו רכוש נרחב: דירת מגורים, דירת השקעה, עסק קטן וחסכונות משמעותיים. הגירושין יצרו מחלוקת קשה על החלוקה.",
      quote: "\"15 שנה בנינו הכל יחד, ועכשיו אנחנו רבים על כל שקל כאילו אנחנו אויבים.\""
    },
    conflict: {
      description: "המחלוקת התמקדה בהערכת שווי הנכסים, תרומת כל צד להשגתם, וחלוקה הוגנת שתאפשר לשניהם להתחיל מחדש בכבוד.",
      dialogue: [
        {
          speaker: "שירה",
          text: "אני זו שטיפלתי בבית ובילדים בזמן שאתה בנית את הקריירה! התרומה שלי לא פחות חשובה!"
        },
        {
          speaker: "עמיר",
          text: "אבל אני זה שעבדתי 12 שעות ביום כדי להשיג את הכסף הזה! העסק זה היצירה שלי!"
        },
        {
          speaker: "שירה",
          text: "ואני לא יצרתי כלום? מי חשבת שמנהל את הבית ומגדל את הילדים בזמן הזה?"
        }
      ]
    },
    intervention: {
      description: "המגשרת עו״ד זהבית דבי הביאה מומחה הערכה נייטרלי וארגנה תהליך שקוף של הערכת כל הנכסים. היא עזרה לזוג להבין את התרומה הייחודית של כל צד.",
      methods: [
        "הערכה מקצועית ונייטרלית של כל הנכסים",
        "מיפוי תרומות לא כספיות (טיפול בבית, גידול ילדים)",
        "יצירת מודל חלוקה מותאם אישית",
        "התחשבות בצרכים עתידיים של שני הצדדים"
      ]
    },
    solution: {
      description: "הפתרון כלל חלוקה יצירתית שלקחה בחשבון לא רק השווי הכספי אלא גם את הצרכים האישיים והמקצועיים של כל צד.",
      details: [
        "שירה קיבלה את דירת המגורים + חלק מהחסכונות",
        "עמיר קיבל את העסק + דירת ההשקעה",
        "חלוקת החסכונות באופן יחסי להכנסות עתידיות",
        "מנגנון עדכון הסכם לפי שינויים בנסיבות"
      ]
    },
    outcome: {
      success: true,
      description: "לאחר 3 חודשי גישור, הושג הסכם מקיף ושני הצדדים הרגישו שהחלוקה הוגנת. הם שמרו על יחסים אדיבים למען הילדים.",
      clientQuote: "זהבית הצליחה להראות לנו שחלוקה הוגנת זה לא רק חשבון מתמטי. היא לקחה בחשבון את כל מה שבנינו יחד ואת החלומות שלנו לעתיד. זה פתרון מעולה."
    }
  },
  {
    id: 4,
    title: "חיה ודוד ממיתר - גישור עם ילד בעל צרכים מיוחדים",
    location: "מיתר",
    marriageDuration: "10 שנים",
    mainConflict: "הסדרי טיפול בילד עם אוטיזם",
    tags: ["צרכים מיוחדים", "משמורת", "מזונות מיוחדים"],
    background: {
      description: "חיה (36) ודוד (38) נשואים 10 שנים והורים לאיתי (8) שמאובחן על הרצף האוטיסטי, ולמיה (5). המורכבות של הטיפול באיתי הובילה למתחים ולבסוף להחלטה על גירושין.",
      quote: "\"איך מחלקים משמורת כשהילד צריך שגרה כל כך קבועה? כל שינוי קטן יכול לגרום לו להתמוטטות.\""
    },
    conflict: {
      description: "האתגר העיקרי היה איך לארגן הסדרי משמורת שלא יפגעו בשגרה הקריטית של איתי, וכיצד לחלק את העלויות הגבוהות של הטיפולים.",
      dialogue: [
        {
          speaker: "חיה",
          text: "איתי צריך את אותו סדר יום, אותם טיפולים, אותם אנשים. איך הוא יעבור בין שני בתים?"
        },
        {
          speaker: "דוד",
          text: "אני גם רוצה להיות חלק מהחיים שלו! אני האבא שלו, אני מכיר את הצרכים שלו!"
        },
        {
          speaker: "חיה",
          text: "אבל הטיפולים עולים המון, והמטפלת הפרטית גרה ליד הבית שלי..."
        }
      ]
    },
    intervention: {
      description: "המגשרת עו״ד זהבית דבי הביאה יועץ מומחה לצרכים מיוחדים והתמקדה ביצירת הסדר שישמור על יציבות עבור איתי תוך מתן מקום משמעותי לשני ההורים.",
      methods: [
        "התייעצות עם מומחים לילדים על הרצף",
        "יצירת 'תוכנית מעבר' מדורגת",
        "הקמת קרן משותפת לטיפולים",
        "תיאום מלא בין שני הבתים"
      ]
    },
    solution: {
      description: "נמצא פתרון יצירתי: איתי נשאר בבית העיקרי עם חיה, אך דוד מגיע לביקורים יומיים ולינות בסופי שבוע בסביבה המוכרת לילד.",
      details: [
        "דוד שוכר דירה קרובה (5 דקות הליכה)",
        "שני ההורים משתתפים בטיפולים",
        "קרן משותפת לטיפולים מיוחדים",
        "תקשורת יומית על מצב איתי",
        "גמישות מלאה להתאמות לפי צרכי הילד"
      ]
    },
    outcome: {
      success: true,
      description: "ההסדר עובד מצוין כבר שנה. איתי מראה שיפור בתפקוד, ושני ההורים מרגישים מעורבים ומשמעותיים בחייו.",
      clientQuote: "המגשרת עו״ד זהבית דבי הבינה שכאן צריך לחשוב מחוץ לקופסה. היא עזרה לנו לשים את איתי במרכז ולמצוא דרך שכולם מרוויחים, במיוחד הוא."
    }
  },
  {
    id: 5,
    title: "נעמי ואורי מבאר שבע - גישור במשפחה דתית",
    location: "באר שבע",
    marriageDuration: "15 שנים",
    mainConflict: "גירושין בקהילה דתית שמרנית",
    tags: ["גירושין דתיים", "בית דין רבני", "כתובה"],
    background: {
      description: "נעמי (35) ואורי (37) נשואים 15 שנים בקהילה דתית בירושלים. להם 5 ילדים. הגירושין בקהילה שלהם נתפסים כטאבו והלחץ החברתי היה עצום.",
      quote: "\"בקהילה שלנו אין גירושין. איך נסביר לילדים? איך נתמודד עם הסטיגמה?\""
    },
    conflict: {
      description: "מעבר לקשיים הרגילים של גירושין, הזוג התמודד עם לחץ קהילתי כבד, חשש מנידוי חברתי, ודילמות הלכתיות.",
      dialogue: [
        {
          speaker: "נעמי",
          text: "אני לא יכולה להישאר בקהילה אחרי הגירושין. הילדים לא יתקבלו לבתי הספר!"
        },
        {
          speaker: "אורי",
          text: "אבל כל המשפחה שלנו כאן, כל החיים שלנו כאן. אנחנו לא יכולים פשוט לעזוב!"
        },
        {
          speaker: "נעמי",
          text: "ומה עם הכתובה? הרב אמר שזה מסובך מאוד..."
        }
      ]
    },
    intervention: {
      description: "המגשרת עו״ד זהבית דבי, בעלת הבנה עמוקה בדיני משפחה דתיים, עבדה בתיאום עם רבני הקהילה ויצרה פתרון שמכבד את ההלכה ואת הקהילה.",
      methods: [
        "תיאום עם רבני הקהילה",
        "גישור תוך כיבוד ההלכה",
        "הכנת הילדים והקהילה",
        "סיוע בהסדר גט כשר"
      ]
    },
    solution: {
      description: "הושג הסדר גירושין שמכבד את ההלכה ומאפשר לשני ההורים להישאר בקהילה תוך שמירה על כבודם.",
      details: [
        "גט כשר עם הסכם מפורט",
        "הסדר משמורת המכבד את המסורת",
        "תמיכת רבני הקהילה בהסכם",
        "ליווי הילדים על ידי יועצת חינוכית דתית",
        "שני ההורים נשארים בקהילה"
      ]
    },
    outcome: {
      success: true,
      description: "הגירושין עברו בכבוד, הקהילה קיבלה את ההחלטה, והילדים ממשיכים בבתי הספר שלהם. שני ההורים פעילים בקהילה.",
      clientQuote: "עו״ד זהבית דבי הוכיחה שאפשר לעשות גישור גם בקהילה הדתית. היא כיבדה את הערכים שלנו ועזרה לנו לעבור את זה בדרך של כבוד ושלום."
    }
  },
  {
    id: 6,
    title: "שרון ועידו מקיבוץ להב - חלוקת עסק טכנולוגי",
    location: "קיבוץ להב",
    marriageDuration: "7 שנים",
    mainConflict: "חלוקת סטארטאפ בשווי מיליונים",
    tags: ["עסק טכנולוגי", "סטארטאפ", "אופציות"],
    background: {
      description: "שרון (32) ועידו (34) הקימו יחד סטארטאפ מצליח בתחום הסייבר. החברה גייסה 5 מיליון דולר והם היו בפתח של אקזיט כשהחליטו להתגרש.",
      quote: "\"בנינו את החברה הזו ביחד מהיום הראשון. איך מחלקים חלום שעוד לא התממש?\""
    },
    conflict: {
      description: "הסכסוך התמקד בשווי העתידי של החברה, חלוקת האופציות, ומי ימשיך לנהל את החברה אחרי הגירושין.",
      dialogue: [
        {
          speaker: "שרון",
          text: "אני כתבתי את כל הקוד! בלעדיי אין מוצר!"
        },
        {
          speaker: "עידו",
          text: "ואני גייסתי את כל ההשקעה! בלעדיי אין חברה!"
        },
        {
          speaker: "שרון",
          text: "אבל האקזיט יכול לקרות בעוד שנה או בעוד חמש שנים, איך נחלק משהו שלא קיים?"
        }
      ]
    },
    intervention: {
      description: "המגשרת עו״ד זהבית דבי הביאה מעריך שווי מומחה לסטארטאפים ועזרה לזוג למצוא מנגנון חלוקה שמתחשב בעתיד הלא ידוע.",
      methods: [
        "הערכת שווי מקצועית",
        "יצירת מנגנון חלוקה דינמי",
        "הסדר לאקזיט עתידי",
        "שמירה על החברה כנכס משותף"
      ]
    },
    solution: {
      description: "נמצא פתרון חדשני: שרון ממשיכה כCTO, עידו כיו\"ר הדירקטוריון, עם מנגנון חלוקה מדורג לפי אבני דרך.",
      details: [
        "שרון מקבלת 60% מהאופציות הטכנולוגיות",
        "עידו מקבל 60% מהאופציות העסקיות",
        "מנגנון חלוקה באקזיט לפי נוסחה מוסכמת",
        "זכות סירוב ראשון למכירת מניות",
        "הסכם בעלי מניות מפורט"
      ]
    },
    outcome: {
      success: true,
      description: "שנה אחרי הגירושין החברה נמכרה ב-20 מיליון דולר. שניהם מרוצים מהחלוקה ואף שומרים על יחסי עבודה טובים.",
      clientQuote: "המגשרת עו״ד זהבית דבי הבינה את המורכבות של חלוקת נכס עתידי. הפתרון שהיא עזרה לנו למצוא היה גאוני ואפשר לנו להמשיך להצליח גם אחרי הגירושין."
    }
  }
];

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialSchema),
        }}
      />

      <main id="main-content">
        <Hero
          title="סיפורי הצלחה של המגשרת"
          subtitle="סיפורים אמיתיים של הצלחה"
          description="הכירו את הסיפורים המרגשים של זוגות שהצליחו להגיע להסכמים מוסכמים ולפתור סכסוכים קשים בזכות הגישור המקצועי של עו״ד זהבית דבי המגשרת"
          ctaText="קבע פגישת ייעוץ"
          ctaHref="/contact"
          secondaryCtaText="למד על גישור"
          secondaryCtaHref="/mediation"
          stats={[
            { number: "85%", label: "הצלחה בסיום הגישור" },
            { number: "3-6", label: "חודשי גישור ממוצע" },
            { number: "70%", label: "חיסכון בעלויות משפטיות" }
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-beige-900 mb-4">
                סיפורי הצלחה מהשטח
              </h2>
              <p className="text-xl text-beige-600">
                כל סיפור הוא עדות לכוחה של התקשורת הבונה והגישור המקצועי
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-beige-100 to-blue-50 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <CardTitle className="text-2xl sm:text-3xl font-bold text-beige-900 mb-4">
                      {caseStudy.title}
                    </CardTitle>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-beige-600">
                      <div>
                        <span className="font-semibold">מיקום:</span> {caseStudy.location}
                      </div>
                      <div>
                        <span className="font-semibold">משך נישואין:</span> {caseStudy.marriageDuration}
                      </div>
                      <div>
                        <span className="font-semibold">סכסוך מרכזי:</span> {caseStudy.mainConflict}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 space-y-8">
                    {/* רקע הזוג */}
                    <div>
                      <h4 className="text-xl font-semibold text-beige-900 mb-4">רקע הזוג</h4>
                      <p className="text-beige-700 mb-4">{caseStudy.background.description}</p>
                      <blockquote className="border-r-4 border-beige-600 pr-4 italic text-beige-600">
                        {caseStudy.background.quote}
                      </blockquote>
                    </div>

                    {/* הקונפליקט */}
                    <div>
                      <h4 className="text-xl font-semibold text-beige-900 mb-4">הקונפליקט המרכזי</h4>
                      <p className="text-beige-700 mb-6">{caseStudy.conflict.description}</p>

                      <div className="bg-beige-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-4 text-beige-900">מתוך הדיאלוג בין הצדדים:</h5>
                        <div className="space-y-4">
                          {caseStudy.conflict.dialogue.map((exchange, index) => (
                            <div key={index} className="border-r-2 border-red-200 pr-4">
                              <p className="font-medium text-red-600">{exchange.speaker}:</p>
                              <p className="text-beige-700 italic">{`"${exchange.text}"`}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* התערבות המגשרת */}
                    <div>
                      <h4 className="text-xl font-semibold text-beige-900 mb-4">התערבות המגשרת</h4>
                      <p className="text-beige-700 mb-6">{caseStudy.intervention.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {caseStudy.intervention.methods.map((method, index) => (
                          <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                            <div className="flex-shrink-0 w-2 h-2 bg-beige-700 rounded-full mt-2"></div>
                            <p className="text-beige-700">{method}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* הפתרון */}
                    <div>
                      <h4 className="text-xl font-semibold text-beige-900 mb-4">הפתרון היצירתי</h4>
                      <p className="text-beige-700 mb-6">{caseStudy.solution.description}</p>

                      <div className="bg-beige-100 p-6 rounded-lg">
                        <h5 className="font-semibold mb-4 text-beige-800">פרטי הפתרון:</h5>
                        <div className="grid grid-cols-1 gap-3">
                          {caseStudy.solution.details.map((detail, index) => (
                            <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                              <div className="flex-shrink-0 w-2 h-2 bg-beige-700 rounded-full mt-2"></div>
                              <p className="text-beige-800">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* התוצאה */}
                    <div>
                      <h4 className="text-xl font-semibold text-beige-900 mb-4">התוצאה המוצלחת</h4>
                      <p className="text-beige-700 mb-6">{caseStudy.outcome.description}</p>

                      <blockquote className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                        <p className="text-blue-800 italic mb-3">
                          {`"${caseStudy.outcome.clientQuote}"`}
                        </p>
                        <p className="text-blue-600 text-sm">
                          - עדות הלקוח על החוויה עם המגשרת עו״ד זהבית דבי
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* קטע המלצות */}
        <section className="py-16 bg-beige-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-beige-900 mb-8">
                מה מייחד את זהבית?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-4">יכולת הפיכת יריבים לשותפים</h3>
                  <p className="text-beige-600">
                    היכולת המיוחדת להפוך זוגות שנמצאים במלחמה קשה לשותפים בפתרון הקושי
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4">זיהוי הבעיה האמיתית</h3>
                  <p className="text-beige-600">
                    התמחות בזיהוי הגורם האמיתי לסכסוך מעבר לטענות השטחיות
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">🔮</div>
                  <h3 className="text-xl font-semibold mb-4">פתרונות מחוץ לקופסה</h3>
                  <p className="text-beige-600">
                    יצירתיות בפיתוח פתרונות שמתאימים לצרכים הייחודיים של כל זוג
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <blockquote className="text-xl italic text-beige-700 mb-4">
                  {"עו״ד זהבית דבי היא מגשרת יוצאת דופן. היכולת שלה לראות מעבר לכעס ולטינה ולהגיע ללב הבעיה היא יוצאת דופן. בכל מקרה שהיא טופלת, היא מצליחה למצוא את הדרך להביא לפתרון שמתאים לכל הצדדים."}
                </blockquote>
                <p className="font-semibold text-beige-700">
                  - ד{"ר"} משה כהן, מומחה לדיני משפחה
                </p>
              </div>

              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/contact">
                  רוצים לחוות את ההצלחה? קבעו פגישה
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
