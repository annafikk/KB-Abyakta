import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/navigasi/navbar/navbar-wrapper";
import FooterWrapper from "@/components/navigasi/footer/footer-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://kampung-kb-abyakta.vercel.app/"),
  title: process.env.NEXT_PUBLIC_APP_NAME || "Abyakta",
  description:
    "Abyakta adalah platform blog berbasis web yang menyediakan informasi, edukasi, dan berita terkini mengenai program Kampung Keluarga Berencana (KB) di Indonesia, khususnya wilayah Tanjung Pinang.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_APP_NAME || "Abyakta",
    description:
      "Abyakta adalah platform blog berbasis web yang menyediakan informasi, edukasi, dan berita terkini mengenai program Kampung Keluarga Berencana (KB) di Indonesia, khususnya wilayah Tanjung Pinang.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: process.env.NEXT_PUBLIC_APP_NAME || "Abyakta",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Abyakta Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavbarWrapper />
        <main className="container mx-auto flex-grow">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
