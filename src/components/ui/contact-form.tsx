"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactFormProps {
  email?: string;
  phone?: string;
  whatsappText?: string;
}

export function ContactForm({ email = "asaf@hamegasheret.co.il", phone = "+972-54-423-2167", whatsappText = "שלום, אני מעוניין בייעוץ גישור גירושין" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // כאן תהיה הלוגיקה לשליחת המייל
    // לעת עתה נדמה הצלחה
    setTimeout(() => {
      alert("ההודעה נשלחה בהצלחה!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">צור קשר</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">שם מלא</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="הכנס את שמך המלא"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">כתובת אימייל</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">טלפון</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="050-1234567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">הודעה</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="אנא פרט את פנייתך..."
                rows={5}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">פרטי קשר</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">כתובת המשרד</h3>
              <p className="text-gray-600">
                יהודה הנחתום 4<br />
                בניין בית בלטק<br />
                באר שבע
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">טלפון</h3>
              <p className="text-gray-600">
                <a href={`tel:${phone}`} className="hover:text-blue-600">
                  {phone}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">אימייל</h3>
              <p className="text-gray-600">
                <a href={`mailto:${email}`} className="hover:text-blue-600">
                  {email}
                </a>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-lg mb-4">צור קשר מהיר</h3>
            <div className="space-y-3">
              <Button
                className="w-full"
                asChild
              >
                <a href={`tel:${phone}`}>
                  📞 התקשר עכשיו
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  💬 וואטסאפ
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a href={`mailto:${email}`}>
                  ✉️ שלח אימייל
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
