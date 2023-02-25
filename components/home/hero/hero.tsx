import { useState, useEffect } from 'react';

import Link from 'next/link';
import FeaturedProject from '../featured/featured-project';

import DUMMY_PROJECTS from '@/content/DUMMY_PROJECTS';
import styles from './hero.module.scss';

const Hero = () => {
  const [featuredProject, setFeaturedProject] = useState(DUMMY_PROJECTS[0]);

  useEffect(() => {
    setFeaturedProject(
      DUMMY_PROJECTS[Math.floor(Math.random() * DUMMY_PROJECTS.length)]
    );
  }, []);

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
            <li className={styles.action}>
              <Link href="/projects">Explore Research</Link>
            </li>
            <li className={styles.action}>
              <Link href="/submit-project">Submit a Project</Link>
            </li>
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
