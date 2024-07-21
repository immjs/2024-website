import { NextRequest, NextResponse } from "next/server";
import { newStatusModalHandler } from "./modals/new_status_modal";

const modalsHandlers: Record<
  string,
  (req: NextRequest, json: any) => Promise<NextResponse> | NextResponse
> = {
  new_status_modal: newStatusModalHandler,
};

export function modalSubmitHandler(req: NextRequest, json: any) {
  return modalsHandlers[json.data.custom_id](req, json);
}
