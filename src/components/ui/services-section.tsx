import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
}

export function ServicesSection({ title, subtitle, services }: ServicesSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-xl mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full mt-auto hover:bg-green-50 hover:border-green-300 transition-all active:scale-95 transform hover:shadow-md"
                  asChild
                >
                  <Link href={service.href}>
                    קרא עוד
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
