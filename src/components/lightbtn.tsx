"use client";

import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { setCookie } from "cookies-next";

export function LightBtn({ theme, setTheme, token }: LightBtnProps) {
  const otherTheme = { light: "dark", dark: "light" } as const;
  useEffect(() => setCookie("theme", theme, { maxAge: 31536000 }), [theme]);
  return (
    <form
      className="absolute top-one right-one z-50"
      method="POST"
      action="/change_theme"
    >
      <input hidden name="csrf" value={token} readOnly />
      <button
        title={`Switch from ${theme} theme to ${otherTheme[theme]}`}
        className={`h-two w-two pl-one rounded-one ${theme === "light" ? "bg-cat-yellow" : "bg-cat-text"}`}
        onClick={(event) => {
          event.preventDefault();
          const newTheme = otherTheme[theme];
          setTheme(newTheme);
        }}
      >
        {theme === "dark" && (
          <div className="h-one w-one bg-cat-crust rounded-l-half" />
        )}
      </button>
    </form>
  );
}

interface LightBtnProps {
  theme: "light" | "dark";
  setTheme: Dispatch<"light" | "dark" | SetStateAction<"light" | "dark">>;
  token: string;
}
