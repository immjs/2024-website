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
          records: {
            "40l": { record },
          },
        } = await tetrioFetch(`/users/${process.env.TETRIO_USERNAME}/records`);
        const { user } = await tetrioFetch(
          `/users/${process.env.TETRIO_USERNAME}`,
        );
        const { news } = await tetrioFetch(`/news/user_${user._id}`);
        return [
          {
            time: record.endcontext.finalTime as number,
            piecesPlaced: record.endcontext.piecesplaced as number,
            at: new Date(record.ts).getTime(),
          },
          {
            rank: user.league.rank as string,
            rating: user.league.rating as number,
            at: new Date(
              news.find((v: any) => v.type === "rankup" && v.data.rank).ts,
            ).getTime(),
          },
        ];
      } catch (err) {
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
