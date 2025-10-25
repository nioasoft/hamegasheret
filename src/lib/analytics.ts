/**
 * Google Analytics 4 Helper Functions
 * מספק פונקציות עזר למעקב אחר אירועים ב-GA4
 */

/**
 * שליחת אירוע ל-Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('Google Analytics not loaded');
  }
};

/**
 * מעקב אחר טופס יצירת קשר - התחלה
 */
export const trackFormStart = (formName: string = 'contact_form') => {
  trackEvent('form_start', {
    form_name: formName,
    form_location: window.location.pathname,
  });
};

/**
 * מעקב אחר שליחת טופס
 */
export const trackFormSubmit = (formName: string = 'contact_form') => {
  trackEvent('form_submit', {
    form_name: formName,
    form_location: window.location.pathname,
  });
};

/**
 * מעקב אחר הצלחה בשליחת טופס (CONVERSION!)
 */
export const trackFormSuccess = (
  formName: string = 'contact_form',
  formData?: {
    name?: string;
    email?: string;
    phone?: string;
  }
) => {
  // שליחת conversion event
  trackEvent('generate_lead', {
    form_name: formName,
    form_location: window.location.pathname,
    value: 100, // ערך משוער של ליד
    currency: 'ILS',
  });

  // שליחת אירוע form_success נוסף
  trackEvent('form_success', {
    form_name: formName,
    form_location: window.location.pathname,
    has_phone: !!formData?.phone,
    has_email: !!formData?.email,
  });
};

/**
 * מעקב אחר שגיאה בשליחת טופס
 */
export const trackFormError = (
  formName: string = 'contact_form',
  errorMessage?: string
) => {
  trackEvent('form_error', {
    form_name: formName,
    form_location: window.location.pathname,
    error_message: errorMessage,
  });
};

/**
 * מעקב אחר לחיצה על מספר טלפון
 */
export const trackPhoneClick = (phoneNumber: string, location: string = 'unknown') => {
  trackEvent('phone_click', {
    phone_number: phoneNumber.replace(/[^0-9]/g, '').substring(0, 3) + 'XXX', // פרטיות חלקית
    click_location: location,
    page: window.location.pathname,
  });

  // גם conversion event
  trackEvent('conversion', {
    conversion_type: 'phone_call',
    value: 50,
    currency: 'ILS',
  });
};

/**
 * מעקב אחר לחיצה על WhatsApp
 */
export const trackWhatsAppClick = (location: string = 'unknown') => {
  trackEvent('whatsapp_click', {
    click_location: location,
    page: window.location.pathname,
  });

  // גם conversion event
  trackEvent('conversion', {
    conversion_type: 'whatsapp',
    value: 40,
    currency: 'ILS',
  });
};

/**
 * מעקב אחר לחיצה על אימייל
 */
export const trackEmailClick = (location: string = 'unknown') => {
  trackEvent('email_click', {
    click_location: location,
    page: window.location.pathname,
  });

  // גם conversion event
  trackEvent('conversion', {
    conversion_type: 'email',
    value: 30,
    currency: 'ILS',
  });
};

/**
 * מעקב אחר צפייה בעמוד שירות ספציפי
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', {
    service_name: serviceName,
    page: window.location.pathname,
  });
};

/**
 * מעקב אחר לחיצה על CTA
 */
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    page: window.location.pathname,
  });
};

/**
 * מעקב אחר קריאת מאמר
 */
export const trackArticleView = (articleTitle: string, articleCategory?: string) => {
  trackEvent('article_view', {
    article_title: articleTitle,
    article_category: articleCategory,
    page: window.location.pathname,
  });
};

/**
 * מעקב אחר scroll עומק
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page: window.location.pathname,
  });
};

/**
 * מעקב אחר engagement
 */
export const trackEngagement = (engagementType: string, details?: Record<string, unknown>) => {
  trackEvent('user_engagement', {
    engagement_type: engagementType,
    page: window.location.pathname,
    ...details,
  });
};
