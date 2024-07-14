"use client";

import { usePathname } from "next/navigation";
import { getToken } from "./csrf";
import { getTheme } from "./theme";

export function LightBtn() {
  const token = getToken();
  const theme = getTheme();
  const pathname = new URL(usePathname()).pathname;
  return (
    <form className="absolute top-one right-one" method="POST" action={`/change_theme?then=${encodeURIComponent(pathname)}`}>
      <input hidden name="csrf" value={token} readOnly />
      <button className={`h-two w-two pl-one rounded-one ${theme === 'light' ? 'bg-cat-yellow' : 'bg-cat-text'}`}>
        {theme === 'dark' && <div className="h-one w-one bg-cat-crust rounded-l-half" />}
      </button>
    </form>
  );
}
