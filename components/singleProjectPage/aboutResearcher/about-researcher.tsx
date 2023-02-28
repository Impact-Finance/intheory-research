import { Researcher } from '@/content/DUMMY_PROJECTS';
import Image from 'next/image';

import linkedin from '@/public/icons/linkedin.svg';
import website from '@/public/icons/website.svg';
import SupporterPortal from './supporter-portal';
import styles from './about-researcher.module.scss';
import Link from 'next/link';
import Loader from '@/components/site/loader/loader';

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
            <Image
              src={'/dummy_images/scientists/' + researcher.avatar}
              alt={'Picture of ' + researcher.name}
              fill
              sizes="15vw"
            />
          </div>
          <div className={styles.attributes}>
            <h4>
              <span>name </span>
              {researcher.name}
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
            <Link
              href={researcher.links[0]}
              target="_blank"
              rel="noreferrer">
              <Image
                className={styles.icon}
                src={website}
                alt="website"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={researcher.links[0]}
              target="_blank"
              rel="noreferrer">
              <Image
                className={styles.icon}
                src={linkedin}
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
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
