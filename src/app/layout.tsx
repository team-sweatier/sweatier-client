import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=clusterer&autoload=false`;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SweaTier",
  description: "운동을 넘어 함께 성장하는 여정에 당신을 초대합니다!",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <Script strategy="beforeInteractive" src={KAKAO_SDK_URL} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
