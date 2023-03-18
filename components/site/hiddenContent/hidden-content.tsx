import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import styles from './hidden-content.module.scss';

interface HiddenContentProps {
  revealFunction: Dispatch<SetStateAction<boolean>>;
  context: 'project' | 'funding';
}

const HiddenContent = ({ revealFunction, context }: HiddenContentProps) => {
  return (
    <div className={styles.hiddenContent}>
      <button
        className={styles.exitBtn}
        onClick={() => {
          revealFunction(false);
        }}>
        X
      </button>
      {context === 'project' && (
        <>
          <h3 className={styles.howHead}>How does it work?</h3>
          <ul className={styles.steps}>
            <li className={styles.step}>
              <span>1</span>
              <p>
                Select a research project that you would like to support. Each
                project is from a vetted researcher.
              </p>
            </li>
            <li className={styles.step}>
              <span>2</span>
              <p>
                Click “Fund Research” to generate a completely unique
                project-inspired digital artwork.
              </p>
            </li>
            <li className={styles.step}>
              <span>3</span>
              <p>
                Support the project by purchasing the artwork as a digital
                collectible, sent to your connected wallet address. Proceeds are
                sent directly to the researcher as USDC (on Polygon network) or
                cUSD (on Celo network).
              </p>
            </li>
          </ul>
          <Link
            className={styles.learnMore}
            href="/submit-project/#FAQ"
            target="_blank"
            rel="noreferrer"
            scroll={false}>
            Learn More
          </Link>
        </>
      )}
      {context === 'funding' && (
        <>
          <h3 className={styles.howHead}>Sending a contribution</h3>
          <ul className={styles.steps}>
            <li className={styles.step}>
              <span>1</span>
              <p>
                Make sure that you are connected to either the Polygon or Celo
                network by checking the wallet connection icon in the top right
                of this screen.
              </p>
            </li>
            <li className={styles.step}>
              <span>2</span>
              <p>
                To submit your contribution, you must have sufficient funds in
                your connected wallet (USDC for Polygon and cUSD for Celo). You
                must also have enough funds to cover the small network gas fee
                (paid in MATIC on Polygon and cUSD on Celo). All required assets
                can be purchased through{' '}
                <a
                  className={styles.inlineLink}
                  href="https://ramp.network/buy/"
                  target="_blank"
                  rel="noreferrer">
                  Ramp
                </a>
                . Learn more in{' '}
                <Link
                  className={styles.inlineLink}
                  href="/submit-project/#FAQ"
                  target="_blank"
                  rel="noreferrer"
                  scroll={false}>
                  our FAQ
                </Link>
                .
              </p>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default HiddenContent;
