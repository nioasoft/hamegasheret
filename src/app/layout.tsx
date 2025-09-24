import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-sans-hebrew",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "המגשרת - זהבית דבי | מומחית בגישור גירושין ודיני משפחה",
  description: "המגשרת זהבית דבי עם 85% הצלחה. המגשרת המובילה באר שבע ותל אביב. גישור מקצועי לגירושין, משמורת ילדים ודיני משפחה. ייעוץ ראשוני חינם.",
  keywords: "המגשרת, המגשרת באר שבע, המגשרת תל אביב, גישור גירושין, עורך דין גירושין, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין, זהבית דבי, עורכי דין משפחה",
  authors: [{ name: "זהבית דבי - המגשרת" }],
  openGraph: {
    title: "המגשרת - זהבית דבי | מומחית בגישור גירושין",
    description: "המגשרת זהבית דבי עם 85% הצלחה. המגשרת המובילה באר שבע ותל אביב. ייעוץ ראשוני חינם.",
    type: "website",
    locale: "he_IL",
    siteName: "המגשרת - זהבית דבי",
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
