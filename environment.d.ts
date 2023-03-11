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
      BETA_PASSWORD: string; // can be removed when password protection is removed
    }
  }
}

export {};
