import { KAKAO_SDK_URL } from "@/config";
import Script from "next/script";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
