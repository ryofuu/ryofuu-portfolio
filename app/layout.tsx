import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ryofuu — Portfolio",
  description: "私が開発したサービスの一覧",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script
          async
          src="https://chat-embedding-widget.pages.dev/widget.v1.js"
          data-project-key="pk_bf5865306c6d49c18311df06"
          data-api-origin="https://chatbase-ops.vercel.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
