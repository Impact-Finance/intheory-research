import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import hexes from '@/public/site/hexagon-background.png';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <>
      <Head>
        <title>inTheory Research Funding</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge,chrome=1"
        />
        <link
          rel="icon"
          href="/company/intheory.ico"
        />
        <meta
          name="description"
          content="Fund cutting-edge scientific research by collecting project-inspired digital artworks"
          key="description"
        />
        <meta
          name="author"
          content="Impact Finance"
        />

        {/* <!-- Twitter card  --> */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@DeSci_Impact"
        />
        <meta
          name="twitter:creator"
          content="@DeSci_Impact"
        />
        <meta
          name="twitter:title"
          content="inTheory Research Funding"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Fund cutting-edge scientific research by collecting project-inspired digital artworks"
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content="https://www.intheory.science/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-image.f032aac5.jpg&w=3840&q=75"
          key="twitter:image"
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content="inTheory Research Funding"
          key="og:title"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:site_name"
          content="inTheory Research"
        />
        <meta
          property="og:description"
          content="Fund cutting-edge scientific research by collecting project-inspired digital artworks"
          key="og:description"
        />
        <meta
          property="og:url"
          content="https://www.intheory.app/"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.intheory.science/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-image.f032aac5.jpg&w=3840&q=75"
          key="og:image"
        />
      </Head>
      <Navbar current={currentPage} />
      <main>
        <div className="bg-container">
          <Image
            className="bg-image"
            src={hexes}
            alt="hexagon background"
            placeholder="blur"
            fill
            sizes="100vw"
          />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
