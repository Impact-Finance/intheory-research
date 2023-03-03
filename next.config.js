/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AWS_BUCKET_DOMAIN.slice(8), // slice method removes "https://"
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    MONGODB_USERNAME: process.env.MONGODB_USERNAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    MONGODB_CLUSTERNAME: process.env.MONGODB_CLUSTERNAME,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    AWS_BUCKET_DOMAIN: process.env.AWS_BUCKET_DOMAIN,
  },
};

module.exports = nextConfig;
