"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { CompareProvider } from "./compare-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <CompareProvider>{children}</CompareProvider>
    </ThemeProvider>
  );
}