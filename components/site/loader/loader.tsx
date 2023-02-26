import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderCircle}>
        <p className={styles.loaderContent}>LOADING</p>
        <div className={styles.loaderLineMask}>
          <div className={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
