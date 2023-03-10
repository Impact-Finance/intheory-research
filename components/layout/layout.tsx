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
