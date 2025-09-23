import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-sans-hebrew",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "המגשרת - דבי סיידה ושו״ת | מומחים בגישור גירושין",
  description: "המגשרת - משרד עורכי דין מוביל בגישור גירושין ודיני משפחה. זהבית דבי מומחית בגישור עם 85% הצלחה. ייעוץ ראשוני חינם. באר שבע, תל אביב, חיפה.",
  keywords: "המגשרת, גישור גירושין, עורך דין גירושין, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין, זהבית דבי, באר שבע, עורכי דין משפחה",
  authors: [{ name: "דבי סיידה ושו״ת" }],
  openGraph: {
    title: "המגשרת - מומחים בגישור גירושין",
    description: "המגשרת - משרד עורכי דין מוביל בגישור גירושין ודיני משפחה. זהבית דבי מומחית בגישור עם 85% הצלחה.",
    type: "website",
    locale: "he_IL",
    siteName: "המגשרת",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hamegasheret.co.il",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${notoSansHebrew.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
