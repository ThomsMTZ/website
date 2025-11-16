import {NextResponse} from 'next/server';
import {z} from 'zod';

const schema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(10).max(5000),
    token: z.string().min(1),
});

const hits = new Map();
const WINDOW_MS = 60_000;
const LIMIT = 5;

function rateLimited(ip) {
    const now = Date.now();
    const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
    arr.push(now);
    hits.set(ip, arr);
    return arr.length > LIMIT;
}

export async function POST(req) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) {
        return NextResponse.json({ok: false, error: 'Too Many Requests'}, {status: 429});
    }

    const body = await req.json().catch(() => null);
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ok: false, error: 'Invalid payload'}, {status: 400});
    }

    try {
        const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY || '',
                response: parsed.data.token,
            }),
            cache: 'no-store',
        });
        const verify = await res.json();
        if (!verify.success || (typeof verify.score === 'number' && verify.score < 0.5)) {
            return NextResponse.json({ok: false, error: 'reCAPTCHA failed'}, {status: 400});
        }
    } catch {
        return NextResponse.json({ok: false, error: 'Captcha check error'}, {status: 502});
    }

    // TODO: envoi via un provider (Resend, SendGrid, SES)
    return NextResponse.json({ok: true}, {status: 200});
}
