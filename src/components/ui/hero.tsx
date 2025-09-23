import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  stats,
  testimonials
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            {subtitle}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <a href={ctaHref}>
                {ctaText}
              </a>
            </Button>

            {secondaryCtaText && secondaryCtaHref && (
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href={secondaryCtaHref}>
                  {secondaryCtaText}
                </a>
              </Button>
            )}
          </div>

          {stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {testimonials && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
