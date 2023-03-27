import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Loader from '@/components/site/loader/loader';
import { ResearchProjectObject } from '@/app';
import styles from './main-content.module.scss';
import HiddenContent from '@/components/site/hiddenContent/hidden-content';

interface MainContentProps {
  project: ResearchProjectObject;
}

const MainContent = ({ project }: MainContentProps) => {
  const [displayHow, setDisplayHow] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.imageBox}>
        <div className={styles.loaderBox}>
          <Loader
            text="loading"
            size="large"
          />
        </div>
        <Image
          className={styles.coverImage}
          src={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/projectCoverImages/${project._id}.jpg`}
          alt="project image"
          fill
          sizes="50rem"
        />
      </div>
      <div className={styles.textBox}>
        <>
          <h3 className={styles.funding}>
            ${project.fundingRaised}
            <span> funding received</span>
          </h3>
          <div className={styles.fundingBox}>
            <Link
              className={styles.fundProject}
              href={`/projects/${project._id}/fund-project`}>
              Fund Research
            </Link>
            <button
              className={styles.howBtn}
              onClick={() => {
                setDisplayHow(true);
              }}>
              <span>?</span>How does this work?
            </button>
          </div>
          <div className={styles.summary}>
            <h4 className={styles.summaryHead}>Project Summary</h4>
            <p className={styles.summary}>{project.shortDescription}</p>
          </div>
        </>
        {displayHow && (
          <HiddenContent
            revealFunction={setDisplayHow}
            context="project"
          />
        )}
      </div>
    </section>
  );
};

export default MainContent;
