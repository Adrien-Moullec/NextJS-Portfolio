import('next').NextConfig

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output:'export',
  assetPrefix: isProd ? '/NextJS-Portfolio' : '',
  basePath: isProd ? '/NextJS-Portfolio' : '',
  images: { unoptimized: true }
};

export default nextConfig;
