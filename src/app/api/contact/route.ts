import { NextResponse } from 'next/server';

type Body = { name?: string; email?: string; message?: string };

function validateEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: Hook up to an email provider (SendGrid, Mailgun) or database.
    // For now, log to the server console so deploy logs contain the message.
    // Sensitive: do not expose logs publicly.
    console.log('Contact form submission', { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
