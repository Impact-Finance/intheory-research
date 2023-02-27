import { useRouter } from 'next/router';

import ProjectGridInfinite from '@/components/projectsPage/projectGridInfinite/project-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';
import DUMMY_PROJECTS, { Project } from '@/content/DUMMY_PROJECTS';

interface AllProjectsProps {
  projectArray: Project[];
  firstLoaded: Project[];
}

const AllProjects = ({ projectArray, firstLoaded }: AllProjectsProps) => {
  const router = useRouter();
  const searchQuery = router.query.search;

  return (
    <>
      <ExploreHeader current="projects" />
      <ProjectGridInfinite
        projectArray={projectArray}
        firstLoaded={firstLoaded}
        searchQuery={searchQuery}
      />
    </>
  );
};

export default AllProjects;

export async function getServerSideProps() {
  const projectArray = [...DUMMY_PROJECTS].sort(() => 0.5 - Math.random());
  const firstLoaded = projectArray.splice(0, 24);

  return {
    props: {
      projectArray: projectArray,
      firstLoaded: firstLoaded,
    },
  };
}
