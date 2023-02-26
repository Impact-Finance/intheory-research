import { useEffect } from 'react';

import '@/styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <NextNProgress
        color="rgba(104, 234, 255, 0.65)"
        height={3}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
