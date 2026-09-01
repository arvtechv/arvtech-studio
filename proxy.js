import { NextResponse } from 'next/server';

const rateLimit = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function cleanup() {
  const now = Date.now();
  for (const [key, entries] of rateLimit) {
    const valid = entries.filter(t => now - t < WINDOW_MS);
    if (valid.length === 0) rateLimit.delete(key);
    else rateLimit.set(key, valid);
  }
}

setInterval(cleanup, WINDOW_MS);

export function proxy(request) {
  if (request.nextUrl.pathname === '/api/contact' && request.method === 'POST') {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const now = Date.now();
    const timestamps = rateLimit.get(ip) || [];
    const recent = timestamps.filter(t => now - t < WINDOW_MS);

    if (recent.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.' },
        { status: 429 }
      );
    }

    recent.push(now);
    rateLimit.set(ip, recent);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
