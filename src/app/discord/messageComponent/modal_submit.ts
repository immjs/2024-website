import { NextRequest, NextResponse } from "next/server";
import { deleteStatusReplyHandler } from "./components/delete_status_reply";

const modalsHandlers: Record<
  string,
  (req: NextRequest, json: any) => Promise<NextResponse> | NextResponse
> = {
  delete_status_reply: deleteStatusReplyHandler,
};

export function messageComponentHandler(req: NextRequest, json: any) {
  return modalsHandlers[json.data.custom_id](req, json);
}
