import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Project } from '@/content/DUMMY_PROJECTS';
import ProjectGridItem from '../../site/projectGridItem/project-grid-item';
import { Waypoint } from 'react-waypoint';
import Loader from '@/components/site/loader/loader';
import styles from './project-grid-infinite.module.scss';
import searchFilter from '@/utils/searchFilter';

interface ProjectGridInfiniteProps {
  projectArray: Project[];
  firstLoaded: Project[];
  searchQuery: string | string[] | undefined;
}

const ProjectGridInfinite = ({
  projectArray,
  firstLoaded,
  searchQuery,
}: ProjectGridInfiniteProps) => {
  const [projects, setProjects] = useState<Project[]>(firstLoaded);
  const [filteredArray, setFilteredArray] = useState(projectArray);

  const handleInfiniteScroll = () => {
    const newProjects = filteredArray.splice(0, 12);
    setProjects([...projects, ...newProjects]);
  };

  useEffect(() => {
    if (searchQuery && typeof searchQuery === 'string') {
      const queryTerms = searchQuery.toLowerCase().split(' ');
      setProjects(
        projects.filter(project => {
          return searchFilter(project, queryTerms);
        })
      );
      setFilteredArray(
        filteredArray.filter(project => {
          return searchFilter(project, queryTerms);
        })
      );
    }
  }, [searchQuery]);

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
          {projects.map((project, i) => (
            <ProjectGridItem
              project={project}
              key={i}
            />
          ))}
        </div>
        <Waypoint onEnter={handleInfiniteScroll}>
          <div>{filteredArray.length > 0 && <Loader text="loading" />}</div>
        </Waypoint>
        <div className={styles.end}>
          <h3 className={styles.endHead}>That&apos;s all of them! </h3>
          <p className={styles.endText}>Need help choosing a project?</p>
          <Link
            className={styles.endBtn}
            href={'/projects/' + firstLoaded[0].id}>
            Pick for me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGridInfinite;
