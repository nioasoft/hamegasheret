import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | המגשרת עו״ד זהבית דבי",
  description: "הצהרת נגישות של משרד המגשרת עו״ד זהבית דבי - מחויבות לנגישות דיגיטלית בהתאם לתקן WCAG 2.0 רמה AA והנחיות נגישות תכנים באינטרנט.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hamegasheret.co.il/accessibility-statement",
  },
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-beige-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-beige-900 mb-6">
                הצהרת נגישות
              </h1>
              <p className="text-xl text-beige-600">
                המגשרת עו״ד זהבית דבי - דבי סיידה ושות'
              </p>
              <p className="text-sm text-beige-500 mt-4">
                תאריך עדכון אחרון: אוקטובר 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <div className="mb-12">
                <div className="bg-beige-50 border-r-4 border-beige-600 p-6 rounded-lg mb-8">
                  <p className="text-lg text-beige-800 leading-relaxed">
                    משרד עורכי הדין "דבי סיידה ושות'" מחויב להנגשת האתר שלנו לאנשים עם מוגבלויות ולספק חוויית שימוש שווה
                    ונגישה לכל המשתמשים. אנו פועלים ליישום עקרונות הנגישות בהתאם לתקן הישראלי (ת"י 5568) ולהנחיות
                    WCAG 2.0 ברמה AA, ומשקיעים מאמצים מתמשכים לשיפור הנגישות באתר.
                  </p>
                </div>
              </div>

              {/* מהו אתר נגיש */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">מהו אתר נגיש?</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    אתר נגיש הוא אתר המאפשר לאנשים עם מוגבלויות לגלוש בו ולהשתמש בשירותיו בקלות, ביעילות ובעצמאות,
                    באופן שווה למשתמשים ללא מוגבלויות. זאת באמצעות התאמות טכנולוגיות ועיצוביות שונות המתאימות למגוון רחב
                    של צרכים, לרבות:
                  </p>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>נגישות לאנשים עם לקות ראייה (כולל עיוורים וכבדי ראייה)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>נגישות לאנשים עם לקות שמיעה (כולל חרשים וכבדי שמיעה)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>נגישות לאנשים עם מוגבלות מוטורית ותפקודית</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>נגישות לאנשים עם לקויות למידה וקוגניטיביות</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* רמת הנגישות באתר */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">רמת הנגישות באתר</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    אתר זה נבנה תוך התחשבות בהנחיות הנגישות הבינלאומיות והישראליות:
                  </p>
                  <div className="space-y-4">
                    <div className="border-r-4 border-blue-500 pr-4 bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-beige-800 mb-2">WCAG 2.0 - רמה AA</h4>
                      <p className="text-beige-700">
                        האתר עומד בהנחיות WCAG 2.0 ברמה AA (Web Content Accessibility Guidelines),
                        התקן הבינלאומי המוביל לנגישות תכנים באינטרנט.
                      </p>
                    </div>
                    <div className="border-r-4 border-blue-500 pr-4 bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-beige-800 mb-2">תקן ישראלי ת"י 5568</h4>
                      <p className="text-beige-700">
                        האתר עומד בדרישות התקן הישראלי לנגישות תכנים באינטרנט, המבוסס על הנחיות WCAG 2.0.
                      </p>
                    </div>
                    <div className="border-r-4 border-blue-500 pr-4 bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-beige-800 mb-2">חוק שוויון זכויות לאנשים עם מוגבלות</h4>
                      <p className="text-beige-700">
                        התאמות הנגישות באתר נעשות בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998
                        ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* התאמות נגישות שבוצעו */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">התאמות נגישות שבוצעו באתר</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-6">
                    בוצעו התאמות נגישות מקיפות באתר, כולל:
                  </p>

                  <h4 className="font-semibold text-beige-800 mb-3">נגישות מבנית וטכנית:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>מבנה סמנטי תקין של דפי האתר (שימוש נכון בכותרות H1-H6)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תיוגי ARIA (Accessible Rich Internet Applications) לשיפור תמיכה בקוראי מסך</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>ניווט מקלדת מלא - ניתן לנווט בכל האתר באמצעות מקלדת בלבד</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>סדר פוקוס לוגי - ניווט עקבי ומסודר בין אלמנטים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תמיכה בתצוגה מגוונת - אתר רספונסיבי הנגיש במחשבים, טאבלטים וסמארטפונים</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">נגישות תוכן:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תמונות עם תיאור חלופי (ALT text) המתאר את תוכן התמונה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>ניגודיות גבוהה בין הטקסט לרקע (עמידה ביחס ניגודיות של 4.5:1 לפחות)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>טקסט ברור וקריא בפונט "נוטו סנס עברית" (Noto Sans Hebrew)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>קישורים מתוארים בצורה ברורה המסבירה את יעד הקישור</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>כפתורים וטפסים עם תיוג ברור והנחיות מפורשות</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">תמיכה בקוראי מסך:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תמיכה מלאה בקוראי מסך מובילים כגון JAWS, NVDA, VoiceOver</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תיוגים סמנטיים מתקדמים המאפשרים ניווט יעיל</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>הודעות מערכת נגישות לקוראי מסך (Live regions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>דילוג לתוכן הראשי (Skip to main content)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* מגבלות נגישות ידועות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">מגבלות נגישות ידועות</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    למרות המאמצים הרבים שהושקעו, ייתכן שעדיין קיימים תכנים מסוימים באתר שאינם נגישים במלואם.
                    אנו פועלים ללא הרף לשיפור רמת הנגישות ולתיקון בעיות שיתגלו.
                  </p>
                  <p className="text-beige-700 mb-4">
                    מגבלות ידועות שעובדות על תיקונן:
                  </p>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תכנים חיצוניים מוטמעים (כגון סרטונים או מפות) עשויים להיות בעלי רמת נגישות חלקית</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>מסמכים ישנים בפורמט PDF עשויים להיות בעלי רמת נגישות נמוכה יותר</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 border-r-4 border-amber-500 rounded">
                    <p className="text-beige-800 text-sm">
                      <strong>אנו ממשיכים לשפר:</strong> אנו עובדים באופן שוטף על שיפור הנגישות באתר ועל תיקון בעיות
                      שמתגלות. אם נתקלת בבעיית נגישות באתר, אנא עדכן אותנו ונטפל בכך בהקדם האפשרי.
                    </p>
                  </div>
                </div>
              </div>

              {/* רכזת נגישות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">רכזת נגישות</h2>
                <div className="bg-gradient-to-bl from-beige-50 to-white border border-beige-200 rounded-lg p-8">
                  <p className="text-beige-700 mb-6">
                    רכזת הנגישות במשרד היא עו"ד זהבית דבי, והיא עומדת לרשותך לכל שאלה, הערה או בקשה הקשורה לנגישות האתר.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">רכזת נגישות</p>
                        <p className="text-beige-700 text-lg">עו"ד זהבית דבי</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">טלפון</p>
                        <a
                          href="tel:+972-53-606-2456"
                          className="text-beige-600 hover:text-beige-800 underline text-lg"
                        >
                          053-606-2456
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">דואר אלקטרוני</p>
                        <a
                          href="mailto:zehavit@silaw.co.il"
                          className="text-beige-600 hover:text-beige-800 underline text-lg"
                        >
                          zehavit@silaw.co.il
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* תהליך דיווח על בעיות נגישות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">דיווח על בעיות נגישות ותהליך הטיפול</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-6">
                    אם נתקלת בבעיית נגישות באתר או שיש לך הצעה לשיפור הנגישות, אנו מעוניינים לשמוע ממך.
                  </p>

                  <h4 className="font-semibold text-beige-800 mb-4">כיצד לדווח על בעיית נגישות:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start bg-beige-50 p-4 rounded">
                      <span className="bg-beige-600 text-white rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0 font-bold">1</span>
                      <div>
                        <h5 className="font-semibold text-beige-800 mb-1">פנייה לרכזת הנגישות</h5>
                        <p className="text-beige-700">
                          צור קשר עם רכזת הנגישות, עו"ד זהבית דבי, בטלפון 053-606-2456 או בדוא"ל zehavit@silaw.co.il
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-beige-50 p-4 rounded">
                      <span className="bg-beige-600 text-white rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0 font-bold">2</span>
                      <div>
                        <h5 className="font-semibold text-beige-800 mb-1">תיאור הבעיה</h5>
                        <p className="text-beige-700">
                          תאר את בעיית הנגישות שנתקלת בה, כולל הדף הספציפי באתר, הפעולה שניסית לבצע, וסוג הטכנולוגיה
                          המסייעת שבה השתמשת (אם רלוונטי)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-beige-50 p-4 rounded">
                      <span className="bg-beige-600 text-white rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0 font-bold">3</span>
                      <div>
                        <h5 className="font-semibold text-beige-800 mb-1">קבלת תגובה</h5>
                        <p className="text-beige-700">
                          נשיב לפניה שלך תוך 5 ימי עסקים ונעדכן אותך לגבי מועד הטיפול בבעיה
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-beige-50 p-4 rounded">
                      <span className="bg-beige-600 text-white rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0 font-bold">4</span>
                      <div>
                        <h5 className="font-semibold text-beige-800 mb-1">טיפול בבעיה</h5>
                        <p className="text-beige-700">
                          נטפל בבעיה בהקדם האפשרי, בהתאם לחומרתה ולמורכבות התיקון. בעיות קריטיות יטופלו תוך 21 ימי עסקים
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-r-4 border-blue-500 rounded">
                    <p className="text-beige-800">
                      <strong>שירות חלופי:</strong> במקרים בהם תתגלה בעיית נגישות שלא ניתן לפתור באופן מיידי, נציע פתרון
                      חלופי שיאפשר לך לקבל את השירות או המידע הרצוי. אנא פנה לרכזת הנגישות ונמצא יחד פתרון מתאים.
                    </p>
                  </div>
                </div>
              </div>

              {/* טכנולוגיות וסביבות נתמכות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">טכנולוגיות וסביבות נתמכות</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-6">
                    האתר תוכנן ונבדק לעבודה מיטבית עם הטכנולוגיות והסביבות הבאות:
                  </p>

                  <h4 className="font-semibold text-beige-800 mb-3">דפדפנים נתמכים:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Google Chrome (גרסה 90 ומעלה)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Mozilla Firefox (גרסה 88 ומעלה)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Microsoft Edge (גרסה 90 ומעלה)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Safari (גרסה 14 ומעלה) - MacOS ו-iOS</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">קוראי מסך נתמכים:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>JAWS</strong> (Job Access With Speech) - Windows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>NVDA</strong> (NonVisual Desktop Access) - Windows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>VoiceOver</strong> - MacOS ו-iOS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>TalkBack</strong> - Android</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">מערכות הפעלה:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Windows 10 ומעלה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>MacOS 11 (Big Sur) ומעלה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>iOS 14 ומעלה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>Android 10 ומעלה</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">טכנולוגיות מסייעות נוספות:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>זום ופונקציות הגדלה של הדפדפן</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>ניווט באמצעות מקלדת בלבד</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>תוכנות הכתבה קולית (Voice Recognition Software)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span>מקשי קיצור (Keyboard Shortcuts)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* תאריך בדיקה ועדכון */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">בדיקות נגישות ועדכונים</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">תאריך בדיקת נגישות אחרונה</h4>
                      <p className="text-beige-700">אוקטובר 2024</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">תאריך עדכון הצהרת נגישות</h4>
                      <p className="text-beige-700">אוקטובר 2024</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">תדירות בדיקות נגישות</h4>
                      <p className="text-beige-700">
                        אנו מבצעים בדיקות נגישות תקופתיות לפחות אחת לשנה, וכן בדיקות נקודתיות בעקבות שינויים משמעותיים באתר
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-beige-50 rounded">
                    <p className="text-beige-800">
                      <strong>מחויבות מתמשכת:</strong> אנו ממשיכים לעבוד על שיפור רמת הנגישות באתר באופן שוטף,
                      ומעדכנים הצהרה זו בהתאם לשינויים שנעשים.
                    </p>
                  </div>
                </div>
              </div>

              {/* פנייה לנציבות שוויון */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">תלונה לנציבות שוויון זכויות</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    אם פנית אלינו בנושא נגישות ולא קיבלת מענה מספק, או אם אינך מרוצה מהטיפול שקיבלת,
                    יש באפשרותך להגיש תלונה לנציבות שוויון זכויות לאנשים עם מוגבלות:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">נציבות שוויון זכויות לאנשים עם מוגבלות</p>
                        <p className="text-beige-700">משרד המשפטים</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">טלפון</p>
                        <a
                          href="tel:02-6467011"
                          className="text-beige-600 hover:text-beige-800 underline"
                        >
                          02-6467011
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">אתר אינטרנט</p>
                        <a
                          href="https://www.gov.il/he/departments/justice/govil-landing-page"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-beige-600 hover:text-beige-800 underline"
                        >
                          www.gov.il - נציבות שוויון זכויות
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* מחויבות */}
              <div className="mb-10">
                <div className="bg-beige-900 text-white rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">המחויבות שלנו לנגישות</h3>
                  <p className="text-beige-100 text-lg leading-relaxed">
                    משרד "דבי סיידה ושות'" רואה בנגישות האתר ערך מרכזי ומחויב להמשיך ולהשקיע מאמצים
                    להנגשת האתר לאנשים עם מוגבלויות ולהבטיח שוויון הזדמנויות ונגישות לכל.
                    <br />
                    <br />
                    אנו מאמינים כי לכל אדם הזכות לקבל מידע ושירותים באופן עצמאי, שווה ומכבד.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
