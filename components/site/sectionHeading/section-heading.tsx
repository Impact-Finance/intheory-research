import Link from 'next/link';

import styles from './section-heading.module.scss';

interface SectionHeadingProps {
  title: string;
  link: string;
}

const SectionHeading = ({ title, link }: SectionHeadingProps) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.header}>{title}</h2>
      {link && (
        <Link
          href={link}
          className={styles.allLink}>
          See all →
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
