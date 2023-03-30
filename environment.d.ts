declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_USERNAME: string;
      MONGODB_PASSWORD: string;
      MONGODB_CLUSTERNAME: string;
      MONGODB_DATABASE: string;
      AWS_BUCKET_NAME: string;
      AWS_BUCKET_REGION: string;
      AWS_KEY_ID: string;
      AWS_SECRET: string;
      OPENAI_API_KEY: string;
      GOOGLE_PW: string;
      ADMIN_PASSWORD: string;
      DYNAMIC_SANDBOX_ID: string;
      DYNAMIC_LIVE_ID: string;
      INFURA_API_KEY: string;
      NFT_STORAGE_API_KEY: string;
      DEV_MNEMONIC: string; // do not add mnemonics to hosting service!! -> only needed to deploy factory contract, which should be done only in the case of changes to .sol files and can be done locally
    }
  }
  interface Window {
    ethereum: any;
  }
}

export {};
