import Image from 'next/image';
import Link from 'next/link';

import DUMMY_ARTWORK from '@/content/DUMMY_ARTWORK';
import getRandomSubarray from '@/utils/getRandomSubarray';
import SectionHeading from '../../site/sectionHeading/section-heading';
import styles from './art-grid.module.scss';

const ArtGrid = () => {
  const selectedArt = getRandomSubarray(DUMMY_ARTWORK, 8);

  return (
    <section className={styles.section}>
      <SectionHeading
        title="community artwork"
        link="/artworks"
      />
      <div className={styles.gridBox}>
        {selectedArt.map((artPiece, i) => (
          <div
            key={i}
            className={styles.gridItem}>
            <Link href={'/artworks/' + artPiece.id}>
              <Image
                className={styles.artwork}
                src={'/dummy_images/' + artPiece.path}
                alt="community artwork"
                fill
                sizes="20vw"
              />
              <div className={styles.hoverContent}>
                <p className={styles.hoverText}>
                  <span className={styles.label}>Research Funded: </span>
                  {artPiece.associatedProject}
                </p>
                <p className={styles.hoverText}>
                  <span className={styles.label}>Funding Amount: </span>
                  {artPiece.fundingAmount} USDC
                </p>
                <p className={styles.hoverText}>
                  <span className={styles.label}>Created by: </span>
                  {artPiece.funder}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtGrid;
