import DUMMY_PROJECTS from '@/content/DUMMY_PROJECTS';
import ProjectGridItem from '../../site/projectGridItem/project-grid-item';
import SectionHeading from '../../site/sectionHeading/section-heading';
import { Project } from '@/content/DUMMY_PROJECTS';
import randomSubArray from '@/utils/randomSubArray';
import styles from './project-banner.module.scss';

const ContentBanner = () => {
  const selectedProjects = DUMMY_PROJECTS.slice(0, 3) as Project[];

  return (
    <section className={styles.section}>
      <SectionHeading
        title="Current Research"
        link="/projects"
      />
      <div className={styles.bannerBox}>
        {selectedProjects.map(project => (
          <ProjectGridItem
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentBanner;
