import {NextResponse} from 'next/server';
import {z} from 'zod';

const ALLOWED_HOSTS = new Set(['localhost', '127.0.0.1']);

const schema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(10).max(5000),
    ts: z.number().int().optional().default(0),
    hp: z.string().optional().default(''),
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

    // Contrôle d’origine basique (facultatif)
    const origin = req.headers.get('origin') || req.headers.get('referer') || '';
    try {
        if (origin) {
            const h = new URL(origin).hostname;
            if (!ALLOWED_HOSTS.has(h)) {
                return NextResponse.json({ok: false, error: 'Forbidden'}, {status: 403});
            }
        }
    } catch {
    }

    const body = await req.json().catch(() => null);
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ok: false, error: 'Invalid payload'}, {status: 400});
    }

    const {hp, ts} = parsed.data;

    if (typeof hp === 'string' && hp.trim().length > 0) {
        return NextResponse.json({ok: false, error: 'Spam detected'}, {status: 400});
    }

    const MIN_FILL_MS = 1500;
    if (typeof ts === 'number' && ts > 0 && Date.now() - ts < MIN_FILL_MS) {
        return NextResponse.json({ok: false, error: 'Form filled too fast'}, {status: 400});
    }

    return NextResponse.json({ok: true}, {status: 200});
}