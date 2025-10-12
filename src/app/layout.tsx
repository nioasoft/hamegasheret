import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-sans-hebrew",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "המגשרת - עו״ד זהבית דבי | מומחית בגישור גירושין ודיני משפחה",
  description: "המגשרת עו״ד זהבית דבי עם 85% הצלחה. המגשרת המובילה בבאר שבע והדרום. גישור מקצועי לגירושין, משמורת ילדים ודיני משפחה.",
  keywords: "המגשרת, המגשרת באר שבע, גישור גירושין, עורך דין גירושין, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין, עו״ד זהבית דבי, עורכי דין משפחה",
  authors: [{ name: "עו״ד זהבית דבי - המגשרת" }],
  openGraph: {
    title: "המגשרת - עו״ד זהבית דבי | מומחית בגישור גירושין",
    description: "המגשרת עו״ד זהבית דבי עם 85% הצלחה. המגשרת המובילה בבאר שבע והדרום.",
    type: "website",
    locale: "he_IL",
    siteName: "המגשרת - עו״ד זהבית דבי",
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
      <body className={`${notoSansHebrew.variable} font-sans antialiased bg-white text-beige-900`}>
        {children}
      </body>
    </html>
  );
}
