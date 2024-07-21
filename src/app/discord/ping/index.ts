import { NextRequest, NextResponse } from "next/server";

export function pingHandler(req: NextRequest, body: any) {
  return NextResponse.json({ type: 1 });
}
