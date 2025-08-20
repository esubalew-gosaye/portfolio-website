import { NextResponse } from 'next/server';

// Simple email relay using Resend if RESEND_API_KEY is provided, otherwise logs
export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const subject = `Portfolio Contact: ${firstName} ${lastName}`;
    const text = `From: ${firstName} ${lastName} <${email}>

Message:
${message}`;

    const to = process.env.CONTACT_EMAIL || 'mesaye2010@gmail.com';

    // Try Resend if configured
    if (true) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer re_SUkp7bVi_4AVHYT5HA1qtSWMWQELMdi9D`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Portfolio <onboarding@resend.dev>`,
          to: [to],
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error('Resend error', body);
        return NextResponse.json(
          { error: 'Email service error' },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true });
    }

    // Fallback: log message server-side (for local dev)
    console.log('[CONTACT EMAIL]', { to, subject, text });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
