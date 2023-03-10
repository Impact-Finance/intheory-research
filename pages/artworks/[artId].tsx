import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getSingleArtwork } from '@/utils/fetchContent';
import ArtDisplay from '@/components/singleArtworkPage/artDisplay/art-display';
import NotFound from '@/components/site/notFound/not-found';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';
import { CommunityArtwork } from '@/app';
import OrderPrint from '@/components/singleArtworkPage/orderPrint/order-print';

interface ArtPageProps {
  artwork: CommunityArtwork;
}

const ArtPage = ({ artwork }: ArtPageProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={'Artwork inspired by ' + artwork.associatedProjectName}
          key="description"
        />

        {/* <!-- Twitter card  --> */}
        <meta
          name="twitter:description"
          content={'Artwork inspired by ' + artwork.associatedProjectName}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/communityArtworks/${artwork._id}.jpg`}
          key="twitter_image"
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:description"
          content={'Artwork inspired by ' + artwork.associatedProjectName}
          key="og_description"
        />
        <meta
          property="og:url"
          content={'https://www.intheory.app/artworks/' + artwork._id}
          key="og_url"
        />
        <meta
          property="og:image"
          content={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/communityArtworks/${artwork._id}.jpg`}
          key="og_image"
        />
      </Head>
      {!artwork && <NotFound context="artworks" />}
      {artwork && (
        <>
          <ArtDisplay artwork={artwork} />
          <OrderPrint />
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
