import Hero from '@/components/homePage/hero/hero';
import ProjectBanner from '@/components/homePage/projectBanner/project-banner';
import ArtGrid from '@/components/homePage/artGrid/art-grid';
import LearnMore from '@/components/homePage/learnMore/learn-more';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectBanner />
      <ArtGrid />
      <LearnMore />
    </>
  );
}
