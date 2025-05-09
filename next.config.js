import('next').NextConfig

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output:'export',
  assetPrefix: isProd ? '/NextJS-Portfolio' : '',
  basePath: isProd ? '/NextJS-Portfolio' : ''
};

export default nextConfig;
