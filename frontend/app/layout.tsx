import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KB Abyakta",
  description: "Kampung KB Abyakta",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
          <Navbar />
          <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}