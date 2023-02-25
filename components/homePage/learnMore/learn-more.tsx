import Link from 'next/link';

import styles from './learn-more.module.scss';

const LearnMore = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Are you looking for research funding?</h2>
      <p className={styles.descriptor}>
        inTheory helps researchers earn supplementary funding and gain community
        exposure for their work.
      </p>
      <Link
        className={styles.actionBtn}
        href="/submit-project">
        Learn How
      </Link>
    </section>
  );
};

export default LearnMore;
