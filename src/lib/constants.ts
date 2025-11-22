/**
 * קובץ משתנים גלובליים לאתר המגשרת
 */

export const MENU_ITEMS = [
  { label: "דף הבית", href: "/" },
  { label: "גישור גירושין", href: "/mediation" },
  { label: "גישור לאחר גירושין", href: "/post-divorce-mediation" },
  { label: "משמורת ילדים", href: "/child-custody" },
  { label: "מזונות", href: "/child-support" },
  { label: "מאמרים", href: "/articles" },
  { label: "סיפורי הצלחה", href: "/cases" },
  { label: "אודות", href: "/about" },
  { label: "צור קשר", href: "/contact" }
];

export const CONTACT_INFO = {
  phone: "+972-53-606-2456",
  phoneDisplay: "053-606-2456",
  email: "zehavit@silaw.co.il",
  address: {
    street: "יהודה הנחתום 4",
    building: "בניין בית בלטק",
    city: "באר שבע"
  },
  asafName: "עו"ד אסף סיידה",
  asafPhone: "+972-54-423-2167",
  asafPhoneDisplay: "054-423-2167"
} as const;
