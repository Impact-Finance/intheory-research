import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ResearchProject, Researcher, CommunityArtwork } from '@/app';
import {
  getProjectArtworks,
  getSingleProject,
  getSingleResearcher,
} from '@/utils/fetchContent';
import ProjectHeader from '@/components/singleProjectPage/projectHeader/project-header';
import MainContent from '@/components/singleProjectPage/mainContent/main-content';
import NotFound from '@/components/site/notFound/not-found';
import ProjectDescription from '@/components/singleProjectPage/projectDescription/project-description';
import AboutResearcher from '@/components/singleProjectPage/aboutResearcher/about-researcher';
import AssociatedArtworks from '@/components/singleProjectPage/associatedArtworks/associated-artworks';
import ReturnToAll from '@/components/site/returnToAll/return-to-all';

interface ProjectPageProps {
  projectObject: ResearchProject;
  researcherObject: Researcher;
  associatedArtworks: CommunityArtwork[];
}

const ProjectPage = ({
  projectObject,
  researcherObject,
  associatedArtworks,
}: ProjectPageProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={'inTheory Research: ' + projectObject.projectName}
          key="description"
        />

        {/* <!-- Twitter card  --> */}
        <meta
          name="twitter:title"
          content={'inTheory Research: ' + projectObject.projectName}
          key="twitter_title"
        />
        <meta
          name="twitter:description"
          content={projectObject.shortDescription}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/projectCoverImages/${projectObject._id}.jpg`}
          key="twitter_image"
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content={'inTheory Research: ' + projectObject.projectName}
          key="og_title"
        />
        <meta
          property="og:description"
          content={projectObject.shortDescription}
          key="og_description"
        />
        <meta
          property="og:url"
          content={'https://www.intheory.app/projects/' + projectObject._id}
          key="og_url"
        />
        <meta
          property="og:image"
          content={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/projectCoverImages/${projectObject._id}.jpg`}
          key="og_image"
        />
      </Head>
      {!projectObject && <NotFound context="projects" />}
      {projectObject && researcherObject && (
        <>
          <ProjectHeader
            project={projectObject}
            researcher={researcherObject}
            displayTags={true}
          />
          <MainContent project={projectObject} />
          <ProjectDescription
            impacts={projectObject.impactScores}
            longDescription={projectObject.longDescription}
          />
          <AboutResearcher researcher={researcherObject} />
          <AssociatedArtworks
            artworks={associatedArtworks}
            projectId={projectObject._id}
          />
          <ReturnToAll destination="projects" />
        </>
      )}
    </>
  );
};

export default ProjectPage;

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
  let parsedArtworks;

  if (context.params) {
    projectId = context.params.projectId as string;
  }

  const project = await getSingleProject(projectId);
  if (project) {
    parsedProject = JSON.parse(JSON.stringify(project));
  } else {
    parsedProject = false;
  }

  const researcherId = parsedProject.researcherId;
  const researcher = await getSingleResearcher(researcherId);
  if (researcher) {
    parsedResearcher = JSON.parse(JSON.stringify(researcher));
  } else {
    parsedResearcher = false;
  }

  const artworkIds = parsedProject.associatedArtIds;
  const associatedArtworks = await getProjectArtworks(artworkIds, 8);
  if (associatedArtworks) {
    parsedArtworks = JSON.parse(JSON.stringify(associatedArtworks));
  } else {
    parsedArtworks = false;
  }

  return {
    props: {
      projectObject: parsedProject,
      researcherObject: parsedResearcher,
      associatedArtworks: parsedArtworks,
    },
    revalidate: 60,
  };
};
