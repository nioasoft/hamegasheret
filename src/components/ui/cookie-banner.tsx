'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './button';
import { grantAllConsents, denyAllConsents, hasConsented } from '@/lib/cookie-consent';

/**
 * Cookie Consent Banner Component
 * GDPR and Israeli Privacy Law compliant cookie consent banner
 * Features:
 * - Hebrew RTL design with beige/brown theme
 * - Accessible (ARIA labels, keyboard navigation)
 * - Google Consent Mode v2 integration
 * - LocalStorage for consent persistence
 * - 6-month consent expiry
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasUserConsented = hasConsented();
    if (!hasUserConsented) {
      // Small delay to ensure smooth page load
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    grantAllConsents();
    handleClose();
  };

  const handleReject = () => {
    denyAllConsents();
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match animation duration
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Cookie banner */}
      <div
        role="dialog"
        aria-live="polite"
        aria-label="הסכמה לשימוש בעוגיות"
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-beige-50 border-2 border-beige-300 shadow-2xl p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-beige-900 mb-2">
                  🍪 שימוש בעוגיות (Cookies)
                </h2>
                <p className="text-sm sm:text-base text-beige-800 leading-relaxed">
                  אנו משתמשים בעוגיות (cookies) ובטכנולוגיות דומות כדי לשפר את חוויית השימוש באתר,
                  לנתח תנועה באתר, ולספק תכנים מותאמים אישית. העוגיות עוזרות לנו להבין כיצד
                  משתמשים מבקרים באתר ומאפשרות לנו לשפר את השירות שלנו.
                </p>
                <p className="text-sm text-beige-700 mt-2">
                  בהמשך הגלישה או בלחיצה על &quot;אני מסכים/ה&quot;, אתם מאשרים את השימוש
                  בעוגיות באתר זה בהתאם ל
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-beige-900 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-beige-600 focus:ring-offset-2 rounded"
                  >
                    מדיניות הפרטיות
                  </Link>{' '}
                  שלנו.
                </p>

                {/* Cookie types explanation */}
                <details className="mt-3 text-sm text-beige-700">
                  <summary className="cursor-pointer hover:text-beige-900 font-medium select-none focus:outline-none focus:ring-2 focus:ring-beige-600 focus:ring-offset-2 rounded">
                    מה כולל השימוש בעוגיות?
                  </summary>
                  <div className="mt-2 space-y-2 ps-4 border-s-2 border-beige-300">
                    <div>
                      <strong className="text-beige-800">עוגיות אנליטיות:</strong> עוזרות
                      לנו להבין כיצד משתמשים מתנהלים באתר (Google Analytics).
                    </div>
                    <div>
                      <strong className="text-beige-800">עוגיות פונקציונליות:</strong>{' '}
                      שומרות את העדפותיכם כדי לשפר את חוויית הגלישה.
                    </div>
                    <div>
                      <strong className="text-beige-800">תוקף הסכמה:</strong> ההסכמה
                      שלכם תישמר למשך 6 חודשים.
                    </div>
                  </div>
                </details>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  onClick={handleAccept}
                  className="bg-beige-800 hover:bg-beige-900 text-white font-semibold px-6 py-2.5 transition-colors focus:ring-2 focus:ring-beige-600 focus:ring-offset-2"
                  aria-label="קבלת שימוש בכל סוגי העוגיות"
                >
                  אני מסכים/ה
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-beige-400 bg-white hover:bg-beige-100 text-beige-900 font-semibold px-6 py-2.5 transition-colors focus:ring-2 focus:ring-beige-600 focus:ring-offset-2"
                  aria-label="דחיית שימוש בעוגיות לא חיוניות"
                >
                  דחה
                </Button>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center text-sm text-beige-700 hover:text-beige-900 underline transition-colors focus:outline-none focus:ring-2 focus:ring-beige-600 focus:ring-offset-2 rounded px-3 py-2"
                >
                  מדיניות פרטיות
                </Link>
              </div>

              {/* Legal compliance notice */}
              <p className="text-xs text-beige-600 border-t border-beige-300 pt-3">
                אתר זה עומד בתקנות הגנת הפרטיות (תיקון - העברת נתונים לחוץ לארץ) התשע&quot;ז-2017
                ובתקנה האירופית GDPR. ניתן לשנות את הסכמתכם בכל עת דרך הגדרות הדפדפן.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
