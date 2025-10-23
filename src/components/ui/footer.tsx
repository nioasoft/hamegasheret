import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-beige-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">דבי סיידה ושות'</h3>
            <p className="text-beige-300">
              משרד עורכי דין מוביל בדיני משפחה וגירושין
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">קישורים מהירים</h4>
            <nav aria-label="קישורי ניווט תחתונים">
              <ul className="space-y-2">
                <li>
                  <Link href="/mediation" className="text-beige-300 hover:text-white transition-colors">
                    גישור גירושין
                  </Link>
                </li>
                <li>
                  <Link href="/child-custody" className="text-beige-300 hover:text-white transition-colors">
                    משמורת ילדים
                  </Link>
                </li>
                <li>
                  <Link href="/child-support" className="text-beige-300 hover:text-white transition-colors">
                    מזונות
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-beige-300 hover:text-white transition-colors">
                    אודות המשרד
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-beige-300 hover:text-white transition-colors">
                    מאמרים
                  </Link>
                </li>
                <li>
                  <Link href="/cases" className="text-beige-300 hover:text-white transition-colors">
                    סיפורי הצלחה
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-beige-300 hover:text-white transition-colors">
                    צור קשר
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">פרטי קשר</h4>
            <address className="text-beige-300 not-italic">
              יהודה הנחתום 4<br />
              בניין בית בלטק<br />
              באר שבע<br />
              <a href="tel:+972-53-606-2456" className="hover:text-white transition-colors">
                053-606-2456
              </a>
              <br />
              <a href="mailto:zehavit@silaw.co.il" className="hover:text-white transition-colors">
                zehavit@silaw.co.il
              </a>
            </address>
          </div>
        </div>
        <div className="border-t border-beige-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-beige-400">
            <p className="text-center sm:text-right">
              &copy; 2024 דבי סיידה ושות'. כל הזכויות שמורות.
            </p>
            <nav aria-label="קישורי משנה" className="flex gap-4 text-sm">
              <Link
                href="/accessibility-statement"
                className="hover:text-white transition-colors underline decoration-1 underline-offset-4"
              >
                הצהרת נגישות
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors underline decoration-1 underline-offset-4"
              >
                מדיניות פרטיות
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
