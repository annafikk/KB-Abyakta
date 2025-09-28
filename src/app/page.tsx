import Head from "next/head";
import { Metadata } from 'next';
import { Blog } from "@/components/blog";

export const metadata: Metadata = {
  title: 'Beranda | Abyakta',
  description:
    'Abyakta adalah platform blog berbasis web yang menyediakan informasi, edukasi, dan berita terkini mengenai program _Kampung Keluarga Berencana (KB)_ di Indonesia, khususnya wilayah Tanjung Pinang.',
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-abyakta.svg" sizes="any" />
      </Head>

      <main>
        <Blog />
      </main>
    </>
  );
}
