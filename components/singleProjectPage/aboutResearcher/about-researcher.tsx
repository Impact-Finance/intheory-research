import Image from 'next/image';
import Link from 'next/link';

import linkedin from '@/public/icons/linkedin.svg';
import twitter from '@/public/icons/twitter.svg';
import website from '@/public/icons/website.svg';
import Loader from '@/components/site/loader/loader';
import SupporterPortal from './supporter-portal';
import { Researcher } from '@/app';
import styles from './about-researcher.module.scss';

interface AboutResearcherProps {
  researcher: Researcher;
}

const AboutResearcher = ({ researcher }: AboutResearcherProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>About the Researcher</h2>
      <div className={styles.content}>
        <div className={styles.researcher}>
          <div className={styles.avatarBox}>
            <Loader
              text=""
              size="small"
            />
            {researcher && (
              <Image
                className={styles.avatarImage}
                src={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/researcherAvatars/${researcher._id}.jpg`}
                alt={'Picture of ' + researcher.researcherName}
                fill
                sizes="15vw"
              />
            )}
          </div>
          <div className={styles.attributes}>
            <h4>
              <span>name </span>
              {researcher.researcherName}
            </h4>
            <h4>
              <span>degree </span>
              {researcher.degree}
            </h4>
            <h4>
              <span>affiliation </span>
              {researcher.affiliation}
            </h4>
          </div>
          <div className={styles.bio}>
            <p>{researcher.bio}</p>
          </div>
          <div className={styles.socials}>
            {researcher.links.website && (
              <Link
                href={researcher.links.website}
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.icon}
                  src={website}
                  alt="website"
                  width={25}
                  height={25}
                />
              </Link>
            )}
            {researcher.links.linkedin && (
              <Link
                href={researcher.links.linkedin}
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.icon}
                  src={linkedin}
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </Link>
            )}
            {researcher.links.twitter && (
              <Link
                href={researcher.links.twitter}
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.icon}
                  src={twitter}
                  alt="twitter"
                  width={25}
                  height={25}
                />
              </Link>
            )}
          </div>
        </div>
        <div className={styles.supporterPortal}>
          <SupporterPortal />
        </div>
      </div>
    </section>
  );
};

export default AboutResearcher;
