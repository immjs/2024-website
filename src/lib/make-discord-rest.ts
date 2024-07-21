import { REST, RESTOptions } from "@discordjs/rest";

export function makeDiscordRest() {
  const config = { version: "10", makeRequest: fetch };
  return new REST(config as unknown as RESTOptions).setToken(
    process.env.DISCORD_TOKEN!,
  );
}
