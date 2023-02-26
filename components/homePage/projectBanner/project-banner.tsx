import ProjectGridItem from '../../site/projectGridItem/project-grid-item';
import SectionHeading from '../../site/sectionHeading/section-heading';
import { Project } from '@/content/DUMMY_PROJECTS';
import styles from './project-banner.module.scss';

interface ProjectBannerProps {
  bannerProjects: Project[];
}

const ProjectBanner = ({ bannerProjects }: ProjectBannerProps) => {
  return (
    <section className={styles.section}>
      <SectionHeading
        title="Current Research"
        link="/projects"
      />
      <div className={styles.bannerBox}>
        {bannerProjects.map(project => (
          <ProjectGridItem
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectBanner;
