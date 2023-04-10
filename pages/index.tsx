import Hero from '@/components/homePage/hero/hero';
import ProjectBanner from '@/components/homePage/projectBanner/project-banner';
import ArtGrid from '@/components/homePage/artGrid/art-grid';
import LearnMore from '@/components/homePage/learnMore/learn-more';
import { ResearchProjectObject, CommunityArtworkObject } from '@/app';
import { getHomeContent } from '@/utils/fetchContent';

interface HomeProps {
  featuredProject: ResearchProjectObject;
  bannerProjects: ResearchProjectObject[];
  bannerArtworks: CommunityArtworkObject[];
}

export default function Home({
  featuredProject,
  bannerProjects,
  bannerArtworks,
}: HomeProps) {
  return (
    <>
      <Hero featuredProject={featuredProject} />
      <ProjectBanner bannerProjects={bannerProjects} />
      <ArtGrid bannerArtworks={bannerArtworks} />
      <LearnMore />
    </>
  );
}

export async function getStaticProps() {
  const homeContent = await getHomeContent(4, 8); // inputs are number of returned projects and artworks respectively
  let bannerProjects;
  let featuredProject;
  let bannerArtworks;

  if (homeContent) {
    const parsedProjects = JSON.parse(JSON.stringify(homeContent.projects));
    bannerProjects = parsedProjects.slice(0, 3);
    featuredProject = parsedProjects[3]; // ensures it is not a banner project
    const parsedArtworks = JSON.parse(JSON.stringify(homeContent.artworks));
    bannerArtworks = parsedArtworks;
  } else {
    featuredProject = {}
    bannerProjects = []
    bannerArtworks = []
  }
  return {
    props: {
      featuredProject: featuredProject,
      bannerProjects: bannerProjects,
      bannerArtworks: bannerArtworks,
    },
    revalidate: 600,
  };
}
