"use client";

import { createContext, useContext } from "react";

export const themeContext = createContext('dark');

export function useTheme() {
  return useContext(themeContext);
}
