"use client";
import { themeContext } from "@/components/theme";
import { tokenContext } from "@/components/csrf";
import { ReactNode, useState } from "react";
import { LightBtn } from "@/components/lightbtn";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export function ApplyContexts({ children, ogTheme, csrf }: ApplyContextsProps) {
  const [theme, setTheme] = useState<"light" | "dark">(ogTheme);
  return (
    <body
      className={`theme-setter ${theme === "light" ? "cat-latte bg-cat-surface0" : "bg-cat-crust"}`}
    >
      <SpeedInsights />
      <Analytics />
      <LightBtn theme={theme} setTheme={setTheme} token={csrf} />
      <tokenContext.Provider value={csrf}>
        <themeContext.Provider value={theme}>{children}</themeContext.Provider>
      </tokenContext.Provider>
    </body>
  );
}

interface ApplyContextsProps {
  children: ReactNode | ReactNode[];
  csrf: string;
  ogTheme: "light" | "dark";
}
