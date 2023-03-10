import { useEffect } from 'react';

import '@/styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import useWindowSize from '@/utils/useWindowSize';
import Layout from '@/components/layout/layout';
import MobileContent from '@/components/site/mobileContent/mobile-content';
import SiteHeader from '@/components/layout/site-header';

export default function App({ Component, pageProps }: AppProps) {
  const size = useWindowSize();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <SiteHeader />
      <NextNProgress
        color="rgba(104, 234, 255, 0.65)"
        height={3}
      />
      {/* {size.width && size.width <= 1200 && <MobileContent />} */}
      {/* {size.width && size.width > 1200 && ( */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* )} */}
    </>
  );
}
