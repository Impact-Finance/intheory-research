import Image from 'next/image';
import Link from 'next/link';

import intheory from '@/public/company/intheory-logo-mark.png';
import styles from './mobile-content.module.scss';

const MobileContent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.logoBox}>
        <Image
          className={styles.logo}
          src={intheory}
          alt="intheory logo"
          fill
          sizes="80vw"
        />
      </div>
      <h4 className={styles.title}>BETA APPLICATION</h4>
      <h4 className={styles.subtitle}>Device Not Supported</h4>
      <p className={styles.text}>
        Thank you for contributing as a beta tester for our inTheory science
        funding platform. The private beta is currently only available on
        desktop. Please come back on a larger device.
      </p>
    </div>
  );
};

export default MobileContent;
