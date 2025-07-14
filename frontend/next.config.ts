import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["berita-desa-api2.vercel.app"],
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
    ]
  },
};

export default nextConfig;
