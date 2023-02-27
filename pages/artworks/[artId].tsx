import ArtDisplay from '@/components/singleArtworkPage/artDisplay/art-display';
import { useRouter } from 'next/router';

const ArtPage = () => {
  const router = useRouter();
  const { artId } = router.query;

  return (
    <>
      <ArtDisplay artId={artId} />
    </>
  );
};

export default ArtPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { artId: 'uuid-1' } }, { params: { artId: 'uuid-2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  const image = {};

  return {
    props: {
      image: image,
    },
    revalidate: 3600,
  };
}
