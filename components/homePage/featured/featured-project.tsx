import Image from 'next/image';
import Link from 'next/link';

import atom from '@/public/icons/atom.svg';
import Loader from '@/components/site/loader/loader';
import { ResearchProject } from '@/app';
import styles from './featured-project.module.scss';

interface FeaturedProjectProps {
  project: ResearchProject;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <Link href={'/projects/' + project._id}>
      <div className={styles.featureBox}>
        <div className={styles.loaderContainer}>
          <Loader
            text="loading"
            size="large"
          />
        </div>
        <Image
          className={styles.coverImage}
          src={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/projectCoverImages/${project._id}.jpg`}
          alt={project.projectName}
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
          <h2 className={styles.title}>{project.projectName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
