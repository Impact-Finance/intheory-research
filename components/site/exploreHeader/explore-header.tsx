import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import shuffleIcon from '@/public/icons/shuffle.svg';
import styles from './explore-header.module.scss';

interface ExploreHeaderProps {
  current: string;
}

const ExploreHeader = ({ current }: ExploreHeaderProps) => {
  const router = useRouter();
  const handleShuffle = () => {
    router.reload();
  };

  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <h1 className={styles.head}>Explore</h1>
        <Link
          className={
            current === 'projects'
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          href="/projects">
          Research
        </Link>
        <Link
          className={
            current === 'artworks'
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          href="/artworks">
          Artworks
        </Link>
      </div>
      <div className={styles.filters}>
        <button
          className={styles.shuffle}
          onClick={handleShuffle}>
          <Image
            className={styles.shuffleIcon}
            src={shuffleIcon}
            alt="shuffle"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
};

export default ExploreHeader;
