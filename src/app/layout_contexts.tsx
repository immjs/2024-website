"use client";
import { themeContext } from "@/components/theme";
import { tokenContext } from "@/components/csrf";
import { ReactNode, useState } from "react";
import { LightBtn } from "@/components/lightbtn";

export function ApplyContexts({ children, ogTheme, csrf }: ApplyContextsProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(ogTheme);
  return (
    <div className={`before:bg-cat-crust before:fixed before:inset-0 before:-z-50 theme-setter ${theme === 'light' ? 'cat-latte' : ''}`}>
      <LightBtn theme={theme} setTheme={setTheme} token={csrf} />
      <tokenContext.Provider value={csrf}>
        <themeContext.Provider value={theme}>
            { children }
        </themeContext.Provider>
      </tokenContext.Provider>
    </div>
  );
}

interface ApplyContextsProps {
  children: ReactNode | ReactNode[];
  csrf: string;
  ogTheme: 'light' | 'dark';
}
