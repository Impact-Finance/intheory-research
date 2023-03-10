import Head from 'next/head';

import Faq from '@/components/submitProjectPage/faq/faq';
import HowTo from '@/components/submitProjectPage/howTo/how-to';
import SubmitHero from '@/components/submitProjectPage/submitHero/submit-hero';
import CallToAction from '@/components/submitProjectPage/callToAction/call-to-action';

const SubmitProjectPage = () => {
  return (
    <>
      <Head>
        {/* <!-- Twitter card  --> */}
        <meta
          name="twitter:description"
          content="Apply today to earn supplementary funding for your research"
          key="twitter_description"
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:description"
          content="Apply today to earn supplementary funding for your research"
          key="og_description"
        />
        <meta
          property="og:url"
          content="https://www.intheory.app/submit-project"
          key="og_url"
        />
      </Head>
      <SubmitHero />
      <HowTo />
      <Faq />
      <CallToAction />
    </>
  );
};

export default SubmitProjectPage;
