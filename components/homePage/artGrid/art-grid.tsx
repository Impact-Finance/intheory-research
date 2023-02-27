import SectionHeading from '../../site/sectionHeading/section-heading';
import ArtworkGridItem from '@/components/site/artworkGridItem/artwork-grid-item';
import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './art-grid.module.scss';

interface ArtGridProps {
  bannerArtworks: Artwork[];
}

const ArtGrid = ({ bannerArtworks }: ArtGridProps) => {
  return (
    <section className={styles.section}>
      <SectionHeading
        title="community artwork"
        link="/artworks"
      />
      <div className={styles.gridBox}>
        {bannerArtworks.map(artwork => (
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
