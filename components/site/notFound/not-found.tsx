import ReturnToAll from '../returnToAll/return-to-all';
import styles from './not-found.module.scss';

interface NotFoundProps {
  context: 'projects' | 'artworks';
}

const NotFound = ({ context }: NotFoundProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.notFound}>Uh oh... something went wrong 🙁</p>
      <ReturnToAll destination={context} />
    </div>
  );
};

export default NotFound;
