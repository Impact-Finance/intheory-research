import { ResearchProjectObject, ResearcherObject } from '@/app';
import styles from './project-header.module.scss';

interface ProjectHeaderProps {
  project: ResearchProjectObject;
  researcher: ResearcherObject;
  displayTags: boolean;
}

const ProjectHeader = ({
  project,
  researcher,
  displayTags,
}: ProjectHeaderProps) => {
  return (
    <section className={styles.section}>
      <p className={styles.subtext}>Project Name</p>
      <h2 className={styles.title}>{project.projectName}</h2>
      <h4 className={styles.researcher}>by {researcher.researcherName}</h4>
      {displayTags && project.tags.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectHeader;
