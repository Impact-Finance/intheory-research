import DUMMY_ARTWORK from '@/content/DUMMY_ARTWORK';

import SectionHeading from '../../site/sectionHeading/section-heading';
import ArtworkGridItem from '@/components/site/artworkGridItem/artworkGridItem';
import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './art-grid.module.scss';

const ArtGrid = () => {
  const selectedArt = DUMMY_ARTWORK.slice(0, 8) as Artwork[];

  return (
    <section className={styles.section}>
      <SectionHeading
        title="community artwork"
        link="/artworks"
      />
      <div className={styles.gridBox}>
        {selectedArt.map(artwork => (
          <ArtworkGridItem
            artwork={artwork}
            key={artwork.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ArtGrid;
