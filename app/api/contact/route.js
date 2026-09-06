import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// --- Rate limiting (in-memory, resets on cold start) ---
const hits = new Map();
const WINDOW_MS = 60_000;
const LIMIT = 5;

const rateLimited = ip => {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > LIMIT;
};

// --- Validation schema ---
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  ts: z.number().int().optional().default(0),
  hp: z.string().optional().default(''),
});

// --- Send email via nodemailer (optional, if SMTP credentials configured) ---
const sendEmail = async ({ name, email, message }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_ADDRESS,
    replyTo: email,
    subject: `[Portfolio] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New contact from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });
};

// --- Send Telegram notification ---
const sendTelegram = async ({ name, email, message }) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  const escapeHtml = str =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const text = [
    '📬 <b>New portfolio contact</b>',
    `👤 <b>Name:</b> ${escapeHtml(name)}`,
    `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    `💬 <b>Message:</b>\n${escapeHtml(message)}`,
  ].join('\n');

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });
};

// --- POST /api/contact ---
export const POST = async req => {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too Many Requests' }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }

  const { name, email, message, hp, ts } = parsed.data;

  // Honeypot check
  if (hp.trim().length > 0) {
    return NextResponse.json({ ok: false, error: 'Spam detected' }, { status: 400 });
  }

  // Bot speed check (form filled in less than 1.5s)
  const MIN_FILL_MS = 1500;
  if (ts > 0 && Date.now() - ts < MIN_FILL_MS) {
    return NextResponse.json({ ok: false, error: 'Form filled too fast' }, { status: 400 });
  }

  // Send email + Telegram in parallel; if one fails the other still runs
  const [emailResult, telegramResult] = await Promise.allSettled([
    sendEmail({ name, email, message }),
    sendTelegram({ name, email, message }),
  ]);

  if (emailResult.status === 'rejected') {
    console.error('[contact] Email failed:', emailResult.reason);
  }
  if (telegramResult.status === 'rejected') {
    console.error('[contact] Telegram failed:', telegramResult.reason);
  }

  // Return success even if notifications have non-critical failures
  return NextResponse.json({ ok: true }, { status: 200 });
};
