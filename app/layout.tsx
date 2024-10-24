import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "맵시 | 나의, 나에 의한 나를 위한 지도",
  description: "K-PaaS 플랫폼 기반 맞춤형 지도 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased h-full`}>{children}</body>
    </html>
  );
}
