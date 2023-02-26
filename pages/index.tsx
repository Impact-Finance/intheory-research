import Hero from '@/components/homePage/hero/hero';
import ProjectBanner from '@/components/homePage/projectBanner/project-banner';
import ArtGrid from '@/components/homePage/artGrid/art-grid';
import LearnMore from '@/components/homePage/learnMore/learn-more';
import DUMMY_PROJECTS, { Project } from '@/content/DUMMY_PROJECTS';
import DUMMY_ARTWORK, { Artwork } from '@/content/DUMMY_ARTWORK';

interface HomeProps {
  featuredProject: Project;
  bannerProjects: Project[];
  bannerArtworks: Artwork[];
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

export async function getServerSideProps() {
  const projectsArray = [...DUMMY_PROJECTS].sort(() => 0.5 - Math.random());
  const artworksArray = [...DUMMY_ARTWORK].sort(() => 0.5 - Math.random());

  const bannerProjects = projectsArray.slice(0, 3);
  const featuredProject = projectsArray[3];

  const bannerArtworks = artworksArray.slice(0, 8);

  return {
    props: {
      featuredProject: featuredProject,
      bannerProjects: bannerProjects,
      bannerArtworks: bannerArtworks,
    },
  };
}
