import RadarChart from './radar-chart';
import styles from './project-description.module.scss';

interface ProjectDescriptionProps {
  longDescription: string;
  impacts: number[];
}

const ProjectDescription = ({
  longDescription,
  impacts,
}: ProjectDescriptionProps) => {
  const paragraphs = longDescription.split('\\n');

  return (
    <section className={styles.section}>
      <h3 className={styles.header}>About the Project</h3>
      <div className={styles.content}>
        <div className={styles.radar}>
          <RadarChart impacts={impacts} />
        </div>
        <div className={styles.text}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={styles.description}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
