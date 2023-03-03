import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Loader from '@/components/site/loader/loader';
import { ResearchProject } from '@/app';
import styles from './main-content.module.scss';

interface MainContentProps {
  project: ResearchProject;
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
          src={`${process.env.AWS_BUCKET_DOMAIN}/projectCoverImages/${project._id}.jpg`}
          alt="project image"
          fill
          sizes="50vw"
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
                setDisplayHow(!displayHow);
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
          <div className={styles.hiddenContent}>
            <h3 className={styles.howHead}>How does it work?</h3>
            <button
              className={styles.exitBtn}
              onClick={() => {
                setDisplayHow(!displayHow);
              }}>
              X
            </button>
            <ul className={styles.steps}>
              <li className={styles.step}>
                <span>1</span>Select a research project that you would like to
                support. Each project is from a vetted researcher.
              </li>
              <li className={styles.step}>
                <span>2</span>Click “Fund Research” to generate a completely
                unique project-inspired digital artwork.
              </li>
              <li className={styles.step}>
                <span>3</span>Support the project by purchasing the artwork as a
                digital collectible, sent to your connected wallet address.
                Proceeds are sent directly to the researcher as USDC.
              </li>
            </ul>
            <Link
              className={styles.learnMore}
              href="/submit-project/#FAQ"
              scroll={false}>
              Learn More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainContent;
