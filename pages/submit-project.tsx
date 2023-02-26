import Faq from '@/components/submitProjectPage/faq/faq';
import HowTo from '@/components/submitProjectPage/howTo/how-to';
import SubmitHero from '@/components/submitProjectPage/submitHero/submit-hero';
import CallToAction from '@/components/submitProjectPage/callToAction/call-to-action';

const SubmitProject = () => {
  return (
    <>
      <SubmitHero />
      <HowTo />
      <Faq />
      <CallToAction />
    </>
  );
};

export default SubmitProject;
