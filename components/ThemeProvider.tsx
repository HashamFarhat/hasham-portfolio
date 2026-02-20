"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Ensure 'export' is written before 'function'
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}