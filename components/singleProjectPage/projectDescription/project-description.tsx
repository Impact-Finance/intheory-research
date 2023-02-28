import { Impacts } from '@/content/DUMMY_PROJECTS';
import RadarChart from './radar-chart';
import styles from './project-description.module.scss';

interface ProjectDescriptionProps {
  longDescription: string;
  impacts: Impacts;
}

const ProjectDescription = ({
  longDescription,
  impacts,
}: ProjectDescriptionProps) => {
  const paragraphs = longDescription.split('\n');

  return (
    <section className={styles.section}>
      <h3 className={styles.header}>About This Project</h3>
      <div className={styles.content}>
        <div className={styles.text}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={styles.description}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.radar}>
          <RadarChart impacts={impacts} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
