import Link from "next/link";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles, categories } from "./data";

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

export default function ArticlesPage() {
  return (
    <>
      <Navigation menuItems={menuItems} />

      {/* כותרת העמוד */}
      <section className="bg-beige-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-beige-900 mb-6">
            מאמרים ומידע משפטי מקצועי
          </h1>
          <p className="text-xl text-beige-600 max-w-3xl mx-auto">
            כאן תמצאו מידע חיוני, טיפים מקצועיים ותשובות לשאלות הנפוצות בתחום דיני המשפחה וגישור גירושין.
            צוות המשרד מעניק לכם כלים להתמודדות מושכלת עם התהליך.
          </p>
        </div>
      </section>

      {/* תוכן ראשי */}
      <section className="py-20 bg-beige-50">
        <div className="container mx-auto px-4">

          {/* רשת מאמרים */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <Card key={article.title} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={article.featured ? "default" : "secondary"}>
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <span className="text-xs text-orange-600 font-semibold">מומלץ</span>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/articles/${article.slug}`} className="hover:text-beige-700 transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-beige-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-beige-500 mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link href={`/articles/${article.slug}`}>
                    <Button variant="link" className="px-0 text-beige-700 hover:text-beige-800">
                      קראו עוד ←
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* CTA */}
          <div className="bg-beige-900 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              יש לכם שאלה שלא מצאתם לה תשובה?
            </h2>
            <p className="text-xl mb-6">
              צוות המשרד זמין לייעוץ אישי ומקצועי
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  שלחו שאלה
                </Button>
              </Link>
              <Link href="tel:+972-54-423-2167">
                <Button size="lg" variant="outline" className="bg-white text-beige-900 hover:bg-beige-100">
                  התקשרו עכשיו
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* סטטיסטיקות */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-beige-900 mb-2">{articles.length}</div>
              <div className="text-beige-600">מאמרים מקצועיים</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-beige-900 mb-2">{categories.length}</div>
              <div className="text-beige-600">קטגוריות</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-beige-900 mb-2">15+</div>
              <div className="text-beige-600">שנות ניסיון</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-beige-900 mb-2">85%</div>
              <div className="text-beige-600">הצלחה בגישור</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">דבי סיידה ושו״ת</h3>
              <p className="text-beige-300">
                משרד עורכי דין מוביל בדיני משפחה וגירושין
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="/mediation" className="text-beige-300 hover:text-white transition-colors">גישור גירושין</a></li>
                <li><a href="/about" className="text-beige-300 hover:text-white transition-colors">אודות המשרד</a></li>
                <li><a href="/articles" className="text-beige-300 hover:text-white transition-colors">מאמרים</a></li>
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
    </>
  );
}