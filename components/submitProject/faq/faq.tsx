import { MutableRefObject } from 'react';

import Accordion from '@/components/site/accordion/accordion';
import SectionHeading from '@/components/site/sectionHeading/section-heading';
import styles from './faq.module.scss';

interface FaqProps {
  faq: MutableRefObject<null>;
}

const Faq = ({ faq }: FaqProps) => {
  return (
    <section
      className={styles.section}
      ref={faq}>
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
