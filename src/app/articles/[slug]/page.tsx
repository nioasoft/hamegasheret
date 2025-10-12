import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { articles, getArticleBySlug } from "../data";

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

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "המאמר לא נמצא - המגשרת",
    };
  }

  return {
    title: `${article.title} - המגשרת`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["עו״ד זהבית דבי - המגשרת"],
      siteName: "המגשרת - עו״ד זהבית דבי",
      locale: "he_IL",
      url: `https://hamegasheret.co.il/articles/${slug}`,
      images: article.image ? [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
    alternates: {
      canonical: `https://hamegasheret.co.il/articles/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // המרת תוכן markdown לפורמט HTML
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const formattedLines = [];
    let inList = false;
    let inAdviceSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // דלג על שורות ריקות
      if (!line && !inList && !inAdviceSection) continue;

      // כותרות
      if (line.startsWith('### ')) {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        if (inAdviceSection) {
          formattedLines.push('</div>');
          inAdviceSection = false;
        }
        formattedLines.push(`<h3 class="text-2xl font-bold text-beige-900 mt-8 mb-4 border-r-4 border-blue-600 pr-4">${line.slice(4)}</h3>`);
      }
      else if (line.startsWith('## ')) {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        if (inAdviceSection) {
          formattedLines.push('</div>');
          inAdviceSection = false;
        }
        const title = line.slice(3);
        const number = title.match(/^\d+/)?.[0];
        if (number) {
          formattedLines.push(`<h2 class="text-3xl font-bold text-beige-900 mt-12 mb-6 flex items-center gap-3">
            <span class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">${number}</span>
            <span>${title.replace(/^\d+\.\s*/, '')}</span>
          </h2>`);
        } else {
          formattedLines.push(`<h2 class="text-3xl font-bold text-beige-900 mt-12 mb-6">${title}</h2>`);
        }
      }
      // קטע העצה של המגשרת
      else if (line.includes('**העצה של המגשרת:**')) {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        formattedLines.push('<div class="bg-blue-50 border-r-4 border-blue-600 p-6 my-6 rounded-lg">');
        formattedLines.push('<p class="font-bold text-blue-900 mb-2">💡 העצה של המגשרת:</p>');
        inAdviceSection = true;
      }
      // רשימות
      else if (line.startsWith('- ')) {
        if (!inList) {
          formattedLines.push('<ul class="list-disc list-inside space-y-3 my-6 mr-6">');
          inList = true;
        }
        formattedLines.push(`<li class="text-beige-800 leading-relaxed">${line.slice(2)}</li>`);
      }
      // טקסט מודגש
      else if (line.includes('**')) {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-beige-900">$1</strong>');
        if (inAdviceSection) {
          formattedLines.push(`<p class="text-beige-800 leading-relaxed">${formattedLine}</p>`);
          formattedLines.push('</div>');
          inAdviceSection = false;
        } else {
          formattedLines.push(`<p class="text-beige-800 leading-relaxed my-6 text-lg">${formattedLine}</p>`);
        }
      }
      // פסקה רגילה
      else if (line) {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        if (inAdviceSection) {
          formattedLines.push(`<p class="text-beige-800 leading-relaxed">${line}</p>`);
          formattedLines.push('</div>');
          inAdviceSection = false;
        } else {
          // בדיקה אם זה ציטוט
          if (line.includes('"') && line.includes('המגשרת')) {
            formattedLines.push(`<blockquote class="border-r-4 border-beige-300 pr-6 my-6 text-beige-700 italic text-lg">${line}</blockquote>`);
          } else {
            formattedLines.push(`<p class="text-beige-800 leading-relaxed my-6 text-lg">${line}</p>`);
          }
        }
      }
    }

    if (inList) {
      formattedLines.push('</ul>');
    }
    if (inAdviceSection) {
      formattedLines.push('</div>');
    }

    return formattedLines.join('');
  };

  // מאמרים קשורים
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.title !== article.title)
    .slice(0, 3);

  // ברירת מחדל אם אין מאמרים בקטגוריה
  const displayArticles = relatedArticles.length > 0
    ? relatedArticles
    : articles.filter(a => a.title !== article.title).slice(0, 3);

  return (
    <>
      <Navigation menuItems={menuItems} />

      {/* כותרת העמוד */}
      <section className="bg-beige-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-beige-900 mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-beige-600 max-w-3xl mx-auto">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* תוכן המאמר */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* מטא דאטה */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-beige-200">
              <Badge variant="secondary" className="text-sm">
                {article.category}
              </Badge>
              <div className="flex items-center gap-2 text-beige-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-beige-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{article.readTime}</span>
              </div>
            </div>

            {/* תוכן המאמר */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-beige-900 mb-4">
                  זקוקים לעזרה בגישור גירושין?
                </h3>
                <p className="text-lg text-beige-800 mb-6">
                  המגשרת עו״ד זהבית דבי כאן כדי לעזור לכם לעבור את התהליך בצורה מכבדת והוגנת
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      קבעו פגישת ייעוץ
                    </Button>
                  </Link>
                  <Link href="tel:052-8692-921">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      התקשרו עכשיו
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* מאמרים קשורים */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-beige-900 mb-12">
              מאמרים נוספים שעשויים לעניין אתכם
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayArticles.map((relatedArticle) => (
                <Card key={relatedArticle.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-beige-900 mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-beige-700 mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-beige-500 mb-4">
                      <span>{relatedArticle.date}</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                    <Link
                      href={`/articles/${relatedArticle.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      קראו עוד
                      <ChevronRight className="h-4 w-4 mr-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/articles">
                <Button variant="outline" size="lg">
                  כל המאמרים
                  <ArrowRight className="h-5 w-5 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* עמודה 1 - לוגו ותיאור */}
            <div>
              <h3 className="text-xl font-bold mb-4">המגשרת</h3>
              <p className="text-beige-300 mb-4">
                עו״ד זהבית דבי - המגשרת המובילה בישראל לגישור גירושין מכבד והוגן
              </p>
            </div>

            {/* עמודה 2 - קישורים מהירים */}
            <div>
              <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-beige-300 hover:text-white transition-colors">דף הבית</Link></li>
                <li><Link href="/mediation" className="text-beige-300 hover:text-white transition-colors">גישור גירושין</Link></li>
                <li><Link href="/about" className="text-beige-300 hover:text-white transition-colors">אודות</Link></li>
                <li><Link href="/articles" className="text-beige-300 hover:text-white transition-colors">מאמרים</Link></li>
              </ul>
            </div>

            {/* עמודה 3 - שירותים */}
            <div>
              <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
              <ul className="space-y-2">
                <li><span className="text-beige-300">גישור גירושין</span></li>
                <li><span className="text-beige-300">הסכמי ממון</span></li>
                <li><span className="text-beige-300">משמורת משותפת</span></li>
                <li><span className="text-beige-300">מזונות ילדים</span></li>
              </ul>
            </div>

            {/* עמודה 4 - יצירת קשר */}
            <div>
              <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
              <ul className="space-y-2">
                <li className="text-beige-300">טלפון: 052-8692-921</li>
                <li className="text-beige-300">מייל: info@hamegasheret.co.il</li>
                <li className="text-beige-300">כתובת: הרצל 91, באר שבע</li>
                <li className="text-beige-300">שעות: א׳-ה׳ 9:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-beige-700 text-center text-beige-300">
            <p>&copy; 2024 המגשרת - עו״ד זהבית דבי. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </>
  );
}