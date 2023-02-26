import ArtworkGridInfinite from '@/components/artworksPage/artworksGridInfinite/artwork-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';

const AllArtworks = () => {
  return (
    <>
      <ExploreHeader current="artworks" />
      <ArtworkGridInfinite />
    </>
  );
};

export default AllArtworks;
