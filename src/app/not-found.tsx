import { getTheme } from "@/components/theme-server";
import { ApplyContexts } from "./layout_contexts";
import { getToken } from "@/components/csrf-server";
import Error from "./not-found-client";

export default async function Page() {
  return (
    <ApplyContexts ogTheme={getTheme()} csrf={getToken()}>
      <Error />
    </ApplyContexts>
  );
}
