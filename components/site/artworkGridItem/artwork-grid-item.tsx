import Link from 'next/link';
import Image from 'next/image';

import { CommunityArtwork } from '@/app';
import Loader from '../loader/loader';
import styles from './artwork-grid-item.module.scss';

interface ArtworkGridItemProps {
  artwork: CommunityArtwork;
}

const ArtworkGridItem = ({ artwork }: ArtworkGridItemProps) => {
  return (
    <div className={styles.gridItem}>
      <Loader
        text=""
        size="small"
      />
      <Link href={'/artworks/' + artwork._id}>
        <Image
          className={styles.artwork}
          src={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/communityArtworks/${artwork._id}.jpg`}
          alt="community artwork"
          fill
          sizes="20vw"
        />
        <div className={styles.hoverContent}>
          <p className={styles.hoverText}>
            <span className={styles.label}>Research Funded: </span>
            {artwork.associatedProjectName}
          </p>
          <p className={styles.hoverText}>
            <span className={styles.label}>Funding Amount: </span>
            {artwork.fundingAmount} USDC
          </p>
          <p className={styles.hoverText}>
            <span className={styles.label}>Created by: </span>
            {artwork.funder.slice(0, 4)}...
            {artwork.funder.slice(-6)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArtworkGridItem;
