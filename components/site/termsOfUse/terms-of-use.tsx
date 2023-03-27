import termsAndConditions from '@/content/TCs';
import { Fragment } from 'react';
import styles from './terms-of-use.module.scss';

interface TermsObject {}

interface SingleTerm {
  [key: string]: string;
}

const TermsOfUse = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Terms of Use</h2>
      <div className={styles.main}>
        <div className={styles.textBox}>
          {Object.keys(termsAndConditions).map((keyName, i) => (
            <Fragment key={i}>
              <p className={styles.title}>{keyName}</p>
              {Object.keys(
                termsAndConditions[keyName as keyof TermsObject]
              ).map((itemName, n) => (
                <p
                  key={n * i}
                  className={styles.text}>
                  <span className={styles.numberedBullet}>{itemName}</span>{' '}
                  {
                    termsAndConditions[keyName as keyof TermsObject][
                      itemName as keyof SingleTerm
                    ]
                  }
                </p>
              ))}
            </Fragment>
          ))}
          <p className={styles.title}>Contact Information</p>
          <p className={styles.text}>
            If you have any questions or concerns about these Terms, please
            contact us at info@impact-finance.io.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
