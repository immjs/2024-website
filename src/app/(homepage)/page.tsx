import { getTheme } from "@/components/theme-server";
import { ApplyContexts } from "../layout_contexts";
import { Home } from "./page-client";
import { getToken } from "@/components/csrf-server";
import { sql } from "@vercel/postgres";

export default async function Page() {
  const status = await sql`SELECT * FROM Status LIMIT 1;`;

  return (
    <ApplyContexts ogTheme={getTheme()} csrf={getToken()}>
      <Home status={status.rows[0]} />
    </ApplyContexts>
  );
}
