import { cookies } from "next/headers";

export const getTheme = () =>
  (cookies().get("theme")?.value || "dark") as "light" | "dark";
