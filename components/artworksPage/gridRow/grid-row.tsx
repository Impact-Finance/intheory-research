import { Artwork } from '@/content/DUMMY_ARTWORK';
import ArtworkGridItem from '@/components/site/artworkGridItem/artwork-grid-item';
import styles from './grid-row.module.scss';

interface GridRowProps {
  artworks: Artwork[];
}

const GridRow = ({ artworks }: GridRowProps) => {
  return (
    <div className={styles.row}>
      {artworks.map(artwork => (
        <ArtworkGridItem
          artwork={artwork}
          key={artwork.id}
        />
      ))}
    </div>
  );
};

export default GridRow;
