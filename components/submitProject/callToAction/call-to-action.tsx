import Link from 'next/link';

import arcs from '@/public/site/arcs.png';
import isotope from '@/public/site/isotope.png';
import vortex from '@/public/site/vortex.png';
import RotatingShapes from '../../site/rotatingShapes/rotating-shapes';
import styles from './call-to-action.module.scss';

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <RotatingShapes shapes={[isotope, arcs, vortex]} />
      <h3 className={styles.header}>Ready to get started?</h3>
      <Link
        className={styles.actionBtn}
        href="https://www.typeform.com/"
        target="_blank"
        rel="noreferrer">
        Apply for Funding
      </Link>
    </section>
  );
};

export default CallToAction;
