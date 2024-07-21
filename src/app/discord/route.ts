import { NextRequest, NextResponse } from "next/server";
import { validate } from "./crypto";
import { HTTPError } from "./httpError";
import { handlers } from "./index";

export async function POST(req: NextRequest) {
  const body = await req.text();
  try {
    validate(req, body);
  } catch (errUntyped) {
    const err = errUntyped as Error;
    const httpErr = HTTPError.from(err);

    return new NextResponse(httpErr.message, { status: httpErr.httpCode });
  }

  const json = JSON.parse(body); // that's great
  // we're back to just JS

  const handler = handlers[(json.type as number) - 1];
  return handler(req, json);
}
