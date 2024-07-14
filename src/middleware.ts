import { createId } from '@paralleldrive/cuid2';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.method.toUpperCase() === 'POST') {
    const expectedCsrf = request.cookies.get('csrf')?.value;
    if (!expectedCsrf) {
      return new NextResponse('CSRF token not initialized', { status: 403 });
    }
    if (expectedCsrf !== (await request.formData()).get('csrf')) {
      return new NextResponse('CSRF token mismatch', { status: 403 });
    }
  }

  const token = request.cookies.get('csrf')?.value || createId();

  request.cookies.delete('csrf');
  request.cookies.set('csrf', token);

  const response = NextResponse.next({
    headers: {
      'X-Url': request.url,
    },
  });
  
  response.cookies.set('csrf', token, {
    secure: true,
    sameSite: true,
    maxAge: 604800,
  });
  response.headers.set('Cache-Control', 'maxAge=604800');
  return response
}
