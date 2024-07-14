"use client";

import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { setCookie } from 'cookies-next';

export function LightBtn({ theme, setTheme, token }: LightBtnProps) {
  const pathname = usePathname();
  useEffect(() => setCookie('theme', theme, { maxAge: 31536000 }), [theme]);
  return (
    <form className="absolute top-one right-one" method="POST" action={`/change_theme?then=${encodeURIComponent(pathname)}`}>
      <input hidden name="csrf" value={token} readOnly />
      <button
        className={`h-two w-two pl-one rounded-one ${theme === 'light' ? 'bg-cat-yellow' : 'bg-cat-text'}`}
        onClick={(event) => {
          event.preventDefault();
          const newTheme: string = { light: 'dark', dark: 'light' }[theme]!;
          setTheme(newTheme);
        }}
      >
        {theme === 'dark' && <div className="h-one w-one bg-cat-crust rounded-l-half" />}
      </button>
    </form>
  );
}

interface LightBtnProps {
  theme: string;
  setTheme: Dispatch<string | SetStateAction<string>>
  token: string;
}
