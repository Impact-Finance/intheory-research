import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import DUMMY_PROJECTS, { Project } from '@/content/DUMMY_PROJECTS';
import ProjectHeader from '@/components/singleProjectPage/projectHeader/project-header';
import MainContent from '@/components/singleProjectPage/mainContent/main-content';
import NotFound from '@/components/site/notFound/not-found';
import ProjectDescription from '@/components/singleProjectPage/projectDescription/project-description';

interface ProjectPageProps {
  projectId: string;
}

const ProjectPage = ({ projectId }: ProjectPageProps) => {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const foundProject = DUMMY_PROJECTS.find(
      project => project.id === projectId
    );
    setProject(foundProject);
  }, [projectId]);

  return (
    <>
      {!project && <NotFound />}
      {project && (
        <>
          <ProjectHeader
            name={project.name}
            researcher={project.researcher}
            tags={project.tags}
          />
          <MainContent
            coverImage={project.coverImage}
            fundingRaised={project.fundingRaised}
            shortDescription={project.shortDescription}
            projectId={projectId}
          />
          <ProjectDescription
            impacts={project.impacts}
            longDescription={project.longDescription}
          />
        </>
      )}
    </>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectId: 'uuid-1' } },
      { params: { projectId: 'uuid-2' } },
      { params: { projectId: 'uuid-3' } },
      { params: { projectId: 'uuid-4' } },
      { params: { projectId: 'uuid-5' } },
      { params: { projectId: 'uuid-6' } },
      { params: { projectId: 'uuid-7' } },
      { params: { projectId: 'uuid-8' } },
      { params: { projectId: 'uuid-9' } },
      { params: { projectId: 'uuid-10' } },
    ],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async context => {
  let projectId;
  if (context.params) {
    projectId = context.params.projectId;
  }

  return {
    props: {
      projectId: projectId,
    },
    revalidate: 3600,
  };
};
