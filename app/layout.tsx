import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
