import { useState, useEffect } from 'react';
import Link from 'next/link';

import GridRow from '@/components/artworksPage/gridRow/grid-row';
import DUMMY_ARTWORK, { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './associated-artworks.module.scss';

interface AssociatedArtworksProps {
  artworks: string[];
  projectId: string;
}

const AssociatedArtworks = ({
  artworks,
  projectId,
}: AssociatedArtworksProps) => {
  const [artArray, setArtArray] = useState<Artwork[]>([]);

  useEffect(() => {
    const foundArt = DUMMY_ARTWORK.filter(el => artworks.includes(el.path));
    const sliced = foundArt.slice(0, 8);
    setArtArray(sliced);
  }, [artworks]);

  return (
    <section className={styles.section}>
      <h3 className={styles.header}>Project Artworks</h3>
      <div className={styles.content}>
        {artArray.length > 0 && <GridRow artworks={artArray} />}
        {artArray.length === 0 && (
          <h3 className={styles.noArt}>No artworks yet!</h3>
        )}
      </div>
      <div className={styles.callToAction}>
        <h3>Make an Impact</h3>
        <Link
          className={styles.actionBtn}
          href={`/projects/${projectId}/fund-project`}>
          Fund this Research
        </Link>
      </div>
    </section>
  );
};

export default AssociatedArtworks;
