import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  profileImage?: {
    src: string;
    alt: string;
  };
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
  profileImage,
  stats,
  testimonials
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-beige-50 to-beige-200 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-sm sm:text-base">
            {subtitle}
          </Badge>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-6">
            {profileImage && (
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={profileImage.src}
                  alt={profileImage.alt}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-beige-900 leading-tight">
              {title}
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-beige-600 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 h-auto hover:bg-beige-800 transition-all active:scale-95 transform hover:shadow-lg"
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
                className="text-lg px-8 py-4 h-auto hover:bg-beige-50 hover:border-beige-300 transition-all active:scale-95 transform hover:shadow-md"
                asChild
              >
                <a href={secondaryCtaHref}>
                  {secondaryCtaText}
                </a>
              </Button>
            )}
          </div>

          {stats && (
            <div className="grid grid-cols-3 gap-2 sm:gap-8 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-beige-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-beige-600 text-xs sm:text-sm lg:text-base leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {testimonials && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center p-4 h-full flex flex-col bg-white/50 backdrop-blur-sm border border-beige-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <p className="text-beige-700 mb-4 italic text-sm leading-relaxed flex-1">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="text-xs border-t pt-3 mt-auto">
                      <div className="font-semibold text-beige-900">
                        {testimonial.author}
                      </div>
                      <div className="text-beige-600">
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
