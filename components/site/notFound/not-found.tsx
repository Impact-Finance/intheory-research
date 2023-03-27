import Image from 'next/image';

import vortex from '@/public/site/vortex.png';
import ReturnToAll from '../returnToAll/return-to-all';
import styles from './not-found.module.scss';

interface NotFoundProps {
  context: 'projects' | 'artworks' | 'home';
}

const NotFound = ({ context }: NotFoundProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.vortexBox}>
        <Image
          className={styles.vortex}
          src={vortex}
          alt="wormhole"
          fill
          sizes="15rem"
        />
      </div>
      <h3 className={styles.errorHead}>404 Error</h3>
      <p className={styles.notFound}>
        This page has been sucked into a wormhole!
      </p>
      <ReturnToAll destination={context} />
    </div>
  );
};

export default NotFound;
