import { NextRequest, NextResponse } from "next/server";
import { commandsData } from ".";

// and deploy your commands!
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Invalid NODE_ENV for such request");
  }

  console.log(
    await Promise.all(
      Object.values(commandsData).map((commandData) =>
        fetch(
          `https://discord.com/api/v10/applications/${process.env.DISCORD_CLIENT_ID}/commands`,
          {
            method: "POST",
            body: JSON.stringify(commandData),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
            },
          },
        ),
      ),
    ),
  );

  return new NextResponse("a-ok");
}
