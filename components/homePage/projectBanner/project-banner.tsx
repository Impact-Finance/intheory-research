import Link from 'next/link';

import DUMMY_PROJECTS from '@/content/DUMMY_PROJECTS';
import ProjectBannerItem from './project-banner-item';
import styles from './project-banner.module.scss';
import SectionHeading from '../../site/sectionHeading/section-heading';

const ContentBanner = () => {
  const featured = DUMMY_PROJECTS.slice(0, 3);

  return (
    <section className={styles.section}>
      <SectionHeading
        title="Current Research"
        link="/projects"
      />
      <div className={styles.bannerBox}>
        {featured.map(project => (
          <ProjectBannerItem
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentBanner;
