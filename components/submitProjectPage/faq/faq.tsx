import Accordion from '@/components/site/accordion/accordion';
import SectionHeading from '@/components/site/sectionHeading/section-heading';
import styles from './faq.module.scss';

const Faq = () => {
  return (
    <section
      className={styles.section}
      id="FAQ">
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
