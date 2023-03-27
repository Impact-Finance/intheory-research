/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com`,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
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
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
    AWS_KEY_ID: process.env.AWS_KEY_ID,
    AWS_SECRET: process.env.AWS_SECRET,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GOOGLE_PW: process.env.GOOGLE_PW,
    PASSWORD_PROTECT: true, // can be removed when password protection is removed
    BETA_PASSWORD: process.env.BETA_PASSWORD, // can be removed when password protection is removed
    DYNAMIC_SANDBOX_ID: process.env.DYNAMIC_SANDBOX_ID,
    DYNAMIC_LIVE_ID: process.env.DYNAMIC_LIVE_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    NFT_STORAGE_API_KEY: process.env.NFT_STORAGE_API_KEY,
    DEV_MNEMONIC: process.env.DEV_MNEMONIC, // do not add mnemonics to hosting service!! -> only needed to deploy factory contract, which should be done only in the case of changes to .sol files and can be done locally
  },
};

module.exports = nextConfig;
