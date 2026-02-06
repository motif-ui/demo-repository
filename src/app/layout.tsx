import "./globals.css";
import "../lib/styles/themes/default-theme.css";
import type { ReactNode } from "react";
import EDKUIProvider from "../lib/edk/context/EDKUIProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <title>EDK-UI</title>
        </head>
      <body>
          {children}
      </body>
    </html>
  );
}
