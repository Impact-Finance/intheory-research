import Hero from '@/components/homePage/hero/hero';
import ProjectBanner from '@/components/homePage/projectBanner/project-banner';
import ArtGrid from '@/components/homePage/artGrid/art-grid';
import LearnMore from '@/components/homePage/learnMore/learn-more';
import { ResearchProject, CommunityArtwork } from '@/app';
import { getAllProjects, getSomeArtworks } from '@/utils/fetchContent';

interface HomeProps {
  featuredProject: ResearchProject;
  bannerProjects: ResearchProject[];
  bannerArtworks: CommunityArtwork[];
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
  const projectsArray = await getAllProjects();
  const artworksArray = await getSomeArtworks(48);

  let bannerProjects;
  let featuredProject;
  let bannerArtworks;

  if (projectsArray) {
    const parsedProjects = JSON.parse(JSON.stringify(projectsArray));
    const randomizedProjects = parsedProjects.sort(() => 0.5 - Math.random());
    bannerProjects = randomizedProjects.slice(0, 3);
    featuredProject = randomizedProjects[3]; // ensures it is not a banner project
  }

  if (artworksArray) {
    const parsedArtworks = JSON.parse(JSON.stringify(artworksArray));
    const randomizedProjects = parsedArtworks.sort(() => 0.5 - Math.random());
    bannerArtworks = randomizedProjects.slice(0, 8);
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
