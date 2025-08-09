import { getTheme } from "@/components/theme-server";
import { ApplyContexts } from "../layout_contexts";
import { Home } from "./page-client";
import { getToken } from "@/components/csrf-server";
import { sql } from "@vercel/postgres";
import { tetrioFetch } from "@/lib/tetrio-fetch";
import json5 from "json5";
import { headers } from "next/headers";
import { TetrioData } from "./bitsofpersonality";

export default async function Page() {
  const [status, [data40l, dataTetra], [prev, host, next]] = await Promise.all([
    sql`SELECT * FROM Status LIMIT 1;`.then((v) => v.rows[0]),
    Promise.race([
      (async (): Promise<TetrioData> => {
        try {
          const {
            record: record40l,
          } = await tetrioFetch(`/users/${process.env.TETRIO_USERNAME}/summaries/40l`);
          const recordleague = await tetrioFetch(`/users/${process.env.TETRIO_USERNAME}/summaries/league`);
          const user = await tetrioFetch(
            `/users/${process.env.TETRIO_USERNAME}`,
          );
          const { news } = await tetrioFetch(`/news/user_${user._id}`);
          return [
            {
              time: record40l.results.stats.finaltime as number,
              piecesPlaced: record40l.results.stats.piecesplaced as number,
              at: new Date(record40l.ts).getTime(),
            },
            {
              rank: recordleague.rank as string,
              rating: recordleague.tr as number,
              at: new Date(
                news.find((v: any) => v.type === "rankup" && v.data.rank)?.ts || 0,
              ).getTime(),
            },
          ];
        } catch (err) {
          console.log(err);
          return [
            {
              time: -1,
              piecesPlaced: -1,
              at: 0,
            },
            {
              rank: "z",
              rating: -1,
              at: 0,
            },
          ];
        }
      })(),
      new Promise<TetrioData>((r) => setTimeout(() => r([
        {
          time: -1,
          piecesPlaced: -1,
          at: 0,
        },
        {
          rank: "z",
          rating: -1,
          at: 0,
        },
      ]), 1_000)),
    ]),
    (async () => {
      const host = headers().get('host')!;
      if (!links) return [host, host, host];

      try {
        const links = await Promise.race([
          fetch(`https://palette.nekoweb.org/sites.js?t=${Date.now()}`)
            .then((v) => v.text())
            .then((v) => v.match(/default ([^;]+);/i)?.[1]),
          new Promise<undefined>((r) => setTimeout(() => r(undefined), 1_000)),
        ]);

        const linksParsed: any[] = json5.parse(links);
        const linkIndex = Math.max(0, linksParsed.findIndex((v) => v.hostname === host || v.extraUrl?.includes(host)));
      
        const mod = (a: number, b: number) => ((a % b) + b) % b
        const prev = linksParsed[mod(linkIndex - 1, linksParsed.length)];
        const next = linksParsed[mod(linkIndex + 1, linksParsed.length)];

        return [prev.hostname, host, next.hostname];
      } catch (err) {
        console.error(err);

        return [host, host, host]
      }
    })(),
  ]);

  return (
    <ApplyContexts ogTheme={getTheme()} csrf={getToken()}>
      <Home status={status} tetrio={[data40l, dataTetra]} palette={[prev, host, next]} />
    </ApplyContexts>
  );
}
