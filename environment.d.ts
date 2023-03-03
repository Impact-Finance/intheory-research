declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_USERNAME: string;
      MONGODB_PASSWORD: string;
      MONGODB_CLUSTERNAME: string;
      MONGODB_DATABASE: string;
      AWS_BUCKET_DOMAIN: string;
    }
  }
}

export {};
