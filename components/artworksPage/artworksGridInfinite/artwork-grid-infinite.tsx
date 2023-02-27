import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import DUMMY_ARTWORK from '@/content/DUMMY_ARTWORK';
import Loader from '@/components/site/loader/loader';
import { Artwork } from '@/content/DUMMY_ARTWORK';
import styles from './artwork-grid-infinite.module.scss';
import sliceIntoChunks from '@/utils/sliceIntoChunks';
import GridRow from '../gridRow/grid-row';

interface ArtworkGridInfiniteProps {
  numArtworks: number;
  firstLoaded: Artwork[];
}

const bannerSize = 8;

const ArtworkGridInfinite = ({
  numArtworks,
  firstLoaded,
}: ArtworkGridInfiniteProps) => {
  const [currentBanner, setCurrentBanner] = useState(
    firstLoaded.length / bannerSize
  );
  const [lastBanner, setLastBanner] = useState(false);
  const [artArray, setArtArray] = useState<Artwork[]>(firstLoaded);
  const [bannerArray, setBannerArray] = useState<Artwork[][]>([]);
  const numBanners = numArtworks / bannerSize;

  useEffect(() => {
    const chunks = sliceIntoChunks(artArray, bannerSize);
    setBannerArray(chunks);
  }, [artArray]);

  const handleInfiniteScroll = async () => {
    if (currentBanner < numBanners) {
      const dummy = [...DUMMY_ARTWORK]; // replace with API call
      const newArt = dummy.slice(
        bannerSize * currentBanner,
        bannerSize * currentBanner +
          bannerSize * (firstLoaded.length / bannerSize)
      );
      setArtArray([...artArray, ...newArt]);
      setCurrentBanner(currentBanner + firstLoaded.length / bannerSize);
    } else {
      setLastBanner(true);
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
        {bannerArray.map((banner, i) => (
          <GridRow
            artworks={banner}
            key={i}
          />
        ))}
      </div>
      <Waypoint onEnter={handleInfiniteScroll}>
        <div>{!lastBanner && <Loader text="loading" />}</div>
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
