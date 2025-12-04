import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meowpunctuation.com"),
  title: "喵标点喵屋 · Meow Punctuation Cattery",
  description:
    "喵标点喵屋（The Punctuation Cattery）专注 Minuet / Munchkin 繁育，CFA / TICA / WCF 三大国际系统注册，小而精、健康透明、双语服务。",
  openGraph: {
    title: "喵标点喵屋 · Meow Punctuation Cattery",
    description:
      "Minuet & Munchkin 精品猫舍 · 国际注册 · 健康透明 · 家庭化社交训练。",
    url: "https://meowpunctuation.com",
    siteName: "Meow Punctuation",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meow Punctuation Cattery",
    description:
      "CFA / TICA / WCF registered boutique Minuet & Munchkin cattery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
