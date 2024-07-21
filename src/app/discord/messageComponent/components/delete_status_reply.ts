import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { Routes } from "discord-api-types/v10";
import { makeDiscordRest } from "@/lib/make-discord-rest";

export async function deleteStatusReplyHandler(req: NextRequest, json: any) {
  const rest = makeDiscordRest();

  await rest.delete(Routes.channel(json.channel_id));

  return NextResponse.json({
    type: 4,
    data: {},
  });
}
