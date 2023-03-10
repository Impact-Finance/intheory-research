import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';

import Loader from '@/components/site/loader/loader';
import sliceIntoChunks from '@/utils/sliceIntoChunks';
import GridRow from '../gridRow/grid-row';
import { CommunityArtwork } from '@/app';
import styles from './artwork-grid-infinite.module.scss';

interface ArtworkGridInfiniteProps {
  artworkArray: CommunityArtwork[];
}

const bannerSize = 8; // number of artworks in one banner group
const numFirstLoaded = bannerSize * 2; // number of artworks initially loaded on page
const scrollLoadIncrement = numFirstLoaded; // number of artworks loaded on each infinite scroll step

const wallet = '0xC0f060632E0BfbE52E48b63dAC225de9b0f856F1'; // replace with address from context

const ArtworkGridInfinite = ({ artworkArray }: ArtworkGridInfiniteProps) => {
  const [artworks, setArtworks] = useState(
    artworkArray.slice(0, numFirstLoaded)
  );
  const [bannerArray, setBannerArray] = useState<CommunityArtwork[][]>([]);
  const [count, setCount] = useState<number>(
    numFirstLoaded / scrollLoadIncrement
  );
  const [currentFilter, setCurrentFilter] = useState<'all' | 'my'>('all');
  const router = useRouter();

  useEffect(() => {
    const chunks = sliceIntoChunks(artworks, bannerSize);
    setBannerArray(chunks);
  }, [artworks]);

  const handleInfiniteScroll = async () => {
    if (artworks.length < artworkArray.length && currentFilter === 'all') {
      const startIndex = count * scrollLoadIncrement;
      const endIndex = count * scrollLoadIncrement + scrollLoadIncrement;
      const newArtworks = artworkArray.slice(startIndex, endIndex);
      setArtworks([...artworks, ...newArtworks]);
      setCount(count + 1);
    }
  };

  const handleFilter = () => {
    if (currentFilter === 'all') {
      setCurrentFilter('my');
      setArtworks(
        artworkArray.filter(art => {
          return art.funder === wallet;
        })
      );
    }
    if (currentFilter === 'my') {
      router.reload();
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
            onClick={handleFilter}
            disabled={currentFilter === 'all'}>
            All Art
          </button>
          <button
            className={currentFilter === 'my' ? styles.current : ''}
            onClick={handleFilter}
            disabled={currentFilter === 'my'}>
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
          {artworks.length < artworkArray.length && currentFilter === 'all' && (
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
