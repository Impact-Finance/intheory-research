import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import generalFAQs, { userFAQs, researcherFAQs } from '@/content/FAQ';
import Accordion from '@/components/site/accordion/accordion';
import SectionHeading from '@/components/site/sectionHeading/section-heading';
import styles from './faq.module.scss';

const Faq = () => {
  const { asPath } = useRouter();
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hash = asPath.split('#')[1];
    if (hash === 'FAQ') {
      scrollTargetRef.current?.scrollIntoView();
    }
  }, [asPath]);

  return (
    <section
      className={styles.section}
      id="FAQ"
      ref={scrollTargetRef}>
      <SectionHeading
        title="frequently asked questions"
        link=""
      />
      <div className={styles.faqBox}>
        <p className={styles.faqCategory}>General</p>
        <Accordion
          content={generalFAQs}
          index={543793257} // random large seed number to avoid key overlap
        />
        <p className={styles.faqCategory}>For Researchers</p>
        <Accordion
          content={researcherFAQs}
          index={917535740}
        />
        <p className={styles.faqCategory}>For Users</p>
        <Accordion
          content={userFAQs}
          index={113957245}
        />
      </div>
    </section>
  );
};

export default Faq;
