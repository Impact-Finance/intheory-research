import { useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

import dynamicWalletStyles from '@/utils/dynamicWalletStyles';
import supportedNetworks from '@/utils/supportedNetworks';
import refreshPage from '@/utils/refreshPage';
import useWindowSize from '@/utils/useWindowSize';
import Layout from '@/components/layout/layout';
import SiteHeader from '@/components/layout/site-header';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      setShowWelcome(true);
      localStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  return (
    <>
      <DynamicContextProvider
        settings={{
          environmentId: process.env.DYNAMIC_SANDBOX_ID, // update with DYNAMIC_LIVE_ID at launch
          cssOverrides: dynamicWalletStyles,
          evmNetworks: supportedNetworks, // update to mainnets at launch
          appName: 'inTheory Research',
          appLogoUrl: 'https://i.imgur.com/XBu6GPn.png',
          termsOfServiceUrl: 'https://intheory.app/terms',
          eventsCallbacks: {
            onAuthSuccess: () => {
              refreshPage('artworks');
            },
            onLogout: () => {
              refreshPage('artworks');
            },
          },
        }}>
        <SiteHeader />
        <NextNProgress
          color="rgba(104, 234, 255, 1)"
          height={1}
        />
        <Layout
          screenWidth={size.width}
          showWelcome={showWelcome}
          setShowWelcome={setShowWelcome}>
          <Component {...pageProps} />
        </Layout>
      </DynamicContextProvider>
    </>
  );
}

export default MyApp;
