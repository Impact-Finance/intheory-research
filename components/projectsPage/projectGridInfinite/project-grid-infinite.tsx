import { useState, useEffect } from 'react';
import Link from 'next/link';

import ProjectGridItem from '../../site/projectGridItem/project-grid-item';
import { ResearchProject } from '@/app';
import { Waypoint } from 'react-waypoint';
import Loader from '@/components/site/loader/loader';
import searchFilter from '@/utils/searchFilter';
import styles from './project-grid-infinite.module.scss';

interface ProjectGridInfiniteProps {
  projectArray: ResearchProject[];
  searchQuery: string | string[] | undefined;
}

const numFirstLoaded = 18; // number of projects initially loaded on page
const scrollLoadIncrement = numFirstLoaded; // number of new projects loaded on each infinite scroll step

const ProjectGridInfinite = ({
  projectArray,
  searchQuery,
}: ProjectGridInfiniteProps) => {
  const [projects, setProjects] = useState<ResearchProject[]>(
    projectArray.slice(0, numFirstLoaded)
  );
  const [count, setCount] = useState<number>(
    numFirstLoaded / scrollLoadIncrement
  );

  const handleInfiniteScroll = () => {
    if (projects.length < projectArray.length && !searchQuery) {
      const startIndex = count * scrollLoadIncrement;
      const endIndex = count * scrollLoadIncrement + scrollLoadIncrement;
      const newProjects = projectArray.slice(startIndex, endIndex);
      setProjects([...projects, ...newProjects]);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (searchQuery && typeof searchQuery === 'string') {
      const queryTerms = searchQuery.toLowerCase().split(' ');
      setProjects(
        projectArray.filter(project => {
          return searchFilter(project, queryTerms);
        })
      );
    }
  }, [searchQuery, projectArray]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {searchQuery && (
          <div className={styles.searchHeader}>
            <p className={styles.searchText}>
              <span>
                {projects.length === 0
                  ? 'No projects found matching...'
                  : 'Showing projects matching... '}
              </span>{' '}
              &quot;
              {searchQuery}&quot;
            </p>
          </div>
        )}
        <div className={styles.gridBox}>
          {projects &&
            projects.map((project, i) => (
              <ProjectGridItem
                project={project}
                key={i}
              />
            ))}
        </div>
        <Waypoint onEnter={handleInfiniteScroll}>
          <div className={styles.loaderBox}>
            {projects.length < projectArray.length && !searchQuery && (
              <Loader
                text="loading"
                size="large"
              />
            )}
          </div>
        </Waypoint>
        <div className={styles.end}>
          <h3 className={styles.endHead}>That&apos;s all of them! </h3>
          <p className={styles.endText}>Need help choosing a project?</p>
          <Link
            className={styles.endBtn}
            href={projects.length > 0 ? '/projects/' + projects[0]._id : ''}>
            Pick for me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGridInfinite;
