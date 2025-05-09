import('next').NextConfig

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  basePath: '/NextJS-Portfolio',
  output:'export',
  distDir:'dist',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
