import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react';

import walletIcon from '@/public/icons/wallet.svg';
import inTheory from '@/public/company/intheory-logo-mark.png';
import styles from './navbar.module.scss';
import Hamburger from '../../site/hamburger/hamburger';
import MobileMenu from './mobileMenu/mobile-menu';
import SearchBar from './searchBar/search-bar';

interface NavBarProps {
  current: string;
  screenWidth: number | undefined;
}

const Navbar = ({ current, screenWidth }: NavBarProps) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const { setShowAuthFlow, primaryWallet } = useDynamicContext();

  const handleSearch = (e: React.FormEvent) => {
    setDisplayMobileMenu(false);
    if (router.pathname !== '/projects') {
      e.preventDefault();
      const searchQuery = searchRef.current.value;
      const encodedQuery = encodeURIComponent(searchQuery);
      router.push(`/projects?search=${encodedQuery}`);
      searchRef.current.value = '';
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.innerShell}>
          <div className={styles.leftContent}>
            <div className={styles.logoBox}>
              <Link href="/">
                <Image
                  onClick={() => {
                    setDisplayMobileMenu(false);
                  }}
                  className={styles.logo}
                  src={inTheory}
                  alt="inTheory logo"
                  fill
                  sizes="18rem"
                />
              </Link>
            </div>
            {screenWidth && screenWidth > 999 && (
              <SearchBar
                handleSearch={handleSearch}
                searchRef={searchRef}
              />
            )}
          </div>
          <div className={styles.rightContent}>
            <div className={styles.buttons}>
              {screenWidth && screenWidth > 999 && (
                <ul className={styles.links}>
                  <Link
                    href="/projects"
                    className={
                      current === '/projects' || current === '/artworks'
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }>
                    <li>Explore</li>
                  </Link>
                  <Link
                    href="/submit-project"
                    className={
                      current === '/submit-project'
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }>
                    <li>Submit a Project</li>
                  </Link>
                </ul>
              )}
              {screenWidth && screenWidth <= 999 && (
                <Hamburger
                  currentState={displayMobileMenu}
                  changeState={setDisplayMobileMenu}
                />
              )}
              {screenWidth && screenWidth > 550 && (
                <div>
                  <DynamicWidget />
                </div>
              )}
              {screenWidth && screenWidth <= 550 && (
                <div>
                  <button
                    className={
                      !primaryWallet
                        ? `${styles.mobileWalletConnect} ${styles.unConnected}`
                        : styles.mobileWalletConnect
                    }
                    onClick={
                      !primaryWallet
                        ? () => {
                            setShowAuthFlow(true);
                          }
                        : () => {
                            setDisplayMobileMenu(!displayMobileMenu);
                          }
                    }>
                    <div>
                      <Image
                        src={walletIcon}
                        alt="wallet"
                        fill
                        sizes="3rem"
                        className={styles.walletIcon}
                      />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {displayMobileMenu && (
        <MobileMenu
          current={current}
          setDisplayMobileMenu={setDisplayMobileMenu}
          screenWidth={screenWidth}
          handleSearch={handleSearch}
          searchRef={searchRef}
        />
      )}
    </>
  );
};

export default Navbar;
