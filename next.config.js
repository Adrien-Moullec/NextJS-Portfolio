const isProd = process.env.NODE_ENV === 'production';
const repo = 'NextJS-Portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
