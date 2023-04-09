import Image from 'next/image';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useRouter } from 'next/router';

import hexes from '@/public/site/hexagon-background.png';
import Navbar from './navbar/navbar';
import Footer from './footer';
import WelcomeModal from './welcome-modal';

interface LayoutProps {
  screenWidth: number | undefined;
  children: ReactNode;
  showWelcome: boolean;
  setShowWelcome: Dispatch<SetStateAction<boolean>>;
}

function Layout({
  screenWidth,
  children,
  showWelcome,
  setShowWelcome,
}: LayoutProps) {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <>
      {showWelcome && <WelcomeModal setShowWelcome={setShowWelcome} />}
      <Navbar
        current={currentPage}
        screenWidth={screenWidth}
      />
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
