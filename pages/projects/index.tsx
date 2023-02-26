import ProjectGridInfinite from '@/components/projectsPage/projectGridInfinite/project-grid-infinite';
import ExploreHeader from '@/components/site/exploreHeader/explore-header';

const AllProjects = () => {
  return (
    <>
      <ExploreHeader current="projects" />
      <ProjectGridInfinite />
    </>
  );
};

export default AllProjects;
