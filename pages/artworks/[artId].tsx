import { GetStaticProps } from 'next';

import ArtDisplay from '@/components/singleArtworkPage/artDisplay/art-display';

interface ArtPageProps {
  artId: string;
}

const ArtPage = ({ artId }: ArtPageProps) => {
  return (
    <>
      <ArtDisplay artId={artId} />
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
