import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import Script from "next/script";
import { SkipLink } from "@/components/ui/skip-link";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-sans-hebrew",
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "המגשרת - עו״ד זהבית דבי | מומחית בגישור גירושין ודיני משפחה",
  description: "המגשרת עו״ד זהבית דבי עם 85% הצלחה. המגשרת המובילה בבאר שבע והדרום. גישור מקצועי לגירושין, משמורת ילדים ודיני משפחה.",
  keywords: "המגשרת, המגשרת באר שבע, גישור גירושין, עורך דין גירושין, דיני משפחה, משמורת ילדים, מזונות, הסכם גירושין, עו״ד זהבית דבי, עורכי דין משפחה",
  authors: [{ name: "עו״ד זהבית דבי - המגשרת" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
      <head>
        {/* Google Consent Mode v2 - Must load before any Google tags */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to denied (privacy-first approach)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });

            // Check for existing consent
            try {
              const consent = localStorage.getItem('cookie-consent-preferences');
              if (consent) {
                const prefs = JSON.parse(consent);
                const sixMonthsInMs = 6 * 30 * 24 * 60 * 60 * 1000;
                const isValid = Date.now() - prefs.timestamp <= sixMonthsInMs;

                if (isValid) {
                  gtag('consent', 'update', {
                    'analytics_storage': prefs.analytics || 'denied',
                    'ad_storage': prefs.marketing || 'denied',
                    'ad_user_data': prefs.marketing || 'denied',
                    'ad_personalization': prefs.marketing || 'denied',
                    'functionality_storage': prefs.functionality || 'denied',
                    'personalization_storage': prefs.functionality || 'denied'
                  });
                }
              }
            } catch (e) {
              // Silent fail if localStorage is not available
            }
          `}
        </Script>
      </head>
      <body className={`${notoSansHebrew.variable} font-sans antialiased bg-white text-beige-900`}>
        <SkipLink />

        {/* Google Analytics - Will respect consent mode */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W3RWLKG73M" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W3RWLKG73M', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `}
        </Script>

        {children}

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
