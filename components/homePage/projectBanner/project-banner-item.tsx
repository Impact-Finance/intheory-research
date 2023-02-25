import Image from 'next/image';

import { Project } from '@/content/DUMMY_PROJECTS';
import styles from './project-banner-item.module.scss';
import Link from 'next/link';

interface ProjectBannerItemProps {
  project: Project;
}

const ProjectBannerItem = ({ project }: ProjectBannerItemProps) => {
  return (
    <div className={styles.itemBox}>
      <Link href={'/projects/' + project.id}>
        <Image
          className={styles.image}
          src={'/dummy_images/' + project.coverImage}
          alt={project.name}
          fill
          sizes="30vw"
        />
        <div className={styles.text}>
          <h5 className={styles.subtitle}>Project Name</h5>
          <h1 className={styles.title}>{project.name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProjectBannerItem;
