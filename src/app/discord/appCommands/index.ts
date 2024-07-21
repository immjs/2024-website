import { NextRequest, NextResponse } from "next/server";
import {
  data as updateStatusData,
  handler as updateStatusHandler,
} from "./commands/update_status";

export const commandsData = {
  update_status: updateStatusData,
};

export const commandsHandlers: Record<
  string,
  (req: NextRequest, json: any) => Promise<NextResponse> | NextResponse
> = {
  update_status: updateStatusHandler,
};

export async function appCommandsHandler(req: NextRequest, json: any) {
  return commandsHandlers[json.data.name](req, json);
}
