import { useRef } from 'react';

import Faq from '@/components/submitProject/faq/faq';
import HowTo from '@/components/submitProject/howTo/how-to';
import SubmitHero from '@/components/submitProject/submitHero/submit-hero';
import CallToAction from '@/components/submitProject/callToAction/call-to-action';

const SubmitProject = () => {
  const faq = useRef(null);

  return (
    <>
      <SubmitHero />
      <HowTo />
      <Faq faq={faq} />
      <CallToAction />
    </>
  );
};

export default SubmitProject;
