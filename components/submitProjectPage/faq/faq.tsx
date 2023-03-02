import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

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
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
