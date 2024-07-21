import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { Routes } from "discord-api-types/v10";
import { makeDiscordRest } from "@/lib/make-discord-rest";

export async function newStatusModalHandler(req: NextRequest, json: any) {
  const allComponents = json.data.components.flatMap((v: any) => v.components);
  const newStatus = allComponents.find((v: any) => v.custom_id === "status")
    .value as string;

  const rest = makeDiscordRest();

  await rest.post(Routes.channelMessages(json.channel_id), {
    body: {
      embeds: [
        {
          title: "New Status",
          description: newStatus,
          author: {
            name: "immjs",
            icon_url: "https://immjs.dev/favicon.png",
          },
          footer: {
            text: new Date().toLocaleString("en-US"),
          },
        },
      ],
    },
  });

  await sql`DROP TABLE IF EXISTS Status;`;
  await sql`CREATE TABLE IF NOT EXISTS Status ( status varchar(4000), updatedAt timestamp, discordId numeric );`;
  await sql`INSERT INTO Status VALUES (${newStatus}, CURRENT_TIMESTAMP, ${json.channel_id}); `;

  return NextResponse.json({
    type: 4,
    data: {
      content: "Understood\n-# 了解いたしました",
      flags: 64,
    },
  });
}
