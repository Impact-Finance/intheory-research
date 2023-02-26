import { useState } from 'react';
import Link from 'next/link';

import DUMMY_PROJECTS, { Project } from '@/content/DUMMY_PROJECTS';
import ProjectGridItem from '../../site/projectGridItem/project-grid-item';
import { Waypoint } from 'react-waypoint';
import Loader from '@/components/site/loader/loader';
import styles from './project-grid-infinite.module.scss';

const projectArray = [...DUMMY_PROJECTS];
const randomProject = DUMMY_PROJECTS[0];
const initialProjects = projectArray.splice(0, 12);

const ProjectGridInfinite = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleInfiniteScroll = () => {
    const newProjects = projectArray.splice(0, 12);
    setProjects([...projects, ...newProjects]);
  };

  return (
    <section className={styles.section}>
      <div className={styles.gridBox}>
        {projects.map((project, i) => (
          <ProjectGridItem
            project={project}
            key={i}
          />
        ))}
      </div>
      <Waypoint onEnter={handleInfiniteScroll}>
        <div>{projectArray.length > 0 && <Loader />}</div>
      </Waypoint>
      <div className={styles.end}>
        <h3 className={styles.endHead}>That&apos;s all of them! </h3>
        <p className={styles.endText}>Need help choosing a project?</p>
        <Link
          className={styles.endBtn}
          href={'/projects/' + randomProject.id}>
          Pick for me
        </Link>
      </div>
    </section>
  );
};

export default ProjectGridInfinite;
