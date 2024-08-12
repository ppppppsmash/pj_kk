import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "恒佳株式会社",
  description: "恒佳株式会社のコーポレートサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="`${inter.className}`">
        <main className="w-full">
        <Header />

        {children}

        <Footer />
      </main>
      </body>
    </html>
  );
}
