import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Lazy initialize Resend to avoid build-time errors when API key is not available
function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'כל השדות הם חובה' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'כתובת האימייל אינה תקינה' },
        { status: 400 }
      );
    }

    // Email to the office
    const officeEmailHtml = `
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            direction: rtl;
            background-color: #f5f5f0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .header {
            background-color: #8b7355;
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px 20px;
            text-align: right;
          }
          .field {
            margin-bottom: 20px;
            border-bottom: 1px solid #e5e5e0;
            padding-bottom: 15px;
            text-align: right;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #8b7355;
            font-size: 14px;
            margin-bottom: 5px;
            text-align: right;
          }
          .value {
            color: #333;
            font-size: 16px;
            line-height: 1.5;
            text-align: right;
          }
          .message-box {
            background-color: #f9f9f7;
            padding: 15px;
            border-right: 4px solid #8b7355;
            margin-top: 10px;
            white-space: pre-wrap;
            text-align: right;
          }
          .footer {
            background-color: #f5f5f0;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 פנייה חדשה מהאתר</h1>
          </div>
          <div class="content" dir="rtl" style="text-align: right; direction: rtl;">
            <div class="field" style="text-align: right; direction: rtl;">
              <div class="label" style="text-align: right; direction: rtl;">שם מלא:</div>
              <div class="value" style="text-align: right; direction: rtl;">${name}</div>
            </div>
            <div class="field" style="text-align: right; direction: rtl;">
              <div class="label" style="text-align: right; direction: rtl;">כתובת אימייל:</div>
              <div class="value" style="text-align: right; direction: rtl;"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field" style="text-align: right; direction: rtl;">
              <div class="label" style="text-align: right; direction: rtl;">מספר טלפון:</div>
              <div class="value" style="text-align: right; direction: rtl;"><a href="tel:${phone}">${phone}</a></div>
            </div>
            <div class="field" style="text-align: right; direction: rtl;">
              <div class="label" style="text-align: right; direction: rtl;">הודעה:</div>
              <div class="message-box" style="text-align: right; direction: rtl;">${message}</div>
            </div>
          </div>
          <div class="footer">
            פנייה זו נשלחה מטופס יצירת קשר באתר hamegasheret.co.il
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to the client (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            direction: rtl;
            background-color: #f5f5f0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .header {
            background-color: #8b7355;
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px 20px;
            line-height: 1.8;
            text-align: right;
          }
          .greeting {
            font-size: 18px;
            font-weight: bold;
            color: #8b7355;
            margin-bottom: 20px;
            text-align: right;
          }
          .message {
            color: #333;
            margin-bottom: 15px;
            text-align: right;
          }
          .warning {
            background-color: #fff8dc;
            border: 2px solid #ffa500;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
            font-weight: bold;
            color: #8b4513;
            text-align: right;
          }
          .contact-info {
            background-color: #f9f9f7;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            text-align: right;
          }
          .contact-item {
            margin: 10px 0;
            font-size: 16px;
            text-align: right;
          }
          .contact-label {
            font-weight: bold;
            color: #8b7355;
          }
          .footer {
            background-color: #f5f5f0;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ פנייתך התקבלה בהצלחה</h1>
          </div>
          <div class="content" dir="rtl" style="text-align: right; direction: rtl;">
            <div class="greeting" style="text-align: right; direction: rtl;">שלום ${name},</div>

            <p class="message" style="text-align: right; direction: rtl;">
              תודה שפנית אלינו! פנייתך התקבלה במערכת שלנו בהצלחה.
            </p>

            <p class="message" style="text-align: right; direction: rtl;">
              <strong>עו"ד זהבית דבי - המגשרת</strong> תחזור אליך ביום העסקים הבא בשעות הפעילות.
            </p>

            <div class="warning" style="text-align: right; direction: rtl;">
              ⚠️ שים לב: מייל זה נשלח ממערכת אוטומטית ולא ניתן להגיב אליו.
              <br>ליצירת קשר ישיר, אנא השתמש באחת מדרכי ההתקשרות הבאות:
            </div>

            <div class="contact-info" style="text-align: right; direction: rtl;">
              <div class="contact-item" style="text-align: right; direction: rtl;">
                <span class="contact-label">📞 טלפון:</span>
                <a href="tel:+972-53-606-2456">053-606-2456</a>
              </div>
              <div class="contact-item" style="text-align: right; direction: rtl;">
                <span class="contact-label">💬 וואטסאפ:</span>
                <a href="https://wa.me/972536062456">שלח הודעה</a>
              </div>
              <div class="contact-item" style="text-align: right; direction: rtl;">
                <span class="contact-label">✉️ אימייל:</span>
                <a href="mailto:zehavit@silaw.co.il">zehavit@silaw.co.il</a>
              </div>
              <div class="contact-item" style="text-align: right; direction: rtl;">
                <span class="contact-label">🏢 כתובת:</span>
                יהודה הנחתום 4, בניין בית בלטק, באר שבע
              </div>
            </div>

            <p class="message" style="text-align: right; direction: rtl;">
              אנחנו כאן לעזור לך למצוא את הפתרון הטוב ביותר למצבך.
            </p>

            <p class="message" style="margin-top: 30px; text-align: right; direction: rtl;">
              בברכה,<br>
              <strong>המגשרת - עו"ד זהבית דבי</strong><br>
              גישור גירושין ודיני משפחה
            </p>
          </div>
          <div class="footer">
            המגשרת - עו"ד זהבית דבי | hamegasheret.co.il
          </div>
        </div>
      </body>
      </html>
    `;

    // Send both emails
    const results = await Promise.allSettled([
      // Email to office
      getResendClient().emails.send({
        from: 'המגשרת <donotreply@hamegasheret.co.il>',
        to: ['zehavit@silaw.co.il', 'asaf@silaw.co.il'],
        subject: `פנייה חדשה מהאתר - ${name}`,
        html: officeEmailHtml,
        replyTo: email, // Allow office to reply directly to the client
      }),
      // Confirmation email to client
      getResendClient().emails.send({
        from: 'המגשרת <donotreply@hamegasheret.co.il>',
        to: email,
        subject: 'פנייתך התקבלה - המגשרת עו״ד זהבית דבי',
        html: clientEmailHtml,
      }),
    ]);

    // Check if both emails were sent successfully
    const officeEmailResult = results[0];
    const clientEmailResult = results[1];

    if (officeEmailResult.status === 'rejected' || clientEmailResult.status === 'rejected') {
      console.error('Email sending failed:', {
        officeEmail: officeEmailResult.status === 'rejected' ? officeEmailResult.reason : 'success',
        clientEmail: clientEmailResult.status === 'rejected' ? clientEmailResult.reason : 'success',
      });

      return NextResponse.json(
        { error: 'שגיאה בשליחת המייל. אנא נסה שנית או צור קשר טלפונית.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'שגיאה בשליחת המייל. אנא נסה שנית מאוחר יותר.' },
      { status: 500 }
    );
  }
}
