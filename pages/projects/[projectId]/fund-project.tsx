import { GetStaticProps } from 'next';

import { getSingleProjectAllDetails } from '@/utils/fetchContent';
import NotFound from '@/components/site/notFound/not-found';
import ProjectHeader from '@/components/singleProjectPage/projectHeader/project-header';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';
import FundingMain from '@/components/fundProjectPage/fundingMain/funding-main';
import { Researcher, ResearchProject } from '@/app';

interface FundProjectPageProps {
  projectObject: ResearchProject;
  researcherObject: Researcher;
}

const FundProjectPage = ({
  projectObject,
  researcherObject,
}: FundProjectPageProps) => {
  return (
    <>
      {!projectObject || (!researcherObject && <NotFound context="projects" />)}
      {projectObject && researcherObject && (
        <>
          <ProjectHeader
            project={projectObject}
            researcher={researcherObject}
            displayTags={false}
          />
          <FundingMain project={projectObject} />
          <ReturnToAll destination="singleProject" />
        </>
      )}
    </>
  );
};

export default FundProjectPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { projectId: '64011574d1b80bb359926d3f' } }],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async context => {
  let projectId;
  let parsedProject;
  let parsedResearcher;

  if (context.params) {
    projectId = context.params.projectId as string;
  }

  const projectDetails = await getSingleProjectAllDetails(projectId, 0); // second input is number of associated artworks to return
  if (projectDetails) {
    parsedProject = JSON.parse(JSON.stringify(projectDetails.project));
    parsedResearcher = JSON.parse(JSON.stringify(projectDetails.researcher));
  } else {
    parsedProject = false;
    parsedResearcher = false;
  }

  return {
    props: {
      projectObject: parsedProject,
      researcherObject: parsedResearcher,
    },
  };
};
