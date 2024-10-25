import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "맵시 | 나의, 나에 의한 나를 위한 지도",
  description: "K-PaaS 플랫폼 기반 맞춤형 지도 플랫폼",
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`antialiased h-full bg-gray-50 ${pretendard.className}`}>
        {children}
      </body>
    </html>
  );
}
