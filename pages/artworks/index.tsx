import { CommunityArtworkObject } from '@/app';
import ArtworkGridInfinite from '@/components/artworksPage/artworksGridInfinite/artwork-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';
import { getAllArtworks } from '@/utils/fetchContent';

interface AllArtworksPageProps {
  artworkArray: CommunityArtworkObject[];
}

const AllArtworksPage = ({ artworkArray }: AllArtworksPageProps) => {
  return (
    <>
      <ExploreHeader current="artworks" />
      <ArtworkGridInfinite artworkArray={artworkArray} />
    </>
  );
};

export default AllArtworksPage;

export async function getServerSideProps() {
  const artworkArray = await getAllArtworks();

  let numArtworks;
  let randomized;

  if (artworkArray) {
    const parsedArtworks = JSON.parse(JSON.stringify(artworkArray));
    numArtworks = parsedArtworks.length;
    randomized = parsedArtworks.sort(() => 0.5 - Math.random());
  } else {
    numArtworks = 0;
    randomized = []
  }

  return {
    props: {
      artworkArray: randomized,
    },
  };
}
