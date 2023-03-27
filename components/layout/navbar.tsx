import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';

import search from '@/public/icons/search.svg';
import inTheory from '@/public/company/intheory-logo-mark.png';
import styles from './navbar.module.scss';
import { DynamicWidget } from '@dynamic-labs/sdk-react';

interface NavBarProps {
  current: string;
}

const Navbar = ({ current }: NavBarProps) => {
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>;
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    if (router.pathname !== '/projects') {
      e.preventDefault();
      const searchQuery = searchRef.current.value;
      const encodedQuery = encodeURIComponent(searchQuery);
      router.push(`/projects?search=${encodedQuery}`);
      searchRef.current.value = '';
    }
  };

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
                sizes="18rem"
              />
            </Link>
          </div>
          <div className={styles.search}>
            <form onSubmit={handleSearch}>
              <button
                className={styles.searchIcon}
                type="submit">
                <Image
                  className={styles.icon}
                  src={search}
                  alt=""
                  fill
                  sizes="1.8rem"
                />
              </button>
              <input
                className={styles.searchInput}
                placeholder="Search for a project..."
                id="search"
                name="search"
                ref={searchRef}
              />
            </form>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.buttons}>
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
            <div className={styles.dynamicWidget}>
              <DynamicWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
