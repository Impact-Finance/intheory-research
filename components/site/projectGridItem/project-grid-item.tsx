import Image from 'next/image';
import Link from 'next/link';

import Loader from '../loader/loader';
import { Project } from '@/content/DUMMY_PROJECTS';
import styles from './project-grid-item.module.scss';

interface ProjectBannerItemProps {
  project: Project;
}

const ProjectBannerItem = ({ project }: ProjectBannerItemProps) => {
  return (
    <div className={styles.itemBox}>
      <Loader
        text=""
        size="small"
      />
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
