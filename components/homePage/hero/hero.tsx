import Link from 'next/link';
import FeaturedProject from '../featured/featured-project';

import { ResearchProject } from '@/app';
import styles from './hero.module.scss';

interface HeroProps {
  featuredProject: ResearchProject;
}

const Hero = ({ featuredProject }: HeroProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.heroBox}>
        <div className={styles.textBox}>
          <h1 className={styles.mainHeader}>
            Build an art collection that{' '}
            <span className={styles.highlighted}>drives humanity forward</span>
          </h1>
          <h4 className={styles.subHeader}>
            Fund the next scientific breakthrough by collecting
            research-inspired digital artworks
          </h4>
          <ul className={styles.actionButtons}>
            <Link
              className={styles.action}
              href="/projects">
              <li>Explore Research</li>
            </Link>
            <Link
              className={styles.action}
              href="/submit-project">
              <li>Submit a Project</li>
            </Link>
          </ul>
        </div>
        <div className={styles.imageBox}>
          <FeaturedProject project={featuredProject} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
