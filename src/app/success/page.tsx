import { getTheme } from "@/components/theme-server";
import { ApplyContexts } from "../layout_contexts";
import { getToken } from "@/components/csrf-server";
import Success from "./page-client";

export default async function Page() {
  return (
    <ApplyContexts ogTheme={getTheme()} csrf={getToken()}>
      <Success />
    </ApplyContexts>
  );
}
