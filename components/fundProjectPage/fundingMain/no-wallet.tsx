import { useDynamicContext } from '@dynamic-labs/sdk-react';
import Link from 'next/link';

import styles from './no-wallet.module.scss';

const NoWallet = () => {
  const { setShowAuthFlow } = useDynamicContext();
  return (
    <div className={styles.noWallet}>
      <div className={styles.text}>
        <p>Connect your web3 wallet to support this research.</p>
        <p className={styles.subtext}>
          Your generated artwork will then be sent to your connected wallet
          address as a digital collectible (non-fungible token).
        </p>
      </div>
      <button
        className={styles.connectWallet}
        onClick={() => {
          setShowAuthFlow(true);
        }}>
        Connect Wallet
      </button>
      <div className={styles.help}>
        <p className={styles.helpHead}>Don&apos;t have a web3 wallet yet?</p>
        <p className={styles.helpSub}>
          Check out{' '}
          <span>
            <Link
              href="/submit-project/#FAQ"
              target="_blank"
              rel="noreferrer">
              our FAQ
            </Link>
          </span>{' '}
          to learn how to set one up and why you need one. Then come back here
          to claim your art!
        </p>
      </div>
    </div>
  );
};

export default NoWallet;
