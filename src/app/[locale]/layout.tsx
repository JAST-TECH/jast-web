// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "右合の衆 | Japan Association of Strategy and Technology",
  description: "技術と戦略を融合させ、次世代の社会課題にアプローチする一般社団法人 右合の衆（JAST）の公式ウェブサイトです。",
};

// 【変更点】params を Promise として受け取ります
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  // 【変更点】await を使って params の中から locale を取り出します
  const { locale } = await params;
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased flex flex-col min-h-screen pt-16">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}