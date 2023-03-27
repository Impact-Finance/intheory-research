import { CommunityArtworkObject } from '@/app';
import ArtworkGridItem from '@/components/site/artworkGridItem/artwork-grid-item';
import styles from './grid-row.module.scss';

interface GridRowProps {
  artworks: CommunityArtworkObject[];
}

const GridRow = ({ artworks }: GridRowProps) => {
  return (
    <div className={styles.row}>
      {artworks.map(artwork => (
        <ArtworkGridItem
          artwork={artwork}
          key={artwork._id}
        />
      ))}
    </div>
  );
};

export default GridRow;
