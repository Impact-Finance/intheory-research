import styles from './loader.module.scss';

interface LoaderProps {
  text: string;
  size: 'large' | 'small';
}

const Loader = ({ text, size }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div
        className={
          size === 'large'
            ? `${styles.loaderCircle} ${styles.large}`
            : `${styles.loaderCircle} ${styles.small}`
        }>
        <p className={styles.loaderContent}>{text}</p>
        <div className={styles.loaderLineMask}>
          <div className={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
