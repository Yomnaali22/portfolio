import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out", // or "docs" if using GitHub's docs folder
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
