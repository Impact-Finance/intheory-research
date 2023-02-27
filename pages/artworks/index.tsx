import ArtworkGridInfinite from '@/components/artworksPage/artworksGridInfinite/artwork-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';
import DUMMY_ARTWORK, { Artwork } from '@/content/DUMMY_ARTWORK';

interface AllArtworksProps {
  numArtworks: number;
  artworkArray: Artwork[];
  firstLoaded: Artwork[];
}

const AllArtworks = ({
  numArtworks,
  artworkArray,
  firstLoaded,
}: AllArtworksProps) => {
  return (
    <>
      <ExploreHeader current="artworks" />
      <ArtworkGridInfinite
        numArtworks={numArtworks}
        artworkArray={artworkArray}
        firstLoaded={firstLoaded}
      />
    </>
  );
};

export default AllArtworks;

export async function getServerSideProps() {
  const artworkArray = [...DUMMY_ARTWORK].sort(() => 0.5 - Math.random());
  const numArtworks = artworkArray.length;
  const firstLoaded = artworkArray.splice(0, 16);

  return {
    props: {
      numArtworks: numArtworks,
      firstLoaded: firstLoaded,
      artworkArray: artworkArray,
    },
  };
}
