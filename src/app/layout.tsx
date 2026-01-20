import "./globals.css";
import type { ReactNode } from "react";
import { EDKUIProvider } from "../lib";

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
