import { DynamicWidget } from '@dynamic-labs/sdk-react';
import styles from './mobile-menu.module.scss';
import Link from 'next/link';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import SearchBar from '../searchBar/search-bar';

interface MobileMenuProps {
  current: string;
  setDisplayMobileMenu: Dispatch<SetStateAction<boolean>>;
  screenWidth: number | undefined;
  handleSearch: (e: React.FormEvent) => void;
  searchRef: MutableRefObject<HTMLInputElement>;
}

const MobileMenu = ({
  current,
  setDisplayMobileMenu,
  screenWidth,
  handleSearch,
  searchRef,
}: MobileMenuProps) => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.links}>
        <Link
          onClick={() => {
            setDisplayMobileMenu(false);
          }}
          href="/"
          className={
            current === '/'
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }>
          <li>Home</li>
        </Link>
        <Link
          onClick={() => {
            setDisplayMobileMenu(false);
          }}
          href="/projects"
          className={
            current === '/projects' || current === '/artworks'
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }>
          <li>Explore</li>
        </Link>
        <Link
          onClick={() => {
            setDisplayMobileMenu(false);
          }}
          href="/submit-project"
          className={
            current === '/submit-project'
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }>
          <li>Submit a Project</li>
        </Link>
      </ul>
      {screenWidth && screenWidth <= 550 && <DynamicWidget />}
      <SearchBar
        handleSearch={handleSearch}
        searchRef={searchRef}
      />
    </div>
  );
};

export default MobileMenu;
