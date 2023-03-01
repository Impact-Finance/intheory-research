import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './return-to-all.module.scss';

interface ReturnToAllProps {
  destination: 'projects' | 'artworks' | 'singleProject';
}

const ReturnToAll = ({ destination }: ReturnToAllProps) => {
  const { query } = useRouter();
  const id = query.projectId;

  return (
    <div className={styles.back}>
      {destination === 'projects' && (
        <>
          <Link
            className={styles.link}
            href="/projects">
            Return to All Projects
          </Link>
        </>
      )}
      {destination === 'artworks' && (
        <>
          <Link
            className={styles.link}
            href="/artworks">
            Return to Gallery
          </Link>
        </>
      )}
      {destination === 'singleProject' && (
        <>
          <Link
            className={styles.link}
            href={'/projects/' + id}>
            Return to Project Page
          </Link>
        </>
      )}
    </div>
  );
};

export default ReturnToAll;
