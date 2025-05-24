"use client";
import React from "react";
import { ActiveThemeProvider } from "../active-theme";

export default function Providers({
  activeThemeValue,
  children,
}: {
  activeThemeValue: string;
  children: React.ReactNode;
}) {
  return (
    <ActiveThemeProvider initialTheme={activeThemeValue}>
      {/* You can pass theme info via context or props if needed */}
      {children}
    </ActiveThemeProvider>
  );
}
