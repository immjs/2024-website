import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  const ogTheme = req.cookies.get('theme')?.value || 'dark';
  const response = NextResponse.redirect(new URL(req.url).searchParams.get('then')!);
  response.cookies.set('theme', { light: 'dark', dark: 'light' }[ogTheme]!, {
    maxAge: 31536000,
  });
  return response;
}
