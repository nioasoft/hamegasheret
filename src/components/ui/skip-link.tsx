"use client";

import Link from "next/link";

/**
 * SkipLink component for accessibility
 * Allows keyboard users to skip navigation and jump directly to main content
 * Hidden by default, visible on focus (WCAG 2.0 AA compliant)
 */
export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-beige-900 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-beige-700 focus:ring-offset-2 transition-all"
    >
      דלג לתוכן הראשי
    </Link>
  );
}
