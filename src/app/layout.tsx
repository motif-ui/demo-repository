import "./globals.css";
import "../lib/styles/themes/default-theme.css";
import type { ReactNode } from "react";
import EDKUIProvider from "../lib/edk/context/EDKUIProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <title>EDK-UI</title>
        <link rel="stylesheet" href="https://static.turkiye.gov.tr/themes/izmir/css/edkui-icon.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <p>Unauthorised user PR</p>
        <EDKUIProvider>{children}</EDKUIProvider>
      </body>
    </html>
  );
}
