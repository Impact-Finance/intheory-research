import { useState, useEffect } from 'react';
import Link from 'next/link';

import GridRow from '@/components/artworksPage/gridRow/grid-row';
import { CommunityArtwork } from '@/app';
import styles from './associated-artworks.module.scss';

interface AssociatedArtworksProps {
  artworks: CommunityArtwork[];
  projectId: string;
}

const AssociatedArtworks = ({
  artworks,
  projectId,
}: AssociatedArtworksProps) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.header}>Project Artworks</h3>
      <div className={styles.content}>
        {artworks && artworks.length > 0 && <GridRow artworks={artworks} />}
        {artworks && artworks.length === 0 && (
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
