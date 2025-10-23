"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-beige-50 to-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-4xl font-bold text-beige-900 mb-4">
            משהו השתבש
          </h1>
          <p className="text-xl text-beige-700 mb-8">
            מצטערים, אירעה שגיאה בלתי צפויה. אנא נסו שוב או חזרו לדף הבית.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={reset}
            className="bg-beige-900 hover:bg-beige-800"
          >
            נסה שוב
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-beige-900 text-beige-900 hover:bg-beige-50"
            onClick={() => (window.location.href = "/")}
          >
            חזרה לדף הבית
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-beige-200">
          <p className="text-beige-600 mb-4">
            אם הבעיה נמשכת, אנא צרו איתנו קשר:
          </p>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="tel:0536062456"
              className="text-beige-900 hover:text-beige-700 font-semibold"
            >
              053-606-2456
            </a>
            <a
              href="/contact"
              className="text-beige-900 hover:text-beige-700 underline"
            >
              טופס יצירת קשר
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
