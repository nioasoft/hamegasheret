import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | המגשרת עו״ד זהבית דבי",
  description: "מדיניות הפרטיות של משרד המגשרת עו״ד זהבית דבי - הגנה על המידע האישי שלך בהתאם לתקנות הגנת הפרטיות וה-GDPR.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hamegasheret.co.il/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-beige-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-beige-900 mb-6">
                מדיניות פרטיות
              </h1>
              <p className="text-xl text-beige-600">
                המגשרת עו״ד זהבית דבי - דבי סיידה ושות'
              </p>
              <p className="text-sm text-beige-500 mt-4">
                עדכון אחרון: אוקטובר 2024
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
                    משרד עורכי הדין "דבי סיידה ושות'" ("המשרד", "אנו", "אנחנו") מחויב להגנה על פרטיותך ולשמירה על המידע האישי שלך.
                    מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, מאחסנים ומגנים על המידע האישי שלך בהתאם לחוק הגנת הפרטיות,
                    התשמ"א-1981, תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017, והתקנה הכללית להגנת מידע (GDPR).
                  </p>
                </div>
              </div>

              {/* 1. איסוף מידע */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">1. איסוף מידע</h2>

                <h3 className="text-2xl font-semibold text-beige-800 mb-4">1.1 מידע שאתה מספק לנו</h3>
                <div className="bg-white border border-beige-200 rounded-lg p-6 mb-6">
                  <p className="text-beige-700 mb-4">אנו אוספים מידע אישי שאתה מספק לנו באופן מרצון, לרבות:</p>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>פרטי זהות:</strong> שם מלא, מספר תעודת זהות</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>פרטי קשר:</strong> כתובת מייל, מספר טלפון, כתובת מגורים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מידע משפטי:</strong> פרטים הקשורים לתיק המשפטי שלך, מצב משפחתי, פרטי בני משפחה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מידע פיננסי:</strong> פרטים על הכנסות, נכסים, חובות (במידת הצורך לטיפול המשפטי)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>תכתובות:</strong> הודעות שנשלחות דרך טופס יצירת הקשר באתר או בדואר אלקטרוני</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-beige-800 mb-4">1.2 מידע שנאסף אוטומטית</h3>
                <div className="bg-white border border-beige-200 rounded-lg p-6 mb-6">
                  <p className="text-beige-700 mb-4">בעת שימוש באתר, אנו עשויים לאסוף אוטומטית:</p>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, נתוני שימוש באתר</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עוגיות (Cookies):</strong> מידע המאוחסן במכשיר שלך לשיפור חווית הגלישה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>נתוני ניווט:</strong> דפים שבקרת, זמן שהות, מקור ההפניה לאתר</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. שימוש במידע */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">2. שימוש במידע</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                  <ul className="space-y-3 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מתן שירותים משפטיים:</strong> טיפול בתיקים, ייעוץ משפטי, גישור וייצוג משפטי</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>תקשורת:</strong> יצירת קשר עימך בנוגע לבקשות שלך, עדכונים על תיקים ומענה לפניות</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>שיפור השירות:</strong> ניתוח שימוש באתר, שיפור חווית המשתמש והתאמת תכנים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עמידה בחובות חוקיות:</strong> עמידה בדרישות משפטיות ורגולטוריות</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>שיווק:</strong> שליחת עדכונים, מאמרים וחומרים מקצועיים (רק בהסכמתך המפורשת)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>אבטחת מידע:</strong> הגנה על האתר והמידע מפני גישה בלתי מורשית</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. שיתוף מידע */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">3. שיתוף מידע עם צדדים שלישיים</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">אנו לא מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים. אנו עשויים לשתף מידע במקרים הבאים:</p>
                  <ul className="space-y-3 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>נותני שירותים:</strong> ספקי שירותים חיצוניים (כגון שירותי אחסון בענן, ניהול אתר) הפועלים עבורנו</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>חובות משפטיות:</strong> כאשר נדרש על פי חוק, צו שיפוטי או הליך משפטי</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>הגנה על זכויות:</strong> להגנה על זכויותינו, קניינינו או בטחוננו</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>בהסכמתך:</strong> במקרים אחרים בהסכמתך המפורשת</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. אבטחת מידע */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">4. אבטחת מידע</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">אנו נוקטים אמצעי אבטחה פיזיים, טכנולוגיים וארגוניים להגנה על המידע האישי שלך:</p>
                  <ul className="space-y-3 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>הצפנה:</strong> שימוש בפרוטוקול HTTPS להעברת מידע מאובטחת</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>הגבלת גישה:</strong> גישה למידע אישי רק לעובדים מורשים הזקוקים לו לביצוע עבודתם</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>אחסון מאובטח:</strong> אחסון מידע בשרתים מאובטחים עם גיבויים תקופתיים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מדיניות פנימית:</strong> הכשרת עובדים ונהלי אבטחת מידע מחמירים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עמידה בתקנות:</strong> יישום אמצעי אבטחה בהתאם לתקנות הגנת הפרטיות (אבטחת מידע)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 border-r-4 border-amber-500 rounded">
                    <p className="text-beige-800 text-sm">
                      <strong>שים לב:</strong> למרות האמצעים הנרחבים שאנו נוקטים, אין שיטת העברה או אחסון מידע באינטרנט בטוחה ב-100%.
                      אנו ממליצים להיזהר במסירת מידע רגיש.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. זכויות המשתמש */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">5. זכויותיך</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">בהתאם לחוק הגנת הפרטיות ול-GDPR, יש לך מספר זכויות לגבי המידע האישי שלך:</p>
                  <div className="space-y-4">
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות עיון</h4>
                      <p className="text-beige-700">הזכות לדעת אם אנו מחזיקים מידע עליך ולקבל עותק של המידע</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות תיקון</h4>
                      <p className="text-beige-700">הזכות לתקן מידע שגוי או לא מדויק</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות מחיקה</h4>
                      <p className="text-beige-700">הזכות לבקש מחיקת המידע האישי שלך (בכפוף לחובות חוקיות)</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות להגבלת עיבוד</h4>
                      <p className="text-beige-700">הזכות לבקש הגבלת השימוש במידע שלך</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות להתנגדות</h4>
                      <p className="text-beige-700">הזכות להתנגד לעיבוד המידע שלך לצרכי שיווק ישיר</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות לניידות</h4>
                      <p className="text-beige-700">הזכות לקבל את המידע שלך בפורמט מובנה ונפוץ</p>
                    </div>
                    <div className="border-r-4 border-beige-400 pr-4">
                      <h4 className="font-semibold text-beige-800 mb-2">זכות לבטל הסכמה</h4>
                      <p className="text-beige-700">הזכות לבטל הסכמה שניתנה קודם לכן בכל עת</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-beige-50 rounded">
                    <p className="text-beige-800">
                      <strong>כיצד להפעיל את זכויותיך:</strong> ניתן ליצור קשר עימנו בכתובת{" "}
                      <a href="mailto:zehavit@silaw.co.il" className="text-beige-600 hover:text-beige-800 underline">
                        zehavit@silaw.co.il
                      </a>
                      {" "}או בטלפון{" "}
                      <a href="tel:+972-53-606-2456" className="text-beige-600 hover:text-beige-800 underline">
                        053-606-2456
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. עוגיות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">6. עוגיות (Cookies)</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">אתר זה משתמש בעוגיות לשיפור חווית הגלישה ולמטרות אנליטיות:</p>

                  <h4 className="font-semibold text-beige-800 mb-3 mt-6">סוגי עוגיות בהן אנו משתמשים:</h4>
                  <ul className="space-y-2 text-beige-700 mr-6 mb-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עוגיות הכרחיות:</strong> נדרשות לתפעול תקין של האתר</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עוגיות ביצועים:</strong> אוספות מידע על אופן השימוש באתר</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>עוגיות פונקציונליות:</strong> זוכרות את העדפותיך לשיפור החוויה</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-beige-800 mb-3">ניהול עוגיות:</h4>
                  <p className="text-beige-700 mb-3">
                    ניתן לחסום או למחוק עוגיות דרך הגדרות הדפדפן שלך. יש לשים לב כי חסימת עוגיות מסוימות עשויה להשפיע על תפקוד האתר.
                  </p>
                  <p className="text-beige-700">
                    למידע נוסף על ניהול עוגיות, בקר באתר הדפדפן שלך או ב-{" "}
                    <a
                      href="https://www.allaboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige-600 hover:text-beige-800 underline"
                    >
                      allaboutcookies.org
                    </a>
                  </p>
                </div>
              </div>

              {/* 7. שמירת מידע */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">7. תקופת שמירת מידע</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    אנו שומרים את המידע האישי שלך למשך הזמן הדרוש למטרות שלשמן נאסף, ובהתאם לדרישות החוקיות:
                  </p>
                  <ul className="space-y-2 text-beige-700 mr-6">
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>תיקים משפטיים:</strong> 7 שנים מתום הטיפול (בהתאם לחובה המקצועית של עורכי דין)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מסמכים פיננסיים:</strong> 7 שנים (בהתאם לחוק עסקאות גופים ציבוריים)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>תכתובות:</strong> 3 שנים ממועד התכתובת האחרונה</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-beige-600 ml-2">•</span>
                      <span><strong>מידע שיווקי:</strong> עד לביטול ההסכמה או 3 שנים מהפעולה האחרונה</span>
                    </li>
                  </ul>
                  <p className="text-beige-700 mt-4">
                    לאחר תום תקופת השמירה, המידע יימחק או יואנונם באופן מאובטח.
                  </p>
                </div>
              </div>

              {/* 8. העברת מידע לחו"ל */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">8. העברת מידע מחוץ לישראל</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    המידע שלך עשוי להיות מאוחסן או מועבר לשרתים הממוקמים מחוץ לישראל, בעיקר במדינות האיחוד האירופי או בארצות הברית.
                  </p>
                  <p className="text-beige-700 mb-4">
                    במקרים אלה, אנו מוודאים שהמדינה או הספק מספקים רמת הגנה מתאימה למידע, בהתאם לדרישות חוק הגנת הפרטיות וה-GDPR.
                  </p>
                  <p className="text-beige-700">
                    באתר זה אנו עשויים להשתמש בשירותים של Vercel (ארה"ב) לאחסון האתר. ספקים אלה עומדים בתקני אבטחה גבוהים ומחויבים להגנת הפרטיות.
                  </p>
                </div>
              </div>

              {/* 9. קטינים */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">9. פרטיות קטינים</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    האתר אינו מיועד לקטינים מתחת לגיל 18. אנו לא אוספים במודע מידע אישי מקטינים ללא הסכמת הורים או אפוטרופוס חוקי.
                  </p>
                  <p className="text-beige-700">
                    אם הגעת למודעות שאספנו מידע מקטין ללא הסכמה מתאימה, אנא צור קשר עימנו ונמחק את המידע בהקדם האפשרי.
                  </p>
                </div>
              </div>

              {/* 10. שינויים במדיניות */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">10. שינויים במדיניות פרטיות</h2>
                <div className="bg-white border border-beige-200 rounded-lg p-6">
                  <p className="text-beige-700 mb-4">
                    אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם ציון מועד העדכון.
                  </p>
                  <p className="text-beige-700 mb-4">
                    אנו ממליצים לעיין במדיניות זו מעת לעת כדי להתעדכן בשינויים. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה למדיניות המעודכנת.
                  </p>
                  <p className="text-beige-700">
                    במקרה של שינויים מהותיים, נשלח הודעה ללקוחות קיימים בדואר אלקטרוני.
                  </p>
                </div>
              </div>

              {/* 11. פרטי קשר */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-beige-900 mb-6">11. יצירת קשר</h2>
                <div className="bg-gradient-to-bl from-beige-50 to-white border border-beige-200 rounded-lg p-8">
                  <p className="text-beige-700 mb-6">
                    לכל שאלה, בקשה או תלונה בנושא מדיניות הפרטיות או טיפול במידע האישי שלך, ניתן ליצור קשר עימנו:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-beige-100 rounded-full p-3 ml-4">
                        <svg className="w-6 h-6 text-beige-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-beige-800 mb-1">משרד עורכי הדין</p>
                        <p className="text-beige-700">דבי סיידה ושות'</p>
                        <p className="text-beige-700">יהודה הנחתום 4, בניין בית בלטק</p>
                        <p className="text-beige-700">באר שבע, ישראל</p>
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
                          className="text-beige-600 hover:text-beige-800 underline"
                        >
                          zehavit@silaw.co.il
                        </a>
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
                          className="text-beige-600 hover:text-beige-800 underline"
                        >
                          053-606-2456
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-beige-200">
                    <p className="text-sm text-beige-600">
                      <strong>רשות להגנת הפרטיות:</strong> יש לך גם את הזכות להגיש תלונה לרשות להגנת הפרטיות בישראל:{" "}
                      <a
                        href="https://www.gov.il/he/departments/the_privacy_protection_authority"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-beige-600 hover:text-beige-800 underline"
                      >
                        www.gov.il/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* הסכמה */}
              <div className="mb-10">
                <div className="bg-beige-900 text-white rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">הסכמה למדיניות הפרטיות</h3>
                  <p className="text-beige-100 text-lg leading-relaxed">
                    השימוש באתר זה מהווה הסכמה מצדך למדיניות הפרטיות המפורטת לעיל.
                    <br />
                    אם אינך מסכים למדיניות זו, אנא הימנע משימוש באתר.
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
