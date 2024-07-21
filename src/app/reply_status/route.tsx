import { makeDiscordRest } from "@/lib/make-discord-rest";
import { sql } from "@vercel/postgres";
import { Routes } from "discord-api-types/v10";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const {
    rows: [{ status, discordid }],
  } = await sql`SELECT * FROM Status LIMIT 1;`;

  const rest = makeDiscordRest();

  const thread: any = await rest.post(Routes.threads(discordid), {
    body: {
      name: `status reply on ${new Date().toLocaleString("en-US")}`,
      type: 12,
    },
  });
  await rest.post(Routes.channelMessages(thread.id), {
    body: {
      content: `<@${process.env.DISCORD_OWNER_ID!}>`,
      embeds: [
        {
          title: "Reply to Status",
          description: status,
          author: {
            name: "immjs",
            icon_url: "https://immjs.dev/favicon.png",
          },
          footer: {
            text: new Date().toLocaleString("en-US"),
          },
          fields: [
            {
              name: "Reply",
              value: body.get("reply"),
              inline: false,
            },
          ],
        },
      ],
    },
  });

  return new NextResponse("All good!", {
    status: 307,
    headers: {
      Location: "/success",
    },
  });
}