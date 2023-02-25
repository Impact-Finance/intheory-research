import FAQs from '@/content/FAQ';
import styles from './accordion.module.scss';

const Accordian = () => {
  return (
    <div>
      <div className={styles.tabs}>
        {FAQs.map((faq, i) => (
          <div
            key={i}
            className={styles.tab}>
            <input
              type="checkbox"
              id={'chck' + i}
            />
            <label
              className={styles.label}
              htmlFor={'chck' + i}>
              {faq.question}
            </label>
            <div className={styles.content}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
