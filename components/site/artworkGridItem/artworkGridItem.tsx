import Link from 'next/link';
import Image from 'next/image';

import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './artwork-grid-item.module.scss';

interface ArtworkGridItemProps {
  artwork: Artwork;
}

const ArtworkGridItem = ({ artwork }: ArtworkGridItemProps) => {
  return (
    <div className={styles.gridItem}>
      <Link href={'/artworks/' + artwork.id}>
        <Image
          className={styles.artwork}
          src={'/dummy_images/' + artwork.path}
          alt="community artwork"
          fill
          sizes="20vw"
        />
        <div className={styles.hoverContent}>
          <p className={styles.hoverText}>
            <span className={styles.label}>Research Funded: </span>
            {artwork.associatedProject}
          </p>
          <p className={styles.hoverText}>
            <span className={styles.label}>Funding Amount: </span>
            {artwork.fundingAmount} USDC
          </p>
          <p className={styles.hoverText}>
            <span className={styles.label}>Created by: </span>
            {artwork.funder}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArtworkGridItem;
