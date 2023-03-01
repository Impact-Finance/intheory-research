import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import DUMMY_ARTWORK, { Artwork } from '@/content/DUMMY_ARTWORK';
import ArtDisplay from '@/components/singleArtworkPage/artDisplay/art-display';
import NotFound from '@/components/site/notFound/not-found';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';

interface ArtPageProps {
  artId: string;
}

const ArtPage = ({ artId }: ArtPageProps) => {
  const [artwork, setArtwork] = useState<Artwork>();

  useEffect(() => {
    const foundArt = DUMMY_ARTWORK.find(art => art.id === artId);
    setArtwork(foundArt);
  }, [artId]);

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
    paths: [
      { params: { artId: 'uuid-1' } },
      { params: { artId: 'uuid-2' } },
      { params: { artId: 'uuid-3' } },
      { params: { artId: 'uuid-4' } },
      { params: { artId: 'uuid-5' } },
    ],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async context => {
  let artId;
  if (context.params) {
    artId = context.params.artId;
  }

  return {
    props: {
      artId: artId,
    },
    revalidate: 3600,
  };
};
