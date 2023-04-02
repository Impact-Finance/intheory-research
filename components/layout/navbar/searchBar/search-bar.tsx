import Image from 'next/image';
import { MutableRefObject } from 'react';

import search from '@/public/icons/search.svg';
import styles from './search-bar.module.scss';

interface SearchBarProps {
  handleSearch: (e: React.FormEvent) => void;
  searchRef: MutableRefObject<HTMLInputElement>;
}

const SearchBar = ({ handleSearch, searchRef }: SearchBarProps) => {
  return (
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
  );
};

export default SearchBar;
