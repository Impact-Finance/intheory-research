import { useEffect } from 'react';
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

import { withPasswordProtect } from 'next-password-protect'; // can be removed when password protection is moved to admin console only

function MyApp({ Component, pageProps }: AppProps) {
  const size = useWindowSize();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
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
        <Layout screenWidth={size.width}>
          <Component {...pageProps} />
        </Layout>
      </DynamicContextProvider>
    </>
  );
}

// the following can be removed when password protection is moved to admin page only and the default export can be moved back to app functional component.
export default withPasswordProtect(MyApp, {
  loginComponentProps: {
    backUrl: 'https://intheory.science',
    logo: 'https://i.imgur.com/XBu6GPn.png',
    buttonColor: '#68eaff',
    buttonBackgroundColor: '#0c294b',
  },
});

// export default MyApp;
