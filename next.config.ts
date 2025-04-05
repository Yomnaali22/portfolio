import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
