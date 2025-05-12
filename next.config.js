/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repo = 'NextJS-Portfolio';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repo}` : '',
  basePath: isProd ? `/${repo}` : '',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `https://adrienmoullec.github.io/${repo}` : ''
  }
};

export default nextConfig;