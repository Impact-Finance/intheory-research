import styles from './loader.module.scss';

interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderCircle}>
        <p className={styles.loaderContent}>{text}</p>
        <div className={styles.loaderLineMask}>
          <div className={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
