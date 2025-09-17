import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "불꽃 살림단 | fireworks_seoul ",
  description: "서울세계불꽃축제 환경 캠페인 - 불꽃 살림단",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="header header--center">
          <Image
            src="/logo.png"
            alt="불꽃 살림단 로고"
            width={140}
            height={38}
            priority
          />
        </header>

        <main className="main">{children}</main>
        <footer className="footer">
          © 2025 불꽃 살림단 • 불꽃은 9월에 피지만, 변화는 지금입니다
        </footer>
      </body>
    </html>
  );
}
