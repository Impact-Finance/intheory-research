import styles from '@/styles/loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.sectionLoading}>
      <ul className={styles.listBars}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Loading;
