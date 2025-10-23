import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-beige-50 to-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-beige-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-beige-900 mb-4">
            הדף לא נמצא
          </h2>
          <p className="text-xl text-beige-700 mb-8">
            מצטערים, הדף שחיפשת אינו קיים או הועבר למקום אחר
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="bg-beige-900 hover:bg-beige-800">
              חזרה לדף הבית
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-beige-900 text-beige-900 hover:bg-beige-50">
              צור קשר
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-beige-200">
          <p className="text-beige-600 mb-4">אולי תרצו לבקר בדפים הבאים:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/mediation" className="text-beige-900 hover:text-beige-700 underline">
              גישור גירושין
            </Link>
            <Link href="/about" className="text-beige-900 hover:text-beige-700 underline">
              אודות
            </Link>
            <Link href="/articles" className="text-beige-900 hover:text-beige-700 underline">
              מאמרים
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
