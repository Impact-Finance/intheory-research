import Link from 'next/link';

import arcs from '@/public/site/arcs.png';
import isotope from '@/public/site/isotope.png';
import vortex from '@/public/site/vortex.png';
import RotatingShapes from '../../site/rotatingShapes/rotating-shapes';
import styles from './submit-hero.module.scss';

const SubmitHero = () => {
  return (
    <section className={styles.section}>
      <RotatingShapes shapes={[isotope, arcs, vortex]} />
      <h2 className={styles.mainText}>Fund your research</h2>
      <p className={styles.subText}>
        Leverage the power of <span>generative art</span> to fund and promote
        your work
      </p>
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

export default SubmitHero;
