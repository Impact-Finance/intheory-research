import { useRef } from 'react';

import Faq from '@/components/submitProject/faq/faq';
import HowTo from '@/components/submitProject/howTo/how-to';
import SubmitHero from '@/components/submitProject/submitHero/submit-hero';

const SubmitProject = () => {
  const faq = useRef(null);

  return (
    <>
      <SubmitHero />
      <HowTo />
      <Faq faq={faq} />
    </>
  );
};

export default SubmitProject;
