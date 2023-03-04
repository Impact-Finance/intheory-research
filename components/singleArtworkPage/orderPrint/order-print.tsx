import styles from './order-print.module.scss';

const OrderPrint = () => {
  return (
    <section className={styles.section}>
      <div className={styles.orderBox}>
        <h3 className={styles.head}>Did you create this artwork?</h3>
        <p className={styles.sub}>
          Order a physical print of this piece and showcase your support for
          science in your home, office, or laboratory!
        </p>
        <button
          className={styles.orderBtn}
          disabled>
          Coming Soon
        </button>
      </div>
    </section>
  );
};

export default OrderPrint;
