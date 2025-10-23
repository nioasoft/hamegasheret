"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";

interface ContactFormProps {
  email?: string;
  phone?: string;
  whatsappText?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm({ email = "zehavit@silaw.co.il", phone = "+972-53-606-2456", whatsappText = "שלום, אני מעוניין בייעוץ גישור גירושין" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "נא להזין שם מלא";
    }

    if (!formData.email.trim()) {
      newErrors.email = "נא להזין כתובת אימייל";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "כתובת האימייל אינה תקינה";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "נא להזין מספר טלפון";
    }

    if (!formData.message.trim()) {
      newErrors.message = "נא להזין הודעה";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Announce error to screen readers
      const errorMessage = "הטופס מכיל שגיאות. נא לבדוק את השדות ולנסות שנית.";
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'alert');
      announcement.setAttribute('aria-live', 'assertive');
      announcement.className = 'sr-only';
      announcement.textContent = errorMessage;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'שגיאה בשליחת הטופס');
      }

      // Success
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});

      // Announce success to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = "ההודעה נשלחה בהצלחה!";
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 3000);

    } catch (error) {
      // Handle error
      const errorMessage = error instanceof Error ? error.message : 'שגיאה בשליחת הטופס. אנא נסה שנית.';
      setErrors({ message: errorMessage });

      // Announce error to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'alert');
      announcement.setAttribute('aria-live', 'assertive');
      announcement.className = 'sr-only';
      announcement.textContent = errorMessage;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
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
          <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="טופס יצירת קשר">
            {submitSuccess && (
              <div
                className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                role="status"
                aria-live="polite"
              >
                ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" required>
                שם מלא
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                autoComplete="name"
                placeholder="הכנס את שמך המלא"
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" required>
                כתובת אימייל
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
                placeholder="example@email.com"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" required>
                טלפון
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                autoComplete="tel"
                placeholder="050-1234567"
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" required>
                הודעה
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="אנא פרט את פנייתך..."
                rows={5}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full hover:bg-beige-800 transition-colors active:scale-95 transform"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "שולח הודעה..." : "שלח הודעה"}
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
              <p className="text-beige-600">
                יהודה הנחתום 4<br />
                בניין בית בלטק<br />
                באר שבע
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">טלפון</h3>
              <p className="text-beige-600">
                <a href={`tel:${phone}`} className="hover:text-beige-700">
                  {phone.replace('+972-', '0').replace('+972', '0')}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">אימייל</h3>
              <p className="text-beige-600">
                <a href={`mailto:${email}`} className="hover:text-beige-700">
                  {email}
                </a>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-lg mb-4">צור קשר מהיר</h3>
            <div className="space-y-3">
              <Button
                className="w-full hover:bg-beige-800 transition-colors"
                asChild
              >
                <a href={`tel:${phone}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  התקשר עכשיו
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full hover:bg-beige-100 hover:border-beige-300 transition-colors"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  וואטסאפ
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                asChild
              >
                <a href={`mailto:${email}`} className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  שלח אימייל
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
