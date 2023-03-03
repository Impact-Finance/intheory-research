import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Loader from '../loader/loader';
import { ResearchProject } from '@/app';
import styles from './project-grid-item.module.scss';

interface ProjectBannerItemProps {
  project: ResearchProject;
}

const ProjectBannerItem = ({ project }: ProjectBannerItemProps) => {
  const [loaded, setLoaded] = useState(false); // required because blur effect obscured loading animation, so had to move to top of stack

  return (
    <div className={styles.itemBox}>
      <Link href={'/projects/' + project._id}>
        <Image
          className={styles.image}
          src={`${process.env.AWS_BUCKET_DOMAIN}/projectCoverImages/${project._id}.jpg`}
          alt={project.projectName}
          fill
          sizes="30vw"
          onLoadingComplete={() => {
            setLoaded(true);
          }}
        />
        <div className={styles.text}>
          <h5 className={styles.subtitle}>Project Name</h5>
          <h1 className={styles.title}>{project.projectName}</h1>
        </div>
      </Link>
      {!loaded && (
        <Loader
          text=""
          size="small"
        />
      )}
    </div>
  );
};

export default ProjectBannerItem;
