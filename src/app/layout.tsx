import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigasi/navbar";
import FooterWrapper from "@/components/navigasi/footer-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abyakta",
  description: "Abyakta adalah platform blog berbasis web yang menyediakan informasi, edukasi, dan berita terkini mengenai program _Kampung Keluarga Berencana (KB)_ di Indonesia, khususnya wilayah Tanjung Pinang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto min-h-screen py-6">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
