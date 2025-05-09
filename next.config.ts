import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output:'export',
  assetPrefix: isProd ? '/NextJS-Portfolio' : '',
  basePath: isProd ? '/NextJS-Portfolio' : '',
  distDir:'dist',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
