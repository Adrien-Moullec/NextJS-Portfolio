/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repo = 'NextJS-Portfolio';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repo}` : '',
  basePath: isProd ? `/${repo}` : '',
  images: { unoptimized: true }
};

export default nextConfig;