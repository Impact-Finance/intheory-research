import Hero from '@/components/home/hero/hero';
import ProjectBanner from '@/components/home/projectBanner/project-banner';
import ArtGrid from '@/components/home/artGrid/art-grid';
import LearnMore from '@/components/home/learnMore/learn-more';

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
