import { getTheme } from "@/components/theme-server";
import { ApplyContexts } from "../layout_contexts";
import { Home } from "./page-client";
import { getToken } from "@/components/csrf-server";
import { sql } from "@vercel/postgres";
import { tetrioFetch } from "@/lib/tetrio-fetch";

export default async function Page() {
  const [status, [data40l, dataTetra]] = await Promise.all([
    sql`SELECT * FROM Status LIMIT 1;`.then((v) => v.rows[0]),
    (async () => {
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
  ]);

  return (
    <ApplyContexts ogTheme={getTheme()} csrf={getToken()}>
      <Home status={status} tetrio={[data40l, dataTetra]} />
    </ApplyContexts>
  );
}
