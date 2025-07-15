import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["berita-desa-api2.vercel.app"],
  },
  async rewrites() {
    return [
      {
        source: '/masuk',
        destination: '/auth/masuk',
      },
      {
        source: '/daftar',
        destination: '/auth/daftar',
      },
    ]
  },
};

export default nextConfig;
