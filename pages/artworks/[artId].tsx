import { GetStaticProps } from 'next';

import { getSingleArtwork } from '@/utils/fetchContent';
import ArtDisplay from '@/components/singleArtworkPage/artDisplay/art-display';
import NotFound from '@/components/site/notFound/not-found';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';
import { CommunityArtwork } from '@/app';

interface ArtPageProps {
  artwork: CommunityArtwork;
}

const ArtPage = ({ artwork }: ArtPageProps) => {
  return (
    <>
      {!artwork && <NotFound context="artworks" />}
      {artwork && (
        <>
          <ArtDisplay artwork={artwork} />
          <ReturnToAll destination="artworks" />
        </>
      )}
    </>
  );
};

export default ArtPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { artId: '6402329a8648a724190c2166' } }],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async context => {
  let artId;
  let parsedArtwork;

  if (context.params) {
    artId = context.params.artId as string;
  }

  const artwork = await getSingleArtwork(artId);
  if (artwork) {
    parsedArtwork = JSON.parse(JSON.stringify(artwork));
  } else {
    parsedArtwork = false;
  }

  return {
    props: {
      artwork: parsedArtwork,
    },
    revalidate: 60,
  };
};
