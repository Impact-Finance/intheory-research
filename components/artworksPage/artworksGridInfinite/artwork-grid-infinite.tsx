import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import Loader from '@/components/site/loader/loader';
import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './artwork-grid-infinite.module.scss';
import sliceIntoChunks from '@/utils/sliceIntoChunks';
import GridRow from '../gridRow/grid-row';

interface ArtworkGridInfiniteProps {
  numArtworks: number;
  artworkArray: Artwork[];
  firstLoaded: Artwork[];
}

const bannerSize = 8;

const ArtworkGridInfinite = ({
  numArtworks,
  artworkArray,
  firstLoaded,
}: ArtworkGridInfiniteProps) => {
  const [currentBanner, setCurrentBanner] = useState(
    firstLoaded.length / bannerSize
  );
  const [lastBanner, setLastBanner] = useState(false);
  const [artArray, setArtArray] = useState<Artwork[]>(firstLoaded);
  const [currentFilter, setCurrentFilter] = useState<'all' | 'my'>('all');
  const [filteredArray, setFilteredArray] = useState<Artwork[]>([]);
  const [bannerArray, setBannerArray] = useState<Artwork[][]>([]);
  const numBanners = numArtworks / bannerSize;

  useEffect(() => {
    const chunks = sliceIntoChunks(artArray, bannerSize);
    setBannerArray(chunks);
  }, [artArray]);

  const handleInfiniteScroll = async () => {
    if (currentBanner < numBanners) {
      const newArt = artworkArray.splice(
        // replace with API call
        0,
        bannerSize * (firstLoaded.length / bannerSize)
      );
      setArtArray([...artArray, ...newArt]);
      setCurrentBanner(currentBanner + firstLoaded.length / bannerSize);
    } else {
      setLastBanner(true);
    }
  };

  const handleFilter = () => {
    if (currentFilter === 'all') {
      setCurrentFilter('my');
    }
    if (currentFilter === 'my') {
      setCurrentFilter('all');
    }
  };

  const scrollToTop = () => {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.gridBox}>
        <div className={styles.filters}>
          <button
            className={currentFilter === 'all' ? styles.current : ''}
            onClick={handleFilter}>
            All Art
          </button>
          <button
            className={currentFilter === 'my' ? styles.current : ''}
            onClick={handleFilter}>
            My Collection
          </button>
        </div>
        {bannerArray.map((banner, i) => (
          <GridRow
            artworks={banner}
            key={i}
          />
        ))}
      </div>
      <Waypoint onEnter={handleInfiniteScroll}>
        <div className={styles.loaderBox}>
          {!lastBanner && (
            <Loader
              text="loading"
              size="large"
            />
          )}
        </div>
      </Waypoint>
      <div className={styles.end}>
        <h3 className={styles.endHead}>That&apos;s all of them!</h3>
        <button
          className={styles.endBtn}
          onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </section>
  );
};

export default ArtworkGridInfinite;
