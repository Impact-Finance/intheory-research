import Image from 'next/image';
import Link from 'next/link';

import inTheory from '@/public/company/intheory-logo-mark.png';
import github from '@/public/icons/github.svg';
import twitter from '@/public/icons/twitter.svg';
import linkedin from '@/public/icons/linkedin.svg';
import medium from '@/public/icons/medium.svg';
import ifLogo from '@/public/company/if.ico';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <div className={styles.innerShell}>
        <div className={styles.platform}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image
                className={styles.logo}
                src={inTheory}
                alt="inTheory logo"
                fill
                sizes="(max-width: 375px) 60vw, 
          (max-width: 425px) 60vw, 
          (max-width: 768px) 40vw, 
          (max-width: 999px) 30vw,
          (max-width: 1200px) 20vw,
          20vw"
              />
            </Link>
          </div>
          <p className={styles.description}>
            Discover and support the latest scientific research by collecting
            project-inspired digital artworks.
          </p>
        </div>
        <div className={styles.links}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul>
            <li className={styles.link}>
              <Link href="/projects">Explore Research</Link>
            </li>
            <li className={styles.link}>
              <Link href="/submit-project">Submit a Project</Link>
            </li>
            <li className={styles.link}>
              <Link href="/artworks">Art Gallery</Link>
            </li>
            <li className={styles.link}>
              <Link
                href="/submit-project/#FAQ"
                scroll={false}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul className={styles.socialList}>
            <li>
              <Link
                href="https://github.com/Impact-Finance"
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.socialIcon}
                  src={github}
                  alt="github"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/DeSci_Impact"
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.socialIcon}
                  src={twitter}
                  alt="twitter"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/impact-finance-desci/"
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.socialIcon}
                  src={linkedin}
                  alt="linkedin"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/impact-finance"
                target="_blank"
                rel="noreferrer">
                <Image
                  className={styles.socialIcon}
                  src={medium}
                  alt="medium"
                  height={35}
                  width={35}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <Link
            href="https://impact-finance.io"
            target="_blank"
            rel="noreferrer">
            <Image
              className={styles.ifLogo}
              src={ifLogo}
              alt="Impact Finance"
              height={25}
              width={25}
            />
          </Link>
          <p>
            Built and maintained by{' '}
            <Link
              href="https://impact-finance.io"
              target="_blank"
              rel="noreferrer">
              <span>Impact Finance</span>
            </Link>{' '}
            | &copy; Impact Finance 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
