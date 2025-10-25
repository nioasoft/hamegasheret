/**
 * Google Analytics Global Type Definitions
 * הגדרות גלובליות עבור Google Analytics
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
