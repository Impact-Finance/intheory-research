import Image from 'next/image';

import chain from '@/public/site/chain.png';
import SectionHeading from '@/components/site/sectionHeading/section-heading';
import styles from './how-to.module.scss';

const HowTo = () => {
  return (
    <section className={styles.section}>
      <SectionHeading
        title="how it works"
        link=""
      />
      <div className={styles.howBox}>
        <div className={styles.stepItem}>
          <h3>Submit a project application</h3>
          <p>
            Tell us about your proposed research project using{' '}
            <a
              href="https://a9hkiyqclu4.typeform.com/to/isX0VL7s"
              target="_blank"
              rel="noreferrer">
              this form
            </a>
            . The application takes about 15 minutes.
          </p>
        </div>
        <div className={styles.stepItem}>
          <h3>Complete a screening interview</h3>
          <p>
            We&apos;ll set up a brief 30-minute video interview to learn more
            about you and your project. The interview will focus on feasibility
            and broader impact.
          </p>
        </div>
        <div className={styles.stepItem}>
          <h3>Create your project profile</h3>
          <p>
            Once your project is approved, our team will help you create a
            project profile to be showcased on our platform. We&apos;ll do most
            of the work on this step.
          </p>
        </div>
        <div className={styles.stepItem}>
          <h3>Spread the word</h3>
          <p>
            Anyone that visits your project profile can support your work by
            collecting AI-generated digital artworks inspired by your research.
            Tell the world!
          </p>
        </div>
        <div className={styles.stepItem}>
          <h3>Receive your funds</h3>
          <p>
            Receive instant payouts from contributions to your project in the
            form of the USDC or cUSD stablecoins. If you don&apos;t already have
            a cryptocurrency wallet, we will help you to set one up.
          </p>
        </div>
        <div className={styles.stepItem}>
          <h3>Engage your supporters</h3>
          <p>
            Build your reputation and increase the value of artworks associated
            with your research by sharing project updates, lab notes, datasets,
            or anything else relevant to your research.
          </p>
        </div>
        <div className={styles.chainBox}>
          <Image
            className={styles.chain}
            src={chain}
            alt="chain"
            fill
            sizes="20vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HowTo;
