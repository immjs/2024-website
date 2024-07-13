import { createId } from '@paralleldrive/cuid2';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('csrf-token')?.value || createId();

  request.cookies.delete('csrf-token');
  request.cookies.set('csrf-token', token);

  const response = NextResponse.next({
    headers: {
      'Cookie': `csrf-token=${token}`,
    },
  });
  
  response.cookies.set('csrf-token', token, {
    secure: true,
    sameSite: true,
    maxAge: 604800,
  });
  response.headers.set('Cache-Control', 'maxAge=604800');
  return response
}
