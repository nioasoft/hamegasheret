"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  logo?: string;
  menuItems: Array<{
    label: string;
    href: string;
  }>;
  ctaButton?: {
    text: string;
    href: string;
  } | null;
}

export function Navigation({ logo = "דבי סיידה ושות'", menuItems, ctaButton }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b" aria-label="תפריט ניווט ראשי">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          <div className="absolute right-0">
            <Link href="/" className="text-xl font-bold text-beige-900">
              {logo}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-beige-600 hover:text-beige-900 px-2 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          {ctaButton && (
            <div className="absolute left-0 hidden md:block">
              <Button className="hover:bg-beige-800 transition-all active:scale-95 transform hover:shadow-lg" asChild>
                <Link href={ctaButton.href}>
                  {ctaButton.text}
                </Link>
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden absolute left-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-beige-700 hover:bg-beige-200 hover:border-beige-900 shadow-md transition-all active:scale-95 transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-7 w-7 text-beige-800" /> : <Menu className="h-7 w-7 text-beige-800" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-beige-600 hover:text-beige-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {ctaButton && (
                <div className="px-3 py-2">
                  <Button asChild className="w-full hover:bg-beige-800 transition-all active:scale-95 transform hover:shadow-lg">
                    <Link href={ctaButton.href} onClick={() => setIsMenuOpen(false)}>
                      {ctaButton.text}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
