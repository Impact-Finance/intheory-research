import Image from 'next/image';
import Link from 'next/link';

import atom from '@/public/icons/atom.svg';
import { Project } from '@/content/DUMMY_PROJECTS';
import styles from './featured-project.module.scss';

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <Link href={'/projects/' + project.id}>
      <div className={styles.featureBox}>
        <Image
          className={styles.coverImage}
          src={'/dummy_images/' + project.coverImage}
          alt={project.name}
          fill
          sizes="40vw"
        />
        <div className={styles.toolTip}>
          <div className={styles.icon}>
            <Image
              className={styles.atom}
              src={atom}
              alt=""
              fill
              sizes="20px"
            />
          </div>
          Featured Research
        </div>
        <div className={styles.text}>
          <h5 className={styles.subtitle}>Project Name</h5>
          <h2 className={styles.title}>{project.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
