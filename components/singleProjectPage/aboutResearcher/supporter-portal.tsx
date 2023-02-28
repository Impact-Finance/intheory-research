import styles from './supporter-portal.module.scss';

const SupporterPortal = () => {
  return (
    <div className={styles.supporterBox}>
      <h5 className={styles.head}>Already contributed to this project?</h5>
      <p className={styles.text}>
        Access the supporter portal to view lab notes, datasets, reports, and
        more.
      </p>
      <button
        className={styles.accessLink}
        disabled>
        Coming Soon
      </button>
    </div>
  );
};

export default SupporterPortal;
