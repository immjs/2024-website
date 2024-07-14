import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  const ogTheme = req.cookies.get('theme')?.value || 'dark';
  const url = req.nextUrl.clone();
  url.pathname = new URL(req.url).searchParams.get('then')!;
  url.search = '';
  const response = NextResponse.redirect(url);
  response.cookies.set('theme', { light: 'dark', dark: 'light' }[ogTheme]!, {
    maxAge: 31536000,
  });
  return response;
}
