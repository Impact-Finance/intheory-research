import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import search from '@/public/icons/search.svg';
import inTheory from '@/public/company/intheory-logo-mark.png';
import styles from './navbar.module.scss';

interface NavBarProps {
  current: string;
}

const Navbar = ({ current }: NavBarProps) => {
  const [wallet, setWallet] = useState('');

  return (
    <nav className={styles.navbar}>
      <div className={styles.innerShell}>
        <div className={styles.leftContent}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image
                className={styles.logo}
                src={inTheory}
                alt="inTheory logo"
                fill
                sizes="(max-width: 375px) 60vw, 
          (max-width: 425px) 60vw, 
          (max-width: 768px) 40vw, 
          (max-width: 999px) 30vw,
          (max-width: 1200px) 20vw,
          20vw"
              />
            </Link>
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <Image
                className={styles.icon}
                src={search}
                alt=""
                fill
                sizes="18px"
              />
            </div>
            <input
              className={styles.searchInput}
              placeholder="Search for a project..."
              id="search"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.buttons}>
            <ul className={styles.links}>
              <li
                className={
                  current === '/projects'
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }>
                <Link href="/projects">Explore</Link>
              </li>
              <li
                className={
                  current === '/submit-project'
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }>
                <Link href="/submit-project">Submit a Project</Link>
              </li>
            </ul>
            {!wallet && (
              <button
                className={styles.connectWallet}
                onClick={() => {
                  setWallet('0xD740E2dE99CB47Fb95c4601b597914972e43b0FC');
                }}>
                Connect Wallet
              </button>
            )}
            {wallet && (
              <button
                className={styles.connectedAddress}
                onClick={() => {
                  setWallet('');
                }}>
                <div className={styles.gradientCircle}></div>
                {wallet.slice(0, 5) + '...' + wallet.slice(-4)}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
