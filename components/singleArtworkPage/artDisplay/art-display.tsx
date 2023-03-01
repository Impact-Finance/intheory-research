import Image from 'next/image';
import Link from 'next/link';

import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './art-display.module.scss';
import Loader from '@/components/site/loader/loader';

interface ArtDisplayProps {
  artwork: Artwork;
}

const ArtDisplay = ({ artwork }: ArtDisplayProps) => {
  return (
    <section className={styles.section}>
      {artwork && (
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <div className={styles.loaderBox}>
              <Loader
                text="loading"
                size="large"
              />
            </div>
            <div className={styles.imageBox}>
              <Image
                className={styles.image}
                src={'/dummy_images/' + artwork.path}
                alt="artwork"
                fill
                sizes="50vw"
              />
            </div>
          </div>
          <div className={styles.sidebar}>
            <p>
              <span>Research Funded </span>
              {artwork.associatedProject}
            </p>
            <p>
              <span>Created by </span>
              {artwork.funder.slice(0, 5)}...
              {artwork.funder.slice(-8)}
            </p>
            <p>
              <span>Funding amount </span>
              {artwork.fundingAmount}
              <span> USDC</span>
            </p>
            <p>
              <span>Transaction Hash </span>
              {artwork.txnHash.slice(0, 5)}...
              {artwork.txnHash.slice(-8)}
            </p>
            <div className={styles.links}>
              <Link
                className={styles.link}
                href={'https://etherscan.io/tx/' + artwork.txnHash}
                target="_blank"
                rel="noreferrer">
                View on Block Explorer
              </Link>
              <Link
                className={styles.link}
                href={'/projects/' + artwork.associatedProjectId}>
                View Research
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtDisplay;
