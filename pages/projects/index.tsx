import { useRouter } from 'next/router';

import ProjectGridInfinite from '@/components/projectsPage/projectGridInfinite/project-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';
import { ResearchProjectObject } from '@/app';
import { getAllProjects } from '@/utils/fetchContent';

interface AllProjectsPageProps {
  projectArray: ResearchProjectObject[];
}

const AllProjectsPage = ({ projectArray }: AllProjectsPageProps) => {
  const router = useRouter();
  const searchQuery = router.query.search;

  return (
    <>
      <ExploreHeader current="projects" />
      <ProjectGridInfinite
        projectArray={projectArray}
        searchQuery={searchQuery}
      />
    </>
  );
};

export default AllProjectsPage;

export async function getServerSideProps() {
  const projectsArray = await getAllProjects();

  let randomized;

  if (projectsArray) {
    const parsedProjects = JSON.parse(JSON.stringify(projectsArray));
    randomized = parsedProjects.sort(() => 0.5 - Math.random());
  } else {
    randomized = [];
  }

  return {
    props: {
      projectArray: randomized,
    },
  };
}
