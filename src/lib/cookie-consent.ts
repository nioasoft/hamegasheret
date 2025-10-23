/**
 * Cookie Consent Manager
 * Manages user cookie consent preferences and integrates with Google Consent Mode v2
 * Compliant with GDPR and Israeli Privacy Law
 */

export type ConsentStatus = 'granted' | 'denied' | null;

export interface ConsentPreferences {
  analytics: ConsentStatus;
  marketing: ConsentStatus;
  functionality: ConsentStatus;
  timestamp: number;
}

// Storage keys
const CONSENT_KEY = 'cookie-consent-preferences';
const CONSENT_TIMESTAMP_KEY = 'cookie-consent-timestamp';

/**
 * Declare gtag function for TypeScript
 */
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Initialize Google Consent Mode with default denied state
 * This should be called before any Google Analytics scripts load
 */
export function initializeConsentMode(): void {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  // Set default consent to denied (privacy-first approach)
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted', // Required for security
    'wait_for_update': 500, // Wait 500ms for consent update
  });

  // Check if user has already consented
  const existingConsent = getConsentPreferences();
  if (existingConsent) {
    updateGoogleConsent(existingConsent);
  }
}

/**
 * Update Google Consent Mode based on user preferences
 */
export function updateGoogleConsent(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    'analytics_storage': preferences.analytics || 'denied',
    'ad_storage': preferences.marketing || 'denied',
    'ad_user_data': preferences.marketing || 'denied',
    'ad_personalization': preferences.marketing || 'denied',
    'functionality_storage': preferences.functionality || 'denied',
    'personalization_storage': preferences.functionality || 'denied',
  });
}

/**
 * Get current consent preferences from localStorage
 */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const preferences = JSON.parse(stored) as ConsentPreferences;

    // Check if consent is still valid (6 months)
    const sixMonthsInMs = 6 * 30 * 24 * 60 * 60 * 1000;
    const isExpired = Date.now() - preferences.timestamp > sixMonthsInMs;

    if (isExpired) {
      clearConsent();
      return null;
    }

    return preferences;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to localStorage
 */
export function saveConsentPreferences(preferences: Omit<ConsentPreferences, 'timestamp'>): void {
  if (typeof window === 'undefined') return;

  const fullPreferences: ConsentPreferences = {
    ...preferences,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, fullPreferences.timestamp.toString());

    // Update Google Consent Mode
    updateGoogleConsent(fullPreferences);
  } catch (error) {
    console.error('Failed to save consent preferences:', error);
  }
}

/**
 * Grant all consents (user clicked "Accept")
 */
export function grantAllConsents(): void {
  saveConsentPreferences({
    analytics: 'granted',
    marketing: 'granted',
    functionality: 'granted',
  });
}

/**
 * Deny all consents (user clicked "Reject")
 */
export function denyAllConsents(): void {
  saveConsentPreferences({
    analytics: 'denied',
    marketing: 'denied',
    functionality: 'granted', // Functionality cookies are essential
  });
}

/**
 * Clear all consent preferences
 */
export function clearConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
  } catch (error) {
    console.error('Failed to clear consent preferences:', error);
  }
}

/**
 * Check if user has made a consent choice
 */
export function hasConsented(): boolean {
  return getConsentPreferences() !== null;
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  const preferences = getConsentPreferences();
  return preferences?.analytics === 'granted';
}

/**
 * Check if marketing is enabled
 */
export function isMarketingEnabled(): boolean {
  const preferences = getConsentPreferences();
  return preferences?.marketing === 'granted';
}

/**
 * Get consent timestamp
 */
export function getConsentTimestamp(): number | null {
  if (typeof window === 'undefined') return null;

  try {
    const timestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
    return timestamp ? parseInt(timestamp, 10) : null;
  } catch {
    return null;
  }
}
