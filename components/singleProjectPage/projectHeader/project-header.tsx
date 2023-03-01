import { Researcher } from '@/content/DUMMY_PROJECTS';

import styles from './project-header.module.scss';

interface ProjectHeaderProps {
  name: string;
  researcher: Researcher;
  tags: string[];
}

const ProjectHeader = ({ name, researcher, tags }: ProjectHeaderProps) => {
  return (
    <section className={styles.section}>
      <p className={styles.subtext}>Project Name</p>
      <h2 className={styles.title}>{name}</h2>
      <h4 className={styles.researcher}>by {researcher.name}</h4>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, i) => (
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
