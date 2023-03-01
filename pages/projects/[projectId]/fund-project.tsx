import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';

import DUMMY_PROJECTS, { Project } from '@/content/DUMMY_PROJECTS';
import NotFound from '@/components/site/notFound/not-found';
import ProjectHeader from '@/components/singleProjectPage/projectHeader/project-header';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';
import FundingMain from '@/components/fundProjectPage/fundingMain/funding-main';

interface FundProjectPageProps {
  projectId: string;
}

const FundProjectPage = ({ projectId }: FundProjectPageProps) => {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const foundProject = DUMMY_PROJECTS.find(
      project => project.id === projectId
    );
    setProject(foundProject);
  }, [projectId]);
  return (
    <>
      {!project && <NotFound context="projects" />}
      {project && (
        <>
          <ProjectHeader
            name={project.name}
            researcher={project.researcher}
            tags={[]}
          />
          <FundingMain project={project} />
          <ReturnToAll destination="singleProject" />
        </>
      )}
    </>
  );
};

export default FundProjectPage;

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
  };
};
